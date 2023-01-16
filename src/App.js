import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Header from './Components/Header';
// import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Table from './Components/Table';
function App () {
  return (
    <Router>
      <Navbar />
      <Header />
      {/* <div>hello</div>
      <Button colorScheme='green'>Button</Button> */}
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/" element={<Table />} />git  */}

      </Routes>

    </Router>
  );
}

export default App;
