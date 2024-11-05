import React from 'react';
import { marked } from 'marked';

export default function BlogPosts({ blogPosts })  {
    return (
        <div  className="blog-posts pt-24  mb-96 sm:mb-96 md:mb-96 lg:mb-64">

            <h1 className='text-3xl font-bold base-font text-center mb-10 '>Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogPosts.map((post, index) => (
                <a href={`/launch/${post.id}`}>
                <div className="p-4 max-w-sm" key={index}>
                    <div className="flex rounded-lg h-full bg-gray-800 p-8 flex-col">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                        </div>
                        <h2 className="text-white text-lg font-medium">
                          {post.title}
                        </h2>
                        
                      </div>
                      <div className="flex flex-col justify-between flex-grow">

                        <em className="mt-2 leading-relaxed text-base text-slate-100 text-bold">
                          {post.date}
                        </em>
                        <a
                          href={`/launch/${post.id}`}
                          className="mt-3 text-white hover:text-blue-600 inline-flex items-center"
                        >
                          Learn More
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  </a>
                ))}
            </div>
        </div>
    );
}


// const BlogPosts = ({ markdownText }) => {
//   const htmlContent = marked.parse(markdownText);

//   return (
//     <div
//       dangerouslySetInnerHTML={{ __html: htmlContent }}
//     />
//   );
// };

// // Usage
// const App = () => {
//   const markdownString = '**strong**';

//   return (
//     <div>
//       <h1>Markdown in JSX</h1>
//       <MarkdownDisplay markdownText={markdownString} />
//     </div>
//   );
// };

// export default App;
