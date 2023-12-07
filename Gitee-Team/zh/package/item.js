/**
 * @name 事项
 */
import btnText from './btnText';
import global from './global';

const defaultConfig = {
  createBtnText: global.getBtnText(btnText.workspaces.item),
  createFor: '创建于',
  updateFor: '更新于',
  loading: '正在加载中',
  plugin: '没有插件数据',
  moreOpt: '更多操作',
  getPluginList: '正在获取插件列表',
  item: '事项',
  transition: '流转',
  errorText: '字段数据有误',
  name: '标题',
  itemHierarchy: '事项层级',
  createItemTypeHierarchyScheme: '新建类型层级方案',
  need_fields: '包含',
  no_need_fields: '不包含',
  modal: {
    newAdd: '新建{{itemTypeName}}',
    edit: '编辑{{itemTypeName}}',
    transition: '流转{{itemTypeName}}',
  },
};

export const item = {
  default: defaultConfig,
  columns: {
    name: '标题',
    linkItems: '{{count}}个关联事项',
    itemLink: '类型：',
    tip: '该事项为{{name}}的关联事项',
  },
  modal: {
    copyText: '副本',
    name: '事项标题必填',
    copyItemTitle: '复制事项',
    editTitle: '编辑类型层级方案',
    createTitle: '新建类型层级方案',
    createTitleByName: '新建{{name}}',
    delete: {
      title: [`是否删除「{{nodeName}}」及它下面所有的层级？`, '是否删除所有类型及它下面所有的层级？'],
    },
  },
  view: {
    createItemTypeHierarchySchemeBtn: global.getBtnText(btnText.settings.itemTypeHierarchyScheme),
    itemType: '可用类型',
    itemHierarchy: '当前事项层级',
    allRemove: '全部移除',
    Headers: {
      menus: {
        addItem: '新建子事项',
        addItemLink: '添加关联事项',
        moveItems: '移动到事项组',
        updateParentItem: '更改父事项',
        moveItem: '迁移事项',
        backItem: '返回事项：',
        copyItemId: '复制Key',
        copyItemUrl: '复制事项详情页URL',
      },
    },
    Watchers: {
      unfollow: '取消关注该事项',
      follow: '关注该事项',
      attention: '{{length}}位成员正在关注',
      noFollowers: '还没有关注者',
    },
  },
};

//
export const itemGroup = {
  default: {
    add: '添加事项组',
    edit: '修改事项组',
    title: '用户组管理',
    userGroup: '用户组',
    clear: '删除所有事项',
    createChild: '添加子用户组',
    createMsg: '新建用户组',
    messageWarning: '未知操作',
    messageSuccess: '删除用户组成功',
    messageError: '删除用户组失败',
    enterItemGroupName: '请填写事项组名称',
    selectItemGroup: '请选择事项组',
    max: '事项组名称最多填写{{size}}个字',
    message: ['事项组名称不能全为空格', '请选择删除操作', '请选择移动事项组'],
    FormField: {
      name: '事项组名称',
      itemGroup: '事项组',
    },
    font: ['事项组', '下共有{{ count }}个事项，删除后'],
  },
  columns: {
    name: '用户组名称',
    key: '用户组描述',
  },
  views: {
    createItemGroupBtn: global.getBtnText(btnText.workspaces.itemGroup),
    createUserGroupBtn: global.getBtnText(btnText.settings.userGroup),
    deleteGroupText: '事项组{{text}}下共有 {{count}} 个事项，删除后',
  },
  modal: {
    deleteItemGroup: {
      title: '删除事项组',
      query: '确定删除【{{text}}】吗？',
    },
    deleteUserGroup: {
      deleteTitle: '删除用户组',
      content: '删除用户组会将其子用户组一并删除，删除后不可恢复，是否确认？',
    },
    move: {
      title: '移动到事项组',
    },
  },
};

