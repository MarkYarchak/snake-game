import { MatrixPosition } from './matrix.service';

interface FoodProps {
  position: MatrixPosition,
}

export class Food {
  constructor({ position }: FoodProps) {}

  public onTouch() {}

  private clear() {}
}

export class Apple extends Food {
  public generate() {}
}
