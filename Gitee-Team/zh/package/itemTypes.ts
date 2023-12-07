import global from './global';
import message from './message';
import validate from './validate';

const moduleName = '类型';
const iconModuleName = '图标';

const icon = {
  moduleName: iconModuleName,
  upload: {
    text: '上传图标',
    tips: {
      fileType: '图标格式：jpeg、png、svg（推荐png或者svg）',
      size: ' 图标尺寸：20 × 20',
    },
    success: `${iconModuleName}${message.default.upload.success}`,
  },
  delete: {
    success: `${iconModuleName}${message.default.delete.success}`,
  },
  validate: {
    typeError: '文件格式不正确',
  },
};

export const itemTypesLocaleValues = {
  moduleName,
  description: '跟踪不同类型的事项，如需求、缺陷、任务。每个事项的类型可以进行不同的界面、工作流配置',
  tableColumns: {
    name: global.columns.iconAndName,
    description: global.columns.description,
    operation: {
      title: global.columns.operation.title,
      edit: global.columns.operation.edit,
      delete: global.columns.operation.delete,
      translate: global.columns.operation.translate,
    },
  },

  createBtnText: global.modal.getCreateModule(moduleName),

  formFields: {
    // TODO: get formField.name
    name: global.columns.name,
    key: global.key,
    description: global.columns.description,
    // TODO: get formField.icon
    icon: icon.moduleName,
    uploadIcon: icon.upload.text,
  },

  default: {
    itemType: '类型',
    itemTypeDescription: '跟踪不同类型的事项，如需求、缺陷、任务。每个事项的类型可以进行不同的界面、工作流配置',
    iconOrName: '图标/名称',
    placeholder: '请选择字段',
    message: [
      '图标删除成功',
      '文件格式不正确',
      '图标上传成功',
      '请选择事项关联',
      '事项关联类型不一致，请重新选择',
      '类型已存在',
    ],
    content: ['图标格式：jpeg、png、svg（推荐png或者svg）', '图标尺寸'],
    uploadTip: '上传图标',
    name: ['名称最少2个字符', '名称最多为40个字符'],
    itemTypeTip: '类型名称已存在',
    remove: '删除所有链接',
    deleteTip: '删除后数据将不能恢复，请谨慎操作',
    keywords: '请输入关键字',
  },
  columns: {
    defaultType: '默认类型',
    itemType: '类型',
    createScreen: '新建',
    editScreen: '编辑',
    viewScreen: '查看',
  },
  modal: {
    delete: {
      title: `${global.modal.deleteTitle} ${moduleName}`,
      message: {
        ...message.default.delete,
        confirm: message.default.delete.typeConfirm(moduleName),
      },
      // title: '删除链接类型：{{itemType.name}}',
      text: ['您确定要删除此链接类型吗？目前有', '个匹配的链接'],
      reset: '移动当前链接到链接类型：',
    },
    create: {
      title: `${global.modal.createTitle}${moduleName}`,
    },
    edit: {
      title: `${global.modal.editTitle}${moduleName}`,
    },
    link: {
      title: '给类型关联界面方案',
      itemType: '类型',
      screenScheme: '界面方案',
    },
  },
  scheme: {
    default: {
      title: '类型界面方案',
      description:
        '通过类型界面方案，您可以选择应用于每个类型的界面方案。然后，再把类型界面方案关联到一个或多个空间模板上，以指定界面方案，并确定应用于空间模板事项的特定事项操作界面',
      errorMsg: '方案名称已存在',
    },
    modal: {
      editTitle: '编辑类型界面方案',
      deleteTitle: '删除类型界面方案',
      createTitle: '新建类型界面方案',
      content: {
        areYouSure: '确定删除类型界面方案「{{item.name}}」吗？',
        deleteTip: '删除后数据将不能恢复，请谨慎操作',
      },
    },
    columns: {
      name: '方案名',
    },
  },
  linkTypes: {
    default: {
      title: '事项关联',
      description: '可新建事项关联关系，应用于事项设置中，便于管理事项的开展顺序',
    },
    modal: {
      editTitle: '编辑事项关联',
      createTitle: '新建事项关联',
    },
    columns: {
      name: '事项关联名称',
      type: '事项关联类型',
      inward: '关联方描述',
      outward: '被关联方描述',
    },
  },
  hierarchy: {
    default: {
      title: '类型层级方案',
      description: '类型层级确定哪些类型将对一组空间模板可用。它还允许您添加',
      detailTitle: '事项层级',
    },
    modal: {
      deleteTitle: '删除类型层级',
      createTitle: '新建类型层级方案',
      editTitle: '编辑类型层级方案',
      content: {
        areYouSure: '确定删除类型层级「{{name}}」吗？',
      },
    },
  },
  icon,
  validate: {
    name: {
      required: validate.getRequired(global.columns.name),
      exists: `${moduleName}${validate.getExists(global.columns.name)}`,
      max: validate.getMin(global.columns.name),
      min: validate.getMax(global.columns.name),
      starts: validate.name.starts,
    },
    key: {
      required: validate.getRequired(global.key),
      error: validate.required.tip1,
    },
    itemType: '请选择类型',
    screenScheme: '请选择界面方案',
  },
  view: {
    pageHeader: {
      btn: '给类型关联界面方案',
    },
  },
};

export default itemTypesLocaleValues;
