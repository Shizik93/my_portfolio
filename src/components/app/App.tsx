import AboutMe from "../aboutMe";
import './App.scss';
import Home from "../home";
import Header from "../header";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Contacts from "../contacts";
import Footer from "../footer";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <Home/>
                <AboutMe/>
                <Skills/>
                <Portfolio/>
                <Contacts/>
            </main>
            <Footer/>


        </div>
    );
}

export default App;
