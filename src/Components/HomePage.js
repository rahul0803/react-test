import React from "react";
import { Link } from "react-router-dom";


const HomePage = ({data}) => {
    return (
    <>
      <div className="homePage">

         {data.map((data)=>{
        return (
          <div className="cardDetails">
      <div className="image">
            <img className="image" src={`https://picsum.photos/200?random=${data.id}`} alt="pic"/>
          </div>

        <div className="price">User ID : {data.userId}</div>

          <div className="title">Title : {data.title.slice(0, 20)}... </div>

          <div className="price">Body : {data.body.slice(0, 50)}...</div>

          <Link to= "/DetailPage" className="btn">
             Read More
          </Link>
          </div>
        )})
      }
      </div>
    </>
  );
};


export default HomePage;