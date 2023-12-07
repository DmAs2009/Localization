import application from './application';
import automation from './automation';
import { dataSource, fieldBehavior, fields } from './fields';
import filters from './filters';
import { item, itemGroup, itemImport, itemMove, itemsBatchOperate, itemTypes, LinkModal } from './item';
import itemTypesLocaleValues from './itemTypes';
import permission from './permission';
import plugin from './plugin';
import { chat, report } from './report';
import screen from './screen';
import settings from './settings';
import sprint from './sprint';
import { groups, member, users } from './users';
import version from './version';
import workflow from './workflow';
import { board, boardView, workspaces, workspaceScheme, workspaceTemplate, workspaceTypes } from './workspace';

const pages = {
  board,
  boardView,
  workspaces,
  workspaceScheme,
  workspaceTypes,
  workspaceTemplate,
  // fields
  fields,
  fieldBehavior,
  dataSource,
  //
  item,
  itemGroup,
  itemImport,
  itemMove,
  itemTypes,
  itemsBatchOperate,
  LinkModal,
  plugin,
  sprint,
  version,
  //
  users,
  groups,
  member,
  //
  workflow,
  permission,
  screen,
  // 过滤器
  filters,
  // 系统设置
  settings,
  // 工作台
  report,
  chat,
  // 应用中心
  application,
  // 自动化
  automation,
  itemTypesLocaleValues,
};

export default pages;
