import router from '@/vue-app/router';

import { Route } from '@/modules/shared/router/domain/dtos/route';
import { RouterRepository } from '@/modules/shared/router/domain/repository/router-repository';
import { NavigationRoute } from '@/modules/shared/router/domain/dtos/navigation-route';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class VueRouter implements RouterRepository {
  get currentPath(): Route {
    const { fullPath, hash, path } = router.currentRoute;

    return {
      fullPath,
      path,
      hash,
    };
  }

  navigate(path: string | NavigationRoute) {
    router.push(path);
  }
}
