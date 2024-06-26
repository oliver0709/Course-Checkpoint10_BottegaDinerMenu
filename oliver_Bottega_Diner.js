// Datos del menu
const menu = {
  desayuno: {
    entrada: { "Pancakes": 5.99, "Omelette": 6.99, "French Toast": 5.99 },
    acompañamientos: { "Bacon": 2.99, "Sausage": 2.99, "Hash Browns": 1.99 }
  },
  almuerzo: {
    entrada: { "Burger": 8.99, "Sandwich": 7.99, "Salad": 6.99 },
    acompañamientos: { "Fries": 2.99, "Coleslaw": 2.49, "Fruit Cup": 2.99 }
  },
  cena: {
    entrada: { "Burger": 9.99, "Sandwich": 8.99, "Salad": 7.99 },
    acompañamientos: { "Fries": 3.99, "Coleslaw": 3.49, "Fruit Cup": 3.99 }
  }
};

// Comentarios
const comentarios = [
  "¡Buena elección!",
  "¡Es uno de mis favoritos!",
  "¡Mmm, suena delicioso!",
  "¡Tienes buen gusto!",
  "¡Excelente elección!"
];

// Para mostrar el menu
function mostrarMenu(tipoMenu) {
  let menuString = `MENU DE ${tipoMenu.toUpperCase()}\nEntradas:\n`;
  for (const item in menu[tipoMenu].entrada) {
    menuString += `- ${item}: ${menu[tipoMenu].entrada[item].toFixed(2)} EUR\n`;
  }
  menuString += "\nAcompañamientos:\n";
  for (const item in menu[tipoMenu].acompañamientos) {
    menuString += `- ${item}: ${menu[tipoMenu].acompañamientos[item].toFixed(2)} EUR\n`;
  }
  alert(menuString);
}

// Para obtener un comentario aleatorio
function comentAleatorio() {
  return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Para manejar la selección y verificacion de errores
function obtenerSeleccion(itemsMenu, tipo) {
  let seleccion;
  while (true) {
    seleccion = prompt(`Por favor selecciona un ${tipo} de las siguientes opciones:\n${Object.keys(itemsMenu).join(", ")}`).toLowerCase();
    const validItems = Object.keys(itemsMenu).map(item => item.toLowerCase());
    if (validItems.includes(seleccion)) {
      
      for (const item in itemsMenu) {
        if (item.toLowerCase() === seleccion) {
          return item;
        }
      }
    } else {
      alert("Selección inválida, por favor intenta de nuevo.");
    }
  }
}

// Funcion principal del menu del restaurante
function menuRestaurante() {
  let tipoMenu;
  while (true) {
    tipoMenu = prompt("¡Bienvenido al Restaurante Bottega! Por favor selecciona que deseas ordenar: desayuno, almuerzo, o cena").toLowerCase();
    if (menu.hasOwnProperty(tipoMenu)) {
      break;
    } else {
      alert("Tipo de comida inválido, por favor intenta de nuevo.");
    }
  }

  mostrarMenu(tipoMenu);

  const entrada = obtenerSeleccion(menu[tipoMenu].entrada, "entrada");
  alert(`${comentAleatorio()} ${entrada} cuesta ${menu[tipoMenu].entrada[entrada].toFixed(2)} EUR`);

  const acompañamiento1 = obtenerSeleccion(menu[tipoMenu].acompañamientos, "acompañamiento");
  alert(`${comentAleatorio()} ${acompañamiento1} cuesta ${menu[tipoMenu].acompañamientos[acompañamiento1].toFixed(2)} EUR`);

  const acompañamiento2 = obtenerSeleccion(menu[tipoMenu].acompañamientos, "acompañamiento");
  alert(`${comentAleatorio()} ${acompañamiento2} cuesta ${menu[tipoMenu].acompañamientos[acompañamiento2].toFixed(2)} EUR`);

  const costoTotal = menu[tipoMenu].entrada[entrada] + menu[tipoMenu].acompañamientos[acompañamiento1] + menu[tipoMenu].acompañamientos[acompañamiento2];
  alert(`Tu orden tiene un costo total de ${costoTotal.toFixed(2)} EUR. ¡Gracias por comer con nosotros!`);
}

menuRestaurante();
