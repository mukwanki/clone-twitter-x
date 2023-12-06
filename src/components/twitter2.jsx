import React from 'react';

function Hello() {
  return(
    <div className="tweets">
      
       <div className="tweet">
         <div className="tweet-avatar">
           <img src="src/images/message-image/image 1.png" alt="tweet image" />
         </div>
         
       <div className="tweet-content">
     <div className="tweet-title">
       <h1 className="tweet-title-author">Twitter</h1>
         <img className="tweet-title-author" src="src/images/image-tweets/Group.png" alt="icon profil" />
         <p className="tweet-title"><span className="tweet-title">@Twitter</span></p>
         <p className="tweet-title-details">.</p>
       <p className="tweet-title-details">Oct 29</p>
         </div>
         
         <div className="tweet-text">
          <p>hello literally everyone</p>
         </div>
         
         <div className="tweet-body">
           <div className="tweet-actions">
             <div className="tweet-action">
               <img src="src/images/image-tweets/Buton.png" alt="commentaire" /><p>9.8k</p>
               <img src="src/images/image-tweets/Buton (2).png" alt="partage" /><p>100.9k</p>
               <img src="src/images/image-tweets/Buton (3).png" alt="jaime" /><p>39M</p>
               <img src="src/images/image-tweets/Buton (4).png" alt="telechargement" />
             </div>
           </div>
             </div>
         
         </div>
         </div>
      </div>
  )
}
export default Hello;