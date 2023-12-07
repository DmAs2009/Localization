/**
 * @name 工作台
 */

export const report = {
  default: {
    title: '工作台',
    menuTitle: '报表统计',
  },
  notFound: {
    title: '很抱歉，网页走丢了…',
    desc: '您可以检查一下网址，或者稍后刷新重试',
  },
  exception: {
    unavailableChartGroup: ['当前用户没有「测试统计」查看权限', '请联系管理员'],
    uninstalledChartPlugin: ['当前空间没有报表插件', '请前往「应用中心」安装'],
  },
};

// 图表类
export const chat = {
  hooks: {
    workspaceName: '所属空间',
  },
  testReport: {
    title: '测试报告',
  },
  ChartCreateModel: {
    UNNAMED: '未命名',
    default: {
      placeholder: '请输入图表名称',
    },
    modal: {
      title: '保存报表',
      name: '报表名称',
    },
  },
  ChartDetail: {
    default: {
      messageChartOptionUnselect: '请选择图表要配置的数据',
      messageEmptyName: '请输入报表名称',
      messageEmptyExport: '当前图表暂无可导出数据',
    },
    UNNAMED: '未命名',
    modal: {
      cancelText: '直接退出',
      okText: '去保存',
    },
    Drawer: {
      create: '创建为新报表',
      save: '覆盖当前报表',
      errorText: '报表类型{{option?.type}}配置有误',
    },
  },
  ChartGroupModal: {
    default: {},
    title: '新建仪表盘',
    createChartGroup: '新建仪表盘',
    editChartGroup: '编辑仪表盘',
    duplicateChartGroup: '复制仪表盘',
    messageEmptyName: '仪表盘名称不能为空',
    messageEmptyUser: '请选择用户（组）/角色',
    placeholderUserGroup: '请选择用户组',
    placeholderRoles: '请选择角色',
    placeholderUser: '请选择用户',
    placeholderTitle: '请输入标题',
    publicTip: '团队所有成员都可查看编辑',
    accessView: '可查看',
    accessEdit: '可编辑',
    copy: '(副本)',
  },
  ChartList: {
    messageAddChartGroup: '请添加仪表盘',
    messageCancelCollect: '取消收藏成功',
    messageCollect: '收藏成功',
    modal: {
      title: '是否确认退出',
      content: '离开当前页面，此页面的布局信息不会被保存',
      delete: {
        title: '删除',
        content: `确定删除吗？`,
      },
    },
    addDashboard: '新建仪表盘',
    OverflowTooltip: {
      name: '请创建仪表盘',
    },
    AddChart: '添加小组件',
    managerChartSave: '保存管理',
    managerChartManage: '管理组件',
    refresh: '刷新',
  },
  ChartModal: {
    default: {
      message: '请选择添加的组件类型',
      modal: {
        title: '添加小组件',
      },
    },
  },
  ChartView: {
    default: {
      message: '当前图表暂无可导出数据',
    },
    modal: {
      title: '删除',
      content: `确定删除吗？`,
    },
    highlight: '突出显示',
  },
  DropdownInput: {
    default: {
      subMenuName: '统计方式',
    },
  },
  FilterPanel: {
    default: {
      panelTitleIQL: 'IQL表达式',
      panelTitleCondition: '条件查询',
      changeBtnTextCondition: '条件筛选',
      changeBtnTextIQL: 'IQL',
      change: '切换',
      query: '查询',
    },

    Tooltip: {
      title: 'IQL为空或IQL与条件筛选一致可以切换',
    },
    addFilterText: '添加筛选条件',
  },
  FilterQuery: {},
  utils: {
    default: {
      messageRefreshPage: '当前仪表盘已被删除，正在为您刷新页面',
      messageConditionSearch: '请添加筛选条件点击查询之后进行保存',
      messageSearchSave: '请查询到数据之后进行保存',
      messageInvalidTarget: '请配置正确的指标及四则运算公式',
      messageEmptyData: '未查询到数据，请修改图表配置后进行保存',
    },
    defaultDashboard: '默认仪表盘',
  },
};

export default { report, chat };
