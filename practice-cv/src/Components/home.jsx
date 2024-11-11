import Navbar from "./navbar";
import logo from '../assets/images/hemsidelogo-transparent.png';

export default function Home() {
    return (
        <div>
            <img src={logo} alt="Home page logo"></img>
            <Navbar/>
        </div>

    );
}