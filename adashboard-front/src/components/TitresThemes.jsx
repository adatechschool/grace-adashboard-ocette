import { ListeSkills } from "./ListeSkills";
import { BoutonRemove } from "./BoutonRemove";

export const TitresThemes = ({ value, handleDelete }) => {
  return (
    <div>
      {value.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.name}</h2>
            <ListeSkills event={event} />
            <BoutonRemove handleDelete={handleDelete} id={event.id} />
          </div>
        );
      })}
    </div>
  );
};
