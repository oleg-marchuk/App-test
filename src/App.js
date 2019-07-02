import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Login from './pages/Login';
import News from './pages/News';
import Profile from './pages/Profile';
import { connect } from 'react-redux'
import { getLogIn } from './store/actions/authActions'

class App extends React.Component {

  componentDidMount() {
    // localStorage.setItem('successEnter', "false");
    if (localStorage.getItem("successEnter") === "true") {
      this.props.getLogIn({ login: 'Admin', password: "12345" })
    }
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <Link className="LinkButton" to="/">Главная</Link>
              {/* <Link className="LinkButton" to="/login">Login</Link> */}
              <Link className="LinkButton" to="/news">Новости</Link>
              <Link className="LinkButton" to="/profile">Профиль</Link>
            </nav>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/login" component={Login} />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = { getLogIn }

export default connect(
  null,
  mapDispatchToProps
)(App)
