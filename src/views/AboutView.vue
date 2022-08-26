<template>
<!-- eslint-disable -->
  <div class="container">

    <div class="row">

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h1 class="display-4 fw-bold">... Acerca de este sitio</h1>
        <p class="fs-4 text-dark">
          El objetivo de este sitio es que los visitantes puedan consultar sugerencías de películas guardadas dentro de la base de datos, gracias a la alimentación de otros visitantes que deseen registrarse en este sitio web.
        </p>
        <hr>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">¿Cómo funciona en resumen?</h2>
        <p class="fs-6 text-muted">
          Cuando un visitante desea buscar sugerencías de películas de acuerdo a las clasificaciones, generos, año o titulos, la aplicación web consultará los registros que tenga en el momento de su busqueda, para poblar la salida en el cliente, a traves del consumo de la API-REST, por ello clasificamos a los navegantes como:
          <ul class="fs-5 text-dark">
            <li>
              Administrador y usuarios
              <p class="fs-6 text-muted">El usuario administrador podrá registrar, modificar y eliminar clasificaciones y generos que toda película tiene.</p>
              <p class="fs-6 text-muted">Los usuarios podrán registrar peliculas, así como editar y eliminar sus propios registros de películas.</p>
            </li>
            <li>
              Visitantes y contribuidores
              <p class="fs-6 text-muted">Los visitantes solo podrán leer los registros que aporten los contribuidores, lo cual es el objetivo principal de esta demo, "consultar aportaciones". Por lo que intenta buscar nuevas referencias de películas a tus gustos, tal vez encuentres algo nuevo e interesante por ver.</p>
              <p class="fs-6 text-muted">Los contribuidores son los que le darán vida a este sitio web, entre más aportaciones realicen, mayores registros podrán consultar los visitantes. Así que vamos!, animate a registrarte y constribuir, talvez conozcas peliculas muy poco conocidas y a algunos les interesen tus aportaciones.</p>
            </li>
          </ul>
        </p>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">¿Cómo funciona la API-REST?</h2>
        <p class="fs-6 text-muted">
          Del lado del cliente, se realizan peticiones asíncronas HTTP (GET, POST, DELETE, PUT, etc), en la cual a traves de una API basada en promesas, llamada "Axios", podremos realizar estas peticiones al servidor, y este nos devolvera una respuesta en formato JSON, que sera tratada y mostrada del lado del cliente, para la comprensión del usuario final.
        </p>
        <p class="fs-6 text-muted">Cuando una petición es solicitada por el cliente, el servidor, consultará el endpoint de la solicitud y buscara la función que enlace con el endpoint, de acuerdo a su metodo http, parametro y argumentos. Por lo cual es aquí donde se llevarán las logicas de autentificación JWT, de seguridad de los recursos, respuestas de comportamiento ante las solicitudes del cliente, y manejo de los datos escritos y leidos (CRUD).</p>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">¿Cómo se contruyó esta API-REST?</h2>
        <p class="fs-6 text-muted">
          Esta API-REST fue creada por el Microframework Flask usando el lenguaje de programación "Python" y consumida por un cliente desarrollado con Vue JS 2. Las librerias que se usarón en esta API-REST, fueron las siguientes:
          <ul class="fs-5 text-dark">
            <li>
              Flask RestFul
              <p class="fs-6 text-muted">
                Librería para el desarrollo de construcciones de APIs RESTFUL, de una manera más sencilla y eficaz, alentando las mejores practicas en el desarrollo e integrando funciones para trabajar con ORMs.
              </p>
            </li>
            <li>
              Flask Marshmallow
              <p class="fs-6 text-muted">
                Librería usada para serializar y deserealización de objetos, como modelos de base de datos, funcionando en conjunto con ORMs.
              </p>
            </li>
            <li>
              Flask CORS
              <p class="fs-6 text-muted">
                Librería que maneja el Intercambio de Recursos de Origen Cruzado "Cross Origin Resource Sharing", haciendo posible que se puedan solicitar recursos desde un dominio distinto de donde se encuentra alojado la API-REST. Muy util en este caso debido a que este sitio que ves (proyecto con Vue JS) esta consumiendo recursos de otro sitio que tiene distinto dominio (proyecto con Flask).
              </p>
            </li>
            <li>
              Flask SQLAlchemy
              <p class="fs-6 text-muted">
                Librería que funciona como Asignador de Objeto Relacional "ORM", lo cual en otras palabras, consulta los datos de base de datos relacionales y los convierte en tipos de datos que utiliza el lenguaje de programación, en este caso "Python".
              </p>
            </li>
            <li>
              PyJWT
              <p class="fs-6 text-muted">
                Librería que facilita la creación de JSON Web Tokens "JWT", ayudando a codificar o decodificar los tokes recibidos en la cabecera de solicitudes HTTP, emitidas por el cliente. Estos tokens son los usados para la autentificacion de usuarios sin estado "stateless", que nos ayudan a que nuestra aplicación se vuelvan totalmente escalables.
              </p>
            </li>
          </ul>
        </p>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">¿Cómo se contruyó el Cliente?</h2>
        <p class="fs-6 text-muted">
          Este sitio que ves y en el que estas interactuando; conocido como cliente, fue desarrollado principalmente con 3 librerías (Vue JS 2, Bootstrap 5 y Axios), pero hay más en el stack de su creación.
          <ul class="fs-5 text-dark">
            <li>
              Vue JS 2
              <p class="fs-6 text-muted">
                Es el framework principalmente usado en la creacion de todo este sitio web, facilitando la creación de pagínas e interfaces, creando aplicaciones de una sola pagína "SPA".
              </p>
            </li>
            <li>
              Bootstrap 5
              <p class="fs-6 text-muted">
                Con este framework CSS, facilita los desarrollo de interfaces de pantalla (formularios, botones, enlaces, menus, etc), reduciendo el tiempo de desarrollo en estos apartados, para esquemas preconfigurados y de uso rapido.
              </p>
            </li>
            <li>
              Axios
              <p class="fs-6 text-muted">
                De esta librería mencionada en el apartado "¿Cómo funciona la API-REST?", solo mencionaremos que esta muy optimizada para trabajar con el consumo de API-REST, por lo que facilita y agiliza su desarrollo en este apartado.
              </p>
            </li>
            <li>
              SweetAlert2
              <p class="fs-6 text-muted">
                Librería usada para mostrar mensajes en alertas o mensajes emergentes, embelleciendo las notificaciones que recibe el cliente como respuesta a sus peticiones.
              </p>
            </li>
            <li>
              Vue Loading Overlay
              <p class="fs-6 text-muted">
                Librería integrada para mostrar pantallas de carga, mientras se procesa una petición o acción de algun componente. Creando una congelación de interración con las interfaces del sitio web, para que el sitio funcione sin anomalias, mientras espera la finalización de un proceso, que requiera tiempos de carga.
              </p>
            </li>
            <li>
              Vue2 TimePicker
              <p class="fs-6 text-muted">
                Es un elemento selector despegable que se integra en formularios, para campos de entrada en donde se requiera un formato especifico de tiempo. En el caso del sitio, se requería solo la hora y minutos, para el campo de duración de una película.
              </p>
            </li>
            <li>
              Vuelidate
              <p class="fs-6 text-muted">
                Es una librería usada para validar elementos de un formulario, basado en modelos Vue Js, ayudando a validar los campos antes de ser enviados como datos o argumentos en peticiones HTTP, así se obliga al usuario a enviar campos llenos, con formatos correctos y legibles.
              </p>
            </li>
            <li>
              Vuex
              <p class="fs-6 text-muted">
                Es la librería de gestion de estados oficial por Vue Js. Manejando un almacen centralizado que nos ayudo y facilito el desarrollo de componentes e integración de datos, para distintas vistas.
              </p>
            </li>
            <li>
              Vue Router
              <p class="fs-6 text-muted">
                Libreria oficial de Vue Js, para el enrutamiento de direcciones del lado del cliente, proporcionando seguridad a las rutas que lo requieran.
              </p>
            </li>
          </ul>
        </p>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">Vistas de la aplicación web</h2>
        <p class="fs-6 text-muted">
          Esta aplicación web, integra vistas que requieren de la autentificación del usuario, como en toda aplicación web, hay rutas que requieren ciertos permisos para la lectura y escritura de datos.
          <ul class="fs-5 text-dark">
            <li>
              En este caso, las vistas no protegidas son:
              <ul class="fs-5 text-dark">
                <li>
                  <router-link to="/" target="_blank">Inicio</router-link>
                  <p class="fs-6 text-muted">Pagína principal del sitio web, donde cualquier usuario podrá buscar sugerencias de películas, consultar mayor información de películas y navegar entre la paginación de los resultados buscados.</p>
                </li>
                <li>
                  <router-link to="/about" target="_blank">Acerca del Sitio</router-link>
                  <p class="fs-6 text-muted">Es la vista en donde te encuentras actualmente, contiene informaciones diversas del sitio web (uso, funciones, creación, etc), tanto del frontend, como del backend.</p>
                </li>
                <li>
                  <router-link to="/auth/login" target="_blank">Iniciar Sesión</router-link>
                  <p class="fs-6 text-muted">
                    Vista para la autentificación de credenciales del usuario, en donde podrás obtener como respuesta de envio del API-REST, el Token del usuario, con una vigencia de 60 min. Puedes realizar la prueba y manipular o solicitar datos al API-REST dentro del margen de validez del tiempo, una vez pasado los 60 minutos, el token expira, y no podrás consumir recursos del API-REST con el mismo token, que requieran autentificación del usuario.
                    Dentro de esta misma vista, puedes acceder a las vistas de "registro de usuario" y "restablecimiento de contraseña".
                  </p>
                </li>
                <li>
                  <router-link to="/auth/signup" target="_blank">Registrarse</router-link>
                  <p class="fs-6 text-muted">Esta vista contiene un sencillo formulario de registro de usuario, en donde solicitará un correo electrónico y una credencial de al menos 6 caracteres, para que puedas acceder a las vistas protegidas.</p>
                </li>
                <li>
                  <router-link to="/auth/pwd-reset" target="_blank">Restablecimiento de Contraseña</router-link>
                  <p class="fs-6 text-muted">Vista que ayuda al usuario a restablecer su contraseña, corroborando primero que el correo electrónico exista en los registros de la base de datos, para generar un código que le será enviado al mismo correo y solicitado en el sitio, para el restablecimiento de su contraseña. Por lo que será importante que el correo electrónico de registro, exista realmente, para obtener dicho código, por medio de su buzón de entrada.</p>
                </li>
                <li>
                  <p class="text-primary text-decoration-underline">Ruta no encontrada</p>
                  <p class="fs-6 text-muted">Es una vista de redirección creada para cualquier ruta no registrada en Vue Router, y especificarle al usuario que dicha ruta no existe en el sistema web.</p>
                </li>
                <li>
                  <p class="text-primary text-decoration-underline">Película Seleccionada</p>
                  <p class="fs-6 text-muted">
                    Esta vista se podrá acceder al solicitar más información de los resultados de péliculas mostrados en la vista de "Inicio".
                    Una vez solicitada la mayor información de la película, se mostrará una pantalla de carga mientras se espera una respuesta de una API-REST de tercero la información de acuerdo al titulo de la película.
                    Así esta vista, se podrá poblar de mayor información, relacionada con la película registrada, e información ajena a la del registro de los datos solicitados en este sitio web, al momento de la creación del registro.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              Vistas protegidas:
              <ul class="fs-5 text-dark">
                <li>
                  <router-link to="/movies/features" target="_blank">Ajustes</router-link>
                  <p class="fs-6 text-muted">
                    Esta vista esta destinada unica y exclusivamente para la manipulacion de los atributos "clasificación" y "genero", que toda pélicula contiene, por lo que solo el usuario administrador, podrá crear, modificar y eliminar estos registros.
                    Aún así, esta vista se dejo visible para todo usuario autentificado, pero podrás corroborar que al querer registrar, modificar o eliminar registros, sino eres un usuario adminiistrador, recibiras como respuesta de la API-REST, un mensaje que te notificará, sobre esta regla.
                    Haz la prueba y verás.
                  </p>
                </li>
                <li>
                  <router-link to="/my_movies" target="_blank">Registrar Peliculas</router-link>
                  <p class="fs-6 text-muted">
                    Es la vista donde todo usuario autentificado, podrá realizar creaciones de registros, así como modificar o eliminar sus propios registros, y en donde el usuario administrador podrá realizar lo anterior descrito, tanto de sus propios registros de películas, como de usuarios terceros.
                    Por lo que si se observa algún registro inapropiado o que incumpla las reglas o datos, el administrador, podrá eliminarlos o modificarlos, sin previo avisó y sin el consentimiento del autor.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </p>
      </div>

      <div class="col-12 pt-5" v-scroll-reveal.reset="{ delay: 250 }">
        <h2 class="display-5 fw-bold">¿Que funciones se podrían integrar a futuro?</h2>
        <p class="fs-6 text-muted">
          Sinceramente no podría asegurarte que fuciones integraré a futuro, pero por el momento tengo en mente el interes de integrar los siguientes aspectos en la aplicación web:
          <ul class="fs-5 text-dark">
            <li>
              Mejoras en la busqueda de sugerencías de Películas
              <p class="fs-6 text-muted">
                Me gustaría integrar busqueda de películas por palabras clave, por aportaciones de usuarios, por votos de los usuarios. ´
                Para ello, necesito realizar modificaciones tanto a nivel frontend y backend.
              </p>
            </li>
            <li>
              Integración de sección de votos y comentarios en películas
              <p class="fs-6 text-muted">
                Relacionado al primer punto, tendría que integrar una sección de votaciones para realizar busquedas por esta caracteristica.
                En otro aspecto, anexar una seccíon de comentarios, ayudaría a retroalimentar los gustos e intereses de todos los usuarios y autores.
              </p>
            </li>
            <li>
              Interfacez más vistosas y atractivas
              <p class="fs-6 text-muted">
                Al mejorar el atractivo del sitio web, se demuestra los conocimientos y habilidades del desarrollador, mejorando mi posición en el mercado laboral y maravillando a los visitantes.
              </p>
            </li>
          </ul>
          Esperemos que estas funciones se puedan integrar y tambien mejorar la demo en otros aspectos.
          Pero por mientras este sitio web, esta publicado con todo lo que se comenta en esta sección, por lo que te aliento a que indages en el sitio web, usandolo, viendolo e interactuando con él.
          Tambien puedes inspeccionar el codigo fuente (si así lo deseas) de los proyectos "backend" y "frontend", por si son de tu interes.
        </p>
      </div>

    </div>

  </div>
</template>

<script>

export default {
  name: 'AboutView',
  created() {
      document.title = 'CMVP Movies Demo - About';
  },
}

</script>