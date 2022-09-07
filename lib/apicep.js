// $('#cep').blur(function(){ //? Evento de Sair
//       var valor = $(this).val(); //? Pega o valor digitado no campo CEP 

//       $.ajax({
//             url: "https://viacep.com.br/ws/" + valor + "/json/",
//             type: "GET",
//             success: function(dados,status){
//                   $("#cidade").val(dados.localidade);
//                   $("#uf").val(dados.uf);
//             },
//             error: function(){
//                   alert("Error");
//             }
//       })

      // $.get("https://viacep.com.br/ws/" + valor + "/json/", function(dados, status){ //? Function de callback //$valor = imprime aqui o valor do campo CEP
      //       console.log(dados.localidade);
      //       $('#cidade').val(dados.localidade)
      //       $('#uf').val(dados.uf)
      // });
// })

{/* <section class="py-5">
                  <input id="cep" class="form-control" style="max-width: 200px; margin: 1px auto 0 auto;" type="text" placeholder="Digite seu CEP" /></br>
                  <input id="cidade" class="form-control" style="max-width: 200px; margin: 1px auto 0 auto;" type="text" placeholder="Cidade" /></br>
                  <input id="uf" class="form-control" style="max-width: 200px; margin: 1px auto 0 auto;" type="text" placeholder="UF" /></br>
            </section> */}