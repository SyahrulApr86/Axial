'use client';

import { useEffect, useState } from 'react';
import WaveMesh from './WaveMesh';

export default function ClientWaveMesh() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Add small delay to ensure proper hydration
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything on server or until fully hydrated
  if (typeof window === 'undefined' || !mounted) {
    return null;
  }

  return <WaveMesh />;
}