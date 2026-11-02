// TiltedCard, adapted from React Bits (reactbits.dev, MIT)
import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

const springValues = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({ children, className = '', rotateAmplitude = 10, scaleOnHover = 1.04 }) {
    const ref = useRef(null);
    const rotateX = useSpring(0, springValues);
    const rotateY = useSpring(0, springValues);
    const scale = useSpring(1, springValues);

    function handleMouse(e) {
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
        rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    }

    return (
        <div
            ref={ref}
            className={`[perspective:800px] ${className}`}
            onMouseMove={handleMouse}
            onMouseEnter={() => scale.set(scaleOnHover)}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div className="h-full w-full [transform-style:preserve-3d]" style={{ rotateX, rotateY, scale }}>
                {children}
            </motion.div>
        </div>
    );
}
