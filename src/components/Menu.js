import "./menu.css";
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import { useParams } from "react-router-dom";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const Menu = () => {
  const { resid } = useParams();
  const resinfo = useRestaurantMenuData(resid);
  const [expandedCat, setExpandedCat] = useState(null);

  if (resinfo === null) return <Shimmer />;

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resinfo?.data?.cards[2]?.card?.card?.info;

  const menuCategories =
    resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="w-6/12 mx-auto">
      <div className=" border border-solid border-gray-300 p-4 my-6 shadow-xl rounded-lg">
        <h2 className="font-bold text-xl">{name}</h2>
        <h4>
          {avgRating + " (" + totalRatingsString + ") - " + costForTwoMessage}
        </h4>
        <label>{cuisines.join(",")}</label>
      </div>
      {menuCategories.map((category, index) => (
        <MenuCategory
          key={category?.card?.card?.title}
          categoryList={category}
          isToggle={index === expandedCat && true}
          setExpandedCat={() => {
            setExpandedCat(index);
          }}
        />
      ))}
    </div>
  );
};

export default Menu;
