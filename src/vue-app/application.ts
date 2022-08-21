import TYPES from '@/types';

import { VueConstructor } from 'vue';
import router from '@/vue-app/router';
import store from '@/vue-app/store';

// Domain
import Injectable from '@/modules/shared/di/domain/injectable';
import Inject from '@/modules/shared/di/domain/inject';

@Injectable()
export default class Application {
  constructor(@Inject(TYPES.VUE) private readonly Vue: VueConstructor) {}

  create(app: VueConstructor) {
    this.Vue.config.productionTip = false;

    return new this.Vue({
      router,
      store,
      render: (create) => create(app),
    }).$mount('#app');
  }
}
