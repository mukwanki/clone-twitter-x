import React from 'react';


function Editor(){
  return(
    <section className="tweet-editor">
      <img className="avatar" src="src/images/profile-photo.png" alt="profil-photo" />
      <div className="tweet-editor-form">
      <input className="tweet-editor-input" placeholder="What's happening?" type="text" ></input>
      <div className="tweet-editor-buttons">
      <div className="tweet-editor-actions">
<button><img  src="src/images/message-image/media.png" alt="media" /> </button>
        <button><img src="src/images/message-image/gif.png" alt="gif" /></button>
        <button><img src="src/images/message-image/poll3.png" alt="poll3" /></button>
        <button><img src="src/images/message-image/emoji.png" alt="emoji" /></button>
        <button><img src="src/images/message-image/heure.png" alt="heure" /></button>
        </div>
        <button className="button">Tweet</button>
        </div>
      </div>
    </section>
  )
}
export default Editor;