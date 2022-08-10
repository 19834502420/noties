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
  tpBoNdywdef001: {
    name: "销售表",
    fields: [
      {
        code: "fytDef001",
        fieldTitle: "业态",
        masterDataName: "masterDataObject020"
      },
      {
        code: "fqyDef001",
        fieldTitle: "区域",
        masterDataName: "masterDataObject016"
      },
      {
        code: "fnfDef001",
        fieldTitle: "年",
        masterDataName: "masterDataObject018"
      },
      {
        code: "fzkDef001",
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
      headerData: null,
      bodyData: null,
      tableData: null,
      resData: null,
      selectOptions: null,
      selectedValue: "11ed01185d5d1e73be3a1daa372f20e3",
      headerMergeCells: [],
      bodyMergeCells: [],
      usefulData: {},
      dataYear: {},
      yearDa: "往年"
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
        case "tpBoNdywdef001": {
          let seasonArr; //季度
          let holidayArr; //节日
          return Promise.all([
            // DsUtils.get(
            //   `http://192.168.2.218:8180/metadata/masterDataObject019`
            // tpBoZkjdef001 tpBoNdywdef001),
            DsUtils.get(`http://192.168.2.218:8180/metadata/tpBoZkjdef001`)
          ]).then(holidayRes => {
            console.info(
              "holidayRes-----------------------",
              holidayRes[0].data.items
            );
            console.info("holidayRes-----------------------", holidayRes);
            //seasonArr = seasonRes.data.items;
            seasonArr = ["a", "b"];
            this.usefulData.seasonArr = seasonArr;
            holidayArr = holidayRes[0].data.items;
            //holidayArr = ["a", "b"];
            this.usefulData.holidayArr = holidayArr;

            let headerDataItem = {
              shop: "区域",
              category: "业态"
              //childCategory: "业态ada"
            };
            //创建几行并且headerDataItem是其中的一横的元素
            this.headerData = [
              { ...headerDataItem },
              { ...headerDataItem }
              // ,
              // { ...headerDataItem }
            ];
            this.headerData.forEach((item, index) => {
              //("index---------", index);
              console.log("index---------", holidayArr);
              for (let i = 0; i < holidayArr.length; i++) {
                let holiday = holidayArr[i];
                if (index === 0) {
                  //表头第一行 年度
                  item["key" + i] = this.yearDa;
                } else if (index === 1) {
                  // //表头第二行 季度
                  // let seasonId = holiday.fjdDef001;
                  // let seasonIndex;
                  // seasonArr.forEach((season, idx) => {
                  //   if (season.objectId === seasonId) {
                  //     seasonIndex = idx;
                  //   }
                  // });
                  // item["key" + i] = seasonArr[seasonIndex].name;
                  item["key" + i] = holiday.name;
                  !this.usefulData.holidayMap &&
                    (this.usefulData.holidayMap = {});
                  this.usefulData.holidayMap["key" + i] = holiday.name;
                  console.info("userfulData-----------", this.usefulData);
                } else {
                  //表头第三行 节日
                  // item["key" + i] = holiday.name;
                  // !this.usefulData.holidayMap &&
                  //   (this.usefulData.holidayMap = {});
                  // this.usefulData.holidayMap["key" + i] = holiday.name;
                }
              }
            });

            //第一季节日集合
            const holidayArrOfSeason1 = holidayArr.filter(
              holiday => holiday.fjdDef001 === seasonArr[0].objectId
            );
            //第二季节日集合
            const holidayArrOfSeason2 = holidayArr.filter(
              holiday => holiday.fjdDef001 === seasonArr[1].objectId
            );
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
                colspan: holidayArr.length
              }, //年度
              {
                row: 0,
                col: 3,
                rowspan: 1,
                colspan: holidayArrOfSeason1.length
              }, //第一季度
              {
                row: 0,
                col: 3 + holidayArrOfSeason1.length,
                rowspan: 1,
                colspan: holidayArrOfSeason2.length
              }
            ];
          });
        }
      }
    },
    async getBodyData() {
      switch (this.apiName) {
        case "tpBoNdywdef001": {
          let categoryArr, childCategoryArr;
          let resData = await this.getBusinessObjectData();
          return Promise.all([
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoYtdef001?expand=reference&limit=100&offset=0`
            ),
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoNdywdef001?expand=reference&limit=100&offset=0`
            ),
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoZkjdef001?expand=reference&limit=100&offset=0`
            ),
            DsUtils.get(
              `http://192.168.2.218:8180/businessobject/v2/tpBoQydef001?expand=reference&limit=100&offset=0`
            )
          ]).then(([yeTai, categoryArrRes, childCategoryArrRes, cArr]) => {
            // console.info("业态", yeTai.data.list); //业态
            // console.info("年度业务", yeWu.data.list);
            // console.info("区域--------------------------", cArr); //区域
            // ("categoryArrRes----adadad", categoryArrRes.data.list); //年度
            // console.log("cheltegoryArrRes----", childCategoryArrRes.data.list); //子空间
            // console.log("cArr----", cArr.data.list);
            this.usefulData.cArr = cArr.data.list;
            cArr = cArr.data.list;
            categoryArr = categoryArrRes.data.list;
            this.usefulData.categoryArr = categoryArr;
            childCategoryArr = childCategoryArrRes.data.list;
            this.usefulData.childCategoryArr = childCategoryArr;
            this.bodyData = [];
            let arraynum = new Array();
            for (let index = 0; index < cArr.length; index++) {
              let lenth = 0;
              categoryArr.forEach(res => {
                // console.info("re.shop", res.fqyDef001.name);
                // console.info("re.shop", cArr[index].name);
                if (res.fqyDef001.name === cArr[index].name) {
                  lenth = lenth + 1;
                }
              });
              arraynum[index] = lenth;
            }

            var i = 0;
            var b = 1;
            var c = 0;
            categoryArr.forEach(categoryItem => {
              childCategoryArr.forEach(childCategoryItem => {
                if (
                  childCategoryItem.objectId ===
                    categoryItem.fzkDef001.objectId &&
                  (categoryItem.fnfDef001.name === this.yearDa ||
                    this.yearDa === "往年")
                ) {
                  console.info("id====================", categoryItem);
                  console.info(
                    "id====================",
                    categoryItem.fyeDef001.name
                  );
                  c++;
                  this.bodyData.push({
                    shop: cArr[i].name,
                    category: categoryItem.fyeDef001.name,
                    childCategory: childCategoryItem.name,
                    dianShu: categoryItem.fdsDef001,
                    mon: categoryItem.fjeDef001,
                    zanBi: categoryItem.fzbDef001,
                    junZhi: categoryItem.fdjDef001,
                    yeta: categoryItem.fyeDef001.name,
                    quYu: categoryItem.fqyDef001.name,
                    nianfen: categoryItem.fnfDef001.name
                  });
                  if (b === arraynum[i]) {
                    i += 1;
                    b = 0;
                  }
                  // console.log("arraunum-----", arraynum[i]);
                  // console.log("arraunum-----", b);
                  b++;
                }
              });
            });
            // console.info("headerData-----------", this.headerData);
            console.info("body------", this.bodyData);
            // console.info("array=====", arraynum);
            // console.info("resData------a", resData);
            let holidayRow = this.headerData[this.headerData.length - 1];
            // console.info("holedrow-----------", holidayRow);
            let arrayAjune = new Array();
            // let arrayAjine = new Array();
            let icr = 0;

            for (let index = 0; index < cArr.length; index++) {
              this.bodyData.forEach(item => {
                resData.forEach(row => {
                  let category = row.fyeDef001.name;
                  //let childCategory = row.fyeDef001.name;
                  let holiday = row.fyeDef001.name;
                  let dianShu = row.fdsDef001;
                  let mon = row.fjeDef001;
                  let zanBi = row.fzbDef001;
                  let junZhi = row.fdjDef001;
                  let value = row.fjeDef001;
                  let quYu = row.fqyDef001.name;
                  let yeta = row.fyeDef001.name;
                  let nianfen = row.fnfDef001.name;
                  console.info("row", row);
                  console.info("item", item);
                  if (
                    category === item.category &&
                    quYu === item.quYu
                    // childCategory === item.childCategory
                  ) {
                    for (let key in holidayRow) {
                      //业态
                      if ("业态" === holidayRow[key]) {
                        if (cArr[index].name === quYu) {
                          arrayAjune[icr] = yeta;
                          icr++;
                        }
                        //console.info("item---", item[key]);
                      }
                      //店数
                      if ("店数" === holidayRow[key]) {
                        if (cArr[index].name === quYu) {
                          arrayAjune[icr] = dianShu;
                          icr++;
                        }
                        //console.info("item---", item[key]);
                      }
                      //金额
                      if ("金额" === holidayRow[key])
                        if (cArr[index].name === quYu) {
                          arrayAjune[icr] = mon;
                          icr++;
                          // console.info(arrayAjune);
                          // console.info("item---", item[key]);
                        }
                      //店均额;
                      if ("店均额" === holidayRow[key]) {
                        if (cArr[index].name === quYu) {
                          arrayAjune[icr] = junZhi;
                          icr++;
                        }
                      }
                      if ("占比" === holidayRow[key]) {
                        if (cArr[index].name === quYu) {
                          arrayAjune[icr] = zanBi;
                          icr++;
                          console.info(arrayAjune);
                          // item[key] = junZhi;
                          //console.info("aaa", key);
                          break;
                        }
                      }
                    }
                  }
                });
              });
            }

            let irr = 0;
            //for (let index = 0; index < cArr.length; index++) {
            this.bodyData.forEach(item => {
              //console.log("item-----", item);

              resData.forEach(row => {
                let category = row.fyeDef001.name;
                let quYu = row.fqyDef001.name;
                // let yeta = row.fyeDef001.name;
                // console.info("aaaaaaaaaaaaaaaaaa", quYu);
                //console.log("row", row);
                //console.info("resData------b", this);
                if (
                  category === item.category &&
                  quYu === item.quYu
                  // childCategory === item.childCategory
                ) {
                  //for (let index = 0; index < cArr.length; index++) {

                  // for (let key in holidayRow) {
                  //   if ("店均额" === holidayRow[key] && "a" === quYu) {
                  //     arrayA[icr] = junZhi;
                  //     icr++;
                  //     console.info(arrayA);
                  //     // console.info("item---", item[key]);
                  //   }
                  // }
                  // for (let index = 0; index < cArr.length; index++) {
                  for (let key in holidayRow) {
                    if (irr <= arrayAjune.length) {
                      if ("业态" === holidayRow[key]) {
                        //业态
                        item[key] = arrayAjune[irr];
                        irr = irr + 1;
                        console.info("irri", irr);
                      }
                      //金额
                      if ("店数" === holidayRow[key]) {
                        item[key] = arrayAjune[irr];
                        irr = irr + 1;
                        console.info("irri", irr);
                      }
                      if ("金额" === holidayRow[key]) {
                        item[key] = arrayAjune[irr];
                        irr = irr + 1;
                        console.info("irri", irr);
                      }
                      //店均额;
                      if ("店均额" === holidayRow[key]) {
                        item[key] = arrayAjune[irr];
                        irr = irr + 1;
                        console.info("irri", irr);
                      }
                      // if ("店均额" === holidayRow[key]) {
                      //   item[key] = arrayAjune[irr - 1] / arrayAjune[irr - 2];
                      //   irr = irr + 1;
                      //   console.info("irri", irr);
                      // }
                      if ("占比" === holidayRow[key]) {
                        item[key] = arrayAjune[irr];
                        irr = irr + 1;
                        console.info("irri", irr);
                        console.info("11111111", arrayAjune[irr - 6]);
                      }
                    }
                  }

                  console.log("aaaaaa", irr - 1);
                  console.log("aaaaaa", arrayAjune[irr - 1]);
                  //}
                  // console.log(a.push);
                  // for (let key in holidayRow) {
                  //   if ("店均额" === holidayRow[key]) {
                  //     arrayA[icr] = junZhi;
                  //     icr++;
                  //     console.info(arrayA);
                  //     // console.info("item---", item[key]);
                  //   }
                  // }
                  // for (let key in holidayRow) {
                  //   if ("店数" === holidayRow[key]) {
                  //     item[key] = dianShu;
                  //     //console.info("item---", item[key]);
                  //   }
                  // }
                  // for (let key in holidayRow) {
                  //   if ("金额" === holidayRow[key]) {
                  //     item[key] = mon;
                  //     console.info("item---", item[key]);
                  //   }
                  // }
                  // for (let key in holidayRow) {
                  //   if ("占比" === holidayRow[key]) {
                  //     item[key] = zanBi;
                  //     //("item---", item[key]);
                  //   }
                  // }
                }
              });
            });
            //}

            //实际子类集合
            const childCategoryArrOfCategory1 = childCategoryArr.filter(
              childCategoryItem =>
                childCategoryItem.fyeDef001 === categoryArr[0].objectId
            );
            //计划子类集合
            const childCategoryArrOfCategory2 = childCategoryArr.filter(
              childCategoryItem =>
                childCategoryItem.fyeDef001 === categoryArr[1].objectId
            );

            this.bodyMergeCells = [
              {
                row: 2,
                col: 0,
                rowspan: arraynum[0],
                colspan: 1
              },
              {
                row: 2 + arraynum[0],
                col: 0,
                rowspan: arraynum[1],
                colspan: 1
              },
              {
                row: 2 + arraynum[0] + arraynum[1],
                col: 0,
                rowspan: arraynum[2],
                // childCategoryArrOfCategory1.length +
                // childCategoryArrOfCategory2.length,
                colspan: 1
              },
              {
                row: 3,
                col: 1,
                rowspan: childCategoryArrOfCategory1.length,
                colspan: 1
              },
              {
                row: 3 + childCategoryArrOfCategory1.length,
                col: 1,
                rowspan: childCategoryArrOfCategory2.length,
                colspan: 1
              }
            ];
          });
        }
      }
    },

    getCellStyle() {
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
        //`http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnfDef001='${this.selectedValue}'&limit=100&offset=0``http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&query=fnfDef001='${this.selectedValue}'&limit=100&offset=0`
        `http://192.168.2.218:8180/businessobject/v2/${this.apiName}?expand=reference&limit=100&offset=0`
      ).then(res => {
        //("res----", res.data.list);
        return res.data.list;
      });
    },

    setDataModeValue(rowIndex, key, newValue) {
      let rowData = this.tableData[rowIndex]; //被修改的那一行的数据
      console.log("index2222", this.tableData);
      console.log("index----", rowIndex);
      console.log("index----bbb", this.tableData[rowIndex]);
      // console.log("tablebbb", this.tableData[rowIndex]);
      // console.info("rowupdata111", rowData);
      // console.info("rowupdata222", newValue);
      // console.info("rowupdata333", this.resData);
      let jine;
      let dianshu;
      let juned;
      let zhanbi;
      let targetRowInResData = this.resData.find(row => {
        jine = row.fjeDef001;
        dianshu = row.fdsDef001;
        juned = row.fdjDef001;
        zhanbi = row.fzbDef001;
        // console.info("rowup", rowData.mon);
        // console.info("rowupbbb", row);
        // console.info("rowup---", rowData);
        // console.info("rowup---", jine);
        // console.info("rowup---", dianshu);
        // console.info("rowup---", juned);
        // let childCategory = row.fyeDef001;
        // let holiday = row.fyeDef001.name;
        // if (jine === row.fjeDef001) {
        //   l1 = true;
        // }
        // console.info("rowup---", dianshu === rowData.dianShu);
        // console.info("rowupaaaa", rowData);
        // console.info("rowup---row", row);
        // console.info("rowup---", jine);
        // console.info("rowup---", rowData.mon);
        // console.info("rowup---", dianshu === rowData.dianShu);
        // console.info("rowup---", jine === rowData.mon);
        // console.info("rowup---", juned === rowData.junZhi);
        // console.info("rowup---", zhanbi === rowData.zanBi);
        // console.info("up", juned);
        // console.info("up", rowData.junZhi);

        return (
          jine === rowData.mon ||
          juned === rowData.junZhi ||
          dianshu === rowData.dianShu ||
          zhanbi === rowData.zanBi
        );
        // &&
        // childCategory === rowData.childCategory &&
        // holiday === this.usefulData.holidayMap[key]
      });
      console.log("rowup---aaaaa", targetRowInResData);
      if (targetRowInResData) {
        if (key === "key1") {
          //targetRowInResData.fjeDef001 = parseInt(newValue);
          targetRowInResData.fjeDef001 = newValue;
        }
        if (key === "key2") {
          targetRowInResData.fdjDef001 = newValue;
        }
        if (key === "key0") {
          // targetRowInResData.fdsDef001 = parseInt(newValue);
          targetRowInResData.fdsDef001 = newValue;
        }
        if (key === "key3") {
          targetRowInResData.fzbDef001 = newValue;
        }
        // console.log("rowup===", targetRowInResData);
        // console.log("rowup===", targetRowInResData.fjeDef001);
      }
      //else {
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
      // }
    },

    getSelectOptions() {
      let url = `http://192.168.2.218:8180/metadata/tpBoNfdef001/selectDisplayData`;
      DsUtils.post(url, {
        originalFieldCode: "fnfDef001",
        limit: 20,
        fields: "name"
      }).then(res => {
        console.log("res====adasdadasdsd", res.data);
        let arr = new Array();
        arr = res.data;
        this.selectOptions = res.data.items.map(item => ({
          label: item.name,
          value: item.objectId
        }));
        this.dataYear = res.data.items;
        console.info("yearDa", this.dataYear);
        // console.info("yearDa", this.selectOptions);
        // console.info("yearDa", this.selectOptions.label);
      });
    },

    async onSelectChange(value) {
      //this.yearDa = "2018";
      //alert(this.yearDa);
      console.info("value", value);
      //console.info("value", name);

      //根据指定查询条件修改表格
      this.dataYear.forEach(item => {
        if (item.objectId === value) {
          this.yearDa = item.name;
        }
        //console.info("item", item);
      });

      this.getHeaderData();
      this.selectedValue = value;
      this.resData = await this.getBusinessObjectData();
      await this.getBodyData();
      this.tableData = [...this.headerData, ...this.bodyData];
      this.table.updateSettings({
        data: this.tableData
      });
      //console.log("table", this.table);
    },

    onSaveClick() {
      let promiseArr = [];
      //修改
      let url = `http://192.168.2.218:8180/businessobject/v2/${this.apiName}/batchUpdateBoDataById`;
      let params = this.resData.map(row => {
        let { objectId, fdsDef001, fjeDef001, fdjDef001, fzbDef001 } = row;
        //alert("row");
        console.info("row?", row);
        return {
          objectId,
          fdsDef001,
          fjeDef001,
          fdjDef001,
          fzbDef001
        };
      });
      console.info("param", params);
      let a = promiseArr.push(DsUtils.patch(url, params));
      let b = Promise.all(promiseArr).then(() => {
        UiUtils.successMessage("保存成功");
      });
      console.log("pa", params);

      // let promiseArr = [];
      // //已有值update
      // let url = `http://192.168.2.218:8180/businessobject/v2/${this.apiName}`;
      // let params = this.resData.map(row => {
      //   let { objectId, fdsDef001, fjeDef001, fdjDef001, fzbDef001 } = row;
      //   //alert("row");
      //   console.info("row?", row);
      //   return {
      //     objectId,
      //     fdsDef001,
      //     fjeDef001,
      //     fdjDef001,
      //     fzbDef001
      //   };
      // });
      // console.info("param", params);
      // promiseArr.push(DsUtils.post(url, params));

      //插入值
      // let postBody = [];
      // if (
      //   // this.usefulData.insertDataArr &&
      //   // this.usefulData.insertDataArr.length > 0
      //   true
      // ) {
      //   this.usefulData.insertDataArr.forEach(({ rowIndex, key, value }) => {
      //     // let rowData = this.tableData[rowIndex];
      //     // let { category, childCategory } = rowData;
      //     // let holiday = this.usefulData.holidayMap[key];

      //     // let categoryItem = this.usefulData.categoryArr.find(
      //     //   item => category === item.name
      //     // );
      //     // let childCategoryItem = this.usefulData.childCategoryArr.find(
      //     //   item =>
      //     //     item.name === childCategory &&
      //     //     item.fssDef001 === categoryItem.objectId
      //     // );

      //     // let holidayItem = this.usefulData.holidayArr.find(
      //     //   item => item.name === holiday
      //     // );

      //     // let seasonItem = this.usefulData.seasonArr.find(
      //     //   item => item.objectId === holidayItem.fjdDef001
      //     // );
      //     // fnDef001;
      //     postBody.push({
      //       // fnDef001: this.selectedValue, //年份
      //       // flbDef001: categoryItem.objectId,
      //       // fzlDef001: childCategoryItem.objectId,
      //       // fjrDef001: holidayItem.objectId,
      //       // fjdDef001: seasonItem.objectId,
      //       // fzDef001: value
      //       fnfDef001: "this.selectedValue2", //年份
      //       fqyDef001: a,
      //       fyeDef001: 1,
      //       fdsDef001: 1,
      //       fdjDef001: 1,
      //       fjeDef001: 5
      //     });
      //     console.info("post", postBody);
      //   });
      // }
      // console.info("post", postBody);
      // promiseArr.push(
      //   DsUtils.post(
      //     `http://192.168.2.218:8180/businessobject/v2/${this.apiName}/batchInsertBoData`,
      //     postBody
      //   )
      // );
      // Promise.all(promiseArr).then(() => {
      //   UiUtils.successMessage("保存成功aaa");
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
    // if (!this.isRunTime) {
    // this.tableData = templateTableData;
    // } else {
    this.resData = await this.getBusinessObjectData();
    await this.getHeaderData();
    await this.getBodyData();
    this.tableData = [...this.headerData, ...this.bodyData];
    //}

    console.info(this.headerData, "--------------------");
    console.info(this.bodyMergeCells, "---------------");
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
      colWidths,
      cell: that.getCellStyle(),
      className: "htCenter htMiddle",
      afterChange(changes) {
        console.info("change", changes);
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

    //解决生成的多维表的高度问题
    this.$refs.tableWrapper.style.height =
      document.querySelector(".wtHider").offsetHeight + "px";
  },

  renderedCallback() {}
};
