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
# Links
    Expressions and operators:
        https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
    Github:
        https://github.com/degranda/jsBasico-
    Hoisting:
        -> https://www.youtube.com/watch?v=uI6o97A4IrI
        -> https://developer.mozilla.org/es/docs/Glossary/Hoisting