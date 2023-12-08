import React from 'react';
import '../style/App.css';


function Sidebar(){
  return(
    <div className="sidebar">
      <img  className="side" src="src/images/icons-message/logo.png" alt="logo" />

        <br />
        <div className="ist">

         <div className="new">
          <img src="src/images/icons-message/Home-Fill.png" alt="home" />
          <p>Home</p>
          </div>

           <div className="new">
             <img src="src/images/icons-message/Explore.png" alt="home" />
             <p>Explore</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/iconsv.png" alt="home" />
             <p>Notifications</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/iconsv.png" alt="home" />
             <p>Messages</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/Bookmarks.png" alt="home" />
             <p>Bookmarks</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/Lists.png" alt="home" />
             <p>Lists</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/Profile.png" alt="home" />
             <p>Profile</p>
             </div>
          <div className="new">
             <img src="src/images/icons-message/More.png" alt="home" />
             <p>More</p>
             </div>
           <button className="boutonTweet">Tweet</button>
          </div>


        <div className="footer-sidebar">
            <img src="src/images/profile-photo.png" alt="footer"  />
       <div>
        <div className="footer-content">
            <p>Bradley Ortiz</p>
            <img src="src/images/icons-message/Private.png" alt="icons" />
          </div>
             <span className="color">@bradley</span>
         </div>
      </div>

      </div>
  );
}

export default Sidebar;