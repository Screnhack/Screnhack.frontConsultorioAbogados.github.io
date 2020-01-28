import { UpdateConsultaPage } from './update-consulta.po';

describe('Prueba de Edicion de consulta', function(){
    let editarConsultaPage: UpdateConsultaPage;

    const NOMBRE_CLIENTE: string = "Andres Moreno";
    const CELULAR : string = '3154862578';
    const TIME_SLEEP: number = 6000;

    beforeEach(async() => {
        editarConsultaPage = new UpdateConsultaPage;
        await editarConsultaPage.navigateTo();
    });
    
    it('Verificar Pantalla Editar Consulta Abogado', async() =>{
        expect(editarConsultaPage.getTituloText().getText()).toEqual('Editar Consulta de Cliente '+ NOMBRE_CLIENTE);
    });
    
    it('Editar Consulta Abogado',  async() => {
        await editarConsultaPage.setNombreCliente(NOMBRE_CLIENTE);
        await editarConsultaPage.setCelularCliente(CELULAR);
        await editarConsultaPage.setSelectTipoConsulta();
        await editarConsultaPage.getBotonEditarConsulta();
        await editarConsultaPage.getBotonAceptarEditarConsulta();
        expect(editarConsultaPage.getRespuestaEditarConsultaText().getText()).toEqual('Actualización de Consulta Abogado Exitosa');
    });
})