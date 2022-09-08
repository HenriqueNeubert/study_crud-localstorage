function alertError($campo){ 
      alert('Erro no campo ' + $campo)
      return false
}

export function validationInfo(objectContactData)
{
      if(!objectContactData.name ||
            objectContactData.name.length <= 2){
            return alertError('Nome')
      } 

      if(!objectContactData.phone || 
            objectContactData.phone.length < 8){// ?=pode não existir
            return alertError('Telefone')
      }

      const emailValue = objectContactData.email
      if( emailValue == "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1 ){
            return alertError('E-mail')
      }

      
      if(!objectContactData?.city?.length){ 
            return alertError('Cidade')
      }
      
      if(!objectContactData.message || !objectContactData.message.length){
            return alertError('Mensagem')
      }

      if(!objectContactData.checkboxA){
            return alert('O preenchimento de Termos e contrato é obrigatório')
      }

      return true
}












