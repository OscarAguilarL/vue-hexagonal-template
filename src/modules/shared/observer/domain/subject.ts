import Observer from '@/modules/shared/observer/domain/observer';

export default interface Subject {
  register: (observer: Observer) => void;
  notifyAll: () => void;
  // eslint-disable-next-line semi
}
