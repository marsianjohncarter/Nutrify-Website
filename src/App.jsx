import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import BlogPosts from "./components/BlogPosts/BlogPosts";
import BlogPost from "./components/BlogPost/BlogPost";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

import "./App.css";

const navLinks = [
    { text: "Home", href: "/", current: "True" },
    { text: "Launch Blog Post", href: "/launch" },
];

const blogPosts = [
    {
        id: 0,
        title: "Nutrify Website Release",
        date: "October 31, 2024",
        link: "/blog-post-1",
    },
];

function App() {
    return (
        <>
            <Helmet>
                <title>Nutrify: Whole Food Scanner</title>
                <meta
                    name="description"
                    content="Nutrify is an iOS application designed to make learning about whole foods fun and in turn, reduce the intake of ultra-processed foods. It provides personalized nutrition recommendations, tracks your daily food intake, and offers a community to share your progress with others. It is the perfect tool for anyone looking to improve their health and wellbeing. Nutrify is available on the App Store."
                />
            </Helmet>
            <Navbar navLinks={navLinks} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/launch"
                    element={<BlogPosts blogPosts={blogPosts} />}
                />
                <Route
                    path="/launch/:id"
                    element={<BlogPost blogPosts={blogPosts} />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
