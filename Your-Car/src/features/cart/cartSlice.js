import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      image: "/Assets/Mercedes_meybach.png",
      class: "FIRST CLASS",
      name: "Mercedes Maybach S600",
      description:
        "The Porsche 911 is a true icon in the sports car world, known for its sleek design and superior handling.",
      seat: "5",
      luggage: "2",
      quantity: 7,
    },
    {
      image: "/Assets/Mercedes_G-wagon.png",
      class: "BUSINESS CLASS",
      name: "Mercedes G-wagon",
      description:
        "The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology.",
      seat: "5",
      luggage: "2",
      quantity: 7,
    },
    {
      image: "/Assets/Mercedis_M-class.png",
      class: "SUV",
      name: "Mercedes M class",
      description:
        "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures.",
      seat: "4",
      luggage: "2",
      quantity: 7,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeFromCart: (state, action) => {
      const carName = action.payload;
      const item = state.items.find(item => item.name === carName);
      if (item) item.quantity = 0;
    },
    increaseQuantity: (state, action) => {
      const carName = action.payload;
      const item = state.items.find(item => item.name === carName);
      if (item) item.quantity += 1;
      else {
        state.items.push({ name: carName, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      const carName = action.payload;
      const item = state.items.find(item => item.name === carName);
      if (item && item.quantity >= 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
