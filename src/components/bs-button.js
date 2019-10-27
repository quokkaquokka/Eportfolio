import './bs-button.styl';
import {bindable} from 'aurelia-framework';


export class BsButtonCustomElement {
  @bindable type = 'button';
  @bindable look = 'default';
  @bindable icon = 'fa-home';
  @bindable title = '';
  @bindable disabled = '';
  @bindable noPublish = false;
  @bindable target = '';
  @bindable variant = 'light';
}
