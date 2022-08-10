<template>
  <div>
    <div>
      <yn-menu v-model="current" mode="horizontal" @click="onItemClick">
        <yn-menu-item key="productRatio">
          <yn-icon type="pie-chart" />业务比重
        </yn-menu-item>
        <yn-menu-item key="costCompare">
          <yn-icon type="bar-chart" />成本对比
        </yn-menu-item>
        <yn-menu-item key="others">
          <yn-menu-item key="op1">
            <yn-icon type="line-chart" />收入对比
          </yn-menu-item>
        </yn-menu-item>
      </yn-menu>
    </div>
    <div class="dashboard-chart-area">
      <div v-show="currentChart === 'productRatio'">
        <h3>共享系统业务比重</h3>
        <h4>关于元年共享系统的业务比重</h4>
        <yn-echart :options="prOptions"></yn-echart>
      </div>
      <div v-show="currentChart === 'costCompare'">
        <h3>研发成本对比</h3>
        <h4>2018元年共享管会业务研发投入成本对比</h4>
        <yn-echart :options="ccOptions"></yn-echart>
      </div>
      <div v-show="currentChart === 'others'">
        <h3>产品线收入对比</h3>
        <h4>2012年 - 2018年各产品线收入对比</h4>
        <yn-echart :options="lnOptions"></yn-echart>
      </div>
    </div>
  </div>
</template>

<script>
import "yn-p1/libs/components/yn-icon/";
import "yn-p1/libs/components/yn-echart/";
import "yn-p1/libs/components/yn-menu/";
import "yn-p1/libs/components/yn-menu-item/";

export default {
  name: "Home",
  data() {
    return {
      current: ["productRatio"],
      currentChart: "productRatio",
      prOptions: {
        // title: {
        //   text: "",
        //   subtext: "",
        //   x: "center"
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          orient: "vertical",
          x: "left",
          data: ["财务共享", "税务共享", "采购共享", "商旅共享", "RPA"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"],
              option: {
                funnel: {
                  x: "25%",
                  width: "50%",
                  funnelAlign: "left",
                  max: 1548
                }
              }
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "税务共享" },
              { value: 310, name: "采购共享" },
              { value: 234, name: "商旅共享" },
              { value: 135, name: "RPA" },
              { value: 1548, name: "财务共享" }
            ]
          }
        ]
      },
      ccOptions: {
        // title: {
        //   text: "",
        //   subtext: ""
        // },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["共享业务", "管会业务"]
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: { formatter: "{value} W" }
          }
        ],
        series: [
          {
            name: "共享业务",
            type: "bar",
            data: [
              120,
              149,
              170,
              123,
              125,
              176,
              135,
              162.2,
              132,
              120,
              164,
              133
            ],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          },
          {
            name: "管会业务",
            type: "bar",
            data: [126, 159, 110, 164, 177, 170, 175, 182, 148, 118, 160, 123],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }]
            }
          }
        ]
      },
      lnOptions: {
        // title: {
        //   text: "折线图堆叠"
        // },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["C1", "ECS", "元年云业务"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2012年",
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: { formatter: "{value} 万" }
        },
        series: [
          {
            name: "元年云业务",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "ECS",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "C1",
            type: "line",
            stack: "总量",
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      }
    };
  },
  methods: {
    onItemClick: function(clickEvent) {
      this.currentChart = clickEvent.key;
    }
  },
  mounted() {
    // this.$refs.productRatioChart.options = this.prOptions;
    // this.$refs.costCompareChart.options = this.ccOptions;
    // this.$refs.otherChart.options = this.lnOptions;
  }
};
</script>

<style>
.dashboard-chart-area {
  margin-top: 32px;
}
</style>
