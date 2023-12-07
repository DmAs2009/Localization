/**
 * @name API Token 管理
 */

import global from './global';
import message from './message';

const moduleName = 'API Token';

const apiToken = {
  moduleName,
  title: `${moduleName}管理`,
  menuTitle: 'API token管理',
  search: '请输入相关描述进行搜索',
  createBtnText: global.modal.getCreateModule(moduleName),
  tableColumns: {
    token: 'Token',
    name: global.columns.iconAndName,
    description: global.columns.description,
    createdBy: global.createdBy,
    createdAt: global.createdAt,
    expiresAt: '有效时间',
    operation: {
      title: global.columns.operation.title,
      edit: global.columns.operation.edit,
      copy: global.copy,
      delete: global.columns.operation.delete,
      translate: global.columns.operation.translate,
    },
  },
  formFields: {
    description: global.columns.description,
    placeholder: '请输入描述来创建Token',
  },
  modal: {
    create: global.modal.getCreateModule(moduleName),
    edit: global.modal.getEditModule(moduleName),
    view: {
      title: `复制${moduleName}`,
      ok: `复制Token`,
    },
    delete: {
      title: global.modal.getDeleteModule(moduleName),
      message: {
        ...message.default.delete,
        confirm: '当前 Token 一经删除将不可以恢复，请确认是否要删除该 Token ？',
      },
    },
  },
};

export default apiToken;
