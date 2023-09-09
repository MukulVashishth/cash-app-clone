import "./App.css";
import { ReactComponent as Logo } from "./assets/dollar.svg";
import { ReactComponent as Eye } from "./assets/eye.svg";
import phone from "./assets/phone.png";
import cube from "./assets/intro-cube 1.png";
import stairs from "./assets/intro-stairs 1.png";
import cubes from "./assets/intro-cubes 1.png";
import pillar from "./assets/intro-pillar 1.png";
import appleLogo from "./assets/apple.svg";
import androidLogo from "./assets/playStore.svg";

function App() {
  return (
    <div>
      <NavigationMenu />
      <Body />
      {/* <Footer /> */}
    </div>
  );
}

function NavigationMenu() {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo style={{ display: "inline-block" }} />
        <ul className="navbar-list">
          <li>
            <a href="#">SIGN IN</a>
          </li>
          <li>
            <a href="#">LEGAL</a>
          </li>
          <li>
            <a href="#">LICENSES</a>
          </li>
          <li>
            <a href="#">SECURITY</a>
          </li>
          <li>
            <a href="#">CAREERS</a>
          </li>
          <li>
            <a href="#">PRESS</a>
          </li>
          <li>
            <a href="#">SUPPORT</a>
          </li>
          <li>
            <a href="#">STATUS</a>
          </li>
          <li>
            <a href="#">CODEBLOG</a>
          </li>
        </ul>
        <Eye />
      </div>
    </nav>
  );
}

function Body() {
  return (
    <>
      (
      <div className="body">
        <img src={cube} className="cube" alt="cube" />
        <p className="cash">CASH</p>
        <img src={stairs} className="stairs" alt="stairs" />
        <img className="phone-img" src={phone} alt="phone img" />
        <p className="app">APP</p>
        <img className="cubes" src={cubes} alt="cubes img" />
        <img className="pillar" src={pillar} alt="pillar img" />
      </div>
      <div className="footer">
        <div className="buttons" style={{ display: "flex" }}>
          <button style={{ display: "flex" }}>
            <img src={appleLogo} alt="logo-footer" />
            <p>APP STORE</p>
          </button>

          <button style={{ display: "flex" }}>
            <img src={androidLogo} alt="logo-footer" />
            <p>GOOGLE PLAY</p>
          </button>
        </div>
      </div>
      );
    </>
  );
}

// function Footer() {
//   return (
//     <div>
//       <Button />;
//     </div>
//   );
// }

// function Button() {}

export default App;
