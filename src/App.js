import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

import Login from './Components/Login';
import FriendsList from './Components/FriendsList';
import AddFriend from './Components/AddFriends';
import Logout from './Components/Logout';
import PrivateRoute from './Components/PrivateRoute';





function App() {
  return (

<>
    <header>
      <h2>Friends Database</h2>
      <Link to="login"> Login </Link>
      <Link to="friends"> Friends </Link>
      <Link to="friends/add"> Add Friends </Link> 
      <Link to="logout"> Logout </Link>


    </header>

      <Routes>
        <Route path="/" element={ <Login /> } />

        <Route path="/login" element={ <Login />} />

        <Route path="/friends" element={<FriendsList />} />

        <Route path="/friends/add" element={<AddFriend/> }/>

        <Route path="logout" element={<Logout/> }/>

      </Routes>

      </>
    // // <Router>
    // <>
    //   // {/* <div className="App">
    //   <header

    //   </header>
    //   //   <h2>Client Auth Project</h2> */}
          
    //         {/* <switch> */}
              
    //          {/* </switch> */}

    //     {/* </div> */}
    // </Routes>
    // {/*  </Router> */}
    //    </>
  );
}

export default App;
