import { useState } from "react";

export const ListeSkills = ({ event }) => {
  const [valid, setValid] = useState(event.skills);
  const loadingStatus = async (id, idx, status) => {
    await fetch(`http://localhost:3000/themes/${id}/skills/${idx}/${status}`, {
      method: "PUT",
    });
    setValid((prev) =>
      prev.map((skill, i) =>
        idx === i ? { ...skill, validation: status } : skill
      )
    );
  };
  return (
    <div>
      <ul>
        {valid.map((skill, idx) => {
          return (
            <li key={idx}>
              {skill.label}
              <select
                onChange={(e) => loadingStatus(event.id, idx, e.target.value)}
                value={skill.validation}
              >
                <option value="OK">OK</option>
                <option value="KO">KO</option>
                <option value="PROGRESS">PROGRESS</option>
              </select>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
