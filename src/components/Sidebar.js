import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {addDeck,showAddDeck,hideAddDeck} from '../actions';
import {Link} from 'react-router';


const SideBar = React.createClass({
  componentDidUpdate(){
    var el = ReactDOM.findDOMNode(this.refs.add);
    if(el)el.focus();
  },
  createDeck(evt){
    if(evt.which !==13){
      return;
    }
    var name = ReactDOM.findDOMNode(this.refs.add).value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  },
  render(){
    let props = this.props;
    return (<div className="sidebar">
      <h1>All Decks</h1>
      <ul>
        {props.decks.map((deck,i)=>
                    <li key={i}><Link to={`/deck/${deck.id}`}>{deck.name}</Link></li>
        )}
      </ul>
      {props.addingDeck && <input ref='add' onKeyPress={this.createDeck} />}
    </div>);
  }
});

function mapStateToProps({decks,addingDeck}) {
  return {
    decks,
    addingDeck
  }
}

const mapDispatchToProps = (dispatch)=>({
  addDeck:      name=>dispatch(addDeck(name)),
  showAddDeck:  ()=>dispatch(showAddDeck()),
  hideAddDeck:  ()=>dispatch(hideAddDeck())
});


export default connect(mapStateToProps,mapDispatchToProps)(SideBar);
