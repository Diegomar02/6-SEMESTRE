

  function mensaje1(){
    alertify
    .alert("Esta es la prueba 1.", function(){
    alertify.message('OK, todo bien');
    });
  }

  function mensaje2(){
    alertify.confirm("Prueba 2: Confirmación",
    function(){
    alertify.success('Ok');
    },
    function(){
    alertify.error('Cancel');
    });
  }


  function mensaje3(){
    alertify.success('Excelente, funciona bien');
  }

  function mensaje4(){
    alertify.error('Funciona bien, pero es un mensaje de error JEJE');
  }

