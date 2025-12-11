import { useState } from "react";

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
  return (
    <div className="border rounded-lg mb-3 overflow-hidden">
      {/* Category Title */}
      <div
        onClick={onToggle}
        className="p-4 bg-gray-100 cursor-pointer flex justify-between items-center"
      >
        <h3 className="font-semibold text-lg">
          {title} ({items.length})
        </h3>

        {/* Arrow icon */}
        <span
          className="text-xl transition-transform"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ▼
        </span>
      </div>

      {/* Show items only when open lifting state up concept */}
      {isOpen && (
        <div className="bg-white">
          {items.map((item: any, idx: number) => (
            <div
              key={item?.id || idx}
              className="p-4 border-b last:border-none hover:bg-gray-50"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <p className="font-bold">{item?.name}</p>
                  <p className="text-gray-700">
                    ₹{(item?.price || item?.defaultPrice) / 100}
                  </p>
                  {item?.description && (
                    <p className="text-sm text-gray-500 mt-1">
                      {item.description}
                    </p>
                  )}
                </div>

                {item?.imageId && (
                  <img
                    className="w-20 h-20 object-cover rounded-lg"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                    alt={item?.name}
                  />
                )}
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
    <div className="w-full max-w-2xl mt-4 p-4 bg-white rounded-xl shadow">
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
