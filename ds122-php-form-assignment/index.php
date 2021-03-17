<?php
require("check_form.php");
?>

<!DOCTYPE html>
<html>

<head>
  <title>Teste PHP</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <script src="check_form.js"></script>
</head>

<body>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1 class="page-header">Teste Formulário PHP</h1>



        <form class="form-horizontal" enctype="multipart/form-data" method="post" action="<?php echo $_SERVER['PHP_SELF']; ?>">

          <div class="form-group">
            <label for="name">Nome Completo</label>
            <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Nome Completo" name="name">
            <small id="name-helper" class="text-danger"></small>
          </div>

          <div class="form-control">

            <input type="file" name="image">

          </div>


          <div class="form-group">
            <label for="inputEmail">Endereço de email</label>
            <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Seu email" name="email">
            <small id="email-helper" class="text-danger"></small>
          </div>

          <div class="form-group">
            <label for="inputPassword">Senha</label>
            <input type="password" class="form-control" id="inputPassword" placeholder="Senha" name="password">
            <small id="senha-helper" class="text-danger"></small>
          </div>

          <div class="form-group">
            <label for="inputConfirmPassword">Senha</label>
            <input type="password" class="form-control" id="inputConfirmPassword" placeholder="Confirme sua Senha" name="confirmPassword">
            <small id="c-senha-helper" class="text-danger"></small>
          </div>

          <input type="submit" class="btn btn-primary" value="Enviar" name="enviar">
        </form>






        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
          $name = $_POST['name'];
          $email = $_POST['email'];
          $password = $_POST['password'];
          $cPassword = $_POST['confirmPassword'];
          $formatosPermitidos = array("png", "jpeg");
          $file_extension = pathinfo($_FILES["image"]["name"], PATHINFO_EXTENSION);

          if (($_FILES["image"]["size"] > 1000000)) {
            $erro = true;
            $erro_image = "Imagem muito grande";
          } else {
            $target = "./imagens/imagem.$file_extension";
            if (move_uploaded_file($_FILES["image"]["tmp_name"], $target)) {
              $response = array(
                "type" => "success",
                "message" => "Image uploaded successfully."
              );
            } else {
              $erro = true;
              $erro_image = "Erro";
            }
          }

          $name = verifica_campo($name);
          $email = verifica_campo($email);
          $password = verifica_campo($password);
          $cPassword = verifica_campo($cPassword);


          if (empty($name) || empty($email) || empty($password) || empty($cPassword)) {
            echo "<div class='alert alert-danger' role='alert'>
      Todos os campos devem ser preenchidos
    </div>";
          } else if ($password != $cPassword) {
            echo "<div class='alert alert-danger' role='alert'>
        Senhas não conferem
      </div>";
          } else {

            echo "<div class='alert alert-success' role='alert'> 
      Nome: $name </br>
      Email: $email</br>
      <img src='./imagens/imagem.jpeg' alt='imagem do usuário'>
      </div>";
          }
        }

        ?>



      </div>
    </div>
  </div>

  <script src="./check_form.js"></script>
</body>

</html>