/**
 * @name 工作流
 */

import btnText from './btnText';
import global from './global';

export const workflow = {
  default: {
    scheme: global.workspaces.workflowScheme, // '工作流方案',
    add: '新建',
    edit: '编辑',
    copy: '复制',
    status: '状态',
    title: '工作流',
    editWorkflow: '编辑工作流',
    copyWorkflow: '复制工作流',
    addWorkflow: '新建工作流',
    editTitle: '工作流编辑',
    submitConfig: '确定并配置',
    description: '工作流允许您自定义创建特定工作流程状态流转',
    start: '未开始',
    inProgress: '进行中',
    finished: '已完成',
    createStatus: '新建状态',
    pageTitle: '新增流程',
    saveDraft: '保存为草稿',
    savePublish: '保存并发布',
    elseTypeTitle: '流转规则',
    createNode: '新建',
    startNodeName: '开始',
    addRule: '添加规则',
    userType: {
      users: '单个用户',
      groups: '用户组',
      roles: '用户角色',
      customFields: '用户类型',
      workspaceRoles: '空间角色',
      creatorAuth: '事项创建人',
    },
    elementName: {
      transition: '动作',
      status: '状态',
      any: '任意动作',
    },
    permissionType: {
      restrictMovement: '限制可以流动的人员',
      selectUser: '选择用户',
      content: '允许某些特定的人才能进行此状态流转',
    },
    fieldType: {
      checkItemField: '检查事项的字段',
      checkItemFieldDesc: '检查事项字段（只有以下字段满足条件才能执行此流转）',
      content: '状态流转时，确保字段值满足某些条件才能流转',
    },
  },
  rule: {
    allow: '允许',
    transition: '进行此状态流转',
    checkField: '校验字段',
    whether: '是否',
    selectRule: '选择流转规则',
    setCondition: '设置流转条件',
    transitionRequired: '请完善未命名动作名称',
    maxTransitionLength: '长度最大为40',
  },
  modal: {
    editStatus: {
      title: '编辑状态',
    },
    createStatus: {
      title: '新建状态',
    },
    delStatus: {
      title: '删除状态',
      content: '确定删除状态「{{value}}」吗？',
    },
    delWorkflow: {
      title: '删除工作流',
      content: '确定删除工作流「{{value}}」吗？',
    },
    delScheme: {
      title: '删除工作流方案',
      content: '确定删除工作流方案「{{value}}」吗？',
    },
    delItem: {
      title: '删除',
      content: '确定删除此项吗？',
    },
    editItem: {
      title: '编辑“{{name}}”分配事项',
    },
    addWorkflow: '添加工作流',
    deleteConfig: {
      title: '删除工作流配置',
      content: {
        text: '确定删除「{{name}}」配置吗？',
        deleteTip: '删除后数据将不能恢复，请谨慎操作',
      },
    },
  },
  columns: {
    name: '名称',
    schemeName: '方案名称',
    workspaces: '应用空间数',
    usageWorkflow: '应用工作流',
    usageScheme: '应用方案数',
    itemType: '类型',
    statusType: '状态类型',
    workflow: '已分配工作流',
    workFlowTitle: '工作流',
    configPage: '添加工作流',
    workflowName: '工作流名称',
    step: '流转步骤',
    releaseStatus: '工作流状态',
    haveRelease: '已发布',
    draft: '草稿',
    updatedAt: '最新修改时间',
  },
  message: {
    needNode: '开始节点需要连接一个状态',
    anyStatus: '任意状态的名称和连接线命名不能一样',
    sameStatus: '同一状态的连接线命名不能一样',
    noDraft: '当前工作流已经被工作流方案引用，无法保存为草稿',
    noDelete: '当前流程状态存在已应用的事项，无法删除',
    noTarget: '不能将开始节点作为目标连接点',
    noManyTarget: '开始节点不能连接多个目标点',
    namedLineNamed: '连接线需要命名',
    name: '请填写流程名称',
    workflow: '该状态有应用到工作流上，不能删除',
    workflowScheme: '该工作流有应用到工作流方案上，不能删除',
    error: '流程名称已存在',
    fetchFail: '请求失败',
    nameExist: '该名称已存在',
    nodeUsed: '当前状态连接的动作已经被审批节点使用，请取消后删除',
    transitionUsed: '当前动作已经被审批节点使用，请取消后删除',
  },
  placeholder: {
    screen: '请选择界面',
    desc: '请输入描述信息，最大256字',
    selectStatus: '请选择状态类型',
    keywords: '请输入搜索关键字',
    user: '请选择用户',
    userGroup: '请选择用户组',
    userType: '请选择类型用户',
    workspaceRole: '请选择空间角色',
    nameTip: '请输入名称，最长{{max}}字',
    descTip: '请输入描述信息，最长256字',
    number: '请填写数字',
    text: '请填写文本',
    itemType: '请输入类型',
    flow: '请输入工作流',
    statusName: `请输入状态名称，长度{{min}}-{{max}}个字符`,
    statusNameKeyWord: '请输入状态名称',
    currencyChoose: '请选择',
    currencyChooseAndSearch: '请选择或关键词搜索',
  },
  validate: {
    field: '不能为空',
    name: '名称不能为空',
    status: '状态名称已存在',
    desc: '描述字数不能超过256个',
    workflowName: '工作流名称已存在',
    noEmptyStatusName: '状态名称不能为空',
    statusNameExist: '状态名称已存在',
    NAME_VALIDATE_ERROR: '名称必须以字母或汉字开头',
    NAME_LENGTH_ERROR: `名称，长度{{min}}-{{max}}个字符`,
    noEmptyStatusType: '状态类型不能为空',
  },
  FormField: {
    tip: '允许以下选中范围进行状态流转：',
    users: '用户',
    groups: '用户组',
    customFields: '用户类型',
    workspaceRoles: '空间角色',
    statusName: '状态名称',
    statusType: '状态类型',
    screen: '流转界面',
    rules: '流转规则',
    editRules: '编辑规则',
    add: '添加',
    actionPermission: '动作权限',
    panel: {
      header: '检查事项字段',
      deleteAll: '已删除',
    },
    isAny: '是否支持任意节点连接',
    tabPane: {
      tab: '脚本设置',
      verify: '验证脚本',
    },
    keywordValue: '关键字值',
    attributeValue: '属性值',
    fieldNotNull: '字段不能为空',
    conditionNotNull: '条件不能为空',
    fieldValueNotNull: '字段值不能为空',
  },
  property: {
    node: {
      anyCheck: '支持任何状态的事项移至此状态',
    },
  },
  views: {
    commonTab: '通用设置',
    scriptTab: '脚本设置',
    property: '属性',
    approvalTab: '审批设置',
    propertyInfo: `通过输入动作线的优先级大小来确定动作名的排序，\r\n数字越小优先级越高`,
    allItemTypesName: '所有未分配类型',
    transitionState: '状态转化',
    anyState: '任意状态',
    start: '开始',
    deleteRule: '删除该规则',
    cancel: '取消',
    preStep: '上一步',
    continueConfig: '继续配置',
    okText: '确定',
    nextStep: '下一步',
    submit: '确认',
    status: '允许事项创建人进行此状态流转',
    selectWorkflow: '选择工作流',
    assignmentItemType: '分配类型',
    editText: '编辑工作流方案',
    createText: '新建工作流方案',
    tableMsg: {
      title: '工作流方案',
      description: '工作流方案允许您为适用特定类型和空间定义工作流',
    },
    approval: {
      openApproval: '开启审批',
      approvalSetting: '审批人设置',
      addApprover: '添加审批人',
      approvalCount: '审批人数',
      approvalRange: '审批人范围',
      acceptApprovalAndTransform: '如果同意审批，则选择转换',
      rejectApprovalAndTransform: '如果拒绝审批，则选择转换',
      otherSetting: '其他设置',
      commitWriteApprovalOpinion: '提交时需要填写审批意见',
      allowAppendApprover: '允许加签',
      allowDelegateApprover: '允许委派审批',
      autoTransition: '允许自动流转',
      setApprovalRange: '设置审批人范围',
      setFlowStatus: '审批步骤设置',
      limitNumber: '限制人数',
      groupLimitNumber: '每个组限制人数',
      approvalOrigin: '审批人来源',
      userGroup: '用户组',
      field: '字段',
      allPeople: '所有人',
      specificNumber: '特定数量人员',
      fromGroupSpecificNumber: '来自每个组的特定数量人员',
      validateApproval: '请选择审批人数',
      validateApprovalNumber: '请选择限制人数',
      validateApprovalOrigin: '请选择审批人来源',
      validateApprovalUsers: '请选择用户组',
      validateApprovalField: '请选择字段',
      validateTranslationNode: '请选择流转动作',
      userField: '用户字段',
      userGroupField: '用户组字段',
      approvalTipsWarn: '当前节点少于2个可流转状态，请至少连接2个可流转状态，进行审批配置。',
      approvalTipsInfo: '流程审批同意或拒绝后不可向同一状态流转，需设置2个及以上的可流转状态，才可使用审批。',
      approvalSetInfo: '需完成审批人设置才可开启',
      transitionDeleteTip: '此流转节点已被删除，请重新配置，否则审批不生效',
    },
    createBtn: global.getBtnText(btnText.settings.workflow),
    createWorkflowSchemeBtn: global.getBtnText(btnText.settings.workflowScheme),
    createStatus: global.getBtnText(btnText.settings.status),
  },
  condition: {
    isEmpty: '为空',
    notEmpty: '非空',
    equal: '等于',
    equalTo: '等于',
    greaterThan: '大于',
    greaterThanOrEqualTo: '大于等于',
    lessThan: '小于',
    lessThanOrEqualTo: '小于等于',
    notEqualTo: '不等于',
    containedIn: '包含',
    notContainedIn: '不包含',
  },
  statusType: {
    Start: '未开始',
    InProgress: '进行中',
    Finished: '已完成',
  },
  approval: {
    completed: '您已完成审批',
    notCompleted: '流程需要您的审批',
    appendUsers: '加签',
    delegate: '委派审批',
    comment: '审批意见',
    appendUsersModalTitle: '添加加签审批人',
    interval: '了审批{{status}}，历时{{time}}',
    approved: '同意',
    rejected: '拒绝',
    pending: '流转审批中...',
    finished: '审批结束，状态待流转',
    allowAppendApprover: '，可加签，',
    period: '，',
    expand: '展开查看详情',
    commentContent: '审批意见：{{comment}}',
    delegateTip: '委派',
    delegateTo: '委派给{{name}}',
    split: '、',
    approvedComment: '审批意见：',
    approvedRecord: '审批记录：',
    approvedFinish: '，审批结束',
    message: {
      confirm: '确定【{{status}}】当前审批吗，审批后不可撤回',
      error: '请填写审批意见',
      appendUsers: '已为流程添加{{count}}位加签人，详情可查看“状态流转”记录',
      delegateUser: '委派用户成功',
      approvalSuccess: '提交成功',
    },
  },
  appendUsers: {
    add: '为该流转添加了',
    users: '位加签人',
  },
  delegate: {
    completed: '您委派的审批已完成，结果如下，请确认',
    delegateTo: '您已将审批委派给：',
    waiting: '{{name}}，等待被委派人审批中',
    delegateLabel: '被委派人：',
    delegateComment: '审批意见：',
    delegateStatus: '审批结果：',
    hiddenCompleted: '您委派的审批已完成',
    hiddenDelegateTo: '您已将审批委派',
  },
};

export default workflow;
