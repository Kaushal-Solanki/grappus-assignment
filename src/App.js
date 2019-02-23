import React, { Component } from 'react';
// import './App.css';
import Sidebar from './components/Sidebar'
import TabBar from './components/TabBar'
import Fake from './components/Fake'
import { keys, newKeysData, title, sideBarData } from './data'


const style = {
  backgroundColor: "#090909",
}

class App extends Component {

  render() {
    const { classes } = this.props;
    console.log('dddd', classes)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-sm-12' style={style}>
            <TabBar keys={keys} newKeysData={newKeysData} title={title} />
            <Fake />
          </div>
          <div className='col-md-3 col-sm-12'>
            <Sidebar sideBarData={sideBarData} />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
