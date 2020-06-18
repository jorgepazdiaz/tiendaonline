$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Registro.feature");
formatter.feature({
  "name": "Agregar un nuevo registro",
  "description": "  Yo como usuario\n  quiero agregar un nuevo registro\n  para poder comprar los productos",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Agregar Registro",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pruebaReport"
    }
  ]
});
formatter.step({
  "name": "la web debe estar disponible",
  "keyword": "Given "
});
formatter.step({
  "name": "Ingresa a Sign In",
  "keyword": "When "
});
formatter.step({
  "name": "Valido Pagina",
  "keyword": "And "
});
formatter.step({
  "name": "Ingreso Email EmailInicial \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Dar click",
  "keyword": "And "
});
formatter.step({
  "name": "Validar Pagina del Formulario de Registro",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos check \"\u003ccheck\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos nombre \"\u003cnombre\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos apellido \"\u003capellido\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos dia \"\u003cdia\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos mes \"\u003cmes\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos anio \"\u003canio\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Selecciona las notificaciones",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion nombreDir \"\u003cnombreDir\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion apellidoDir \"\u003capellidoDir\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion compania \"\u003ccompania\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion direccion1 \"\u003cdireccion1\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion direccion2 \"\u003cdireccion2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion ciudad \"\u003cciudad\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion estado \"\u003cestado\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion codigoPostal \"\u003ccodigoPostal\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion Pais \"\u003cPais\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion InfoAdicional \"\u003cInfoAdicional\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion Telefono \"\u003cTelefono\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion Celular \"\u003cCelular\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Ingresar datos de direccion NombreDireccion \"\u003cNombreDireccion\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "registrar cuenta",
  "keyword": "And "
});
formatter.step({
  "name": "Valiar Registro",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "check",
        "nombre",
        "apellido",
        "email",
        "password",
        "dia",
        "mes",
        "anio",
        "nombreDir",
        "apellidoDir",
        "compania",
        "direccion1",
        "direccion2",
        "ciudad",
        "estado",
        "codigoPostal",
        "Pais",
        "InfoAdicional",
        "Telefono",
        "Celular",
        "NombreDireccion"
      ]
    },
    {
      "cells": [
        "mr.",
        "Erickson",
        "Paz",
        "4xxpruebita1@test.com",
        "Micasa752@",
        "30",
        "Agosto",
        "19888",
        "Erickson",
        "Diaz",
        "pruebita",
        "Mi casa 752",
        "avenida no esta",
        "Central",
        "Alaska",
        "12345",
        "United States",
        "algo mas",
        "935404484",
        "935404484",
        "Mi Casita"
      ]
    },
    {
      "cells": [
        "mr.",
        "Pether",
        "Paz",
        "test111@test.com",
        "Micasa752@",
        "22",
        "Noviembre",
        "1990",
        "Helberth",
        "Paz",
        "pruebita",
        "Mi casa 752",
        "avenida no esta",
        "Central",
        "Alaska",
        "12345",
        "United States",
        "algo mas",
        "935404484",
        "935404484",
        "Mi Casita"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Agregar Registro",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pruebaReport"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "la web debe estar disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.laWebDebeEstarDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresa a Sign In",
  "keyword": "When "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresaASignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Valido Pagina",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.validoPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingreso Email EmailInicial \"4xxpruebita1@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresoEmailEmailInicial(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dar click",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.darClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validar Pagina del Formulario de Registro",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[contains(text(),\u0027Your personal information\u0027)]\u0027 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat PageObjects.FormularioPage.Verificar(FormularioPage.java:52)\r\n\tat Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro(RegistroDefinitions.java:61)\r\n\tat ✽.Validar Pagina del Formulario de Registro(file:///D:/Web%20Automation%20Curso%20-%20Selenium/TiendaOnline/src/test/resources/features/Registro.feature:30)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your personal information\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JORGEPAZ\u0027, ip: \u0027192.168.8.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\jpaz\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49416}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: cedfbb2da2af2d6371b2d88fdd2f9843\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your personal information\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat PageObjects.FormularioPage.Verificar(FormularioPage.java:52)\r\n\tat Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro(RegistroDefinitions.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar datos check \"mr.\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosCheck(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos nombre \"Erickson\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosNombre(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos apellido \"Paz\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosApellido(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos email \"4xxpruebita1@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosEmail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos password \"Micasa752@\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos dia \"30\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDia(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos mes \"Agosto\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosMes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos anio \"19888\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosAnio(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selecciona las notificaciones",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.seleccionaLasNotificaciones()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion nombreDir \"Erickson\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionNombreDir(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion apellidoDir \"Diaz\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionApellidoDir(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion compania \"pruebita\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCompania(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion direccion1 \"Mi casa 752\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionDireccion1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion direccion2 \"avenida no esta\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionDireccion2(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion ciudad \"Central\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCiudad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion estado \"Alaska\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionEstado(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion codigoPostal \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCodigoPostal(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Pais \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionPais(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion InfoAdicional \"algo mas\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionInfoAdicional(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Telefono \"935404484\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionTelefono(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Celular \"935404484\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCelular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion NombreDireccion \"Mi Casita\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionNombreDireccion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "registrar cuenta",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.registrarCuenta()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Valiar Registro",
  "keyword": "Then "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.valiarRegistro()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Agregar Registro",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pruebaReport"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "la web debe estar disponible",
  "keyword": "Given "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.laWebDebeEstarDisponible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingresa a Sign In",
  "keyword": "When "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresaASignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Valido Pagina",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.validoPagina()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ingreso Email EmailInicial \"test111@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresoEmailEmailInicial(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Dar click",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.darClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validar Pagina del Formulario de Registro",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: //*[contains(text(),\u0027Your personal information\u0027)]\u0027 (tried for 30 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat PageObjects.FormularioPage.Verificar(FormularioPage.java:52)\r\n\tat Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro(RegistroDefinitions.java:61)\r\n\tat ✽.Validar Pagina del Formulario de Registro(file:///D:/Web%20Automation%20Curso%20-%20Selenium/TiendaOnline/src/test/resources/features/Registro.feature:30)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your personal information\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JORGEPAZ\u0027, ip: \u0027192.168.8.116\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\jpaz\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:49454}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6c4e82b00ab5a2daf1315895093b2d3b\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your personal information\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat PageObjects.FormularioPage.Verificar(FormularioPage.java:52)\r\n\tat Definitions.RegistroDefinitions.validarPaginaDelFormularioDeRegistro(RegistroDefinitions.java:61)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Ingresar datos check \"mr.\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosCheck(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos nombre \"Pether\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosNombre(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos apellido \"Paz\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosApellido(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos email \"test111@test.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosEmail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos password \"Micasa752@\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos dia \"22\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDia(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos mes \"Noviembre\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosMes(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos anio \"1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosAnio(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Selecciona las notificaciones",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.seleccionaLasNotificaciones()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion nombreDir \"Helberth\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionNombreDir(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion apellidoDir \"Paz\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionApellidoDir(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion compania \"pruebita\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCompania(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion direccion1 \"Mi casa 752\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionDireccion1(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion direccion2 \"avenida no esta\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionDireccion2(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion ciudad \"Central\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCiudad(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion estado \"Alaska\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionEstado(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion codigoPostal \"12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCodigoPostal(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Pais \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionPais(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion InfoAdicional \"algo mas\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionInfoAdicional(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Telefono \"935404484\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionTelefono(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion Celular \"935404484\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionCelular(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Ingresar datos de direccion NombreDireccion \"Mi Casita\"",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.ingresarDatosDeDireccionNombreDireccion(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "registrar cuenta",
  "keyword": "And "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.registrarCuenta()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Valiar Registro",
  "keyword": "Then "
});
formatter.match({
  "location": "Definitions.RegistroDefinitions.valiarRegistro()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});