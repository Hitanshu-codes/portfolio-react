// RotatingText, adapted from React Bits (reactbits.dev, MIT)
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function RotatingText({ texts, interval = 2200, className = '' }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setIndex((i) => (i + 1) % texts.length), interval);
        return () => clearInterval(id);
    }, [texts.length, interval]);

    return (
        <span className={`relative inline-flex overflow-hidden align-bottom ${className}`}>
            <span className="sr-only">{texts.join(', ')}</span>
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={index}
                    aria-hidden="true"
                    className="inline-block"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-120%', opacity: 0 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                >
                    {texts[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}
