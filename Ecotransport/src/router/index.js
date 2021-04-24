import Vue from 'vue'
import Router from 'vue-router'

import LandingPage from "@/views/LandingPage";
import Mapa from "@/views/Mapa";
import Terminos from "@/views/Terminos";
import Registro from "@/views/Registro";
import ConfirmarRegistro from "@/views/ConfirmarRegistro";
import RegistroConfirmado from "@/views/RegistroConfirmado";
import EliminarCuenta1 from "@/views/EliminarCuenta1";
import CuentaEliminada from "@/views/CuentaEliminada";
import OlvPass from "@/views/OlvPass";
import IniciarSesion from "@/views/IniciarSesion";
import EditarEstacion from "@/views/EditarEstacion";
import Bienvenido from "@/views/Bienvenido";
import Test from "@/views/Test";
import Error from "@/views/Error";
import Editar from "@/views/EditarTest";
import Nuevo from "@/views/NuevoTest";


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/mapa',
      name: 'mapa',
      component: Mapa
    },
    {
      path: '/terminos',
      name: 'terminos',
      component: Terminos
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    },
    {
      path: '/confirmar-registro',
      name: 'ConfirmarRegistro',
      component: ConfirmarRegistro
    },
    {
      path: '/registro-confirmado',
      name: 'RegistroConfirmado',
      component: RegistroConfirmado
    },
    {
      path: '/eliminar-cuenta',
      name: 'eliminarcuenta',
      component: EliminarCuenta1
    },

    {
      path: '/cuenta-eliminada',
      name: 'cuentaeliminada',
      component: CuentaEliminada
    },
    {
      path: '/olvpass',
      name: 'OlvPass',
      component: OlvPass
    },
    {
      path: '/iniciar-sesion',
      name: 'IniciarSesion',
      component: IniciarSesion
    },
    {
      path: '/editar-estacion',
      name: 'EditarEstcion',
      component: EditarEstacion
    },
    {
      path: '*',
      name: 'error',
      component: Error
    }
    ,
    {
      path: '/bienvenido',
      name: 'bienvenido',
      component: Bienvenido
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
    ,
    {
      path: '/editar/:id',
      name: 'editar',
      component: Editar
    },
    {
      path: '/nuevo',
      name: 'nuevo',
      component: Nuevo
    }
    ]
})
