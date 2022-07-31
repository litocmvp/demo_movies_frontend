<template>
  <!-- eslint-disable-next-line max-len -->
  <div class='modal fade' :id='modalID' tabindex='-1' :aria-labelledby='titleID' aria-hidden='true'>
    <div class='modal-dialog'>
      <div class='modal-content'>
         <!-- Save Form -->
        <form v-on:submit.prevent="saveData" v-if="btnAction === 'save'">
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
        <!-- Modify Form -->
        <form v-on:submit.prevent="modifyData" v-else>
            <div class='modal-header'>
              <h5 class='modal-title' :id='titleID'>{{title}}</h5>
              <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div class='modal-body'>
                <div class='mb-3'>
                      <!-- eslint-disable-next-line max-len -->
                      <input class='form-control form-control-sm' id='hiddenId' name='hiddenItem' type='hidden' v-model='featureId'>
                </div>
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
              <button type='submit' class='btn btn-warning'>Modificar Registro</button>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import axios from 'axios';
import { alertaBasica } from '@/assets/js/alerts';

const rutaBackend = process.env.VUE_APP_RUTA_API;

export default {
  name: 'BasicFuturesMovie',
  props: {
    modalID: String,
    titleID: {
      type: String,
      default: 'titleLabel',
    },
    title: String,
    inputName: String,
    inputNameID: {
      type: String,
      default: 'titleID',
    },
    inputDescription: String,
    inputDescriptionID: {
      type: String,
      default: 'descriptionID',
    },
    inputPicture: String,
    inputPictureID: {
      type: String,
      default: 'pictureID',
    },
    btnClose: String,
    btnAction: {
      type: String,
      default: 'save',
    },
    urlBackend: String,
    methodHttp: {
      type: String,
      default: 'Post',
    },
  },
  data() {
        return {
          featureId: null,
          featureName: null,
          featureDescription: null,
          featurePicture: null,
        }
    },
  methods: {
    async saveData() {
      this.$emit('update_loading', true);
      const conf = {
        method: this.methodHttp,
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
            this.$emit('update_loading', false);
            alertaBasica(resp.data.icon, resp.data.msg);
            const record = resp.data.record;
            document.getElementById(this.btnClose).click();
            if (this.urlBackend.includes('rating')) {
              store.state.ratings.push(record)
            } else {
              store.state.genders.push(record)
            }
            this.featureName = '';
            this.featureDescription = '';
            this.featurePicture = '';
          })
          .catch((err) => {
            this.$emit('update_loading', false);
            alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
          });
    },
    async modifyData() {
      this.$emit('update_loading', true);
      const conf = {
        method: this.methodHttp,
        url: `${rutaBackend}cinema/${this.featureId}`,
        data: {
          name: this.featureName,
          description: this.featureDescription,
          picture: this.featurePicture,
        },
      }
      /* eslint-disable */
      // Cambio de clave (key) en la constante objeto "conf" en su clave "conf.data"
      if (this.featureId.includes('rating')) {
        delete Object.assign(conf.data, { ['rating']: conf.data['name'] })['name'];
      } else {
        delete Object.assign(conf.data, { ['gender']: conf.data['name'] })['name'];
      }

      /* eslint-disable */
      await axios(conf)
          .then((resp) => {
            this.$emit('update_loading', false);
            const record = resp.data.record;
            alertaBasica(resp.data.icon, resp.data.msg);
            document.getElementById(this.btnClose).click();
            if (this.featureId.includes('rating')) {
              let ratings = store.state.ratings;
              bucle:
              for (let i = 0; i < ratings.length; i += 1) {
                let obj = ratings[i];
                for(const [key, value] of Object.entries(obj)){
                  if (key == 'id' && String(value) == record.id) {
                    store.state.ratings[i].rating = record.rating;
                    store.state.ratings[i].description = record.description;
                    store.state.ratings[i].picture = record.picture;
                    break bucle;
                  }
                }
              }
            } else {
              let genders = store.state.genders;
              bucle:
              for (let i = 0; i <= genders.length; i += 1) {
                let obj = genders[i];
                for(const [key, value] of Object.entries(obj)){
                  if (key == 'id' && String(value) == record.id) {
                    store.state.genders[i].rating = record.gender;
                    store.state.genders[i].description = record.description;
                    store.state.genders[i].picture = record.picture;
                    break bucle;
                  }
                }
              }
            }
          })
          .catch((err) => {
            this.$emit('update_loading', false);
            alertaBasica('error', `${err.response.data.message}, status: ${err.response.status}`);
          });
    },
  },
};
</script>

