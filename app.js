import {validationInfo} from './lib/validation.js'; //! mudar para geral 
// import {localstorage} from './lib/bd_localstorage.js'; 

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const inputMessage = document.getElementById('message');
const inputCity = document.getElementById('city');
const inputCheckboxA = document.getElementById('checkboxA');

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
                        ${item.name}
                  </td>
                  <td>
                        ${item.date} - ${item.hour}
                  </td>
                  <td>
                        <button index="${index}">
                              +
                        </button>
                  </td>
            </tr>`
      })
      
      const tableBody = document.querySelector('tbody')
      tableBody.innerHTML = htmlList
      const buttons = document.querySelectorAll('button')
debugger
      buttons.forEach(button => button.addEventListener('click', 
      detailItem))
} 

function detailItem(elem)
{
      const index = elem.getAttribute('index')

      const arr = getDataLocalstorage()
      const item = arr[index]
      const details = 
      `
      Nome = ${item.name}
      `
      alert(details)
}

function handleInsertLocalStorage(objectContactData)
{
      const arr = getDataLocalstorage()

      arr.push(objectContactData)
      
      insertLocalStorage(arr)
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
            checkboxA: true,
            date: new Date().toLocaleDateString(),
            hour: new Date().toLocaleTimeString(),
      }
}

document.getElementById('formulario').addEventListener(
      'submit', handleFormSubmit, false // 
);


