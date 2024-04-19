import { CDN_URL } from "../utils/constants";

const MenuCategoryItems = ({ data }) => {
  const { name, price, description, imageId } = data?.card?.info;
  return (
    <div className="flex justify-between align-middle py-4 border-b-2 border-b-gray-300">
      <div className="w-8/12 flex flex-col my-auto">
        <span className="font-semibold text-[18px]">{name}</span>
        <span className="font-medium">₹{price / 100}</span>
        <p>{description}</p>
      </div>
      <div className="w-3/12">
        <img src={CDN_URL + imageId} alt="menuItem" />
      </div>
    </div>
  );
};
export default MenuCategoryItems;
