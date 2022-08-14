/* eslint-disable import/no-cycle */

import Link from '@/modules/shared/runner/domain/link';
import EmptyLink from '@/modules/shared/runner/domain/empty-link';
import Context from '@/modules/shared/runner/domain/context';

export default abstract class BaseLink {
  next_link: Link = new EmptyLink();

  setNext(link: Link): Link {
    this.next_link = link;

    return this;
  }

  abstract next(context: Context): void
}
