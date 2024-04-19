import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "./constants";

const useRestaurantMenuData = (resid) => {
  const [resinfo, setResInfo] = useState(null);

  //Fetching data from API
  useEffect(() => {
    getResInfo();
  }, []);

  const getResInfo = async () => {
    const data = await fetch(SWIGGY_MENU_URL + resid);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };

  return resinfo;
};
export default useRestaurantMenuData;
