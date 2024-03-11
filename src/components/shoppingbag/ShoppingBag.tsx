import { useEffect, useRef, useState } from "react";
import { Item } from "../../model/Item";
import { mostCommons } from "../../service/mostCommons";
import { Category } from "../../model/Item";
import Prodotti from "../prodotti-card/Prodotti";
import "./shoppingBag.css";
import SmileIcon from "../prodotti-card/icons/SmileIcon";
import TopSection from "../top-section/TopSection";
import Liste from "../liste/Liste";
const ShoppingBag = () => {
  const [data, setData] = useState<Item[]>([]);
  const [value, setValue] = useState("");
  const [doubleItem, setDoubleItem] = useState("");
  const [switchAll, setSwitchAll] = useState(false);
  const [pastedText, setPastedText] = useState("");
  const [showListe, setShowListe] = useState(false);

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
      new Set([...mostCommons, ...data])
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
    setData([...filteredData, ...data]);
    setPastedText("");
    setValue("");
  };

  const insertTypedItems = () => {
    if (!value.includes(",") && !value.includes("\n")) {
      const newItem: Item = {
        id: Math.random(),
        name: value.charAt(0).toUpperCase() + value.slice(1),
        heart: false,
        category: Category.NESSUNA,
        owned: false,
      };
      setData([newItem, ...data]);
      setValue("");
    } else {
      const pastedItems: Item[] = value.split(/,|\n/).map((item) => ({
        id: Math.random(),
        name: item.trim().charAt(0).toUpperCase() + item.trim().slice(1),
        heart: false,
        category: Category.NESSUNA,
        owned: false,
      }));

      const filteredData = pastedItems.filter((data) => data.name !== "");
      setData([...filteredData, ...data]);
      setPastedText("");
      setValue("");
    }
  };
  function handlePaste(event: React.ClipboardEvent<HTMLTextAreaElement>) {
    setPastedText("");
    const pastedText = event.clipboardData.getData("text");
    setPastedText(pastedText);
  }

  const uniqueData = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name || t.id === item.id)
  ) as Item[];

  const openListe = () => {
    !showListe ? setShowListe(true) : setShowListe(false);
  };

  return (
    <>
      {/* SEZIONE DI RICERCA */}
      <div className="my-card">
        <h1 className="my-title">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-cart4 "
            viewBox="0 0 16 16"
          >
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg>{" "}
          Shopping Bag..
        </h1>
        <br />
        <div className="top-box">
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
          {/*
          <button
            className="my-button liste-button pl-3"
            type="button"
            onClick={openListe}
          >
            Liste
          </button>*/}
        </div>{" "}
        {/*
        {showListe && <Liste />}*/}
      </div>{" "}
      <TopSection />
      <div className=" text-area-box  row">
        <textarea
          className="my-text-area col"
          value={value}
          id="your-textarea-id"
          placeholder="Scrivi, vai a capo o Incolla a, b, c"
          onChange={(e) => {
            setValue(e.target.value);
            e.target.rows = e.target.value.split("\n").length || 1;
          }}
          onPaste={handlePaste}
          rows={value.split("\n").length || 1}
        ></textarea>
        <button
          className="my-button metti-button col-3"
          id="save"
          onClick={insertItem}
        >
          Metti
        </button>
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
            className="mb-4 pb-4"
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
          <h6>
            Da prendere altri {uniqueData.filter((item) => !item.owned).length}{" "}
            prodotti!
          </h6>
        </div>
      )}
      {uniqueData.filter((item) => !item.owned).length === 1 && (
        <div className="footer">
          <h6>Da prendere: 1 prodotto!</h6>
        </div>
      )}
      {uniqueData.every((item) => item.owned) && uniqueData.length > 0 && (
        <div className="footer finish">
          <div className=" mt-0 mb-5 pb-4 ">
            <SmileIcon width={60} color="white" />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingBag;
