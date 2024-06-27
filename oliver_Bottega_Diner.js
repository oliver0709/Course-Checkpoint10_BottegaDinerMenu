// Datos del menu
const menu = {
  desayuno: {
    entrada: { "Pancakes": 3.99, "Omelette": 4.59, "French Toast": 3.29 },
    principal: { "Bacon": 4.99, "Sausage": 5.99, "Hash Browns": 5.99 },
    postre: { "Muffin": 2.49, "Croissant": 2.99, "Fruit Cup": 3.49 }
  },
  almuerzo: {
    entrada: { "Soup": 3.99, "Salad": 4.99, "Bruschetta": 5.49 },
    principal: { "Burger": 8.99, "Sandwich": 7.99, "Pasta": 9.99 },
    postre: { "Ice Cream": 3.99, "Brownie": 4.49, "Pie": 4.99 }
  },
  cena: {
    entrada: { "Soup": 4.99, "Salad": 5.99, "Bruschetta": 6.49 },
    principal: { "Burger": 9.99, "Sandwich": 8.99, "Pasta": 10.99 },
    postre: { "Ice Cream": 4.99, "Brownie": 5.49, "Pie": 5.99 }
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
  let menuString = `MENU DE ${tipoMenu.toUpperCase()}\n\nEntradas:\n`;
  for (const item in menu[tipoMenu].entrada) {
    menuString += `- ${item}: ${menu[tipoMenu].entrada[item].toFixed(2)} EUR\n`;
  }
  menuString += "\nPlatos Principales:\n";
  for (const item in menu[tipoMenu].principal) {
    menuString += `- ${item}: ${menu[tipoMenu].principal[item].toFixed(2)} EUR\n`;
  }
  menuString += "\nPostres:\n";
  for (const item in menu[tipoMenu].postre) {
    menuString += `- ${item}: ${menu[tipoMenu].postre[item].toFixed(2)} EUR\n`;
  }
  alert(menuString);
}

// Para obtener un comentario aleatorio
function comentAleatorio() {
  return comentarios[Math.floor(Math.random() * comentarios.length)];
}

// Para manejar la selección con verificación de errores
function obtenerSeleccion(itemsMenu, tipo) {
  let seleccion;
  while (true) {
    let opciones = `Como ${tipo}, por favor selecciona una de las siguientes opciones:\n`;
    for (const item in itemsMenu) {
      opciones += `${item}: ${itemsMenu[item].toFixed(2)} EUR\n`;
    }
    seleccion = prompt(opciones).toLowerCase();
    const validItems = Object.keys(itemsMenu).map(item => item.toLowerCase());
    if (validItems.includes(seleccion)) {
      
      for (const item in itemsMenu) {
        if (item.toLowerCase() === seleccion) {
          const precio = itemsMenu[item].toFixed(2);
          if (confirm(`Has elegido ${item}: ${precio} EUR. ¿Es correcto?`)) {
            alert(comentAleatorio());
            return item;
          }
        }
      }
    } else {
      alert("Selección inválida, por favor intenta de nuevo.");
    }
  }
}

// Funcion principal del menú del restaurante
function menuRestaurante() {
  let hora = prompt("¡Bienvenido al Restaurante Bottega! Para ser atendido, por favor ingresa la hora actual en formato hh.mm (por ejemplo, 13.45):");
  let tipoMenu;

  let [horas, minutos] = hora.split('.').map(Number);

  if (horas >= 0 && horas < 6) {
    alert("El restaurante está cerrado.");
    return;
  } else if (horas >= 6 && horas < 12) {
    tipoMenu = 'desayuno';
  } else if (horas >= 12 && horas < 16) {
    tipoMenu = 'almuerzo';
  } else if (horas >= 16 && horas < 24) {
    tipoMenu = 'cena';
  } else {
    alert("Hora inválida, por favor intenta de nuevo.");
    return;
  }

  mostrarMenu(tipoMenu);

  const entrada = obtenerSeleccion(menu[tipoMenu].entrada, "entrada");
  const principal = obtenerSeleccion(menu[tipoMenu].principal, "plato principal");
  const postre = obtenerSeleccion(menu[tipoMenu].postre, "postre");

  const costoTotal = menu[tipoMenu].entrada[entrada] + menu[tipoMenu].principal[principal] + menu[tipoMenu].postre[postre];

  alert(
    `El detalle y coste de tu orden es el siguiente:\n` +
    `- ${entrada.padEnd(20, ' ')} ${menu[tipoMenu].entrada[entrada].toFixed(2)} EUR\n` +
    `- ${principal.padEnd(20, ' ')} ${menu[tipoMenu].principal[principal].toFixed(2)} EUR\n` +
    `- ${postre.padEnd(20, ' ')} ${menu[tipoMenu].postre[postre].toFixed(2)} EUR\n\n` +
    `Total: ${' '.repeat(14)} ${costoTotal.toFixed(2)} EUR\n\n` +
    `¡Gracias por comer con nosotros!`
  );
}

menuRestaurante();
