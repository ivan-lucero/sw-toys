import { TYPES } from "../actions/shoppingActions";

export const shoppingInitialState = {
  products: [],
  cart: [],
  total: 0,
  price_format: "USD",
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.INIT_PRODUCTS: {
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    }
    case TYPES.ADD_TO_CART: {
      let new_item = state.products.find(
        (product) => product.id === action.payload
      );
      let item_in_cart = state.cart.find((item) => item.id === new_item.id);

      return item_in_cart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === new_item.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...new_item, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_FROM_CART: {
      let item_to_delete = state.cart.find(
        (item) => item.id === action.payload
      );

      return item_to_delete.quantity > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload),
          };
    }
    case TYPES.REMOVE_ALL_FROM_CART: {
      let item_to_delete = state.cart.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
        total: 0,
      };
    }
    case TYPES.TOTAL_AMOUNT: {
      let total_amount = 0;
      state.cart.map(
        (item) => (total_amount += item.price_formatted * item.quantity)
      );
      return {
        ...state,
        total: total_amount,
      };
    }
    case TYPES.CHANGE_PRICE_TO_ARS: {
      let products = [];
      let cart = [];
      let ars_value = action.payload;
      state.products.forEach((product) => {
        product.price_formatted = product.price * ars_value;
        products.push(product);
      });
      state.cart.forEach((item) => {
        item.price_formatted = item.price * ars_value;
        cart.push(item);
      });
      return {
        ...state,
        products: products,
        cart: cart,
        price_format: "ARS",
      };
    }
    case TYPES.CHANGE_PRICE_TO_EUR: {
      let products = [];
      let cart = [];
      let eur_value = action.payload;
      state.products.forEach((product) => {
        product.price_formatted = product.price * eur_value;
        products.push(product);
      });
      state.cart.forEach((item) => {
        item.price_formatted = item.price * eur_value;
        cart.push(item);
      });
      return {
        ...state,
        products: products,
        cart: cart,
        price_format: "EUR",
      };
    }
    case TYPES.CHANGE_PRICE_TO_USD: {
      let products = [];
      let cart = [];
      state.products.forEach((product) => {
        product.price_formatted = product.price;
        products.push(product);
      });
      state.cart.forEach((item) => {
        item.price_formatted = item.price;
        cart.push(item);
      });
      return {
        ...state,
        products: products,
        cart: cart,
        price_format: "USD",
      };
    }
    default:
      return state;
  }
}
