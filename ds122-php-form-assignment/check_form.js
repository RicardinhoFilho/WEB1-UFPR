$("form").on("submit", (ev) => {
    console.log("ei")
    var name = document.querySelector("#name").value.length;
    var email = document.querySelector("#inputEmail").value.length;
    var senha = document.querySelector("#inputPassword").value.length;
    var confirmaSenha = document.querySelector("#inputConfirmPassword").value;
    var teste = true;
    if (name == 0) {
      document.querySelector("#name-helper").innerHTML = "O campo nome é obrigatório";
      teste = false;

    }
    if (email == 0) {
      document.querySelector("#email-helper").innerHTML = "O campo email é obrigatório";
      teste = false;
    }
    if (senha == 0) {
      document.querySelector("#senha-helper").innerHTML = "O campo senha é obrigatório";
      teste = false;
    }
    if (confirmaSenha != document.querySelector("#inputPassword").value) {
      document.querySelector("#c-senha-helper").innerHTML = "Os campos senha não coincidem";
      teste = false;
    }

    if (teste == false) {
      ev.preventDefault();
    }

  });
