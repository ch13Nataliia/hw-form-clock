import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../src/components/Home';
import Adopt from '../src/components/Adopt';
import Layout from '../src/components/Layout';
import NotFound from '../src/components/NotFound';
import Clock from './components/Clock';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
      <div>
        <Clock />
      </div>
    </div>
  );
}

export default App;
