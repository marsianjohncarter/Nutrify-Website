import { marked } from "marked";
import { Helmet } from 'react-helmet';
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./BlogPost.css";

export default function BlogPost({ blogPosts }) {
    const { id } = useParams();
    const blogPost = blogPosts.find((post) => post.id === parseInt(id));
    const [markdownContent, setMarkdownContent] = useState("");

    useEffect(() => {
        // Fetch the markdown file and set the markdown content
        fetch(`${blogPost.file}.md`)
            .then((response) => response.text())
            .then((text) => {
                setMarkdownContent(text);
                console.log("Fetched Markdown Content:", text); // Check fetched markdown content
            });
    }, []);

    // Convert markdownContent to HTML using `marked` and sanitize it
    const unsafeHtmlContent = marked(markdownContent);
    const safeHtmlContent = DOMPurify.sanitize(unsafeHtmlContent);

    return (
        <div id="blog" className="pt-40 p-10 lg:pl-96 lg:pr-96 md:pl-28 md:pr-28">
            <Helmet>
                <title>Launch Blog Post</title>
                <meta
                    name="description"
                    content="Nutrify is an iOS application designed to make learning about whole foods fun and in turn, reduce the intake of ultra-processed foods. It provides personalized nutrition recommendations, tracks your daily food intake, and offers a community to share your progress with others. It is the perfect tool for anyone looking to improve their health and wellbeing. Nutrify is available on the App Store.  Whole food scanner, nutrition and calorie tracker, visual healthy food diary."
                />
            </Helmet>
            {/* Render sanitized HTML content */}
            <div dangerouslySetInnerHTML={{ __html: safeHtmlContent }} />
        </div>
    );
}
