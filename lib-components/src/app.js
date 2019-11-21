import {PLATFORM} from 'aurelia-pal';
import './styles.styl';
import {I18N} from 'aurelia-i18n';

export class App {

  static inject = [I18N];
  constructor(i18n) {
    this.i18n = i18n;
    this.i18n
      .setLocale('fr')
      .then( () => {
        console.log('Locale is ready!');
      });
  }

  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      {
        route: ['', 'welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      },
      {
        route: ['testDevIndex'],
        name: 'testDevIndex',
        moduleId: PLATFORM.moduleName('./testDev/index'),
        nav: true,
        title: 'Test For dev'
      }
    ]);

    this.router = router;
  }
}
