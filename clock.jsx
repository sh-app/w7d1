import React from 'react';

export default class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = { date: new Date() };

  }

  componentDidMount(){
    this.handle = setInterval(this.tick.bind(this), 1000);
  }
  componentWillUnmount(){
    clearInterval(this.handle);
    this.handle = 0;
  }

  tick(){
    let newTime = this.state.date.getTime() + 1000;
    this.state.date.setTime(newTime);
    this.setState({date: this.state.date});

  }
  render(){
    let time = this.state.date.toTimeString();
    let date = this.state.date.toDateString();
    return(
      <div className="whole-tab clock-div group">
        <h1 className="header-clock">Current Time</h1>
        <ul className="border clock-ul">
          <li><strong>Time:</strong> {time}</li>
          <li><strong>Date:</strong> {date}</li>
        </ul>


      </div>
    );
  }


}
