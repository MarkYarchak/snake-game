export type Matrix = CellType[][];

export enum CellType {
  Snake = 'SNAKE_CELL',
  Food = 'FOOD_CELL',
  Empty = 'EMPTY_CELL',
}

export interface MatrixCoordinates {
  row: number;
  column: number;
}

export function createMatrix(size: number): Matrix {
  const matrix: Matrix = [];
  createMatrixRows(matrix, size);
  createMatrixCells(matrix, size);
  tryFillInMatrix(matrix, CellType.Empty);
  return matrix;
}

export function createMatrixRows(matrix: Matrix, count: number) {
  for (let i = 0; i < count; i++) {
    const matrixCellsRow: CellType[] = [];
    matrix.push(matrixCellsRow);
  }
}

export function createMatrixCells(matrix: Matrix, count: number) {
  const createEmptyRowCells = function(matrixRow: CellType[]) {
    for (let i = 0; i < count; i++) matrixRow.push(CellType.Empty);
  }
  matrix.map(createEmptyRowCells);
}

export function tryFillInMatrix(matrix: Matrix, value: CellType): Matrix {
  if (!isValid(matrix)) throwError('Invalid matrix');
  return fillInMatrixCells(matrix, value);
}

function isValid(matrix: Matrix): boolean {
  return matrix.length > 0;
}

function throwError(message: string) {
  throw new Error(message);
}

function fillInMatrixCells(matrix: Matrix, value: CellType) {
  return matrix.map(
    matrixRow => matrixRow.map(() => value)
  );
}

export function fillInMatrixCell(matrix: Matrix, { row, column }: MatrixCoordinates, newValue: CellType) {
  matrix[row][column] = newValue;
}
