import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a href="https://twitter.com/RushiChandavale">
               <BsTwitter />
            </a>
         </div>
         <div>
            <a href="https://instagram.com/rushi_chandavale">
               <BsInstagram />
            </a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/rushikesh-chandavale-9417931a9/">
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a href="mailto:rushichandavale@gmail.com">
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;