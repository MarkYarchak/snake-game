import { Matrix, MatrixPosition } from './matrix.service';
import { game } from './SnakeGame';

export enum DummyDirection {
  Top = 'TOP_SNAKE_DIRECTION',
  Bottom = 'BOTTOM_SNAKE_DIRECTION',
  Left = 'LEFT_SNAKE_DIRECTION',
  Right = 'RIGHT_SNAKE_DIRECTION',
}

export enum DummySpeed {
  Slow = 1,
  Medium = 5,
  Fast = 10,
}

interface DummyParams {
  position?: MatrixPosition;
  speed: DummySpeed;
  matrix: Matrix,
}

export class Dummy {
  private direction: DummyDirection = DummyDirection.Left;
  public positions: MatrixPosition[] = [];
  private speed: DummySpeed = DummySpeed.Medium;
  private moveInterval: number | undefined;
  public connectedMatrix!: Matrix;

  constructor({ matrix, position, speed }: DummyParams) {
    this.updateConnectedMatrix(matrix);
    if (!position) position = this.defaultMatrixPosition;
    this.addMatrixPosition(position);
    this.setSpeed(speed);
  }

  private get defaultMatrixPosition(): MatrixPosition {
    const matrixSize = this.connectedMatrix.length;
    const centerPosition = Math.floor(Math.round((matrixSize + 1) / 2) );
    const row = centerPosition;
    const column = centerPosition;

    return {
      row,
      column,
    };
  }

  public addMatrixPosition(position: MatrixPosition = this.defaultMatrixPosition) {
    this.positions.push(position);
    // const position: MatrixPosition = { row, column };
  }

  public setSpeed(newSpeed: DummySpeed) {
    this.speed = newSpeed;
  }

  private updateConnectedMatrix(matrix: Matrix) {}

  public startMoving() {
    const moveFrequency = 1000 / this.speed;
    // @ts-ignore
    this.moveInterval = setInterval(this.moveOnce, moveFrequency);
  }

  private moveOnce() {
    console.log(this.direction);
    this.addMatrixPosition();
    // TODO: move snake forward by this.direction;
  }

  private stopMoving() {
    clearInterval(this.moveInterval);
  }

  public setDirection(direction: DummyDirection) {
    this.direction = direction;
  }

  public onGrow() {}

  public onCrash() {
    this.stopMoving();
    game.stop();
  }
}

class DummyPart {
  // public position: MatrixPosition;
  // public direction: DummyDirection;

  // constructor({ position, direction }) {
  //   this.position = position;
  //   this.direction = direction;
  // }
}
