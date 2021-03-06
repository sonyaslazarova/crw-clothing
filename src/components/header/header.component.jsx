import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
// import { ReactComponent as Logo } from "../../assets/crown.svg";
import logo from '../../assets/black-logo.jpg';
import CartIcon from "../cart-icon/cart-icon.component";
import "./header.styles.scss";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors.js";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt='Logo'/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        СЪСТЕЗАНИЯ
      </Link>
      <Link className="option" to="/shop">
        КОНТАКТИ
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          ИЗХОД
        </div>
      ) : (
        <Link className="option" to="/signin">
          ВХОД
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

// const mapStateToProps = (state) => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectCartHidden(state),
// });

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
