package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;



public class CreaateAccountPage {
    private WebDriverWait wait;
    private WebDriver driver;

    private String variable;

    @FindBy(tagName="h1") private WebElement lbl_mensaje;
    @FindBy(xpath="//*[@id='email_create']") private WebElement txt_email;
    @FindBy(xpath="//*[@id='SubmitCreate']") private WebElement btn_Ingresar;


    public CreaateAccountPage(WebDriver d) {
        driver = d;
        wait = new WebDriverWait(driver,30);
        PageFactory.initElements(driver,this);
    }
    public void mensaje (){
        wait.until(ExpectedConditions.visibilityOf(lbl_mensaje));
        variable = lbl_mensaje.getText();
        System.out.print(variable);
        lbl_mensaje.isDisplayed();
    }
    public void IngresarEmail(String email){
        wait.until(ExpectedConditions.visibilityOf(txt_email));
        txt_email.sendKeys(email);
    }

    public void ClickRegistrar(){
        wait.until(ExpectedConditions.elementToBeClickable(btn_Ingresar));
        btn_Ingresar.click();
    }
}
