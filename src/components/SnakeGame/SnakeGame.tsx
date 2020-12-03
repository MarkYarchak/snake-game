import { useState } from 'react';
import { Game } from './Game';
import MatrixRow from '../MatrixRow/MatrixRow';
import './SnakeGame.css';

export let game: Game = createNewGame()

function createNewGame(): Game {
  const defaultMatrixSize = 30;
  return new Game({ matrixSize: defaultMatrixSize })
}

function SnakeGame() {
  const [matrix, updateMatrix] = useState(game.matrix);

  function restartGame() {
    game.restart();
    updateMatrix(game.matrix);
  }

  function onSettingsClick() {
    // @ts-ignore
    document.getElementById('dialog-rounded')?.showModal();
  }

  function closePauseDialog() {
    // @ts-ignore
    document.getElementById('dialog-rounded').close();
  }

  return (
    <div style={game.styles} className="Game">
      <div className="GameActionsBar">
        <div className="TrophyIcon">
          <i className="nes-icon is-large trophy no-margin" />
        </div>

        <span className="nes-text middle-nes-text">{ game.maxScore }</span>

        <div style={{ flexGrow: 1 }} />

        <button
          type="button"
          className="nes-btn is-error"
          style={{ height: '50px' }}
          onClick={restartGame}
        >Restart game</button>

        <section>
          <button
            type="button"
            className="nes-btn is-warning"
            style={{ height: '50px', marginLeft: '10px' }}
            onClick={onSettingsClick}
          >
            Pause
          </button>

          <dialog className="nes-dialog is-rounded" id="dialog-rounded">
            <form method="dialog">
              <p className="title" style={{ fontSize: '18px' }}>Settings</p>

              <p className="nes-text is-primary">Best score: { game.maxScore }</p>

              <label htmlFor="success_select">Speed</label>
              <div className="nes-select is-primary">
                <select defaultValue="0" required id="success_select">
                  {/*<option value="placeholder" disabled defaultValue="placeholder" hidden>Speed</option>*/}
                  <option value="0">Slow</option>
                  <option value="1">Medium</option>
                  <option value="1">Fast</option>
                </select>
              </div>

              <menu className="dialog-menu" style={{ padding: '14px 20px 0' }}>
                <button className="nes-btn" style={{ marginRight: '12px' }} onClick={closePauseDialog}>Cancel</button>
                <button className="nes-btn is-primary" style={{ marginLeft: '12px', padding: '6px 24px' }}>Save</button>
              </menu>
            </form>
          </dialog>
        </section>
      </div>

      <div style={game.boardStyles} className="GameBoard">
        {
          matrix.map((matrixRow, idx) => (
              <MatrixRow
                key={idx}
                cells={matrixRow}
                cellSize={100 / game.matrixSize}
                rowIndex={idx}
              />
            )
          )
        }
      </div>
    </div>
  );
}

export default SnakeGame;
