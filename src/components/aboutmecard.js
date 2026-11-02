import SpotlightCard from './spotlightcard.js';

const Card = ({ title, icon, children }) => {
    return (
        <SpotlightCard className="border-l-4 border-l-red-600">
            <h3 className="font-display text-xl font-bold text-red-600">
                <span aria-hidden="true">{icon}</span> {title}
            </h3>
            <div className="mt-2 text-stone-50">{children}</div>
        </SpotlightCard>
    );
};

export default Card;
