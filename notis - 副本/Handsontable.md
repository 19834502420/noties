### Handsontable

* 导入Handsontable

```html
 <link rel="stylesheet" type="text/css"
        href="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css">
    <script src="https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js"></script>
    <script src="https://unpkg.com/vue@next">
```

* 获取hot的div-dom  其中data表示表格的数据

```js
const container = document.getElementById('hot');
        const hot = new Handsontable(container, {
            data: [];
            }
```

* 是否开启横头列头true开启

 

```js
colHeaders: true,
rowHeaders: true,
```

* 设置表格宽高

```js
width: '500',
height: '300',
```

* 

```js
ixedColumnsLeft: 2,//固定左边列数
            fixedRowsTop: 2,//固定上边横数
            manualColumnMove: true,
            manualRowMove: true,
```

* 根据row和col设置只读

```js
cells: function (row, col, prop) {
                var cellSet = {};
                // 指定第一行只读
                if (row <=1||col<=1) {
                    cellSet.readOnly = true;
                } 
                return cellSet;
            },
```

* 设置单元格合并mergeCells: [{ row: startrow, col: startrow, rowspan: endrow, colspan: endrow },]

```js
 mergeCells: [{ row: 0, col: 0, rowspan: 2, colspan: 1 },
            { row: 0, col: 1, rowspan: 2, colspan: 1 },
            { row: 0, col: 2, rowspan: 1, colspan: 4 },
            { row: 0, col: 6, rowspan: 1, colspan: 4 },]
```

* 设置指定单元格的样式{ row: 0, col: 0, className: 'custom-cell', },

```js
 cell: [
                { row: 0, col: 1, comment: { value: 'A read-only comment.', readOnly: true } },
                { row: 0, col: 3, comment: { value: 'A read-only comment.', readOnly: true } },
                { row: 0, col: 0, className: 'custom-cell（样式）', },
                { row: 0, col: 1, className: 'custom-cell', },
     ]
```

* getDataAtCell(row,col)获取指定单元格的值

* setDataAtCell(row, col, 'new value');设置制定单元格的值

* getCopyableText(row: startrow, col: startrow, rowspan: endrow, colspan: endrow )获取一个区间单元格的值返回一个字符串

* getData(row: startrow, col: startrow, rowspan: endrow, colspan: endrow )获取某个区间里面的值 返还数组
