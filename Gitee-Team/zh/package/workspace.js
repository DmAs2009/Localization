/**
 * @name 空间 workspace
 */

import btnText from './btnText';
import global from './global';
import message from './message';

const moduleName = '空间';

const defaultConfig = {
  validate_msg: '空间名称, 长度 2-30 个字符',
  itemImport: '事项导入',
  description: {
    noDesc: '暂无描述',
    noTypeDesc: '暂无分类描述',
    allTemplate: '全部模版',
    noType: '未分类',
  },
  allWorkspace: '全部空间',
  createBtn: `${global.newAdd}${global.workspace}`,
  createBtnText: global.modal.getCreateModule(moduleName),
  auth: {
    title: global.workspace + global.permissionManagement,
    addBtn: `${global.add}${global.auth}`,
    currentPermissionScheme: '当前应用对角色权限方案',
  },
  ALL_MEMBER: '全部成员',
  WORKSPACE_CREATOR: '空间创建人',
  WORKSPACE_MANAGER: '空间管理员',
  allMember: '全部成员',
  createRole: '新建角色',
  workspaceMemberManagement: '空间成员管理',
  workspaceRole: '空间角色',
  customRole: '自定义角色',
  addWorkspace: '新建空间',
  editWorkspace: '编辑空间',
  emptyDataDefaultProps: {
    emptyInfo: '未匹配到对应空间，换个关键词试试吧',
    operationInfo: '您还没有创建任何空间',
  },
};
// 空间
export const workspaces = {
  default: defaultConfig,
  views: {
    modal: {
      editTitle: `${global.edit}{{title}}`,
      createTitle: `${global.create}{{title}}`,
    },
    createMemberBtn: '添加新成员',
    layout: {
      default: '事项视图',
      hierarchy: '层级视图',
      structure: '结构视图',
      kanban: '看板',
      gantt: '甘特图',
      storyMapping: '用户故事地图',
      calendar: '日历视图',
      split: '分栏视图',
    },
    // 空间信息
    workspaceInfo: '空间信息',
    // 功能开关
    components: '功能开关',
    // 面板管理
    boardManagement: global.board + global.management,
    createBoard: global.getBtnText(btnText.workspaces.board),
    IN_WORKSPACE: '空间内面板',
    ACROSS_WORKSPACE: '跨空间面板',
    // 事项组管理
    itemGroupsManagement: global.itemGroups + global.management,
    createItemGroups: global.newAdd + global.itemGroups,
    // 事项组权限
    itemGroupsPermission: global.itemGroups + global.permission,
    // 添加权限规则
    addAuthRules: `${global.add}${global.permission}${global.rule}`,
    viewPermissionScheme: '查看角色权限方案',
    // 角色权限方案
    permissionSchemeName: global.workspaces.permissionSchemeName + '：',
    tooltip: {
      tip: '当前角色不可操作，请选择其他的空间角色',
      addNewMember: '添加新成员',
    },
    workspaceAbstract: '空间摘要',
    workspaceDesc:
      '类型层级确定哪些类型将对一组空间模板可用。它还允许您添加/移除事项层级选项、调整层级顺序；通过类型界面方案，您可以选择应用于每个类型的界面方案。然后，再把类型界面方案关联到一个或多个空间模板上，以指定界面方案，并确定应用于空间模板事项的特定事项操作界面；工作流方案允许您为适用特定类型和空间定义工作流。',
    workspaceTemplate: global.workspaces.workspaceTemplate,
    itemTypeHierarchyScheme: global.workspaces.itemTypeHierarchyScheme,
    itemTypeScreenScheme: global.workspaces.itemTypeScreenScheme,
    itemTypeWorkflowScheme: global.workspaces.itemTypeWorkflowScheme,
    securityLevelScheme: global.workspaces.securityLevelScheme,
    itemType: {
      title: '类型',
      desc: '跟踪不同类型的事项，如需求、缺陷、任务。每个事项的类型可以进行不同的界面、工作流配置。',
    },
    drawerHeader: {
      selectWorkspaceTemplate: '选择空间模版',
      enterWorkspaceDetail: '填写空间详情',
    },
    tableDisplaySettings: '表格显示设置',
    addBlankSpace: '新建空白空间',
    updateTemplateBtn: '更改模版',
    updateAvatar: '更换头像',
    createWorkspaceBtn: '创建空间',
    moveItem: '迁移事项',
  },
  modal: {
    delete: {
      title: global.modal.getDeleteModule(moduleName),
      message: {
        //...message.default.delete,
        confirm: message.default.delete.typeConfirm(moduleName),
      },
    },
    create: {
      title: global.modal.getCreateModule(moduleName),
    },
    edit: {
      title: global.modal.getEditModule(moduleName),
    },
    editRole: '编辑角色',
    deleteWorkspace: {
      // 删除空间
      title: global.delete + global.workspace,
      content: `确定要删除空间「{{name}}」吗？`,
    },
    deleteBoardRule: {
      title: '移除面板规则',
      content: '移除后该面板权限对空间所有成员开放，您确定要移除吗？',
    },
    deleteName: {
      title: '删除{{name}}',
      content: `确定删除「{{name}}」吗？`,
    },
    move: {
      title: global.remove + global.itemGroups + global.rule,
      content: `移除后该事项组权限对空间所有成员开放，您确定要移除吗？`,
    },
    deleteTip: {
      title: '提示',
      content: `确定要删除[{{name}}]吗?`,
    },
  },
  columns: {
    boardName: global.board + global.name, // 面板名称
    filterSource: global.board + global.type, // 面板类型
    username: global.createdBy, // 创建人
    //授权角色/用户
    permission: `${global.auth}${global.role}/${global.user}`,
    itemGroupsName: global.itemGroups + global.name, // 事项组名称
    createdAt: global.createdAt, // 创建时间
    updatedAt: global.updatedAt, // 跟新于
    operation: global.operation, // 操作
    itemType: global.itemType, // '类型',
  },
  pageTitle: defaultConfig.allWorkspace,
};

