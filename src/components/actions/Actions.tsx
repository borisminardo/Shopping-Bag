import React from "react";
import { Item } from "../../model/Item";
import "./actions.css";
interface ActionsProps {
  item: Item;
  deleteProduct: (item: Item) => void;
  ownItem: (item: Item) => void;
}
const Actions: React.FC<ActionsProps> = ({ item, deleteProduct, ownItem }) => {
  return (
    <div className="my-card-actions row ">
      <div className="mt-3 col">
        <button
          className="my-button delete-button w-20"
          id="del"
          onClick={() => deleteProduct(item)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="white"
            className="bi bi-trash "
            viewBox="0 0 16 16"
            onClick={() => deleteProduct(item)}
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </button>
      </div>
      <div className="mt-3 col ">
        <button
          className={`button-width my-button  ${
            !item.owned ? "to-complete-button" : "completed-button"
          }`}
          id="complete"
          onClick={() => ownItem(item)}
        >
          {item.owned ? "Preso!" : "Da prendere"}
        </button>
      </div>
    </div>
  );
};

export default Actions;
