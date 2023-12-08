import React from 'react';
import '../style/App.css';


function Trends(){
  return(

    <div className="content">
      <div className="serach">
      <input className="searchinput" placeholder="Search twitter" type="text" />
      </div>
      <br />
      <div className="list">

        <div className="form">
          <h4>Trends for you </h4>
          <img className="fond" src="src/images/icons-message/Settings.png" alt="setting" />

          <div>
            <p className="detailss">Trends in turkey</p>
            <h5>#SQUID</h5>
            <p className="detailss">2,066 Tweets</p>
          </div>

          <div>
            <p className="detailss">Trends in turkey</p>
            <h5>#SQUID</h5>
            <p className="detailss">2,066 Tweets</p>
          </div>

          <div>
            <p className="detailss">Trends in turkey</p>
            <h5>#SQUID</h5>
            <p className="detailss">2,066 Tweets</p>
          </div>

          <div>
            <p className="detailss">Trends in turkey</p>
            <h5>#SQUID</h5>
            <p className="detailss">2,066 Tweets</p>
          </div>

          <h5 className="couleur">Show more</h5>
        </div>

      </div>
    <br />
    <br />
           <div className="follow">
          <h4>Who to follow</h4>
      <br />

      <div className="container">

      <img className="px-image" src="src/images/icons-message/Profile-Photo.png" alt="tweet" />

        <div>

        <div className="icons">

        <h6 className="name">The New York Times</h6>
          <img src="src/images/image-tweets/Group.png" alt="icon verifie" />
        </div>

          <p className="detailss">@nytimes</p>

        </div>
        <button className="bouton">follow</button>
      </div>



             <br />


      <div className="container">

      <img className="px-image" src="src/images/icons-message/Profile-Photo(3).png" alt="profil" />

        <div>
          <div className="icons"> 
          <h6 className="name">CNN</h6>

            <img src="src/images/image-tweets/Group.png" alt="icons" />
          </div>
          <p className="detailss">@CNN</p>
        </div>

        <button className="bouton left">follow</button>


      </div>

      <br />

      <div className="container">

        <img className="px-image" src="src/images/icons-message/Profile-Photo(2).png" alt="profil" />

          <div>
            <div className="icons"> 
            <h6 className="name">Twitter</h6>

              <img src="src/images/image-tweets/Group.png" alt="icons" />

            </div>
            <p className="detailss">@Twitter</p>
          </div>

          <button className="bouton left">follow</button>

        </div>
             <br />
              <h5 className="couleur">Show more</h5>

        <br /> 
           
    </div>
      <div className="footer">
      <ul className="footer ul">
      <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
      </ul>
        <ul className="footer ul">
        <li>Imprint</li>
          <li>Ads info</li>
          <li>More ...</li>
          <li>© 2021 Twitter, Inc.</li>
        </ul>
      
      </div>
    </div>
  );
}

export default Trends;