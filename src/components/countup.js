// CountUp, adapted from React Bits (reactbits.dev, MIT)
import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

const format = (value, separator, suffix) =>
    Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) + suffix;

export default function CountUp({ to, duration = 2, suffix = '', separator = ',', className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (!inView || !ref.current) return;
        if (reduceMotion) {
            ref.current.textContent = format(to, separator, suffix);
            return;
        }
        const controls = animate(0, to, {
            duration,
            ease: 'easeOut',
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = format(v, separator, suffix);
            },
        });
        return () => controls.stop();
    }, [inView, to, duration, separator, suffix, reduceMotion]);

    return <span ref={ref} className={className}>{format(0, separator, suffix)}</span>;
}
