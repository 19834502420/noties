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
import FileSaver from "file-saver";
//import util from "src/custom/components/yn-handsontable/utilSSS.js";
import { disConnect } from "echarts";
import { COMMON_PROPERTIES } from "yn-p1/libs/utils/ComponentUtils";
import { F, S } from "core-js/modules/_export";
import utilSSS from "./utilSSS";
import { sheets } from "less";
//import { HyperFormula } from "hyperformula";

const apiNameMap = {
  tpBoYtndtdef001: {
    name: "销售表",
    fields: [
      {
        code: "fnDef001",
        fieldTitle: "年",
        masterDataName: "masterDataObject018"
      }
    ]
  }
};
export default {
  // mounted: function() {
  //   const s = document.createElement("script");
  //   s.type = "text/javascript";
  //   s.src = "src/custom/components/yn-handsontable/utilSSS.js";
  //   //console.log("sssss", s);
  //   document.body.appendChild(s);
  // },
  mixins: [basicOptions],
  components: {},
  computed: {},
  data() {
    return {
      msgList: [],
      getCellStyleall: [],
      container: null,
      allData: null,
      headerData: null,
      tableNum: [],
      bodyData: null,
      tableData: null,
      resData: null,
      body: [],
      butt: "",
      yearChange: 2022,
      yearData: [],
      selectOptions: null,
      selectOptionsQy: null,
      selectedValue: "11ed1de2fc533803be84f17e754d8924",
      selectedValueQy: "11ed2353525d578abe843d5907e0a6b6",
      TOKEN: null,
      timeDelta: null,
      selectedValueQy3: null,
      headerMergeCells: [],
      bodyMergeCells: [],
      usefulData: {} //在展示数据的时候可以在初始化数据的位置上向对象添加数据
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
    //获取表头数据
    getHeaderData() {
      //this.mounted();
      //表头数据
      switch (this.apiName) {
        case "tpBoYtndtdef001": {
          let yearArr; //季度
          let sonKoJianArr; //节日

          return Promise.all([
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCY`)
            // DsUtils.get(
            //   `http://192.168.2.218:8180/businessobject/v2/tpBoZqydef001`
            // )
          ]).then(([year]) => {
            // eslint-disable-next-line no-console

            yearArr = year.data.items;
            this.yearData = year.data.items;
            this.usefulData.yearArr = yearArr;
            // sonKoJianArr = sonKoJian.data.list;
            // this.usefulData.sonKoJianArr = sonKoJianArr;

            let headerDataItem = {
              category: "区域",
              childCategory: "业态",
              xuhao: ""
            };
            let headerDataItem2 = {
              category: "区域",
              childCategory: "业态",
              xuhao: "序号"
            };

            this.headerData = [
              { ...headerDataItem },
              { ...headerDataItem2 }
              //{ ...headerDataItem }
            ];
            //第一行的单元格数量计算
            let num = 0;
            //一个年份对应多少个字段
            let num2 = 4;
            //let num3 = 0;
            //let num4 = sonKoJianArr[0].fzdDef001;
            let num3 = parseInt(this.yearChange) - 2016;

            if (num3 > 7) {
              num3 = 7;
            }
            if (num3 < 2) {
              num3 = 2;
            }

            this.headerData.forEach((item, index) => {
              for (let j = num3 - 2; j < num3 + 2; j++) {
                for (let i = 0; i < 4; i++) {
                  //let son = sonKoJianArr[i];
                  let c = num * num2;
                  if (index === 0) {
                    //表头第一行
                    for (let s = 0; s < num2; s++) {
                      // this.yearData.push({
                      //   yearData:yearArr[j].nam
                      // })

                      item["key" + (s + c)] = yearArr[j].name;
                    }
                  } else if (index === 1) {
                    for (let s = 0; s < num2; s++) {
                      //item["key" + s * num2] = sonKoJianArr[i].name;
                      item["key" + s * num2] = "店数";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + s * num2] = "店数";
                      // sonKoJianArr[i].name;

                      item["key" + (s * num2 + 1)] = "店均值(万)";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 1)] =
                        "店均值(万)";

                      item["key" + (s * num2 + 2)] = "金额(万)";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 2)] =
                        "金额(万)";

                      item["key" + (s * num2 + 3)] = "占比";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 3)] =
                        "占比";
                    }
                  }
                }

                num++;
              }
            });

            this.headerMergeCells = [
              {
                row: 0,
                col: 0,
                rowspan: 2,
                colspan: 1
              }, //店铺
              {
                row: 0,
                col: 1,
                rowspan: 2,
                colspan: 1
              }, //类别
              // {
              //   row: 0,
              //   col: 2,
              //   rowspan: 2,
              //   colspan: 1
              // },
              {
                row: 0,
                col: 3,
                rowspan: 1,
                colspan: 4
              }, //年度
              {
                row: 0,
                col: 7,
                rowspan: 1,
                colspan: 4
              }, //第一季度
              {
                row: 0,
                col: 11,
                rowspan: 1,
                colspan: 4
              }, //第二季度
              {
                row: 0,
                col: 15,
                rowspan: 1,
                colspan: 4
              }
            ];
          });
        }
      }
    },
    //获取表体数据
    async getBodyData(lek) {
      let len;
      switch (this.apiName) {
        case "tpBoYtndtdef001": {
          let yeWu, nianFen, quYu, yeTai;
          let resData = await this.getBusinessObjectData();

          return Promise.all([
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/${this.apiName}`
            ),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCY`),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasOrg`),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasFormLife`)
          ]).then(([yeWuArrRes, nianFenArrRes, quYuArrRes, yeTaiArrRes]) => {
            yeWu = yeWuArrRes.data.list;
            quYu = quYuArrRes.data.items;

            yeTai = yeTaiArrRes.data.items;
            len = yeTai.length;

            this.usefulData.categoryArr = yeWu;

            nianFen = nianFenArrRes.data.items;
            this.usefulData.childCategoryArr = nianFen;
            //  console.log("quru", this.$route.query);
            if (
              this.$route.query.qyObjectId != null &&
              this.$route.query.qyObjectId != ""
            ) {
              this.selectedValueQy = this.$route.query.qyObjectId;
              this.timeDelta = this.$route.query.timeDelta;
            }
            this.TOKEN = this.$route.query.TOKEN;

            // console.log("takon", this.TOKEN);
            this.bodyData = [];
            let arr = [];
            let lin = 0;
            yeTai.forEach(yeTaiItem => {
              arr[lin] = yeTaiItem.name;
              lin += 1;
            });
            //yeWu.forEach(yewuItem => {
            // nianFen.forEach(nianFenItem => {
            quYu.forEach(quyuItem => {
              yeTai.forEach(yetaiItem => {
                if (
                  // quyuItem.orgIsLeaf === false &&
                  //quyuItem.orgParent === "11ed2353525d578abe843d5907e0a6b6"
                  quyuItem.orgParent === this.selectedValueQy
                ) {
                  this.bodyData.push({
                    // quyu:
                    //   "<a href='http://www.baidu.com' target='_blank' style='cursor:pointer;'>" +
                    //   quyuItem.name +
                    //   "</a>",
                    // quyu:
                    //   "<a href=" +
                    //   "http://localhost:8080/#/pageDesigner_rt?TOKEN=11ed28c885fddb5eb1f577e18b4a4f16&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1040&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed24db09c9eee4be84b920be8f490e&dataId=11ed184a38c8bf21be84293f05ecaced&previewType=design&isHistory=true" +
                    //   "&qyObjectId=" +
                    //   quyuItem.objectId +
                    //   " target='_blank' style='cursor:pointer;'>" +
                    //   quyuItem.name +
                    //   "</a>",
                    quyu: quyuItem.name,
                    quYuOb: quyuItem.objectId,
                    yeTai: yetaiItem.name,
                    yeTaiOb: yetaiItem.objectId
                  });
                }
              });
              if (
                //quyuItem.orgIsLeaf === false &&
                // quyuItem.orgParent === "11ed2353525d578abe843d5907e0a6b6"
                quyuItem.orgParent === this.selectedValueQy
              ) {
                this.bodyData.push({
                  // shop: "测试店铺",
                  // yewu: yewuItem.name,
                  // nianFen: nianFenItem.name,
                  // dianShu: yewuItem.fdsDef001,
                  // dianJun: yewuItem.fdjDef001,
                  // jinE: yewuItem.fjeDef001,
                  // zhanB: yewuItem.fzbDef001,
                  quyu: quyuItem.name,
                  yeTai: "小计"
                });
              }
            });
            for (let index = 0; index < arr.length; index++) {
              this.bodyData.push({
                quyu: "合计",
                yeTai: arr[index]
              });
            }
            this.bodyData.push({
              quyu: "合计",
              yeTai: "小计"
            });
            let hol = this.headerData[this.headerData.length - 2];
            let holidayRow = this.headerData[this.headerData.length - 1];
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                if ("区域" === holidayRow[key]) {
                  // console.log(
                  //   "aaa",
                  //   "<a href=" +
                  //     "/#/pageDesigner_rt?TOKEN=" +
                  //     this.TOKEN +
                  //     "&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1066&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed2cfa3d22082bbdfda5bf9080a7f4&dataId=11ed184a38c8bf21be84293f05ecaced&previewType=design&isHistory=true" +
                  //     "&qyObjectId=" +
                  //     item.quYuOb +
                  //     " target='_blank' style='cursor:pointer;'>" +
                  //     item.quyu +
                  //     "</a>"
                  // );
                  if (item.quyu != "合计") {
                    item[key] =
                      //
                      "<a href=" +
                      "/#/pageDesigner_rt?TOKEN=" +
                      this.TOKEN +
                      "&menuId=be35d755754611e8a06cb9cf608eeab1&lang=zh_CN&securityFlag=false&timeDelta=-1066&appId=11ecf2d19f1a24e1815559aca99f473e&serviceName=masterdata&hideHeader=true&baseUrl=http%3A%2F%2F192.168.2.218%3A8180%2F&pageDesignerId=11ed2cfa3d22082bbdfda5bf9080a7f4&dataId=11ed184a38c8bf21be84293f05ecaced&previewType=design&isHistory=true" +
                      "&qyObjectId=" +
                      item.quYuOb +
                      " target='_blank' style='cursor:pointer;'>" +
                      item.quyu +
                      "</a>";
                  } else {
                    item[key] = item.quyu;
                  }
                }
                if ("业态" === holidayRow[key]) {
                  item[key] = item.yeTai;
                }
              }
            });
            let arraa = new Array();
            let arrbb = new Array();
            let arrcc = new Array();
            let arrdd = new Array();
            let iXuHao = 1;
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                //序号
                if ("序号" === holidayRow[key]) {
                  item[key] = iXuHao;
                  iXuHao++;
                }

                for (let j = 0; j < resData.length; j++) {
                  if (
                    resData[j].fqyDef001 === item.quYuOb &&
                    resData[j].fytDef002 === item.yeTaiOb
                  ) {
                    let a;
                    for (let i = 0; i < nianFen.length; i++) {
                      if (nianFen[i].objectId === resData[j].fnfDef002) {
                        a = nianFen[i].name;
                      }
                    }
                    if (a === hol[key]) {
                      let a = 0;
                      let b = 0;
                      let cc = 0;

                      //店数计算
                      if ("店数" === holidayRow[key]) {
                        cc = 0;
                        item[key] = resData[j].fdsDef001;
                        for (let a = 0; a <= arraa.length; a = a + 3) {
                          if (
                            arraa[a] === hol[key] &&
                            arraa[a + 1] === item.quyu
                          ) {
                            arraa[a + 2] =
                              arraa[a + 2] + parseInt(resData[j].fdsDef001);
                            cc = 1;
                          }
                        }
                        if (cc === 0) {
                          arraa[arraa.length] = hol[key];
                          arraa[arraa.length] = item.quyu;
                          arraa[arraa.length] = parseInt(resData[j].fdsDef001);
                          // console.log("abc", hol[key]);
                          // console.log("abc", item.quyu);
                          // console.log("abc", parseInt(resData[j].fdsDef001));
                        }
                      }
                      //店均值计算
                      if ("店均值(万)" === holidayRow[key]) {
                        cc = 0;
                        item[key] = (
                          parseFloat(resData[j].fdjDef001) / 10000
                        ).toFixed(2);

                        for (let a = 0; a <= arrbb.length; a = a + 3) {
                          if (
                            arrbb[a] === hol[key] &&
                            arrbb[a + 1] === item.quyu
                          ) {
                            arrbb[a + 2] =
                              arrbb[a + 2] +
                              parseFloat(
                                (
                                  parseFloat(resData[j].fdjDef001) / 10000
                                ).toFixed(2)
                              );
                            cc = 1;
                          }
                        }
                        if (cc === 0) {
                          arrbb[arrbb.length] = hol[key];
                          arrbb[arrbb.length] = item.quyu;
                          arrbb[arrbb.length] = parseFloat(
                            (parseFloat(resData[j].fdjDef001) / 10000).toFixed(
                              2
                            )
                          );
                        }
                      }
                      //金额计算
                      if ("金额(万)" === holidayRow[key]) {
                        cc = 0;
                        item[key] = (
                          parseFloat(resData[j].fjeDef001) / 10000
                        ).toFixed(2);
                        for (let a = 0; a <= arrcc.length; a = a + 3) {
                          if (
                            arrcc[a] === hol[key] &&
                            arrcc[a + 1] === item.quyu
                          ) {
                            arrcc[a + 2] =
                              arrcc[a + 2] +
                              parseFloat(
                                (
                                  parseFloat(resData[j].fjeDef001) / 10000
                                ).toFixed(2)
                              );
                            cc = 1;
                          }
                        }
                        if (cc === 0) {
                          arrcc[arrcc.length] = hol[key];
                          arrcc[arrcc.length] = item.quyu;
                          arrcc[arrcc.length] = parseFloat(
                            (parseFloat(resData[j].fjeDef001) / 10000).toFixed(
                              2
                            )
                          );
                        }
                      }
                      //占比计算
                      if ("占比" === holidayRow[key]) {
                        cc = 0;
                        item[key] =
                          parseFloat(resData[j].fzbDef001).toFixed(2) + "%";

                        for (let a = 0; a <= arrdd.length; a = a + 3) {
                          if (
                            arrdd[a] === hol[key] &&
                            arrdd[a + 1] === item.quyu
                          ) {
                            // console.log("aaavv", "aa");
                            arrdd[a + 2] =
                              arrdd[a + 2] + parseFloat(resData[j].fzbDef001);

                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrdd[arrdd.length] = hol[key];
                          arrdd[arrdd.length] = item.quyu;
                          arrdd[arrdd.length] = parseFloat(
                            resData[j].fzbDef001
                          );
                        }
                      }
                    }
                  }
                }
              }
            });
            //小计输入
            this.bodyData.forEach(item => {
              if (item.yeTai === "小计") {
                for (let key in holidayRow) {
                  for (let key2 in hol) {
                    //店数小计
                    for (let i = 0; i < arraa.length; i = i + 3) {
                      if (
                        "店数" === holidayRow[key2] &&
                        //abc[0] === item.quyu &&
                        arraa[i + 1] === item.quyu &&
                        hol[key2] === arraa[i]
                      ) {
                        item[key2] = arraa[i + 2];
                      }
                    }
                    //店均额小计

                    for (let i = 0; i < arrbb.length; i = i + 3) {
                      // let acb = arrbb[i + 1].split(">");
                      // let abc = acb[1].split("<");
                      if (
                        "店均值(万)" === holidayRow[key2] &&
                        //abc[0] === item.quyu &&
                        arrbb[i + 1] === item.quyu &&
                        hol[key2] === arrbb[i]
                      ) {
                        item[key2] = parseFloat(arrbb[i + 2]).toFixed(2);
                      }
                    }
                    //金额
                    for (let i = 0; i < arrcc.length; i = i + 3) {
                      // let acb = arrcc[i + 1].split(">");
                      // let abc = acb[1].split("<");
                      if (
                        "金额(万)" === holidayRow[key2] &&
                        //abc[0] === item.quyu &&
                        arrcc[i + 1] === item.quyu &&
                        hol[key2] === arrcc[i]
                      ) {
                        item[key2] = parseFloat(arrcc[i + 2]).toFixed(2);
                      }
                    }
                    //占比
                    for (let i = 0; i < arrdd.length; i = i + 3) {
                      // let acb = arrdd[i + 1].split(">");
                      // let abc = acb[1].split("<");
                      if (
                        "占比" === holidayRow[key2] &&
                        //abc[0] === item.quyu &&
                        arrdd[i + 1] === item.quyu &&
                        hol[key2] === arrdd[i]
                      ) {
                        let blot = parseFloat(arrdd[i + 2]).toFixed(2);
                        item[key2] = blot + "%";
                      }
                    }
                  }
                }
              }
            });
            let arraaaa = new Array();
            let arrbbbb = new Array();
            let arrcccc = new Array();
            let arrdddd = new Array();
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                for (let j = 0; j < resData.length; j++) {
                  if (
                    resData[j].fqyDef001 === item.quYuOb &&
                    resData[j].fytDef002 === item.yeTaiOb
                  ) {
                    let a;
                    for (let i = 0; i < nianFen.length; i++) {
                      if (nianFen[i].objectId === resData[j].fnfDef002) {
                        a = nianFen[i].name;
                      }
                    }
                    if (a === hol[key]) {
                      //console.log("23231", 111);
                      //console.log("hol", holidayRow[key]);
                      let a = 0;
                      let b = 0;
                      let cc = 0;
                      //店数计算
                      if ("店数" === holidayRow[key]) {
                        cc = 0;
                        //item[key] = resData[j].fdsDef001;
                        for (let a = 0; a <= arraaaa.length; a = a + 3) {
                          if (
                            arraaaa[a] === hol[key] &&
                            // arraaaa[a + 1] === item.quyu &&
                            arraaaa[a + 1] === item.yeTai
                          ) {
                            // console.log("aaavv", "aa");
                            arraaaa[a + 2] =
                              arraaaa[a + 2] + parseInt(resData[j].fdsDef001);
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arraaaa[arraaaa.length] = hol[key];
                          arraaaa[arraaaa.length] = item.yeTai;
                          arraaaa[arraaaa.length] = parseInt(
                            resData[j].fdsDef001
                          );
                          //arraaaa[arraaaa.length] = item.yeTai;
                        }
                        // console.log("acbbbb", arraaaa);
                        //console.log("item", key);
                      }
                      //店均值计算
                      if ("店均值(万)" === holidayRow[key]) {
                        cc = 0;
                        //item[key] = resData[j].fdjDef001;

                        for (let a = 0; a <= arrbbbb.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arrbbbb[a] === hol[key] &&
                            arrbbbb[a + 1] === item.yeTai
                          ) {
                            //console.log("aaavv", "aa");
                            arrbbbb[a + 2] =
                              arrbbbb[a + 2] +
                              parseFloat(
                                (
                                  parseFloat(resData[j].fdjDef001) / 10000
                                ).toFixed(2)
                              );
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrbbbb[arrbbbb.length] = hol[key];
                          arrbbbb[arrbbbb.length] = item.yeTai;
                          arrbbbb[arrbbbb.length] = parseFloat(
                            (parseFloat(resData[j].fdjDef001) / 10000).toFixed(
                              2
                            )
                          );
                        }
                        //console.log("aaabb", arrbbbb);
                      }
                      //金额计算
                      if ("金额(万)" === holidayRow[key]) {
                        cc = 0;
                        //item[key] = resData[j].fjeDef001;
                        for (let a = 0; a <= arrcccc.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arrcccc[a] === hol[key] &&
                            arrcccc[a + 1] === item.yeTai
                          ) {
                            //console.log("aaavv", "aa");
                            arrcccc[a + 2] =
                              arrcccc[a + 2] +
                              parseFloat(
                                (
                                  parseFloat(resData[j].fjeDef001) / 10000
                                ).toFixed(2)
                              );
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrcccc[arrcccc.length] = hol[key];
                          arrcccc[arrcccc.length] = item.yeTai;
                          arrcccc[arrcccc.length] = parseFloat(
                            (parseFloat(resData[j].fjeDef001) / 10000).toFixed(
                              2
                            )
                          );
                        }
                        // console.log("aaacc", arrcccc);
                      }
                      //占比计算
                      if ("占比" === holidayRow[key]) {
                        cc = 0;
                        //item[key] = resData[j].fzbDef001 + "%";

                        for (let a = 0; a <= arrdddd.length; a = a + 3) {
                          if (
                            arrdddd[a] === hol[key] &&
                            arrdddd[a + 1] === item.yeTai
                          ) {
                            // console.log("asdsad", arrdddd[a + 2]);
                            // console.log("asdsad", arrdddd[a + 1]);
                            // console.log("asdsad", arrdddd[a]);
                            // console.log("aaavv", arrdddd[a + 2]);
                            arrdddd[a + 2] =
                              arrdddd[a + 2] +
                              parseFloat(
                                parseFloat(resData[j].fzbDef001).toFixed(2)
                              );

                            cc = 1;
                          }
                        }
                        if (cc === 0) {
                          arrdddd[arrdddd.length] = hol[key];
                          arrdddd[arrdddd.length] = item.yeTai;
                          arrdddd[arrdddd.length] = parseFloat(
                            parseFloat(resData[j].fzbDef001).toFixed(2)
                          );
                        }
                      }
                    }
                  }
                }
              }
            });
            //
            let xiaoJ_01 = new Array();
            let xiaoJ_02 = new Array();
            let xiaoJ_03 = new Array();
            let xiaoJ_04 = new Array();
            let cc = 0;
            //店数合计小计
            for (let i = 0; i < arraaaa.length; i = i + 3) {
              for (let j = 0; j < xiaoJ_01.length; j++) {
                //console.log("acasscs1", xiaoJ_01[j]);
                if (xiaoJ_01[j] === arraaaa[i]) {
                  xiaoJ_01[j + 1] =
                    xiaoJ_01[j + 1] + parseFloat(arraaaa[i + 2]);
                  cc = 1;
                }
              }

              if (cc === 0) {
                xiaoJ_01[xiaoJ_01.length] = arraaaa[i];
                xiaoJ_01[xiaoJ_01.length] = arraaaa[i + 2];
              }
              cc = 0;
            }
            //店均额合计小计
            for (let i = 0; i < arrbbbb.length; i = i + 3) {
              for (let j = 0; j < xiaoJ_02.length; j++) {
                //console.log("acasscs1", xiaoJ_02[j]);
                if (xiaoJ_02[j] === arrbbbb[i]) {
                  xiaoJ_02[j + 1] =
                    xiaoJ_02[j + 1] + parseFloat(arrbbbb[i + 2]);
                  cc = 1;
                }
              }

              if (cc === 0) {
                xiaoJ_02[xiaoJ_02.length] = arrbbbb[i];
                xiaoJ_02[xiaoJ_02.length] = arrbbbb[i + 2];
              }
              cc = 0;
            }
            //金额合计小计
            for (let i = 0; i < arrcccc.length; i = i + 3) {
              for (let j = 0; j < xiaoJ_03.length; j++) {
                // console.log("acasscs1", xiaoJ_03[j]);
                if (xiaoJ_03[j] === arrcccc[i]) {
                  xiaoJ_03[j + 1] =
                    xiaoJ_03[j + 1] + parseFloat(arrcccc[i + 2]);
                  cc = 1;
                }
              }

              if (cc === 0) {
                xiaoJ_03[xiaoJ_03.length] = arrcccc[i];
                xiaoJ_03[xiaoJ_03.length] = arrcccc[i + 2];
              }
              cc = 0;
            }
            //占比合计小计
            for (let i = 0; i < arrdddd.length; i = i + 3) {
              for (let j = 0; j < xiaoJ_04.length; j++) {
                if (xiaoJ_04[j] === arrdddd[i]) {
                  xiaoJ_04[j + 1] =
                    xiaoJ_04[j + 1] + parseFloat(arrdddd[i + 2]);
                  // console.log("asdsad23132", arrdddd);
                  // console.log("asdsad23132", parseFloat(arrdddd[i + 2]));
                  // console.log(
                  //   "asdsad23132",
                  //   xiaoJ_04[j + 1] + parseFloat(arrdddd[i + 2])
                  // );
                  cc = 1;
                }
              }
              // console.log("asdsdsdaaaa", xiaoJ_04);
              //g("asdsdsda", arrdddd);
              if (cc === 0) {
                xiaoJ_04[xiaoJ_04.length] = arrdddd[i];
                xiaoJ_04[xiaoJ_04.length] = arrdddd[i + 2];
              }
              // console.log("xiaoJ_04", xiaoJ_04);
              cc = 0;
            }
            let total = 0;
            let own = 0;
            let ien = 0;
            // 合计计算
            let jiHeArr = new Array();
            this.bodyData.forEach(item => {
              if (item.quyu === "合计") {
                //console.log("item11", item);

                for (let key in holidayRow) {
                  for (let key2 in hol) {
                    //店数

                    //店数合计小计
                    for (let i = 0; i < arraaaa.length; i = i + 3) {
                      if (
                        "店数" === holidayRow[key2] &&
                        arraaaa[i + 1] === item.yeTai &&
                        hol[key2] === arraaaa[i]
                      ) {
                        item[key2] = arraaaa[i + 2];
                      }
                    }
                    //店均额合计小计
                    for (let i = 0; i < arrbbbb.length; i = i + 3) {
                      if (
                        "店均值(万)" === holidayRow[key2] &&
                        arrbbbb[i + 1] === item.yeTai &&
                        hol[key2] === arrbbbb[i]
                      ) {
                        item[key2] = parseFloat(
                          parseFloat(arrbbbb[i + 2]).toFixed(2)
                        );
                      }
                    }
                    //金额合计小计
                    for (let i = 0; i < arrcccc.length; i = i + 3) {
                      if (
                        "金额(万)" === holidayRow[key2] &&
                        arrcccc[i + 1] === item.yeTai &&
                        hol[key2] === arrcccc[i]
                      ) {
                        item[key2] = parseFloat(
                          parseFloat(arrcccc[i + 2]).toFixed(2)
                        );
                        own = arrcccc[i + 2];
                      }
                    }
                    //占比合计小计
                    for (let i = 0; i < arrdddd.length; i = i + 3) {
                      if (
                        "占比" === holidayRow[key2] &&
                        arrdddd[i + 1] === item.yeTai &&
                        hol[key2] === arrdddd[i]
                      ) {
                        for (let index = 0; index < xiaoJ_03.length; index++) {
                          if (xiaoJ_03[index] === arrdddd[i]) {
                            total = xiaoJ_03[index + 1];
                          }
                        }
                        //item[key2] = arrdddd[i + 2] + "%";
                        let c = 0;
                        item[key2] =
                          parseFloat((own / total) * 100).toFixed(2) + "%";
                        // enn = enn + parseFloat((own / total) * 100).toFixed(2);
                        // for (let index = 0; index < jiHeArr.length; index++) {
                        //   if (jiHeArr[index] === arrdddd[i]) {
                        //     jiHeArr[index + 1] =
                        //       parseFloat(jiHeArr[index + 1]) +
                        //       parseFloat((own / total) * 100);
                        //     c = 1;
                        //   }
                        // }
                        // if (c === 0) jiHeArr[jiHeArr.length] = arrdddd[i];
                        // jiHeArr[jiHeArr.length] = parseFloat(
                        //   (own / total) * 100
                        // ).toFixed(2);
                        // c = 1;
                        // console.log("casca", jiHeArr);
                      }
                    }
                    //合计店数
                    for (let j = 0; j < xiaoJ_01.length; j++) {
                      if (
                        "店数" === holidayRow[key2] &&
                        item.yeTai === "小计" &&
                        xiaoJ_01[j] === hol[key2]
                      ) {
                        item[key2] = xiaoJ_01[j + 1];
                      }
                    }
                    //合计店均额
                    for (let j = 0; j < xiaoJ_02.length; j++) {
                      if (
                        "店均值(万)" === holidayRow[key2] &&
                        item.yeTai === "小计" &&
                        xiaoJ_02[j] === hol[key2]
                      ) {
                        item[key2] = parseFloat(
                          parseFloat(xiaoJ_02[j + 1]).toFixed(2)
                        );
                      }
                    }
                    //合计金额
                    for (let j = 0; j < xiaoJ_03.length; j++) {
                      if (
                        "金额(万)" === holidayRow[key2] &&
                        item.yeTai === "小计" &&
                        xiaoJ_03[j] === hol[key2]
                      ) {
                        item[key2] = parseFloat(
                          parseFloat(xiaoJ_03[j + 1]).toFixed(2)
                        );
                        // total = xiaoJ_03[j + 1];
                      }
                    }
                    //合计占比
                    for (let j = 0; j < xiaoJ_04.length; j++) {
                      if (
                        "占比" === holidayRow[key2] &&
                        item.yeTai === "小计" &&
                        xiaoJ_04[j] === hol[key2]
                      ) {
                        //console.log("aadsdas", xiaoJ_04);
                        //item[key2] = xiaoJ_04[j + 1] + "%";
                        item[key2] = 100 + "%";
                      }
                    }
                  }
                }
              }
            });

            let a = 0;

            this.bodyMergeCells = [
              {
                row: 2,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + len + 1,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 2,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 3,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 4,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },

              {
                row: 2 + (len + 1) * 5,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 6,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 7,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 8,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              },
              {
                row: 2 + (len + 1) * 9,
                col: 0,
                rowspan: len + 1,
                colspan: 1
              }
            ];
          });
        }
      }
    },
    //获取样式
    getCellStyle() {
      // let cellStyleArr = null;
      let cellStyleArr = [];

      for (let index = 0; index < 50; index++) {
        for (let index2 = 0; index2 < 50; index2++) {
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
              //console.log("aaa", 222);
              return TD.innerHTML;
            }
          });
        }
      }
      //  console.log("cellStyleArr", cellStyleArr);
      // 列头样式
      //  console.log("aaa", 444);
      for (let rowIndex = 0; rowIndex < 1000; rowIndex++) {
        for (let colIndex = 0; colIndex < 2; colIndex++) {
          //   console.log("22222", cellStyleArr);
          cellStyleArr.push({
            //  rr: console.log("111", 2222),
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#f7f7f7";
              TD.innerHTML = value;
              TD.style.height = "6px";

              return TD.innerHTML;
            }
          });
          //console.log("caacac", cellStyleArr);
        }
      }
      //  console.log("cellStyleArr", cellStyleArr);
      // 行头样式
      for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
        for (let colIndex = 0; colIndex < 1000; colIndex++) {
          cellStyleArr.push({
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#2498d1";
              TD.innerHTML = value;
              // TD.style.height = "40px";

              return TD.innerHTML;
            }
          });
        }
      }
      // 合计样式

      this.bodyData.forEach((item, index) => {
        if (item.quyu === "合计") {
          for (let rowIndex = index + 2; rowIndex < index + 3; rowIndex++) {
            for (let colIndex = 2; colIndex < 20; colIndex++) {
              cellStyleArr.push({
                row: rowIndex,
                col: colIndex,
                renderer(wot, TD, row, col, prop, value) {
                  TD.style.background = "#99ccff";
                  TD.innerHTML = value;
                  TD.className = "htRight";
                  // TD.style.height = "6px";
                  return TD.innerHTML;
                }
              });
            }
          }
        }
      });
      // console.log("cellStyleArr", cellStyleArr);
      // 小计样式
      this.bodyData.forEach((item, index) => {
        if (item.yeTai === "小计") {
          for (let rowIndex = index + 2; rowIndex < index + 3; rowIndex++) {
            for (let colIndex = 2; colIndex < 100; colIndex++) {
              cellStyleArr.push({
                row: rowIndex,
                col: colIndex,
                renderer(wot, TD, row, col, prop, value) {
                  TD.style.background = "#e8f5fb";
                  TD.innerHTML = value;
                  // TD.style.height = "6px";
                  TD.className = "htRight";
                  return TD.innerHTML;
                }
              });
            }
          }
        }
      });

      return cellStyleArr;
    },

    //获取业务对象数据
    async getBusinessObjectData() {
      return DsUtils.get(
        //  `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
        `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?&limit=100000&offset=0`
      ).then(res => res.data.list);
    },
    //填报
    setDataModeValue(rowIndex, key, newValue) {
      // let rowData = this.tableData[rowIndex]; //被修改的那一行的数据
      // let targetRowInResData = this.resData.find(row => {
      //   let category = row.flbDef001.name;
      //   let childCategory = row.fzlDef001.name;
      //   let holiday = row.fjrDef001.name;
      //   return (
      //     category === rowData.category &&
      //     childCategory === rowData.childCategory &&
      //     holiday === this.usefulData.holidayMap[key]
      //   );
      // });
      // if (targetRowInResData) {
      //   targetRowInResData.fzDef001 = newValue;
      // } else {
      //   //没找到说明需要insert数据
      //   if (this.usefulData.insertDataArr) {
      //     let targetItem = this.usefulData.insertDataArr.find(
      //       item => item.rowIndex === rowIndex && item.key === key
      //     );
      //     if (targetItem) {
      //       targetItem.value = newValue;
      //     } else {
      //       this.usefulData.insertDataArr.push({
      //         rowIndex,
      //         key,
      //         value: newValue
      //       });
      //     }
      //   } else {
      //     this.usefulData.insertDataArr = [];
      //     this.usefulData.insertDataArr.push({
      //       rowIndex,
      //       key,
      //       value: newValue
      //     });
      //   }
      //}
    },
    //下拉框查询数据
    getSelectOptions() {
      let url = `http://192.168.2.218:8180/metadata/apiBasCY/selectDisplayData`;
      DsUtils.post(url, {
        originalFieldCode: "fndDef001",
        limit: 20,
        fields: "name"
        // value: item.objectId
      }).then(res => {
        this.selectOptions = res.data.items.map(item => ({
          label: item.name,
          value: item.name
        }));
      });
    },
    //监听下拉框数据
    async onSelectChange(value) {
      this.table.destroy();
      // console.log("table", this.tableData);

      let a = this.bodyData;
      this.yearChange = value;
      this.selectedValue = value;
      await this.getHeaderData();
      //this.getCellStyle;

      this.resData = await this.getBusinessObjectData();
      await this.getBodyData(2);
      this.tableData = [...this.headerData, ...this.bodyData];
      const container = this.$refs.ynHandsontable;
      const tableWrapper = this.$refs.tableWrapper;
      //destory();

      this.table = new YnHandsontable(this.container, {
        data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
        autoColumnSize: true,
        colWidths: 100,
        colHeaders: true,
        cell: this.getCellStyle(),
        className: "htCenter htMiddle",
        fixedColumnsLeft: 3,
        minCols: 10,
        rowHeights: "6px",
        minRows: 10,
        mergeCells: [
          //头部合并单元格
          ...this.headerMergeCells,
          //body合并单元格
          ...this.bodyMergeCells
        ]
      });
      this.allData = this.table.getData();
    },
    //保存数据
    onSaveClick() {
      // let promiseArr = [];
      // //已有值update
      // let url = `http://192.168.2.218:8180/metadata/tpBoZkjdef001`;
      // let params = this.resData.map(row => {
      //   let { objectId, fzDef001 } = row;
      //   return {
      //     objectId,
      //     fzDef001
      //   };
      // });
      // promiseArr.push(DsUtils.post(url, params));
      // //插入值
      // let postBody = [];
      // if (
      //   this.usefulData.insertDataArr &&
      //   this.usefulData.insertDataArr.length > 0
      // ) {
      //   this.usefulData.insertDataArr.forEach(({ rowIndex, key, value }) => {
      //     let rowData = this.tableData[rowIndex];
      //     let { category, childCategory } = rowData;
      //     let holiday = this.usefulData.holidayMap[key];
      //     let categoryItem = this.usefulData.categoryArr.find(
      //       item => category === item.name
      //     );
      //     let childCategoryItem = this.usefulData.childCategoryArr.find(
      //       item =>
      //         item.name === childCategory &&
      //         item.fssDef001 === categoryItem.objectId
      //     );
      //     let holidayItem = this.usefulData.holidayArr.find(
      //       item => item.name === holiday
      //     );
      //     let seasonItem = this.usefulData.seasonArr.find(
      //       item => item.objectId === holidayItem.fjdDef001
      //     );
      //     // fnDef001;
      //     postBody.push({
      //       fnDef001: this.selectedValue, //年份
      //       flbDef001: categoryItem.objectId,
      //       fzlDef001: childCategoryItem.objectId,
      //       fjrDef001: holidayItem.objectId,
      //       fjdDef001: seasonItem.objectId,
      //       fzDef001: value
      //     });
      //   });
      // }
      // promiseArr.push(
      //   DsUtils.post(
      //     `http://192.168.2.218:8180/metadata/tpBoZkjdef001/batchInsertBoData`,
      //     postBody
      //   )
      // );
      // Promise.all(promiseArr).then(() => {
      //   UiUtils.successMessage("保存成功");
      // });
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
          "15",
          "16",
          "17",
          "18"
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

      {
        contentWs["A2"].s = style1;
        contentWs["B2"].s = style1;
        contentWs["C2"].s = style1;
        contentWs["D2"].s = style1;
        contentWs["E2"].s = style1;
        contentWs["F2"].s = style1;
        contentWs["G2"].s = style1;
        contentWs["H2"].s = style1;
        contentWs["I2"].s = style1;
        contentWs["J2"].s = style1;
        contentWs["K2"].s = style1;
        contentWs["L2"].s = style1;
        contentWs["M2"].s = style1;
        contentWs["N2"].s = style1;
        contentWs["O2"].s = style1;
        contentWs["P2"].s = style1;
        contentWs["Q2"].s = style1;
        contentWs["R2"].s = style1;
        contentWs["S2"].s = style1;
        contentWs["C3"].s = style1;
        contentWs["D3"].s = style1;
        contentWs["E3"].s = style1;
        contentWs["F3"].s = style1;
        contentWs["G3"].s = style1;
        contentWs["H3"].s = style1;
        contentWs["I3"].s = style1;
        contentWs["J3"].s = style1;
        contentWs["K3"].s = style1;
        contentWs["L3"].s = style1;
        contentWs["M3"].s = style1;
        contentWs["N3"].s = style1;
        contentWs["O3"].s = style1;
        contentWs["P3"].s = style1;
        contentWs["Q3"].s = style1;
        contentWs["R3"].s = style1;
        contentWs["S3"].s = style1;
        contentWs["A4"].s = style2;
        contentWs["A5"].s = style2;
        contentWs["A6"].s = style2;
        contentWs["A7"].s = style2;
        contentWs["A8"].s = style2;
        contentWs["A9"].s = style2;
        contentWs["A10"].s = style2;
        contentWs["A11"].s = style2;
        contentWs["A12"].s = style2;
        contentWs["A13"].s = style2;
        contentWs["A14"].s = style2;
        contentWs["A15"].s = style2;
        contentWs["A16"].s = style2;
        contentWs["A17"].s = style2;
        contentWs["A18"].s = style2;
        contentWs["A19"].s = style2;
        contentWs["A20"].s = style2;
        contentWs["A21"].s = style2;
        contentWs["A22"].s = style2;
        contentWs["A23"].s = style2;
        contentWs["A24"].s = style2;
        contentWs["A25"].s = style2;
        contentWs["A25"].s = style2;
        contentWs["A27"].s = style2;
        contentWs["A28"].s = style2;
        contentWs["A29"].s = style2;
        contentWs["A30"].s = style2;
        contentWs["B4"].s = style2;
        contentWs["B5"].s = style2;
        contentWs["B6"].s = style2;
        contentWs["B7"].s = style2;
        contentWs["B8"].s = style2;
        contentWs["B9"].s = style2;
        contentWs["B10"].s = style2;
        contentWs["B11"].s = style2;
        contentWs["B12"].s = style2;
        contentWs["B13"].s = style2;
        contentWs["B14"].s = style2;
        contentWs["B15"].s = style2;
        contentWs["B16"].s = style2;
        contentWs["B17"].s = style2;
        contentWs["B18"].s = style2;
        contentWs["B19"].s = style2;
        contentWs["B20"].s = style2;
        contentWs["B21"].s = style2;
        contentWs["B22"].s = style2;
        contentWs["B23"].s = style2;
        contentWs["B24"].s = style2;
        contentWs["B25"].s = style2;
        contentWs["B26"].s = style2;
        //contentWs["B26"].s = style1;
        contentWs["B27"].s = style2;
        contentWs["B28"].s = style2;
        contentWs["B29"].s = style2;
        contentWs["B30"].s = style2;
      }

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
  //生成多维表
  async connectedCallback() {
    // const container = this.$refs.ynHandsontable;
    //获取下拉组件数据
    this.getSelectOptions();

    const templateTableData = [
      ["", "Tesla", "Volvo", "Toyota", "Ford"],
      ["2019", 10, 11, 12, 13],
      ["2020", 20, 11, 14, 13],
      ["2021", 30, 15, 12, 13]
    ];

    //运行态中并不会去从数据库中取数据，所以dataModel为null，但是还希望展示出样例多维表，所以显示templateTableData

    this.resData = await this.getBusinessObjectData();

    await this.getHeaderData();
    await this.getBodyData();
    //this.getCellStyleAll = this.getCellStyle();
    this.tableData = [...this.headerData, ...this.bodyData];
    let that = this;

    //解决多维表触发change事件后，宽度缩窄的问题
    const container = this.$refs.ynHandsontable;
    const tableWrapper = this.$refs.tableWrapper;
    let colWidths = 100;
    //利用handsontable生成多维表
    this.container = container;
    this.table = new YnHandsontable(container, {
      data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
      autoColumnSize: true,
      colWidths: 100,
      colHeaders: true,
      cell: this.getCellStyle(),
      className: "htCenter htMiddle",
      fixedColumnsLeft: 3,
      minCols: 10,

      rowHeights: "6px",
      minRows: 10,

      afterChange(changes) {
        changes &&
          changes.forEach(([rowIndex, key, oldValue, newValue]) => {
            if (rowIndex > 1 && key.includes("key") && oldValue !== newValue) {
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
    //解决生成的多维表的高度问题

    this.$refs.tableWrapper.style.height =
      document.querySelector(".wtHider").offsetHeight + "px";
  },
  renderedCallback() {}
};
