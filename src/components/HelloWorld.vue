<template>
  <div>
    <section class="pt-5 text-center container">
      <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">{{msg}}</h1>
              <!-- eslint-disable-next-line max-len -->
              <p class="lead text-muted">En esta demo podrás encontrar peliculas que podrían ser de tu interes, gracias a la retroalimentacion de los usuarios, que navegen por este sitio.</p>
              <p>
                <a href="#" class="btn btn-primary m-2">Buscar por Genero</a>
                <a href="#" class="btn btn-secondary m-2">Respuesta JSON</a>
              </p>
          </div>
      </div>
    </section>
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="input-group mb-3">
          <select class="form-select" aria-label="Default select example">
            <option selected hidden>- Buscar por genero -</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <span class="input-group-text" id="basic-addon2"><i class="bi bi-search"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

