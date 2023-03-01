// si la base o la altura son negativos se debe responden no existen areas negativas
const areaDeCuadrado = (b, h) => {
  return new Promise((resolve, reject) => {
    if (b < 0) {
      reject("No existen areas negativas");
    } else if (h < 0) {
      reject("No existen areas negativas");
    } else {
      resolve(b * h);
    }
  });
};

const areaDelTriangulo = (b, h) => {
  return new Promise((resolve, reject) => {
    if (b < 0) {
      reject("No existen areas negativas");
    }
    if (h < 0) {
      reject("No existen areas negativas");
    }
    resolve((b * h) / 2);
  });
};


const areaCirculo = (r) => {
  const PI = 3.1416;
  return new Promise((resolve, reject) => {
    // TODO: Analicemos si esta condicion es necesaria A = 2*PI*r**2
    if (r < 0) {
      reject("No existen areas negativas");
    }
    resolve(2 * PI * r ** 2);
  });
};

// TODO: HACER LA FUNCION PARA Calcular el area de un trapezio ((Bm + bm)/ 2) * h
const areaTrapecio = () => {

}

const calculosDeArea = async () => {
  try {
    const calculoCuadrado = await areaDeCuadrado(2, 5);
    console.log(
      "🚀 ~ file: ej-205-review.js:18 ~ calculosDeArea ~ calculoCuadrado",
      calculoCuadrado
    );
    // await areaDeCuadrado(-2, 3);
    // await areaDeCuadrado(2, -7);
    const calculoTriangulo = await areaDelTriangulo(2, 6);
    console.log(
      "🚀 ~ file: ej-205-review.js:36 ~ calculosDeArea ~ calculoTriangulo",
      calculoTriangulo
    );
    // await areaDelTriangulo(-4, 4);
    // await areaDelTriangulo(4, -3);

  } catch (error) {
    console.log("🚀 ~ REJECT - calculosDeArea ~ error", error);
  }
};

calculosDeArea();
