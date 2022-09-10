import {validationInfo} from './lib/validation.js'; //! mudar para geral 
// import {localstorage} from './lib/bd_localstorage.js'; 

//Provisório

function darkMode()
{
      
}

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

function handleFormSubmit(event) 
{
      event.preventDefault();

      const objectContactData = getContactData()  
      
      if(!validationInfo(objectContactData)){     
            return false 
      }
      
      handleInsertLocalStorage(objectContactData)

      handleDataList()      
}

function handleFormSubmitUpdate(event)
{      
      event.preventDefault();

      const objectContactData = getContactData()
      
      if(!validationInfo(objectContactData, false)){     
            return false 
      }

      handleUpdateLocalStorage(objectContactData)

      handleDataList()

      handleStateForm('create')

      setTimeout(function(){
            alert('Contato ' + objectContactData.name + ' foi atualizado com sucesso')
      }, 200)
}

function handleStateForm(state)
{
      if(state === 'create'){
            mainForm.reset()
            listCheckbox.style.display = 'block';
            inputSubmit.value = 'ENVIAR'
      
            mainForm.addEventListener(
                  'submit', handleFormSubmit, false  
            );
            mainForm.removeEventListener(
                  'submit', handleFormSubmitUpdate, false  
            );
      }else if(state ==='update'){
            listCheckbox.style.display = 'none';
            inputSubmit.value = 'EDITAR'
            mainForm.removeEventListener(
                  'submit', handleFormSubmit, false // 
            );
            mainForm.addEventListener(
                  'submit', handleFormSubmitUpdate, false // 
            );
      }
}

// Invoke function
handleDataList()

function handleDataList()
{
      const arr = getDataLocalstorage()
      let htmlList = ''

      arr.map((item, index)=>{//callback
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
      })
      
      const tableBody = document.querySelector('tbody')
      tableBody.innerHTML = htmlList
      const buttonsShow = document.querySelectorAll('button.show')
      const buttonsDelete = document.querySelectorAll('button.delete')
      const buttonsEdit = document.querySelectorAll('button.edit')

      buttonsShow.forEach(button => button.addEventListener('click', 
      detailItem))

      buttonsDelete.forEach(button => button.addEventListener('click', 
      deleteItem))

      buttonsEdit.forEach(button => button.addEventListener('click', 
      updateItem))
} 

function updateItem(event)
{
      const index = event.target.getAttribute('index')
      const arr = getDataLocalstorage()
      const item = arr[index]

      window.location.href='#formulario';

      inputName.value = item.name
      inputPhone.value = item.phone
      inputEmail.value = item.email
      inputCity.value = item.city
      inputMessage.value = item.message
      inputIndex.value = index

      
      handleStateForm('update')
      
}

function deleteItem(event)
{
      const index = event.target.getAttribute('index')
      const arr = getDataLocalstorage()
      const item = arr[index]

      if(!confirm("Tem certeza que gostaria de excluir o contato " + item.name + '?')){
            return false
      }
      
      arr.splice(index, 1)
      
      insertLocalStorage(arr)
      handleDataList()
      setTimeout(function(){
            alert('Contato ' + item.name + ' foi deletado da lista')
      }, 200)
}
function detailItem(event)
{      
      const index = event.target.getAttribute('index')

      const arr = getDataLocalstorage()
      const item = arr[index]
      const details = 
      `
      Nome = ${item.name}
      Mensagem = ${item.message}
      `
      alert(details)
}

function handleInsertLocalStorage(objectContactData)
{
      const arr = getDataLocalstorage()

      arr.push(objectContactData)
      
      insertLocalStorage(arr)
}

function handleUpdateLocalStorage(objectContactData)
{
      const arr = getDataLocalstorage()
      const newArray = arr.map((item, index)=>{            
            if(index === parseInt(objectContactData.index)){                  
                  return objectContactData
            }
            return item
      })      
      
      insertLocalStorage(newArray)
}

function getDataLocalstorage()
{
      const dataLocalStorage = localStorage.getItem('contacts')
      if(dataLocalStorage){
            return JSON.parse(dataLocalStorage)
      }

      return []
}

function insertLocalStorage(arr)
{
      arr = JSON.stringify(arr)
      localStorage.setItem('contacts', arr)
}

function getContactData()
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


