/**
 * @name 筛选器
 * view/default/组件/components
 */

import global from './global';
import message from './message';
import validate from './validate';
import { common } from './views';

const moduleName = '筛选器';

const columns = {
  name: global.columns.name,
  filterType: '筛选类型',
};

const filters = {
  moduleName,
  title: '筛选器',

  default: {
    title: moduleName,
    btnText: '筛选',
    addFilter: '筛选',
    AppLayout: {
      title: '筛选器',
      create: '新建筛选',
    },
    globalFilters: '全局筛选',
    name: '请输入名称，长度{{min}}-{{max}}个字符',
    globalTips: '（所有人可以查看）',
    emptyList: '列表为空',
    selfFilters: '个人筛选',
    selfTips: '（只有你自己可以查看到这个查询）',
    tips: '请点击搜索让筛选条件生效，方可保存',
    views: {
      changeText: '切换{{changeBtnText}}查询',
    },
    scopeOfFilter: '筛选范围 ',
    addCase: '新增条件',
    selected: '已选项',
  },
  columns,
  modal: {
    saveAs: {
      title: global.saveAs,
    },
    delete: {
      title: global.modal.getDeleteModule(moduleName),
      message: {
        ...message.default.delete,
        confirm: `确定要删除此筛选器吗？`,
      },
    },
    create: {
      title: global.modal.getCreateModule(moduleName),
    },
    edit: {
      title: global.modal.getEditModule(moduleName),
    },
  },
  validate: {
    name: {
      required: validate.getRequired(columns.name),
    },
    type: {
      required: validate.getRequired(columns.filterType),
    },
  },
  search: {
    numberRange: '数值范围',
    expression: 'IQL表达式',
    screeningConditions: '筛选条件',
    screenFieldLoading: '条件加载中',
    field: '字段为空, 请先添加字段',
    type: {
      basic: '基础',
      iql: 'IQL',
    },
    reset: global.reset,
    tips: '切换基础筛选需要先重置当前 IQL查询语句',
  },
  group: {
    range: '筛选范围字段',
    other: '其他字段',
  },
  components: {
    view: {
      grouping: '分组',
      SelectGroup: '选择分组',
      Tooltip: '切换基础筛选需要先重置当前 IQL查询语句',
      switching: '切换',
      reset: global.reset,
      fieldNoExist: '该字段不存在，分组不生效',
    },
    filterSearch: {
      to: '至',
      today: '今天',
      recentWeek: '最近一周',
      recentMonth: '最近一个月',
      recentThreeMonth: '最近三个月',
      filterSaved: '筛选条件已保存至当前视图',
      none: '无',
      fieldNoExist: '该字段不存在',
      ...common.searchSelect.default,
    },
  },
};

export default filters;
