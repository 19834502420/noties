/* eslint-disable no-unused-vars */
import basicOptions from "yn-p1-designer/libs/views/applications/p1_designer/components/yn-designer-component/index.js";
delete basicOptions.create;
import YnHandsontable from "yn-handsontable";
import "yn-handsontable/dist/handsontable.full.css";
import "yn-p1/libs/components/yn-button/";
import DsUtils from "yn-p1/libs/utils/DsUtils";
import UiUtils from "yn-p1/libs/utils/UiUtils";
import cloneDeep from "lodash/cloneDeep";
//import { HyperFormula } from "hyperformula";

const apiNameMap = {
  tpBoYtndtdef001: {
    name: "销售表",
    fields: [
      // {
      //   code: "fjdDef001",
      //   fieldTitle: "季度",
      //   masterDataName: "masterDataObject019"
      // },
      // {
      //   code: "fjrDef001",
      //   fieldTitle: "节日",
      //   masterDataName: "masterDataObject020"
      // },
      // {
      //   code: "flbDef001",
      //   fieldTitle: "类别",
      //   masterDataName: "masterDataObject016"
      // },
      {
        code: "fnDef001",
        fieldTitle: "年",
        masterDataName: "masterDataObject018"
      }
      // {
      //   code: "fzlDef001",
      //   fieldTitle: "子类别",
      //   masterDataName: "masterDataObject017"
      // }
    ]
  }
};

