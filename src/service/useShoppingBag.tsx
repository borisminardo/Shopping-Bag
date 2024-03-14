import { useState } from "react";
import { Category, Item } from "../model/Item";
import { mostCommons } from "./mostCommons";

const useShoppingBag = () => {
  const [data, setData] = useState<Item[]>([]);
  const [value, setValue] = useState("");
  const [doubleItem, setDoubleItem] = useState("");
  const [pastedText, setPastedText] = useState("");
  const [disableCommonBtn, setDisableCommonBtn] = useState(false);
  const [guacamole, setCloseGuacamole] = useState(false);

  const categoryList = Object.values(Category);

  const mostCommon = () => {
    setDisableCommonBtn(true);
    const combinedList = Array.from(
      new Set([...mostCommons, ...data])
    ) as Item[];
    setData(combinedList);
  };
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

  const setCategory = (item: Item, c: Category) => {
    setData(data.map((i) => (i.id === item.id ? { ...i, category: c } : i)));
  };

  const keepFavourites = () => {
    setDisableCommonBtn(false);
    const favoriteItems = data.filter((item) => item.heart);
    setData(favoriteItems);
  };

  const deleteAll = () => {
    setDisableCommonBtn(false);
    setDoubleItem("");
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
      setDoubleItem("");
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

  const uniqueData = data.filter(
    (item, index, self) =>
      index === self.findIndex((t) => t.name === item.name || t.id === item.id)
  ) as Item[];

  const filterItemCategory = (c: Category) => {
    const itemsWithCategory = data.filter((item) => item.category === c);
    const remainingItems = data.filter((item) => item.category !== c);
    setData([...itemsWithCategory, ...remainingItems]);
  };

  function handlePaste(event: React.ClipboardEvent<HTMLTextAreaElement>) {
    setPastedText("");
    const pastedText = event.clipboardData.getData("text");
    setPastedText(pastedText);
  }

  // Other methods...

  return {
    data,
    value,
    doubleItem,
    disableCommonBtn,
    guacamole,
    mostCommon,
    deleteItem,
    heartItem,
    keepFavourites,
    deleteAll,
    insertItem,
    handlePaste,
    uniqueData,
    filterItemCategory,
    setValue,
    setCloseGuacamole,
    setOwned,
    setCategory,
    categoryList,
  };
};

export default useShoppingBag;
