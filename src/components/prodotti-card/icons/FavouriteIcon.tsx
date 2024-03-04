import React from "react";
import { Item } from "../../../model/Item";
interface ActionsProps {
  item: Item;
  heartItem: (item: Item) => void;
}
const FavouriteIcon: React.FC<ActionsProps> = ({ item, heartItem }) => {
  return (
    <svg
      onClick={() => heartItem(item)}
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill={`${item.heart ? "#e91e4d" : "gray"}`}
      className={`bi  ${item.heart ? "bi-hearts" : "bi-hearts"}`}
      viewBox="0 0 16 16"
    >
      {!item.heart && (
        <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38 38 0 0 0 .867-.59m-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922m-1.25 1.137a36 36 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z" />
      )}
      {item.heart && (
        <path
          fillRule="evenodd"
          d="M4.931.481c1.627-1.671 5.692 1.254 0 5.015-5.692-3.76-1.626-6.686 0-5.015m6.84 1.794c1.084-1.114 3.795.836 0 3.343-3.795-2.507-1.084-4.457 0-3.343M7.84 7.642c2.71-2.786 9.486 2.09 0 8.358-9.487-6.268-2.71-11.144 0-8.358"
        />
      )}
    </svg>
  );
};

export default FavouriteIcon;
