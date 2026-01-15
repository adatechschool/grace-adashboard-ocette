import { useEffect, useState } from "react";
import { TitresThemes } from "./components/TitresThemes";

import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [value, setValue] = useState([]);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("http://localhost:3000/themes");
      const data = await res.json();
      setValue(data);
      console.log("test", data);
    };

    loadData();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/themes/${id}`, { method: "DELETE" });
    setValue((e) => e.filter((event) => event.id !== id));
  };

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Ajouter un thème</button>
        {showModal && <Modal />}
        <TitresThemes value={value} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
