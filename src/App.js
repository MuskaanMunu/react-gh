import { Link } from "react-router-dom";
import './App.css'
function App() {
  return (
    <div className="gh_pages">
      <h2 className="first">An Example Project</h2>
     <h3 className="second">Demonstrating how to deploy a React App to Github</h3>
     <p>
     Pretium integer elementum eu suspendisse turpis condimentum justo tristique commodo. Id sit at enim elit volutpat. Diam nunc rhoncus nulla quam ornare auctor non. Ipsum tristique cursus eleifend mi ultrices risus ultrices ut lacus. Ipsum lorem tellus ut aenean in risus dapibus nibh gravida.
     </p>
     <h3>Go to <Link className="third" to="/about">About</Link></h3>
     
    </div>
  );
}
export default App;


//npm install react-router-dom