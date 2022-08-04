import SHARED_TYPES from './shared/types';

export default {
  ...SHARED_TYPES,
  VUE: Symbol.for('VUE'),
  APPLICATION: Symbol.for('APPLICATION'),
  WINDOW: Symbol.for('WINDOW'),
};
