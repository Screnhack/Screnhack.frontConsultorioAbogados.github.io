import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath('/html/body/app-root/section/app-home/div[1]/div/h1')).getText() as Promise<string>;
  }

  getBotonGestion() {
    return element(by.xpath('/html/body/app-root/section/app-home/div[3]/div/p/a'));
  }

  getTituloGestion() {
    return element(by.xpath('/html/body/app-root/section/app-consultas/h2'));
  }
}
