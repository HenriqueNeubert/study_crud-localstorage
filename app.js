import {validationInfo} from './lib/validation.js'; //! mudar para geral 
import {localstorage} from './lib/bd_localstorage.js'; //! mudar para geral 

// import * as validations from './lib/validations.js';
// import {cep} from './lib/apicep.js'; 

// function myFunction(e){
//       e.preventDefault() // CANCELA O EVENTO DE ENVIO
//       const arr = [] // CRIA UM ARRAY

//       const valueName = inputName.value // PEGA VALOR DO NAME
//       const valueEmail = inputEmail.value // PEGA VALOR DO E-MAIL//
      // debugger abrir
      // arr.push({ // PUSH - ADICIONA UM OU MAIS ELEMENTOS AO ARRAY 
      //       name: valueName,
      //       email: valueEmail,
      // })  
      // arr.push({
      //       name: 'Henrique',
      //       email: valueEmail,
      // })     
      // arr.push({
      //       name: 'Jose',
      //       email: valueEmail,
      // }) 
      // arr.push({
      //       name: 'Neubert',
      //       email: valueEmail,
      // })         
      
      // const searchJose = arr.find(pessoa => {
      //       if (pessoa.name === "Jose"){
      //             return pessoa;
      //       }                        
      // })
      // const searchJose2 = arr.filter(pessoa => {
      //       if (pessoa.name === "Jose"){
      //             return pessoa;
      //       }                        
      // })
      // const searchJose3 = arr.includes(pessoa => {
      //       if (pessoa.name === "Jose"){
      //             return pessoa;
      //       }                        
      // })

      // debugger
      // alert(valueName) // RETORNO O VALOR PREENCHIDO
      // alert(valueEmail) 
// }//

document.getElementById('formulario').addEventListener(
      'submit', validationInfo, false // 
);


