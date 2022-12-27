const elBoss = {
  nombre: "Jose Luis",
  edad: 194,
  poderes: [
    {
      nombre: "Paranoia",
      description: "intentandome escapar de esta paranoia",
      imagenes: [
        {
          imagen: {
            url: "has conseguido acceder a la primera imagen de la paranoia",
          },
        },
        {
          imagen: {
            url: "has conseguido acceder a la segunda imagen de la paranoia",
          },
        },
      ],
    },
    {
      nombre: "Petrificasió",
      description: "Te mira y te petrifica",
      imagenes: [
        {
          imagen: {
            url: "has conseguido acceder a la primera imagen de la petrificasió",
          },
        },
        {
          imagen: {
            url: "has conseguido acceder a la segunda imagen de la petrificasió",
          },
        },
      ],
    },
    {
      nombre: "Fuego",
      description: "Pues eso, fuego",
      imagenes: [
        {
          imagen: {
            url: "has conseguido acceder a la primera imagen del fueguito",
          },
        },
        {
          imagen: {
            url: "has conseguido acceder a la segunda imagen del fueguito",
          },
        },
      ],
    },
  ],
  familiares: [
    {
      nombre: "Julian",
      edad: 342,
      parentesco: "Primo",
    },
    {
      nombre: "Paquito",
      edad: 312,
      parentesco: "Tío",
    },
    {
      nombre: "Emma",
      edad: 13,
      parentesco: "Sobrina",
    },
    {
      nombre: "Julia",
      edad: 100,
      parentesco: "Hermana",
    },
  ],
  reto: [
    [
      {
        sigueElReto: [
          {
            sigueElReto2: {
              sigueElReto3: {
                pareceQueSabesBucearEntreObjetos: {
                  definitivamenteSabes: [
                    "Jose",
                    "Luis,",
                    "te",
                    "miro",
                    "y",
                    23121,
                    "te",
                    "destruyo",
                    {
                      mensajeFinal:
                        "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript!",
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
  ],
};

// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";

console.log(elBoss.nombre + ", te conozco y no me das ningún miedo!");

// 2: le vamos a decir "conozco tus poderes y lo que hacen!"
// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"
//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"
//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"

console.log("conozco tus poderes y lo que hacen!");

const {poderes, familiares, reto} = elBoss;

const [poder1, poder2, poder3] = poderes;

console.log(`tu primer poder es ${poder1.nombre} y hace ${poder1.description}`);
console.log(`tu primer poder es ${poder2.nombre} y hace ${poder2.description}`);
console.log(`tu primer poder es ${poder3.nombre} y hace ${poder3.description}`);

