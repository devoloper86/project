import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function App() {
  const [apiData, setApiData] = useState([]);
  console.log(apiData);

  useEffect(() => {
    const getApi = () => {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setApiData(res.data))
        .catch((error) => console.log(error));
    };
    getApi();
  }, []);
  return (
    <div className="App">
      <Navbar />
      {apiData.map((pro) => (
        <Link to={`product/${pro.id}`} state={pro}>
          <div className="pro_image">
            <img src={pro.image} alt="" />
            <h1>{pro.title}</h1>
            <p>{pro.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default App;
