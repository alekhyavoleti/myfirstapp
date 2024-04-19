import MenuCategoryItems from "./MenuCategoryItems";

const MenuCategory = ({ categoryList, isToggle, setExpandedCat }) => {
  const { title, itemCards } = categoryList?.card?.card;
  // const [isToggle, setIsToggle] = useState(false);

  const toggleClick = () => {
    //setIsToggle(!isToggle);
    setExpandedCat();
  };

  return (
    <div>
      <div
        className="flex justify-between cursor-pointer"
        onClick={toggleClick}
      >
        <span className="font-semibold text-[18px]">{title}</span>
        <span className="font-bold">&#709;</span>
      </div>
      {!isToggle && <hr className="h-1 bg-gray-300 my-3" />}
      {isToggle && (
        <div>
          {itemCards.map((item) => (
            <MenuCategoryItems key={item?.card?.info?.id} data={item} />
          ))}
          <hr className="h-2 bg-gray-300 my-3" />
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
