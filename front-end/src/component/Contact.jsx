import horizontal from "../css/MainBody.module.css";
import classes from "../css/contact.module.css";
const Contact = () => {
  return (
    <div className={classes.contact}>
      <h3 id="contact">Contacts</h3>
      <hr className={horizontal.hr} />
      <p>
        Do you want us to style your home? Fill out the form and fill me in with
        the details :) We love meeting new people!
      </p>
      <form method="POST" action="/sendMessage">
        <label for="name">Name</label>
        <input type="text" />
        <label for="email">Email</label>
        <input type="text" />
        <label for="Message">Message</label>
        <input type="text" />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
