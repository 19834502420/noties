/* eslint-disable no-unused-vars */
import basicOptions from "yn-p1-designer/libs/views/applications/p1_designer/components/yn-designer-component/index.js";
delete basicOptions.create;
import YnHandsontable from "yn-handsontable";
import "yn-handsontable/dist/handsontable.full.css";
import "yn-p1/libs/components/yn-button/";
import DsUtils from "yn-p1/libs/utils/DsUtils";
import UiUtils from "yn-p1/libs/utils/UiUtils";
import cloneDeep from "lodash/cloneDeep";
import * as XLSX from "xlsx";
import XLSXS from "xlsx-style";
import "yn-p1/libs/components/yn-date-picker/";
import FileSaver from "file-saver";
import utilSSS from "./utilSSS";
import "yn-p1/libs/components/yn-tabs/";
import "yn-p1/libs/components/yn-tab-pane/";
import "yn-p1/libs/components/yn-month-picker/";
const apiNameMap = {
  tbCChannelAdjustPlan: {
    name: "销售表",
    fields: [
      {
        code: "fjdDef001",
        fieldTitle: "季度",
        masterDataName: "masterDataObject019"
      },
      {
        code: "fjrDef001",
        fieldTitle: "节日",
        masterDataName: "masterDataObject020"
      },
      {
        code: "flbDef001",
        fieldTitle: "类别",
        masterDataName: "masterDataObject016"
      },
      {
        code: "fnDef001",
        fieldTitle: "年",
        masterDataName: "masterDataObject018"
      },
      {
        code: "fzlDef001",
        fieldTitle: "子类别",
        masterDataName: "masterDataObject017"
      }
    ]
  }
};

