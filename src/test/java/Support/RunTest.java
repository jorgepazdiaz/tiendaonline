package Support;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
        tags = "@pruebaReport",
        glue = "Definitions",
        plugin = {"json:target/cucumber-report/cucumber.json", "html:target/cucumber-report/"},
        monochrome = true,
        strict = true)
public class RunTest {
}
