import { Apple } from './food/Apple';
export enum FoodType {}


export enum FoodType {
  Apple = 'SNAKE_DUMMY_TYPE',
}

export const FoodList = new Map([
  [FoodType.Apple, Apple],
]);
