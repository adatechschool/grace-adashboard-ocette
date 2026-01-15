export const BoutonRemove = ({ handleDelete, id }) => {
  return (
    <>
      <button onClick={() => handleDelete(id)}>Supprimer</button>
    </>
  );
};
