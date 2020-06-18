package Definitions;

import PageObjects.CreaateAccountPage;
import PageObjects.FormularioPage;
import PageObjects.MenuPage;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.sl.Ce;
import io.cucumber.java.sl.In;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import static Support.Evidencia.screenshot;

public class RegistroDefinitions {
    MenuPage menu;
    CreaateAccountPage Account;
    FormularioPage formulario;

    public RegistroDefinitions() {
        menu = new MenuPage(Hooks.driver);
        Account = new CreaateAccountPage(Hooks.driver);
        formulario= new FormularioPage(Hooks.driver);
    }

    @Given("la web debe estar disponible")
    public void laWebDebeEstarDisponible() {
        Hooks.driver.get("http://automationpractice.com/index.php");
    }

    @When("Ingresa a Sign In")
    public void ingresaASignIn() throws IOException {
        menu.registrar();
        screenshot();

    }

    @And("Valido Pagina")
    public void validoPagina()  {
        Account.mensaje();
    }

    @And("Ingreso Email {string}")
    public void ingresoEmail(String email) throws IOException {
        Account.IngresarEmail(email);
        screenshot();
    }

    @And("Dar click")
    public void darClick() {
        Account.ClickRegistrar();
    }

    @And("Validar Pagina del Formulario de Registro")
    public void validarPaginaDelFormularioDeRegistro() {
        formulario.Verificar();
    }

    @And("Ingresar datos")
    public void IngresarDatos(DataTable registro) {
        List<Map<String,String>> lista= registro.asMaps(String.class, String.class);

        for(int i=0; i<lista.size(); i++){
            formulario.ClickCheck(lista.get(i).get("check"));
            formulario.IngresarNombre(lista.get(i).get("nombre"));
            formulario.IngresarApellido(lista.get(i).get("apellido"));
            formulario.IngresarEmail(lista.get(i).get("email"));
            formulario.IngresarPassword(lista.get(i).get("password"));
            formulario.IngresaDia(lista.get(i).get("dia"));
            formulario.IngresaMes(lista.get(i).get("mes"));
            formulario.IngresaAnio(lista.get(i).get("anio"));
        }
    }

    @And("Selecciona las notificaciones")
    public void seleccionaLasNotificaciones() throws IOException {
        formulario.ClickNotificaciones();
        screenshot();
    }

    @And("Ingresar datos de direccion")
    public void ingresarDatosDeDireccion(DataTable direccion) {
        List<Map<String,String>> lista= direccion.asMaps(String.class, String.class);

        for(int i=0; i<lista.size(); i++){

            formulario.IngresarNombredir(lista.get(i).get("nombreDir"));
            formulario.IngresarApellidodir(lista.get(i).get("apellidoDir"));
            formulario.IngresarCompania(lista.get(i).get("compania"));
            formulario.IngresarDireccion1(lista.get(i).get("direccion1"));
            formulario.IngresarDireccion2(lista.get(i).get("direccion2"));
            formulario.IngresarCiudad(lista.get(i).get("ciudad"));
            formulario.IngresaEstado(lista.get(i).get("estado"));
            formulario.IngresarPostal(lista.get(i).get("codigoPostal"));
            formulario.IngresaPais(lista.get(i).get("Pais"));
            formulario.IngresarAdicional(lista.get(i).get("InfoAdicional"));
            formulario.IngresarTelefono(lista.get(i).get("Telefono"));
            formulario.IngresarCelular(lista.get(i).get("Celular"));
            formulario.IngresarAlias(lista.get(i).get("NombreDireccion"));
        }
    }

    @And("registrar cuenta")
    public void registrarCuenta() throws IOException {
        formulario.ClickRegistrar();
        screenshot();
    }

    @Then("Valiar Registro")
    public void valiarRegistro() {

    }


    @And("Ingreso Email EmailInicial {string}")
    public void ingresoEmailEmailInicial(String EmailInicial) {
        Account.IngresarEmail(EmailInicial);
    }

    @And("Ingresar datos check {string}")
    public void ingresarDatosCheck(String check) {
        formulario.ClickCheck(check);
    }

    @And("Ingresar datos nombre {string}")
    public void ingresarDatosNombre(String nombre) {
        formulario.IngresarNombre(nombre);
    }

    @And("Ingresar datos apellido {string}")
    public void ingresarDatosApellido(String apellido) {
        formulario.IngresarApellido(apellido);
    }

    @And("Ingresar datos email {string}")
    public void ingresarDatosEmail(String email) {
        formulario.IngresarEmail(email);
    }

