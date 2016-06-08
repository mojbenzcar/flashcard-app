import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {filterCards,hideAddDeck,showAddDeck} from '../actions';
import {Link} from 'react-router';

const ToolBar=({deckId,showAddDeck,onFilter})=>{
  const deckTools = deckId?(
    <div>
      <Link className='btn' to={`/deck/${deckId}/new`}> ✚ New Card </Link>
      <Link className='btn' to={`/deck/${deckId}/study`}> Study Deck </Link>
      <input className='search' type='search' placeholder='Search Decks' onChange={e=>onFilter(e.target.value)}/>
      </div>
      ):null;
  return (<div className="toolbar">
      <div>
        <button onClick={showAddDeck}> ✚ New Deck </button>
      </div>
      {deckTools}
  </div>);
}

const mapDispatchToProps = dispatch=>({
  showAddDeck:  ()=>dispatch(showAddDeck()),
  onFilter: query=>dispatch(filterCards(query))
});


export default connect(null,mapDispatchToProps)(ToolBar);
