import React from "react";
import { Item } from "../../model/Item";
import SmileIcon from "../prodotti-card/icons/SmileIcon";
interface Props {
  data: Item[];
  doubleItem: string;
}
const CheckFeatures = ({ data, doubleItem }: Props) => {
  return (
    <>
      {data.length === 0 ? (
        <p>"Nulla di aggiunto per ora.."</p>
      ) : doubleItem ? (
        <p className="mt-3"> {doubleItem}</p>
      ) : (
        ""
      )}
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
    </>
  );
};

export default CheckFeatures;
