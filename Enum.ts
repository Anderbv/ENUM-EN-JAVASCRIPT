//Que es un ENUM?

const persona = {
    name: 'John',
    age: 30,
}

persona.name = "xd";
persona["age"] = 31;

//Digamos que tenemos 1 millon de files en nuestra App
//Y que algunos acceden a la propiedad age

//Pero digamos que cambiamos de nombre la propiedad age por edad

//Component 1

persona["age"] = 31;

//Component 2

persona["age"] = 31;

//Component 3

persona["age"] = 31;

//Component 4

persona["age"] = 31;

//Entonces yo tendria ir en componente en componente poniendo edad

//Esto es muy tedioso

/****************************************** */

const personaPropierties = {
    NAME: "name",
    AGE: "age",
}

persona[personaPropierties.AGE] = 31;

//Component 2

persona[personaPropierties.AGE] = 31;

//Component 3

persona[personaPropierties.AGE] = 31;

//Component 4

persona[personaPropierties.AGE] = 31;

//Igualmente penseme que al incio en AGE: age pero el dia de mañana cambio el nombre por edad
//facil ahora voy a personaPropiertes y modifico AGE: edad

const BetterpersonPropierties = {
    NAME: "name",
    AGE: "edad",
}

//ya no tengo que ir entre componente y componente cambiando la noticon de punto y poniendo el nuevo
//nombre de la propiedad



/*HAY OTRA MEJOR FORMA DE HACERLO? */

//SI.

enum PersonPropiertes {
    NAME = "name",
    AGE = "age",
}

//Y lo utilizaos igual

//Los enums se utlizan para enumaraciones, tambien podemos acceder a las propiedades de enum de diferentes maneras
//Si vamos al browser veremos que dice muestra las propiedades y valores y luego viene
//0: "name"
//1: "age"
//Y es porque justamente esto sirve para enumerar cosas, entonces esta es la forma más correcta, es más correcta que utilizar
//una constante, un objeto porque al aplicar un ENUM es typescript por ejm lo podemos utilizar como un tipo entonces nosotros
//podriamos decir tranquilamente por ejm qué interface Persona va a ser igual a un name y un age

interface Persona {
    name: string;
    age: number;
}

//crearemos un enum que haga de videojuego

enum TypeVideoGames {
    ROL = "rol",
    SIMULATOR = "simulator"
}

interface BetterPersona {
    name: string;
    age: number;
    videoJuego: TypeVideoGames; // que quiere decir esto? que ahora yo tengo un obj persona
}

const personaVideoJuego: BetterPersona = {
    name: "ander",
    age: 18,
    videoJuego: TypeVideoGames.ROL, //Podemos utilizarlo de esta manera, esto solucionaria muchas cosas

}