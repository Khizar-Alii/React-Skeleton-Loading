import React, { createContext, useMemo, useReducer, useState } from "react";
import "./Contact.css";
import { FormReducer, Intial_State } from "./FormReducer";
// import { Link } from "react-router-dom";

function Contact() {
  const [state, dispatch] = useReducer(FormReducer, Intial_State);
  const [submitMessage, setSubmitMessage] = useState(null);
  const initialState = useMemo(() => Intial_State, []);

  const handleName = (e) => {
    dispatch({
      type: "Change_name",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleEmail = (e) => {
    dispatch({
      type: "Change_email",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleMessage = (e) => {
    dispatch({
      type: "Change_message",
      payload: { name: e.target.name, value: e.target.value },
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted", state);
    setSubmitMessage("Form Submitted")
    e.target.reset();
    dispatch({ type: "Reset", payload: initialState });
  };
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <form action="/" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={handleName}
          value={state.name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          required
          onChange={handleEmail}
          value={state.email}

        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          value={state.message}
          onChange={handleMessage}
        ></textarea>
        {/* <Link to='/user' type="submit">Sumbit</Link> */}
        <input type="submit" value="Send"></input>
      </form>
      {submitMessage && <p>{submitMessage}</p>}
    </div>
  );
}

export default Contact;
