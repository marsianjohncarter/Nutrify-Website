import { Routes, Route } from "react-router-dom";

import BlogPosts from "./components/BlogPosts/BlogPosts";
import BlogPost from "./components/BlogPost/BlogPost";
import Navbar from "./components/Navbar/Navbar"; 
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";

import "./App.css";

const navLinks = [
    { text: "Home", href: "#", current: "True" },
    { text: "Launch Blog Post", href: "/launch" },
    { text: "Services", href: "#" },
    { text: "Contact", href: "#" },
];

const blogPosts = [
    {
        id: 0,
        title: "Nutrify Website Release",
        date: "October 31, 2024",
        link: '/blog-post-1',   
    },
];

function App() {
    return (
        <>
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
