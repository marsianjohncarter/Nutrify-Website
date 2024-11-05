import { marked } from "marked";
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
        fetch("/blog-post-1.md")
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
            {/* Render sanitized HTML content */}
            <div dangerouslySetInnerHTML={{ __html: safeHtmlContent }} />
        </div>
    );
}
