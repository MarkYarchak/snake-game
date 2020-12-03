import { createMatrix, Matrix } from './matrix.service';
import { initGameUtils, destroyGameUtils } from './game.service';
import { Dummy } from './Dummy';

interface GameParams {
  matrixSize: number;
}

export enum GameStatus {
  Initialized = 'INITIALIZED_GAME_STATUS',
  Running = 'RUNNING_GAME_STATUS',
  Stopped = 'STOPPED_GAME_STATUS',
  Restarted = 'RESTARTED_GAME_STATUS',
  Destroyed = 'DESTROYED_GAME_STATUS', // Can be removed in future
}

export class Game {
  public matrix: Matrix;
  public readonly matrixSize: number;
  public readonly playFieldSize: string = '';
  public maxScore: number = 0;
  public status!: GameStatus;

  constructor({ matrixSize }: GameParams) {
    this.matrix = createMatrix(matrixSize);
    this.matrixSize = matrixSize;
    this.playFieldSize = '800px';
    this.addFood();
    initGameUtils();
    this.setGameStatus(GameStatus.Initialized);
  }

  private setGameStatus(status: GameStatus) {
    this.status = status;
  }

  public get styles() {
    return {};
  }

  public get boardStyles() {
    return {
      width: this.playFieldSize,
      height: this.playFieldSize,
    };
  }

  public start() {
    // TODO: resume dummy moving & food animation (add class back)
    this.setGameStatus(GameStatus.Running);
  }

  public stop() {
    // TODO: stop dummy, stop food animation (clear class for example)
    this.setGameStatus(GameStatus.Stopped);
  }

  public resume() {
    this.start();
  }

  public restart() {
    this.stop();
    this.rollBackDefaultState();
    this.setGameStatus(GameStatus.Restarted);
  }

  public destroy() {
    destroyGameUtils();
    this.setGameStatus(GameStatus.Destroyed); // Can be removed in future
  }

  private rollBackDefaultState() {}

  public addFood() {
    // TODO: add food in random coordinates where no dummy or food already

  }

  public addDummy(dummy: Dummy) {
  }
}
