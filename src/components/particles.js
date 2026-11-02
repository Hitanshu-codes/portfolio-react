// Particles background, adapted from React Bits (reactbits.dev, MIT) using a plain 2D canvas
import { useEffect, useRef } from 'react';

const DEFAULT_COLORS = ['#dc2626', '#ffffff', '#7f1d1d'];

export default function Particles({ count = 70, colors = DEFAULT_COLORS, speed = 0.15 }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let frame;
        let particles = [];

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const total = window.innerWidth < 640 ? Math.round(count / 2) : count;
            particles = Array.from({ length: total }, () => ({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: Math.random() * 1.6 + 0.4,
                vx: (Math.random() - 0.5) * speed,
                vy: (Math.random() - 0.5) * speed,
                color: colors[Math.floor(Math.random() * colors.length)],
                alpha: Math.random() * 0.5 + 0.2,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            for (const p of particles) {
                p.x = (p.x + p.vx + window.innerWidth) % window.innerWidth;
                p.y = (p.y + p.vy + window.innerHeight) % window.innerHeight;
                ctx.globalAlpha = p.alpha;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            ctx.globalAlpha = 1;
            if (!reduceMotion && !document.hidden) frame = requestAnimationFrame(draw);
        };

        const handleVisibility = () => {
            cancelAnimationFrame(frame);
            if (!document.hidden && !reduceMotion) frame = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            resize();
            if (reduceMotion) draw();
        };

        resize();
        draw();
        window.addEventListener('resize', handleResize);
        document.addEventListener('visibilitychange', handleVisibility);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('resize', handleResize);
            document.removeEventListener('visibilitychange', handleVisibility);
        };
    }, [count, colors, speed]);

    return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 h-full w-full" aria-hidden="true" />;
}
