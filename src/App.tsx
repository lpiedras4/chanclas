import './App.css';
import tealCoralFlipFlops from './assets/a_professional_studio_shot_of_stylish_teal_and_coral_flip_flops_on_a_clean.png';

import Footer from "./components/Footer/Footer.tsx";
import NovedadesSection from "./components/NovedadesSection/NovedadesSection.tsx";
import floralFlipFlops from './assets/colorful_summer_flip_flops_with_floral_patterns_for_women_beach_vibe_high.png'
import sportSlides from './assets/sporty_slides_for_men_modern_design_black_and_white_color_scheme_professional.png';
import leatherSandals from './assets/a_professional_studio_shot_of_classic_beach_sandals_comfortable_leather.png';
import Minigame from "./components/minigame/Minigame.tsx";
import TopNavBar from "./components/Header/TopNavBar.tsx";
import HeroSection from "./components/Section/HeroSection.tsx";
import GiveawaySection from "./components/Section/GiveawaySection.tsx";

export default function App() {
    return (
        <div className="app-container">
            {/* TopNavBar */}
            <TopNavBar/>
            <main className="main-content">
                {/* Hero Section */}
                <HeroSection/>
                {/* Giveaway Section */}
               <GiveawaySection/>

                {/* Minigame section*/}
                <Minigame></Minigame>

                {/* Novedades Section */}
                <NovedadesSection></NovedadesSection>
            </main>

            {/* Footer */}
            <Footer></Footer>
        </div>
    );
}
