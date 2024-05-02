// App.js

import React from 'react';
import Header from './components/Header/Header1';
import Sidebar from './components/SideBar/sidebar';
import TicketHistoryForm from './components/TicketHistory/TicketHistoryForm';
import './components/App.css';

function App() {
  return (
    <div className="App">
      <Header />{}
      <Sidebar />{}
      <TicketHistoryForm/>

    </div>
  );
}

export default App;
