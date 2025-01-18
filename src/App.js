import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Selamat Datang di Belajar CI Pipeline react app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-description">
          Tangerang adalah sebuah kota yang berada di Provinsi Banten, Indonesia. 
          Kota ini dikenal dengan berbagai fasilitas modern, budaya yang beragam, 
          dan infrastruktur yang berkembang pesat. Selamat menjelajahi Tangerang!
        </p>
      </div>
    );
  }
}

export default App;