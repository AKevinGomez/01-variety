const numeros = [10, 20, 30, 40, 50];

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

numeros.push(60);

const nuevoArr = [...meses, 'Junio'];

// nuevoArr.forEach((mes)=>{
//     if(mes == 'Septiembre') {
//         console.log('Septiembre, existe');
//     } else {console.log('No existe ese mes pa');
//     }
// })

// console.table();

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('Pagaste con tarjeta');
        break;
    default:
        console.log('Aun no has pagado')
        break;
        
}
