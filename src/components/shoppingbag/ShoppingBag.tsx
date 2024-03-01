import { useState } from "react";
import { Item } from "../../model/Item";
import { mostCommons } from "../../service/mostCommons";
import { Category } from "../../model/Item";
import Prodotti from "../prodotti-card/Prodotti";
import "./shoppingBag.css";
const ShoppingBag = () => {
  const [data, setData] = useState<Item[]>([]);
  const [value, setValue] = useState("");
  const [doubleItem, setDoubleItem] = useState("");
  const [switchAll, setSwitchAll] = useState(false);

  const deleteItem = (item: Item) => {
    setData(data.filter((i) => i !== item));
  };

  const setOwned = (item: Item) => {
    setData(
      data.map((i) => (i.id === item.id ? { ...i, owned: !i.owned } : i))
    );
  };

  const heartItem = (item: Item) => {
    setData(
      data.map((i) => (i.id === item.id ? { ...i, heart: !i.heart } : i))
    );
  };
  const mostCommon = () => {
    setSwitchAll(true);
    const combinedList = Array.from(
      new Set([...data, ...mostCommons])
    ) as Item[];
    setData(combinedList);
  };

  const keepFavourites = () => {
    setSwitchAll(true);
    const favoriteItems = data.filter((item) => item.heart);
    setData(favoriteItems);
  };

  const deleteAll = () => {
    setSwitchAll(false);
    setData([]);
  };

  const insertItem = () => {
    if (
      data.some(
        (item) => item.name === value.charAt(0).toUpperCase() + value.slice(1)
      )
    ) {
      setDoubleItem("Questo elemento esiste già!");
    } else {
      if (value.length > 0) {
        const newItem: Item = {
          id: Math.random(),
          name: value.charAt(0).toUpperCase() + value.slice(1),
          heart: false,
          category: Category.NESSUNA,
          owned: false,
        };
        setData([...data, newItem]);
        setValue("");
      }
    }
  };

  const uniqueData = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name || t.id === item.id)
  ) as Item[];

  return (
    <>
      {/* SEZIONE DI RICERCA */}
      <div className="my-card">
        <h1 className="my-title">Lista della spesa..</h1>
        <br />
        <div className="">
          <p className="my-text mb-2">
            Vai!
            <button
              disabled={switchAll}
              className={`my-button  mb-2 ${
                switchAll ? "my-btn-outline-secondary" : "common-button"
              }`}
              onClick={mostCommon}
            >
              Metti i più comuni in lista!
            </button>
          </p>
          <button className="my-button delete-button " onClick={deleteAll}>
            Togli tutto
          </button>
          <button className="my-button save-button  " onClick={keepFavourites}>
            Tieni i preferiti
          </button>
        </div>
        <br></br>
        <div className="">
          <input
            className="my-input"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>

          <button
            className="my-button metti-button "
            id="save"
            onClick={insertItem}
          >
            Metti
          </button>
        </div>
        <br />
      </div>

      {/* SEZIONE DI PRODOTTI */}
      <p>
        {data.length === 0
          ? "Nulla di aggiunto per ora.."
          : doubleItem
          ? doubleItem
          : ""}
      </p>
      {uniqueData.map((item) => (
        <div key={item.id}>
          <Prodotti
            item={item}
            deleteProduct={deleteItem}
            ownItem={setOwned}
            heartItem={heartItem}
          />
        </div>
      ))}
    </>
  );
};

export default ShoppingBag;
