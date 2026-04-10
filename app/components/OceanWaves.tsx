'use client';

import { useEffect, useRef } from 'react';

interface OceanWavesProps {
  scrollY?: number;
}

export default function OceanWaves({ scrollY = 0 }: OceanWavesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let t = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    resize();

    const drawWave = (
      amplitude: number,
      wavelength: number,
      speed: number,
      yOffset: number,
      color: string
    ) => {
      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const y = Math.sin((x + t * speed) / wavelength) * amplitude + yOffset;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();

      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Offset das ondas reage ao scroll
      const baseHeight = height * 0.8 + scrollY * 0.1;

      // Camada mais distante (fundo)
      drawWave(
        20,
        200,
        0.3,
        baseHeight - 60,
        'rgba(0, 120, 255, 0.08)'
      );

      // Camada média
      drawWave(
        25,
        150,
        0.5,
        baseHeight - 30,
        'rgba(0, 150, 255, 0.12)'
      );

      // Camada frontal (mais visível)
      drawWave(
        30,
        120,
        0.7,
        baseHeight,
        'rgba(0, 180, 255, 0.18)'
      );

      t += 1;
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, [scrollY]);

  return <canvas ref={canvasRef} className="waves" />;
}
