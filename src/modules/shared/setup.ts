import { Container } from 'inversify-props';
import setupHttpModule from '@/modules/shared/http/setup';

export default function setupSharedModule(container: Container) {
  setupHttpModule(container);
}
