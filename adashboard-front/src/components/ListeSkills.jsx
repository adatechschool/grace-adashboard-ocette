export const ListeSkills = ({ event }) => {
  const loadingStatus = async (id, idx, status) => {
    await fetch(`http://localhost:3000/themes/${id}/skills/${idx}/${status}`, {
      method: "PUT",
    });
  };
  return (
    <div>
      <ul>
        {event.skills.map((skill, idx) => {
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
