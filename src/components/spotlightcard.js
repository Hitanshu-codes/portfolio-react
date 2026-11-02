// SpotlightCard, adapted from React Bits (reactbits.dev, MIT)
import { useRef } from 'react';

export default function SpotlightCard({ children, className = '', spotlightColor = 'rgba(220, 38, 38, 0.25)' }) {
    const divRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = divRef.current.getBoundingClientRect();
        divRef.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        divRef.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={`card-spotlight relative overflow-hidden rounded-2xl border border-stone-800 bg-stone-900/60 p-6 ${className}`}
        >
            {children}
        </div>
    );
}
