const medicos = [
  {
    id: 1,
    profesion: "cardiologo",
    nombre: "Luis Perez",
    precio: 25,
    jornada: "matutina",
  },
  {
    id: 2,
    profesion: "ginecologo",
    nombre: "Maria Gonzalez",
    precio: 20,
    jornada: "matutina",
  },
  {
    id: 3,
    profesion: "cirujano",
    nombre: "Andres Martinelli",
    precio: 45,
    jornada: "vespertina",
  },
  {
    id: 4,
    profesion: "kinesiologo",
    nombre: "Luisa Beltran",
    precio: 50,
    jornada: "matutina",
  },
  {
    id: 5,
    profesion: "psicologo",
    nombre: "Martin Gonzalez",
    precio: 40,
    jornada: "vespertina",
  },
  {
    id: 6,
    profesion: "terapeuta",
    nombre: "José Ruiz",
    precio: 10,
    jornada: "vespertina",
  },
  {
    id: 7,
    profesion: "odontologo",
    nombre: "Andrea Garcia",
    precio: 8,
    jornada: "matutina",
  },
  {
    id: 8,
    profesion: "terapeuta",
    nombre: "Marco Gomez",
    precio: 18,
    jornada: "matutina",
  },
  {
    id: 9,
    profesion: "cardiologo",
    nombre: "Carmen Gonzalez",
    precio: 25,
    jornada: "vespertina",
  },
  {
    id: 10,
    profesion: "ginecologo",
    nombre: "Sergio Arocha",
    precio: 28,
    jornada: "matutina",
  },
];

function especialidad() {
  const especialidad = prompt(
    "Ingrese tres o más caracteres de la especialidad que desea:"
  );
  const resultado = medicos.filter((el) => el.profesion.includes(especialidad));
  if (resultado.length > 0) {
    const especialidades = resultado.map((el) => el.profesion).join(", ");
    alert("Tenemos las siguientes especialidades: " + especialidades);
  } else {
    alert("No tenemos esa especialidad.");
  }
}
function jornada() {
  const consultaid = prompt(
    "Se sabe el id del médico que desea consultar? S/N"
  ).toUpperCase();
  if (consultaid === "S") {
    const ingresar = parseInt(prompt("Ingrese el id del médico"));
    const resultadoid = medicos.find((el) => el.id === ingresar);
    if (resultadoid) {
      alert(
        `El médico ${resultadoid.nombre} trabaja en la jornada ${resultadoid.jornada}`
      );
    } else {
      alert("No se consiguió ningún médico con ese id. Revise nuevamente.");
    }
  } else if (consultaid === "N") {
    const nombreDoc = prompt("Ingrese al menos tres caracteres del nombre del medico").toLowerCase();
    const resultado = medicos.filter(el => el.nombre.toLowerCase().includes(nombreDoc));
    if (resultado.length>0) {
        resultado.forEach(el => {
            alert(`El médico ${el.nombre} trabaja en la jornada ${el.jornada}.`)
        })
    } else {
        alert("No hay médicos con esos caracteres. Intente de nuevo.");
    }
  } else {
    alert("Opción inválida");
  }
}
function honorarios() {
    let listado="";
    medicos.forEach(el=>{listado += `${el.id}. ${el.nombre}\n`})
    const docid = parseInt(prompt(`De qué médico desea saber sus honorarios? Ingrese el valor del id:
    \n${listado}`))
    const doctor = medicos.find(el => el.id === docid);
    if (doctor) {
        alert(`Los honorarios del Dr. ${doctor.nombre} son de $ ${doctor.precio}`);
    } else {
        alert("No existe tal id. Revise.");
    }

}

function nuevoProfesional() {
  const nuevoEspecialidad = prompt("Ingrese la especialidad");
  const nuevoDoctor = prompt(
    "Ingrese primer nombre y primer apellido del nuevo médico"
  );
  const nuevoPrecio = parseInt(prompt("Ingrese sus honorarios"));
  const nuevoJornada = prompt("Jornada matutina o vespertina?");

  const nuevoMiembro = {
    id: medicos.length + 1,
    profesion: nuevoEspecialidad,
    nombre: nuevoDoctor,
    precio: nuevoPrecio,
    jornada: nuevoJornada,
  };
  medicos.push(nuevoMiembro);
  alert(nuevoMiembro.nombre.toUpperCase() + " ingresado con éxito.");
}

let usuario = prompt("Antes de empezar, ingrese su usuario (respuesta: admin)");

if (usuario != "admin") {
  alert("No puede ingresar al sistema");
} else if (usuario === "admin") {
  let password = prompt("Ingrese su contraseña: (respuesta: admin)");
  if (password != "admin") {
    alert("Password erróneo. Reinicie el sistema.");
  } else {
    let entrada;
    do {
      entrada = parseInt(
        prompt(`Bienvenido al sistema de gestión. Por favor, seleccione el número correspondiente a las siguientes opciones:
      
      1. Buscar especialidad.
      2. Jornada laboral del médico.
      3. Honorarios por médico.
      4. Ingresar nuevo profesional.
      0. Salir del sistema.`)
      );

      switch (entrada) {
        case 0:
          alert("Gracias por su visita.");
          break;
        case 1:
          especialidad();
          break;
        case 2:
          jornada();
          break;
        case 3:
          honorarios();
          break;
        case 4:
          nuevoProfesional();
          break;
        default:
          alert("Opción inválida");
          break;
      }
    } while (entrada != 0);
  }
} else {
  alert("Opción inválida. Elija la opción correcta.");
}
