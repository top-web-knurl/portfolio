import { BrowserRouter } from "react-router-dom";

import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    StarsCanvas,
    Tech,
    Works,
} from "./components";
const App = () => {
    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-top-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />       
                  <div className="relative z-2 py-16">
                    <Experience />
                    <Tech />
                    <Works />
                    <Feedbacks />
                    <Contact />
                    <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
