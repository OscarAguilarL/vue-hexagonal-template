// eslint-disable-next-line import/no-cycle
import Context from './context';

export default interface Link {
  setNext(link: Link): Link;
  next(context: Context): void;
  // eslint-disable-next-line semi
}
