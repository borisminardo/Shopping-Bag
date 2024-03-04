import { useEffect, useState } from "react";
import { Item } from "../../model/Item";
import { mostCommons } from "../../service/mostCommons";
import { Category } from "../../model/Item";
import Prodotti from "../prodotti-card/Prodotti";
import "./shoppingBag.css";
import SmileIcon from "../prodotti-card/icons/SmileIcon";
import TopSection from "../top-section/TopSection";
const ShoppingBag = () => {
  const [data, setData] = useState<Item[]>([]);
  const [value, setValue] = useState("");
  const [doubleItem, setDoubleItem] = useState("");
  const [switchAll, setSwitchAll] = useState(false);
  const [pastedText, setPastedText] = useState("");

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
    setSwitchAll(false);
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
        if (pastedText.length > 0) {
          insertPastedItems();
        } else {
          insertTypedItems();
        }
      }
    }
  };

  const insertPastedItems = () => {
    const pastedItems: Item[] = pastedText.split(",").map((item) => ({
      id: Math.random(),
      name: item.trim().charAt(0).toUpperCase() + item.trim().slice(1),
      heart: false,
      category: Category.NESSUNA,
      owned: false,
    }));

    const filteredData = pastedItems.filter((data) => data.name !== "");
    setData([...data, ...filteredData]);
    setPastedText("");
    setValue("");
  };

  const insertTypedItems = () => {
    const newItem: Item = {
      id: Math.random(),
      name: value.charAt(0).toUpperCase() + value.slice(1),
      heart: false,
      category: Category.NESSUNA,
      owned: false,
    };
    setData([...data, newItem]);
    setValue("");
  };
  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>) {
    setPastedText("");
    const pastedText = event.clipboardData.getData("text");
    setPastedText(pastedText);
  }

  const uniqueData = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name || t.id === item.id)
  ) as Item[];

  return (
    <>
      {/* SEZIONE DI RICERCA */}
      <div className="my-card">
        <TopSection />
        <div className="">
          <p className="my-text mb-2">
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
            id="text"
            placeholder="Scrivi o Incolla una lista..."
            onChange={(e) => setValue(e.target.value)}
            onPaste={handlePaste}
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

        {data.length === 0 ? (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="3000"
          >
            <SmileIcon width={300} color="#141414" />
          </div>
        ) : null}
      </p>
      {uniqueData.map((item, index) => (
        <div
          key={item.id}
          className={index === uniqueData.length - 1 ? "last-card" : ""}
          data-aos="zoom-in-up"
        >
          <Prodotti
            item={item}
            deleteProduct={deleteItem}
            ownItem={setOwned}
            heartItem={heartItem}
          />
        </div>
      ))}

      {uniqueData.filter((item) => !item.owned).length > 1 && (
        <div className="footer">
          <h2>
            Ti mancano altri {uniqueData.filter((item) => !item.owned).length}{" "}
            prodotti!
          </h2>
        </div>
      )}

      {uniqueData.filter((item) => !item.owned).length === 1 && (
        <div className="footer">
          <h2>Ti manca 1 prodotto!</h2>
        </div>
      )}

      {uniqueData.length === 0 && (
        <div className="footer">
          {" "}
          <h2>Iniziamo!</h2>{" "}
        </div>
      )}

      {uniqueData.every((item) => item.owned) && uniqueData.length > 0 && (
        <div className="footer finish">
          <div className=" mt-0 mb-5 pb-4 ">
            <SmileIcon width={100} color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingBag;
