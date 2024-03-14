import TopSection from "../topsection/TopSection";
import FormAggiunta from "../form-aggiungi-item/FormAggiunta";
import BarraDiAzioni from "../form-aggiungi-item/BarraDiAzioni";
import CheckFeatures from "../check-features/CheckFeatures";
import TabellaProdotti from "../tabella-prodotti/TabellaProdotti";
import FooterLogic from "../footer-logic/FooterLogic";
import "./shoppingBag.css";
import GuacamoleAlert from "../guacamole-alert/GuacamoleAlert";
import useShoppingBag from "../../service/useShoppingBag";
const ShoppingBag = () => {
  const {
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
  } = useShoppingBag();

  return (
    <>
      <TopSection disableCommonBtn={disableCommonBtn} mostCommon={mostCommon} />
      <GuacamoleAlert
        guacamole={guacamole}
        setCloseGuacamole={setCloseGuacamole}
      />
      <FormAggiunta
        value={value}
        setValue={setValue}
        handlePaste={handlePaste}
        insertItem={insertItem}
      />
      <BarraDiAzioni
        data={data}
        categoryList={categoryList}
        filterItemCategory={filterItemCategory}
        deleteAll={deleteAll}
        keepFavourites={keepFavourites}
      />
      <CheckFeatures data={data} doubleItem={doubleItem} />
      <TabellaProdotti
        uniqueData={uniqueData}
        setCategory={setCategory}
        deleteItem={deleteItem}
        setOwned={setOwned}
        heartItem={heartItem}
      />
      <FooterLogic uniqueData={uniqueData} />
    </>
  );
};

export default ShoppingBag;
