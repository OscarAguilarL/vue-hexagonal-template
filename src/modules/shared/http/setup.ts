import { Container } from 'inversify-props';
import TYPES from './types';

// Infrastructure
import { FetchHttpConnector } from '@/modules/shared/http/infrastructure';

// Domain
import HttpConnector from '@/modules/shared/http/domain/http-connector';

export default function setupHttpModule(container: Container) {
  container
    .bind<HttpConnector>(TYPES.HTTP_CONNECTOR)
    .to(FetchHttpConnector)
    .inSingletonScope();
}
