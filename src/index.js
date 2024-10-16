import React, { Fragment } from 'react';
import ReactDOM from "react-dom/client";
import './style.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      number1 : 0,
      number2 : 0
    }
    
  }

  increment1() {
    this.setState({
      number1 : this.state.number1 + 1
    })
  }
  increment2() {
    this.setState({
      number2 : this.state.number2 + 2
    })
  }

  render() {
    return(
      <Fragment>
        Nunber1 : {this.state.number1}
        <button className='red' onClick={() => this.increment1()}></button>
        <br></br>
        Nunber2 : {this.state.number2}
        <button className='green' onClick={() => this.increment2()}></button>

      </Fragment>
    )
  }

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);