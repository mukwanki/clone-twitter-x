import React from 'react';

function Avatar() {
  return(
    <div className="tweets">
       <div className="tweet">
         <div className="tweet-avatar">
           <img src="src/images/message-image/Tweet-Profile-Photo.png" alt="tweet image" />
         </div>
         
       <div className="tweet-content">
     <div className="tweet-title">
       <h1 className="tweet-title-author">The New York Times</h1>
         <img className="tweet-title-author" src="src/images/image-tweets/Group.png" alt="icon profil" />
         <p className="tweet-title"><span className="tweet-title">@nytimes</span></p>
         <p className="tweet-title-details">.</p>
       <p className="tweet-title-details">2h</p>
         </div>
         
         <div className="tweet-text">
           <p> Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land</p>
          </div>
         
         <div className="tweet-image">
         <img src="src/images/tweet-image.png" alt="tweet message" />
         </div>
         
         <div className="tweet-body">
            <div className="tweet-actions">
              <div className="tweet-action">
                <img src="src/images/image-tweets/Buton.png" alt="commentaire" /><p>200</p>
                <img src="src/images/image-tweets/Buton (2).png" alt="partage" /><p>503</p>
                <img src="src/images/image-tweets/Buton (3).png" alt="jaime" /><p>950</p>
                <img src="src/images/image-tweets/Buton (4).png" alt="telechargement" />
              </div>
            </div>
              </div>
         
         </div>
         </div>
         </div>
  )
}
export default Avatar;
         
    