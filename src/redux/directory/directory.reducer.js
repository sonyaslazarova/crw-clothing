const INITIAL_STATE = {
  sections: [
    {
      title: "заявки",
      imageUrl: "https://i.ibb.co/KGjQ0yS/zayavki.jpg",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "състезания",
      imageUrl: "https://i.ibb.co/YDwDrK4/competitions.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
