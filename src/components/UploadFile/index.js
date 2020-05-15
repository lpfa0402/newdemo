import UploadFile from './UploadFile.vue';
import UploadFiles from './UploadFiles.vue';
export default {
  install (Vue) {
    Vue.component('UploadFile', UploadFile);
    Vue.component('UploadFiles', UploadFiles);
  }
};
