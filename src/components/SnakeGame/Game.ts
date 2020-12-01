import { Snake } from './Snake';
import { createMatrix, Matrix } from './matrix.service';
import { initGameUtils } from './game.service';

interface GameParams {
  matrixSize: number;
}

export class Game {
  public matrix: Matrix;
  public matrixSize: number;
  public playFieldSize: string = '';
  public snake: Snake | undefined;

  constructor({ matrixSize }: GameParams) {
    this.matrix = createMatrix(matrixSize);
    this.matrixSize = matrixSize;
    this.determinePlayFieldSize();
  }

  private determinePlayFieldSize() {
    this.playFieldSize = '800px';
  }

  public get styles() {
    return {
      width: this.playFieldSize,
      height: this.playFieldSize,
    };
  }

  public start() {}

  public addSneak() {
    this.snake = new Snake();
  }

  public addFood() {
    // TODO: add food in random coordinates where no snake or food already
  }

}
