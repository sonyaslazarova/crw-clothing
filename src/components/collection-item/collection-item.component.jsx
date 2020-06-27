import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, cat, date } = item;
  return (
    <div className="collection-item">
      <div className={`${cat} image`}>{name}</div>
      <div className="collection-footer">
        <span className="date">{date}</span>
        <span className="heart" onClick={() => addItem(item)}>
          <img
            src="https://img.icons8.com/material-outlined/24/000000/like.png"
            alt="Добави в любими"
          />
        </span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ПРЕГЛЕД
      </CustomButton>
    </div>
  );
};

// addindvghbjkdsfjdsklfldms

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
