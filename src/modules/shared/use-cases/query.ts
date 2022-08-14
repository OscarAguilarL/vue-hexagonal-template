import UseCase from './base';

export default abstract class Query<Result = void, Param = any> extends UseCase<Result, Param> {
  readonly = true;
}
