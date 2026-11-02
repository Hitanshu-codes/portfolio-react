// ClickSpark, adapted from React Bits (reactbits.dev, MIT)
import { useEffect, useRef } from 'react';

export default function ClickSpark({ sparkColor = '#dc2626', sparkSize = 10, sparkRadius = 18, sparkCount = 8, duration = 400, children }) {
    const canvasRef = useRef(null);
    const sparksRef = useRef([]);
    const frameRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Only animate while sparks are alive, so the page costs nothing when idle.
        const draw = (now) => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            sparksRef.current = sparksRef.current.filter((spark) => {
                const elapsed = now - spark.start;
                if (elapsed >= duration) return false;
                const progress = elapsed / duration;
                const eased = progress * (2 - progress);
                const distance = eased * sparkRadius;
                const length = sparkSize * (1 - eased);
                ctx.strokeStyle = sparkColor;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(spark.x + distance * Math.cos(spark.angle), spark.y + distance * Math.sin(spark.angle));
                ctx.lineTo(
                    spark.x + (distance + length) * Math.cos(spark.angle),
                    spark.y + (distance + length) * Math.sin(spark.angle)
                );
                ctx.stroke();
                return true;
            });
            frameRef.current = sparksRef.current.length ? requestAnimationFrame(draw) : null;
        };

        const handleClick = (e) => {
            const start = performance.now();
            for (let i = 0; i < sparkCount; i++) {
                sparksRef.current.push({ x: e.clientX, y: e.clientY, angle: (2 * Math.PI * i) / sparkCount, start });
            }
            if (!frameRef.current) frameRef.current = requestAnimationFrame(draw);
        };

        resize();
        window.addEventListener('resize', resize);
        window.addEventListener('click', handleClick);
        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('click', handleClick);
            if (frameRef.current) cancelAnimationFrame(frameRef.current);
            frameRef.current = null;
        };
    }, [sparkColor, sparkSize, sparkRadius, sparkCount, duration]);

    return (
        <>
            {children}
            <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[60]" aria-hidden="true" />
        </>
    );
}
