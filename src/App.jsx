import "./App.css";
import "./reset.css";
import pipboy from "/assets/img/pip-boy_overlay.png";
import leftLine from "/assets/img/header_line_before.png";
import rightLine from "/assets/img/header_line_after.png";
// import gif from "/assets/img/vault_boy_walking.gif";

function App() {
  return (
    <body>
      <div className="container ">
        <div className="overlay-container">
          <img
            src={pipboy}
            className="pipboy"
            width={"70%"}
            alt="pipboy image"
          />
          <div className="screen">
            <nav>
              <ul>
                <li>stat</li>
                <li>exp</li>
                <li>data</li>
                <li>map</li>
                <li>color</li>
              </ul>
            </nav>
            <div className="header-lines">
              <img src={leftLine} className="left-line" alt="" />
              <img src={rightLine} className="right-line" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <img src={gif} width={"20%"} alt="pipboy image" /> */}
    </body>
  );
}

export default App;
