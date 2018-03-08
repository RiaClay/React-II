import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';
import PostContainer from './Components/PostContainer/PostContainer';

const App = () => (

  <div className="App">
    <SearchBar />
    {dummyData.map((post, i) => <PostContainer key={i} postData={post} />)}
  </div>
  
)

export default App;
