export enum SnakeDirection {
  Top = 'TOP_SNAKE_DIRECTION',
  Bottom = 'BOTTOM_SNAKE_DIRECTION',
  Left = 'LEFT_SNAKE_DIRECTION',
  Right = 'RIGHT_SNAKE_DIRECTION',
}

export class Snake {
  public direction: SnakeDirection = SnakeDirection.Left;

  constructor() {}

  public move() {
    console.log(this.direction)
    // TODO: move snake forward by this.direction;
  }

  public onGrow() {}

  public onCrash() {}
}
