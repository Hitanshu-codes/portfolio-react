// Magnet, adapted from React Bits (reactbits.dev, MIT)
import { useEffect, useRef, useState } from 'react';

export default function Magnet({ children, padding = 60, strength = 3, className = '' }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!ref.current) return;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const near =
                Math.abs(centerX - e.clientX) < width / 2 + padding &&
                Math.abs(centerY - e.clientY) < height / 2 + padding;
            setActive(near);
            setPosition(near ? { x: (e.clientX - centerX) / strength, y: (e.clientY - centerY) / strength } : { x: 0, y: 0 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [padding, strength]);

    return (
        <div ref={ref} className={`inline-block ${className}`}>
            <div
                style={{
                    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
                    transition: active ? 'transform 0.3s ease-out' : 'transform 0.5s ease-in-out',
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </div>
    );
}
