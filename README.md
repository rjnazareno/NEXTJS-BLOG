// pages/Blog.tsx
import React from 'react';
import Image from 'next/image';

function Blog() {
  return (
    <div className="layout">
      <div className="content-container">
        <h1>My Blog</h1>
        <div className="image-container">
          <div className="rounded-image">
            <Image
              src="/profile.jpg"
              alt="My Picture"
              width={200}
              height={200}
            />
          </div>
        </div>
        <h2>My Name</h2>
        <p>Resty James M. Nazareno</p>
        <h2>About Me</h2>
        <p>
          I'm a computer engineering student and I have always been fascinated by technology. Some of my hobbies include playing video games, hiking, and reading. I took up computer engineering because I wanted to create technology that can make a positive impact on people's lives. In five years, I see myself working in the tech industry and continuously learning new skills to stay ahead of the curve.
        </p>
        <h2>Expectations for this Subject</h2>
        <ul>
          <li>To gain a deeper understanding of web development </li>
          <li>To learn how to create responsive and user-friendly websites</li>
          <li>To gain practical experience by building a blog </li>
        </ul>
      </div>

      <style jsx>{`
        .layout {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }

        .content-container {
          width: 80%;
          max-width: 800px;
          text-align: center;
        }

        .image-container {
          margin-bottom: 20px;
        }

        .rounded-image {
          width: 200px;
          height: 200px;
          overflow: hidden;
          border-radius: 50%;
          margin: 0 auto;  /* Center the image horizontally */
        }

        .rounded-image img {
          object-fit: cover;
          border-radius: 50%;
          width: 100%;  /* Make the image fill the container */
          height: 100%;
        }

        h1, h2, p, ul {
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

export default Blog;

