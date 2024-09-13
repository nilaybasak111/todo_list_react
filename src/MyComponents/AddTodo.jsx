import React, { useState } from "react";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  // Creating Submit Function
  const submit = (e)=> {
    e.preventDefault(); // This help to stop reloding when we are putting some value
    if(!title || !desc) {
      alert("Please Enter Details Correctly")
    } else {
      props.addtodo(title,desc)
      setTitle("")
      setDesc("")
    }
  }


  return (
    <div className="container">
      <h3 className="text-center my-3"> Add a Todo </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            type="text" // To hide the Password use this, type="password"
            value={desc}
            onChange={(e)=>{setDesc(e.target.value)}}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
