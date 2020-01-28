import { browser, by, element } from 'protractor';

export class UpdateConsultaPage {
    navigateTo(url = "consultas/editar/1"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getTituloText() {
        return element(by.xpath('/html/body/app-root/section/app-editar-consultas/div/div[1]/h2'));
    }

    async setNombreCliente(text: string): Promise<void> {
        return await element(by.name('nombre')).sendKeys(text);
    }

    async setCelularCliente(text: string): Promise<void> {
        return await element(by.name('celular')).sendKeys(text);
    }

    async setFechaConsulta(text: string): Promise<void> {
        return await element(by.name('fechaConsulta')).sendKeys(text);
    }

    async setSelectTipoConsulta(): Promise<void> {
        return await element(by.xpath('//*[@id="tipoConsultoria"]/option[3]')).click();
    }

    async getBotonEditarConsulta(): Promise<void> {
        return await element(by.id('editar-consulta-button')).click();
    }

    async getBotonAceptarEditarConsulta(): Promise<void> {
        return await element(by.xpath('/html/body/div/div/div[3]/button[1]')).click();
    }

    getRespuestaEditarConsultaText() {
        return element(by.xpath('//*[@id="swal2-title"]'));
    }

    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }

}