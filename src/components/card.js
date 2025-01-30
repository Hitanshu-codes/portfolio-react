const Card = ({ title, icon, children }) => {
    return (
        <div className="bg-stone-600 bg-opacity-40 p-6 shadow-md rounded-xl border-l-4 border-red-600">
            <h3 className="text-xl font-bold text-red-600">{icon} {title}</h3>
            <div className="mt-2 text-stone-50">{children}</div>
        </div>
    );
};

export default Card;
