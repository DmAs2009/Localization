/**
 * @name views
 */

const defaultContent = {
  default: '平铺列表',
  hierarchy: '层级列表',
  structure: '结构列表',
  Kanban: '看板',
  gantt: '甘特图',
  storyMapping: '用户故事地图',
  calendar: '日历视图',
  split: '分栏视图',
  menus: {
    singlePage: '新标签页打开',
    view: '查看',
    edit: '编辑',
    delete: '删除',
    childCardCreate: '新建子事项',
    childCardInlineCreate: '快速新建子事项',
    moveToItemGroup: '移动到事项组',
    cloneItem: '复制事项',
    moveItem: '迁移事项',
  },
  pageNotFound: '很抱歉，网页走丢了',
};

const gantt = {
  default: {
    groupedValue: '未分组',
  },
  Tooltip: {
    title: '甘特图设置',
  },
  openSettingModal: '前往看板配置',
};

const kanban = {
  noGroup: '未分组',
  undistributed: '未分配',
  message: {
    stateFlowFailure: '状态流转失败， {{text}}',
    stateFlowSuccess: '状态流转成功',
    updateSuccess: '看板配置更新成功',
    updateFailure: '看板配置更新失败',
    configRequired: '看板列配置不能为空',
  },
  swimlane: {
    None: '无泳道',
    ItemType: '类型泳道',
    CustomField: '按字段分组',
    childrenLabel: '选择字段',
    prompt: '可选字段为当前空间界面方案中单选类型的组件，例如单选下拉，单选',
  },
  Tooltip: {
    title: '看板配置',
  },
  kanbanSetting: '前往看板配置',
};

const tableComponents = {
  Drawer: { title: '表格显示设置' },
  TableEmpty: {
    noDataTip: '您还没有创建任何事项',
    noSearchDataTip: '未匹配到对应事项，换个关键词试试吧',
    createItem: '创建事项',
  },
  useTableMenu: {
    message: {
      itemDeletedSuccess: '事项删除成功',
      getWorkspaceIdFail: '获取事项空间Id失败',
      subitemCreatedSuccess: '子事项创建成功',
      subitemCreatedFail: '子事项创建失败',
    },
    messageWarning: '{{ name }}不符合空间事项层级规则，无法添加层级，请校验层级规则后再试',
    dragAdjoinWarning: '目前仅支持一个父事项下的同级进行拖拽，此拖拽不符合条件，请重试',
    modal: {
      delete: {
        title: '删除事项',
        content: '当前事项会被删除（若有子事项则一起被删除），此删除操作不可撤销，是否确认？',
      },
    },
  },
};

const structure = {
  title: '结构',
  message: '事项已删除',
  constructor: {
    ConstructionPanel: {
      itemSpan: ['包含父事项', '包含子事项'],
      Tooltip: {
        title1: '当筛选任务时，将满足筛选条件任务的所有父任务一起放出，无论其父任务是否满足筛选条件。',
        title2: '当筛选任务时，将满足筛选条件任务的所有子任务一起放出，无论其父任务是否满足筛选条件。',
      },
      treeDisplay: '树形展示',
      correlation: '关联关系',
      showRelation: '显示关联关系',
      displayConfig: '显示配置',
    },
    displayConfigModal: {
      linkItemsConfig: '关联事项显示配置',
      showLink: '选择要展示关联',
      linkHierarchy: '关联关系展示层数',
      layer: '{{count}}层',
      addLink: '新增展示关联',
      itemType: '类型',
      linkType: '关联关系',
      direction: '方向',
      placeholder: {
        itemType: '请选择类型',
        linkType: '请选择关联关系',
        direction: '请选择方向',
      },
      closeLinkItems: '共{{count}}个关联事项，全部收起',
      openLinkItems: '共{{count}}个关联事项，全部展开',
    },
  },
};

const hierarchy = {
  table: {
    expand: '展开全部子级',
    collapse: '收起全部子级',
  },
};

//
export const layout = {
  default: {
    instructionBook: '帮助文档',
    workspaceSidebarSetting: '空间设置',
    ForbiddenPage: {
      title: '当前用户没有空间设置权限',
    },
  },
  menu: {
    newMarket: '新应用市场',
    market: '应用市场',
    myapps: '应用管理',
    myappsNew: '应用管理',
    boardManage: '面板配置',
    settingsMember: '成员管理',
    settingsSpaceAllocation: '空间配置',
    settingsItemGroups: '事项组配置',
    settingsAuth: '权限管理',
    workspaceInfo: '空间信息',
    title: '返回空间列表',
    components: '功能开关',
    back: '返回空间',
  },
  menuHeaderDropdown: {
    newApps: '新应用中心',
    apps: '应用中心',
    settings: '系统设置',
    version: '版本信息',
    user: '用户信息修改',
    reset: '修改密码',
    logout: '退出登录',
  },
  SettingsMenu: {
    menu: {
      roleMenu: {
        users: '用户',
        roles: '企业角色',
        groups: '用户组',
        workspaceRole: '空间角色',
      },
      workspace: '工作空间',
      workspaceTemplate: '空间模板',
      workspaceSchemes: '空间配置方案',
      item: '类型',
      // item-types
      hierarchy: '类型层级方案',
      itemFeatures: '事项特性',
      linkTypes: '事项关联',
      securityLevel: '安全级别方案',
      screen: ['界面', '界面方案', '类型界面方案'],
      fields: ['字段', '自定义字段'],
      priority: '优先级',
      fieldsBehavior: '字段行为',
      workflow: ['工作流', '工作流方案'],
      auth: '权限',
      system: '其他',
      workTime: '工作日与时间',
    },
  },
};

