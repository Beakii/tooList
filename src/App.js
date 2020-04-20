import React from 'react';
import './App.css';
import ItemList from './components/ItemList';
import ToolistContextProvider from './context/ToolistContext';
import ItemForm from './components/ItemForm';
import Header from './components/Header';

function App() {
  return (
    <ToolistContextProvider>
      <div className="App">
        <div className="container">
          <div className="app-wrapper">
            <div className="main">
              <Header/>
              <ItemForm/>
              <ItemList/>
            </div>
          </div>
        </div>
      </div>
    </ToolistContextProvider>
  );
}

export default App;
