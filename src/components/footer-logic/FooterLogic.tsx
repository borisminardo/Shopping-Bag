import React from "react";
import SmileIcon from "../prodotti-card/icons/SmileIcon";
import { Item } from "../../model/Item";
interface Props {
  uniqueData: Item[];
}
const FooterLogic = ({ uniqueData }: Props) => {
  return (
    <>
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

export default FooterLogic;
