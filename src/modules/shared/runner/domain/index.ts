/* eslint-disable import/no-cycle */
import TYPES from '@/types';

import ExecutorLink from '@/modules/shared/runner/domain/executor-link';
import UseCase from '@/modules/shared/use-cases/base';
import Injectable from '@/modules/shared/di/domain/injectable';
import Inject from '@/modules/shared/di/domain/inject';

@Injectable()
export default class Runner {
  // eslint-disable-next-line no-useless-constructor
  constructor(@Inject(TYPES.EXECUTOR_LINK) private readonly executorLink: ExecutorLink) {}

  // eslint-disable-next-line class-methods-use-this
  run(useCase: UseCase<unknown, unknown>, param: unknown): unknown {
    const context = { useCase, result: undefined, param };
    this.executorLink.next(context);

    return context.result;
  }
}
