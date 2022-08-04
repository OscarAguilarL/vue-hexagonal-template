// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata';
import Application from '@/vue-app/application';
import TYPES from '@/modules/types';
import App from '@/vue-app/App.vue';
import Container from '@/container';

import './styles/index.css';

Container.instance().get<Application>(TYPES.APPLICATION).create(App);
