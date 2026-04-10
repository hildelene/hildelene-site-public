'use client';

import { useEffect, useRef } from 'react';
import { useScrollPosition } from '@/app/hooks/useScrollPosition';
import OceanWaves from './OceanWaves';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const scrollY = useScrollPosition();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: any[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    // Criar partículas (80 é bom para performance)
    particles = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animar partículas
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce nas bordas
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);

        // Azul + chance de dourado raro
        ctx.fillStyle =
          Math.random() < 0.015
            ? 'rgba(242, 190, 115, 0.9)'
            : 'rgba(0, 180, 255, 0.6)';

        ctx.fill();
      });

      // Desenhar conexões entre partículas próximas
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = 'rgba(0, 150, 255, 0.08)';
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  // Opacity fade com scroll
  const opacity = Math.max(1 - scrollY * 0.0005, 0.3);

  return (
    <div className="background" style={{ opacity }}>
      {/* Partículas - mais distantes */}
      <canvas
        ref={canvasRef}
        className="canvas"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Ondas - médio */}
      <div
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <OceanWaves scrollY={scrollY} />
      </div>

      {/* Gradiente - intermediário */}
      <div
        className="gradient"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Glows adicionais */}
      <div className="glowLeft" />
      <div className="glowRight" />
    </div>
  );
}
