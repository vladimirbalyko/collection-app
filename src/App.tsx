import React from 'react';
import './App.css';
import { CollectionItem } from './controls/collectionItem';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Header } from './controls/header';
import { Menu } from './controls/menu';
import { MainContent } from './controls/mainContent';
import { CollectionList } from './controls/collectionList';
import { About } from './controls/about';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Menu />
      <MainContent>
        <Route exact path="/" component={CollectionList} />
        <Route path="/about" component={About} />
      </MainContent>
    </Router>
  );
}

export default App;
