import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/todos/create-todo.component";
import EditTodo from "./components/todos/edit-todo.component";
import TodosList from "./components/todos/todos-list.component";

import Register from "./components/auth/register.component";
import Login from "./components/auth/login.component";

import logo from "./images/logo.jpg";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://codingthesmartway.com">
            <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
          </a>
          <Link to="/" className="navbar-brand">
            MERN-Stack Todo App
          </Link>
          <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  Todos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create Todo
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
