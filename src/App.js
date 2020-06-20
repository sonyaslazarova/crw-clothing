import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component.jsx';
import './pages/homepage/homepage.style.scss';
import { auth } from './firebase/firebase.util';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubstcribeFromAuth = null;

  componentDidMount(){
    this.unsubstcribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
    })
  }

  componentWillUnmount(){
    this.unsubstcribeFromAuth();
  }

  render(){
    return (
      <div>
      <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
