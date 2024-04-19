import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
  const [updatedList, setUpdatedList] = useState([]);
  const [dupUpdatedList, setDupUpdatedList] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const isOnline = useOnlineStatus();
  const PromotedCard = PromotedRestaurantCard(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const jsondata = await data.json();
    setUpdatedList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setDupUpdatedList(
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const btnfilter = () => {
    setDupUpdatedList(updatedList.filter((res) => res?.info?.avgRating > 4.1));
  };

  const setSearch = (e) => {
    setInputSearch(e.target.value);
  };

  const getSearchedResult = () => {
    setDupUpdatedList(
      updatedList.filter((res) =>
        res?.info?.name.toLowerCase().includes(inputSearch.toLowerCase())
      )
    );
  };

  const clearSearch = () => {
    setInputSearch("");
    setDupUpdatedList(updatedList);
  };

  if (!isOnline) {
    return <h1>You are offline!!!</h1>;
  }

  return updatedList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-2">
      <button className=" bg-gray-300 mb-4 p-2 rounded-md" onClick={btnfilter}>
        Top Rated Restaurant
      </button>
      <input
        type="text"
        className=" border border-solid border-black mx-2"
        onChange={setSearch}
        value={inputSearch}
      />
      <button
        className=" bg-gray-300 mb-4 p-2 mr-2 rounded-md text-center"
        onClick={getSearchedResult}
      >
        Search
      </button>
      <button
        className=" bg-gray-300 mb-4 p-2 rounded-md text-center "
        onClick={clearSearch}
      >
        Clear
      </button>
      <div className="flex flex-wrap">
        {dupUpdatedList.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/resinfo/" + restaurant?.info?.id}
          >
            {restaurant?.info?.avgRating > 4.2 ? (
              <PromotedCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
