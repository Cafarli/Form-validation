import "./form.css";
import React, { useState } from "react";

export function Form() {
  const [state, setState] = useState({
    fullname: "",
    phone: "",
    email: "",
    pass: "",
    againpass: "",
  });

  const handleFullname = (event) => {
    setState({...state, fullname: event.target.value});
  };

  const handlePhone = (event) => {
    setState({...state, phone: event.target.value});
  };

  const handleEmail = (event) => {
    setState({...state, email: event.target.value});
  };

  const handlePass = (event) => {
    setState({...state, pass: event.target.value});
  };

  const handleAgainpass = (event) => {
    setState({...state, againpass: event.target.value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(state.pass !== state.againpass){
      alert('Something went wrong. Try again!');
      console.log(state);
      return;
    }
    
    alert("Form submitted");
    console.log(state);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="li-pair">
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            name="fullname"
            className="fullname"
            value={state.fullname}
            onChange={handleFullname}
            required
          />
        </div>
        <div className="li-pair">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="email"
            value={state.email}
            onChange={handleEmail}
            required
          />
        </div>
        <div className="li-pair">
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            name="phone"
            className="phone"
            value={state.phone}
            onChange={handlePhone}
            required
          />
        </div>
        <div className="li-pair">
          <label htmlFor="pass">Password</label>
          <input
            type="password"
            className="pass"
            value={state.pass}
            onChange={handlePass}
            required
          />
        </div>
        <div className="li-pair">
          <label htmlFor="againPass">Again password</label>
          <input
            type="password"
            className="againPass"
            value={state.againpass}
            onChange={handleAgainpass}
            required
          />
        </div>
        <div className="sbutton">
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  );
}
