import { useEffect, useState } from "react";
import horizontal from "../css/MainBody.module.css";
import classes from "../css/contact.module.css";
import { useContext } from "react";
import { GlobalContext } from "../store/store";
import Loader from './Loader'
import {toast} from 'react-toastify'

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading,setLoading] = useState(false)

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setLoading(!isLoading)
    console.log(isLoading)
    const data = { name, email, message };
    console.log(JSON.stringify(data)), console.log(data);
    fetch("http://localhost:5000/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) =>  {
        response.json()
        setLoading(false)
        toast.success("Message recieved succesfully")
      })
      .then((result) => console.log(result))
      .catch((error) => {
        setLoading(false)
        toast.error("Server busy , Try again later")
      });
  };
  const { handleMainBodyClick } = useContext(GlobalContext)
  return (
    <div className={classes.contact} onClick={() => handleMainBodyClick()} >
      <h3 id="contact">Contacts</h3>
      <hr className={horizontal.hr} />
      <p>
        Do you want us to style your home? Fill out the form and fill me in with
        the details :) We love meeting new people!
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          onChange={(ev) => setEmail(ev.target.value)}
          required
        />
        <label htmlFor="message">Message</label>
        <input
          type="text"
          onChange={(ev) => setMessage(ev.target.value)}
          required
        />
        <input type="submit" value="Send Message" />
      </form>
      {isLoading && <Loader />}
    </div>
  );
};

export default Contact;
