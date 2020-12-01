import './MatrixCell.css';

interface Props {
  cell: string;
  size: number;
}

export default function MatrixCell({ cell, size }: Props) {
  return (
    <div
      style={{ width: size + '%' }}
      className="matrix-cell"
    >
      { cell[0] }
    </div>
  );
}
