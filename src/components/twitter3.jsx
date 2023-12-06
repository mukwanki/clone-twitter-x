import React from 'react';

function Everyone(){
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
       <p className="tweet-title-details">Sept 28</p>
         </div>
         
         <div className="tweet-text">
          <p>The cooking (*_*)</p>
         </div>
         
         <div className="tweet-image">
          <img src="src/images/image-tweets/WhatsApp Image 2023-10-02 at 15.47.21.jpeg" alt="tweet message" />
          </div>
         
         <div className="tweet-body">
           <div className="tweet-actions">
             <div className="tweet-action">
               <img src="src/images/image-tweets/Buton.png" alt="commentaire" /><p>1.1M</p>
               <img src="src/images/image-tweets/Buton (2).png" alt="partage" /><p>1.9k</p>
               <img src="src/images/image-tweets/Buton (3).png" alt="jaime" /><p>4M</p>
               <img src="src/images/image-tweets/Buton (4).png" alt="telechargement" />
             </div>
           </div>
             </div>
         
         </div>
         </div>
      </div>
  )
}
export default Everyone;