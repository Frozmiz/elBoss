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

// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"
// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"
// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"
// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"

const [fam1, fam2, fam3, fam4] = familiares;

console.log(`conozco a tu ${fam1.parentesco} ${fam1.nombre}`);
console.log(`conozco a tu ${fam2.parentesco} ${fam2.nombre}`);
console.log(`conozco a tu ${fam3.parentesco} ${fam3.nombre}`);
console.log(`conozco a tu ${fam4.parentesco} ${fam4.nombre}`);

// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".

const [reto1] = reto;

  for (const retito of reto1) {
      for (const key in retito.sigueElReto) {
        
          const frase = [...retito.sigueElReto[key].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes];
          
          frase.splice(5,1);
          frase.splice(7,1);

          console.log(frase.join(" "));
          
      }
      
  };

// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.

const {nombre, description, imagenes} = poder1;
const {nombre1, description1, imagenes1} = poder2;
const {nombre2, description2, imagenes2} = poder3;

for (const bonus of poderes) {
  for (const key in bonus.imagenes) {
    
      const imagen = bonus.imagenes[key].imagen.url;
      
      console.log(imagen);
      
  }
};

// haremos la media de las edades de los familiares de elBoss.

const media = familiares.reduce(
  (accumulator, familiar) => accumulator + familiar.edad,0
);

console.log(`El super innecesario dato de la media de edad de tus familiares es de ${media/familiares.length}`);

// y mostraremos por pantalla el mensajeFinal.

for (const retito of reto1) {
  for (const key in retito.sigueElReto) {
    
      const frase = [...retito.sigueElReto[key].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes];
      
      console.log(frase[8].mensajeFinal);

      // const fraseFinal = frase.filter((position) => {
      //   return position.mensajeFinal;
      // });

      // console.log(fraseFinal[0]);
      
  }
  
};