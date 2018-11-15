import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import Post from './Components/Post';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }
  render() {
    return (
      <div className='app-wrap'>
        <SearchBar />
        <Post />
        <dummyData />
        <PostContainer />
      </div>
    );
  }
}

export default App.js;
