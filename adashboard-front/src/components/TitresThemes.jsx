import { ListeSkills } from "./ListeSkills";

export const TitresThemes = ({ value, handleDelete }) => {
  return (
    <div>
      {value.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.name}</h2>
            <ListeSkills event={event} />
            <button onClick={() => handleDelete(event.id)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
};
