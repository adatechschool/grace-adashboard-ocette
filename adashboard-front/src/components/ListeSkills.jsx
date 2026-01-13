export const ListeSkills = ({ event }) => {
  return (
    <div>
      <ul>
        {event.skills.map((skill) => {
          return <li key={skill.id}>{skill.label}</li>;
        })}
      </ul>
    </div>
  );
};
