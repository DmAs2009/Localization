export default {
  common: {
    interval: {
      day: '按天',
      week: '按周',
      month: '按月',
      quarter: '按季',
      year: '按年',
    },
    option: {
      title: '图表信息',
      reset: '重置图表',
      type: '图表展示类型',
      xAxis: '维度',
      xAxisPlaceholder: '请选择',
      yAxis: '值',
      yAxisPlaceholder: '请选择',
      statisticalCycle: '统计周期',
    },
    view: {
      noData: '暂无数据，请修改图表数据配置',
      limitData: '筛选结果大于10000条数据，请重置筛选条件',
    },
    filter: {
      title: '数据筛选',
      reset: '重置筛选',
      subTitle: '条件查询',
      switchIQL: '切换IQL查询',
      addConstraint: '添加筛选条件',
    },
    submit: '查询',
    pagination: {
      total: '总数：{{total}}',
    },
    filed: {
      sprint: '迭代',
    },
  },
  basicBarChart: {
    option: {
      status: '状态',
    },
  },
  basicCountChart: {
    option: {
      target: '指标',
      targetEdit: '编辑',
      targetDelete: '删除',
      targetAdd: '添加指标',
      formula: '展示结果',
      formulaPlaceholder: '使用【】引用指标，支持整数进行简单的四则运算(英文半角符号)，例如：【新增需求】+【新增缺陷】',
      precision: '保留小数位数',
      precisionPlaceholder: '请输入保留位数',
      unit: '单位',
      unitLeft: '左',
      unitRight: '右',
      showDetail: '展示详细指标结果',
      percentages: '显示百分比',
      errorMsg: {
        targetEmpty: '请输入指标名称',
        targetDuplicate: '指标名称重复',
        formulaInvalid: '请输入正确的运算公式',
      },
    },
    modal: {
      targetName: '指标名称',
      targetValue: '值',
    },
  },
  basicDemandSpeedChart: {
    option: {
      pageSize: '每页结果数(最多50条)',
      pageSizePlaceholder: '请输入不小于10不大于50的数',
      columnsList: '显示列',
    },
  },
  basicItemCountChart: {
    view: {
      tooltip: '跳转至详情列表',
    },
  },
  basicItemStatisticsChart: {
    option: {
      xAxis: '统计维度',
      xAxisPlaceholder: '请选择',
      pageSize: '每页结果数(最多50条)',
      pageSizePlaceholder: '请输入结果数',
      sort: '排序',
      sortPlaceholder: '请选择排序方式',
      sortASC: '正序',
      sortDESC: '倒序',
    },
    view: {
      colCount: '计数',
      colPercentage: '百分比',
    },
  },
  basicLineChart: {
    option: {
      xAxisPlaceholder: '时间范围',
    },
  },
  basicPieChart: {
    view: {
      percentage: '占比',
    },
  },
  basicTableChart: {
    option: {
      xAxis: '行',
      xAxisPlaceholder: '请选择',
      yAxis: '列',
      cluster: '列维度',
      clusterPlaceholder: '请选择',
      addColumn: '计算列字段',
      total: '合计',
      totalRow: '行总计',
      totalCol: '列总计',
      totalRowSub: '行小计',
      totalColSub: '列小计',
      errorMsg: {
        limitGroup: '最多只能选择三个',
        limitCluster: '最多只能选择三个',
        nameEmpty: '字段名称不能为空',
        nameLength: '字段名称最大长度为20',
        nameChar: '字段名称仅支持字母、数字、下划线',
        nameDuplicate: '字段名称不能重复',
        formulaEmpty: '字段表达式不能为空',
      },
    },
    modal: {
      title: '计算列字段',
      okText: '确定',
      cancelText: '取消',
      name: '字段名称',
      formula: '字段表达式',
      formulaPlaceholder:
        "字段表达式，即该计算列字段具体的计算公式，列维度名.字段名，中间用.连接，变量用''单引号引起来，常量则不需要，支持+-*/四则运算，用()括住;例如(事项数) + (故事点数)",
      type: '显示格式',
      typeNumber: '数值',
      typePercentage: '百分比',
      precision: '保留小数位数',
      precisionPlaceholder: '请输入',
    },
    util: {
      total: '总计',
      subtotal: '小计',
    },
  },
  basicWorkLoadChart: {
    option: {
      sort: '排序',
      sortASC: '升序',
      sortDESC: '降序',
    },
  },
  burnDownChart: {
    displayType: {
      lineChart: '双线展示',
      lineBarChart: '柱线混合',
    },
    option: {
      dimension: '统计维度',
      dimensionIteration: '按迭代',
      dimensionTime: '按时间',
      workingDay: '显示非工作日',
      yAxis: 'Y轴',
    },
    view: {
      progressSprint: '正在进行中迭代',
      otherSprint: '其他迭代',
      dateRange: '时间范围',
      dateRangePlaceholder: '请选择条件',
      itemStock: '存量',
      itemExpect: '期望',
    },
  },
  sprintAccuracyChart: {
    placeholder: {
      workspace: '请选择空间',
    },
    validate: {
      displayNumber: '请输入展示迭代数量',
    },
    label: {
      displayNumber: '展示迭代数量（最小值1，最大值10）',
      planned: '迭代计划故事点',
      actual: '迭代实际故事点',
      deviation: '实际偏差率',
    },
    planned: '计划故事点',
    actual: '实际故事点',
    deviation: '计划偏差率（%）',
  },
};
