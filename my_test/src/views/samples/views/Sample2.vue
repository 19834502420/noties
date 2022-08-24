<template>
  <div>
    <h3>嵌套列表应用</h3>
    <yn-table
      :data-source="tableOption.dataSource"
      :bordered="tableOption.bordered"
      :columns="tableOption.columns"
    >
      <a slot="table.operation" href="javascript:;">Publish</a>
      <yn-table
        slot="table.expandedRowRender"
        :data-source="innerTableOption.dataSource"
        :bordered="innerTableOption.bordered"
        :columns="innerTableOption.columns"
      >
        <span slot="table.status"> <yn-badge status="success" />Finished </span>
        <span slot="table.operation" class="table-operation">
          <a href="javascript:;">Pause</a>
          <a href="javascript:;">Stop</a>
          <yn-dropdown>
            <yn-menu slot="overlay">
              <yn-menu-item>Action 1</yn-menu-item>
              <yn-menu-item>Action 2</yn-menu-item>
            </yn-menu>
            <a href="javascript:;">
              More
              <yn-icon type="down" />
            </a>
          </yn-dropdown>
        </span>
      </yn-table>
    </yn-table>
  </div>
</template>

<script>
import "yn-p1/libs/components/yn-table/";
import "yn-p1/libs/components/yn-dropdown/";
import "yn-p1/libs/components/yn-menu/";
import "yn-p1/libs/components/yn-menu-item/";
import "yn-p1/libs/components/yn-icon/";
import "yn-p1/libs/components/yn-badge/";

const data = [];
for (let i = 0; i < 3; ++i) {
  data.push({
    key: i,
    name: "Screem",
    platform: "iOS",
    version: "10.3.4.5654",
    upgradeNum: 500,
    creator: "Jack",
    createdAt: "2014-12-24 23:12:00"
  });
}

const innerColumns = [
  { title: "Date", dataIndex: "date", key: "date" },
  { title: "Name", dataIndex: "name", key: "name" },
  { title: "Status", key: "state", scopedSlots: { customRender: "status" } },
  { title: "Upgrade Status", dataIndex: "upgradeNum", key: "upgradeNum" },
  {
    title: "Action",
    dataIndex: "operation",
    key: "operation",
    scopedSlots: { customRender: "operation" }
  }
];

const innerData = [];
for (let i = 0; i < 3; ++i) {
  innerData.push({
    key: i,
    date: "2014-12-24 23:12:00",
    name: "This is production name",
    upgradeNum: "Upgraded: 56"
  });
}

export default {
  name: "Sample2",
  data() {
    return {
      tableOption: {
        columns: [
          { title: "Name", dataIndex: "name", key: "name" },
          { title: "Platform", dataIndex: "platform", key: "platform" },
          { title: "Version", dataIndex: "version", key: "version" },
          { title: "Upgraded", dataIndex: "upgradeNum", key: "upgradeNum" },
          { title: "Creator", dataIndex: "creator", key: "creator" },
          { title: "Date", dataIndex: "createdAt", key: "createdAt" },
          {
            title: "Action",
            key: "operation",
            scopedSlots: { customRender: "operation" }
          }
        ],
        dataSource: data,
        bordered: true
      },
      innerTableOption: {
        columns: innerColumns,
        dataSource: innerData,
        bordered: true
      }
    };
  }
};
</script>

<style></style>
