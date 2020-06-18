package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class InformacionPage {
    private WebDriverWait wait;
    private WebDriver driver;

    private String variable;

    @FindBy(tagName = "h1") private WebElement lbl_Account;
    public InformacionPage(WebDriver d){
        driver = d;
        wait = new WebDriverWait(driver,30);
        PageFactory.initElements(driver,this);
    }

    public void CapturarMensaje(){
        wait.until(ExpectedConditions.visibilityOf(lbl_Account));
        variable= lbl_Account.getText();
        System.out.print(variable+"\nPrueba Exitosa");

    }
}
