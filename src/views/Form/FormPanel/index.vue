<template>
  <div style="padding-bottom: 60px;">
    <h2>FormPanel 表单</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formList"
          :formType="formType"
          :cols="cols"
          :labelWidth="labelWidth"
          :isSubmitBtn="isSubmitBtn"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="show">
              <md/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="show ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="show = !show">{{show ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        Attributes
      </div>
      <el-table
        :data="AttributesData"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>List 配置</h2>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        List Attributes
      </div>
      <el-table
        :data="AttributesDataB"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "INPUT" 输入框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListC"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showC">
              <mdC/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="show ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showC = !showC">{{showC ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataC"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
        Events
      </div>
      <el-table
        :data="EventsDataC"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          width="160px"
          prop="EventName"
          label="事件名称">
        </el-table-column>
        <el-table-column
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          prop="Callback"
          label="回调参数">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "INPUT_NUMBER" 可点击数字输入框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListD"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showD">
              <mdD/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showD ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showD = !showD">{{showD ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataD"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "RANGE_INPUT_NUMBER" 范围输入框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListE"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showE">
              <mdE/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showE ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showE = !showE">{{showE ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataE"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "INPUT_TREE" 模糊搜索配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListF"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showF">
              <mdF/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showF ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showF = !showF">{{showF ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataF"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "SELECT / MULTIPLE_SELECT" 下拉框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListG"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showG">
              <mdG/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showG ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showG = !showG">{{showG ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataG"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "CHECKBOX"  单选框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListH"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showH">
              <mdH/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showH ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showH = !showH">{{showH ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataH"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "MULTIPLE_CHECKBOX"  多选框组配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListI"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showI">
              <mdI/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showI ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showI = !showI">{{showI ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataI"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "DATE(日期) / RANGE_DATE(时间段选择器)"  日期配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListJ"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showJ">
              <mdJ/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showJ ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showJ = !showJ">{{showJ ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataJ"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "SEARCH_HELPER"  搜索框配置</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListK"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showK">
              <mdK/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showK ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showK = !showK">{{showK ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataK"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "TEXT_AREA"  textarea输入框</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListL"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showL">
              <mdL/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showL ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showL = !showL">{{showL ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataL"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "UPLOAD_IMG"  图片上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListM"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showM">
              <mdM/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showM ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showM = !showM">{{showM ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataM"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "UPLOAD_FILE"  文件上传</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListN"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showN">
              <mdN/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showN ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showN = !showN">{{showN ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataN"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "RADIO"  单选框</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListO"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showO">
              <mdO/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showO ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showO = !showO">{{showO ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataO"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "TIME_SELECT / RANGE_TIME_SELECT"  时间下拉框</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListP"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showP">
              <mdP/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showP ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showP = !showP">{{showP ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataP"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "INPUT_CASCADER"  瀑布流下拉框</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListQ"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showQ">
              <mdQ/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showQ ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showQ = !showQ">{{showQ ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataQ"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
    <h2>type = "BREAK_SPACE"  分隔符</h2>
    <div class="cod_wrapper">
      <div class="cod_top">
        <FormPanel
          :list="formListR"
          :isSubmitBtn="false"
        />
      </div>
      <div class="cod_bottom">
        <div class="cod_bottom_content">
          <el-collapse-transition>
            <div v-show="showR">
              <mdR/>
            </div>
          </el-collapse-transition>
        </div>
        <div class="cod_bottom_btn">
          <el-button size="medium" type="text" :icon="showR ? 'el-icon-caret-top' : 'el-icon-caret-bottom'" @click="showR = !showR">{{showR ? '隐藏代码' : '显示代码'}}</el-button>
        </div>
      </div>
    </div>
    <div class="Attributes_wrapper">
      <div class="Attributes_title">
       Attributes
      </div>
      <el-table
        :data="AttributesDataR"
        size="medium"
        style="width: 100%">
        <el-table-column
          min-width="100px"
          prop="parameter"
          label="参数">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="explain"
          label="说明">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="type"
          label="类型">
        </el-table-column>
        <el-table-column
          min-width="100px"
          prop="must"
          label="必须">
        </el-table-column>
        <el-table-column
          min-width="200px"
          prop="OptionalValues"
          label="可选值">
        </el-table-column>
        <el-table-column
          prop="Default"
          label="默认值">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import md from './README.md';
import mdC from './READMEC.md';
import mdD from './READMED.md';
import mdE from './READMEE.md';
import mdF from './READMEF.md';
import mdG from './READMEG.md';
import mdH from './READMEH.md';
import mdI from './READMEI.md';
import mdJ from './READMEJ.md';
import mdK from './READMEK.md';
import mdL from './READMEL.md';
import mdM from './READMEM.md';
import mdN from './READMEN.md';
import mdO from './READMEO.md';
import mdP from './READMEP.md';
import mdQ from './READMEQ.md';
import mdR from './READMER.md';
export default {
  name: 'FormPanelTest',
  components: {
    md,
    mdC,
    mdD,
    mdE,
    mdF,
    mdG,
    mdH,
    mdI,
    mdJ,
    mdK,
    mdL,
    mdM,
    mdN,
    mdO,
    mdP,
    mdQ,
    mdR
  },
  data() {
    return {
      show: false,
      showC: false,
      showD: false,
      showE: false,
      showF: false,
      showG: false,
      showH: false,
      showI: false,
      showJ: false,
      showK: false,
      showL: false,
      showM: false,
      showN: false,
      showO: false,
      showP: false,
      showQ: false,
      showR: false,
      formList: this.CreatFormList(),
      formType: 'add',
      cols: 3,
      labelWidth: 80,
      isSubmitBtn: false,
      AttributesData: this.CreatAttributesData(),
      formListB: this.CreatFormListB(),
      AttributesDataB: this.CreatAttributesDataB(),
      formListC: this.CreatFormListC(),
      AttributesDataC: this.CreatAttributesDataC(),
      EventsDataC: this.CreatEventsDataC(),
      formListD: this.CreatFormListD(),
      AttributesDataD: this.CreatAttributesDataD(),
      formListE: this.CreatFormListE(),
      AttributesDataE: this.CreatAttributesDataE(),
      formListF: this.CreatFormListF(),
      AttributesDataF: this.CreatAttributesDataF(),
      formListG: this.CreatFormListG(),
      AttributesDataG: this.CreatAttributesDataG(),
      formListH: this.CreatFormListH(),
      AttributesDataH: this.CreatAttributesDataH(),
      formListI: this.CreatFormListI(),
      AttributesDataI: this.CreatAttributesDataI(),
      formListJ: this.CreatFormListJ(),
      AttributesDataJ: this.CreatAttributesDataJ(),
      formListK: this.CreatFormListK(),
      AttributesDataK: this.CreatAttributesDataK(),
      formListL: this.CreatFormListL(),
      AttributesDataL: this.CreatAttributesDataL(),
      formListM: this.CreatFormListM(),
      AttributesDataM: this.CreatAttributesDataM(),
      formListN: this.CreatFormListN(),
      AttributesDataN: this.CreatAttributesDataN(),
      formListO: this.CreatFormListO(),
      AttributesDataO: this.CreatAttributesDataO(),
      formListP: this.CreatFormListP(),
      AttributesDataP: this.CreatAttributesDataP(),
      formListQ: this.CreatFormListQ(),
      AttributesDataQ: this.CreatAttributesDataQ(),
      formListR: this.CreatFormListR(),
      AttributesDataR: this.CreatAttributesDataR(),
    };
  },
  methods: {
    CreatFormList() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'search'
        },
      ];
    },
    CreatAttributesData() {
      return [
        {
          parameter: 'list',
          explain: '表单面板组件数据数组，支持动态赋值(数据数组必须是新的引用)',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'formType',
          explain: '表单面板的类型',
          type: 'String',
          must: 'false',
          OptionalValues: 'add / edit / show',
          Default: 'add'
        },
        {
          parameter: 'cols',
          explain: '每行显示多少列',
          type: 'Number',
          must: 'false',
          OptionalValues: '只能是被 24 整除的值',
          Default: '3'
        },
        {
          parameter: 'labelWidth',
          explain: '标签的宽度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '80'
        },
        {
          parameter: 'isSubmitBtn',
          explain: '是否显示保存/重置按钮',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        }
      ];
    },
    CreatFormListB() {
      return [
        {
          type: 'SELECT',
          label: '选择',
          fieldName: 'checked',
          itemList: [
            { value: 1, text: '下拉框A' },
            { value: 2, text: '下拉框B' }
          ],
        },
      ];
    },
    CreatAttributesDataB() {
      return [
        {
          parameter: 'type',
          explain: '数据渲染出的控件类型',
          type: 'String',
          must: 'true',
          OptionalValues: 'INPUT / INPUT_NUMBER / RANGE_INPUT_NUMBER / INPUT_TREE/SELECT / MULTIPLE_SELECT / CHECKBOX / MULTIPLE_CHECKBOX / DATE / RANGE_DATE / SEARCH_HELPER / SEARCH_HELPER_WEB / TEXT_AREA / UPLOAD_IMG / UPLOAD_FILE / RADIO / TIME / RANGE_TIME / TIME_SELECT / RANGE_TIME_SELECT / INPUT_CASCADER / TINYMCE/BREAK_SPACE(分隔符)',
          Default: '——'
        },
        {
          parameter: 'label',
          explain: '标题，最好不超过 6 个字',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'labelWidth',
          explain: '表单域标签的的宽度，字符串类型，需要加单位（px）',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fieldName',
          explain: '字段名称 key, 必须是唯一值',
          type: 'String',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'selfCols',
          explain: '表单元素自身占据的列数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'offsetLeftCols',
          explain: '表单元素左侧的间隔列数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'offsetRightCols',
          explain: '表单元素右侧的间隔列数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'placeholder',
          explain: '提示文字',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认显示的内容',
          type: 'String/Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'style',
          explain: '表单元素的样式',
          type: 'Object',
          must: 'false',
          OptionalValues: 'css样式',
          Default: '——'
        },
        {
          parameter: 'hidden',
          explain: '是否隐藏该表单项',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'readonly',
          explain: '是否只读',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'disabled',
          explain: '禁用',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'itemList',
          explain: '下拉框opction数据',
          type: 'Array',
          must: 'false',
          OptionalValues: "itemList:[{vales: 1, text: '内容', children:[]}]",
          Default: 'false'
        }
      ];
    },
    CreatFormListC() {
      return [
        {
          type: 'INPUT',
          label: '搜索',
          fieldName: 'INPUT',
          minlength: 2,
          maxlength: 10,
          rules: [{ pattern: /^1[3456789]\d{9}$/, message: '失败提示', trigger: 'blur' }],
          numberFormat: true,
          showPassword: true,
          onFocus: val => {
            console.log('获得焦点', val);
          },
          onEnter: val => {
            console.log('回车', val);
          },
          onInput: val => {
            console.log('输入事件', val);
          },
          unitRender: val => {
            return <span>后置单位的渲染</span>;
          }
        }
      ];
    },
    CreatAttributesDataC() {
      return [
        {
          parameter: 'showPassword',
          explain: '是否显示切换密码图标',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'numberFormat',
          explain: '指定金融类数值格式为，100,000,000',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'minlength',
          explain: '最小输入长度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxlength',
          explain: '最大输入长度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'pattern',
          explain: '输入内容正则验证',
          type: 'RegExp',
          must: 'false',
          OptionalValues: "rules: [{ pattern: '/^1[3456789]d{9}$/', message: '失败提示', trigger: 'blur' }]",
          Default: '——'
        }
      ];
    },
    CreatEventsDataC() {
      return [
        {
          EventName: 'onFocus',
          explain: '输入框获得焦点的事件',
          Callback: '——'
        },
        {
          EventName: 'onEnter',
          explain: '输入框回车的事件',
          Callback: '输入内容'
        },
        {
          EventName: 'onInput',
          explain: '输入事件',
          Callback: '输入的内容'
        },
        {
          EventName: 'unitRender',
          explain: '输入框的后置单位的渲染方法',
          Callback: 'JSX类型节点'
        },
      ];
    },
    CreatFormListD() {
      return [
        {
          type: 'INPUT_NUMBER',
          label: '标题',
          fieldName: 'INPUT_NUMBER',
          min: 5,
          max: 10,
          step: 2,
          precision: 2
        }
      ];
    },
    CreatAttributesDataD() {
      return [
        {
          parameter: 'min',
          explain: '最小值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'max',
          explain: '最大值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'step',
          explain: '步长',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'precision',
          explain: '数值精度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ];
    },
    CreatFormListE() {
      return [
         {
          type: 'RANGE_INPUT_NUMBER',
          label: '标题',
          fieldName: 'RANGE_INPUT_NUMBER',
          min: 2,
          max: 10,
          step: 2,
          precision: 2,
        }
      ];
    },
    CreatAttributesDataE() {
      return [
        {
          parameter: 'min',
          explain: '最小值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'max',
          explain: '最大值',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'step',
          explain: '步长',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'precision',
          explain: '数值精度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ];
    },
    CreatFormListF() {
      return [
         {
          type: 'INPUT_TREE',
          label: '标题',
          fieldName: 'INPUT_TREE',
          itemList: [
            {
              value: 1,
              text: 'aa'
            },
            {
              value: 2,
              text: 'bb'
            },
          ],
        }
      ];
    },
    CreatAttributesDataF() {
      return [
        {
          parameter: 'itemList',
          explain: '可以模糊搜索的输入框',
          type: 'Array',
          must: 'true',
          OptionalValues: "[{text: '内容', value: 1}]",
          Default: '——'
        },
        {
          parameter: 'defaultExpandAll',
          explain: '是否收起所有节点',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: '——'
        },
      ];
    },
    CreatFormListG() {
      return [
         {
          type: 'SELECT',
          label: '标题',
          fieldName: 'SELECT',
          multiple: true,
          clearable: true,
          collapseTags: true,
          filterable: true,
          limitNum: 3,
          itemList: [
            {
              value: 1,
              text: 'aa'
            },
            {
              value: 2,
              text: 'bb'
            },
          ],
          change: val => {
            console.log('当前值', val);
          }
        }
      ];
    },
    CreatAttributesDataG() {
      return [
        {
          parameter: 'itemList',
          explain: '可以模糊搜索的输入框',
          type: 'Array',
          must: 'true',
          OptionalValues: "[{text: '内容', value: 1}]",
          Default: '——'
        },
        {
          parameter: 'clearable',
          explain: '是否启用右侧清除按钮',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'true'
        },
        {
          parameter: 'multiple',
          explain: '是否启用多选',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'collapseTags',
          explain: '多选时是否将选中值按文字的形式展示',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'filterable',
          explain: '是否可搜索',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'clearable',
          explain: '是否可以清空选项',
          type: 'Boolean',
          must: 'false',
          OptionalValues: 'true / false',
          Default: 'false'
        },
        {
          parameter: 'limitNum',
          explain: '多选时用户最多可以选择的项目数，为0 则不限制',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '0'
        },
        {
          parameter: 'change',
          explain: '点击获取当前值',
          type: 'Function',
          must: 'false',
          OptionalValues: '{change: val => {}}',
          Default: '——'
        },
      ];
    },
    CreatFormListH() {
      return [
        {
          type: 'CHECKBOX',
          label: '标题',
          fieldName: 'CHECKBOX',
          options: { trueValue: 10041001, falseValue: 10041002 },
          CHECKBOX: val => {
            console.log('选中的值', val);
          }
        }
      ];
    },
    CreatAttributesDataH() {
      return [
        {
          parameter: 'trueValue',
          explain: '选中后的值',
          type: 'String/Number',
          must: 'false',
          OptionalValues: '',
          Default: '1'
        },
        {
          parameter: 'falseValue',
          explain: '选中后的值',
          type: 'String/Number',
          must: 'false',
          OptionalValues: '',
          Default: '0'
        },
        {
          parameter: 'change',
          explain: '点击触发的事件',
          type: 'Function',
          must: 'false',
          OptionalValues: 'change: val => {}',
          Default: ''
        },
      ];
    },
    CreatFormListI() {
      return [
         {
          type: 'MULTIPLE_CHECKBOX',
          label: '标题',
          fieldName: 'MULTIPLE_CHECKBOX',
          selfCols: 2,
          initialValue: [10041001],
          itemList: [
            { value: 10041001, text: '选项A' },
            { value: 10041003, text: '选项B' }
          ],
        }
      ];
    },
    CreatAttributesDataI() {
      return [
        {
          parameter: 'itemList',
          explain: '选项的数组',
          type: 'Array',
          must: 'false',
          OptionalValues: "[{value: 1, text: '介绍'}]",
          Default: '——'
        },
        {
          parameter: 'initialValue',
          explain: '默认选中',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        }
      ];
    },
    CreatFormListJ() {
      return [
         {
          type: 'DATE',
          label: '标题',
          fieldName: 'DATE',
          dateType: 'date',
          format: 'yyyy-MM',
          valueFormat: [],
          minDateTime: '2020-1-1',
          maxDateTime: '2020-10-1'
        }
      ];
    },
    CreatAttributesDataJ() {
      return [
        {
          parameter: 'dateType',
          explain: '日期控件的类型，只对 DATE 和 RANGE_DATE 生效',
          type: 'String',
          must: 'false',
          OptionalValues: 'date/datetime/exactdate/month/daterange/datetimerange/exactdaterange/monthrange',
          Default: 'date'
        },
        {
          parameter: 'format',
          explain: '日期格式',
          type: 'String',
          must: 'false',
          OptionalValues: 'element日期格式',
          Default: 'yyyy-MM-dd-hh-mm-ss'
        },
        {
          parameter: 'valueFormat',
          explain: '默认选中',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'minDateTime',
          explain: '小于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'maxDateTime',
          explain: '大于该时间的日期段将被禁用',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        }
      ];
    },
    CreatFormListK() {
      return [
        {
          type: 'SEARCH_HELPER',
          label: '搜索框',
          fieldName: 'SEARCH_HELPER',
          request: {
            fetchApi: () => {},
            params: {canshu: 'aaa'},
            fieldKey: 'name',
            datakey: 'String',
            valueKey: 'String',
            textKey: 'String'
          },
        }
      ];
    },
    CreatAttributesDataK() {
      return [
        {
          parameter: 'fetchApi',
          explain: '搜索帮助的接口函数',
          type: 'Function',
          must: 'false',
          OptionalValues: '() => {}',
          Default: '——'
        },
        {
          parameter: 'params',
          explain: '接口参数',
          type: 'Object',
          must: 'false',
          OptionalValues: "{canshu: 'aaa'}",
          Default: '——'
        },
        {
          parameter: 'datakey',
          explain: "服务端响应数据的数组列表的 key，支持路径操作('step1.step2.items')，不指定表示 res.data 就是数组数据",
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'valueKey',
          explain: '数据值的字段名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'textKey',
          explain: '数据文本的字段名',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        }
      ];
    },
    CreatFormListL() {
      return [
         {
          type: 'TEXT_AREA',
          label: 'textarea输入框 ',
          fieldName: 'TEXT_AREA',
          maxlength: 100,
          rows: 2
        }
      ];
    },
    CreatAttributesDataL() {
      return [
        {
          parameter: 'maxlength',
          explain: '输入的最大长度',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '200'
        },
        {
          parameter: 'rows',
          explain: '输入框行数',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '2'
        },
      ];
    },
    CreatFormListM() {
      return [
         {
          type: 'UPLOAD_IMG',
          label: '图片上传',
          fieldName: 'UPLOAD_IMG',
          upload: {
            actionUrl: 'https://jsonplaceholder.typicode.com/posts/',
            fixedSize: [5, 3],
            isCalcHeight: true,
            limit: 1,
            titles: ['标题A'],
            tipText: '提示文字'
          }
        }
      ];
    },
    CreatAttributesDataM() {
      return [
        {
          parameter: 'actionUrl',
          explain: '上传地址',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fixedSize',
          explain: '裁剪框的宽高比',
          type: 'Arrar',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'isCalcHeight',
          explain: '根据裁剪图片的宽高比计算上传组件容器的高度',
          type: 'Boolean',
          must: 'false',
          OptionalValues: '——',
          Default: 'fasle'
        },
        {
          parameter: 'limit',
          explain: '上传图片的数量',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'titles',
          explain: '图片对应的标题，同limit对应',
          type: 'Array',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'tipText',
          explain: '上传图片的提示文字',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
      ];
    },
    CreatFormListN() {
      return [
         {
          type: 'UPLOAD_FILE',
          label: '文件上传',
          fieldName: 'UPLOAD_IMG',
          upload: {
            actionUrl: 'https://jsonplaceholder.typicode.com/posts/',
            fileSize: 3,
            limit: 1,
            fileTypes: ['jpg', 'jpeg']
          }
        }
      ];
    },
    CreatAttributesDataN() {
      return [
        {
          parameter: 'actionUrl',
          explain: '上传地址',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'fileSize',
          explain: '上传文件大小的限制',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '5M'
        },
        {
          parameter: 'limit',
          explain: '上传图片的数量',
          type: 'Number',
          must: 'false',
          OptionalValues: '——',
          Default: '1'
        },
        {
          parameter: 'fileTypes',
          explain: '允许上传文件的格式数组',
          type: 'Array',
          must: 'false',
          OptionalValues: "['jpg', 'jpeg', 'png', 'pdf']",
          Default: '——'
        },
      ];
    },
    CreatFormListO() {
      return [
         {
          type: 'RADIO',
          label: '单选框',
          fieldName: 'RADIO',
          itemList: [
            {text: '是', value: 1},
            {text: '否', value: 0}
          ]
        }
      ];
    },
    CreatAttributesDataO() {
      return [
        {
          parameter: 'itemList',
          explain: '选项',
          type: 'Array',
          must: 'true',
          OptionalValues: '——',
          Default: '——'
        },
      ];
    },
    CreatFormListP() {
      return [
         {
          type: 'TIME_SELECT',
          label: '时间下拉框',
          fieldName: 'TIME_SELECT',
          options: {
            startTime: '10:00', // 最小的时间
            endTime: '20:00', // 最大的时间
            stepTime: '00:10' // 每一步的间隔
          }
        }
      ];
    },
    CreatAttributesDataP() {
      return [
        {
          parameter: 'startTime',
          explain: '最小的时间',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '00:00'
        },
        {
          parameter: 'endTime',
          explain: '最大的时间',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '23:45'
        },
        {
          parameter: 'stepTime',
          explain: '每一步的间隔',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '00:15'
        },
      ];
    },
    CreatFormListQ() {
      return [
         {
          type: 'INPUT_CASCADER',
          label: '瀑布流下拉框',
          fieldName: 'INPUT_CASCADER',
          itemList: [
            {
              tetx: '显示文字',
              value: 1
            }
          ]
        }
      ];
    },
    CreatAttributesDataQ() {
      return [];
    },
    CreatFormListR() {
      return [
         {
          type: 'BREAK_SPACE',
          label: '分隔符',
          fieldName: 'BREAK_SPACE',
          containerStyle: "{border: '1px solid #e55954'}",
          labelStyle: "{color: '#e55954'}",
          contentPosition: 'left',
          IconClass: 'el-icon-mobile-phone',
        }
      ];
    },
    CreatAttributesDataR() {
      return [
        {
          parameter: 'label',
          explain: '分隔符的标题文本',
          type: 'String',
          must: 'false',
          OptionalValues: '——',
          Default: '标题'
        },
        {
          parameter: 'containerStyle',
          explain: '分隔符外层容器的 css 样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'labelStyle',
          explain: '分隔符中文本的 css 样式',
          type: 'Object',
          must: 'false',
          OptionalValues: '——',
          Default: '——'
        },
        {
          parameter: 'contentPosition',
          explain: '分隔符标题位置',
          type: 'String',
          must: 'false',
          OptionalValues: 'left / center / right',
          Default: 'left'
        },
        {
          parameter: 'IconClass',
          explain: '分隔符标题图标',
          type: 'String',
          must: 'false',
          OptionalValues: 'element图标库',
          Default: '——'
        },
      ];
    },
  }
};
</script>
<style scoped>
</style>
