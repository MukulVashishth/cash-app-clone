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
import arrow from "./assets/Vector.svg";
import frame  from "./assets/Frame.svg";
import instaframe from "./assets/instaFrame.svg";
import twitterframe from "./assets/TwitterFrame.svg"


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
        <div className="buttonSection">
          <div className="buttonSectionA my-1">
            <div className="Appleclass my-1"><img src={appleLogo} alt="apple-logo" /></div>
            <div className="Appleclasswritten my-1">APP STORE</div>
          </div>
          <div className="buttonsectionb my-1">
          <div className="googleclass my-1"><img src={androidLogo} alt="google-logo" /></div>
            <div className="Appleclasswritten my-1">Google Play</div>
          </div>
        </div>
        <div className="MiddleSection">
          <img src={arrow} alt="Arrow.."/>
        </div>
        <div className="lastSection">
          <div className="written my-1">Brokerage services by Cash App Investing LLC, member FINRA / SIPC. See our BrokerCheck. Investing involves risk; you may lose money. Bitcoin trading offered by Cash App. Cash App Investing does not trade bitcoin and Cash App is not a member of FINRA or SIPC. Cash App facilitates banking services through Sutton Bank and Lincoln Savings Bank, Members FDIC.</div>
          <div className="logo1 my-1">
           <img src={frame}/>
          </div>
          <div className="logo2 my-1">
           <img src={twitterframe}/>
          </div>
          <div className="logo3 my-1">
           <img src={instaframe}/>
          </div>

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
