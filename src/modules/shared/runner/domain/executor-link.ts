/* eslint-disable import/no-cycle */

import Context from '@/modules/shared/runner/domain/context';
import BaseLink from '@/modules/shared/runner/domain/base-link';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class ExecutorLink extends BaseLink {
  next(context: Context) {
    // eslint-disable-next-line no-param-reassign
    context.result = context.useCase.internalExecute(context.param);
    this.next_link.next(context);
  }
}
