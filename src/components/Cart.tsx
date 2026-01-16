import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(null));
    console.log("Cart cleared");
  };

  const handleRemoveItem = (index: number) => {
    dispatch(removeItem(index));
  };

  const totalPrice = cartItems.reduce((sum: number, item: any) => {
    return sum + (item?.price || item?.defaultPrice || 0) / 100;
  }, 0);

  return (
    <div className="text-center m-4 sm:m-10 p-4 sm:p-10">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
        Cart
      </h1>
      {cartItems.length === 0 && (
        <p className="text-gray-500 text-base sm:text-lg">
          Cart is Empty. Add items to the cart!
        </p>
      )}
      <div className="max-w-3xl mx-auto">
        {cartItems.map((item: any, index: number) => (
          <div
            key={index}
            className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 border-b hover:bg-gray-50 relative"
          >
            <div className="flex-1 text-left min-w-0">
              <p className="font-bold text-sm sm:text-base md:text-lg">
                {item?.name}
              </p>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                ₹{(item?.price || item?.defaultPrice) / 100}
              </p>
              {item?.description && (
                <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
            {item?.imageId && (
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-cover rounded-lg flex-shrink-0"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                alt={item?.name}
              />
            )}
            <button
              onClick={() => handleRemoveItem(index)}
              className="absolute top-2 right-2 sm:relative sm:top-0 sm:right-0 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold transition-colors"
              title="Remove item"
            >
              ×
            </button>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="max-w-3xl mx-auto mt-6 pt-4 border-t">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg sm:text-xl font-semibold">Total:</span>
            <span className="text-lg sm:text-xl font-bold">₹{totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
      {cartItems.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mt-4 sm:mt-6">
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base">
            Checkout
          </button>
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