//
export const itemImport = {
  default: {
    import: '开始导入',
    verification: '验证',
    message: {
      fileRegExp: '文件格式不正确',
      workspace: '请选择空间',
      configFileError: '文件格式不正确，请上传txt文件',
    },
    title: '批量创建：设置',
    set: '设置',
    p: ['要批量导入事项，您需要提供 excel', '或', '文件的数据'],
    btn: '选择文件',
    next: '下一步',
    importWorkspace: '导入到空间',
    options: '不要映射此字段',
  },
  choseFile: {
    checkbox: '使用现有的配置文件',
    tip: '如果您以前使用了此导入程序，则可能已保存以前使用过的配置。为了节省时间，您可以使用该配置。',
    btn: '选择配置文件',
    choseTip: '选择配置文件（.txt）将导入配置设置。您仍可以选择进一步编辑这些设置（如果需要）。',
    error: '配置文件内容有误，请修改。',
  },
  validate: {
    value: '该空间字段已被映射，不允许重复',
  },
  FiledMapping: {
    title: ['映射字段', '文件字段', '空间字段'],
    warning: '请注意：需要 标题 字段和 类型 字段都映射才能导入',
    text: '选择要导入的字段，然后设置如何将这些字段转换为 空间 中的字段。',
  },
  Importing: {
    title: '文件导入',
    tip: '目前正在导入文件，请稍后',
    fail: '文件导入失败请重试',
    configFile: '配置文件',
    downLoad: { also: '您也可以', save: '保存配置', use: '供以后使用' },
  },
  Result: {
    default: {
      font: ['已找到', '导入', '验证', '过程', '错误'],
    },
    total: '您的文件统计数据：',
    data: '正确创建事项',
    tip: ['由于出现错误，', '将', '无法创建事项'],
  },
  Verification: {
    title: '验证',
    text: '目前正在检查您的文件，请稍后……',
    tip: '文件验证失败请重试',
    startVerify: '开始验证',
  },
  importAndExportItem: {
    title: `共导出{{length}}个字段`,
    link: '查看字段类型支持导入导出的情况',
    notExportField: '，以下字段不支持导出',
    fileCreate: '文件生成中...',
    fileCreateSuccess: '文件生成成功',
    export: '导出（当前字段）',
    exportAll: '导出（所有字段）',
    fileTooLargeTip: '文件过大，已在后台进行下载。请点击右上角【个人中心—下载列表】中进行查看',
    allWorkspace: '所有空间',
    modal: {
      title: '',
    },
  },
};

//
export const itemTypes = {
  default: {
    itemType: '类型',
    configTitle: `${global.config}{{name}}`,
    itemTypeDescription: '跟踪不同类型的事项，如需求、缺陷、任务。每个事项的类型可以进行不同的界面、工作流配置',
    iconOrName: '图标/名称',
    placeholder: '请选择字段...',
    message: [
      '图标删除成功',
      '文件格式不正确',
      '图标上传成功',
      '请选择事项关联',
      '事项关联类型不一致，请重新选择',
      '类型已存在',
    ],
    content: ['图标格式：jpeg、png、svg（推荐png或者svg）', '图标尺寸'],
    uploadTip: '上传图标',
    name: ['名称最少2个字符', '名称最多为40个字符'],
    itemTypeTip: '类型名称已存在',
    remove: '删除所有链接',
    deleteTip: '删除后数据将不能恢复，请谨慎操作',
  },
  columns: {
    defaultType: '默认类型',
    itemType: '类型',
    createScreen: '新建',
    editScreen: '编辑',
    viewScreen: '查看',
  },
  modal: {
    delete: {
      title: '删除链接类型：',
      text: '您确定要删除此链接类型吗？目前有{{text}}个匹配的链接',
      // text: ['您确定要删除此链接类型吗？目前有', '个匹配的链接'],
      reset: '移动当前链接到链接类型：',
    },
    deleteItemType: {
      title: '删除类型',
    },
    create: {
      title: '新建类型',
    },
    edit: {
      title: '编辑类型',
    },
    link: {
      title: '给类型关联界面方案',
      itemType: '类型',
      screenScheme: '界面方案',
    },
    content: {
      areYouSure: '确定删除类型「{{name}}」吗？',
      deleteTip: '删除后数据将不能恢复，请谨慎操作',
    },
  },
  scheme: {
    default: {
      title: '类型界面方案',
      description:
        '通过类型界面方案，您可以选择应用于每个类型的界面方案。然后，再把类型界面方案关联到一个或多个空间模板上，以指定界面方案，并确定应用于空间模板事项的特定事项操作界面',
      errorMsg: '方案名称已存在',
    },
    modal: {
      editTitle: '编辑类型界面方案',
      deleteTitle: '删除类型界面方案',
      createTitle: '新建类型界面方案',
      content: {
        areYouSure: '确定删除类型界面方案「{{name}}」吗？',
        deleteTip: '删除后数据将不能恢复，请谨慎操作',
      },
    },
    columns: {
      name: '方案名',
    },
  },
  linkTypes: {
    default: {
      title: '事项关联',
      description: '可新建事项关联关系，应用于事项设置中，便于管理事项的开展顺序',
    },
    modal: {
      editTitle: '编辑事项关联',
      createTitle: '新建事项关联',
    },
    columns: {
      name: '事项关联名称',
      type: '事项关联类型',
      inward: '关联方描述',
      outward: '被关联方描述',
    },
  },
  hierarchy: {
    default: {
      title: '类型层级方案',
      description: '类型层级确定哪些类型将对一组空间模板可用。它还允许您添加/移除事项层级选项、调整层级顺序',
      detailTitle: '事项层级',
    },
    modal: {
      deleteTitle: '删除类型层级',
      createTitle: '新建类型层级方案',
      content: {
        areYouSure: '确定删除类型层级「{{name}}」吗？',
      },
    },
    detail: {
      moveTip: '通过左右拖拽类型区块实现添加/移除事项层级选项、上下拖拽调整层级顺序',
      warnTip: '红色标注的类型代表已经被删除，请尽早替换',
    },
  },
  validate: {
    itemType: '请选择类型',
    screenScheme: '请选择界面方案',
  },
  view: {
    pageHeader: {
      btn: '给类型关联界面方案',
    },
    createItemLinkBtn: global.getBtnText(btnText.settings.itemLink),
    createItemTypeScreenSchemeBtn: global.getBtnText(btnText.settings.itemTypeScreenScheme),
  },
};

