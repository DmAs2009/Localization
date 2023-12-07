// 单独提取sections配置项
import date from './date';
import global from './global';

export const sections = {
  layout: '布局',
  verifyFields: '字段行为脚本验证',
  attribute: {
    title: '属性',
    basicSettings: '基础配置',
    tabName: '标签页标题',
    fieldSettings: '字段配置',
    fieldDataSettings: '字段数据配置',
    columnName: '列名称',
    viewCollection: '查看集合',
    optionRange: '选项范围',
    type: '类型',
    id: '组件 ID',
    name: '名称',
    fieldDesc: '字段说明',
    placeholder: '占位提示',
    isSupposedMultiple: '是否多选',
    max: '最大值',
    min: '最小值',
    numberType: '字段类型',
    addonBefore: '字段前缀',
    addonAfter: '字段后缀',
    dateRange: date.dateRange, // '时间段',
    timeFormat: date.format, // '时间格式',
    fieldNode: {
      collapseTitle: '面板标题',
      expandByDefault: '默认展开',
      enableDynamicRow: {
        label: '动态列宽',
        tooltip: '开启后，可支持在不同的顶层容器尺寸下，一行显示固定但不同的列数',
      },
      containerRows: {
        label: '列数',
      },
      dynamicRowsXS: {
        label: '列数-小尺寸',
        tooltip: '预览区宽度小于 576 px，如手机',
      },
      dynamicRowsMD: {
        label: '列数-中尺寸',
        tooltip: '预览区宽度在 576px 到 1200px 之间，如平板',
      },
      dynamicRowsXL: {
        label: '列数-大尺寸',
        tooltip: '预览区宽度大于 1200px，如电脑',
      },
      tabPosition: {
        label: '标签页位置',
        top: '顶部',
        left: '左侧',
        right: '右侧',
      },
    },
  },
  data: {
    title: global.data, // '数据',
    defaultValue: '默认值',
  },
};

export default sections;
