import React,{useState,useEffect} from 'react'
import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import Error from "./Components/Error";
import axios from 'axios'
import { Routes, Route } from "react-router-dom";


function App() {
const[data,setData]=useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching first API:', error);
      });
  }, []);

  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage data={data} />} />
          <Route path="/HomePage" element={<HomePage data={data}/>} />
          <Route path="/DetailPage" element={<DetailPage data={data}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
  );
}


export default App;