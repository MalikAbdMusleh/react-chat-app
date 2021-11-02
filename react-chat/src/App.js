import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ChatBox from './chat-box'
import './App.css';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "unknown",
    };
  }

  getName(val) {

  }

  render() {

    return (
      <Router>
        <Route path="/chat-box"  >
          <ChatBox name={this.state.name} />
        </Route>
        <div className="maincontainer">
          <div class="container py-5 px-4" style={{ display: 'flex', flexWrap: 'wrap', flexFlow: "column", alignItems: 'center', borderTop: "5px black solid", marginTop: "100px", boxShadow: "15px 115px 115px 15px " }}>

            <header class="text-center">
              <h1 class="display-4 text-white"><strong>Malik and Super Chat</strong></h1>
              <p class="text-white lead mb-4">Snippet by
                <a href="#" class="text-white">
                  <u> Eng Malik </u></a>
              </p>
            </header>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="">First and last name</span>
              </div>
              <input type="text" class="form-control" onChange={(e) => this.setState({ name: e.target.value })} />
              <input type="text" class="form-control" />
              <a href="http://localhost:3000/chat-box" ><button  id="button-addon2" className="btn btn-primary"  >Okey !!</button>
              </a>
            </div>
          </div>
        </div>
      </Router>
    )
  };
}
export default Home;