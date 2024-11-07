import { Helmet } from "react-helmet";

import About from "../components/About/About";
import Carousel from "../components/Carousel/Carousel";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Pricing from "../components/Pricing/Pricing";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Nutrify: Whole Food Scanner</title>
                <meta
                    name="description"
                    content="Nutrify is an iOS application designed to make learning about whole foods fun and in turn, reduce the intake of ultra-processed foods. It provides personalized nutrition recommendations, tracks your daily food intake, and offers a community to share your progress with others. It is the perfect tool for anyone looking to improve their health and wellbeing. Nutrify is available on the App Store.  Whole food scanner, nutrition and calorie tracker, visual healthy food diary."
                />
            </Helmet>
            <Jumbotron />
            <div className="mt-10">
                <Carousel />
                <About />
            </div>
            <Pricing />
        </div>
    );
}
