const workspaceArchived = {
  archived: '已归档',
  archive: '归档',
  unarchive: '取消归档',
  archiveSuccess: '归档成功',
  archiveFail: '归档失败',
  recover: '恢复',
  recoverSuccess: '恢复成功',
  recoverFail: '恢复失败',
  ganttTip: '空间已归档，事项不可编辑',
  kanBanTip: '空间已归档，事项不可流转',
  alert: {
    disableEdit: '无法编辑此事项：',
    disableEditInfo: '因为它属于已归档项目。企业管理员可以从归档中恢复项目',
    archiveWarning: '归档后，项目内的事项、组件等将一同归档。事项将处于只读状态。请谨慎操作',
    archiveInfo: '项目归档后，项目内的事项相关的数据不可用编辑，请谨慎操作',
  },
  modal: {
    recoverTip: '确认要取消归档吗',
    radio: {
      only: '仅归档事项。',
      onlyDesc: '归档后，事项为只读状态，但可进行查询及统计分析',
      invisible: '归档事项且不可查询。',
      invisibleDesc: '归档后，事项为只读状态，且全局筛选器及其他查询处无法查询到该项目的事项',
    },
  },
  description: {
    first: '归档后，该项目内的所有事项都变为只读状态，不可编辑。',
    second: '且归档后如果再改变该项目使用的事项层级方案、工作流方案、界面方案等都会对数据产生影响，导致数据产生变更，',
    third: '建议在归档后不再更改以上方案，新的项目按照新的方案去生成。',
  },
};

export default workspaceArchived;
