import { Container } from 'inversify-props';
import TYPES from './types';
import Runner from '@/modules/shared/runner/domain';
import ExecutorLink from '@/modules/shared/runner/domain/executor-link';

export default function setupRunnerModule(container: Container) {
  container
    .bind<Runner>(TYPES.RUNNER)
    .to(Runner)
    .inSingletonScope();

  container.bind<ExecutorLink>(TYPES.EXECUTOR_LINK)
    .to(ExecutorLink)
    .inSingletonScope();
}
