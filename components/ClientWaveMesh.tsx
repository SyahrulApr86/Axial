'use client';

import dynamic from 'next/dynamic';

const WaveMesh = dynamic(() => import('./WaveMesh'), { 
  ssr: false,
  loading: () => <div className="fixed inset-0 -z-10 pointer-events-none" />
});

export default function ClientWaveMesh() {
  return <WaveMesh />;
}