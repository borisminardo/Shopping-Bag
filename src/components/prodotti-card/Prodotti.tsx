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
        className={`my-card-single + ${item?.owned ? " owned" : " notOwned"}`}
      >
        <h5 className="my-card-header"></h5>
        <div className="my-card-body">
          <h1>
            <span className="truncate-text">
              {item?.name?.charAt(0).toUpperCase() + item?.name?.slice(1)}
            </span>
          </h1>
          <FavouriteIcon item={item} heartItem={heartItem} />
        </div>
        <div>
          <Actions
            item={item}
            deleteProduct={deleteProduct}
            ownItem={ownItem}
          />
        </div>
      </div>
    </>
  );
};

export default Prodotti;
