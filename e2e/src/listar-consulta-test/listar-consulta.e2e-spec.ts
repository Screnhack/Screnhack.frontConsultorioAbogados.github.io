import { ListarConsultaPage } from './listar-consulta.po';

describe('Prueba de Creacion de consulta', function () {
    let listarConsultaPage: ListarConsultaPage;

    const NOMBRE_CLIENTE: string = "Andres Moreno";
    const IDENTIFICACION: string = '1520365488';
    const CELULAR: string = '3154862598';
    const TIME_SLEEP: number = 6000;

    beforeEach(async () => {
        listarConsultaPage = new ListarConsultaPage;
        await listarConsultaPage.navigateTo();
    });

    it('Verificar Pantalla Listar Consulta Abogado', async () => {
        expect(listarConsultaPage.getTituloText().getText()).toEqual('Listado de consultas');
    });

    it('Verificar Datos Consulta Creada Consulta Abogado', async () => {
        expect(listarConsultaPage.getNombreCliente().getText()).toEqual(NOMBRE_CLIENTE);
        expect(listarConsultaPage.getIdentificacionCliente().getText()).toEqual(IDENTIFICACION);
        expect(listarConsultaPage.getCelularCliente().getText()).toEqual(CELULAR);
    });
})