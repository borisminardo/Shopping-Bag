import React from "react";
import Actions from "../actions/Actions";
import FavouriteIcon from "./FavouriteIcon";
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
  return (
    <>
      <div className="my-card">
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
