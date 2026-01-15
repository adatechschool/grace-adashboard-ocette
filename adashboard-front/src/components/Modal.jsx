import { use, useState } from "react";

function Modal() {
  return (
    <div>
      <form>
        <div>
          <label>Name :</label>
          <input type="text" placeholder="Entrer le nom du thème" />
        </div>
        <div>
          <label>Skills :</label>
          <input type="text" placeholder="Je sais..." />
          <input type="text" placeholder="Je sais..." />
          <input type="text" placeholder="Je sais..." />
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Modal;
