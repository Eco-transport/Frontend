<template>
  <div class="body">
    <unlog-header />
    <br />
    <div class="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.0.8/css/all.css"/>
      <br />

      <div class="card bg-light">
        <article class="card-body mx-auto" style="max-width: 400px">
          <h4 class="card-title mt-3 text-center">Crear cuenta</h4>
          <p class="text-center">Arranquemos creando una cuenta de usuario</p>
          <p class="divider-text">
            <span class="bg-light"> ¡Vamos allá! </span>
          </p>
          <form >
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Nombres"
                type="text"
                v-model="names"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Apellidos"
                type="text"
                v-model="surnames"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Usuario"
                type="text"
                v-model="username"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-id-card"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Número de identificación"
                type="number"
                v-model="identity_number"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Correo electrónico"
                type="email"
                v-model="email"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-phone"></i>
                </span>
              </div>
              <select class="custom-select" style="max-width: 120px">
                <option selected="">+57</option>
              </select>
              <input
                name=""
                class="form-control"
                placeholder="Celular"
                type="number"
                v-model="user_phone"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-building"></i>
                </span>
              </div>
              <select class="form-control" v-model="security_question">
                <option hidden selected="">Pregunta de seguridad</option>
                <option>¿Nombre de su madre?</option>
                <option>¿Primer vehículo que compró?</option>
                <option>¿Raza de su primera mascota?</option>
              </select>
            </div>

            <!-- Respuesta -->
            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-handshake"></i>
                </span>
              </div>
              <input
                name=""
                class="form-control"
                placeholder="Respuesta de seguridad"
                type="text"
                v-model="security_answer"/>
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Crear contraseña"
                type="password"
                v-model="password1"
              />
            </div>

            <div class="form-group input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
              <input
                class="form-control"
                placeholder="Repetir contraseña"
                type="password"
                v-model="password2"/>
            </div>
            <div class="alert alert-danger" role="alert" v-if="error">
              Las contraseñas no coinciden
            </div>

            <div class="form-group">
              <button
                type="submit"
                class="btn btn-primary btn-block"
                v-on:click="contrasenaIgual">
                Crear cuenta
              </button>
            </div>

            <div class="alert alert-success" role="alert" v-if="user_state=='ACTIVO'">
              ¡¡¡Su cuenta ha sido creada con éxito!!!
            </div>

            <p class="text-center">
              ¿Ya tienes una cuenta? <a href="iniciar-sesion">Acceder</a>
            </p>
          </form>
        </article>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
  import UnlogHeader from "@/components/UnlogHeader.vue";
  import axios from "axios";

  export default {
    name: "registro",
    components: {
      UnlogHeader,
    },
    data: function () {
      return {
        names: "",
        password1: "",
        password2: "",
        surnames: "",
        username: "",
        identity_number: "",
        email: "",
        user_phone: "",
        security_question: "",
        security_answer: "",
        user_state: "INACTIVO",
        error: false,

      };
    },
    methods: {
      contrasenaIgual() {
        if (this.password1 !== this.password2) {
          this.error = true;
          console.log("Estan diferentes!");
        } else {

          this.user_state = "ACTIVO";
          this.registro();
        }
      },
      registro() {
        let json = {
          "names": this.names,
          "password": this.password1,
          "surnames": this.surnames,
          "username": this.username,
          "identityNumber": this.identity_number,
          "email": this.email,
          "userPhone": this.user_phone,
          "securityQuestion": this.security_question,
          "securityAnswer": this.security_answer,
          "userState": this.user_state,
        };
        axios
          .post("http://localhost:8080/registro/nuevo-usuario", json)
          .then((respuesta) => {
            console.log(respuesta.data);
          });
      },
    },
  };
</script>

<style scoped>
  .divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;
    z-index: 2;
  }
  .divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
  }

  .body {
    height: 100vh;
    overflow: auto;   /* Arregla problema de imagen salida */
    background-size: cover;
    font-family: "Montserrat", sans-serif;
    background-color: #0e0f1c;
    opacity: 1;
    background: radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #0e0f1c 20%, #0e0f1c 80%, transparent 80%, transparent) 27.5px 27.5px, linear-gradient(#00425e 2.2px, transparent 2.2px) 0 -1.1px, linear-gradient(90deg, #00425e 2.2px, #0e0f1c 2.2px) -1.1px 0;
    background-size: 55px 55px, 55px 55px, 27.5px 27.5px, 27.5px 27.5px;
  }

  .card{
    background-color: aqua;
    margin-left: 25%;
    margin-right: 25%;
  }
</style>
