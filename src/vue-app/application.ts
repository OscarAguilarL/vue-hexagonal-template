import TYPES from '@/types';

import { VueConstructor } from 'vue';
import router from '@/vue-app/router';
import store from '@/vue-app/store';

// Domain
import Injectable from '@/modules/shared/di/domain/injectable';
import Inject from '@/modules/shared/di/domain/inject';

@Injectable()
export default class Application {
  @Inject(TYPES.VUE)
  private readonly vue!: VueConstructor;

  create(app: VueConstructor) {
    this.vue.config.productionTip = false;

    // eslint-disable-next-line new-cap
    return new this.vue({
      router,
      store,
      render: (h) => h(app),
    }).$mount('#app');
  }
}
