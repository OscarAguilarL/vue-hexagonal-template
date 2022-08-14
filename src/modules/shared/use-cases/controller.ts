import UseCase from './base';

abstract class Controller<Result = void, Param = void> extends UseCase<Result, Param> {
  readonly = false;
}

export default Controller;