    @And("Ingresar datos password {string}")
    public void ingresarDatosPassword(String password) {
        formulario.IngresarPassword(password);
    }

    @And("Ingresar datos dia {string}")
    public void ingresarDatosDia(String dia) {
        formulario.IngresaDia(dia);
    }

    @And("Ingresar datos mes {string}")
    public void ingresarDatosMes(String mes) throws IOException {
        // code block
        if ("Enero".equals(mes)) {
            mes = "1";
            formulario.IngresaMes(mes);
        } else if ("Febrero".equals(mes)) {
            mes = "2";
            formulario.IngresaMes(mes);
        } else if ("Marzo".equals(mes)) {
            mes = "3";
            formulario.IngresaMes(mes);
        } else if ("Abril".equals(mes)) {
            mes = "4";
            formulario.IngresaMes(mes);
        } else if ("Mayo".equals(mes)) {
            mes = "5";
            formulario.IngresaMes(mes);
        } else if ("Junio".equals(mes)) {
            mes = "6";
            formulario.IngresaMes(mes);
        } else if ("Julio".equals(mes)) {
            mes = "7";
            formulario.IngresaMes(mes);
        } else if ("Agosto".equals(mes)) {
            mes = "8";
            formulario.IngresaMes(mes);
        } else if ("Septiembre".equals(mes)) {
            mes = "9";
            formulario.IngresaMes(mes);
        } else if ("Octubre".equals(mes)) {
            mes = "10";
            formulario.IngresaMes(mes);
        } else if ("Noviembre".equals(mes)) {
            mes = "11";
            formulario.IngresaMes(mes);
        } else if ("Diciembre".equals(mes)) {
            mes = "12";
            formulario.IngresaMes(mes);
        }
        screenshot();
    }

    @And("Ingresar datos anio {string}")
    public void ingresarDatosAnio(String anio) {
        formulario.IngresaAnio(anio);
    }

    @And("Ingresar datos de direccion nombreDir {string}")
    public void ingresarDatosDeDireccionNombreDir(String nombreDir) {
        formulario.IngresarNombredir(nombreDir);
    }

    @And("Ingresar datos de direccion apellidoDir {string}")
    public void ingresarDatosDeDireccionApellidoDir(String apellidoDir) {
        formulario.IngresarApellidodir(apellidoDir);
    }

    @And("Ingresar datos de direccion compania {string}")
    public void ingresarDatosDeDireccionCompania(String compania) {
        formulario.IngresarCompania(compania);
    }

    @And("Ingresar datos de direccion direccion1 {string}")
    public void ingresarDatosDeDireccionDireccion1(String direccion1) {
        formulario.IngresarDireccion1(direccion1);
    }

    @And("Ingresar datos de direccion direccion2 {string}")
    public void ingresarDatosDeDireccionDireccion2(String direccion2) {
        formulario.IngresarDireccion2(direccion2);
    }
    @And("Ingresar datos de direccion ciudad {string}")
    public void ingresarDatosDeDireccionCiudad(String ciudad) {
        formulario.IngresarCiudad(ciudad);
    }

    @And("Ingresar datos de direccion estado {string}")
    public void ingresarDatosDeDireccionEstado(String estado) {
        formulario.IngresaEstado(estado);
    }

    @And("Ingresar datos de direccion codigoPostal {string}")
    public void ingresarDatosDeDireccionCodigoPostal(String codigoPostal) {
        formulario.IngresarPostal(codigoPostal);
    }

    @And("Ingresar datos de direccion Pais {string}")
    public void ingresarDatosDeDireccionPais(String Pais) {
        formulario.IngresaPais(Pais);
    }

    @And("Ingresar datos de direccion InfoAdicional {string}")
    public void ingresarDatosDeDireccionInfoAdicional(String InfoAdicional) {
        formulario.IngresarAdicional(InfoAdicional);
    }

    @And("Ingresar datos de direccion Telefono {string}")
    public void ingresarDatosDeDireccionTelefono(String Telefono) {
        formulario.IngresarTelefono(Telefono);
    }

    @And("Ingresar datos de direccion Celular {string}")
    public void ingresarDatosDeDireccionCelular(String Celular) {
        formulario.IngresarCelular(Celular);
    }

    @And("Ingresar datos de direccion NombreDireccion {string}")
    public void ingresarDatosDeDireccionNombreDireccion(String NombreDireccion) {
        formulario.IngresarAlias(NombreDireccion);
    }


}
