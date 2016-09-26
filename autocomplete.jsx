import React from 'react';

export default class Autocomplete extends React.Component{

  constructor(props){
    super(props);
    this.state = {typed: ""};
  }

  update(e){

    let newType = e.currentTarget.value;
    this.setState({typed: newType});

  }

  render(){
    let regex = new RegExp(`${this.state.typed}`);
    // debugger
    let names = this.props.names.map((name, idx)=> {
      // debugger
      if (this.state.typed==="" || name.match(regex)){
        return <li key={idx}>{name}</li>;
      }
    });
    // debugger
    return(
      <div className = "whole-tab group clock-div" >

        <h1 className="header-auto">Search for Name</h1>
        <input onChange={this.update.bind(this)} placeholder="name"></input>
        <p> >{this.state.typed}</p>
        <ul className="clock-ul">
          {names}
        </ul>

      </div>
    );
  }
}
