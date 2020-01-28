import { browser, by, element } from 'protractor';

export class CrearConsultaPage {
    navigateTo(url = "consultas/crear"): Promise<void> {
        return browser.get(`${browser.baseUrl}${url}`) as Promise<void>
    }

    getTituloText(){
        return element(by.xpath('/html/body/app-root/section/app-crear-consultas/div/div[1]/h2'));
    }

    async setNombreCliente(text: string): Promise<void> {
        return await element(by.name('nombre')).sendKeys(text);
    }

    async setIdentificacionCliente(text: string): Promise<void> {
        return await element(by.name('identificacion')).sendKeys(text);
    }

    async setCelularCliente(text: string): Promise<void> {
        return await element(by.name('celular')).sendKeys(text);
    }

    async setFechaConsulta(text: string): Promise<void> {
        return await element(by.name('fechaConsulta')).sendKeys(text);
    }

    async setSelectTipoConsulta(): Promise<void> {
        return await element(by.xpath('//*[@id="tipoConsultoria"]/option[2]')).click();
    }

    async getBotonCrearConsulta(): Promise<void> {
        return await element(by.id('crear-consulta-button')).click();
    }

    async getBotonAceptarCreacionConsulta(): Promise<void> {
        return await element(by.xpath('/html/body/div/div/div[3]/button[1]')).click();
    }

    getRespuestaCrearConsultaText(){
        return element(by.xpath('//*[@id="swal2-title"]'));
    }
    async sleep(time: number): Promise<void> {
        return await browser.sleep(time);
    }
    
}