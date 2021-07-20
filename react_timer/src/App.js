import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Some React projects Built for fun</h1>
        <h6>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate
          animi, non ipsam voluptatum quis veniam molestias perspiciatis nobis
          doloremque dolore Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ullam doloremque ducimus repellat sint iste in, provident
          aliquid. Rem, aliquam officia!
        </h6>

        <div className="container">
          <div className="btn">
            <Link to="/clock"> Clock</Link>
          </div>
          <div className="btn">
            <Link to="/lander"> Lander</Link>
          </div>
          <div className="btn">
            <Link to="/counter"> Counter</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