const emptyField = {
  null: '无',
  empty: '空',
  hyphen: '-',
  user: '未指定',
};

export const common = {
  BaseScreenConfigPanel: {
    BaseScreenCustomGridNode: {
      enableCustomWidth: {
        label: '自定义列宽',
        tooltip: '开启后，可覆盖栏容器分配的列宽',
      },
      enableDynamicCol: {
        label: '动态栅格',
        tooltip: '开启后，可支持在不同父级容器尺寸下展示不同的宽度',
      },
      dynamicColsXS: {
        label: '列数-小尺寸',
        tooltip: '预览区宽度小于 576 px，如手机',
      },
      dynamicColsMD: {
        label: '列数-中尺寸',
        tooltip: '预览区宽度在 576px 到 1200px 之间，如平板',
      },
      dynamicColsXL: {
        label: '列数-大尺寸',
        tooltip: '预览区宽度大于 1200px，如电脑',
      },
      componentCols: {
        label: '栅格宽度',
      },
      hiddenLabel: '隐藏标签',
    },
  },
  BaseTable: {
    default: {
      placeholder: '按 Enter 键快速创建子事项',
    },
  },
  ColumnsSettings: {
    default: {
      titleText: '表头设置',
      tip: ['以上属性不可进行列表格排序', '未找到相关字段'],
      placeholder: '请选择需要展示的列',
    },
    resetColumns: '恢复默认',
  },
  CommonTable: {
    default: {},
    Drawer: {
      title: '表格显示设置',
    },
  },
  CustomCollapse: {},
  ExpressionForm: {
    default: {
      placeholder: '请输入你的{{title}}',
      header: '可用的{{title}}字段',
    },
  },
  formikFieldTouched: {},
  groupTable: {},
  itemIcon: {},
  overflowTooltip: {},
  searchSelect: {
    default: {
      placeholder: ['请输入搜索的内容', '请选择'],
      font: ['已选', '项', '或', emptyField.null],
      clear: '清空已选',
      tips: '已选 {{selectNum}} 项',
      toolTip: `“${emptyField.hyphen}”与“${emptyField.null}”都是字段值为空。\n“${emptyField.hyphen}”为无权限修改字段；\n“${emptyField.null}”为有权限修改字段。 `,
      empty: `“${emptyField.hyphen}” 或 “${emptyField.null}”`,
    },
    emptyData: {
      dataNotFound: '未匹配到相关选项，换个关键词试试',
      noData: '暂无数据',
    },
  },
  emptyField,
  sortComponent: {
    ASC: '升序',
    DESC: '降序',
    sort: '排序',
    save: '保存到视图',
  },
  statusSelector: {
    placeholder: '选择状态',
  },
  structureTable: {},
  userField: {
    default: {
      message: {
        update: '用户信息更新成功',
      },
      validate: {
        nicknameError: ['用户昵称不能为空', '用户昵称最多不超过32个字符'],
      },
    },
    resetPassword: {
      default: {
        oldPassword: '旧密码',
        newPassword: '新密码',
        password: '确认密码',
      },
      message: '密码修改成功',
      validate: {
        oldPassword: '请输入旧密码',
        newPassword: '请输入新密码',
        newPasswordTip: '密码长度 8-32 位， 至少包含大写字母、数字、小写字母',
        confirmPassword: '请输入确认密码',
        confirmPasswordErrorTip: '确认密码与新密码不一致',
      },
      modal: {
        title: '修改密码',
      },
    },
  },
  viewSelector: {},
  AdvancedSearch: {
    default: {
      placeholder: '请输入IQL表达式，回车或点击搜索按钮进行筛选',
    },
    message: {
      oldLength: '最大输入长度为',
    },
  },
  Code: {
    default: {
      clickRefresh: '点击刷新',
    },
  },
  FieldErrorBoundary: {
    default: {
      errorText: '字段数据有误',
    },
  },
  ForbiddenPage: {
    title: '页面被禁止访问',
  },
};

export const login = {
  userRegister: '用户注册',
  btn: {
    login: '登录',
    register: '注册',
    code: '验证码',
    reset: '重置',
  },
  nameAndEmail: {
    name: '用户名 或 电子邮箱',
    required: '用户名 或 电子邮箱必填',
  },
  username: {
    name: '用户名',
    required: '用户名必填',
    pattern: '用户名不能有空格，字符长度限制为 2～32',
  },
  email: {
    name: '电子邮件',
    required: '电子邮件必填',
    pattern: '邮箱格式有误',
  },
  password: {
    name: '密码',
    required: '密码必填',
    pattern: '密码长度 8-32 位， 必须包含大写字母、数字、小写字母',
  },
  code: {
    name: '验证码',
    required: '验证码必填',
  },
  message: {
    registerSuccess: '注册成功，请登录',
    passwordResetSuccess: '密码重置邮件已发送',
  },
};

export default { default: defaultContent, gantt, kanban, tableComponents, structure, hierarchy, layout, common, login };
