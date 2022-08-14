import { Container } from 'inversify-props';
import TYPES from './types';
import VueRouter from '@/modules/shared/router/infrastructure/vue-router';
import { RouterRepository } from '@/modules/shared/router/domain/repository/router-repository';

export default function setupRouterModule(container: Container) {
  container
    .bind<RouterRepository>(TYPES.ROUTER)
    .to(VueRouter)
    .inSingletonScope();
}
