import UseCase from './base';

export default abstract class Subscription<Param = void> extends UseCase<void, Param> {
  readonly = false;

  abstract stop(): void;
}
