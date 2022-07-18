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
  tpBoXsbdef001: {
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
      headerData: null,
      bodyData: null,
      tableData: null,
      resData: null,
      selectOptions: null,
      selectedValue: "11ed01185d5d1e73be3a1daa372f20e3",
      headerMergeCells: [],
      bodyMergeCells: [],
      usefulData: {}
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
        case "tpBoXsbdef001": {
          let seasonArr; //季度
          let holidayArr; //节日
          return Promise.all([
            DsUtils.get(`metadata/masterDataObject019`),
            DsUtils.get(`metadata/masterDataObject020`)
          ]).then(([seasonRes, holidayRes]) => {
            seasonArr = seasonRes.data.items;
            this.usefulData.seasonArr = seasonArr;
            holidayArr = holidayRes.data.items;
            this.usefulData.holidayArr = holidayArr;

            let headerDataItem = {
              shop: "店铺",
              category: "类别",
              childCategory: "类别"
            };

            this.headerData = [
              { ...headerDataItem },
              { ...headerDataItem },
              { ...headerDataItem }
            ];
            this.headerData.forEach((item, index) => {
              for (let i = 0; i < holidayArr.length; i++) {
                let holiday = holidayArr[i];
                if (index === 0) {
                  //表头第一行 年度
                  item["key" + i] = null;
                } else if (index === 1) {
                  //表头第二行 季度
                  let seasonId = holiday.fjdDef001;
                  let seasonIndex;
                  seasonArr.forEach((season, idx) => {
                    if (season.objectId === seasonId) {
                      seasonIndex = idx;
                    }
                  });
                  item["key" + i] = seasonArr[seasonIndex].name;
                } else {
                  //表头第三行 节日
                  item["key" + i] = holiday.name;
                  !this.usefulData.holidayMap &&
                    (this.usefulData.holidayMap = {});
                  this.usefulData.holidayMap["key" + i] = holiday.name;
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
            //第三季节日集合
            const holidayArrOfSeason3 = holidayArr.filter(
              holiday => holiday.fjdDef001 === seasonArr[2].objectId
            );
            //第四季节日集合
            const holidayArrOfSeason4 = holidayArr.filter(
              holiday => holiday.fjdDef001 === seasonArr[3].objectId
            );

            this.headerMergeCells = [
              {
                row: 0,
                col: 0,
                rowspan: 3,
                colspan: 1
              }, //店铺
              {
                row: 0,
                col: 1,
                rowspan: 3,
                colspan: 2
              }, //类别
              {
                row: 0,
                col: 3,
                rowspan: 1,
                colspan: holidayArr.length
              }, //年度
              {
                row: 1,
                col: 3,
                rowspan: 1,
                colspan: holidayArrOfSeason1.length
              }, //第一季度
              {
                row: 1,
                col: 3 + holidayArrOfSeason1.length,
                rowspan: 1,
                colspan: holidayArrOfSeason2.length
              }, //第二季度
              {
                row: 1,
                col:
                  3 + holidayArrOfSeason1.length + holidayArrOfSeason2.length,
                rowspan: 1,
                colspan: holidayArrOfSeason3.length
              }, //第三季度
              {
                row: 1,
                col:
                  3 +
                  holidayArrOfSeason1.length +
                  holidayArrOfSeason2.length +
                  holidayArrOfSeason3.length,
                rowspan: 1,
                colspan: holidayArrOfSeason4.length
              } //第四季度
            ];
          });
        }
      }
    },

    async getBodyData() {
      switch (this.apiName) {
        case "tpBoXsbdef001": {
          let categoryArr, childCategoryArr;
          let resData = await this.getBusinessObjectData();
          return Promise.all([
            DsUtils.get(`metadata/masterDataObject016`),
            DsUtils.get(`metadata/masterDataObject017`)
          ]).then(([categoryArrRes, childCategoryArrRes]) => {
            categoryArr = categoryArrRes.data.items;
            this.usefulData.categoryArr = categoryArr;
            childCategoryArr = childCategoryArrRes.data.items;
            this.usefulData.childCategoryArr = childCategoryArr;
            this.bodyData = [];
            categoryArr.forEach(categoryItem => {
              childCategoryArr.forEach(childCategoryItem => {
                if (childCategoryItem.fssDef001 === categoryItem.objectId) {
                  this.bodyData.push({
                    shop: "测试店铺",
                    category: categoryItem.name,
                    childCategory: childCategoryItem.name
                  });
                }
              });
            });

            let holidayRow = this.headerData[this.headerData.length - 1];
            this.bodyData.forEach(item => {
              resData.forEach(row => {
                let category = row.flbDef001.name;
                let childCategory = row.fzlDef001.name;
                let holiday = row.fjrDef001.name;
                let value = row.fzDef001;

                if (
                  category === item.category &&
                  childCategory === item.childCategory
                ) {
                  for (let key in holidayRow) {
                    if (holiday === holidayRow[key]) {
                      item[key] = value;
                    }
                  }
                }
              });
            });

            //实际子类集合
            const childCategoryArrOfCategory1 = childCategoryArr.filter(
              childCategoryItem =>
                childCategoryItem.fssDef001 === categoryArr[0].objectId
            );
            //计划子类集合
            const childCategoryArrOfCategory2 = childCategoryArr.filter(
              childCategoryItem =>
                childCategoryItem.fssDef001 === categoryArr[1].objectId
            );

            this.bodyMergeCells = [
              {
                row: 3,
                col: 0,
                rowspan:
                  childCategoryArrOfCategory1.length +
                  childCategoryArrOfCategory2.length,
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
      for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let colIndex = 0; colIndex < 7; colIndex++) {
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
        `businessobject/v2/${this.apiName}?expand=reference&query=fnDef001='${this.selectedValue}'&limit=100&offset=0`
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
      let url = `metadata/masterDataObject018/selectDisplayData`;
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
      let url = `businessobject/v2/demo/${this.apiName}`;
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
          `businessobject/v2/${this.apiName}/batchInsertBoData`,
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
    if (!this.isRunTime) {
      this.tableData = templateTableData;
    } else {
      this.resData = await this.getBusinessObjectData();
      await this.getHeaderData();
      await this.getBodyData();
      this.tableData = [...this.headerData, ...this.bodyData];
    }

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
        changes &&
          changes.forEach(([rowIndex, key, oldValue, newValue]) => {
            if (rowIndex > 2 && key.includes("key") && oldValue !== newValue) {
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
