import React, { useState, useEffect } from "react";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto my-8 px-4 space-y-12">
            {/* First paragraph with image on the right */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8 pr-20 pl-20 md:p-0">
                <p className="md:w-1/2 text-gray-700">
                    This is the first paragraph. It can contain any information
                    you want to display. You can describe your content, product,
                    or service here to give readers a better understanding.
                </p>
                <img
                    src="https://placehold.co/200x200?text=Dummy+Image&font=raleway"
                    alt="Content image"
                    className="md:w-1/2 w-full  mt-4 md:mt-0 rounded-lg shadow-lg"
                />
            </div> 

            {/* Second paragraph with image on the left */}
            <div className="flex flex-col md:flex-row-reverse items-center md:space-x-reverse md:space-x-8 pr-20 pl-20 md:p-0">
                <p className="md:w-1/2 text-gray-700">
                    This is the second paragraph. It can go into more detail,
                    providing additional insights or context to support your
                    message.
                </p>
                <img
                    src="https://placehold.co/200x200?text=Dummy+Image+2&font=raleway"
                    alt="Content image"
                    className="md:w-1/2 w-full  mt-4 md:mt-0 rounded-lg shadow-lg"
                />
            </div>
            {/* First paragraph with image on the right */}
            <div className="flex flex-col md:flex-row items-center md:space-x-8 pr-20 pl-20 md:p-0">
                <p className="md:w-1/2 text-gray-700">
                    This is the third paragraph. It can contain any information
                    you want to display. You can describe your content, product,
                    or service here to give readers a better understanding.
                </p>
                <img
                    src="https://placehold.co/200x200?text=Dummy+Image+3&font=raleway"
                    alt="Content image"
                    className="md:w-1/2 w-full  mt-4 md:mt-0 rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}
