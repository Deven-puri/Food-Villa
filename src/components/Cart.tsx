import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Cart = () => {
  const cartItems = useSelector((store: any) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(null));
    console.log("Cart cleared");
  };

  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold mb-6">Cart</h1>
      {cartItems.length === 0 && (
        <p className="text-gray-500 text-lg">
          Cart is Empty. Add items to the cart!
        </p>
      )}
      <div className="max-w-3xl mx-auto">
        {cartItems.map((item: any, index: number) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 border-b hover:bg-gray-50"
          >
            <div className="flex-1 text-left">
              <p className="font-bold text-lg">{item?.name}</p>
              <p className="text-gray-700 mt-1">
                ₹{(item?.price || item?.defaultPrice) / 100}
              </p>
              {item?.description && (
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              )}
            </div>
            {item?.imageId && (
              <img
                className="w-24 h-24 object-cover rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
              />
            )}
          </div>
        ))}
      </div>
      <button className="p-2 m-2 bg-black text-white rounded-lg mt-4 flex-auto">
        Checkout
      </button>
      <button
        className="p-2 m-2 bg-black text-white rounded-lg mt-4"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};
export default Cart;
