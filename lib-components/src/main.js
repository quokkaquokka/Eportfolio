import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'bootstrap';
import environment from './environment';
import {TCustomAttribute} from 'aurelia-i18n';
import {PLATFORM} from 'aurelia-pal';
import {ViewLocator} from 'aurelia-framework';
import XHR from 'i18next-xhr-backend';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'))
    .plugin(PLATFORM.moduleName('aurelia-i18n'), (instance) => {
      let aliases = ['t', 'i18n'];
      // add aliases for 't' attribute
      TCustomAttribute.configureAliases(aliases);

      // register backend plugin
      instance.i18next.use(XHR);

      // adapt options to your needs (see http://i18next.com/docs/options/)
      // make sure to return the promise of the setup method, in order to guarantee proper loading
      return instance.setup({
        backend: {                                  // <-- configure backend settings
          loadPath: './locales/{{lng}}/{{ns}}.json' // <-- XHR settings for where to get the files from
        },
        attributes: aliases,
        lng: 'fr',
        fallbackLng: 'en',
        debug: false
      });
    });
  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  // To have app.pug
  ViewLocator.prototype.convertOriginToViewUrl = function(origin) {
    const moduleId = origin.moduleId;
    const id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ?
      moduleId.substring(0, moduleId.length - 3) :
      moduleId
    ;
    return id + '.pug';
  };
  //Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  //if the css animator is enabled, add swap-order="after" to all router-view elements

  //Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-html-import-template-loader'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
