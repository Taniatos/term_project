import React from "react";
import Navigation from "../Navigation/Navigation";
import "./HobbieDefault.css";
import Footer from "../Footer/Footer";

function HobbieDefault({ title, description, sections }) {
  return (
    <div className="main-container">
      <Navigation />
      <main className="hobbiePage">
        <div className="text-data">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        {sections.map((section, index) => (
          <section key={index}>
            <h1>{section.title}</h1>
            <p>{section.description}</p>
            <div className="images-grid">
              {section.images.map((image, idx) => (
                <div
                  key={idx}
                  className="image-style"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(17, 19, 19, 0.8) 0%, rgba(41, 32, 32, 0.06) 100%), url(${
                      process.env.PUBLIC_URL + image.url
                    })`,
                  }}
                >
                  <h3>{image.caption}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default HobbieDefault;
