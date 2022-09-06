<template>
  <div>
    <div>
      <h3>表格内滚动</h3>
    </div>
    <yn-table
      :data-source="options.dataSource"
      :columns="options.columns"
      :scroll="options.scroll"
    >
      <a slot="table.action" href="javascript:;">action</a>
    </yn-table>
    <div>
      <h3>列隐藏</h3>
    </div>
    <yn-table :data-source="options2.dataSource" :columns="options2.columns">
      <a slot="table.action" href="javascript:;">action</a>
    </yn-table>
  </div>
</template>
<script>
import "yn-p1/libs/components/yn-table/";

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age" },
  { title: "Column 1", dataIndex: "address", key: "1", width: 150 },
  { title: "Column 2", dataIndex: "address", key: "2", width: 150 },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    width: 150
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    width: 150
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    width: 150
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    width: 150
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    width: 150
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8"
  }
];

const columns2 = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age" },
  { title: "Column 1", dataIndex: "address", key: "1" },
  { title: "Column 2", dataIndex: "address", key: "2" },
  {
    title: "Column 3",
    dataIndex: "address",
    key: "3",
    className: "yn-md-down-hide"
  },
  {
    title: "Column 4",
    dataIndex: "address",
    key: "4",
    className: "yn-md-down-hide"
  },
  {
    title: "Column 5",
    dataIndex: "address",
    key: "5",
    className: "yn-lg-down-hide"
  },
  {
    title: "Column 6",
    dataIndex: "address",
    key: "6",
    className: "yn-lg-down-hide"
  },
  {
    title: "Column 7",
    dataIndex: "address",
    key: "7",
    className: "yn-xl-down-hide"
  },
  {
    title: "Column 8",
    dataIndex: "address",
    key: "8",
    className: "yn-xl-down-hide"
  }
];

const data = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

export default {
  name: "Sample4",

  data() {
    return {
      options: {
        dataSource: data,
        columns: columns,
        scroll: { x: 1500, y: 300 }
      },
      options2: {
        dataSource: data,
        columns: columns2
      }
    };
  }
};
</script>
