import "./App.css";
import "./reset.css";
import pipboy from "/assets/img/pip-boy_overlay.png";
import leftLine from "/assets/img/header_line_before.png";
import rightLine from "/assets/img/header_line_after.png";
import gif from "/assets/img/vault_boy_walking.gif";
import brackets from "/assets/img/brackets.png";
import infoWeb from "/assets/img/web_application_logo.png";
import engineering from "/assets/img/engineering.png";
import strength from "/assets/img/strength.gif";
import perception from "/assets/img/perception.gif";
import endurance from "/assets/img/endurance.gif";
import charisma from "/assets/img/charisma.gif";
import intelligence from "/assets/img/intelligence.gif";
import agility from "/assets/img/agility.gif";
import luck from "/assets/img/luck.gif";

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
            <section className="core-display status" id="status">
              <div className="under-nav">
                <ul>
                  <li>
                    <a href="#status" className="li-active">
                      status
                    </a>
                  </li>
                  <li>
                    <a href="#special" className="li-active">
                      special
                    </a>
                  </li>
                  <li>
                    <a href="#perks" className="li-active">
                      perks
                    </a>
                  </li>
                </ul>
              </div>
              <div className="health-gauge-container">
                <img src={gif} width={"20%"} alt="vault boy image" />
                <div className="health-gauge health-gauge-top"></div>
                <div className="health-gauge health-gauge-top-right"></div>
                <div className="health-gauge health-gauge-bottom-right"></div>
                <div className="health-gauge health-gauge-bottom"></div>
                <div className="health-gauge health-gauge-bottom-left"></div>
                <div className="health-gauge health-gauge-top-left"></div>
              </div>
              <div className="stats-container">
                <div className="languages-container brackets-container">
                  <img src={brackets} width={24} height={24} alt="brackets" />
                </div>
                <div className="languages-container js-container">
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios-filled/24/18dc0c/javascript.png"
                    alt="javascript"
                  />
                  <p>80 </p>
                </div>
                <div className="languages-container css-container">
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios-filled/24/18dc0c/css3.png"
                    alt="css3"
                  />
                  <p>80</p>
                </div>
                <div className="languages-container info-icon-web">
                  <img src={infoWeb} width={24} height={24} alt="" />
                </div>
                <div className="languages-container react-container">
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/18dc0c/external-react-social-media-tanah-basah-glyph-tanah-basah.png"
                    alt="external-react-social-media-tanah-basah-glyph-tanah-basah"
                  />
                  <p>75</p>
                </div>
                <div className="languages-container engineering-container">
                  <img src={engineering} alt="" width={24} height={24} />
                </div>
                <div className="languages-container node-container">
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/windows/32/18dc0c/nodejs.png"
                    alt="nodejs"
                  />
                  <p>65</p>
                </div>
                <div className="languages-container mysql-container">
                  <img
                    width={24}
                    height={24}
                    src="https://img.icons8.com/ios/50/18dc0c/mysql-logo.png"
                    alt="mysql-logo"
                  />
                  <p>10</p>
                </div>
              </div>
              <p className="me">Romain Gelder-Roger: Développeur web</p>
            </section>
            <section className="core-display" id="special">
              <div className="container-special">
                <div className="left-block-special">
                  <div>
                    <div className="display-flex-special">
                      <p>Strength</p>
                      <p>7</p>
                    </div>
                    <div className="display-flex-special ">
                      <p>Perception</p>
                      <p>5</p>
                    </div>
                    <div className="display-flex-special">
                      <p>Endurance</p>
                      <p>8</p>
                    </div>
                    <div className="display-flex-special">
                      <p>Charisma</p>
                      <p>3</p>
                    </div>
                    <div className="display-flex-special">
                      <p>Intelligence</p>
                      <p>10</p>
                    </div>
                    <div className="display-flex-special">
                      <p>Agility</p>
                      <p>4</p>
                    </div>
                    <div className="display-flex-special">
                      <p>Luck</p>
                      <p>5</p>
                    </div>
                  </div>
                </div>
                <div className="right-block-special right-block-special-active">
                  <img src={strength} className="menu-attribate-image" alt="" />
                  <img
                    src={perception}
                    className="menu-attribate-image"
                    alt=""
                  />
                  <img
                    src={endurance}
                    className="menu-attribate-image"
                    alt=""
                  />
                  <img src={charisma} className="menu-attribate-image" alt="" />
                  <img
                    src={intelligence}
                    className="menu-attribate-image"
                    alt=""
                  />
                  <img src={agility} className="menu-attribate-image" alt="" />
                  <img src={luck} className="menu-attribate-image" alt="" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vel, reprehenderit!
                  </p>
                </div>
              </div>
            </section>
          </div>
          <footer>
            <div className="hp-container">
              <p>hp 1810/1992</p>
            </div>
            <div className="level-container">
              <p>level 31</p>
              <div className="health-gauge-level"></div>
            </div>
            <div className="ap-container">
              <p>ap 255/255</p>
            </div>
          </footer>
        </div>
      </div>
    </body>
  );
}

export default App;
