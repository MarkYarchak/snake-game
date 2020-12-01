import { GrassColor, MatrixPosition } from '../SnakeGame/matrix.service';
import './MatrixCell.css';

interface Props {
  cell: {
    content: string;
    position: MatrixPosition;
  };
  size: number;
}

export default function MatrixCell({ cell, size }: Props) {
  const cellBgColor: GrassColor = determineCellColor(cell.position);

  return (
    <div
      style={{ width: size + '%', backgroundColor: cellBgColor }}
      className="MatrixCell"
    >
      { cell.content[0] }
    </div>
  );
}

function determineCellColor(cellPosition: MatrixPosition): GrassColor {
  const isOdd = (cellPosition.row + cellPosition.column) % 2 === 0;
  return isOdd ? GrassColor.Dark : GrassColor.Light;
}
