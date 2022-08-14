import { Container } from 'inversify-props';
import setupHttpModule from '@/modules/shared/http/setup';
import setupRunnerModule from '@/modules/shared/runner/setup';

export default function setupSharedModule(container: Container) {
  setupHttpModule(container);
  setupRunnerModule(container);
}