export const itemsBatchOperate = {
  chooseNumSuffix: '{{num}}个事项',
  step: {
    choose: '选择事项',
    operate: '选择操作',
    detail: '操作详细信息',
    confirm: '确认',
    result: '操作结果',
  },
  editItem: '编辑事项',
  deleteItem: '删除事项',
  transitionStatus: '流转状态',
  stepCount: '第{{step}}步',
  default: {
    reason: '事项 {{value}}不存在该字段',
    panel: {
      header: '不可用的操作',
    },
    change: '改变',
    execute: '执行',
    operateOption: {
      edit: {
        label: '编辑事项',
        tip: '编辑事项的字段值',
      },
      delete: {
        label: '删除事项',
        tip: '永久删除选中的事项',
      },
      transition: {
        label: '流转状态',
        tip: '流转事项的状态',
      },
    },
    hasPermissionText: '无操作权限',
    message: [
      '请选择操作',
      '请选择操作项',
      '请选择事项',
      '当前没有可流转事项或者您无流转权限，请确认后重试',
      '请选择状态',
      '没有可处理的事项',
      '当前状态无法继续流转或者没有权限',
    ],
    operateText: '选择您要对所选事项执行的操作',
    batchOperate: '批量操作',
    goBack: '上一步',
    finish: '结束',
  },
  columns: {
    itemName: '事项名称',
    workflow: '可选工作流程',
    result: '结果',
    fieldName: '字段名',
    fieldValue: '字段值',
    statusToggle: '状态转换',
    key: 'Key',
    item: '影响的事项',
    operate: {
      edit: {
        header: '修改字段',
      },
    },
    modal: {
      delete: {
        title: '删除事项',
        content: '所选事项会被删除（若有子事项则一起被删除），此删除操作不可撤销，是否确认？',
      },
    },
    transition: {
      workflow: '工作流',
      selectTransition: '选择转换',
      statusTransition: '状态转换',
      fields: '选择和编辑此转换上可用的字段',
      noFields: '此页面上没有与这项转换相关的字段。',
      change: '此更改影响{{length}}个事项',
      emptyTip: '暂无操作信息',
      panel: {
        header: '不可用的流转',
      },
    },
    ResultTable: {
      redisLockTip: '保存卡片数据时出现异常，请检查数据是否一致',
    },
    Relation: {
      inward: '关联方',
      outward: '被关联方',
      relationItem: '被关联事项',
      association: '关联关系',
      successAndError: '成功关联 {{successNum}} 条，失败 {{errorNum}} 条',
      cancel: '取消选择',
      chooseItem: '选择关联事项',
      noLinkType: '暂无可用的事项关联',
      addLinkType: '请添加关联事项',
    },
  },
};

