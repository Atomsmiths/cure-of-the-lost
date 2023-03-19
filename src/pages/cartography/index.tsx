import { MAP_GRID, MAP_GRID_ITEM, MAP_EMPTY } from "@pages/index.classnames";
import { useMatrix } from "../hooks/useMatrix";
import {
  CARTOGRAPHY_MAIN_CLASSNAMES,
  CARTOGRAPHY_RESET_BTN_CLASSNAMES,
  CARTOGRAPHY_TITLE_CLASSNAMES,
  CARTOGRAPHY_CONTAINER,
  CARTOGRAPHY_MENU,
} from "./index.classnames";

const Cartography = () => {
  const { matrix, updateMatrix, resetMatrix } = useMatrix();

  function getCellClassnames(cell: string | null) {
    if (cell === "clicked") {
      return MAP_EMPTY;
    }

    return MAP_GRID_ITEM;
  }

  return (
    <main className={CARTOGRAPHY_MAIN_CLASSNAMES}>
      <div className={CARTOGRAPHY_CONTAINER}>
        <h1 className={CARTOGRAPHY_TITLE_CLASSNAMES}>Cartography</h1>
        <div className={MAP_GRID}>
          {matrix.map((row, rowIndex) => {
            return row.map((cell, colIndex) => {
              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  onClick={() => updateMatrix(rowIndex, colIndex)}
                  className={getCellClassnames(cell)}
                />
              );
            });
          })}
        </div>
      </div>
      <div className={CARTOGRAPHY_MENU}>
        {" "}
        <button
          onClick={resetMatrix}
          className={CARTOGRAPHY_RESET_BTN_CLASSNAMES}
        >
          RESET
        </button>
      </div>
    </main>
  );
};

export default Cartography;
