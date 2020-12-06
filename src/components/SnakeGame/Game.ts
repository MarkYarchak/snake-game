import { createMatrix, Matrix } from './matrix.service';
import { destroyGameUtils, initGameUtils } from './game.service';
import { Dummy, DummyParams, DummySpeed } from './Dummy';
import { Food } from './Food';
import { FoodType } from './food.service';
import { createDummyByType, DummyType } from './dummy.service';

interface GameParams {
  matrixSize: number;
  dummyType: DummyType;
  foodType: FoodType;
}

export enum GameStatus {
  Initialized = 'INITIALIZED_GAME_STATUS',
  Running = 'RUNNING_GAME_STATUS',
  Stopped = 'STOPPED_GAME_STATUS',
  Restarted = 'RESTARTED_GAME_STATUS',
  Finished = 'FINISHED_GAME_STATUS',
  Destroyed = 'DESTROYED_GAME_STATUS', // Can be removed in future. Not recommended to bind with
}

export class Game {
  public matrix: Matrix;
  public readonly matrixSize: number;
  public readonly playFieldSize: string = '';
  public readonly score = 0;
  public maxScore: number = 0;
  public status!: GameStatus;
  public previousStatus!: GameStatus;
  public dummyType: DummyType;
  public foodType: FoodType;
  public dummy!: Dummy;
  public food!: Food;

  constructor({ matrixSize, dummyType, foodType }: GameParams) {
    this.matrix = createMatrix(matrixSize);
    this.matrixSize = matrixSize;
    this.playFieldSize = '800px';
    this.dummyType = dummyType;
    this.foodType = foodType;
    initGameUtils();
    this.setGameStatus(GameStatus.Initialized);
  }

  private setGameStatus(status: GameStatus) {
    this.previousStatus = this.status;
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
    this.dummy.startMoving();
  }

  public stop() {
    // TODO: stop dummy, stop food animation (clear class for example)
    this.dummy.stopMoving();
    this.setGameStatus(GameStatus.Stopped);
  }

  public resume() {
    this.setGameStatus(this.previousStatus);
    // this.start();
  }

  public restart() {
    this.stop();
    this.rollBackDefaultState();
    this.setGameStatus(GameStatus.Restarted);
  }

  public finish() {
    this.dummy.stopMoving();
    this.setGameStatus(GameStatus.Finished);
  }

  public destroy() {
    destroyGameUtils();
    this.setGameStatus(GameStatus.Destroyed);
  }

  private rollBackDefaultState() {}

  public addDummy(dummyType: DummyType, dummyParams: DummyParams = { speed: DummySpeed.Medium, matrix: this.matrix }) {
    this.dummy = createDummyByType(dummyType, dummyParams);
  }

  // public addFood(foodType: FoodType, foodParams: FoodParams = {}) {
  //   this.food = createFoodByType(foodType, foodParams);
  //   // TODO: add food in random coordinates where no dummy or food already
  // }
}
