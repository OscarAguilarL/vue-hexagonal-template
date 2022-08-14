import { container } from 'inversify-props';
import TYPES from '@/types';

// eslint-disable-next-line import/no-cycle
import Runner from '@/modules/shared/runner/domain';

export default abstract class UseCase<Result = void, Param = void> {
  abstract readonly: boolean;

  abstract internalExecute(param: Param): Result;

  execute(param?: Param): Result {
    return container.get<Runner>(TYPES.RUNNER).run(this, param) as Result;
  }
}
