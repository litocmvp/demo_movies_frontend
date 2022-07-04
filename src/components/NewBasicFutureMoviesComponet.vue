<template>
  <!-- eslint-disable-next-line max-len -->
  <div class='modal fade' :id='modalID' tabindex='-1' :aria-labelledby='titleID' aria-hidden='true'>
    <div class='modal-dialog'>
      <div class='modal-content'>
        <form v-on:submit.prevent="saveData">
            <div class='modal-header'>
              <h5 class='modal-title' :id='titleID'>{{title}}</h5>
              <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
                <div class='mb-3'>
                    <label :for='inputNameID' class='form-label'>{{inputName}}
                      <!-- eslint-disable-next-line max-len -->
                      <input class='form-control form-control-sm' :id='inputNameID' name='featureName' type='text' v-model='featureName'>
                    </label>
                </div>
                <div class='mb-3'>
                    <label :for='inputDescriptionID' class='form-label'>{{inputDescription}}
                      <!-- eslint-disable-next-line max-len -->
                      <input class='form-control form-control-sm' :id='inputDescriptionID' name='featureDescription' type='text'  v-model='featureDescription'>
                    </label>
                </div>
                <div class='mb-3'>
                    <label :for='inputPictureID' class='form-label'>{{inputPicture}}
                      <!-- eslint-disable-next-line max-len -->
                      <input class='form-control form-control-sm' :id='inputPictureID' name='featurePicture' type='text'  v-model='featurePicture'>
                    </label>
                </div>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-secondary' data-bs-dismiss='modal' :id='btnClose'>Cerrar</button>
              <button type='submit' class='btn btn-primary'>Guardar Registro</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import alertaBasica from '@/functions_js/alerts';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
  name: 'BasicFuturesMovie',
  props: {
    modalID: String,
    titleID: String,
    title: String,
    inputName: String,
    inputNameID: String,
    inputDescription: String,
    inputDescriptionID: String,
    inputPicture: String,
    inputPictureID: String,
    btnClose: String,
    urlBackend: String,
  },
  data() {
        return {
          featureName: null,
          featureDescription: null,
          featurePicture: null,
        }
    },
  methods: {
    async saveData() {
      const conf = {
        method: 'Post',
        url: `${rutaBackend}cinema/${this.urlBackend}`,
        data: {
          name: this.featureName,
          description: this.featureDescription,
          picture: this.featurePicture,
        },
      }
      /* eslint-disable */
      // Cambio de clave (key) en la constante objeto "conf" en su clave "conf.data"
      if (this.urlBackend.includes('rating')) {
        delete Object.assign(conf.data, { ['rating']: conf.data['name'] })['name'];
      } else {
        delete Object.assign(conf.data, { ['gender']: conf.data['name'] })['name'];
      }

      /* eslint-disable */
      await axios(conf)
          .then((resp) => {
            alertaBasica(resp.data.icon, resp.data.msg);
            const record = resp.data.record;
            console.log(record);
            document.getElementById(this.btnClose).click();
          })
          .catch((err) => {
            console.log(err)
            alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
          });
    },
  },
};
</script>

