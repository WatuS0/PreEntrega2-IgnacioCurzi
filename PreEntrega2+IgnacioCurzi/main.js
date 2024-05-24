

// Datos de inflacion del año 2014 hasta el año 2024
// Fuente: https://estudiodelamo.com/inflacion-argentina-anual-mensual/


/*
    Consignas a cumplir:
    ✅ funciones de orden superior (métodos de búsqueda y transformación)
    ✅ funciones comunes con variables, constantes, arrays, etc.
    ✅ Objetos JS - array de objetos literales
    ✅ Lógica funcional de la aplicación
    ✅ entradas - salidas (prompt, confirm, alert, console.algo)
*/

alert("Bienvenido a nuestra calculadora de inflacion solo trabaja del año 2014 al año 2024 (Mes de abril), Muchas gracias!")    
console.log("Bienvenido a nuestra calculadora de inflacion solo trabaja del año 2014 al año 2024 (Mes de abril), Muchas gracias!")

alert("Acordate de usar parametros validos! No ingresar una fecha anterior a la inicial como final.")
console.log("Acordate de usar parametros validos! No ingresar una fecha anterior a la incial como final.")
const años = [ 
    {codigo: 1, nombre: '2014', Enero: 4.95, febrero: 5.12, marzo: 2.43, abril: 1.72, mayo: 1.87, junio: 1.51, julio: 1.35, agosto: 1.63, septiembre: 1.59, octubre: 1.23, noviembre: 0.91, diciembre: 0.95},
    {codigo: 2, nombre: '2015', Enero: 0.20, febrero: 0.25, marzo: 0.98, abril: 0.74, mayo: 1.48, junio: 1.32, julio: 1.44, agosto: 1.33, septiembre: 1.35, octubre: 0.93, noviembre: 0.95, diciembre: 2.00},
    {codigo: 3, nombre: '2016', Enero: 9.00, febrero: 5.00, marzo: 2.40, abril: 1.50, mayo: 3.60, junio: 2.90, julio: 2.70, agosto: 0.40, septiembre: 0.40, octubre: 0.60, noviembre: 1.10, diciembre: 0.80},
    {codigo: 4, nombre: '2017', Enero: 1.59, febrero: 2.07, marzo: 2.37, abril: 2.66, mayo: 1.43, junio: 1.19, julio: 1.73, agosto: 1.40, septiembre: 1.90, octubre: 1.51, noviembre: 1.38, diciembre: 3.14},
    {codigo: 5, nombre: '2018', Enero: 1.76, febrero: 2.42, marzo: 2.34, abril: 2.74, mayo: 2.08, junio: 3.74, julio: 3.10, agosto: 3.89, septiembre: 6.53, octubre: 5.39, noviembre: 3.15, diciembre: 2.57},
    {codigo: 6, nombre: '2019', Enero: 2.91, febrero: 3.77, marzo: 4.68, abril: 3.44, mayo: 3.06, junio: 2.72, julio: 2.20, agosto: 3.95, septiembre: 5.89, octubre: 3.29, noviembre: 4.25, diciembre: 3.74},
    {codigo: 7, nombre: '2020', Enero: 2.25, febrero: 2.01, marzo: 3.34, abril: 1.50, mayo: 1.54, junio: 2.24, julio: 1.93, agosto: 2.70, septiembre: 2.84, octubre: 3.76, noviembre: 3.16, diciembre: 4.01},
    {codigo: 8, nombre: '2021', Enero: 4.04, febrero: 3.57, marzo: 4.81, abril: 4.08, mayo: 3.32, junio: 3.17, julio: 3.00, agosto: 2.47, septiembre: 3.55, octubre: 3.52, noviembre: 2.53, diciembre: 3.84},
    {codigo: 9, nombre: '2022', Enero: 3.88, febrero: 4.69, marzo: 6.73, abril: 6.05, mayo: 5.05, junio: 5.30, julio: 7.41, agosto: 6.97, septiembre: 6.17, octubre: 6.35, noviembre: 4.92, diciembre: 5.12},
    {codigo: 10, nombre: '2023', Enero: 6.03, febrero: 6.63, marzo: 7.68, abril: 8.40, mayo: 7.77, junio: 5.95,julio: 6.34, agosto: 12.44, septiembre: 12.75, octubre: 8.30, noviembre: 12.81, diciembre: 25.47},
    {codigo: 11, nombre: '2024', Enero: 20.61, febrero: 13.24, marzo: 11.01, abril: 8.83}
];


