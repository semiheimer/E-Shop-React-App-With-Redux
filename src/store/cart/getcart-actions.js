import { uiActions } from "../ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "Sending",
        message: "Sending cart data!",
      })
    );

    const getRequest = async () => {
      const response = await fetch(
        "https://react-http-4c5ec-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await getRequest();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
          subTotalPrice: cartData.subTotalPrice || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "Error",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
