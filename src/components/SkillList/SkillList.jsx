import SkillListItem from "../SkillListItem/SkillListItem";

const SkillList = ({ skills }) => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <SkillListItem skill={skill} key={index} />
      ))}
    </ul>
  );
};

export default SkillList;
