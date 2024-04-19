import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, areaName, cloudinaryImageId } =
    props?.resData?.info;
  const { deliveryTime } = props?.resData?.info?.sla;
  return (
    <div className=" w-[250px] mr-4 mb-4 p-2 bg-gray-200 rounded-lg hover:border border-solid border-gray-400">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Restaurent"
        className="rounded-lg"
      ></img>
      <h3 className="font-bold">{name}</h3>
      <h4>{avgRating + " - " + deliveryTime + " mins"}</h4>
      <label>{cuisines.join(", ")}</label>
      <br />
      <label>{areaName}</label>
    </div>
  );
};

export const PromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
