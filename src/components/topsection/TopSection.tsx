interface Props {
  disableCommonBtn: boolean;
  mostCommon: () => void;
}
const TopSection = ({ disableCommonBtn, mostCommon }: Props) => {
  return (
    <div className="my-card">
      <h1 className="my-title">
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
            disabled={disableCommonBtn}
            className={`my-button  mb-2 ${
              disableCommonBtn ? "my-btn-outline-secondary" : "common-button"
            }`}
            onClick={mostCommon}
          >
            Metti i più comuni in lista!
          </button>
        </p>
      </div>
    </div>
  );
};

export default TopSection;
