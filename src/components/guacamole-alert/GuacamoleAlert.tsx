import "./guacamoleAlert.css";
type Props = {
  guacamole: boolean;
  setCloseGuacamole: (value: boolean) => void;
};
const GuacamoleAlert = ({ guacamole, setCloseGuacamole }: Props) => {
  return (
    <>
      {guacamole ? (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Con Shopping Bag.. , <strong>Metti</strong> o <strong>Togli</strong>{" "}
          manualmente un prodotto, oppure <strong>Incolla una lista</strong>{" "}
          dalle note!! La comodità è che puoi{" "}
          <strong>mettere i prodotti più comuni in lista!</strong> Seleziona i
          preferiti con il <strong>Cuore spezzato</strong> e Tieni solo quelli.
          Puoi anche filtrare per <strong>Categoria</strong> o cambiarla. Tieni
          la pagina aperta quando la usi però, al momento i dati
          <strong> non vengono salvati </strong>, quindi se ricarichi la pagina
          perdi i progressi..
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setCloseGuacamole(guacamole)}
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

export default GuacamoleAlert;
