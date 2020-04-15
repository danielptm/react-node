import React, {Component} from 'react';
import style from './App.module.scss';

class App extends Component {


  render() {
    return (
      <div className={style.App}>
        <div className={style.AppHeader}>
            <h2>Example</h2>
        </div>
      </div>
    );
  }
}

export default App;
