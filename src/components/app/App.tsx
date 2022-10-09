import AboutMe from "../aboutMe";
import './App.scss';
import Home from "../home";
import Header from "../header";
import Skills from "../skills";
import Portfolio from "../portfolio";
import Contacts from "../contacts";

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



        </div>
    );
}

export default App;
