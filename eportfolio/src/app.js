import {PLATFORM} from 'aurelia-pal';
import './styles.styl';
import './styleResponsive.styl';
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
        route: ['', 'about'],
        name: 'about',
        moduleId: PLATFORM.moduleName('./about'),
        nav: true,
        title: 'À propos'
      },
      {
        route: 'skills',
        name: 'skills',
        moduleId: PLATFORM.moduleName('./skills'),
        nav: true,
        title: 'Compétences'
      },
      {
        route: 'experiences',
        name: 'experiences',
        moduleId: PLATFORM.moduleName('./experiences'),
        nav: true,
        title: 'Expériences'
      },
      {
        route: 'school',
        name: 'school',
        moduleId: PLATFORM.moduleName('./school'),
        nav: true,
        title: 'Écoles'
      },
      {
        route: 'personnal',
        name: 'Projets personnels',
        moduleId: PLATFORM.moduleName('./personnal'),
        nav: true,
        title: 'Projets personnels'
      },
      {
        route: 'hobbies',
        name: 'Loisirs',
        moduleId: PLATFORM.moduleName('./hobbies'),
        nav: true,
        title: 'Loisirs'
      },
      {
        route: 'portfolio',
        name: 'Portfolio',
        moduleId: PLATFORM.moduleName('./portfolio'),
        nav: true,
        title: 'Portfolio'
      }

      /*,
      {
        route: ['welcome'],
        name: 'welcome',
        moduleId: PLATFORM.moduleName('./welcome'),
        nav: true,
        title: 'Welcome'
      }*/
    ]);

    this.router = router;
  }
}
