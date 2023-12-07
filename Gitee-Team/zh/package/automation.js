/**
 * @name 自动化
 */
import btnText from './btnText';
import global from './global';

const automation = {
  default: {
    cron: 'Cron表达式',
    selectOperation: '选择此触发器将执行的操作',
    inputContent: '请输入内容',
    inputErrorTip: '输入错误',
    title: global.automation, // '自动化',
    setAutomation: global.set + global.automation, // '设置自动化',
    tabBarInfo: '新建自动化场景',
    scenes: '自动化场景',
    template: '模板库',
    lastDay: '最后一天',
    utilsWords: ['字段', '表达式', '事项', '版本', '用户', '用户组', '空间'],
    defaultView: '默认面板',
    itemGroupList: '默认事项组',
    managementAutomation: '管理自动化',
    createAutomationBtn: '新建自动化',
    fieldSelect: '字段选择',
    newAddChildItem: '新建子事项',
    addChildItem: '添加子事项',
    view: {
      switch: {
        NodeContainer: {
          title: '添加组件',
          desc: '组件可以通过添加条件来限制执行、或者通过对相关事项进行分支控制流程或者直接执行操作',
        },
      },
      automationDetail: {
        nodes: {
          name: '添加触发器',
        },
        newNodeName: '触发器',
        modal: {
          title: '返回',
          content: '未保存的规则将无法恢复，确定要继续吗？',
        },
        header: {
          back: '返回列表',
        },
        panel: {
          basicInfo: '设置基本信息',
        },
      },
    },
    enabled: '开启',
    disabled: '关闭',
    enabledAll: '全部开启',
    disabledAll: '全部关闭',
  },
  modal: {
    title: '移动自动化',
  },
  utils: {
    ChangeLogMapping: {
      UPDATE: '配置更改',
      DISABLE: '禁用自动化',
      ENABLE: '启用自动化',
      CREATE: '创建自动化',
      DELETE: '删除自动化',
    },
    NodeDescFun: {
      WORKSPACE: '所属空间',
      ITEM_TYPE: '类型',
    },
    SUPPORT_REQUEST: {
      EXECUTOR: '查询当前处理人',
      CURRENT_ITEM: '查询事项(推荐使用对象查询)',
      fieldsName: '事项objectId',
      CUSTOM_SCHEME: '查询对象',
      select: '查询对象',
      body: '查询条件',
      DROPDOWN_FIELD: '自定义下拉字段label查询',
      fieldId: '查询字段',
      fieldValueDesc: '查询的value，使用逗号分割，可使用表达式',
    },
    linkTypeModeOptions: ['主动关联', '被动关联'],
    workflow: {
      approved: '通过',
      rejected: '未通过',
      pending: '审批中',
      allUsers: '所有审批人',
      unApprovedUsers: '未审批人',
      userFieldPlaceholder: '请选择工作流状态审批人',
      workflowApprovers: '工作流审批',
    },
  },
  common: {
    default: {},
    actionContinueToFailField: {
      title: '失败后继续执行',
    },
    alertMore: {
      header: {
        next: '下次运行',
        hide: '隐藏最近十次运行',
        show: '显示最近十次运行',
      },
    },
    automateLog: {
      refresh: global.refresh, // '刷新',
      changeLog: '变更日志',
      runningLog: '执行日志',
    },
    automationLogView: {
      logDetail: '操作详细信息',
      user: '操作人',
      retry: '重试',
      retrySuccessId: '重试{{retrySuccessId}}成功',
      confirmRetry: '确定重试{{executionId}}？',
      retryStatus: '重试{{status}}',
      viewRetryLog: '查看重试日志',
      retryLog: '重试日志',
      timeRange: '时间范围',
      retryFail: '自动化已被删除，该日志不能被重试',
    },
    automationRunningCom: {
      default: {
        passItem: '通过了以下事项',
        passWorkspace: '通过以下空间',
        noMatch: '以下事项与条件不匹配',
        noMatchRelateItem: '未匹配到相关事项',
      },
      runningContentDesc: '已链接事项',
    },
    changeLog: {
      default: {},
      columns: {
        createdAt: '日期',
        type: '状态',
        name: '名称',
        operation: { title: '详情', tip: ['显示更少', '显示更多'] },
      },
    },
    cloneItemExtraFields: {
      default: {},
      formField: {
        linkType: '事项间的关联关系',
        includeLinks: '复制关联关系（将事项的关联关系同步到克隆的事项中）',
        includeFiles: '复制文件字段（将事项的所有文件同步到克隆的事项中）',
      },
    },
  },
  fields: {
    name: global.user, //  '用户',
    userField: global.user + global.field, //'用户字段',
    status: '工作流状态',
    statusPlaceholder: '全部状态',
    approvalStatus: '审批状态',
  },
  nodeComponent: {
    // 待定 需要修改
    ActionCollectItem: {
      desc: `#{itemCollection.节点名称.result}#，返回相应主体，如果主体是 JSON对象，则可以使用点标记法访问值，其中节点名称输入“节点名称”。例如：#{itemCollection.{{key}}.result}#`,
    },
    actionCreateSubItem: {
      default: {
        updateTitle: '创建{{length}}个子事项',
      },
    },
    actionItemDelete: {
      Alert: {
        message: '删除一个事项时，其中的所有数据（包括评论和附件）也将无法恢复。保存此规则前，请仔细检查，以确保无误。',
      },
    },
    actionNotificationSend: {
      Tooltip: {
        title: `若通知内容需要跳转则输入相应的url地址，例如跳转事项详情页:  域名/{{tenant}}/workspaces/#{item.workspace.key}#/item/#{item.key}#,若无需跳转则无需输入`,
      },
      Panel: {
        header: '通知内容可用变量',
        content: [
          '#{{item.name}}#-获取事项标题;',
          '#{{item.itemType.name}}#-获取类型;',
          '#{{item.status.name}}#-获取事项状态;',
          '#{{actor.username}}#-获取执行用户的用户名;',
        ],
      },
    },
    actionWebRequest: {
      default: {
        desc: '#{webResponses.节点名称.body}#，返回相应主体，如果主体是 JSON对象，则可以使用点标记法访问值，其中节点名称输入“节点名称”。例如：#{webResponses.{{key}}.body.name}#',
      },
      FormField: {
        key: '节点名称（后续节点有应用到此节点的响应主体，可使用该节点名称获取）',
        basic: '请求URL',
        system: '系统内请求',
      },
      Panel: {
        header: '如何在后续规则操作中访问 Web 请求响应值？',
      },
    },
    branchAdvancedItem: {
      formField: {
        functionStr: '表达式函数（示例: return value), value为表达式的值）',
      },
    },
    branchItem: {
      // 待定
      default: {
        dataQuote: '数据引用字段',
        // updateTitle: `对于 {{find(BRANCH_ITEM_OPTIONS, ['value', type])?.label}`,
      },
      NodeContainer: {
        header: {
          desc: '请选择您需要针对哪个相关事项进行操作',
        },
      },
    },
    conditionIfElse: {
      Panel: {
        header: '选择条件类型',
      },
      ConditionAdd: '添加条件',
    },
    conditionIfUsers: {
      combineOperation: {
        all: '所有条件都必须匹配',
        any: '任意条件匹配',
      },
      desc: ['所有匹配', '任意匹配'],
      addButton: '添加用户其他条件',
    },
    cronField: {
      header: ['规则运行频率：每', '时间为'],
      basicByDay: '于',
    },
    notMatch: {
      description: '节点匹配错误',
    },
  },
  //
  AutomationList: {
    modal: {
      delete: {
        title: '删除自动化',
        content: '确定删除自动化「{{name}}」吗？',
      },
      copy: {
        title: '复制自动化',
        content: '确定复制该条自动化吗？',
      },
    },
  },
  AutomationScenes: {
    default: {
      message: {
        tip: '【{{name}}】下的自动化成功',
        noAuto: '暂无自动化',
      },
    },
    modal: {
      title: '删除{{name}}',
      content: '确定删除该自动化场景吗？',
      tip: ['请选择删除自动化场景后的操作'],
      deleteAllAutomation: '删除场景下的所有自动化',
      moveAutomation: '移动场景下的所有自动化到默认场景',
    },
  },

  BasicInfo: {
    default: {
      title: '基本信息',

      message: {
        name: '名称不能为空',
        actor: '执行人不能为空',
        workspaces: '应用空间字段不能为空',
      },
    },
    actorLabel: {
      label: '执行人',
      desc: '选择该自动化规则执行人',
    },
    workspaceLabel: {
      label: '应用空间',
      desc: '选择该自动化规则生效的范围',
    },
    FormField: {
      canOtherRuleTrigger: '允许规则触发器',
      canOtherRuleTriggerCheckbox: '检查以允许其他规则操作触发此规则。仅在需要此规则以响应另一条规则执行时启用此功能。',
      prodMode: '使用生产模式',
      prodModeCheckbox: '开启生产模式，不符合规则条件的触发器不会生成日志',
      notifyOnError: '发生错误时通知',
      owner: '负责人',
      ownerPlaceholder: '请选择负责人',
    },
    notifyOnErrorOptions: ['每次此规则失败时，向负责人发送电子邮件', '不要通知'],
  },

  SwitchMainType: {
    default: {
      message: ['请设置自动化名称', '存在未保存的节点', '自动化需要至少有一个action节点'],
    },
  },

  detail: {
    copy: '{{sourceLabel}}的{{copyFieldLabel}}字段',
  },
  views: {
    addScene: '创建场景',
    editScene: '编辑场景',
    createAutomationScenesBtn: global.getBtnText(btnText.settings.automationScenes),
  },

  time: {
    executionTime: '执行时间',
  },

  template: {
    existScenes: '添加到已有场景',
    newScenes: '添加至新建场景',
    scenes: '添加至自动化场景',
    description: '您可根据模版的配置修改、创建新的自动化，所做的改动不会影响原模板',
    message: '请选择场景',
    label: '选择自动化场景',
  },
};

export default automation;
