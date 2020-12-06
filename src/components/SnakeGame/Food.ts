import { MatrixPosition, Matrix } from './matrix.service';

export interface FoodParams {
  position: MatrixPosition,
  connectedMatrix: Matrix,
}

export class Food {
  constructor({ position, connectedMatrix }: FoodParams) {}

  public onTouch() {}

  private clear() {}
}

export class Apple extends Food {
  public generate() {}
}
