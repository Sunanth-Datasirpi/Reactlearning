import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Images from "./components/Images";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then(
      (response) =>
        response.json().then((data) => {
          setImages(data);
        })
    );
  }, []);

  return (
    <div className="App">
      <Images items={images} />
    </div>
  );
}

export default App;
