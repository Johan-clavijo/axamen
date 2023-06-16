class Carro {
  constructor(marca, modelo, año, color, precio) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.color = color;
    this.precio = precio;
  }
}

const carros = [
  new Carro('Toyota', 'Corolla', 2021, 'Rojo', 25000),
  new Carro('Honda', 'Civic', 2020, 'Azul', 22000),
  new Carro('Ford', 'Mustang', 2019, 'Negro', 35000),
  new Carro('Chevrolet', 'Camaro', 2022, 'Blanco', 40000)
];


console.log(carros);

