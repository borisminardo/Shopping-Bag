import { useState } from "react";
import "./top-section.css";
type TopSectionProps = {
  guacamole: boolean;
  setCloseGuacamole: (value: boolean) => void;
};
const TopSection = () => {
  const [guacamole, setCloseGuacamole] = useState(false);

  return (
    <>
      {guacamole ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Con Shopping Bag.. , <strong>Metti</strong> o <strong>Togli</strong>{" "}
          manualmente un prodotto, puoi <strong>Incollare una lista</strong>{" "}
          della spesa da Whatsapp!!, o{" "}
          <strong>Mettere i prodotti più comuni in lista!</strong> Seleziona poi
          quelli che ti servono con il <strong>Cuore spezzato</strong> e{" "}
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
    </>
  );
};

export default TopSection;
