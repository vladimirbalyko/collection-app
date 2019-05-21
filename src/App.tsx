import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Header } from './controls/header';
import { Menu } from './controls/menu';
import { MainContent } from './controls/mainContent';
import { CollectionList } from './controls/collectionList';
import { About } from './controls/about';
import { CollectionItemFull } from './controls/collectionItemFull';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <MainContent>
        <Route exact path="/" component={CollectionList} />
        <Route path="/about" component={About} />
        <Route path="/item" component={CollectionItemFull} />
      </MainContent>
    </Router>
  );
}

export default App;
