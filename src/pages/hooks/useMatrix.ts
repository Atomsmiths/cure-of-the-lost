import { useEffect, useState } from "react";

export function useMatrix() {
  const [matrix, setMatrix] = useState<any[][]>(
    Array(13)
      .fill([null])
      .map(() => Array(13).fill(null))
  );

  useEffect(() => {
    const matrixString = localStorage.getItem("matrix");

    if (matrixString) {
      const matrix = JSON.parse(matrixString);
      setMatrix(matrix);
    }
  }, []);

  function syncMatrixStates(newMatrix: any[][]) {
    const serializedMatrix = JSON.stringify(newMatrix);
    localStorage.setItem("matrix", serializedMatrix);

    setMatrix(newMatrix);
  }

  function updateMatrix(col: number, row: number) {
    const newMatrix = [...matrix];

    if (matrix[col][row]) {
      newMatrix[col][row] = null;
      syncMatrixStates(newMatrix);

      return;
    }

    newMatrix[col][row] = "clicked";
    syncMatrixStates(newMatrix);
  }

  function resetMatrix() {
    const newMatrix = Array(13)
      .fill([null])
      .map(() => Array(13).fill(null));

    syncMatrixStates(newMatrix);
  }

  return { matrix, updateMatrix, resetMatrix };
}
