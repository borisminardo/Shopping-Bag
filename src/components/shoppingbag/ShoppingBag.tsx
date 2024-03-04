import { useEffect, useState } from "react";
import { Item } from "../../model/Item";
import { mostCommons } from "../../service/mostCommons";
import { Category } from "../../model/Item";
import Prodotti from "../prodotti-card/Prodotti";
import "./shoppingBag.css";
import FinishIcon from "../prodotti-card/FinishIcon";
import SmileIcon from "../prodotti-card/SmileIcon";
const ShoppingBag = () => {
  const [data, setData] = useState<Item[]>([]);
  const [value, setValue] = useState("");
  const [doubleItem, setDoubleItem] = useState("");
  const [switchAll, setSwitchAll] = useState(false);
  const [guacamole, setCloseGuacamole] = useState(false);
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
        {guacamole ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Con Shopping Bag.. , <strong>Metti</strong> o <strong>Togli</strong>{" "}
            manualmente un prodotto, puoi <strong>Incollare una lista</strong>{" "}
            della spesa da Whatsapp!!, o{" "}
            <strong>Mettere i prodotti più comuni in lista!</strong> Seleziona
            poi quelli che ti servono con il <strong>Cuore spezzato</strong> e{" "}
            <strong>Tieniti i preferiti</strong>.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setCloseGuacamole(!guacamole)}
            ></button>
          </div>
        ) : (
          <div
            className="my-hint mb-3 "
            onClick={() => setCloseGuacamole(!guacamole)}
          >
            <strong className="pl-4" style={{ color: "#664D03" }}>
              Holy guacamole!
            </strong>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="#664D03"
              className="bi bi-arrow-down-short my-arrow mb-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4"
              />
            </svg>
          </div>
        )}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-cart4"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
        </svg>
        <h1 className="my-title">Shopping Bag..</h1>
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

        {data.length === 0 ? <SmileIcon width={300} color="#141414" /> : null}
      </p>
      {uniqueData.map((item, index) => (
        <div
          key={item.id}
          className={index === uniqueData.length - 1 ? "last-card" : ""}
        >
          <Prodotti
            item={item}
            deleteProduct={deleteItem}
            ownItem={setOwned}
            heartItem={heartItem}
          />
        </div>
      ))}

      <div className="footer ">
        {uniqueData.filter((item) => !item.owned).length > 1 && (
          <h2>
            Ti mancano altri {uniqueData.filter((item) => !item.owned).length}{" "}
            prodotti!
          </h2>
        )}

        {uniqueData.filter((item) => !item.owned).length === 1 && (
          <h2>Ti manca 1 prodotto!</h2>
        )}

        {uniqueData.length === 0 && <h2>Iniziamo!</h2>}

        {uniqueData.every((item) => item.owned) && uniqueData.length > 0 && (
          <div className="mt-0 mb-5 pb-4">
            <SmileIcon width={100} color="white" />
          </div>
        )}
      </div>
    </>
  );
};

export default ShoppingBag;
