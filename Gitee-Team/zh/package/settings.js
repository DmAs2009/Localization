/**
 * @name 系统设置
 * settings内容 拆分到组件功能中
 */
import apiToken from './apiToken';
import btnText from './btnText';
import global from './global';
import itemTypes from './itemTypes';

const settings = {
  default: {
    title: '系统设置',
    createPriority: '新建优先级',
  },
  system: {
    default: {},
    workTime: {
      default: {
        title: '工作日',
        title2: '节假日导入',
        btnMsg: '导入',
        state: '成功',
        cancelBtn: '取消',

        uploadTip: '请上传{{importType}}格式文件',
        uploadFileTip: '请上传文件',

        absoluteTime: '绝对时间',
        relativeTime: '相对时间',
        relativeTimeSub: '(N天前、N小时前、N分钟前)',

        update: '更新',

        selectPlaceholder: '请选择',
      },
      message: '工作日设置用于设置成员每周工作天数和每天工作时长，成员工作量统计和计算基于已设置的标准值。',
      importNotes: {
        csv: [
          '请根据系统提供的模板填写节假日信息，并保存为csv格式的文件导入系统',
          '节假日名称中不能包含英文逗号（,）',
          '日期格式为yyyy/MM/dd，如 2000/01/01',
          '请保证日期不重复，否则无法导入',
          '日历类型仅限 0(假日)和 1(工作日)两种',
          '如果导入的日历出现乱码，请把文件编码格式改为UTF-8后重新上传。',
        ],
      },
      validateErrorMessage: {
        name: '名称格式不正确，请调整数据重新上传',
        date: '日期格式不正确，请调整数据重新上传',
        type: '日历类型格式不正确，请调整数据重新上传',
        dateRepeat: '日期重复，请调整数据重新上传',
      },
      columns: {
        typeItem: ['工作日', '节假日'],
      },
      modal: {
        title: '日历导入',
        footer: {
          step1: '上一步',
          step2: '下一步',
          step3: '确定',
        },
        step: {
          step1: '上传文件',
          step2: '确认',
          step3: '成功',
        },
        browseBtn: '浏览...',
        clearBtn: '清除',
        downloadTitle: '（模板下载）',
        downloadFileName: '导入模板',
        downloadDescTitle: '导入说明：',
        currStep2Tip: ' 新增成功{{addNumber}}条，编辑成功{{editNumber}}条',
      },
      header: {
        title: '工作日与时间',
      },
      tabs: {
        tab1: '工作日设置',
        tab2: '日期时间设置',
      },
      dateTimeFormatRequiredMessage: '日期时间格式必填',
      labels: {
        dataTimeFormat: '日期时间格式',
      },
      info: {
        success: '更新成功',
      },
      uploadFileTip: '请上传文件',
    },
    reIndexing: {
      default: {
        title: '',
      },
      header: {
        title: 'Re-indexing索引',
        link: '索引离线任务清单',
      },
      description: '重新索引使索引与任何配置更改保持同步，使新信息或数据字段可准确搜索',
      reIndexingChoose: {
        all: '全部空间',
        some: '部分空间',
        btnMsg: '选择空间',
        selectedTip: '已选择',
        conformBtn: '确定',
        conformBtnAll: '所有租户',
      },
      workspaceModal: {
        default: {},
        title: '选择空间',
      },
      workspaceTable: {
        default: {},
        title: '空间名称',
        total: '总数',
      },
      logs: {
        default: {
          tipNo: '暂无',
          reloadSuccessTip: '刷新成功',
          pageHeaderTitle: 'Re-indexing索引/索引离线任务日志',
          toolTipTitle: '刷新',
        },
        statusType: {
          succeded: '成功',
          failed: '失败',
          running: '执行中',
        },
        columns: {
          createdBy: '执行人',
          createdAt: '开始时间 ~ 结束时间',
          status: '状态',
          failedBtnMsg: ['重试', '查看'],
          count: '影响事项数',
        },
      },
    },
    downloadList: {
      singleDelete: '单页删除',
      singleDownload: '单页下载',
      downloadTip: '是否确认要单页下载',
      canDownload: '文件可下载',
      exportFailure: '文件导出失败',
      exporting: '文件导出中',
      singleDeleteFailed: '单页删除失败',
    },
  },
  menus: {
    workspace: '空间',
    workspaceTemplate: '空间模板',
    itemType: '类型',
    itemTypes: '类型',
    itemTypeSchema: '类型层级方案',
    itemFeatures: '事项特性',
    itemLink: '事项关联',
    securityLevel: '安全级别',
    screen: '界面',
    screens: '界面',
    screenSchema: '界面方案',
    itemTypeScreenSchemes: '类型界面方案',
    fields: '字段',
    customFields: '自定义字段',
    priority: '优先级',
    fieldBehaviors: '字段行为',
    automation: '自动化',
    automations: '自动化',
    workflow: '工作流',
    workflows: '工作流',
    status: '状态',
    workflowSchemas: '工作流方案',
    auth: '权限',
    users: '用户',
    roles: '企业角色',
    userGroups: '用户组',
    workspaceRoles: '空间角色',
    permissionSchemes: '权限方案',
    system: '其他',
    workdayAndTimeConfig: '工作日与时间',
    reIndexing: '重新索引',
    apiToken: apiToken.menuTitle,
    plugins: '插件',
  },
  itemTypes,
  views: {
    createPriorityBtn: global.getBtnText(btnText.settings.priority),
  },
};

export default settings;
