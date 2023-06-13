import React, {useState} from 'react'
import Landing from "./components/LandingPage/LandingPage";
import HomePage from './components/HomePage/HomePage'


function App() {
  const [page, setPage] = useState('Feed');

  const handlePageChange = (pageName) => {
    setPage(pageName);
  }

  return <HomePage page={page} handlePageChange={handlePageChange}/>;
}

export default App;
