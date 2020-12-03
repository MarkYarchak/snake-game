import { DummyDirection } from './Dummy';
import { setDummyDirection } from './dummy.service';
import { game } from './SnakeGame';
import { GameStatus } from "./Game";

const InvolvedKeysWithActions = new Map([
  ['ArrowUp', DummyDirection.Top],
  ['ArrowLeft', DummyDirection.Left],
  ['ArrowDown', DummyDirection.Bottom],
  ['ArrowRight', DummyDirection.Right],
  ['w', DummyDirection.Top],
  ['a', DummyDirection.Left],
  ['s', DummyDirection.Bottom],
  ['d', DummyDirection.Right],
]);

const GameSystemKeyCodesWithActions = new Map([
  ['Space', pauseGameProcess],
  ['Escape', resumeGameProcess],
]);

function isMobile(): boolean {
  return false; // TODO: add real isMobile checker
}

export function initGameUtils() {
  if (isMobile()) return initSwipesHandlers();
  initKeysDownHandlers();
}

export function destroyGameUtils() {
  if (isMobile()) return clearSwipesHandlers();
  clearKeyDownHandlers();
}

function initKeysDownHandlers() {
  window.addEventListener('keydown', keyDownHandler, false);
}

function initSwipesHandlers() {
  // TODO: add swipes handlers
}

function clearSwipesHandlers() {
  // TODO: add clear swipes handlers
}

function clearKeyDownHandlers() {
  window.removeEventListener('keydown', keyDownHandler, false);
}

function keyDownHandler($event: KeyboardEvent) {
  if (isGameSystemKey($event)) return gameSystemKeysController($event);
  if (isInvolvedKey($event) && !pausedGameProcess()) {
    const newDummyDirection: DummyDirection = InvolvedKeysWithActions.get($event.key)!;
    setDummyDirection(newDummyDirection);
  }
}

function isGameSystemKey($event: KeyboardEvent): boolean {
  return GameSystemKeyCodesWithActions.has($event.code);
}

function gameSystemKeysController($event: KeyboardEvent) {
  const action: () => any = GameSystemKeyCodesWithActions.get($event.code)!;
  action();
}

function isInvolvedKey($event: KeyboardEvent): boolean {
  return InvolvedKeysWithActions.has($event.key);
}

function pausedGameProcess(): boolean {
  return game.status === GameStatus.Stopped;
}

function pauseGameProcess() {
  game.stop();
}

function resumeGameProcess() {
  game.resume();
}
