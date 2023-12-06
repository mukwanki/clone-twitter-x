import React from 'react';
import '../style/App.css';
import Header from './../components/header.jsx';
import Editor from './../components/tweet-editor.jsx';
import Tweet from './../components/tweets.jsx';
import Avatar from './../components/avatar-tweet.jsx';
import Twitter from './../components/twitter1.jsx';
import Hello from './../components/twitter2.jsx';
import Everyone from './../components/twitter3.jsx';
import Sidebar from './../components/sidebar.jsx';
import Trends from './../components/trends.jsx';


function Home() {
  return (
    <>
    <main className="timeline">
      
      <Header />
      <Editor />
      <Tweet />
      <Avatar />
      <Twitter />
      <Hello />
      <Everyone />
      <Sidebar />
      <Trends />
    </main>
      </>
  );
}

export default Home;