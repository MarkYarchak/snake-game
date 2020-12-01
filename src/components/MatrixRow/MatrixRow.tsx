import MatrixCell from '../MatrixCell/MatrixCell';
import './MatrixRow.css';

interface Props {
  cells: string[];
  cellSize: number;
}

export default function MatrixRow({ cells, cellSize }: Props) {
  return (
    <div className="MatrixRow" style={{ maxHeight: cellSize + '%' }}>
      {
        cells.map((cell, idx) => <MatrixCell key={idx} cell={cell} size={cellSize} />)
      }
    </div>
  );
}
