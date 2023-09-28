import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Article from './components/Articles/Article';
import Articles from './components/Articles/Articles';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/article" element={<Article />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

