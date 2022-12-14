function alertError($campo){ // !Mensagem de erro padrão
      alert('Erro no campo ' + $campo)
      return false
}
export function validationInfo(objectContactData, validCheckbox = true) //! objectContactData = dados do formulário 
{
      if(!objectContactData.name ||
            objectContactData.name.length <= 2){ //! se não haver dados do input X ou (||) se houver mas não haver mais que 2 caracteres, retorna erro
            return alertError('Nome')
      } 

      if(!objectContactData.phone || 
            objectContactData.phone.length < 8){// !=pode não existir
            return alertError('Telefone')
      }

      const emailValue = objectContactData.email
      if( emailValue == "" || emailValue.indexOf('@')==-1 || emailValue.indexOf('.')==-1 ){ //! -1 = se não houver
            return alertError('E-mail')
      }

      
      if(!objectContactData?.city?.length){ 
            return alertError('Cidade')
      }
      
      if(!objectContactData.message || !objectContactData.message.length){
            return alertError('Mensagem')
      }

      if(validCheckbox){
            if(!objectContactData.checkboxA){
                  return alert('O preenchimento de Termos e contrato é obrigatório')
            }
      }

      return true
}












