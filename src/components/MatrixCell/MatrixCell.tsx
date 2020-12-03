import { GrassColor, MatrixPosition, CellType } from '../SnakeGame/matrix.service';
import './MatrixCell.css';

interface Props {
  cell: {
    content: CellType;
    position: MatrixPosition;
  };
  size: number;
}

// TODO: for food cell type add animation, transition
// TODO: for dummy cell type add transition and leave side type effect

export default function MatrixCell({ cell, size }: Props) {
  const cellBgColor: GrassColor = determineCellColor(cell.position);

  const cellContent = determineCellContent(cell.content);

  return (
    <div
      style={{ width: size + '%', backgroundColor: cellBgColor }}
      className="MatrixCell"
    >
      { cellContent }
    </div>
  );
}

function determineCellColor(cellPosition: MatrixPosition): GrassColor {
  const isOdd = (cellPosition.row + cellPosition.column) % 2 === 0;
  return isOdd ? GrassColor.Dark : GrassColor.Light;
}

function determineCellContent(cellContent: CellType) {
  switch (cellContent) {
    case CellType.Dummy: return dummyContent();
    case CellType.Food: return foodContent();
    default: return '';
  }
}

function dummyContent() {
  return <div className="DummyContent" />
}

function foodContent() {
  return <i className="fas fa-apple-alt" style={{ color: 'red' }} />;
}
