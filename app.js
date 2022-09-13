import {validationInfo} from './lib/validation.js'; // Import arquivos de validação

//! Organizado as const's juntas e antes de todas as funções que serão utilizadas  
const mainForm = document.getElementById('formulario')
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputMessage = document.getElementById('message');
const inputCity = document.getElementById('city');
const inputCheckboxA = document.getElementById('checkboxA');
const inputSubmit = document.getElementById('submit');
const inputIndex = document.getElementById('index');
const listCheckbox = document.getElementById('check');

function handleFormSubmit(event) //? resolveFormularioEnvio //! (event) = recebe um evento 
{ 
      event.preventDefault(); //! cancela/para o evento, neste caso o load da página

      const objectContactData = getContactData()  //! objectContactData =  guarda os dados dos inputs vindos da getContactData(), cria um objeto
      if(!validationInfo(objectContactData)){ //! valida os dados pela validationInfo()
            return false //! se for falso, para por aqui e de acordo com as validações retorna algum erro
      } //! caso não tenha nenhum erro, o código continua
      
      handleInsertLocalStorage(objectContactData) //! organiza e envia dados para o localstorage

      handleDataList() //! resolve dados da lista, lista = a qual fica abaixo do formulário      
}

function handleFormSubmitUpdate(event) //! chamada toda vez que se da o submit
{      
      event.preventDefault(); //! pausa o reload

      const objectContactData = getContactData() //!pega os dados dos inputs
      
      if(!validationInfo(objectContactData, false)){ //!valida os dados 
            return false 
      }

      //? resolve atualizar local
      handleUpdateLocalStorage(objectContactData) 

      handleDataList() //! atualiza a listagem      

      handleStateForm('create') //! retorna o estado

      setTimeout(function(){ //! após tempo determinado retorna um alerta
            alert('Contato ' + objectContactData.name + ' foi atualizado com sucesso')
      }, 200)
}

// Invoke function
handleDataList()

function handleDataList()
{
  const arr = getDataLocalstorage() //! pega um array
  let htmlList = ''
  
  arr.map((item, index)=>{//!callback, item = objeto, index = index do item / vindo  do map
            htmlList += 
            `<tr>
                  <td>
                        ${index}
                  </td>
                  <td>
                        ${item.name}
                  </td>
                  <td>
                        ${item.date} - ${item.hour}
                  </td>
                  <td>
                        <button class="show" index="${index}">
                              +
                        </button>
                        <button class="delete" index="${index}">
                              -
                        </button>
                        <button class="edit" index="${index}">
                              Editar
                        </button>
                  </td>
            </tr>`
      }) //! o map cria um loop que fica listando os itens do array um por um com suas informações
      
      const tableBody = document.querySelector('tbody')
      tableBody.innerHTML = htmlList //! imprimi a lista
      const buttonsShow = document.querySelectorAll('button.show') //? pega todos os botões
      const buttonsDelete = document.querySelectorAll('button.delete') //? pega todos os botões
      const buttonsEdit = document.querySelectorAll('button.edit') //? pega todos os botões

      
      buttonsShow.forEach(button => button.addEventListener('click', 
      detailItem)) //!pega todos os botões e adiciona no evento de click as devidas funções

      buttonsDelete.forEach(button => button.addEventListener('click', 
      deleteItem)) //!pega todos os botões e adiciona no evento de click as devidas funções

      buttonsEdit.forEach(button => button.addEventListener('click', 
      updateItem)) //!pega todos os botões e adiciona no evento de click as devidas funções
} 

function handleStateForm(state)
{
      if(state === 'create'){
            mainForm.reset() //! se for um novo cadastro ele reseta todos os campos
            listCheckbox.style.display = 'block'; //! deixa os checkbox visiveis
            inputSubmit.value = 'ENVIAR' //! texto do btn

            //! redireciona o evento de submit para handleFormSubmit (create)
            mainForm.addEventListener(  
                  'submit', handleFormSubmit, false  
            );
            //! retira o evento de submit
            mainForm.removeEventListener(
                  'submit', handleFormSubmitUpdate, false  
            );
      }else if(state ==='update'){
            listCheckbox.style.display = 'none'; //! none em todos os checkbox
            inputSubmit.value = 'EDITAR' //! altera o value do submit
            //! retira o evento de submit
            mainForm.removeEventListener(
                  'submit', handleFormSubmit, false // 
            );
            //! redireciona o evento de submit para handleFormSubmitUpdate (Update)
            mainForm.addEventListener(
                  'submit', handleFormSubmitUpdate, false // 
            );
      }
}

