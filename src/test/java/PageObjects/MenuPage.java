package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class MenuPage {
    private WebDriverWait wait;
    private WebDriver driver;

    @FindBy(xpath="//a[@class='login']") private WebElement lnk_sing_in;

    public MenuPage(WebDriver d) {
        driver = d;
        wait = new WebDriverWait(driver,30);
        PageFactory.initElements(driver,this);
    }

    public void registrar(){
        wait.until(ExpectedConditions.elementToBeClickable(lnk_sing_in));
        lnk_sing_in.click();
    }
}
