import { useMatrix } from "../hooks/useMatrix";

const Cartography = () => {
  const { matrix, updateMatrix, resetMatrix } = useMatrix();

  function getCellClassnames(cell: string | null) {
    if (cell === "clicked") {
      return "empty";
    }

    return "grid-item";
  }

  return (
    <main className={"cartography-main"}>
      <div className={"cartography-container"}>
        <h1 className={"cartography-title"}>Cartography</h1>
        <div className="cartography-grid-container">
          <div className={"grid"}>
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
      </div>
      <div className={"cartography-menu"}>
        <button onClick={resetMatrix} className="cartography-reset-btn">
          RESET
        </button>
      </div>
    </main>
  );
};

export default Cartography;
