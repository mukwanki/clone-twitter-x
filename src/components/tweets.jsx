import React from 'react';

function Tweet() {
  return(
   <div className="tweets">
     <div className="tweet">
       <div className="tweet-avatar">
         <img src="src/images/tweet-profile-photo.png" alt="tweet profil" />
       </div>
     <div className="tweet-content">

  
   <div className="tweet-title">
     <h1 className="tweet-title-author">CNN</h1>
       <img className="tweet-title-author" src="src/images/image-tweets/Group.png" alt="icon profil" />
       <p className="tweet-title"><span className="tweet-title">@CNN</span></p>
       <p className="tweet-title-details">.</p>
     <p className="tweet-title-details">7m</p>
       </div>
   <div className="tweet-text">
    <p>President Joe Biden touted a new agreement reached with the 
      European Union to ease Trump-era tariffs on aluminum and steel as a 
      "major breakthrough"that would serve to both strengthen the US steel 
      industry and combat the global climate crisis.</p>
   </div>
       <div className="tweet-body">
       <div className="tweet-actions">
         <div className="tweet-action">
           <img src="src/images/image-tweets/Buton.png" alt="commentaire" /><p>19</p>
           <img src="src/images/image-tweets/Buton (2).png" alt="partage" /><p>29</p>
           <img src="src/images/image-tweets/Buton (3).png" alt="jaime" /><p>123</p>
           <img src="src/images/image-tweets/Buton (4).png" alt="telechargement" />
         </div>
       </div>
         </div>
</div>
         
            
         </div>
       </div>
      
     
     
   
  )
}
export default Tweet;