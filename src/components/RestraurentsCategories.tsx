import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/CartSlice";

// Simple Category component for each menu section
const Category = ({
  title,
  items,
  isOpen,
  onToggle,
}: {
  title: string;
  items: any[];
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const dispatch = useDispatch();

  const handleAddItem = (item: any) => {
    dispatch(addItem(item));
    console.log("Item added to cart");
  };

  return (
    <div className="border rounded-lg mb-3 overflow-hidden">
      {/* Category Title */}
      <div
        onClick={onToggle}
        className="p-3 sm:p-4 bg-gray-100 cursor-pointer flex justify-between items-center"
      >
        <h3 className="font-semibold text-base sm:text-lg">
          {title} ({items.length})
        </h3>

        {/* Arrow icon */}
        <span
          className="text-lg sm:text-xl transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ⬇️
        </span>
      </div>

      {/* Show items only when open lifting state up concept */}
      {isOpen && (
        <div className="bg-white">
          {items.map((item: any, idx: number) => (
            <div
              key={item?.id || idx}
              className="p-3 sm:p-4 border-b last:border-none hover:bg-gray-50"
            >
              <div className="flex justify-between items-start gap-2 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sm sm:text-base">{item?.name}</p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    ₹{(item?.price || item?.defaultPrice) / 100}
                  </p>
                  {item?.description && (
                    <p className="text-xs sm:text-sm text-gray-500 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}
                </div>

                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  {item?.imageId && (
                    <img
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                      alt={item?.name}
                    />
                  )}
                  <button
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white rounded hover:bg-green-600 text-xs sm:text-sm whitespace-nowrap"
                    onClick={() => handleAddItem(item)}
                  >
                    Add+
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const RestaurantCategories = ({
  categories,
}: {
  categories: Array<{ title: string; items: any[] }>;
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };
  return (
    <div className="w-full max-w-2xl mt-4 p-2 sm:p-4 bg-white rounded-xl shadow mx-2">
      {categories.map((cat, i) => (
        <Category
          key={i}
          title={cat.title}
          items={cat.items}
          isOpen={openIndex === i}
          onToggle={() => toggleCategory(i)}
        />
      ))}
    </div>
  );
};

export default RestaurantCategories;