export default {
  mixins: [basicOptions],
  components: {},
  computed: {},
  data() {
    return {
      aman: [],
      bman: [],
      cman: [],
      dman: [],
      eman: [],
      fman: [],
      gman: [],
      panes: [],
      hman: [],
      selectClass: "",
      activeKey: 0,
      msgList: [],
      allData: null,
      min: false,
      headerData: null,
      resData2: null,
      bodyData: null,
      tableData: null,
      resData: null,
      headArr: [],
      lenDianPu: null,
      yueFen: "",
      nowYear: new Date().getFullYear(),
      nowMouth: new Date().getMonth() + 1,
      holidayYue: [],
      selectOptions: null,
      selectedValue: "11ed1de2f2876fc1be84472eda07d6fb",
      selectedValue2: "11ed1de4976438dfbe847b6468dac2c3",
      headerMergeCells: [],
      bodyMergeCells: [],
      usefulData: {},
      index1: null,
      isNUl: 0,
      index2: null,
      yearAll: null,
      mouthAll: null,
      zuzhiValue: "6b8ce3149ebe11e88b72b9b7065e24cb",
      zhuzhiObj: null,
      zuzhiNum: ""
    };
  },
  inject: {
    getPageDesignerId: {
      default: () => {}
    },
    baseUrl: {
      default: () => ""
    }
  },
  methods: {
    // yearChange() {
    //   if (this.$route.query.nianfen !== undefined) {
    //     this.selectedValue = this.$route.query.nianfen;
    //   }
    // },
    getHeaderData() {
      //表头数据
      // console.log("年份", this.selectedValue);
      // this.nowYear = new Date().getFullYear();
      // this.nowMouth = new Date().getMonth() + 1;
      switch (this.apiName) {
        case "tbCChannelAdjustPlan": {
          let yueFenArr; //月份
          let holidayArr; //节日
          let nanFenArr; //年份
          return Promise.all([
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCY`),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCM`),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCF`)
            // DsUtils.get(
            //   `http://localhost:8096/login/loginStatus?LoginToken=11ed35986f53fe65aa77e51c1b57e44b`
            // )
          ]).then(([nianFenRes, yueFenRes, holidayRes]) => {
            // console.log("aaasads", aaa);
            // console.log("season", yueFenRes);
            // console.log("holidayRes", holidayRes);
            yueFenArr = yueFenRes.data.items;
            this.mouthAll = yueFenArr;
            this.usefulData.seasonArr = yueFenArr;
            holidayArr = holidayRes.data.items;
            this.usefulData.holidayArr = holidayArr;
            nanFenArr = nianFenRes.data.items;
            this.yearAll = nanFenArr;
            // console.log("seaSonArr", nianFenRes);
            // console.log("seaSonArr", yueFenRes);
            let headerDataItem = {
              shop: "类别",
              category: "一级",
              childCategory: "二级",
              numB: "序号"
            };

            this.headerData = [
              { ...headerDataItem },
              { ...headerDataItem },
              { ...headerDataItem }
            ];
            for (let index = 0; index < nanFenArr.length; index++) {
              if (nanFenArr[index].objectId === this.selectedValue) {
                //alert("a");
                //表头第一行 年度
                year = nanFenArr[index].name;
              }
            }
            let year;
            this.headerData.forEach((item, index) => {
              //("nianfen", nanFenArr);

              for (let i = 0; i < yueFenArr.length + 1; i++) {
                let holiday = holidayArr[i];
                //console.log("seasonArr", yueFenArr[index].name);
                //if (index === 0 && nanFenArr[i] === this.selectedValue) {
                if (index === 0) {
                  //alert("a");
                  //表头第一行 年度
                  item["key" + i] = year;
                  // }
                  //alert("a");
                  //表头第一行 年度
                  // item["key" + i] = yueFenArr[index].name;
                } else if (index === 1) {
                  //表头第二行 季度
                  // let seasonId = holiday.fjdDef001;
                  // let seasonIndex;
                  // seasonArr.forEach((season, idx) => {
                  //   if (season.objectId === seasonId) {
                  //     seasonIndex = idx;
                  //   }
                  // });
                  if (i === yueFenArr.length) {
                    item["key" + i] = "累计平均";
                  } else {
                    this.headArr[i] = yueFenArr[i].objectId;
                    this.holidayYue[i] = yueFenArr[i].objectId;
                    item["key" + i] = yueFenArr[i].name;
                    !this.usefulData.holidayMap &&
                      (this.usefulData.holidayMap = {});
                    this.usefulData.holidayMap["key" + i] =
                      yueFenArr[i].objectId;
                  } // console.log("holidayYue", this.holidayYue);
                }
                // else {
                //   //表头第三行 节日
                //   item["key" + i] = holidayArr[i].name;
                //   // !this.usefulData.holidayMap &&
                //   //   (this.usefulData.holidayMap = {});
                //   // this.usefulData.holidayMap["key" + i] = holiday.name;
                // }
              }
            });

            this.headerData.forEach((item, index) => {
              //let s = "";
              if (index === 2) {
                for (let i = 0; i < this.holidayYue.length; i++) {
                  let s = "";
                  for (let j = 0; j < holidayArr.length; j++) {
                    if (this.holidayYue[i] === holidayArr[j].calendarMonth) {
                      s = s + holidayArr[j].name + " ";
                    }
                  }
                  item["key" + i] = s;
                }
              }
            });
            // console.log("this.head", this.headerData);
            //第一季节日集合
            // const holidayArrOfSeason1 = holidayArr.filter(
            //   holiday => holiday.fjdDef001 === seasonArr[0].objectId
            // );
            // //第二季节日集合
            // const holidayArrOfSeason2 = holidayArr.filter(
            //   holiday => holiday.fjdDef001 === seasonArr[1].objectId
            // );
            // //第三季节日集合
            // const holidayArrOfSeason3 = holidayArr.filter(
            //   holiday => holiday.fjdDef001 === seasonArr[2].objectId
            // );
            // //第四季节日集合
            // const holidayArrOfSeason4 = holidayArr.filter(
            //   holiday => holiday.fjdDef001 === seasonArr[3].objectId
            // );

            this.headerMergeCells = [
              {
                row: 0,
                col: 0,
                rowspan: 3,
                colspan: 3
              }, //店铺
              {
                row: 0,
                col: 3,
                rowspan: 3,
                colspan: 1
              },
              {
                row: 0,
                col: 4,
                rowspan: 1,
                colspan: 13
              } //类别
              //年度
              // {
              //   row: 1,
              //   col: 3,
              //   rowspan: 1,
              //   colspan: holidayArrOfSeason1.length
              // }, //第一季度
              // {
              //   row: 1,
              //   col: 3 + holidayArrOfSeason1.length,
              //   rowspan: 1,
              //   colspan: holidayArrOfSeason2.length
              // }, //第二季度
              // {
              //   row: 1,
              //   col:
              //     3 + holidayArrOfSeason1.length + holidayArrOfSeason2.length,
              //   rowspan: 1,
              //   colspan: holidayArrOfSeason3.length
              // }, //第三季度
              // {
              //   row: 1,
              //   col:
              //     3 +
              //     holidayArrOfSeason1.length +
              //     holidayArrOfSeason2.length +
              //     holidayArrOfSeason3.length,
              //   rowspan: 1,
              //   colspan: holidayArrOfSeason4.length
              // } //第四季度
            ];
          });
        }
      }
    },

    async getBodyData() {
      switch (this.apiName) {
        case "tbCChannelAdjustPlan": {
          console.log("this.pa", this.panes);
          let dianPuArr, zhiBiao01Arr, zhiBiao02Arr, yueFenArr;

          //  console.log("thiaaa", quDao);
          if (this.$route.query.hasOwnProperty("zzObjectId")) {
            this.zuzhiValue = this.$route.query.zzObjectId;
          }

          //判断是否是最后一个组织
          if (
            this.$route.query.hasOwnProperty("isGycc") &
            ("12a" === this.$route.query.isGycc)
          ) {
            this.min = true;
          }
          this.resData = await this.getBusinessObjectData();
          // console.log("res", resData);
          //判断是否存在属性zzObjectId  是则获取组织objectId
          let quDao = await this.getBusinessObjectData2();
          if (this.$route.query.hasOwnProperty("zuzhiObj")) {
            this.zhuzhiObj = this.$route.query.zuzhiObj;
          }
          //console.log("来了", this.zhuzhiObj);
          return Promise.all([
            DsUtils.get(
              `http://localhost:8096/Grou/GroData?LoginToken=11ed3f924e9fe4adaa776be4db293f51&code='${this.zuzhiValue}'`
            ),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasShop`),
            DsUtils.get(
              `http://192.168.2.218:8180/metadata/apiBasIndex01?query=indexType='SJJH'`
            ),
            DsUtils.get(
              `http://192.168.2.218:8180/metadata/apiBasIndex02?query=indexType='YXTZ'`
            ),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCM`)
          ]).then(([zuZHi, dianPu, zhiBiao01, zhiBiao02, yueFen]) => {
            // console.log("组织", dianPu.data.items);
            // console.log("组织", zuZHi.data.data);
            //dianPuArr = dianPu.data.items;
            console.log("zuzhi", zuZHi);
            console.log("zuzhi", this.zuzhiValue);
            if (
              this.$route.query.hasOwnProperty("isGy") &
              ("1" === this.$route.query.isGy)
            ) {
              dianPuArr = dianPu.data.items;
              // console.log("adsadasdasdasdsadasdsad");
            } else {
              dianPuArr = zuZHi.data.data;
              if (dianPuArr.length >= 1) {
                this.zuzhiNum = dianPuArr[0].objectId;
                for (let index = 1; index < dianPuArr.length; index++) {
                  this.zuzhiNum =
                    this.zuzhiNum + "','" + dianPuArr[index].objectId;
                }
                console.log("thiaaa", this.zuzhiNum);
              }
            }
            // console.log("isGy", this.$route.query.isGy);
            // console.log("isGycc", this.$route.query.isGycc);
            console.log("rea", this.resData);
            this.usefulData.dianPuArr = dianPuArr;
            zhiBiao01Arr = zhiBiao01.data.items;
            this.usefulData.zhiBiao01Arr = zhiBiao01Arr;
            zhiBiao02Arr = zhiBiao02.data.items;
            this.usefulData.zhiBiao02Arr = zhiBiao02Arr;
            yueFenArr = yueFen.data.items;
            this.usefulData.yueFenArr = yueFenArr;
            this.bodyData = [];
            //let len2 = zhiBiao02Arr.length;
            let i = 0;
            for (let index = 0; index < zhiBiao01Arr.length; index++) {
              if (zhiBiao01Arr[index].indexType === "SJJH") {
                i = i + 1;
              }
            }
            let j = 0;
            for (let index = 0; index < zhiBiao02Arr.length; index++) {
              if (zhiBiao02Arr[index].indexType === "YXTZ") {
                j = j + 1;
              }
            }
            let z = 0;
            for (let index = 0; index < dianPuArr.length; index++) {
              if (dianPuArr[index].shopOrgUuid === this.zuzhiValue) {
                z = z + 1;
              }
            }
            console.log("dianpu", dianPuArr);
            console.log("dianpu", dianPuArr);
            let len1 = i;
            let len2 = j;
            let lenDianPu = dianPuArr.length;
            this.lenDianPu = lenDianPu * (len1 + 1) * (len2 + 3);
            console.log("dianpu", this.lenDianPu);
            //console.log("shopOrgUuid", this.$route);
            // console.log("店铺", zhiBiao01Arr);
            // console.log("店铺", zhiBiao02Arr);
            // console.log("dianPuArr", dianPuArr);
            dianPuArr.forEach(dianPuItem => {
              zhiBiao01Arr.forEach(zhiBiao01Item => {
                zhiBiao02Arr.forEach(zhiBiao02Item => {
                  //if (childCategoryItem.fssDef001 === categoryItem.objectId) {
                  // yueFenArr.forEach(yueFenItem => {
                  if (
                    zhiBiao01Item.indexType === "SJJH" &&
                    zhiBiao02Item.indexType === "YXTZ"
                  ) {
                    //console.log("taaa", dianPuItem.hasOwnProperty("shao"));
                    if (dianPuItem.hasOwnProperty("isGro")) {
                      // console.log("1231111", dianPuItem.parentId);
                      // console.log("1231111", dianPuItem);
                      if (dianPuItem.parentId === this.zuzhiValue) {
                        // console.log("1231", dianPuItem.parentId);
                        this.bodyData.push({
                          //dianPu: dianPuItem.name,
                          dianPu:
                            "<a href=" +
                            "/#/pageDesigner_rt?TOKEN=11ed3f924e9fe4adaa776be4db293f51&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1793&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed34d602fddae2958cf7c0b4f8e868&dataId=11ed33d47e94618a958c55c46cee597d&previewType=design&isHistory=true" +
                            "&zzObjectId=" +
                            dianPuItem.objectId +
                            "&isGy=" +
                            dianPuItem.isGro +
                            "&nianfen=" +
                            this.selectedValue +
                            " target='_blank' style='cursor:pointer;'>" +
                            dianPuItem.name +
                            "</a>",
                          dianPuObjectId: dianPuItem.objectId,
                          // dianPu: "北京市朝阳区果多美劲松店",
                          // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                          zhiBiao01: zhiBiao01Item.name,
                          zhiBiao02: zhiBiao02Item.name,
                          zhiBiao01ObjectId: zhiBiao01Item.objectId,
                          zhiBiao02ObjectId: zhiBiao02Item.objectId
                          //   });
                        });
                        if (
                          zhiBiao01Item.name === "今年实际调整计划" &&
                          zhiBiao02Item.name === "销售额(万元)"
                        ) {
                          let arr = ["计划完成率", "去年同比", "上月环比"];
                          for (let index = 0; index < 3; index++) {
                            this.bodyData.push({
                              dianPu:
                                "<a href=" +
                                "/#/pageDesigner_rt?TOKEN=11ed3f924e9fe4adaa776be4db293f51&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1793&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed34d602fddae2958cf7c0b4f8e868&dataId=11ed33d47e94618a958c55c46cee597d&previewType=design&isHistory=true" +
                                "&zzObjectId=" +
                                dianPuItem.objectId +
                                "&isGy=" +
                                dianPuItem.isGro +
                                "&nianfen=" +
                                this.selectedValue +
                                " target='_blank' style='cursor:pointer;'>" +
                                dianPuItem.name +
                                "</a>",
                              dianPuObjectId: dianPuItem.objectId,
                              // dianPu: "北京市朝阳区果多美劲松店",
                              // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                              zhiBiao01: "对比分析",
                              zhiBiao02: arr[index]
                              //   });
                            });
                          }
                        }
                      }
                    } else {
                      //店铺值
                      console.log("asdsasd", this.zuzhiValue);
                      console.log("asdsasd2222", dianPuItem.shopOrgUuid);
                      if (dianPuItem.shopOrgUuid === this.zuzhiValue) {
                        console.log("nianfen", this.selectedValue);
                        this.bodyData.push({
                          dianPu:
                            "<a href=" +
                            "/#/pageDesigner_rt?TOKEN=11ed3f924e9fe4adaa776be4db293f51&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1793&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed34d602fddae2958cf7c0b4f8e868&dataId=11ed33d47e94618a958c55c46cee597d&previewType=design&isHistory=true" +
                            "&zzObjectId=" +
                            dianPuItem.objectId +
                            "&isGy=" +
                            "1" +
                            "&isGycc=" +
                            "12a" +
                            "&nianfen=" +
                            this.selectedValue +
                            "&zuzhiObj=" +
                            this.zuzhiValue +
                            " target='_blank' style='cursor:pointer;'>" +
                            dianPuItem.name +
                            "</a>",
                          dianPuObjectId: dianPuItem.objectId,
                          // dianPu: "北京市朝阳区果多美劲松店",
                          // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                          zhiBiao01: zhiBiao01Item.name,
                          zhiBiao02: zhiBiao02Item.name,
                          zhiBiao01ObjectId: zhiBiao01Item.objectId,
                          zhiBiao02ObjectId: zhiBiao02Item.objectId
                          //   });
                        });

                        if (
                          zhiBiao01Item.name === "今年实际调整计划" &&
                          zhiBiao02Item.name === "销售额(万元)"
                        ) {
                          let arr = ["计划完成率", "去年同比", "上月环比"];
                          for (let index = 0; index < 3; index++) {
                            this.bodyData.push({
                              dianPu: dianPuItem.name,
                              dianPuObjectId: dianPuItem.objectId,
                              // dianPu: "北京市朝阳区果多美劲松店",
                              // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                              zhiBiao01: "对比分析",
                              zhiBiao02: arr[index]
                              //   });
                            });
                          }
                        }
                      }
                      console.log("adassdsadad", this.bodyData);
                    }
                    if (
                      this.$route.query.hasOwnProperty("isGycc") &
                      ("12a" === this.$route.query.isGycc)
                    ) {
                      //("dian铺", dianPuItem);
                      if (dianPuItem.objectId === this.zuzhiValue) {
                        this.bodyData.push({
                          dianPu: dianPuItem.name,
                          dianPuObjectId: dianPuItem.objectId,
                          // dianPu: "北京市朝阳区果多美劲松店",
                          // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                          zhiBiao01: zhiBiao01Item.name,
                          zhiBiao02: zhiBiao02Item.name,

                          zhiBiao01ObjectId: zhiBiao01Item.objectId,
                          zhiBiao02ObjectId: zhiBiao02Item.objectId
                          //   });
                        });

                        if (
                          zhiBiao01Item.name === "今年实际调整计划" &&
                          zhiBiao02Item.name === "销售额(万元)"
                        ) {
                          let arr = ["计划完成率", "去年同比", "上月环比"];
                          for (let index = 0; index < 3; index++) {
                            this.bodyData.push({
                              dianPu: dianPuItem.name,
                              dianPuObjectId: dianPuItem.objectId,
                              // dianPu: "北京市朝阳区果多美劲松店",
                              // dianPuObjectId: "11ed33fc05490592958c97d03dd89595",
                              zhiBiao01: "对比分析",
                              zhiBiao02: arr[index]
                              //   });
                            });
                          }
                        }
                      }
                    }
                  }
                });
              });
            });
            // console.log("上层", this.bodyData);
            if (this.min) {
              // for (let index = 0; index < 6; index++) {
              this.bodyData.push({
                dianPu: "原因分析"
                // category: "你好",
                // childCategory: "213"
              });
              // }
              //for (let index = 0; index < 6; index++) {
              this.bodyData.push({
                dianPu: "基本对策"
              });
              //}
            }
            let a = {};
            for (let index = 0; index < lenDianPu; index++) {
              this.bodyMergeCells.push({
                row: 3 + len1 * len2 * index + 3 * index,
                col: 0,
                rowspan: len1 * len2 + 3,
                colspan: 1
              });
            }
            let arr = 0;
            for (let index = 0; index < (len1 + 1) * (lenDianPu + 1); index++) {
              if (index % 4 === 3 && index !== 0) {
                console.log(index);
                this.bodyMergeCells.push({
                  row: 3 + len2 * index - arr,
                  col: 1,
                  rowspan: 3,
                  colspan: 1
                });
                arr = arr + 2;
              } else {
                this.bodyMergeCells.push({
                  row: 3 + len2 * index - arr,
                  col: 1,
                  rowspan: len2,
                  colspan: 1
                });
              }
            }
            this.bodyData.forEach((item, index) => {
              // console.log("itemsaa", item);
              // console.log("itemsaa", index);
              if (item.dianPu === "原因分析") {
                this.index1 = index;
                //("123", 3 + index);
                this.bodyMergeCells.push({
                  row: 3 + index,
                  col: 1,
                  rowspan: 1,
                  colspan: 16
                });
                item.category = "";
                item.childCategory = "";
              }
              if (item.dianPu === "基本对策") {
                this.index2 = index;
                this.bodyMergeCells.push({
                  row: 3 + index,
                  col: 1,
                  rowspan: 1,
                  colspan: 16
                });
                item.category = "";
                item.childCategory = "";
              }
            });
            this.bman;
            let indexX = 0;
            this.cman;
            let indexX2 = 0;
            this.dman;
            let indexX3 = 0;
            this.fman;
            let indexX4 = 0;
            let indexX5 = 0;
            let indexX6 = 0;
            let holidayRow = this.headerData[this.headerData.length - 2];
            //序号部分
            let iaa = 1;
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if ("序号" === holidayRow[key]) {
                  item[key] = iaa;
                  iaa++;
                }
              }
            });
            //有数据
            if (this.resData.length !== 0) {
              this.bodyData.forEach(item => {
                this.resData.forEach(row => {
                  //console.log("cate", row);
                  // console.log("cate", childCategory);
                  let nianFen = row.yearUuid;
                  // let childCategory = row.fyfDef001.name;
                  // let holiday = row.fjrDef001.name;
                  let dianPu = null;
                  if (this.min) {
                    //console.log("aaa");
                    dianPu = row.shopUuidS;
                  } else {
                    //console.log("bbb");
                    dianPu = row.orgUuid;
                  }
                  let zhiBiao01 = row.index1Uuid;
                  let zhiBiao02 = row.index2Uuid;
                  let value = row.ammout;
                  for (let key in holidayRow) {
                    if ("类别" === holidayRow[key]) {
                      item[key] = item.dianPu;
                    }
                  }
                  for (let key in holidayRow) {
                    if ("一级" === holidayRow[key]) {
                      item[key] = item.zhiBiao01;
                    }
                  }
                  for (let key in holidayRow) {
                    if ("二级" === holidayRow[key]) {
                      item[key] = item.zhiBiao02;
                    }
                  }

                  // console.log("itemaaa", item);
                  for (let key in holidayRow) {
                    if (
                      "一级" === holidayRow[key] &&
                      item.dianPu === "原因分析"
                    ) {
                      // console.log("thist", this.zuzhiValue);
                      //console.log("thist", this.selectedValue);
                      for (let index = 0; index < quDao.length; index++) {
                        // console.log(
                        //   "sdsadasd",
                        //   quDao[index].shopUuidS === this.zuzhiValue
                        // );
                        // console.log(
                        //   "sdsadasd2",
                        //   quDao[index].monthChgUuid === this.selectedValue2
                        // );
                        // console.log(
                        //   "sdsadasd3",
                        //   quDao[index].yearChgUuid === this.selectedValue
                        // );
                        if (
                          quDao[index].shopUuidS === this.zuzhiValue &&
                          quDao[index].monthChgUuid === this.selectedValue2 &&
                          quDao[index].yearChgUuid === this.selectedValue
                        ) {
                          //basicCountar
                          // console.log("selectedValue2", this.selectedValue2);
                          if (
                            quDao[index].basicCountar === "" ||
                            quDao[index].basicCountar === null
                          ) {
                            item[key] = quDao[index].causeAnal;
                          }
                        }
                      }
                      //item[key] = "23132";
                      if (item[key] === undefined) {
                        item[key] = "";
                      }
                    }
                  }
                  for (let key in holidayRow) {
                    if (
                      "一级" === holidayRow[key] &&
                      item.dianPu === "基本对策"
                    ) {
                      for (let index = 0; index < quDao.length; index++) {
                        // console.log(
                        //   "sdsadasd",
                        //   quDao[index].shopUuidS === this.zuzhiValue
                        // );
                        // console.log(
                        //   "sdsadasd2",
                        //   quDao[index].monthChgUuid === this.selectedValue2
                        // );
                        // console.log(
                        //   "sdsadasd3",
                        //   quDao[index].yearChgUuid === this.selectedValue
                        // );
                        if (
                          quDao[index].shopUuidS === this.zuzhiValue &&
                          quDao[index].monthChgUuid === this.selectedValue2 &&
                          quDao[index].yearChgUuid === this.selectedValue
                        ) {
                          //basicCountar
                          if (
                            quDao[index].causeAnal === "" ||
                            quDao[index].causeAnal === null
                          ) {
                            item[key] = quDao[index].basicCountar;
                          }
                          // console.log("quDao[index].basicCountar", quDao[index]);
                        }
                      }
                      //item[key] = "23132";
                      if (item[key] === undefined) {
                        item[key] = "";
                      }
                    }
                  }
                  // console.log("arra", this.headArr);
                  // console.log("arra", holidayRow);
                  for (let index = 0; index < this.headArr.length; index++) {
                    if (
                      row.monthUuid === this.headArr[index] &&
                      zhiBiao01 === item.zhiBiao01ObjectId &&
                      zhiBiao02 === item.zhiBiao02ObjectId &&
                      dianPu === item.dianPuObjectId &&
                      nianFen === this.selectedValue
                    ) {
                      if ("销售额(万元)" === item.zhiBiao02) {
                        item["key" + index] = parseFloat(value) / 10000;
                      } else if ("销售额(万元/天)" === item.zhiBiao02) {
                        item["key" + index] = parseFloat(value) / 10000;
                      } else {
                        item["key" + index] = value;
                      }
                    }
                  }
                });
              });
            } else {
              //如果没有数据
              this.bodyData.forEach(item => {
                for (let key in holidayRow) {
                  if ("类别" === holidayRow[key]) {
                    item[key] = item.dianPu;
                  }
                }
                for (let key in holidayRow) {
                  if ("一级" === holidayRow[key]) {
                    item[key] = item.zhiBiao01;
                  }
                }
                for (let key in holidayRow) {
                  if ("二级" === holidayRow[key]) {
                    item[key] = item.zhiBiao02;
                  }
                }
                //空  则没有原因分析和基本对策
                // console.log("itemaaa", item);
                for (let key in holidayRow) {
                  if (
                    "一级" === holidayRow[key] &&
                    item.dianPu === "原因分析"
                  ) {
                    // console.log("thist", this.zuzhiValue);
                    //console.log("thist", this.selectedValue);
                    for (let index = 0; index < quDao.length; index++) {
                      // console.log(
                      //   "sdsadasd",
                      //   quDao[index].shopUuidS === this.zuzhiValue
                      // );
                      // console.log(
                      //   "sdsadasd2",
                      //   quDao[index].monthChgUuid === this.selectedValue2
                      // );
                      // console.log(
                      //   "sdsadasd3",
                      //   quDao[index].yearChgUuid === this.selectedValue
                      // );
                      if (
                        quDao[index].shopUuidS === this.zuzhiValue &&
                        quDao[index].monthChgUuid === this.selectedValue2 &&
                        quDao[index].yearChgUuid === this.selectedValue
                      ) {
                        //basicCountar
                        // console.log("selectedValue2", this.selectedValue2);
                        if (
                          quDao[index].basicCountar === "" ||
                          quDao[index].basicCountar === null
                        ) {
                          item[key] = quDao[index].causeAnal;
                        }
                      }
                    }
                    //item[key] = "23132";
                    if (item[key] === undefined) {
                      item[key] = "";
                    }
                  }
                }
                for (let key in holidayRow) {
                  if (
                    "一级" === holidayRow[key] &&
                    item.dianPu === "基本对策"
                  ) {
                    for (let index = 0; index < quDao.length; index++) {
                      if (
                        quDao[index].shopUuidS === this.zuzhiValue &&
                        quDao[index].monthChgUuid === this.selectedValue2 &&
                        quDao[index].yearChgUuid === this.selectedValue
                      ) {
                        //basicCountar
                        if (
                          quDao[index].causeAnal === "" ||
                          quDao[index].causeAnal === null
                        ) {
                          item[key] = quDao[index].basicCountar;
                        }
                        // console.log("quDao[index].basicCountar", quDao[index]);
                      }
                    }
                    //item[key] = "23132";
                    if (item[key] === undefined) {
                      item[key] = "";
                    }
                  }
                }
                // console.log("arra", this.headArr);
                // console.log("arra", holidayRow);
              });
            }
            //计算销售额(/天)
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "今年实际调整计划" &&
                  item.zhiBiao02 === "成交单数(单/天)" &&
                  item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  this.fman[indexX4] = {
                    yuef: holidayRow[key],
                    dianPu: item.dianPu,
                    itemKey: item[key]
                  };
                  console.log("fman", this.fman);
                  indexX4 = indexX4 + 1;
                }
              }
            });
            //计算客单(元)
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "今年实际调整计划" &&
                  item.zhiBiao02 === "客单(元)" &&
                  item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  this.gman[indexX5] = {
                    yuef: holidayRow[key],
                    dianPu: item.dianPu,
                    itemKey: item[key]
                  };
                  console.log("gman", this.gman);
                  indexX5 = indexX5 + 1;
                }
              }
              //两值之乘
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "今年实际调整计划" &&
                  item.zhiBiao02 === "销售额(万元/天)" &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  for (let index = 0; index < this.fman.length; index++) {
                    if (
                      this.fman[index].dianPu === item.dianPu &&
                      this.fman[index].yuef === holidayRow[key] &&
                      this.fman[index].itemKey !== undefined
                    ) {
                      for (
                        let index2 = 0;
                        index2 < this.gman.length;
                        index2++
                      ) {
                        console.log("ggman", index2);
                        console.log("ggman", this.gman[index2]);
                        if (
                          this.gman[index2].dianPu === item.dianPu &&
                          this.gman[index2].yuef === holidayRow[key] &&
                          this.gman[index2].itemKey !== undefined
                        ) {
                          item[key] =
                            (parseFloat(this.fman[index].itemKey) *
                              parseFloat(this.gman[index2].itemKey)) /
                            10000;
                          this.hman[indexX6] = {
                            yuef: holidayRow[key],
                            dianPu: item.dianPu,
                            itemKey:
                              (parseFloat(this.fman[index].itemKey) *
                                parseFloat(this.gman[index2].itemKey) *
                                30) /
                              10000
                          };
                          indexX6 = indexX6 + 1;
                        }
                      }
                    }
                  }
                }
              }
            });

            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "今年实际调整计划" &&
                  item.zhiBiao02 === "销售额(万元)" &&
                  // item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  for (let index = 0; index < this.hman.length; index++) {
                    if (
                      this.hman[index].dianPu === item.dianPu &&
                      this.hman[index].yuef === holidayRow[key] &&
                      this.hman[index].itemKey !== undefined
                    ) {
                      item[key] = this.hman[index].itemKey;
                    }
                  }
                }
              }
            });
            //计划完成率
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "今年计划" &&
                  item.zhiBiao02 === "销售额(万元)" &&
                  item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  this.bman[indexX] = {
                    yuef: holidayRow[key],
                    dianPu: item.dianPu,
                    itemKey: item[key]
                  };
                  indexX++;
                }
                //  console.log("arrr", this.bman);
              }
            });
            //计划完成率赋值
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "对比分析" &&
                  item.zhiBiao02 === "计划完成率" &&
                  // item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  for (let index = 0; index < this.bman.length; index++) {
                    if (
                      this.bman[index].dianPu === item.dianPu &&
                      this.bman[index].yuef === holidayRow[key] &&
                      this.bman[index].itemKey !== undefined
                    ) {
                      for (
                        let index2 = 0;
                        index2 < this.hman.length;
                        index2++
                      ) {
                        if (
                          this.hman[index2].dianPu === item.dianPu &&
                          this.hman[index2].yuef === holidayRow[key] &&
                          this.hman[index2].itemKey !== undefined
                        ) {
                          item[key] =
                            parseFloat(
                              this.hman[index2].itemKey /
                                this.bman[index].itemKey
                            ).toFixed(2) + "%";
                        }
                      }
                    }
                  }
                }
              }
            });
            //去年同比
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "去年实绩" &&
                  item.zhiBiao02 === "销售额(万元)" &&
                  item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  this.cman[indexX2] = {
                    yuef: holidayRow[key],
                    dianPu: item.dianPu,
                    itemKey: item[key]
                  };
                  indexX2 = indexX2 + 1;
                }
                console.log("arrr", this.cman);
              }
            });
            //去年同比赋值
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "对比分析" &&
                  item.zhiBiao02 === "去年同比" &&
                  // item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  for (let index = 0; index < this.cman.length; index++) {
                    if (
                      this.cman[index].dianPu === item.dianPu &&
                      this.cman[index].yuef === holidayRow[key] &&
                      this.cman[index].itemKey !== undefined
                    ) {
                      for (
                        let index2 = 0;
                        index2 < this.hman.length;
                        index2++
                      ) {
                        if (
                          this.hman[index2].dianPu === item.dianPu &&
                          this.hman[index2].yuef === holidayRow[key] &&
                          this.hman[index2].itemKey !== undefined
                        ) {
                          item[key] =
                            parseFloat(
                              this.hman[index2].itemKey /
                                this.cman[index].itemKey
                            ).toFixed(2) + "%";
                        }
                      }
                    }
                  }
                }
              }
            });
            //上月环比
            this.bodyData.forEach(item => {
              //  console.log("itemaa", item);
              for (let key in holidayRow) {
                if (
                  item.zhiBiao01 === "对比分析" &&
                  item.zhiBiao02 === "上月环比" &&
                  // item[key] !== undefined &&
                  holidayRow[key].indexOf("月") != -1
                ) {
                  for (let index = 0; index < this.hman.length; index++) {
                    if (
                      this.hman[index].dianPu === item.dianPu &&
                      this.hman[index].yuef === holidayRow[key] &&
                      this.hman[index].itemKey !== undefined
                    ) {
                      if (index != 0) {
                        item[key] =
                          parseFloat(
                            this.hman[index].itemKey /
                              this.hman[index - 1].itemKey
                          ).toFixed(2) + "%";
                      }
                    }
                  }
                }
              }
            });
            // this.bodyData.forEach(item => {
            //   //  console.log("itemaa", item);
            //   for (let key in holidayRow) {
            //     //   console.log(" item[key]", item[key]);
            //     if (
            //       item.zhiBiao01 === "今年实际调整计划" &&
            //       item.zhiBiao02 === "销售额(万元)" &&
            //       item[key] !== undefined &&
            //       holidayRow[key].indexOf("月") != -1
            //     ) {
            //       this.dman[indexX3] = {
            //         yuef: holidayRow[key],
            //         dianPu: item.dianPu,
            //         itemKey: item[key]
            //       };
            //       indexX3++;
            //       this.dman[indexX3] = 0;
            //     }
            //     // console.log("arrr", this.dman);
            //   }
            //   for (let key in holidayRow) {
            //     //    console.log(" item[key]", item[key]);
            //     if (
            //       item.zhiBiao01 === "今年实际调整计划" &&
            //       item.zhiBiao02 === "销售额(万元)" &&
            //       item[key] !== undefined &&
            //       holidayRow[key].indexOf("月") != -1
            //     ) {
            //       for (let index = 0; index < this.dman.length; index++) {
            //         if (
            //           this.dman[index].dianPu === item.dianPu &&
            //           this.dman[index].yuef === holidayRow[key]
            //         ) {
            //           if (index !== 0) {
            //             this.eman[index] = {
            //               yuef: this.dman[index].yuef,
            //               dianPu: this.dman[index].dianPu,
            //               itemKey: item[key] / this.dman[index - 1].itemKey
            //             };

            //             // this.eman[index].dianPu = this.dman[index].dianPu;
            //             // this.eman[index].yuef = this.dman[index].yuef;
            //             // this.eman[index].itemKey =
            //             //   item[key] / this.dman[index - 1].itemKey;
            //           }
            //           if (index === 0) {
            //             this.eman[index] = {
            //               yuef: null,
            //               dianPu: null,
            //               itemKey: null
            //             };
            //           }
            //         }
            //       }
            //       // this.bman[indexX] = {
            //       //   yuef: holidayRow[key],
            //       //   dianPu: item.dianPu,
            //       //   itemKey: item[key]
            //       // };
            //       indexX3++;
            //       this.dman[indexX3] = 0;
            //     }
            //     // console.log("adasda1", this.dman);
            //     // console.log("adasda2", this.eman);
            //   }
            // });

            // this.bodyData.forEach(item => {
            //   for (let key in holidayRow) {
            //     for (let index = 0; index < this.bman.length; index++) {
            //       //   console.log("bman", this.bman[index]);

            //       if (
            //         "计划完成率" === item.zhiBiao02 &&
            //         item.dianPu === this.bman[index].dianPu &&
            //         holidayRow[key] === this.bman[index].yuef
            //       ) {
            //         item[key] = parseFloat(this.bman[index].itemKey).toFixed(2);
            //       }
            //     }
            //   }
            //   //  console.log("cman", this.cman);
            //   for (let key in holidayRow) {
            //     for (let index = 0; index < this.cman.length; index++) {
            //       if (
            //         this.cman[index] !== 0 ||
            //         this.cman[index] !== undefined
            //       ) {
            //         //    console.log("aaabbb");
            //         if (
            //           "去年同比" === item.zhiBiao02 &&
            //           item.dianPu === this.cman[index].dianPu &&
            //           holidayRow[key] === this.cman[index].yuef
            //         ) {
            //           item[key] = parseFloat(this.cman[index].itemKey).toFixed(
            //             2
            //           );
            //         }
            //       }
            //     }
            //   }
            //   for (let key in holidayRow) {
            //     for (let index = 0; index < this.eman.length; index++) {
            //       if (
            //         "上月环比" === item.zhiBiao02 &&
            //         item.dianPu === this.eman[index].dianPu &&
            //         holidayRow[key] === this.eman[index].yuef
            //       ) {
            //         item[key] = parseFloat(this.eman[index].itemKey).toFixed(2);
            //       }
            //     }
            //   }
            // });

            //计算累计
            let num = 0;
            this.aman[num] = 0;
            this.bodyData.forEach(item => {
              //this.tableData[rowIndex];
              for (let index = 0; index < 12; index++) {
                let i = "key" + index;
                // console.log("itemkey", item[i]);
                if (item[i] !== undefined) {
                  this.aman[num] = this.aman[num] + parseFloat(item[i]);
                  //console.log("cascsa", this.aman);
                }
              }
              num++;
              this.aman[num] = 0;
            });
            let amn = 0;
            //累计赋值
            console.log("localStorage", localStorage);
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if ("累计平均" === holidayRow[key]) {
                  item[key] = parseFloat(this.aman[amn]).toFixed(2);
                  amn++;
                }
              }
            });
          });
        }
      }
    },

    getCellStyle() {
      let cellStyleArr = [];
      //console.log("aaass", this.min);
      for (let index = 0; index < 100; index++) {
        for (let index2 = 0; index2 < 100; index2++) {
          cellStyleArr.push({
            row: index,
            col: index2,
            renderer(wot, TD, row, col, prop, value) {
              //console.log("index", index2);
              //TD.style.height = "6px";
              //TD.style.colWidths = "200px";
              //col.style.colWidths = "200px";
              TD.innerHTML = value;
              TD.className = "htRight";
              TD.style.height = "25px";
              //console.log("aaa", 222);
              return TD.innerHTML;
            }
          });
        }
      }
      if (this.min) {
        //console.log("aa");
        this.bodyData.forEach((items, index) => {
          if (items.zhiBiao01 === "今年实际调整计划") {
            if (
              items.zhiBiao02 !== "销售额(万元/天)" &&
              items.zhiBiao02 !== "销售额(万元)"
            ) {
              for (let index2 = 0; index2 < 13 - this.nowMouth; index2++) {
                cellStyleArr.push({
                  row: index + 3,
                  col: this.nowMouth + index2 + 3,
                  renderer(wot, TD, row, col, prop, value) {
                    TD.style.background = "#e8f5fb";
                    TD.innerHTML = value;
                    TD.className = "htRight";
                    // TD.style.height = "25px";
                    return TD.innerHTML;
                  }
                });
              }
            }
            // cellStyleArr.push({
            //   row: index - 1,
            //   col: 12,
            //   renderer(wot, TD, row, col, prop, value) {
            //     TD.style.background = "#f7f7f7";
            //     TD.innerHTML = value;
            //     //TD.style.height = "30px";
            //     return TD.innerHTML;
            //   }
            // });
          }
        });
      }
      //行头

      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 100; colIndex++) {
          cellStyleArr.push({
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#2498d1";
              TD.innerHTML = value;
              TD.style.height = "25px";
              return TD.innerHTML;
            }
          });
        }
      }
      //列头
      console.log("11", this.lenDianPu + 3);
      for (let rowIndex = 3; rowIndex < this.lenDianPu + 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 3; colIndex++) {
          cellStyleArr.push({
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#f7f7f7";
              TD.innerHTML = value;
              TD.style.height = "25px";
              return TD.innerHTML;
            }
          });
        }
      }
      //原因分析样式

      if (this.min) {
        cellStyleArr.push({
          row: this.index1 + 3,
          col: 0,
          renderer(wot, TD, row, col, prop, value) {
            TD.style.background = "#f7f7f7";
            TD.innerHTML = value;
            TD.style.height = "125px";
            return TD.innerHTML;
          }
        });
        cellStyleArr.push({
          row: this.index1 + 3,
          col: 1,
          renderer(wot, TD, row, col, prop, value) {
            TD.style.background = "#e8f5fb";
            TD.innerHTML = value;
            TD.className = "htLeft";
            TD.style.height = "125px";
            return TD.innerHTML;
          }
        });
        //基本对策样式
        cellStyleArr.push({
          row: this.index2 + 3,
          col: 0,
          renderer(wot, TD, row, col, prop, value) {
            TD.style.background = "#f7f7f7";
            TD.innerHTML = value;
            TD.className = "htLeft";
            TD.style.height = "125px";
            return TD.innerHTML;
          }
        });
        cellStyleArr.push({
          row: this.index2 + 3,
          col: 1,
          renderer(wot, TD, row, col, prop, value) {
            TD.style.background = "#e8f5fb";
            TD.innerHTML = value;
            TD.className = "htLeft";
            TD.style.height = "125px";
            return TD.innerHTML;
          }
        });
      }
      // cellStyleArr.push({
      //   row: this.index1 + 3,
      //   col: 3,
      //   renderer(wot, TD, row, col, prop, value) {
      //     TD.style.background = "#f7f7f7";
      //     TD.innerHTML = value;
      //     TD.style.height = "30px";
      //     return TD.innerHTML;
      //   }
      // });
      // cellStyleArr.push({
      //   row: this.index2 + 3,
      //   col: 0,
      //   renderer(wot, TD, row, col, prop, value) {
      //     TD.style.background = "#f7f7f7";
      //     TD.innerHTML = value;
      //     TD.style.height = "30px";
      //     return TD.innerHTML;
      //   }
      // });
      return cellStyleArr;
    },
    //店铺
    async getBusinessObjectData() {
      // if (this.min === true) {
      //   if (this.selectClass === 0 || this.selectClass === "") {
      //     return DsUtils.get(
      //       `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?query=yearUuid='${this.selectedValue}' and  orgUuid = '${this.zuzhiValue}'&limit=100000&offset=0`
      //     ).then(
      //       // `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
      //       res => res.data.list
      //     );
      //   } else {
      //     return DsUtils.get(
      //       `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?query=prodClassUuid='${this.selectClass}' and yearUuid='${this.selectedValue}' and orgUuid = '${this.zuzhiValue}'&limit=100000&offset=0`
      //     ).then(
      //       // `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
      //       res => res.data.list
      //     );
      //   }
      // } else {
      // if (
      //   this.$route.query.hasOwnProperty("isGy") &
      //   ("1" === this.$route.query.isGy)
      // ) {
      console.log("asdsdaasadassd", this.zuzhiValue);
      if (this.selectClass === 0 || this.selectClass === "") {
        return DsUtils.get(
          `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?query=yearUuid='${this.selectedValue}' &limit=1000000&offset=0`
        ).then(
          // `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
          res => res.data.list
        );
      } else {
        return DsUtils.get(
          `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?query=prodClassUuid='${this.selectClass}'  and yearUuid='${this.selectedValue}'&limit=1000000&offset=0`
        ).then(
          // `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
          res => res.data.list
        );
        //  }
      }
      // }
    },
    //渠道
    async getBusinessObjectData2() {
      return DsUtils.get(
        `http://192.168.2.218:8180/businessobject/v2/tbCChannelSadjustAnal?&limit=1000&offset=0`
      ).then(
        // `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
        res => res.data.list
      );
    },
    async setDataModeValue(rowIndex, key, newValue, oldValue) {
      if (rowIndex >= this.index1 + 3) {
        // console.log("change", rowIndex);
        // console.log("change", key);
        this.resData2 = await this.getBusinessObjectData2();

        // console.log("change2132132", rowData2);
        // console.log("change", rowIndex);
        //  console.log("change213131232", this.tableData[rowIndex]);
        //   console.log("logaaa阿1", this.resData2);
        let rowData = this.tableData[rowIndex]; //被修改的那一行的数据
        let targetRowInResData1 = this.resData2.find(row => {
          let dianPu = row.shopUuidS;
          let yueFen = row.monthChgUuid;
          let nanFen = row.yearChgUuid;
          //   console.log("aaa", dianPu === this.zuzhiValue);
          return (
            dianPu === this.zuzhiValue &&
            yueFen === this.selectedValue2 &&
            nanFen === this.selectedValue &&
            row.causeAnal !== null
            // &&
            // holiday === this.usefulData.holidayMap[key]
          );
        });

        let targetRowInResData2 = this.resData2.find(row => {
          let dianPu = row.shopUuidS;
          let yueFen = row.monthChgUuid;
          let nanFen = row.yearChgUuid;
          //    console.log("aaa", dianPu === this.zuzhiValue);
          return (
            dianPu === this.zuzhiValue &&
            yueFen === this.selectedValue2 &&
            nanFen === this.selectedValue &&
            row.basicCountar !== null
            // &&
            // holiday === this.usefulData.holidayMap[key]
          );
        });

        // console.log("targetRowInResData", targetRowInResData2);
        if (
          targetRowInResData1 &&
          targetRowInResData1.causeAnal !== null &&
          rowData.dianPu == "原因分析"
        ) {
          this.aman = 1;
          console.log("123", "来了");
          targetRowInResData1.causeAnal = newValue;
          //    console.log("123", targetRowInResData1.causeAnal);
        } else if (
          targetRowInResData2 &&
          targetRowInResData2.basicCountar !== null &&
          rowData.dianPu == "基本对策"
        ) {
          this.aman = 1;
          console.log("456", "来");
          targetRowInResData2.basicCountar = newValue;
          //  console.log("logaaa", targetRowInResData);
        } else {
          console.log("789", "来");
          //  console.log("logaaa", targetRowInResData);
          //没找到说明需要insert数据
          //  console.log("key", this.usefulData.insertDataArr);
          console.log("key", 111);
          if (this.usefulData.insertDataArr) {
            let targetItem = this.usefulData.insertDataArr.find(
              item => item.rowIndex === rowIndex && item.key === key
            );
            //  console.log("key", targetItem);
            if (targetItem) {
              targetItem.value = newValue;
            } else {
              this.usefulData.insertDataArr.push({
                rowIndex,
                key,
                value: newValue
              });
            }
          } else {
            this.usefulData.insertDataArr = [];
            this.usefulData.insertDataArr.push({
              rowIndex,
              key,
              value: newValue
            });
          }
        }
      } else {
        // console.log("change", rowIndex);
        // console.log("change", key);
        // console.log("change", newValue);
        // console.log("change", rowIndex);
        // console.log("change", newValue);
        let rowData = this.tableData[rowIndex]; //被修改的那一行的数据
        //console.log("rowDataaaa", rowData);
        let targetRowInResData = this.resData.find(row => {
          let dianPu = row.shopUuidS;
          let category = row.index1Uuid;
          let childCategory = row.index2Uuid;
          let yueFen = row.monthUuid;
          return (
            category === rowData.zhiBiao01ObjectId &&
            childCategory === rowData.zhiBiao02ObjectId &&
            dianPu === rowData.dianPuObjectId &&
            yueFen === this.usefulData.holidayMap[key]
            // &&
            // holiday === this.usefulData.holidayMap[key]
          );
        });

        if (targetRowInResData) {
          targetRowInResData.ammout = newValue;
          //   console.log("logaaa", targetRowInResData);
        } else {
          //没找到说明需要insert数据
          //  console.log("key", item.key);
          if (this.usefulData.insertDataArr) {
            let targetItem = this.usefulData.insertDataArr.find(
              item => item.rowIndex === rowIndex && item.key === key
            );
            if (targetItem) {
              targetItem.value = newValue;
            } else {
              this.usefulData.insertDataArr.push({
                rowIndex,
                key,
                value: newValue
              });
            }
          } else {
            this.usefulData.insertDataArr = [];
            this.usefulData.insertDataArr.push({
              rowIndex,
              key,
              value: newValue
            });
          }
        }
      }
    },
    //选项卡
    async setTabName() {
      let key = 1;

      let prodClassArr;
      return Promise.all([
        DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasProdClass`)
      ]).then(([prodClassRes]) => {
        //console.log(prodClassRes);
        prodClassArr = prodClassRes.data.items;
        this.panes.push({
          title: "总计",
          content: "总计",
          uuid: "",
          key: 0 //id: "ynHandsontable"
        });
        prodClassArr.forEach(prodClassItem => {
          this.panes.push({
            title: prodClassItem.name,
            content: prodClassItem.name,
            uuid: prodClassItem.objectId,
            key //id: "ynHandsontable"
          });
          key++;
          console.log("sadads", this.panes);
        });
      });
    },
    async afterTabClick(key) {
      this.aman = [];
      this.bman = [];
      this.cman = [];
      this.dman = [];
      this.eman = [];
      this.fman = [];
      this.gman = [];
      this.hman = [];
      let object = this.panes.find(panesItem => key === panesItem.key); //console.log(object);
      this.selectClass = object.uuid;
      await this.updateTable();
    },
    async updateTable() {
      this.table.destroy();
      await this.getHeaderData();
      await this.getBodyData();
      //console.log("date", dateString);
      this.resData = await this.getBusinessObjectData();
      let that = this;
      this.tableData = [...this.headerData, ...this.bodyData];
      const container = this.$refs.ynHandsontable;
      const tableWrapper = this.$refs.tableWrapper;
      this.table = new YnHandsontable(container, {
        data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
        autoColumnSize: true,
        //   colWidths: 100,
        colHeaders: true,
        //fixedColumnsLeft: 4,
        // fixedRowsTop: 3,
        minCols: 10,
        //行虚拟化
        renderAllRows: true,
        //rowHeights: "6px",
        minRows: 10,
        cell: that.getCellStyle(),
        className: "htCenter htMiddle",
        afterChange(changes) {
          changes &&
            changes.forEach(([rowIndex, key, oldValue, newValue]) => {
              if (oldValue === undefined) {
                oldValue = "";
              }
              //console.log("rowaaa", key.includes("key"));
              if (rowIndex > 0 && oldValue !== newValue && that.min === true) {
                that.setDataModeValue(rowIndex, key, newValue);
              }
              if (
                rowIndex > 2 &&
                key.includes("key") &&
                oldValue !== newValue &&
                that.min === true
              ) {
                that.setDataModeValue(rowIndex, key, newValue);
              }
            });
        },
        mergeCells: [
          //头部合并单元格
          ...this.headerMergeCells,
          //body合并单元格
          ...this.bodyMergeCells
        ]
      });
      this.allData = this.table.getData();
    },
    getSelectOptions() {
      let url = `http://192.168.2.218:8180/metadata/apiBasCY/selectDisplayData`;
      DsUtils.post(url, {
        originalFieldCode: "fndDef001",
        limit: 20,
        fields: "name"
      }).then(res => {
        this.selectOptions = res.data.items.map(item => ({
          label: item.name,
          value: item.objectId
        }));
      });
    },
    async onChange(date, dateString) {
      this.aman = [];
      this.bman = [];
      this.cman = [];
      this.dman = [];
      this.eman = [];
      this.fman = [];
      this.gman = [];
      this.hman = [];
      console.log("dataaa", this.selectedValue);
      //window.close();
      this.table.destroy();
      let a = dateString.split("-");
      let c = a[1];
      this.nowMouth = parseInt(a[1]);
      this.nowYear = a[0];

      for (let index = 0; index < this.yearAll.length; index++) {
        if (this.nowYear === this.yearAll[index].name) {
          this.selectedValue = this.yearAll[index].objectId;
          console.log("dataaa", this.selectedValue);
        }
        console.log("yearaa", this.selectedValue);
      }

      for (let index = 0; index < this.mouthAll.length; index++) {
        if (this.nowMouth + "月" === this.mouthAll[index].name) {
          this.selectedValue2 = this.mouthAll[index].objectId;
        }
      }
      // console.log("aaa", this.nowMouth);
      // console.log("aaa", (this.nowYear = a[0]));
      await this.getHeaderData();
      console.log("dataaa", this.selectedValue);
      await this.getBodyData();
      //console.log("date", dateString);
      this.resData = await this.getBusinessObjectData();
      let that = this;
      this.tableData = [...this.headerData, ...this.bodyData];
      const container = this.$refs.ynHandsontable;
      const tableWrapper = this.$refs.tableWrapper;
      this.table = new YnHandsontable(container, {
        data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
        autoColumnSize: true,
        //   colWidths: 100,
        colHeaders: true,
        //fixedColumnsLeft: 4,
        // fixedRowsTop: 3,
        minCols: 10,
        //行虚拟化
        renderAllRows: true,
        //rowHeights: "6px",
        minRows: 10,
        cell: that.getCellStyle(),
        className: "htCenter htMiddle",
        afterChange(changes) {
          changes &&
            changes.forEach(([rowIndex, key, oldValue, newValue]) => {
              if (oldValue === undefined) {
                oldValue = "";
              }
              //console.log("rowaaa", key.includes("key"));
              if (rowIndex > 0 && oldValue !== newValue && that.min === true) {
                that.setDataModeValue(rowIndex, key, newValue);
              }
              if (
                rowIndex > 2 &&
                key.includes("key") &&
                oldValue !== newValue &&
                that.min === true
              ) {
                that.setDataModeValue(rowIndex, key, newValue);
              }
            });
        },
        mergeCells: [
          //头部合并单元格
          ...this.headerMergeCells,
          //body合并单元格
          ...this.bodyMergeCells
        ]
      });
      this.allData = this.table.getData();
    },
    async onSelectChange(value) {
      this.selectedValue = value;
      this.resData = await this.getBusinessObjectData();
      await this.getBodyData();
      this.tableData = [...this.headerData, ...this.bodyData];
      this.table.updateSettings({
        data: this.tableData,
        cell: this.getCellStyle()
      });
    },

    async onSaveClick() {
      let promiseArr = [];
      let promiseArr2 = [];
      //已有值update
      let url = `http://192.168.2.218:8180/businessobject/v2/${this.apiName}/batchUpdateBoDataById`;
      let params = this.resData.map(row => {
        //console.log("rowww", row);
        let { objectId, ammout } = row;
        return {
          objectId,
          ammout
        };
      });
      //let c = await this.getBusinessObjectData2();
      let b = true;

      for (let index = 0; index < this.resData2.length; index++) {
        if (
          this.resData2[index].causeAnal === null &&
          this.resData2[index].basicCountar === null
        ) {
          b = false;
        }
      }

      promiseArr.push(DsUtils.patch(url, params));
      // this.resData = await this.getBusinessObjectData();

      if (b) {
        let url2 = `http://192.168.2.218:8180/businessobject/v2/tbCChannelSadjustAnal/batchUpdateBoDataById`;
        //this.resData2 = await this.getBusinessObjectData2();
        let params2 = this.resData2.map(row => {
          let { objectId, causeAnal, basicCountar } = row;
          if (row.causeAnal !== null) {
            // console.log("bbaaavv");
            return {
              objectId,
              causeAnal
            };
          }
          if (row.basicCountar !== null) {
            //  console.log("aaavv");
            return {
              objectId,
              basicCountar
            };
          }
        });

        promiseArr2.push(DsUtils.patch(url2, params2));
      }
      //console.log("有值", this.resData);

      //
      //
      //
      //
      //
      //
      //
      //
      //
      // this.resData2 = await this.getBusinessObjectData2();
      // console.log("rowaa", promiseArr);
      //插入值
      let postBody = [];
      let postBody2 = [];
      //console.log("this.usefulData", this.usefulData.insertDataArr);
      if (
        this.usefulData.insertDataArr &&
        this.usefulData.insertDataArr.length > 0
      ) {
        this.usefulData.insertDataArr.forEach(({ rowIndex, key, value }) => {
          //console.log("rowaa", promiseArr);
          // console.log("value", value);

          if (rowIndex >= this.index1 + 3) {
            if (value !== null) {
              // console.log("conaaa", this.index1 + 3);
              console.log("conaaa", this.tableData[rowIndex] - 1);
              let rowData = this.tableData[rowIndex];
              let {
                zhiBiao02ObjectId,
                zhiBiao01ObjectId,
                dianPuObjectId,
                dianPu,
                category,
                nianFen,
                childCategory
              } = rowData;
              let zhongLei = this.selectClass;
              let yueFen = this.selectedValue2;
              let nanFen = this.selectedValue;
              let zuzh = this.zuzhiValue;

              //  console.log("this.usefulData", this.usefulData);
              // let categoryItem = this.usefulData.zhiBiao01Arr.find(
              //   item => zhiBiao01ObjectId === item.objectId
              // );
              // let childCategoryItem = this.usefulData.zhiBiao02Arr.find(
              //   item => item.objectId === zhiBiao02ObjectId
              // );
              //月份
              // let holidayItem = this.usefulData.holidayArr.find(
              //   item => item.name === yueFen
              // );
              // let dianPuUUid = this.usefulData.dianPuArr.find(
              //   item => item.objectId === dianPuObjectId
              // );
              //let dianPuUUid = "11ed388b3c3db5f5958c0b96a7674550";
              let dianPuUUid = this.zuzhiValue;
              // let seasonItem = this.usefulData.seasonArr.find(
              //   item => item.objectId === holidayItem.fjdDef001
              // );
              // fnDef001;
              //console.log("categoryItem", postBody2);

              if (rowData.dianPu === "基本对策") {
                console.log("来喽");
                postBody2.push({
                  basicCountar: value,
                  yearChgUuid: nanFen,
                  monthChgUuid: yueFen,
                  // index1Uuid: categoryItem.objectId,
                  // index2Uuid: childCategoryItem.objectId,
                  shopUuidS: dianPuUUid
                  // orgUuid: zuzh
                  // fnDef001: this.selectedValue, //年份
                  // flbDef001: categoryItem.objectId,
                  // fzlDef001: childCategoryItem.objectId,
                  // fjrDef001: holidayItem.objectId,
                  // fjdDef001: seasonItem.objectId,
                  // fzDef001: value
                });
              }

              if (rowData.dianPu === "原因分析") {
                console.log("来了");
                postBody2.push({
                  causeAnal: value,
                  yearChgUuid: nanFen,
                  monthChgUuid: yueFen,
                  // index1Uuid: categoryItem.objectId,
                  // index2Uuid: childCategoryItem.objectId,
                  shopUuidS: dianPuUUid
                });
              }
              console.log("postbody", postBody2);
            }
          } else {
            if (value !== null) {
              //console.log("conaaa", this.tableData[rowIndex]);
              let rowData = this.tableData[rowIndex];
              let {
                zhiBiao02ObjectId,
                zhiBiao01ObjectId,
                dianPuObjectId,
                dianPu,
                category,
                nianFen,
                childCategory
              } = rowData;
              let yueFen = this.usefulData.holidayMap[key];
              let nanFen = this.selectedValue;
              //  console.log("zuzhiObj", this.zhuzhiObj);
              let zuzh = this.zhuzhiObj;
              let zhongLei = this.selectClass;
              //let zuzh = "11ed358ebe74d7ef958cbdc34c9669ce"; //  console.log("this.usefulData", this.usefulData);
              let categoryItem = this.usefulData.zhiBiao01Arr.find(
                item => zhiBiao01ObjectId === item.objectId
              );
              let childCategoryItem = this.usefulData.zhiBiao02Arr.find(
                item => item.objectId === zhiBiao02ObjectId
              );
              let holidayItem = this.usefulData.holidayArr.find(
                item => item.name === yueFen
              );
              let dianPuUUid = this.usefulData.dianPuArr.find(
                item => item.objectId === dianPuObjectId
              );
              // let seasonItem = this.usefulData.seasonArr.find(
              //   item => item.objectId === holidayItem.fjdDef001
              // );
              // fnDef001;
              console.log("categoryItem", dianPuUUid);
              if (
                rowData.dianPu !== "原因分析" &&
                rowData.dianPu !== "基本对策"
              ) {
                console.log("来了", zuzh);
                postBody.push({
                  ammout: value,
                  yearUuid: nanFen,
                  monthUuid: yueFen,
                  index1Uuid: categoryItem.objectId,
                  index2Uuid: childCategoryItem.objectId,
                  shopUuidS: dianPuUUid.objectId,
                  orgUuid: zuzh,
                  prodClassUuid: zhongLei
                  // fnDef001: this.selectedValue, //年份
                  // flbDef001: categoryItem.objectId,
                  // fzlDef001: childCategoryItem.objectId,
                  // fjrDef001: holidayItem.objectId,
                  // fjdDef001: seasonItem.objectId,
                  // fzDef001: value
                });
              }
              console.log("postbody", postBody);
            }
          }
        });
      }
      //   console.log("111", postBody);
      promiseArr.push(
        DsUtils.post(
          `http://192.168.2.218:8180/businessobject/v2/${this.apiName}/batchInsertBoData`,
          postBody
        )
      );
      //
      //
      //
      console.log("post", postBody2);
      promiseArr2.push(
        DsUtils.post(
          `http://192.168.2.218:8180/businessobject/v2/tbCChannelSadjustAnal/batchInsertBoData`,
          postBody2
        )
      );
      Promise.all(promiseArr).then(() => {
        UiUtils.successMessage("保存成功");
      });
      this.resData2 = await this.getBusinessObjectData2();
      this.usefulData = [];
    },
    async excle() {
      this.allData.forEach(item1 => {
        if (item1[0] != null) {
          if (item1[0] !== null && item1[0].includes(">")) {
            let acb = item1[0].split(">");
            if (acb != null && item1[0].includes("<")) {
              let abc = acb[1].split("<");
              item1[0] = abc[0];
            }
          }
        }
      });
      let wb = XLSX.utils.book_new();
      let headers = {};
      //console.log("headda", headers);
      //headers = { ...this.allData[0] };
      // headers = this.allData[0];
      // console.log("headda", headers);
      this.msgList.unshift(headers);

      // console.log("all", this.allData);
      //this.msgList[0] = this.allData[11];

      for (let index = 0; index < this.allData.length; index++) {
        for (let index2 = 0; index2 < this.allData[index].length; index2++) {
          if (this.allData[index][index2] === null)
            this.allData[index][index2] = "";
        }
      }

      for (let index = 0; index < this.allData.length; index++) {
        this.msgList[index] = { ...this.allData[index] };
      }

      let contentWs = XLSX.utils.json_to_sheet(this.msgList, {
        header: [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15"
        ],
        skipHeader: true,
        origin: "A2"
      });

      // 单独设置某个单元格内容
      let style1 = {
        alignment: {
          horizontal: "center",
          vertical: "center"
        },
        fill: {
          fgColor: { rgb: "2498d1" }
          //bgColor:
        },
        border: {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        }
      };
      let style2 = {
        border: {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" }
        },
        alignment: {
          horizontal: "center",
          vertical: "center"
        },
        fill: {
          fgColor: { rgb: "f7f7f7" }
        }
      };

      // {
      //   contentWs["A2"].s = style1;
      //   contentWs["B2"].s = style1;
      //   contentWs["C2"].s = style1;
      //   contentWs["D2"].s = style1;
      //   contentWs["E2"].s = style1;
      //   contentWs["F2"].s = style1;
      //   contentWs["G2"].s = style1;
      //   contentWs["H2"].s = style1;
      //   contentWs["I2"].s = style1;
      //   contentWs["J2"].s = style1;
      //   contentWs["K2"].s = style1;
      //   contentWs["L2"].s = style1;
      //   contentWs["M2"].s = style1;
      //   contentWs["N2"].s = style1;
      //   contentWs["O2"].s = style1;
      //   contentWs["P2"].s = style1;
      //   contentWs["Q2"].s = style1;
      //   contentWs["R2"].s = style1;
      //   contentWs["S2"].s = style1;
      //   contentWs["C3"].s = style1;
      //   contentWs["D3"].s = style1;
      //   contentWs["E3"].s = style1;
      //   contentWs["F3"].s = style1;
      //   contentWs["G3"].s = style1;
      //   contentWs["H3"].s = style1;
      //   contentWs["I3"].s = style1;
      //   contentWs["J3"].s = style1;
      //   contentWs["K3"].s = style1;
      //   contentWs["L3"].s = style1;
      //   contentWs["M3"].s = style1;
      //   contentWs["N3"].s = style1;
      //   contentWs["O3"].s = style1;
      //   contentWs["P3"].s = style1;
      //   contentWs["Q3"].s = style1;
      //   contentWs["R3"].s = style1;
      //   contentWs["S3"].s = style1;
      //   contentWs["A4"].s = style2;
      //   contentWs["A5"].s = style2;
      //   contentWs["A6"].s = style2;
      //   contentWs["A7"].s = style2;
      //   contentWs["A8"].s = style2;
      //   contentWs["A9"].s = style2;
      //   contentWs["A10"].s = style2;
      //   contentWs["A11"].s = style2;
      //   contentWs["A12"].s = style2;
      //   contentWs["A13"].s = style2;
      //   contentWs["A14"].s = style2;
      //   contentWs["A15"].s = style2;
      //   contentWs["A16"].s = style2;
      //   contentWs["A17"].s = style2;
      //   contentWs["A18"].s = style2;
      //   contentWs["A19"].s = style2;
      //   contentWs["A20"].s = style2;
      //   contentWs["A21"].s = style2;
      //   contentWs["A22"].s = style2;
      //   contentWs["A23"].s = style2;
      //   contentWs["A24"].s = style2;
      //   contentWs["A25"].s = style2;
      //   contentWs["A25"].s = style2;
      //   contentWs["A27"].s = style2;
      //   contentWs["A28"].s = style2;
      //   contentWs["A29"].s = style2;
      //   contentWs["A30"].s = style2;
      //   contentWs["B4"].s = style2;
      //   contentWs["B5"].s = style2;
      //   contentWs["B6"].s = style2;
      //   contentWs["B7"].s = style2;
      //   contentWs["B8"].s = style2;
      //   contentWs["B9"].s = style2;
      //   contentWs["B10"].s = style2;
      //   contentWs["B11"].s = style2;
      //   contentWs["B12"].s = style2;
      //   contentWs["B13"].s = style2;
      //   contentWs["B14"].s = style2;
      //   contentWs["B15"].s = style2;
      //   contentWs["B16"].s = style2;
      //   contentWs["B17"].s = style2;
      //   contentWs["B18"].s = style2;
      //   contentWs["B19"].s = style2;
      //   contentWs["B20"].s = style2;
      //   contentWs["B21"].s = style2;
      //   contentWs["B22"].s = style2;
      //   contentWs["B23"].s = style2;
      //   contentWs["B24"].s = style2;
      //   contentWs["B25"].s = style2;
      //   contentWs["B26"].s = style2;
      //   //contentWs["B26"].s = style1;
      //   contentWs["B27"].s = style2;
      //   contentWs["B28"].s = style2;
      //   contentWs["B29"].s = style2;
      //   contentWs["B30"].s = style2;
      // }

      // 设置单元格自动换行,目前仅对非合并单元格生效
      // contentWs["A3"].s = {
      //   alignment: {
      //     wrapText: true, // 设置单元格换行
      //     indent: 1 // 设置单元格缩进
      //   }
      // };
      //contentWs["!merges"] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }];
      contentWs["!merges"] = [
        {
          s: { c: 0, r: 1 },
          e: { c: 0, r: 2 }
        },
        {
          s: { c: 1, r: 1 },
          e: { c: 1, r: 2 }
        },
        {
          s: { c: 0, r: 1 },
          e: { c: 1, r: 1 }
        },
        {
          s: { c: 3, r: 1 },
          e: { c: 6, r: 1 }
        },
        {
          s: { c: 7, r: 1 },
          e: { c: 10, r: 1 }
        },
        {
          s: { c: 11, r: 1 },
          e: { c: 14, r: 1 }
        },
        {
          s: { c: 15, r: 1 },
          e: { c: 18, r: 1 }
        },
        {
          s: { c: 0, r: 3 },
          e: { c: 0, r: 11 }
        },
        {
          s: { c: 0, r: 12 },
          e: { c: 0, r: 20 }
        },
        {
          s: { c: 0, r: 21 },
          e: { c: 0, r: 29 }
        },
        {
          s: { c: 0, r: 30 },
          e: { c: 0, r: 38 }
        }
      ];
      //contentWs["!cols"] = [{ wch: 20 }, { wch: 20 }, { wch: 20 }];
      XLSX.utils.book_append_sheet(wb, contentWs, "数据详情");
      // 使用xlsx-style写入文件方式,使得自定义样式生效
      const tmpDown = new Blob([
        utilSSS.methods.s2ab(
          XLSXS.write(wb, {
            bookType: "xlsx",
            bookSST: true,
            type: "binary",
            cellStyles: true
          })
        )
      ]);
      utilSSS.methods.downExcel(tmpDown, "列表详细.xlsx");
    }
  },

  async connectedCallback() {
    //获取下拉组件数据
    if (this.$route.query.nianfen !== undefined) {
      this.selectedValue = this.$route.query.nianfen;
    }
    this.getSelectOptions();
    this.setTabName();
    const templateTableData = [
      ["", "Tesla", "Volvo", "Toyota", "Ford"],
      ["2019", 10, 11, 12, 13],
      ["2020", 20, 11, 14, 13],
      ["2021", 30, 15, 12, 13]
    ];

    //运行态中并不会去从数据库中取数据，所以dataModel为null，但是还希望展示出样例多维表，所以显示templateTableData
    // if (!this.isRunTime) {
    //   this.tableData = templateTableData;
    // } else {
    this.resData = await this.getBusinessObjectData();
    await this.getHeaderData();
    await this.getBodyData();
    this.tableData = [...this.headerData, ...this.bodyData];
    //}

    //}
    //this.tableData = [...this.headerData];
    let that = this;

    //解决多维表触发change事件后，宽度缩窄的问题
    const container = this.$refs.ynHandsontable;
    const tableWrapper = this.$refs.tableWrapper;
    let colWidths =
      tableWrapper.clientWidth / Object.keys(this.tableData[0]).length;
    //利用handsontable生成多维表
    this.table = new YnHandsontable(container, {
      data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
      autoColumnSize: true,
      //   colWidths: 100,
      colHeaders: true,
      //fixedColumnsLeft: 4,
      //fixedRowsTop: 3,
      minCols: 10,
      //行虚拟化
      renderAllRows: true,
      //rowHeights: "6px",
      minRows: 10,
      cell: that.getCellStyle(),
      className: "htCenter htMiddle",
      afterChange(changes) {
        changes &&
          changes.forEach(([rowIndex, key, oldValue, newValue]) => {
            if (oldValue === undefined) {
              oldValue = "";
            }
            //console.log("rowaaa", key.includes("key"));
            if (rowIndex > 0 && oldValue !== newValue && that.min === true) {
              that.setDataModeValue(rowIndex, key, newValue);
            }
            if (
              rowIndex > 2 &&
              key.includes("key") &&
              oldValue !== newValue &&
              that.min === true
            ) {
              that.setDataModeValue(rowIndex, key, newValue);
            }
          });
      },

      mergeCells: [
        //头部合并单元格
        ...this.headerMergeCells,
        //body合并单元格
        ...this.bodyMergeCells
      ]
    });
    console.log("tableaa", this.table);
    //alert("aa");
    this.allData = this.table.getData();
    //解决生成的多维表的高度问题
    this.$refs.tableWrapper.style.height =
      document.querySelector(".wtHider").offsetHeight + "px";
  },

  renderedCallback() {}
};
