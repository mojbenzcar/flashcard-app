import React from 'react';
import SideBar from './Sidebar';
import ToolBar from './Toolbar';
import {connect} from 'react-redux';
const mapStateToProps=(props,{params:{deckId}})=>({
  deckId
});

const App = ({deckId,children})=>{
  return (<div className='app'>
    <ToolBar deckId={deckId} />
    <SideBar/>

    {children}
  </div>);
};

export default connect(mapStateToProps)(App);
