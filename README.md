# BasicoJavaScript
    https://platzi.com/clases/basico-javascript/
# Class#1
    ¿Qué es JavaScript?
        -> Debilmente tipado
        -> Dinamico
        -> Lenguaje interpretado
        -> JS es Backwards Compatible(Babel)
# Class#2
    ¿Por qué JavaScript?
        Los 3 lenguajes estándares:
            -> HTML
            -> CSS
            -> JS
            * Web Assembly
# Class#3
    Elementos de un Lenguaje de Programación: Variables, Funciones y Sintaxis
    -> typeof nameVar => How know type of a variable.
# Class#4
    Variables
# Class#5
    Funciones
        -> Declarativas:
            function myFunction() {
                return "Hello";
            }

        -> Expresión o función anomima
            var myFunction = function(a, b) {
                return a + b;
            }

            saludar = function(estudiante){ 
                console.log(`hola ${estudiante}`) 
            }
# Class#6
    ¿Cuándo utilizar una función declarativa y una expresiva?
# Class#7
    Scope
# Class#8
    Hoisting
# Class#9
    Coerción
        -> Implicita:
            El casting se hace de forma automatica.
        -> Explicita:
            Obligamos el casting.
            String(Variable);
            Number(variable);
            a.toString();
             _________________________
            |Number + Number = Number|
            |Number + String = String|
            |String + Number = String|
            |String + String = String|
            |________________________|
# Class#10
    Valores: Truthy y Falsy
        -> Boolean(0) => False
        -> Boolean(n!=0) => True
        -> Boolean(NaN) => False
        -> Boolean(undefined) => False
        -> Boolean("") => False
        -> Boolean({}) => True
        -> Boolean([]) => True
        -> Boolean(function (){}) => True
# Class#11
    Operadores: Asignación, Comparación y Aritméticos.
        Operadores:
            Binarios:
                Suma:
                    x + y
                Resta:
                    x - y
                División:
                    x / y
                Multiplicación:
                    x * y
                Concatenación:
                    "x" + "y"
                Asignación:
                    x = y
                Comparación:
                    Comparación:
                        x ==  x
                    Comparación estricta:
                        "x" === x
                    Diferencia:
                        x != y
                    Diferencia estricta:
                        x !== y
                    Menor:
                        x < y
                    Menor o igual:
                        x <= y
                    Mayor:
                        x > y
                    Mayor o igual:
                        x >= y
                    And:
                        x && y
                    Or:
                        a || b
            Unarios:
                Negación:
                    !false => true
                    !true => false
            Incremeto:
                Ingrementar en +1:
                    variable++
                Ingrementar en +n:
                    variable += n
# Class#12
    Condicionales: If, Else else if
        if(){

        }else if(){

        }else{
            
        }
        Operador ternario:
            contition ? true : false
            (x < y) ? "is true" : "is false"
# Class#13
    Switch
        switch(validate case){
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;
    case n:
        console.log("n");
        break;
    default:
        console.log("default");
    }
# Class#14
    Arrays
        Definir:
            var nameArray = ["", 1, 3, "n"];
        Longitud:
            nameArray.length
        Recorrido:
            nameArray[i=(0,nameArray.length-1)];
        Agregar elementos al final del array:
            nameArray.push("NewValue");
        Eliminar último valor del array:
            nameArray.pop("element");
        Agregar valor al inicio del array:
            nameArray.unshift("value");
        Eliminar elemento del inicio del Array:
            nameArray.shift("value");
        Saber la posición de un elemento:
            nameArray.indexOf("Value or element");
# Class#15
    Loops: For y For...of
        -> for(var i=0; i < nameArray.length; i++){
                console.log(nameArray[i]);
            }

        -> for(var i of nameArray){
                console.log(i);
            }
# Class#16
    Loops: While
        i = 0;
        while(i < nameArray.length){
            console.log(nameArray[i]);
            i++;
        }
# Class#17
    Objects
        Definir:
            var myCar = {
                marca: "Toyota",
                model: "Corolla",
                anyo: 2020
            };
        Consultar:
            myCar.marca;
            myCar.model;
            myCar.anyo;
        Metodos de objetos:
            var myCar = {
                marca: "Toyota",
                model: "Corolla",
                anyo: 2020,
                detalleDelAuto: function(){
                    console.log(`Auto ${this.model} ${this.anyo}`)
                }
            };
        Ejecutar metodo del objeto:
            myCar.detalleDelAuto();
# Class#18
    Objects: Función constructura:
        Constructor:
            function Auto(marca, modelo, anyo){
                this.maca = marca;
                this.modelo = modelo;
                this.anyo = anyo;
                this.detalleDelAuto = function(){
                    console.log(`Auto ${this.model} ${this.anyo}`)
                }
            }
        Instanciar objetos:
            var myCar1 = new Auto("Tesla", "Model 3", 2020);
            var myCar2 = new Auto("Toyota", "Corolla", 2018);
            var myCarN = new Auto("Tesla", "Model x", 2021);
        Solución del reto:
          var arry = [];
          for (var i=0; i<30; i++){
              arry.push(new Auto(`Tesla${i+1}`, `Model ${i+1}`, `2020`));
              console.log(arry[i].detalleDelAuto());
          }
# Class#19
    Métodos de recorrido de Arrays
        Example:
            var articulos = [
                {nombre : "Bici", costo: 3000},
                {nombre : "Tv", costo: 2500},
                {nombre : "Libro", costo: 320},
                {nombre : "Celular", costo: 10000},
                {nombre : "Laptop", costo: 20000},
                {nombre : "Teclado", costo: 500},
                {nombre : "Audifonos", costo: 1700},
            ];
        filter:
            var articulosFiltrados = articulos.filter(function(articulo){
                return articulo.costo <= 500
            });
        map:
            var nombreArticulos = articulos.map(function(articulo){
                return articulo.nombre;
            });
# Class#20
    Recorriendo Arrays con .find(), .forEach() y .some()
        find():
            var encuentraArticulo = articulos.find(function(articulo){
                return articulo.nombre === "Laptop";
            });
        forEach():
            articulos.forEach(function(articulo){
                    console.log(articulo.nombre);
            });
        some():
            var articulosBaratos = articulos.some(function(articulo){
                return articulo.costo <= 700;
            });
# Links
    Expressions and operators:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
    Github:
        https://github.com/degranda/jsBasico-
    Hoisting:
        -> https://www.youtube.com/watch?v=uI6o97A4IrI
        -> https://developer.mozilla.org/es/docs/Glossary/Hoisting