import AboutMe from "../aboutMe";
import './App.scss';
import Home from "../home";
import Header from "../header";
import Skills from "../skills";

function App() {
    return (
        <div className={'App'}>
            <Header/>
            <main>
                <Home/>
                <AboutMe/>
                <Skills/>
            </main>



        </div>
    );
}

export default App;
