/* eslint-disable no-unused-vars */
import basicOptions from "yn-p1-designer/libs/views/applications/p1_designer/components/yn-designer-component/index.js";
delete basicOptions.create;
import YnHandsontable from "yn-handsontable";
import "yn-handsontable/dist/handsontable.full.css";
import "yn-p1/libs/components/yn-button/";
import DsUtils from "yn-p1/libs/utils/DsUtils";
import UiUtils from "yn-p1/libs/utils/UiUtils";
import cloneDeep from "lodash/cloneDeep";

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
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoNfdef002`
            ),
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoZqydef001`
            )
          ]).then(([year, sonKoJian]) => {
            // eslint-disable-next-line no-console
            console.info("seasonRes", year);
            // eslint-disable-next-line no-console
            console.info("holidayRes", sonKoJian);
            yearArr = year.data.list;
            this.yearData = year.data.list;
            this.usefulData.yearArr = yearArr;
            sonKoJianArr = sonKoJian.data.list;
            this.usefulData.sonKoJianArr = sonKoJianArr;

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
            let num2 = sonKoJianArr[0].fzdDef001;
            let num3 = 0;
            //let num4 = sonKoJianArr[0].fzdDef001;

            //console.info("sss", num2);
            this.headerData.forEach((item, index) => {
              for (let j = 0; j < yearArr.length; j++) {
                for (let i = 0; i < sonKoJianArr.length; i++) {
                  let son = sonKoJianArr[i];
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
    async getBodyData() {
      switch (this.apiName) {
        case "tpBoYtndtdef001": {
          let quyuArr, yeTArr, yewuArr, nianFenArr, ziKongArr;
          let resData = await this.getBusinessObjectData();
          console.log("res", this.getBusinessObjectData());
          return Promise.all([
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoQydef003`
            ), //区域业务对象
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoYtdef002`
            ), //业态业务对象
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/${this.apiName}`
            ), //业务推移业务对象
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoNfdef002`
            ), //年份业务对象
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoZqydef001`
            ) //子空间
            //categoryArrRes 改 quYu childCategoryArrRes 改 yeT
          ]).then(([quYu, yeT, yeWuDuiXiang, nianFen, ziKong]) => {
            console.info("aaaa", quYu);
            console.log("bb", yeT);
            console.log("yewu", yeWuDuiXiang);
            console.info("ziKong", ziKong);
            ziKongArr = ziKong.data.list;
            nianFenArr = nianFen.data.list;
            yewuArr = yeWuDuiXiang.data.list;
            quyuArr = quYu.data.list;
            this.usefulData.quyuArr = quyuArr;
            yeTArr = yeT.data.list;
            this.usefulData.yeTArr = yeTArr;

            this.bodyData = [];
            yewuArr.forEach(yewuduiItem => {
              quyuArr.forEach(quyuItem => {
                yeTArr.forEach(yeTaiItem => {
                  nianFenArr.forEach(ynianFenItem => {
                    ziKongArr.forEach(ziKongItem => {
                      // if (childCategoryItem.fssDef001 === categoryItem.objectId)
                      if (
                        yewuduiItem.fqyDef001 === quyuItem.objectId &&
                        yewuduiItem.fytDef001 === yeTaiItem.objectId &&
                        yewuduiItem.fnfDef001 === ynianFenItem.objectId &&
                        yewuduiItem.fzqDef001 === ziKongItem.objectId
                      ) {
                        this.bodyData.push({
                          shop: "业态年度推移",
                          quyu: quyuItem.name,
                          yeTai: yeTaiItem.name,
                          quyuObjectId: quyuItem.objectId,
                          nianFen: ynianFenItem.name,
                          ziKong: ziKongItem,
                          dianShu: ziKongItem.fdsDef001,
                          dianJunZhi: ziKongItem.fdjDef001,
                          jinE: ziKongItem.fjeDef001,
                          zhanB: ziKongItem.fzbDef001,
                          nianFenObjectId: ynianFenItem.objectId
                          //yeTaiObjectId: yeTaiItem.objectId
                        });
                      }
                    });
                  });
                });
              });
            });

            //let holidayRow = this.headerData[this.headerData.length - 1];
            console.info(("header", this.headerData.length - 1));
            let holidayRow = this.headerData[1];
            console.log("bijiao1", this.bodyData);
            console.log("bijiao2", resData);
            let index = 0;
            let index2 = 0;
            let a = false;
            let bodyit = [];
            this.body = this.bodyData;
            let tab = new Array();
            this.bodyData.forEach(item => {
              index = 0;
              this.body.forEach(itembbb => {
                console.log("quyu1", index > index2);
                console.log("quyu1", index);
                console.log("quyu1", index2);
                console.log("quyu1", itembbb.quyu === item.quyu);
                console.log("quyu1", itembbb.yeTai);
                console.log("quyu1", item.yeTai);
                console.log("quyu1", itembbb.quyu);
                console.log("quyu1", item.quyu);
                console.log("quyu2", itembbb.yeTai === item.yeTai);
                if (
                  index > index2 &&
                  itembbb.quyu === item.quyu &&
                  itembbb.yeTai === item.yeTai
                ) {
                  bodyit.push(item);
                  // console.log("quyu1", index);
                  // console.log("quyu1", index2);
                  // console.log("quyu1", itembbb.yeTai);
                  // console.log("quyu1", item.yeTai);
                  // parseInt(itemBody.nianFen)
                  if (item.nianFen < itembbb.nianFen) {
                    this.tableNum.push({ i: index });
                  }
                  //tab[i] = index;
                  i = i + 1;
                  console.log("tableNum", this.tableNum);

                  // for (let dex = 0; bodyit < bodyit.length; dex++) {
                  //   // if (
                  //   //   bodyit.quyu === item.quyu &&
                  //   //   bodyit.yeTai === item.yeTai
                  //   // ) {
                  //   console.log("index", index);
                  //   a = true;
                  //   // } else {
                  //   //   a = true;
                  //   // }
                  // }
                  // if (a) {
                  //   this.tableNum[i] = index;
                  //   i += 1;
                  //   console.log("tableNum", this.tableNum);
                  // }
                  //console.log("bodyit", bodyit);
                }

                index++;
              });
              index2 = index2 + 1;
            });

            let arr = 0;
            let i = 0;
            let z = 0;

            this.bodyData.forEach(item => {
              console.log("body", this.bodyData);
              resData.forEach(row => {
                let num = 0;
                arr = 0;
                console.log("C", row);
                let quyu = row.fqyDef001;
                let yeTai = row.fytDef001;
                let nianFen = row.fnfDef001;
                let yetaiValue = item.yeTai;
                let quyuValue = item.quyu;
                let nianFenValue = item.nianFen;
                let dianShu = item.dianShu;
                let dianJunZhi = item.dianJunZhi;
                let jinE = item.jinE;
                let zhanB = item.zhanB;
                let nianFenObjectId = item.nianFenObjectId;

                // let holiday = row.fjrDef001.name;
                // let value = row.fzDef001;

                //console.log("bijiao4", yeTai === item.yeTaiObjectId);
                if (
                  quyu === item.quyuObjectId
                  //&&
                  //yeTai === item.yeTaiObjectId
                  // category === item.category &&
                  // childCategory === item.childCategory
                ) {
                  let ind = 0;
                  for (let key in holidayRow) {
                    //if (quyu === item.quyuObjectId) {
                    if (key === "category") {
                      item[key] = quyuValue;
                    } else if (key === "childCategory") {
                      item[key] = yetaiValue;
                    } else {
                      z += 1;

                      if (
                        nianFen === nianFenObjectId &&
                        this.yearData[arr].name === nianFenValue
                      ) {
                        item["key" + num] = dianShu;
                        num += 1;
                        item["key" + num] = dianJunZhi;
                        num += 1;
                        item["key" + num] = jinE;
                        num += 1;
                        item["key" + num] = zhanB;
                        num += 1;

                        this.bodyData.forEach(itemBody => {
                          //console.log("cccc", itemBody);

                          //console.log("c", c);
                          let quyu2 = itemBody.quyu;
                          let yetai2 = itemBody.yeTai;
                          if (
                            itemBody.nianFen !== this.yearData[arr].name &&
                            quyu2 === quyuValue &&
                            yetai2 === yetaiValue
                          ) {
                            if (
                              !(
                                item.dianShu === itemBody.dianShu &&
                                item.dianJunZhi === itemBody.dianJunZhi &&
                                item.jinE === itemBody.jinE &&
                                item.zhanB === itemBody.zhanB
                              )
                            ) {
                              // console.log("bbb1", this.yearData[arr].name);
                              // console.log("bbb2", itemBody.nianFen);

                              // item["key" + num] = itemBody.dianShu;
                              // num += 1;
                              // item["key" + num] = itemBody.dianJunZhi;
                              // num += 1;
                              // item["key" + num] = itemBody.jinE;
                              // num += 1;
                              // item["key" + num] = itemBody.zhanB;
                              // num += 1;

                              let a =
                                // parseInt(itemBody.nianFen) -
                                // parseInt(this.yearData[arr].name);
                                parseInt(itemBody.nianFen) - 2019;
                              if (a > 0) {
                                item["key" + (a * 4 + 0)] = itemBody.dianShu;
                                num += 1;
                                item["key" + (a * 4 + 1)] = itemBody.dianJunZhi;
                                num += 1;
                                item["key" + (a * 4 + 2)] = itemBody.jinE;
                                num += 1;
                                item["key" + (a * 4 + 3)] = itemBody.zhanB;
                                num += 1;
                              } else if ((a = 0)) {
                                console.log("aaaaaaaaa", a * 4 + num);
                                item["key" + 0] = itemBody.dianShu;
                                num += 1;
                                item["key" + 1] = itemBody.dianJunZhi;
                                num += 1;
                                item["key" + 2] = itemBody.jinE;
                                num += 1;
                                item["key" + 3] = itemBody.zhanB;
                                num += 1;
                              }
                              // let j = 0;
                              // let index = this.bodyData.findIndex(itemaaa => {
                              //   if (
                              //     itemaaa.nianFen !== this.yearData[arr].name &&
                              //     itemaaa.quyu === quyuValue &&
                              //     itemaaa.yeTai === yetaiValue &&
                              //     j > ind
                              //   ) {
                              //     return true;
                              //   }
                              //   j++;
                              //   return false;
                              // });
                              // if (index !== -1) {
                              //   this.tableNum[i] = index;
                              //   i += 1;
                              //   console.log("tableNum", this.tableNum);
                              // }
                              // console.log("index", index);
                              //this.bodyData.splice(index - 1, 1);
                            }
                          }
                        });

                        // console.log("num33", num);
                        if (arr < this.yearData.length - 1) {
                          arr++;
                        }
                      } else {
                        if (arr < this.yearData.length - 1) {
                          arr++;

                          num += 4;
                        }
                      }
                    }
                    ind++;
                    console.log("indexaaa", ind);
                  }
                }

                // let index = this.bodyData.findIndex(itemaaa => {
                //   if (
                //     itemaaa.nianFen !== this.yearData[arr].name &&
                //     itemaaa.quyu === quyuValue &&
                //     itemaaa.yeTai === yetaiValue
                //   ) {
                //     return true;
                //   }
                //   return false;
                // });
                // if (index !== -1) {
                //   this.tableNum[i] = index;
                //   i += 1;
                //   console.log("tableNum", this.tableNum);
                // }
              });
            });

            // //实际子类集合
            // const childCategoryArrOfCategory1 = yeTArr.filter(
            //   childCategoryItem =>
            //     childCategoryItem.fssDef001 === quyuArr[0].objectId
            // );
            // //计划子类集合
            // const childCategoryArrOfCategory2 = yeTArr.filter(
            //   childCategoryItem =>
            //     childCategoryItem.fssDef001 === quYu[1].objectId
            // );

            this.bodyMergeCells = [
              {
                row: 3,
                col: 0,
                rowspan: 1,
                // childCategoryArrOfCategory1.length +
                // childCategoryArrOfCategory2.length,
                colspan: 1
              },
              {
                row: 3,
                col: 1,
                rowspan: 1,
                //  childCategoryArrOfCategory1.length,
                colspan: 1
              },
              {
                row: 3,
                //childCategoryArrOfCategory1.length,
                col: 1,
                rowspan: 1,
                //  childCategoryArrOfCategory2.length,
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
              TD.style.background = "#08a4ff";
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
      let rowData = this.tableData[rowIndex]; //被修改的那一行的数据

      let targetRowInResData = this.resData.find(row => {
        let category = row.flbDef001.name;
        let childCategory = row.fzlDef001.name;
        let holiday = row.fjrDef001.name;

        return (
          category === rowData.category &&
          childCategory === rowData.childCategory &&
          holiday === this.usefulData.holidayMap[key]
        );
      });

      if (targetRowInResData) {
        targetRowInResData.fzDef001 = newValue;
      } else {
        //没找到说明需要insert数据
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
      this.selectedValue = value;
      this.resData = await this.getBusinessObjectData();
      await this.getBodyData();
      this.tableData = [...this.headerData, ...this.bodyData];
      this.table.updateSettings({
        data: this.tableData
      });
    },

    onSaveClick() {
      let promiseArr = [];
      //已有值update
      let url = `http://192.168.2.218:8180/metadata/tpBoZkjdef001`;
      let params = this.resData.map(row => {
        let { objectId, fzDef001 } = row;
        return {
          objectId,
          fzDef001
        };
      });
      promiseArr.push(DsUtils.post(url, params));

      //插入值
      let postBody = [];
      if (
        this.usefulData.insertDataArr &&
        this.usefulData.insertDataArr.length > 0
      ) {
        this.usefulData.insertDataArr.forEach(({ rowIndex, key, value }) => {
          let rowData = this.tableData[rowIndex];
          let { category, childCategory } = rowData;
          let holiday = this.usefulData.holidayMap[key];

          let categoryItem = this.usefulData.categoryArr.find(
            item => category === item.name
          );
          let childCategoryItem = this.usefulData.childCategoryArr.find(
            item =>
              item.name === childCategory &&
              item.fssDef001 === categoryItem.objectId
          );

          let holidayItem = this.usefulData.holidayArr.find(
            item => item.name === holiday
          );

          let seasonItem = this.usefulData.seasonArr.find(
            item => item.objectId === holidayItem.fjdDef001
          );
          // fnDef001;
          postBody.push({
            fnDef001: this.selectedValue, //年份
            flbDef001: categoryItem.objectId,
            fzlDef001: childCategoryItem.objectId,
            fjrDef001: holidayItem.objectId,
            fjdDef001: seasonItem.objectId,
            fzDef001: value
          });
        });
      }
      promiseArr.push(
        DsUtils.post(
          `http://192.168.2.218:8180/metadata/tpBoZkjdef001/batchInsertBoData`,
          postBody
        )
      );
      Promise.all(promiseArr).then(() => {
        UiUtils.successMessage("保存成功");
      });
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
    let a = 0;
    this.tableNum.forEach(item => {
      let index = item.i;
      this.table.alter("remove_row", index - a + 2, 1);
      a++;
    });
    // this.table.alter("remove_row", 5, 1);
    // this.table.alter("remove_row", 5, 1);
    // this.table.alter("remove_row", 5, 1);

    //解决生成的多维表的高度问题
    this.$refs.tableWrapper.style.height =
      document.querySelector(".wtHider").offsetHeight + "px";
  },

  renderedCallback() {}
};
