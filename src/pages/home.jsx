import React, { useState, useEffect } from "react";
import ProductCard from "../components/productCard";
import axios from "axios";
import "../components/style/homeStyle.css";

const API_BACKEND_CATS = "http://127.0.0.1:3001/";
const API_BACKEND_REGISTER = "http://127.0.0.1:3002/";

const Home = () => {
    const [gatos, setGatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Realiza la solicitud GET para obtener los gatos
        const response = await axios.get(`${API_BACKEND_CATS}gatos`);

        // Actualiza el estado con los datos obtenidos
        setGatos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home-container">
        <h1 className='conocelos'>Conócelos...</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {gatos.map((gato, index) => (
            <ProductCard key={index} data={gato} />
          
        ))}
        </div>
    </div>
  )
}

export default Home