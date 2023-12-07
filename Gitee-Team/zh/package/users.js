/**
 * @name 用户
 */

export const users = {
  default: {
    managementPlatUser: '管理平台用户',
    userManagement: '用户管理',
    username: '用户名',
    currentRole: '当前角色',
    editModalTitle: '编辑用户角色',
    delete: '(已删除)',
    forbidden: '(已禁用)',
  },
};

export const groups = {
  default: {
    users: '成员',
    placeholder: ['请输入角色名称，长度 2-40 个字符', '请输入描述'],
  },
  validate: {
    name: '用户组名称不能为空',
  },
  FormField: {
    name: '名称',
    key: '描述',
  },
  type: {
    custom: '自定义角色',
    builtIn: '内置角色',
  },
};

//
export const member = {
  default: {
    placeholder: ['请选择用户组'],
    message: ['移除成功', '添加失败请重试', '请选择一个用户或用户组'],
    validate: {
      required: '请输入名称',
      test: ['名称输入不能为空格', '名称长度不能超过', '描述长度不能超过', '新建空间角色成功'],
    },
    FormField: {
      placeholder: ['请输入角色名称', '请输入角色描述'],
      name: '名称',
      description: '描述',
    },
    modal: {
      title: ['提示', '添加成员用户和用户组'],
      content: `确定要移除「{{name}}」吗?`,
      Tooltip: '当前角色不可操作，请选择其他的空间角色',
      move: '移除',
    },
  },
};

export default { users, groups, member };
