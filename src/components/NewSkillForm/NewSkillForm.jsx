import { useState } from "react";
import "./NewSkillForm.css";
const NewSkillForm = ({ addSkill }) => {
  const [newSkill, setNewSkill] = useState({
    name: "",
    level: 1
  });

  function handleChange(e) {
    setNewSkill({ ...newSkill, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addSkill(newSkill);
    setNewSkill({
      name: "",
      level: 3
    });
  }

  return (
    <form className="NewSkillForm" onSubmit={handleSubmit}>
      <label htmlFor="skill">Skill</label>
      <input
        className="FormField"
        id="skill"
        name="name"
        type="text"
        onChange={handleChange}
        value={newSkill.name}
      />
      <label htmlFor="level">Level</label>
      <select
        className="FormField"
        name="level"
        id="level"
        onChange={handleChange}
        value={newSkill.level}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <button className="FormSubmit" type="submit">
        ADD SKILL
      </button>
    </form>
  );
};

export default NewSkillForm;
