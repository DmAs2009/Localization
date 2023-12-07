/**
 * 按钮文案，按系统设置和空间设置暂时区分为两个模块
 * 1. settings
 * 2. workspaces
 */
// import global from './global';

export const btnText = {
  settings: {
    workspaceTemplate: '空间模版',
    itemType: '类型',
    itemTypeHierarchyScheme: '类型层级方案',
    itemLink: '事项关联',
    securityLevelScheme: '安全级别方案',
    screen: '界面',
    screenScheme: '界面方案',
    itemTypeScreenScheme: '类型界面方案',
    field: '字段',
    priority: '优先级',
    fieldBehavior: '字段行为',
    automationScenes: '自动化场景',
    status: '状态',
    workflow: '工作流',
    workflowScheme: '工作流方案',
    user: '用户',
    role: '角色',
    userGroup: '用户组',
    workspaceRole: '{{title}}',
    permissionScheme: '{{title}}',
  },
  workspaces: {
    item: '{{name}}',
    authorization: '授权',
    board: '面板',
    member: '成员',
    itemGroup: '事项组',
  },
};

export default btnText;
