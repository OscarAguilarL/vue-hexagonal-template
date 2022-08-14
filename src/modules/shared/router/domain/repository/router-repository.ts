import { Route } from '@/modules/shared/router/domain/dtos/route';
import { NavigationRoute } from '@/modules/shared/router/domain/dtos/navigation-route';

export interface RouterRepository {
  currentPath: Route;

  navigate(path: string | NavigationRoute): void;
}
