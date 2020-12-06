import { DummyParams, DummyDirection, Dummy } from './Dummy';
import { Snake } from './dummies/Snake';

export enum DummyType {
  Snake = 'SNAKE_DUMMY_TYPE',
}

export const DummiesList = new Map([
  [DummyType.Snake, Snake],
]);

export function createDummyByType(type: DummyType, dummyParams: DummyParams) {
  if (!validDummyType(type)) throwError('Invalid dummy type')
  return createNewDummy(type, dummyParams);
}

function validDummyType(type: DummyType): boolean {
  return DummiesList.has(type);
}

function throwError(message: string) {
  throw new Error(message);
}

function createNewDummy(type: DummyType, dummyParams: DummyParams) {
  const GameDummy = DummiesList.get(type)!;
  return new GameDummy(dummyParams);
}

export function setDummyDirection(dummy: Dummy, direction: DummyDirection) {
  dummy.setDirection(direction);
}
