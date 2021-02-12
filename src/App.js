import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from 'react-grid-system';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <div className="A">
          <Row sm={1}>
            <Col sm={1}>
              <h2>LOGO</h2>
            </Col>
            <Col sm={8}></Col>
            <Col sm={3}>
              <h2>MOVIEW_REVIEW</h2>
            </Col>              
          </Row>
        </div>
        <div>
          <nav>
            <ul>
              <li>
                <a><Link to="/">Home</Link></a>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

