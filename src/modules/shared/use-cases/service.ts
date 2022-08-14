import UseCase from './base';

export default abstract class Query<Result = void, Param = void> extends UseCase<Result, Param> {
  readonly = true;
}
