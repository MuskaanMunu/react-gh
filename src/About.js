import { Link } from "react-router-dom";
import './About.css';
const About = () => {
    return ( 
        
        <div className="first">
          <h2>About Us</h2> 
          <p>
          Lorem ipsum dolor sit amet consectetur. <br/>Sed augue nullam a ornare venenatis donec blandit. <br />Amet duis quam est elit pellentesque nibh ultricies.<br/> Nisl libero aliquam ut nulla integer dignissim consequat sit nulla.<br/> Vestibulum vitae quis et ut.
          </p>
          <h3>Go to <Link to="/">Home</Link></h3>
        </div>
     
        );
        
}
export default About;