//*UPDATE/SHOW/DELETE --- START

function updateItem(event)
{
      const index = event.target.getAttribute('index') //!pega o atributo index, que possui o index adicionado em handleDataList()
      const arr = getDataLocalstorage() //! pega o array do localstorage
      const item = arr[index] 

      window.location.href='#formulario'; //!faz a página subir até o formulário
      //! Pega cada um dos input's e coloca neles os dados que vieram do local storage (obs, de acordo com seus respectivos id's)
      inputName.value = item.name
      inputPhone.value = item.phone
      inputEmail.value = item.email
      inputCity.value = item.city
      inputMessage.value = item.message
      inputIndex.value = index //! input escondido que contém o id

      handleStateForm('update') //! retorna o estado com string update    
}

function deleteItem(event)
{
      const index = event.target.getAttribute('index') //! pega index do input
      const arr = getDataLocalstorage() //! array com dados do localstorage
      const item = arr[index] //! array com os index

      //! verifica se a pessoa realmente quer excluir o item
      if(!confirm("Tem certeza que gostaria de excluir o contato " 
      + item.name + '?')){
            return false //! se não, retorna false e para por aqui
      }
      
      arr.splice(index, 1)
      
      insertLocalStorage(arr) //! atualiza o localstorage com dados atualizado
      handleDataList() //! atualiza a listagem
      setTimeout(function(){ //! após tempo determinado retorna um alert informando
            alert('Contato ' + item.name + ' foi deletado da lista')
      }, 200)
}

function detailItem(event)
{      
      const index = event.target.getAttribute('index') //! pega o index do item

      const arr = getDataLocalstorage() //! pega dados do localstore
      const item = arr[index] //! coloca esse array em uma const
      const details = 
      `
      Nome = ${item.name}
      E-mail = ${item.email}
      Telefone = ${item.phone}
      Cidade = ${item.city}
      Mensagem = ${item.message}
      `
      alert(details)
}

function handleUpdateLocalStorage(objectContactData)
{
      const arr = getDataLocalstorage() //! faz um array com os dados do localstorage
      const newArray = arr.map((item, index)=>{     
        //! novo array usando o array anterior
        //! e criando um map (uma forma de loop), que 
        //! nos traz um index (id)        
            //! compara o index vindo do local com o atual
            if(index === parseInt(objectContactData.index)){                  
                  return objectContactData //! se for igual retorna o objeto
            }
            return item
      })      
      
      //! por fim envia o novo array já
      //! atualizado para o localstorage
      insertLocalStorage(newArray) 
}

//*UPDATE/SHOW/DELETE --- END


function handleInsertLocalStorage(objectContactData) //! cria um array, e adiciona nele o objeto dos dados (objectContactData)
{
      const arr = getDataLocalstorage()

      arr.push(objectContactData)
      
      insertLocalStorage(arr) //! por ultimo inserir no localstorage
}

function getDataLocalstorage() //! pega os dados do localstorage
{
      const dataLocalStorage = localStorage.getItem('contacts') //! pega tabela 'contacts'
      if(dataLocalStorage){// !verifica se tem algo
            return JSON.parse(dataLocalStorage) //! parse = recria o array
      }

      return [] //! retorna este array
}

function insertLocalStorage(arr) //!recebe um array, que contem os objetos com dados do formulário
{
      arr = JSON.stringify(arr) //! transforma dados em uma string
      localStorage.setItem('contacts', arr) //! envia para o localstorage, 'contacts' é o nome da tabela e 'arr' o que ela recebe
}

function getContactData() //!guarda todos os dados digitados no formulário em um objeto
{
      return {
            name: inputName.value,
            phone: inputPhone.value,
            email: inputEmail.value,
            city: inputCity.value,
            message: inputMessage.value,
            index: inputIndex.value,
            checkboxA: true,
            date: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString(),
      }
}

mainForm.addEventListener(
      'submit', handleFormSubmit, false // 
);


