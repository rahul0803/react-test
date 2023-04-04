import React from "react";

const DetailPage = ({data}) => {
  console.log(data);
  return (
    <div className="detailpage">

      <div className="detailpageheading">Details Page For Post With ID {data[0].id}</div> <br />

      <div className="image">
            <img className="image" src={`https://picsum.photos/200?random=${data.id}`} alt="pic"/>
          </div>
          <br />

        <div className="">User ID : {data[0].userId}</div>
        <br />

          <div className="">Title : {data[0].title} </div>
          <br />

          <div className="">Body : {data[0].body}</div>
          </div>
  )
}


export default DetailPage;