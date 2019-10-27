import './bs-tabs.styl';
import {bindable, BindingEngine, Container, processContent} from 'aurelia-framework';

function processTabs(compiler, resources, node, instruction) {
  // first create 2 templates for the replaceable parts
  const headerTemplate = document.createElement('template');
  headerTemplate.setAttribute('replace-part', 'header');
  const contentTemplate = document.createElement('template');
  contentTemplate.setAttribute('replace-part', 'content');

  // process all tabs
  const tabs = Array.from(node.querySelectorAll('tab'));
  for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];

    // add header
    const header = document.createElement('a');
    header.classList.add('nav-item', 'nav-link');
    header.href = '#';
    header.setAttribute('click.delegate', `activeTabId = ${i}`);
    header.setAttribute('class.bind', `activeTabId === ${i} ? 'active' : ''`);
    header.innerText = tab.getAttribute('header');
    headerTemplate.content.appendChild(header);

    // add content
    const content = document.createElement('div');
    content.classList.add('h-100');
    content.setAttribute('show.bind', `activeTabId === ${i}`);
    content.append(...Array.from(tab.childNodes));
    contentTemplate.content.appendChild(content);
  }

  // Activate the first tab
  const bindingEngine = Container.instance.get(BindingEngine);
  instruction.attributes = {
    ...instruction.attributes,
    'active-tab-id': bindingEngine.createBindingExpression('activeTabId', "'0'"),
  };

  node.append(headerTemplate, contentTemplate);

  return true;
}

@processContent(processTabs)
export class BsTabsCustomElement {
  @bindable bodyClass
  activeTabId = 0
}
