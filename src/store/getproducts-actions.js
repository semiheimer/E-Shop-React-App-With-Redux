import { productsActions } from "./products-slice";

export const getProductsData = () => {
  return async (dispatch) => {
    dispatch(
      productsActions.fetchedProducts({ isLoading: true, message: "Pending" })
    );

    const getRequest = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=24");

      if (!response.ok) {
        dispatch(
          productsActions.fetchedProducts({
            isLoading: false,
            message: "No data get",
            isError: true,
          })
        );
        throw new Error("Getting cart data failed.");
      }
      const data = await response.json();

      return data;
    };

    try {
      const productsData = await getRequest();

      const loadedProducts = [];
      productsData.products.map((item) => {
        loadedProducts.push({
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          images: item.images,
          brand: item.brand,
          category: item.category,
          rating: item.rating,
        });
        return item;
      });

      dispatch(
        productsActions.fetchedProducts({
          products: loadedProducts,
          isError: false,
          message: "Data get succesfully",
          isLoading: false,
        })
      );
    } catch (error) {
      dispatch(
        productsActions.fetchedProducts({
          isError: true,
          message: error.message || error || "There is an error",
          isLoading: false,
        })
      );
    }
  };
};
