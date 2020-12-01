import { useState } from 'react';
import { Game } from './Game';
import MatrixRow from '../MatrixRow/MatrixRow';
import './SnakeGame.css';

function SnakeGame() {
  const game = new Game({ matrixSize: 30 });
  const [matrix, updateMatrix] = useState(game.matrix);

  return (
    <div style={game.styles} className="Game">
      {
        matrix.map((matrixRow, idx) => <MatrixRow key={idx} cells={matrixRow} cellSize={100 / game.matrixSize} />)
      }
    </div>
  );
}

export default SnakeGame;
