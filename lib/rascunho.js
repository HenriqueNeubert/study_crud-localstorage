 
// // export function validation(){
// //       // if(document.dados.name.value == "" || //NOME
// //       // document.dados.name.value.length < 4)
// //       // {
// //       // alert( "Preencha campo NOME corretamente!" );
// //       // document.dados.name.focus();
// //       // return false;
// //       // }

// //       // if( document.dados.email.value =="" || //E-MAIL
// //       // document.dados.email.value.indexOf('@')==-1 || //indexOf - verifica se tem @ ou .
// //       // document.dados.email.value.indexOf('.')==-1 )
// //       // {
// //       // alert( "Preencha campo E-MAIL corretamente!" );
// //       // document.dados.email.focus();
// //       // return false;
// //       // }
// // //}

// // // export function validationPhone(){ //FORMA NÚMERO 1
// // //       var phoneValue = document.querySelector("#phone").value //PEGA VALOR
// // //       var phoneLength = phoneValue.length //PEGA TAMANHO

// // //       if(phoneLength === 11){

// // //             phoneValue = '(' + phoneValue.substring(0, 2)
// // //             + ')' + phoneValue.substring(2, 6)
// // //             + phoneValue.substring(6, 7)
// // //             + '-' + phoneValue.substring(7, 14) //MOSTRA NÚMERO APÓS DDD
// // //       }
// // //       else if(phoneLength < 11 || phoneLength > 11){
// // //             alert('Número de telefone errado!')
// // //       }
// // //       console.log(phoneValue);
// // }

// // export function validationPhone(){ //FORMA NÚMERO 2
// //       var phone = document.querySelector("#phone") //PEGA id
// //       var phoneValue = phone.value //PEGA VALOR
// //       var isMobile = phoneValue.length === 11; // VERIF SE FOR CELULAR
// //       var ajustPhone;
// //       console.log('dsfsd');

// //       ajustPhone = phoneValue.replace(/\-/g, ''); //RETIRA HIFEN
// //       phone = ajustPhone // PASSA AS ALT PARA PHONE

// //       if(isMobile){
// //             const partA = phone.slice(0,7); //SEPARANDO EM DUAS PARTES
// //             const partB = phone.slice(7,11);
// //             ajustPhone = partA + '-' + partB;
// //       }else{
// //             const partA = phone.slice(0,6); //SEPARANDO EM DUAS PARTES
// //             const partB = phone.slice(6,10);
// //             ajustPhone = partA + '-' + partB;
// //       }

// //       phone = ajustPhone // PASSA AS ALT PARA PHONE

// // }


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