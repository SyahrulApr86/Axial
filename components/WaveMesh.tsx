'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface WaveMeshProps {
  className?: string;
}

export default function WaveMesh({ className }: WaveMeshProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const meshRef = useRef<THREE.Mesh>();
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup - looking straight ahead like from shore
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, -5, 0); // Eye level, slightly above water
    camera.lookAt(0, 0, -10); // Looking straight ahead to horizon

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create wireframe mesh geometry - like ocean surface
    const geometry = new THREE.PlaneGeometry(150, 100, 100, 80);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      wireframe: true,
      transparent: true,
      opacity: 0.1
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = -Math.PI / 2; // Flat horizontal like water
    mesh.position.y = -8; // Even lower, like distant ocean horizon
    mesh.position.z = -20; // Further away like distant horizon
    scene.add(mesh);
    meshRef.current = mesh;

    // Animation function
    const animate = () => {
      if (!meshRef.current) return;

      const time = Date.now() * 0.002;
      const geometry = meshRef.current.geometry as THREE.PlaneGeometry;
      const positions = geometry.attributes.position;

      // Create wave effect
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        
        const wave1 = Math.sin(x * 0.5 + time) * 0.3;
        const wave2 = Math.sin(y * 0.3 + time * 1.5) * 0.2;
        const wave3 = Math.sin((x + y) * 0.2 + time * 0.8) * 0.15;
        
        // Add noise for more realistic displacement
        const noise1 = Math.sin(x * 2 + time * 3) * Math.cos(y * 1.5 + time * 2) * 0.1;
        const noise2 = Math.sin(x * 1.3 + y * 1.1 + time * 1.8) * 0.08;
        const noise3 = Math.cos(x * 0.8 + y * 1.7 + time * 2.2) * 0.06;
        
        positions.setZ(i, wave1 + wave2 + wave3 + noise1 + noise2 + noise3);
      }

      positions.needsUpdate = true;
      
      // Rotate mesh slowly
      meshRef.current.rotation.z = Math.sin(time * 0.2) * 0.1;

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Handle theme changes
    const updateMeshColor = () => {
      if (!meshRef.current) return;
      
      const isDark = document.documentElement.classList.contains('dark');
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      material.color.setHex(isDark ? 0xffffff : 0x000000);
      material.opacity = isDark ? 0.08 : 0.15;
    };

    // Initial color setup
    updateMeshColor();

    // Watch for theme changes
    const observer = new MutationObserver(updateMeshColor);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}