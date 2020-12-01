import MatrixCell from '../MatrixCell/MatrixCell';
import './MatrixRow.css';

interface Props {
  cells: string[];
  cellSize: number;
  rowIndex: number;
}

export default function MatrixRow({ cells, cellSize, rowIndex }: Props) {
  return (
    <div className="MatrixRow" style={{ maxHeight: cellSize + '%' }}>
      {
        cells.map(
          (cellContent: string, columnIndex: number) => (
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
