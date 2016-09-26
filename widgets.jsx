import React from "react";
import ReactDOM from "react-dom";
import Tabs from './tabs';
import Clock from './clock';
import Weather from './weather';
import Autocomplete from './autocomplete';

class Widgets extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    let names = ["joe", 'don', "sally", "moe", "sam", "samantha", "mooody"];
    let tabArray = [{id: 0, title: "Tab1", content: "CONTENT FOR TAB 1"},
    {id: 1, title:"Tab2", content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}];
    return(
      <div className= "group all-widgets">
        <Tabs data= {tabArray}/>
        <Clock/>
        <Weather/>
        <Autocomplete names={names}/>
      </div>
    );
  }
}


document.addEventListener("DOMContentLoaded", () =>{

  ReactDOM.render(<Widgets/>, document.getElementById('root'));


});
