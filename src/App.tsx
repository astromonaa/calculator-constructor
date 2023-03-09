import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Canvas from './components/Canvas/Canvas';
import Switcher from './components/Switcher';

const App = () => {
  return (
    <div className='container'>
      <Switcher/>
      <SideBar/>
      <Canvas/>
    </div>
  );
};

export default App;