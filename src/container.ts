/* eslint-disable no-underscore-dangle */

import { interfaces } from 'inversify';
import { container } from 'inversify-props';
import Vue, { VueConstructor } from 'vue';
import TYPES from '@/types';
import Application from '@/vue-app/application';
import setupModules from '@/modules';

export default class Container {
  private static _instance: Container | null = null;

  private readonly _container: interfaces.Container;

  private constructor() {
    container.bind<Window>(TYPES.WINDOW).toConstantValue(window);

    container.bind<Application>(TYPES.APPLICATION).to(Application).inSingletonScope();

    container.bind<VueConstructor>(TYPES.VUE).toConstantValue(Vue);

    setupModules(container);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this._container = container;
  }

  static instance() {
    if (this._instance === null) {
      Container._instance = new Container();
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this._instance!._container;
  }
}
