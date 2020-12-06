import {DummyDirection} from './Dummy';
import {setDummyDirection} from './dummy.service';
import {blurDialogMenu, game, openPauseDialog} from './SnakeGame';
import {GameStatus} from './Game';

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
  if (isInvolvedKey($event)) createGameActions($event);
}

function isGameSystemKey($event: KeyboardEvent): boolean {
  return GameSystemKeyCodesWithActions.has($event.code);
}

function isInvolvedKey($event: KeyboardEvent): boolean {
  return InvolvedKeysWithActions.has($event.key);
}

function gameSystemKeysController($event: KeyboardEvent) {
  const action: () => any = GameSystemKeyCodesWithActions.get($event.code)!;
  action();
}

function createGameActions($event: KeyboardEvent) {
  if (!pausedGameProcess()) {
    const newDummyDirection: DummyDirection = InvolvedKeysWithActions.get($event.key)!;
    if (isNewGameProcess() && newDummyDirection === DummyDirection.Left) return;
    setDummyDirection(game.dummy, newDummyDirection);
  }
  if (isNewGameProcess()) {
    game.start();
  }
}

function isNewGameProcess() {
  return game.status === GameStatus.Initialized || game.status === GameStatus.Restarted;
}

function pausedGameProcess(): boolean {
  return game.status === GameStatus.Stopped;
}

function runningGameProcess(): boolean {
  return game.status === GameStatus.Running;
}

export function pauseGameProcess() {
  if (!runningGameProcess() && !pausedGameProcess()) {
    game.stop();
    openPauseDialog();
    blurDialogMenu();
  }
}

export function resumeGameProcess() {
  if (pausedGameProcess()) {
    game.resume();
  }
}
