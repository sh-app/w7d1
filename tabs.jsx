import React from 'react';
import ReactDOM from 'react-dom';

export default class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: 1};
  }

  switchTabs(id){
    // debugger
    this.setState({selectedTab: id});
  }

  render() {

    const headerArray = this.props.data.map( (tab) => {
      return (<Header header={tab} key={tab.id} switchTabs={this.switchTabs.bind(this)}/>);
    });

    return (
      <div className="whole-tab">
        <ul className="group">
          {headerArray}
        </ul>
        <article className="tab-content">{this.props.data[this.state.selectedTab].content}</article>
      </div>
    );
  }


}

const Header = ({header, switchTabs}) => (

  <h1 className = "tab-header" onClick={switchTabs.bind(null, header.id)}>
    {header.title}
  </h1>

);
