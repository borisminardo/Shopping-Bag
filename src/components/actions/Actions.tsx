import React from "react";
import { Category, Item } from "../../model/Item";
import "./actions.css";
interface ActionsProps {
  item: Item;
  setCategory: (item: Item, c: Category) => void;
  deleteProduct: (item: Item) => void;
  ownItem: (item: Item) => void;
}
const Actions: React.FC<ActionsProps> = ({
  item,
  setCategory,
  deleteProduct,
  ownItem,
}) => {
  const categoryList = Object.values(Category);

  return (
    <>
      <span className=" ">
        <div className="dropdown">
          <button
            className="my-button filter-button dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-bookmarks-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z" />
              <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z" />
            </svg>{" "}
          </button>
          <ul className="dropdown-menu dropdown">
            {categoryList.map((category, index) => (
              <li key={index}>
                {" "}
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setCategory(item, category)}
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </span>
      <span className=" ">
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
      </span>
      <span className="  ">
        <button
          className={`button-width my-button  ${
            !item.owned ? "to-complete-button" : "completed-button"
          }`}
          id="complete"
          onClick={() => ownItem(item)}
        >
          {item.owned ? "Preso!" : "Da prendere"}
        </button>
      </span>
    </>
  );
};

export default Actions;
