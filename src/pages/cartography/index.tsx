import { MAP_GRID, MAP_GRID_ITEM, MAP_EMPTY } from "@pages/index.classnames";
import { useMatrix } from "../hooks/useMatrix";
import {
  CARTOGRAPHY_MAIN_CLASSNAMES,
  CARTOGRAPHY_RESET_BTN_CLASSNAMES,
  CARTOGRAPHY_TITLE_CLASSNAMES,
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
      <button
        onClick={resetMatrix}
        className={CARTOGRAPHY_RESET_BTN_CLASSNAMES}
      >
        RESET
      </button>
    </main>
  );
};

export default Cartography;
