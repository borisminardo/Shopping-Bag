import { Category, Item } from "../../model/Item";
interface Props {
  data: Item[];
  categoryList: Category[];
  filterItemCategory: (category: Category) => void;
  deleteAll: () => void;
  keepFavourites: () => void;
}
const BarraDiAzioni = ({
  data,
  categoryList,
  filterItemCategory,
  deleteAll,
  keepFavourites,
}: Props) => {
  return (
    <>
      {data.length === 0 ? (
        ""
      ) : (
        <div>
          <span className="dropdown col-1 ml-0">
            <button
              className="my-button filter-button dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-funnel"
                viewBox="0 0 16 16"
              >
                <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2z" />
              </svg>
            </button>
            <ul className="dropdown-menu">
              {categoryList.map((category, index) => (
                <li key={index}>
                  {" "}
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => filterItemCategory(category)}
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </span>{" "}
          <button className="my-button delete-button " onClick={deleteAll}>
            Togli tutto
          </button>
          <button className="my-button save-button  " onClick={keepFavourites}>
            Tieni i preferiti
          </button>
        </div>
      )}
    </>
  );
};

export default BarraDiAzioni;
