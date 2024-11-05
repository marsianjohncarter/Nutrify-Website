import About from "../components/About/About";
import Carousel from "../components/Carousel/Carousel";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Footer from '../components/Footer/Footer';
import Pricing from '../components/Pricing/Pricing';

export default function Home() {
    return (
        <div>
            <Jumbotron />
            <div className="mt-10">
                <Carousel />
                <About />
            </div>
            <Pricing />
        </div>
    );
};
