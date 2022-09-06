<template>
  <div>
    <h3>插槽应用</h3>
    <yn-table
      :data-source="tableOption.dataSource"
      :bordered="tableOption.bordered"
      :columns="tableOption.columns"
    >
      <template slot="header">组件级头部标题插槽</template>
      <template slot="footer">
        <div>组件级尾部内容插槽</div>
      </template>
      <template slot="table.name" slot-scope="text">
        <a href="javascript:;">
          <span style>{{ text }}（单元格内容插槽）</span>
        </a>
      </template>
      <template slot="table.footer" slot-scope>表格级尾部内容插槽</template>
      <span slot="table.customTitle" slot-scope>
        <yn-icon type="user" />姓名
      </span>
      <span slot="table.tags" slot-scope="tags">
        <yn-tag v-for="tag in tags" color="red" :key="tag">{{ tag }}</yn-tag>
      </span>
      <span slot="table.action" slot-scope="text, record">
        <a href="javascript:;">Invite 一 {{ record.name }}</a>
        <a href="javascript:;">Delete</a>
        <a href="javascript:;" class="ant-dropdown-link">
          More actions
          <yn-icon type="down" />
        </a>
      </span>
    </yn-table>
  </div>
</template>

<script>
import "yn-p1/libs/components/yn-table/";
import "yn-p1/libs/components/yn-tag/";
import "yn-p1/libs/components/yn-icon/";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

export default {
  name: "Sample2",
  data() {
    return {
      tableOption: {
        columns: [
          {
            dataIndex: "name",
            key: "name",
            scopedSlots: { customRender: "name", title: "customTitle" }
          },
          {
            title: "年龄",
            dataIndex: "age",
            key: "age"
          },
          {
            title: "地址",
            dataIndex: "address",
            key: "address",
            className: "yn-lg-down-hide"
          },
          {
            title: "标签",
            key: "tags",
            dataIndex: "tags",
            className: "yn-md-down-hide",
            scopedSlots: { customRender: "tags" }
          },
          {
            title: "操作",
            key: "action",
            scopedSlots: { customRender: "action" }
          }
        ],
        dataSource: data,
        bordered: true
      }
    };
  }
};
</script>

<style></style>
