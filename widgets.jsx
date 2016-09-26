import React from "react";
import ReactDOM from "react-dom";
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';

class Widgets extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let tabArray = [{id: 0, title: "Tab1", content: "CONTENT FOR TAB 1"},
    {id: 1, title:"Tab2", content: "CONTENT FOR TAB 2"}];
    return(
      <div>
        <Tabs data= {tabArray}/>
        <Clock/>
        <Weather />
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () =>{

  ReactDOM.render(<Widgets/>, document.getElementById('root'));


});
