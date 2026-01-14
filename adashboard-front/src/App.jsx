import { useEffect, useState } from "react";
import { TitresThemes } from "./components/TitresThemes";

import "./App.css";

function App() {
  const [value, setValue] = useState([]);
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
        <TitresThemes value={value} handleDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
