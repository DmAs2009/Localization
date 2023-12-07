/**
 * @name 视图
 */
import btnText from './btnText';
import global from './global';

export const screen = {
  default: {
    title: '界面',
    modalTitle: '{{modalTitle}}{{title}}',
    createScreenScheme: '新建界面方案',
    screenScheme: '界面方案',
    defaultScreen: '默认界面',
    deleteScreen: '删除界面',
    noSelectComponent: '未选择组件',
    emptyField: '当前字段不存在',
    MAX_NESTED_DEPTH: '当前组件层级过深',
    screenWidthDescription: '当前预览区宽度：',
    Popover: {
      content: '包含必填项',
    },
    addComponent: '请添加组件',
    message: '当前组件不支持放入双栏或三栏容器中',
    valueFont: ['{{name}}不能为空', '名称不能为空', '名称', '长度', '个', '字符', '名称已存在'],
  },
  FormField: {
    tag: '标签对齐',
    tagWidth: '标签宽度',
    left: '左对齐',
    right: '右对齐',
    top: '顶部对齐',
    columnsPadding: '栅格间隔',
    defaultValuesScript: '默认值配置脚本',
    validateScript: '验证脚本',
    viewDoc: '查看说明文档',
    beforeSaveScript: '保存前配置脚本',
    afterCreatedItemScript: '事项创建成功后执行脚本',
    message: '暂不支持多个字段控制同一字段，请检查组件ID：{{name}}的脚本，修改后刷新页面生效',
  },

  editor: {
    panel: {
      tabConfig: {
        btn: '添加标签页',
      },
      PanelTabs: {
        name: ['控件设置', '表单设置'],
      },
    },
    widget: {
      tip: ['没有找到相关字段'],
      tabs: {
        name: {
          Layout: '布局排版',
          System: '系统组件',
          Custom: '自定义字段',
        },
      },
    },
  },
  scheme: {
    default: {
      title: '类型界面方案',
      screenScheme: '界面方案',
      description:
        '界面方案允许您选择针对每个事项操作显示的界面。界面方案通过类型界面方案与类型对应，可以关联一个或多个空间模板',
    },
    placeholder: ['请填写界面名称', '请填写界面描述'],
    operations: {
      defaultScreen: '默认界面',
      createScreen: '新建界面',
      editScreen: '编辑界面',
      viewScreen: '查看界面',
    },
    columns: {
      screenType: '事项操作',
      name: '界面',
    },
    modal: {
      delete: {
        title: '删除',
        content: '确定删除此项吗？',
      },
      deleteScreenScheme: {
        title: '删除界面方案',
        content: '确定删除界面方案「{{name}}」吗？',
      },
      linkItemAndScreen: '将事项操作与界面关联',
      validate: {
        actionRequired: '请选择动作',
        screenRequired: '请选择界面',
      },
    },
    ScreenTable: {
      message: ['该数据已被删除'],
      title: '界面',
      description: '将不同类型的新建、编辑、查看视图内容排版布局、显示设置等定制化与集中管理能力',
      modal: {
        title: ['编辑界面', '新建界面'],
      },
      columns: {
        name: '界面名称',
      },
    },
  },
  views: {
    createScreenBtn: global.getBtnText(btnText.settings.screen),
    createScreenSchemeBtn: global.getBtnText(btnText.settings.screenScheme),
    configTitle: `${global.config}{{name}}`,
  },
};

export default screen;
