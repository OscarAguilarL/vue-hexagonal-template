// eslint-disable-next-line import/no-cycle
import Link from '@/modules/shared/runner/domain/link';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class EmptyLink implements Link {
  // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
  next(): void {}

  setNext(): Link {
    return this;
  }
}
