import { React} from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <h2 className="head-text">Let's Connect!</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:rushichandavale@gmail.com" target="_blank" rel="noreferrer" className="p-text">
            Email
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile"/>
          <a href="tel:+91 9960924584"  className="p-text">
          +91 9960924584
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.twitter} alt="twitter"/>
          <a href="https://twitter.com/RushiChandavale" target="_blank" rel="noreferrer" className="p-text">
            Twitter
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.linkedin} alt="linkedin" />
          <a
            href="https://www.linkedin.com/in/rushikesh-chandavale-9417931a9/" target="_blank" rel="noreferrer"
            className="p-text"
          >
            Linkedln
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.github} alt="github" />
          <a href="https://github.com/rushichandavale" 
           target="_blank" rel="noreferrer" className="p-text">
            GitHub
          </a>
        </div>
      </div>

      
        <h1 className="bold-text" style={{marginTop:'5rem'}}>Designed with ❤️
by <a href="https://www.linkedin.com/in/rushikesh-chandavale-9417931a9/">Rushi Chandavale</a></h1>
      
    </>
  );
};
export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
