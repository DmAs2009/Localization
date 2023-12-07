/**
 * @name 迭代任务
 */

export const sprint = {
  default: {
    emptyTip: '暂无迭代数据',
    sprintTitle: '迭代规划',
    sprintBurndownChart: '迭代燃尽图',
    burndownChart: '燃尽图',
    title: '从迭代计划开始到计划结束时间区间内，理想情况下的存量事项曲线和实际未完成的事项曲线',
    allSprint: '所有迭代',
    onlyWorkspace: '只显示当前空间的迭代',
  },
  views: {
    pageHeader: {
      title: '迭代',
      finishSprint: '完成迭代',
      StartSprint: '开始迭代',
      remainingDay: '剩余 {{remainingDay}} 天',
      remainingDays: '剩余 {{remainingDay}} 天',
    },
    targetSprint: {
      label: '把所有未完成的事项移动到',
    },
    workingDay: '显示非工作日',
    options: {
      count: '事项数',
      StoryPoint: '故事点数',
    },
    submit: {
      contain: '此迭代包含 {{count}} 个事项',
      contains: '此迭代包含 {{count}} 个事项',
      title: '完成迭代: {{name}}',
      itemCount: '{{count}} 个已完成的事项',
      itemCounts: '{{count}} 个已完成的事项',
      unfinishedCount: '个未完成的事项',
      unfinishedCounts: '个未完成的事项',
    },
    VERSION: '版本',
    NAME: '标题',
    ASSIGNEE: '负责人',
    ITEM_TYPE: '类型',
    ITEM_GROUP: '事项组',
    PRIORITY: '优先级',
    COMPLETED: '已完成',
    ACTIVATED: '当前迭代',
    START: '未开始',
  },
  modal: {
    delete: '删除迭代',
    content: '确定删除该迭代吗？',
    edit: '编辑迭代',
    start: '开始迭代',
    week: '{{count}} 周',
    weeks: '{{count}} 周',
  },
  agileBoard: {
    board: '敏捷面板',
    currentWorkspace: '当前空间面板',
    other: '其他空间面板',
    boardName: '面板名称',
    create: '创建敏捷面板',
    all: '查看全部',
    filter: '的筛选器',
    nameExists: '该空间已存在相同名称的敏捷面板',
    nameFormat: '名称长度为 {{count}} 个字符',
    cancel: '取消',
    ok: '确定',
    next: '下一步',
    previous: '上一步',
    selectType: '选择面板源数据',
    type: {
      filter: '现有已保存筛选器',
      workspace: '现有空间',
      info: {
        filter: '面板可包含一个筛选器',
        workspace: '面板可包含一个或多个空间',
      },
    },
    boardSettings: {
      title: '面板设置',
      sourceWorkspace: '数据来源空间',
      sourceFilter: '数据来源筛选器',
      workspace: '面板所属空间',
      manager: '面板管理员',
      editFilter: '编辑筛选器',
    },
  },
};

export default sprint;
