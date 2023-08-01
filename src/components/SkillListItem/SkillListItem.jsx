import "./SkillListItem.css";
const SkillListItem = ({ skill }) => {
  return (
    <li className="SkillListItem">
      {skill.name}
      <span className="level">Level {skill.level}</span>
    </li>
  );
};

export default SkillListItem;
