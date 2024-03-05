import React, { useEffect } from "react";
import Actions from "../actions/Actions";
import FavouriteIcon from "./icons/FavouriteIcon";
import { Item } from "../../model/Item";
import "./prodotti.css";
interface ActionsProps {
  item: Item;
  deleteProduct: (item: Item) => void;
  ownItem: (item: Item) => void;
  heartItem: (item: Item) => void;
}
const Prodotti: React.FC<ActionsProps> = ({
  item,
  deleteProduct,
  ownItem,
  heartItem,
}) => {
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <div
        className={` row my-card-single + ${
          item?.owned ? " owned" : " notOwned"
        }`}
      >
        <div className=" col-5  mobile-margin-top  d-flex align-items-center justify-content-start flex-grow-1 ">
          <h3>{item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)}</h3>{" "}
        </div>

        <div className=" col  mobile-margin-top d-flex align-items-center justify-content-end flex-grow-1">
          <FavouriteIcon item={item} heartItem={heartItem} />
        </div>

        <span className="col mt-3 mb-3 d-flex align-items-center justify-content-end flex-grow-1">
          <Actions
            item={item}
            deleteProduct={deleteProduct}
            ownItem={ownItem}
          />
        </span>
      </div>
    </>
  );
};

export default Prodotti;
