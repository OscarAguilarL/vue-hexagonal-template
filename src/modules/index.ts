import { Container } from 'inversify-props';
import setupSharedModule from '@/modules/shared/setup';

export default function setupModules(container: Container) {
  setupSharedModule(container);
}
