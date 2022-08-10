<template>
  <div>
    <div style="margin-top: 10px;">
      <yn-flex wrap="true">
        <yn-flex-item sm="12" md="6" lg="3">
          <div style="margin: 4px;">
            <yn-form-input componentid="test2" label="姓名">
              <yn-input placeholder="Basic usage" style="width: 100%;" />
            </yn-form-input>
          </div>
        </yn-flex-item>
        <yn-flex-item sm="12" md="6" lg="3">
          <div style="margin: 4px;">
            <yn-form-input componentid="test1" label="生日">
              <yn-date-picker style="width: 100%;">
                <template slot="dateRender" slot-scope="current">
                  <div class="ant-calendar-date">{{ current.date() }}</div>
                </template>
              </yn-date-picker>
            </yn-form-input>
          </div>
        </yn-flex-item>
        <yn-flex-item sm="12" md="6" lg="3">
          <div style="margin: 4px;">
            <yn-form-input componentid="test3" label="工作年限">
              <yn-input-number
                :min="0"
                :max="10"
                :step="0.1"
                style="width: 100%;"
              />
            </yn-form-input>
          </div>
        </yn-flex-item>
        <yn-flex-item sm="12" md="6" lg="3">
          <div style="margin: 4px;">
            <yn-form-input componentid="test4" label="来自省份">
              <yn-select
                :defaultValue="provinceData[0]"
                @change="handleProvinceChange"
                style="width: 100%;"
              >
                <yn-select-option
                  v-for="province in provinceData"
                  :key="province"
                  >{{ province }}</yn-select-option
                >
              </yn-select>
            </yn-form-input>
          </div>
        </yn-flex-item>
        <yn-flex-item sm="12" md="6" lg="3">
          <div style="margin: 4px;">
            <yn-form-input componentid="test4" label="搜索">
              <yn-simple-search
                :autocomplete="autoComplete"
                @search="onsearch"
                :searchscope="searchScope"
                placeholder="input here"
              >
                <template v-slot:option="item1">
                  {{ item1.query }} 在
                  <a
                    :href="`https://s.taobao.com/search?q=${item1.query}`"
                    target="_blank"
                    rel="noopener noreferrer"
                    >{{ item1.category }}</a
                  >
                  区块中
                  <span>约 {{ item1.count }} 个结果</span>
                </template>
              </yn-simple-search>
            </yn-form-input>
          </div>
        </yn-flex-item>
      </yn-flex>
    </div>
  </div>
</template>

<script>
import "yn-p1/libs/components/yn-form-input/";
import "yn-p1/libs/components/yn-flex/";
import "yn-p1/libs/components/yn-simple-search/";
import "yn-p1/libs/components/yn-input/";
import "yn-p1/libs/components/yn-input-number/";
import "yn-p1/libs/components/yn-select/";
import "yn-p1/libs/components/yn-select-option/";
import "yn-p1/libs/components/yn-date-picker/";

const provinceData = ["浙江", "江苏"];
const cityData = {
  浙江: ["Hangzhou", "Ningbo", "Wenzhou"],
  江苏: ["Nanjing", "Suzhou", "Zhenjiang"]
};

function autoCompleteParser(item, index) {
  return {
    value: `searchValue:${index}`,
    label: `searchLabel:${index}`,
    count: Math.floor(Math.random() * (100 + 1)) + 100
  };
}

export default {
  name: "Sample3",
  data() {
    return {
      provinceData,
      cityData,
      cities: cityData[provinceData[0]],
      secondCity: cityData[provinceData[0]][0],
      autoCompleteParser,
      autoComplete: {
        parser: autoCompleteParser,
        // url: "",
        customUrl(method) {
          let res = [1, 2, 3, 4, 5];
          return Promise.resolve(res);
        }
      },
      searchScope: [
        { value: "all", label: "全部" },
        { value: "part", label: "局部" }
      ]
    };
  },
  methods: {
    handleProvinceChange(value) {
      this.cities = cityData[value];
      this.secondCity = cityData[value][0];
    },
    onsearch(searchDetail) {
      console.log(searchDetail);
    }
  },
  mounted() {}
};
</script>

<style></style>
