import React, { useEffect } from "react";
import Actions from "../actions/Actions";
import FavouriteIcon from "./icons/FavouriteIcon";
import { Category, Item } from "../../model/Item";
import "./prodotti.css";
interface ActionsProps {
  item: Item;
  setCategory: (item: Item, c: Category) => void;
  deleteProduct: (item: Item) => void;
  ownItem: (item: Item) => void;
  heartItem: (item: Item) => void;
}
const Prodotti: React.FC<ActionsProps> = ({
  item,
  setCategory,
  deleteProduct,
  ownItem,
  heartItem,
}) => {
  return (
    <>
      <div
        className={` row my-card-single + ${
          item?.owned ? " owned" : " notOwned"
        }`}
      >
        <div className=" col-5  mobile-margin-top  d-flex align-items-center justify-content-start flex-grow-1 ">
          <h3 className={item?.owned ? "owned-title" : ""}>
            {item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)}
          </h3>{" "}
        </div>

        <div className=" col  mobile-margin-top d-flex align-items-center justify-content-end flex-grow-1">
          <FavouriteIcon item={item} heartItem={heartItem} />
        </div>
        <span
          className="col mobile-margin-top d-flex align-items-center justify-content-center flex-grow-1"
          style={{ width: "200px" }}
        >
          {" "}
          <p className="my-text mb-0">{item.category}</p>
        </span>
        <span className="col mt-3 mb-3 d-flex align-items-center justify-content-end flex-grow-1">
          <Actions
            item={item}
            deleteProduct={deleteProduct}
            ownItem={ownItem}
            setCategory={setCategory}
          />
        </span>
      </div>
    </>
  );
};

export default Prodotti;
