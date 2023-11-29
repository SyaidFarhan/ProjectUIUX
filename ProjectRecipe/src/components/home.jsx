import React from 'react';

const App = () => {
  return (
    <html>
      <head>
        <title>Food-Recipes</title>
        <link rel="stylesheet" type="text/css" href="Home.css" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      </head>
      <body>
        <div className="content">
          <div className="navigation-bar" id="help">
            <div id="navigation-container">
              <li>
                <a href="login.html">Contact</a>
              </li>
            </div>
          </div>
          <div id="abc">
            <h1>
              <span style={{ color: '#ff9900' }}>Dish</span>covery
              <span style={{ color: 'black' }}>Covery</span>
            </h1>
            <p id="txt">
              <br />
              <br />
              <h1 className="ml5">
                <span className="text-wrapper">
                  <span className="line line1"></span>
                  <span style={{ color: '#ff9900' }} className="letters letters-left">
                    Discover Culinary Creativity
                  </span>
                  <span className="line line2"></span>
                </span>
              </h1>
              <br />
              <br />
              <br />
              <span style={{ fontSize: '44px' }}>
                Unleash Your Inner Chef <br /> with Food Recipes
              </span>
            </p>
            {/* JSX */}
            <button className="button-32" role="button">
              Get It!
            </button>
          </div>
        </div>
        <video id="videoBG" poster="makan.jpg" autoPlay muted loop>
          <source src="coffee.mp4" type="video/mp4" />
        </video>

        <script>
          {`
            // Your JavaScript code here
          `}
        </script>
      </body>
    </html>
  );
};

export default Home;
