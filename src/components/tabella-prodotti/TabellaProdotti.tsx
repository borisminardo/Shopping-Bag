import React from "react";
import Prodotti from "../prodotti-card/Prodotti";
import { Category, Item } from "../../model/Item";
interface Props {
  uniqueData: Item[];
  setCategory: (item: Item, c: Category) => void;
  deleteItem: (item: Item) => void;
  setOwned: (item: Item) => void;
  heartItem: (item: Item) => void;
}
const TabellaProdotti = ({
  uniqueData,
  setCategory,
  deleteItem,
  setOwned,
  heartItem,
}: Props) => {
  return (
    <>
      {uniqueData.map((item, index) => (
        <div
          key={item.id}
          className={index === uniqueData.length - 1 ? "last-card" : ""}
        >
          <Prodotti
            item={item}
            setCategory={setCategory}
            deleteProduct={deleteItem}
            ownItem={setOwned}
            heartItem={heartItem}
          />
        </div>
      ))}
    </>
  );
};

export default TabellaProdotti;
