/**
 * 全局引用
 * 全局组件的注册
 */
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import JsonToExcel from '@/components/JsonToExcel';
import LazyLoadTabs from '@/components/LazyLoadTabs';
import Anchor from '@/components/Anchor';
import AjaxButton from '@/components/AjaxButton';
import BaseDialog from '@/components/BaseDialog';
import FormPanel from '@/components/FormPanel';
import UploadCropper from '@/components/UploadCropper';
import UploadFile from '@/components/UploadFile';
import UploadFiles from '@/components/UploadFile';
import BreakSpace from '@/components/BreakSpace';
import Tinymce from '@/components/Tinymce';
import BasePrint from '@/components/BasePrint';
import Drawer from '@/components/Drawer';
import Spin from '@/components/Spin';
import FilterTable from '@/components/BaseTable';
import TopFilter from '@/components/TopFilter';
import CountUp from '@/components/CountUp';
import MultiuseButton from '@/components/MultiuseButton';
import ButtonArea from '@/components/ButtonArea';
import importFile from '@/components/importFile';
import OssUpload from '@/components/OssUpload';
import UploadImg from '@/components/UploadImg';
Vue.use(ElementUI, { size: 'small', zIndex: 1000 });

// 注册全局组件
Vue.use(JsonToExcel);
Vue.use(LazyLoadTabs);
Vue.use(Anchor);
Vue.use(AjaxButton);
Vue.use(BaseDialog);
Vue.use(FormPanel);
Vue.use(UploadCropper);
Vue.use(UploadFile);
Vue.use(UploadFiles);
Vue.use(BreakSpace);
Vue.use(Tinymce);
Vue.use(BasePrint);
Vue.use(Drawer);
Vue.use(Spin);
Vue.use(FilterTable);
Vue.use(TopFilter);
Vue.use(CountUp);
Vue.use(MultiuseButton);
Vue.use(ButtonArea);
Vue.use(importFile);
Vue.use(OssUpload);
Vue.use(UploadImg);
