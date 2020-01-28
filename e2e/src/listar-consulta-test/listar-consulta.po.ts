import { browser, by, element } from 'protractor';

export class ListarConsultaPage {
    navigateTo(url = "consultas/listar"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getTituloText() {
        return element(by.xpath('/html/body/app-root/section/app-listar-consultas/div/div/h3'));
    }

    getNombreCliente() {
        return element(by.xpath('/html/body/app-root/section/app-listar-consultas/div/div/table/tbody/tr/td[1]'));
    }

    getIdentificacionCliente() {
        return element(by.xpath('/html/body/app-root/section/app-listar-consultas/div/div/table/tbody/tr/td[2]'));
    }

    getCelularCliente() {
        return element(by.xpath('/html/body/app-root/section/app-listar-consultas/div/div/table/tbody/tr/td[3]'));
    }

    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }

}