import React, {Component} from 'react';
import {connect} from 'react-redux'

class App extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let word_list = this.props.harmful_words;
    let harmful_words = word_list ?
    <ul>
      {word_list.map(word => {
        return (<li>{word}</li>);
      })}
    </ul>
      : <div></div>;
    return (
      <div>
        <h1>Stop Harassment Word Settings</h1>
        <h4>Word List</h4>
        <div>{harmful_words}</div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filter_options: state.filter_options,
    harmful_words: state.harmful_words
  }
}

export default connect(
  mapStateToProps
  )(App);
