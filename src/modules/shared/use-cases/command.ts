import UseCase from './base';

export default abstract class Command<Param = void> extends UseCase<Promise<unknown>, Param> {
  readonly = false;
}