export const LinkModal = {
  default: {},
  placeholder: {
    relateItem: '请输入事项关联名称，长度 2-40 个字符',
    outward: '请输入被关联方描述，长度 2-60 个字符。',
    inward: '请输入关联方描述，长度为2-60个字符。',
    itemType: '请选择类型',
  },
  modal: {
    btnTitle: '新建事项关联',
    title: '新建【 一对多 】事项关联',
    title1: '新建【 多对多 】事项关联',
    cancelBtnText: '取消',
    defaultOkBtnText: '确定',
    okBtnText: '执行',
    selectedItemCount: '已选择 {{count}} 项',
    resultPage: {
      table: {
        sourceName: '关联方标题',
        sourceKey: '关联方事项ID',
        destinationName: '被关联方标题',
        linkTypeName: '关联名称',
        result: '结果',
        reason: '失败原因',
        success: '成功',
        failed: '失败',
      },
      addRelateSuccess: '事项关联成功',
      failedLinkAlterMessage: '成功关联 {{success}} 个事项，有 {{failed}} 个事项关联失败',
      successLinkMessage: '已成功关联 {{success}} 个事项',
    },
  },
  FormField: {
    type: '选择事项关联类型',
    name: '事项关联名称',
    inward: '关联方描述',
    inwardItemType: '关联方的类型',
    all: '全部类型',
    some: '指定类型',
    outward: '被关联方描述',
    outwardItemType: '被关联方的类型',
  },
  oneToMany: {
    title: { one: '一对多', many: '多对多' },
    tip: {
      one: '区分“发起关联的内容”和“被关联的内容”。比如需求拆解为多个任务，任务上显示来源的需求',
      many: '区分“发起关联的内容”和“被关联的内容”。比如缺陷转为多个相关任务，任务上显示多个来源缺陷',
    },
  },
};

export const itemMove = {
  title: '事项迁移',
  currentItem: '当前事项：',
  targetWorkspace: '目标空间',
  targetItemType: '目标类型',
  selectWorkspace: '请选择空间',
  selectItemType: '请选择类型',
  step1: '选择迁移目标',
  step2: '检验变更字段',
  step3: '变更内容确认',
  step4: '完成',
  flowTransition: '流程动作：',
  step1Content: '第1步：选择迁移目标空间及类型',
  step2Content: '第2步：事项迁移的字段及状态更新',
  step3Content: '第3步：事项变更内容确认',
  tip: '您必须选择一个不同的空间或类型',
  lastStep: '上一步',
  nextStep: '下一步',
  handling: '正在处理...',
  fieldChange: '字段变更',
  nothingCheck: '没有校验字段',
  statusChange: '状态变更',
  workflowChange: '工作流字段变更',
  selectTransition: '请选择流程动作',
  fieldName: '字段名称',
  flowChart: '流程图',
  notExists: '事项不存在',
  current: {
    status: '现状态',
    workflow: '现工作流：',
    field: '迁移前',
  },
  next: {
    status: '迁移后状态（括号内为流转流程）',
    workflow: '迁移后工作流：',
    field: '迁移后',
  },
  moveText: '开始迁移',
  moveSuccess: '事项迁移成功',
  moveFailed: '事项迁移失败',
  moveTimeOut: '网络异常，请重新查询事项是否被迁移',
  back: '返回列表',
  backToFirst: '返回第一步',
  hierarchyTip1: '当前事项存在同空间的子事项，不能跨空间迁移',
  hierarchyTip2: '当前事项存在同空间的子事项，选择的类型不符合事项层级方案',
  hierarchyTip3: '当前事项存在同空间的父事项，选择的类型不符合事项层级方案',
  tipMsg:
    '事务的目标项目可能与源项目的设置不同。即使它们的名称相同，事务类型也可能使用不同的工作流程和字段。在项目之间移动事务时，您可能会丢失数据。事项迁移过程中版本、迭代、事项组以及一些插件信息会被清空。',
};

export default { item, itemGroup, itemMove, itemImport, itemTypes, itemsBatchOperate, LinkModal };