export const workspaceScheme = {
  default: {
    title: '空间配置方案',
    createTitle: '新建空间配置方案',
    desc: '跟踪不同类型的事项，如需求、缺陷、任务。每个事项的类型可以进行不同的界面、工作流配置。',
    description: '方便您利用配置好的事项方案，快捷的创建特定的空间模板',
  },
  modal: {
    editTitle: '编辑空间配置方案',
    deleteTitle: '删除空间模板',
    content: '确定删除空间方案「{{value.name}}」吗？',
  },
  columns: {
    name: global.name, // '名称',
    description: global.description, // '描述',
    //   '类型层级方案',
    itemTypeHierarchyScheme: `${global.workspaces.itemTypeHierarchyScheme}：`,
    itemTypeScreenScheme: global.workspaces.itemTypeScreenScheme, // '类型界面方案',
    workflowScheme: global.workspaces.itemWorkflowScheme, //  '事项工作流方案',
  },
};

export const workspaceTypes = {
  default: {
    workspaceType: global.workspaces.workspaceType, // '空间类型',
    createWorkspaceType: '新建空间类型',
  },
  modal: {
    editTitle: '编辑空间类型',
    deleteTitle: '删除空间类型',
    content: '确定要删除空间类型「{{contentName}}」吗？',
  },
  columns: {
    name: '图标/空间类型名称',
    itemTypeScreenScheme: '类型界面方案',
    workflowScheme: '类型工作流方案',
  },
};

// 模版
export const workspaceTemplate = {
  default: {
    name: '空间模版',
    tagName: '分类名称',
    templateTypeManage: '模版分类管理',
    title: `${global.workspace}${global.template}：`, //  '空间模版',
  },
  modal: {
    delete: {
      title: global.delete, // '删除',
      deleteTemplateType: '是否确认删除该模板分类?',
      deleteWorkspaceTemplate: '是否确认删除该空间模板?',
    },
    create: {
      title: global.newAdd + global.workspace + global.template, //  '新建空间模版',
    },
    edit: {
      title: global.edit + global.workspace + global.template, // '编辑空间模版',
    },
    editTemplateType: '编辑模板分类',
    createTemplateType: '新建模板分类',
    editWorkspaceTemplate: '编辑空间模板',
    createWorkspaceTemplate: '新建空间模板',
  },
  columns: {
    name: global.typeName, // 分类名称
    description: global.description, // 描述
    templateName: global.template + global.name, // '模版名称',
    workspaceCount: '使用空间数',
    workspaceScheme: '空间配置方案',
    createdBy: global.createdBy, //  '创建人',
    createdAt: global.createdAt, // '创建时间',
  },
  view: {
    addTypeBtn: '新建分类',
    CreateByEmpty: '创建空白模版',
    CreateByWorkspace: '基于已有空间创建模版',
    createBtn: global.getBtnText(btnText.settings.workspaceTemplate),
  },
};

export const board = {
  default: {
    createSubtitle: '新建{{name}}',
    addGroup: '新增分组',
    moveToGroup: '移动到分组',
    addWorkspaceBoard: '添加空间内面板',
    ADD_ACROSS_WORKSPACE: '添加跨空间面板',
    allItem: '全部事项',
    otherBoard: '其他面板',
    boardPermission: '面板权限',
    createGroup: '新建分組',
  },
  view: {
    filterTypeOptions: {
      GLOBAL_FILTER: '保存的筛选器',
      CUSTOM_FILTER: '自定义筛选条件',
    },
    deleteBoardModal: {
      deleteBoardBtn: '确定删除{{text}}吗？',
    },
  },
  modal: {
    permission: {
      title: '{{title}}权限设置',
      allText: '被授权的角色/用户组将拥有全部面板的查看权限',
      text: '被授权的角色/用户组将拥有当前面板的查看权限',
    },
    board: {
      deleteTitle: '删除面板',
      move: '移动任务到其他面板',
      delete: '删除所有事项',
    },
  },
  itemTypeSetting: {
    modalTitle: '面板类型显示范围设置',
    modalInfo: '数据范围会影响当前面板下，可创建的类型，默认该空间下的一级类型均可创建',
    itemType: '类型显示范围：',
    textButton: '类型显示',
    itemTypeColum: '新建类型显示',
    clear: '清空已选',
    choseItems: '已选{{count}}项',
    choseItem: '已选{{count}}项',
  },
  operateWidth: '230',
};

export const boardView = {
  default: {
    view: '视图',
    viewManagement: '视图管理',
    title: '请点击搜索让筛选条件生效，方可进行保存',
  },
  modal: {
    title: '视图管理',
    delete: {
      title: '删除视图',
      content: '确定删除视图「{{name}}」？',
    },
  },
  view: {
    AuthComponent: {
      default: {
        title: '私有视图（只您个人可见）',
        share: '共享视图',
        tip: '（以下范围可见）',
      },
    },
    emptyViewTip: '需创建视图后，方可查看面板数据',
    roleNameEnum: {
      Workspace: '空间角色',
      Enterprise: '企业角色',
      Group: '用户组',
    },
    getErrorText: ['视图不存在', '操作异常，请稍后重试'],
  },
  group: {
    count: '{{count}}条记录',
  },
};

export default {
  board,
  boardView,
  workspaces,
  workspaceScheme,
  workspaceTypes,
  workspaceTemplate,
  // WorkspaceTypeModal,
};
