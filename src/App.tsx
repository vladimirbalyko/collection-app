import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CollectionItem } from './collectionItem';

import Button from '@material-ui/core/Button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Edit <code>src/App.tsx</code> and save to reload.
          <CollectionItem
            url={'https://is3-ssl.mzstatic.com/image/thumb/Features/d0/cc/62/dj.nanioukp.jpg/600x600bf.png'}
            title={"Nirvana"}
            description={"test"}
          />
        </div>
        <Button variant="contained" href="https://reactjs.org" target="_blank" color="primary">
          Learn React
        </Button>
      </header>
    </div>
  );
}

export default App;