function calcularInflacion(precioInicial, añoInicio, mesInicio, añoFin, mesFin) {
    const meses = ["Enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "ago", "sep", "oct", "nov", "dic"]
    
    let inflacionAcumulada = 1.0 // Establezco la inflacion en 1.0 osea que todavia no hay nada de inflacion
    console.log(`Inicio del cálculo de inflación.`)
    console.log(`Precio inicial: `, precioInicial)
    console.log(`Desde: `, mesInicio, añoInicio)
    console.log(`Hasta: `, mesFin, añoFin)


    // Encontrar los índices de los años de inicio y fin
    let iAñoInicio = años.findIndex(a => a.nombre === añoInicio.trim()) //
    let iAñoFin = años.findIndex(a => a.nombre === añoFin.trim())       // Estos findindex buscan el mes y año ingresados por el usuario y en el caso que no los encuentres devuelven un -1


    if (iAñoInicio === -1 || iAñoFin === -1) {
        console.error("Año de inicio o fin no encontrado en los datos.")
        return null;
    }

    // Calcula la inflación acumulada mes a mes
    for (let i = iAñoInicio; i <= iAñoFin; i++) {
        let año = años[i]
        let mesinicioindex = (i === iAñoInicio) ? meses.indexOf(mesInicio.trim()) : 0            // Se utiliza el condicional ? para recorrer los meses desde el inicio hasta el final 
        let mesfinIndex = (i === iAñoFin) ? meses.indexOf(mesFin.trim()) : meses.length - 1

        for (let j = mesinicioindex; j <= mesfinIndex; j++) {
            if (meses[j] in año) {
                console.log(`Mes: ${meses[j]} ${año.nombre}, Inflación: ${año[meses[j]]}%`)
                inflacionAcumulada *= (1 + (año[meses[j]] / 100))
            }
        }
    }

    // Aplicar la inflación acumulada al precio inicial

    console.log("Inflación acumulada: %"+((inflacionAcumulada - 1) * 100).toFixed(1))
    const precioFinal = precioInicial * inflacionAcumulada
    console.log("Precio final ajustado por inflación: $" + precioFinal.toFixed(2) + " Con una inflacion acumulada de: %" +((inflacionAcumulada - 1) * 100).toFixed(1))
    return precioFinal
}

function ingresodedatos() {
    // Obtiene los datos del usuario                                                                             // Ejemplos de entrada:
    const precioInicial = parseFloat(prompt("Ingrese el precio del producto, inmueble o capital inicial: (Ejemplo 2500")) // 10
    const añoInicio = prompt("Ingrese el año de inicio (Ejemplo: 2014):")                                        // 2017
    const mesInicio = prompt("Ingrese el mes de inicio (Ejemplo: Enero):")                                       // febrero
    const añoFin = prompt("Ingrese el año de fin (Ejemplos 2023):")                                              // 2024
    const mesFin = prompt("Ingrese el mes de fin (Ejemplos diciembre):")                                         // enero


    // Calcula el precio ajustado por la inflación
    const precioFinal = calcularInflacion(precioInicial, añoInicio, mesInicio, añoFin, mesFin)


    if (precioFinal !== null) {
        alert("El precio ajustado por inflación es de $: " + precioFinal.toFixed(2))
        console.log("El precio ajustado por inflación es de $:", precioFinal.toFixed(2))
    } else {
        console.log("Error al calcular la inflación, verifique los datos ingresados.")
        alert("Error al calcular la inflacion, verifique los datos ingresados")
    }
}


ingresodedatos()
