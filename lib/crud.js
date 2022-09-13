export function updateItem(event)
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

export function deleteItem(event)
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

export function detailItem(event)
{      
      const index = event.target.getAttribute('index')

      const arr = getDataLocalstorage()
      const item = arr[index]
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

export function handleUpdateLocalStorage(objectContactData)
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

