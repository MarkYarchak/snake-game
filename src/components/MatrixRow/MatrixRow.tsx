import MatrixCell from '../MatrixCell/MatrixCell';
import './MatrixRow.css';
import { CellType } from '../SnakeGame/matrix.service';

interface Props {
  cells: CellType[];
  cellSize: number;
  rowIndex: number;
}

export default function MatrixRow({ cells, cellSize, rowIndex }: Props) {
  return (
    <div className="MatrixRow" style={{ maxHeight: cellSize + '%' }}>
      {
        cells.map(
          (cellContent: CellType, columnIndex: number) => (
            <MatrixCell
              key={columnIndex}
              cell={{
                content: cellContent,
                position: { row: rowIndex, column: columnIndex }
              }}
              size={cellSize}
            />
          )
        )
      }
    </div>
  );
}
