import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <div id='Nav'>
            <Link to="/"><h1 class='NavLinks'>Home</h1></Link>
            <Link to="/projects"><h1 class='NavLinks'>Projects</h1></Link>
            <Link to="/contact"><h1 class='NavLinks'>Contact</h1></Link>
        </div>
    )
}