package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class FormularioPage {
    private WebDriverWait wait;
    private WebDriver driver;

    private String mensaje;

    @FindBy(xpath="//*[contains(text(),'Your personal information')]") private WebElement lbl_mensaje;
    @FindBy(xpath="//label[@for='id_gender1']") private WebElement rdn_mr;
    @FindBy(xpath="//label[@for='id_gender2']") private WebElement rdn_mrs;
    @FindBy(id="customer_firstname") private WebElement txt_nombre;
    @FindBy(id="customer_lastname") private WebElement txt_apellido;
    @FindBy(id="email") private WebElement txt_email;
    @FindBy(id="passwd") private WebElement txt_password;
    @FindBy(id="days") private WebElement select_dia;
    @FindBy(id="months") private WebElement select_mes;
    @FindBy(id="years") private WebElement select_anio;
    @FindBy(id="newsletter") private WebElement check_newsletter;
    @FindBy(id="optin") private WebElement check_receive;
    @FindBy(name="firstname") private WebElement txt_nombre_dir;
    @FindBy(name="lastname") private WebElement txt_apellido_dir;
    @FindBy(name="company") private WebElement txt_compania;
    @FindBy(name="address1") private WebElement txt_direccion1;
    @FindBy(name="address2") private WebElement txt_direccion2;
    @FindBy(name="city") private WebElement txt_ciudad;
    @FindBy(id="id_state") private WebElement select_estado;
    @FindBy(name="postcode") private WebElement txt_codigo_postal;
    @FindBy(name="id_country") private WebElement select_pais;
    @FindBy(name="other") private WebElement txt_adicional;
    @FindBy(name="phone") private WebElement txt_telefono;
    @FindBy(name="phone_mobile") private WebElement txt_celular;
    @FindBy(name="alias") private WebElement txt_alias;
    @FindBy(name = "submitAccount") private WebElement btn_registrar;


    public FormularioPage (WebDriver d){
        driver = d;
        wait = new WebDriverWait(driver,30);
        PageFactory.initElements(driver,this);
    }

    public void Verificar (){
        wait.until(ExpectedConditions.visibilityOf(lbl_mensaje));
        mensaje= lbl_mensaje.getText();
        System.out.print("\n" + mensaje);
    }

    public void ClickCheck(String estado) {
        if(estado.toLowerCase().equals("mr.")){
            rdn_mr.click();
        } else if(estado.toLowerCase().equals("mrs.")){
            rdn_mrs.click();
        } else { System.out.print("Error no capturo el xpath");}
    }

    public void IngresarNombre (String estado) {
        wait.until(ExpectedConditions.visibilityOf(txt_nombre));
        txt_nombre.sendKeys(estado);
    }

    public void IngresarApellido (String estado) {
        wait.until(ExpectedConditions.visibilityOf(txt_apellido));
        txt_apellido.sendKeys(estado);
    }

    public void IngresarEmail (String estado) {
        wait.until(ExpectedConditions.visibilityOf(txt_email));
        txt_email.clear();
        txt_email.sendKeys(estado);
    }

    public void IngresarPassword (String estado) {
        wait.until(ExpectedConditions.visibilityOf(txt_password));
        txt_password.sendKeys(estado);
    }

    public void IngresaDia (String estado){
        new Select(select_dia).selectByValue(estado);

    }
    public void IngresaMes (String estado){
        new Select(select_mes).selectByValue(estado);

    }
    public void IngresaAnio (String estado){
        new Select(select_anio).selectByValue(estado);

    }

    public void ClickNotificaciones (){
        check_newsletter.click();
        check_receive.click();
    }

    public void IngresarNombredir (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_nombre_dir));
        txt_nombre_dir.clear();
        txt_nombre_dir.sendKeys(direccion);
    }

    public void IngresarApellidodir (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_apellido_dir));
        txt_apellido_dir.clear();
        txt_apellido_dir.sendKeys(direccion);
    }

    public void IngresarCompania (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_compania));
        txt_compania.sendKeys(direccion);
    }

    public void IngresarDireccion1 (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_direccion1));
        txt_direccion1.sendKeys(direccion);
    }

    public void IngresarDireccion2 (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_direccion2));
        txt_direccion2.sendKeys(direccion);
    }

    public void IngresarCiudad (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_ciudad));
        txt_ciudad.sendKeys(direccion);
    }

    public void IngresaEstado (String direccion){
        new Select(select_estado).selectByVisibleText(direccion);
    }

    public void IngresarPostal (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_codigo_postal));
        txt_codigo_postal.sendKeys(direccion);
    }

    public void IngresaPais (String direccion){
        new Select(select_pais).selectByVisibleText(direccion);
    }

    public void IngresarAdicional (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_adicional));
        txt_adicional.sendKeys(direccion);
    }

    public void IngresarTelefono (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_telefono));
        txt_telefono.sendKeys(direccion);
    }

    public void IngresarCelular (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_celular));
        txt_celular.sendKeys(direccion);
    }

    public void IngresarAlias (String direccion) {
        wait.until(ExpectedConditions.visibilityOf(txt_alias));
        txt_alias.clear();
        txt_alias.sendKeys(direccion);
    }

    public void ClickRegistrar (){
        btn_registrar.click();
    }
}
