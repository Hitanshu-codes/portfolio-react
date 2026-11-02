export default function AllSkillCard({ iconPath, name }) {
    return (
        <div>
            <img src={iconPath} alt={name} title={name} className="h-24 w-24" />
        </div>
    );
}