export default {
  mixins: [basicOptions],
  components: {},
  computed: {},
  data() {
    return {
      headerData: null,
      tableNum: [],
      bodyData: null,
      tableData: null,
      resData: null,
      body: [],
      yearData: [],
      selectOptions: null,
      selectedValue: "11ed01185d5d1e73be3a1daa372f20e3",
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
    getHeaderData() {
      //表头数据
      switch (this.apiName) {
        case "tpBoYtndtdef001": {
          let yearArr; //季度
          let sonKoJianArr; //节日
          // console.info("aaaaaa");
          return Promise.all([
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasCY`)
            // DsUtils.get(
            //   `http://192.168.2.218:8180/businessobject/v2/tpBoZqydef001`
            // )
          ]).then(([year]) => {
            // eslint-disable-next-line no-console
            console.info("seasonRes", year);
            // eslint-disable-next-line no-console
            console.info("holidayRes", year);
            yearArr = year.data.items;
            this.yearData = year.data.items;
            this.usefulData.yearArr = yearArr;
            // sonKoJianArr = sonKoJian.data.list;
            // this.usefulData.sonKoJianArr = sonKoJianArr;

            let headerDataItem = {
              category: "区域",
              childCategory: "业态"
            };

            this.headerData = [
              { ...headerDataItem },
              { ...headerDataItem }
              //{ ...headerDataItem }
            ];
            //第一行的单元格数量计算
            let num = 0;
            //一个年份对应多少个字段
            let num2 = 4;
            let num3 = 0;
            //let num4 = sonKoJianArr[0].fzdDef001;

            //console.info("sss", num2);
            this.headerData.forEach((item, index) => {
              for (let j = 3; j < yearArr.length - 2; j++) {
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

                      item["key" + (s * num2 + 1)] = "店均值";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 1)] =
                        "店均值";

                      item["key" + (s * num2 + 2)] = "金额";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 2)] =
                        "金额";

                      item["key" + (s * num2 + 3)] = "占比";
                      !this.usefulData.holidayMap &&
                        (this.usefulData.holidayMap = {});
                      this.usefulData.holidayMap["key" + (s * num2 + 3)] =
                        "占比";
                    }

                    // console.log("holid", son);
                    // item["key" + i] = son.name;
                    // console.info("item2", item["key" + i]);
                    // !this.usefulData.holidayMap &&
                    //   (this.usefulData.holidayMap = {});
                    // this.usefulData.holidayMap["key" + i] = son.name;
                    //表头第二行 季度
                    // let seasonId = holiday.fjdDef001;
                    // let seasonIndex;
                    // seasonArr.forEach((season, idx) => {
                    //   if (season.objectId === seasonId) {
                    //     seasonIndex = idx;
                    //   }
                    // });
                    // item["key" + i] = seasonArr[seasonIndex].name;
                  }
                }

                num++;
              }
            });
            console.log("handsss", this.headerData);
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
                rowspan: 2,
                colspan: 1
              }, //店铺
              {
                row: 0,
                col: 1,
                rowspan: 2,
                colspan: 1
              }, //类别
              {
                row: 0,
                col: 2,
                rowspan: 1,
                colspan: 4
              }, //年度
              {
                row: 0,
                col: 6,
                rowspan: 1,
                colspan: 4
              }, //第一季度
              {
                row: 0,
                col: 10,
                rowspan: 1,
                colspan: 4
              }, //第二季度
              {
                row: 0,
                col: 14,
                rowspan: 1,
                colspan: 4
              } //第一季度
              // {
              //   row: 1,
              //   col: 3 + 4,
              //   rowspan: 1,
              //   colspan: 2
              // } //第三季度
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

    sortBy(i) {
      return function(a, b) {
        return a[i] - b[i]; //  a[i] - b[i]为正序，倒叙为  b[i] - a[i]
      };
    },
    async getBodyData() {
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
            DsUtils.get(`http://192.168.2.218:8180/metadata/tpBoQydef002`),
            DsUtils.get(`http://192.168.2.218:8180/metadata/apiBasFormLife`)
          ]).then(([yeWuArrRes, nianFenArrRes, quYuArrRes, yeTaiArrRes]) => {
            console.log("car1", yeWuArrRes);
            console.log("car2", nianFenArrRes);
            yeWu = yeWuArrRes.data.list;
            quYu = quYuArrRes.data.items;
            yeTai = yeTaiArrRes.data.items;
            len = yeTai.length;
            this.usefulData.categoryArr = yeWu;
            nianFen = nianFenArrRes.data.items;
            this.usefulData.childCategoryArr = nianFen;
            this.bodyData = [];

            //yeWu.forEach(yewuItem => {
            // nianFen.forEach(nianFenItem => {
            quYu.forEach(quyuItem => {
              yeTai.forEach(yetaiItem => {
                this.bodyData.push({
                  // shop: "测试店铺",
                  // yewu: yewuItem.name,
                  // nianFen: nianFenItem.name,
                  // dianShu: yewuItem.fdsDef001,
                  // dianJun: yewuItem.fdjDef001,
                  // jinE: yewuItem.fjeDef001,
                  // zhanB: yewuItem.fzbDef001,
                  quyu: quyuItem.name,
                  quYuOb: quyuItem.objectId,
                  yeTai: yetaiItem.name,
                  yeTaiOb: yetaiItem.objectId
                });
                // nianFen.forEach(nianFenItem => {});
              });
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
            });
            let arr = [
              "百货店",
              "街铺店",
              "购物中心点",
              "社区",
              "通勤",
              "校区",
              "园区"
            ];
            for (let index = 0; index < arr.length; index++) {
              this.bodyData.push({
                quyu: "合计",
                yeTai: arr[index]
              });
            }

            //});
            //  });

            console.log("aaa", this.bodyData.sort(this.sortBy("quyu")));
            //this.getsort(this.bodyData);
            console.log("bodydata", this.bodyData);
            console.log(
              "bodydata",
              this.headerData[this.headerData.length - 2]
            );
            let hol = this.headerData[this.headerData.length - 2];
            let holidayRow = this.headerData[this.headerData.length - 1];
            //let res = resData.data.list;

            this.bodyData.forEach(item => {
              // resData.forEach(row => {
              for (let key in holidayRow) {
                if ("区域" === holidayRow[key]) {
                  item[key] = item.quyu;
                }
                if ("业态" === holidayRow[key]) {
                  item[key] = item.yeTai;
                }
              }
              //console.log("row", row);
              // let category = row.flbDef001.name;
              // let childCategory = row.fzlDef001.name;
              // let holiday = row.fjrDef001.name;
              // let value = row.fzDef001;

              // for (let key in holidayRow) {
              //   if ("区域" === holidayRow[key]) {
              //     item[key] = item.quyu;
              //   }
              //   if ("业态" === holidayRow[key]) {
              //     item[key] = item.yeTai;
              //   }
              //   for (let key in hol) {
              //     if ("店数" === holidayRow[key] && item.nianFen === hol[key]) {
              //       item[key] = item.dianShu;
              //     }

              //     if (
              //       "店均值" === holidayRow[key] &&
              //       item.nianFen === hol[key]
              //     ) {
              //       item[key] = item.dianJun;
              //     }

              //     if ("金额" === holidayRow[key] && item.nianFen === hol[key]) {
              //       item[key] = item.jinE;
              //     }

              //     if ("占比" === holidayRow[key] && item.nianFen === hol[key]) {
              //       item[key] = item.zhanB;
              //     }
              //   }
              // }

              // if (
              //   category === item.category &&
              //   childCategory === item.childCategory
              // ) {
              //   for (let key in holidayRow) {
              //     if (holiday === holidayRow[key]) {
              //       item[key] = value;
              //     }
              //   }
              // }
            });
            // });
            let arraa = new Array();
            let arrbb = new Array();
            let arrcc = new Array();
            let arrdd = new Array();
            // arraa[0] = 0;
            // arraa[1] = 0;
            // arraa[2] = 0;
            let zhanbiA = 0;
            let zhanbiB = 0;
            console.log("res", resData);
            //for (let i = 0; i < this.bodyData.length; i++) {
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                for (let j = 0; j < resData.length; j++) {
                  // console.log(
                  //   "aaaaaaa",
                  //   resData[j].fqyDef002 === item.quYuOb &&
                  //     resData[j].fytDef002 === item.yeTaiOb
                  // );
                  // console.log("aaaaaaa", resData[j].fytDef002);
                  if (
                    resData[j].fqyDef003 === item.quYuOb &&
                    resData[j].fytDef002 === item.yeTaiOb
                  ) {
                    let a;
                    for (let i = 0; i < nianFen.length; i++) {
                      if (nianFen[i].objectId === resData[j].fnfDef002) {
                        a = nianFen[i].name;
                      }
                    }
                    // console.log("bbbbb", a);
                    // console.log("bbbbb", hol[key]);
                    if (a === hol[key]) {
                      //console.log("23231", 111);
                      //console.log("hol", holidayRow[key]);
                      let a = 0;
                      let b = 0;
                      let cc = 0;
                      //店数计算
                      if ("店数" === holidayRow[key]) {
                        // console.log("hol", resData[j].fdsDef001);
                        cc = 0;
                        item[key] = resData[j].fdsDef001;
                        for (let a = 0; a <= arraa.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arraa[a] === hol[key] &&
                            arraa[a + 1] === item.quyu
                          ) {
                            console.log("aaavv", "aa");
                            arraa[a + 2] =
                              arraa[a + 2] + parseInt(resData[j].fdsDef001);
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arraa[arraa.length] = hol[key];
                          arraa[arraa.length] = item.quyu;
                          arraa[arraa.length] = parseInt(resData[j].fdsDef001);
                        }
                        console.log("acb", arraa);
                        //console.log("item", key);
                      }
                      //店均值计算
                      if ("店均值" === holidayRow[key]) {
                        cc = 0;
                        item[key] = resData[j].fdjDef001;

                        for (let a = 0; a <= arrbb.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arrbb[a] === hol[key] &&
                            arrbb[a + 1] === item.quyu
                          ) {
                            console.log("aaavv", "aa");
                            arrbb[a + 2] =
                              arrbb[a + 2] + parseInt(resData[j].fdjDef001);
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrbb[arrbb.length] = hol[key];
                          arrbb[arrbb.length] = item.quyu;
                          arrbb[arrbb.length] = parseInt(resData[j].fdjDef001);
                        }
                        console.log("aaabb", arrbb);
                      }
                      //金额计算
                      if ("金额" === holidayRow[key]) {
                        cc = 0;
                        item[key] = resData[j].fjeDef001;
                        for (let a = 0; a <= arrcc.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arrcc[a] === hol[key] &&
                            arrcc[a + 1] === item.quyu
                          ) {
                            console.log("aaavv", "aa");
                            arrcc[a + 2] =
                              arrcc[a + 2] + parseInt(resData[j].fjeDef001);
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrcc[arrcc.length] = hol[key];
                          arrcc[arrcc.length] = item.quyu;
                          arrcc[arrcc.length] = parseInt(resData[j].fjeDef001);
                        }
                        console.log("aaacc", arrcc);
                      }
                      //占比计算
                      if ("占比" === holidayRow[key]) {
                        cc = 0;
                        item[key] = resData[j].fzbDef001;

                        for (let a = 0; a <= arrdd.length; a = a + 3) {
                          // console.log(
                          //   "acb",
                          //   arraa[a] === hol[key] && arraa[a + 1] === item.quyu
                          // );

                          if (
                            arrdd[a] === hol[key] &&
                            arrdd[a + 1] === item.quyu
                          ) {
                            console.log("aaavv", "aa");
                            arrdd[a + 2] =
                              arrdd[a + 2] + parseInt(resData[j].fzbDef001);
                            cc = 1;
                          }
                          // console.log("acb", arraa[a]);
                          // console.log("acb", hol[key]);
                          // console.log("acbd", arraa[a + 1]);
                        }
                        if (cc === 0) {
                          arrdd[arrdd.length] = hol[key];
                          arrdd[arrdd.length] = item.quyu;
                          arrdd[arrdd.length] = parseInt(resData[j].fzbDef001);
                        }
                        console.log("arrdd", arrdd);
                      }
                    }
                  }
                }
              }
            });
            // 合计计算
            this.bodyData.forEach(item => {
              for (let key in holidayRow) {
                for (let j = 0; j < resData.length; j++) {
                  if (item.quyu === "合计") {
                    if ("店数" === holidayRow[key]) {
                      item[key] = 1;
                    }
                    if ("店均值" === holidayRow[key]) {
                      item[key] = 1;
                    }
                    if ("金额" === holidayRow[key]) {
                      item[key] = 1;
                    }
                    if ("占比" === holidayRow[key]) {
                      item[key] = 1;
                    }
                  }
                }
              }
            });

            this.bodyData.forEach(item => {
              if (item.yeTai === "小计") {
                for (let key in holidayRow) {
                  for (let key2 in hol) {
                    //店数小计
                    for (let i = 0; i < arraa.length; i = i + 3) {
                      if (
                        "店数" === holidayRow[key2] &&
                        arraa[i + 1] === item.quyu &&
                        hol[key2] === arraa[i]
                      ) {
                        item[key2] = arraa[i + 2];
                      }
                    }
                    //店均额小计
                    for (let i = 0; i < arrbb.length; i = i + 3) {
                      if (
                        "店均值" === holidayRow[key2] &&
                        arrbb[i + 1] === item.quyu &&
                        hol[key2] === arrbb[i]
                      ) {
                        item[key2] = arrbb[i + 2];
                      }
                    }
                    //金额
                    for (let i = 0; i < arrcc.length; i = i + 3) {
                      if (
                        "金额" === holidayRow[key2] &&
                        arrcc[i + 1] === item.quyu &&
                        hol[key2] === arrcc[i]
                      ) {
                        item[key2] = arrcc[i + 2];
                      }
                    }
                    //占比
                    for (let i = 0; i < arrdd.length; i = i + 3) {
                      if (
                        "占比" === holidayRow[key2] &&
                        arrdd[i + 1] === item.quyu &&
                        hol[key2] === arrdd[i]
                      ) {
                        item[key2] = arrdd[i + 2];
                      }
                    }
                  }
                }
              }
            });
            // this.bodyData.forEach(item => {
            //   for (let key in holidayRow) {
            //     // for (let j = 0; j < resData.length; j++) {
            //     if (item.yeTai === "小计") {
            //       for (let i = 0; i < arraa.length; i = i + 3) {
            //         let zz = 0;
            //         for (let key2 in hol) {
            //           if (hol[key2] !== "区域" && hol[key2] !== "业态") {
            //             //console.log("小计", hol[key2] === arraa[i]);
            //             // console.log("小计", hol[key2]);
            //             // console.log("小计", arraa[i]);
            //             if (
            //               "店数" === holidayRow[key] &&
            //               arraa[i + 1] === item.quyu &&
            //               hol[key2] === arraa[i]
            //             ) {
            //               console.log("小计", hol[key2]);
            //               console.log("小计", arraa[i]);
            //               console.log("itemaaa", arraa[i + 2]);
            //               item[key] = arraa[i + 2];
            //             }
            //           }

            //         }

            //         if ("店均值" === holidayRow[key]) {
            //           item[key] = 1;
            //         }
            //         if ("金额" === holidayRow[key]) {
            //           item[key] = 1;
            //         }
            //         if ("占比" === holidayRow[key]) {
            //           item[key] = 1;
            //         }
            //       }
            //       //}
            //     }
            //   }
            // });
            let a = 0;

            //实际子类集合
            // const childCategoryArrOfCategory1 = nianFen.filter(
            //   childCategoryItem =>
            //     childCategoryItem.fssDef001 === yeWu[0].objectId
            // );
            // //计划子类集合
            // const childCategoryArrOfCategory2 = nianFen.filter(
            //   childCategoryItem =>
            //     childCategoryItem.fssDef001 === yeWu[1].objectId
            // );

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
                rowspan: len,
                colspan: 1
              }
            ];
          });
        }
      }
    },

    getCellStyle() {
      //console.log("table", this.table);
      let cellStyleArr = [];
      for (let rowIndex = 0; rowIndex < 2; rowIndex++) {
        for (let colIndex = 0; colIndex < 1000; colIndex++) {
          cellStyleArr.push({
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#2498d1";
              TD.innerHTML = value;
              return TD.innerHTML;
            }
          });
        }
      }
      for (let rowIndex = 0; rowIndex < 1000; rowIndex++) {
        for (let colIndex = 0; colIndex < 2; colIndex++) {
          cellStyleArr.push({
            row: rowIndex,
            col: colIndex,
            renderer(wot, TD, row, col, prop, value) {
              TD.style.background = "#f7f7f7";
              TD.innerHTML = value;
              return TD.innerHTML;
            }
          });
        }
      }

      return cellStyleArr;
    },

    async getBusinessObjectData() {
      return DsUtils.get(
        //  `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
        `http://192.168.2.218:8180/businessobject/v2/${this.apiName}`
      ).then(res => res.data.list);
    },

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

    getSelectOptions() {
      let url = `http://192.168.2.218:8180/metadata/tpBoZkjdef001/selectDisplayData`;
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

    async onSelectChange(value) {
      // this.selectedValue = value;
      // this.resData = await this.getBusinessObjectData();
      // await this.getBodyData();
      // this.tableData = [...this.headerData, ...this.bodyData];
      // this.table.updateSettings({
      //   data: this.tableData
      // });
    },

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
    }
  },

  async connectedCallback() {
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
    console.info("aaa");
    await this.getBodyData();
    this.tableData = [...this.headerData, ...this.bodyData];
    let that = this;

    //解决多维表触发change事件后，宽度缩窄的问题
    const container = this.$refs.ynHandsontable;
    const tableWrapper = this.$refs.tableWrapper;
    // let colWidths =
    //   tableWrapper.clientWidth / Object.keys(this.tableData[0]).length;
    let colWidths = 100;
    //利用handsontable生成多维表
    this.table = new YnHandsontable(container, {
      data: cloneDeep(this.tableData), //这里必须复制一份tableData，因为handsontable会把合并单元格对应的数据改为null
      autoColumnSize: true,
      colWidths,
      //      columnSorting: {
      //   sortEmptyCells: true,
      //   initialConfig: {
      //     column: 2,
      //     sortOrder: 'asc'
      //   }
      // },
      colHeaders: true,
      cell: that.getCellStyle(),
      className: "htCenter htMiddle",
      manualColumnMove: true,
      hiddenRows: {
        // specify rows hidden by default
        rows: [3, 18],
        indicators: true,
        copyPasteEnabled: false
      },

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
    // let a = 0;
    // this.tableNum.forEach(item => {
    //   let index = item.i;
    //   this.table.alter("remove_row", index - a + 2, 1);
    //   a++;
    // });
    // this.table.alter("remove_row", 5, 1);
    // this.table.alter("remove_row", 5, 1);
    // this.table.alter("remove_row", 5, 1);

    //解决生成的多维表的高度问题
    this.$refs.tableWrapper.style.height =
      document.querySelector(".wtHider").offsetHeight + "px";
  },

  renderedCallback() {}
};
