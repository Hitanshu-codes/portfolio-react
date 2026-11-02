import AnimatedContent from './animatedcontent.js';
import ShinyText from './shinytext.js';

export default function SectionHeading({ eyebrow, title, subtitle, className = '' }) {
    return (
        <AnimatedContent className={`mb-10 ${className}`}>
            {eyebrow && (
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">{eyebrow}</p>
            )}
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
            {subtitle && (
                <p className="mt-3 max-w-2xl text-stone-400">
                    <ShinyText text={subtitle} speed={6} />
                </p>
            )}
        </AnimatedContent>
    );
}
