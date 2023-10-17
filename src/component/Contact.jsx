import horizontal from '../css/MainBody.module.css'
import classes from '../css/MainBody.module.css'
const Contact = () => {
  return (
    <div >
        <h3>Contacts</h3>
        <hr className={horizontal.hr}/>
        <p>Do you want us to style your home? Fill out the form and fill me in with the details :) We love meeting new people!</p>
        <form className={classes.contact}>
            <label for="name">name</label>
            <input type="text"/>
            <label for="email">email</label>  
            <input type="text"/>
            <label for="Message">Message</label >
            <input type="text"/>
            <input type="submit" value="Send Message"/>
        </form>
    </div>
  )
}

export default Contact