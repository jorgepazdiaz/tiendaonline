Feature: Agregar un nuevo registro
  Yo como usuario
  quiero agregar un nuevo registro
  para poder comprar los productos

  Scenario: Agregar Registro
    Given la web debe estar disponible
    When  Ingresa a Sign In
    And Valido Pagina
    And Ingreso Email "xpruebita@test.com"
    And Dar click
    And Validar Pagina del Formulario de Registro
    And Ingresar datos
      | check | nombre   | apellido | email              | password   | dia | mes | anio |
      | mr.   | Erickson | Diaz     | xpruebita@test.com | Micasa752@ | 30  | 8   | 1988 |
    And Selecciona las notificaciones
    And Ingresar datos de direccion
      | nombreDir | apellidoDir | compania | direccion1  | direccion2      | ciudad  | estado | codigoPostal | Pais          | InfoAdicional | Telefono  | Celular   | NombreDireccion |
      | Erickson  | Diaz        | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
    And registrar cuenta
    Then Valiar Registro

  @pruebaReport
  Scenario Outline: Agregar Registro
    Given la web debe estar disponible
    When  Ingresa a Sign In
    And Valido Pagina
    And Ingreso Email EmailInicial "<email>"
    And Dar click
    And Validar Pagina del Formulario de Registro
    And Ingresar datos check "<check>"
    And Ingresar datos nombre "<nombre>"
    And Ingresar datos apellido "<apellido>"
    And Ingresar datos email "<email>"
    And Ingresar datos password "<password>"
    And Ingresar datos dia "<dia>"
    And Ingresar datos mes "<mes>"
    And Ingresar datos anio "<anio>"
    And Selecciona las notificaciones
    And Ingresar datos de direccion nombreDir "<nombreDir>"
    And Ingresar datos de direccion apellidoDir "<apellidoDir>"
    And Ingresar datos de direccion compania "<compania>"
    And Ingresar datos de direccion direccion1 "<direccion1>"
    And Ingresar datos de direccion direccion2 "<direccion2>"
    And Ingresar datos de direccion ciudad "<ciudad>"
    And Ingresar datos de direccion estado "<estado>"
    And Ingresar datos de direccion codigoPostal "<codigoPostal>"
    And Ingresar datos de direccion Pais "<Pais>"
    And Ingresar datos de direccion InfoAdicional "<InfoAdicional>"
    And Ingresar datos de direccion Telefono "<Telefono>"
    And Ingresar datos de direccion Celular "<Celular>"
    And Ingresar datos de direccion NombreDireccion "<NombreDireccion>"
    And registrar cuenta
    Then Valiar Registro

    Examples:
      | check | nombre   | apellido | email                 | password   | dia | mes       | anio | nombreDir | apellidoDir | compania | direccion1  | direccion2      | ciudad  | estado | codigoPostal | Pais          | InfoAdicional | Telefono  | Celular   | NombreDireccion |
      | mr.   | Erickson | Paz      | 4xxpruebita1@test.com | Micasa752@ | 30  | Agosto    | 19888 | Erickson  | Diaz        | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
      | mr.   | Pether   | Paz      | test111@test.com      | Micasa752@ | 22  | Noviembre | 1990 | Helberth  | Paz         | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
      #| mrs.  | Anais    | Paz      | 4xxxpruebita3@test.com | Micasa752@ | 31  | Marzo     | 1997 | Mylene    | Paz         | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
      #| mr.   | Liam     | Paz      | 4pruebita4@test.com    | Micasa752@ | 16  | Julio     | 2017 | Jordihel  | Diaz        | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
      #| mrs.  | Margoth  | Diaz     | 4pruebita5@test.com    | Micasa752@ | 2   | Junio     | 1964 | Mylene    | Diaz        | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
      #| mr.   | Dionicio | Paz      | 4pruebita6@test.com    | Micasa752@ | 23  | Noviembre | 1962 | Coco      | Paz         | pruebita | Mi casa 752 | avenida no esta | Central | Alaska | 12345        | United States | algo mas      | 935404484 | 935404484 | Mi Casita       |
