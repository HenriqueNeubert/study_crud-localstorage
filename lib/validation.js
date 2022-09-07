
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

// function alertError($campo){ //?UNIFICAR MENSAGENS
//       console.log('Digite corretamente as informações do campo ' + $campo);
//       // alert('Digite seu primeiro nome ou seu nome completo')
// }

export function validationInfo(){
//       //NAME
//       var name = document.querySelector("#name") //PEGA id
//       var nameValue = name.value
//       const regex = /[0-9]/;

//       if(name.value.length <= 2){
//             alertError('Nome')
//             name.focus();
//       }
//       if(regex.test(nameValue) == true){
//             alertError('Nome')
//             name.focus();
//             return false
//       }
//       //PHONE
//       var phoneLength = document.querySelector("#phone").value.length
//       if( phoneLength < 8){
//             alertError('Telefone')
//             document.querySelector("#phone").focus();
//       }
//       //E-MAIL
//       var emailValue = document.querySelector("#email").value
//       if( emailValue == "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1 ){
//             alertError('E-mail')
//             document.querySelector("#email").focus();
//       }
//       //CIDADE
//       var cityValue = document.querySelector("#city").value
//       if( cityValue == ""){
//             alertError('Cidade')
//             document.querySelector("#city").focus();
//       }
//       //MESSAGE
//       var messageValue = document.querySelector("#desc").value
//       if( messageValue == ""){
//             alertError('Mensagem')
//             document.querySelector("#desc").focus();
//       }
//       //CHECKBOX
//       var checkbox1 = document.querySelector("#option-1") //PEGA id
//       var checkbox2 = document.querySelector("#option-2") //PEGA id
//       var checkbox3 = document.querySelector("#option-3") //PEGA id
//       if(!checkbox1.checked){
//             alert('O preenchimento de Termos e contrato é obrigatório')
//             checkbox1.focus();
//       }

}












