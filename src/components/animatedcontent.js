// AnimatedContent, adapted from React Bits (reactbits.dev, MIT)
import { motion } from 'framer-motion';

export default function AnimatedContent({ children, delay = 0, distance = 40, direction = 'vertical', reverse = false, className = '' }) {
    const offset = (reverse ? -1 : 1) * distance;
    const from = direction === 'horizontal' ? { x: offset } : { y: offset };

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, ...from }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}
