/**
 * @name 应用中心
 */
import global from './global';

const application = {
  myapps: {
    title: '我的应用',
  },
  market: {
    title: '应用中心',
    AppDetail: {
      title: '我的应用市场',
      notFind: '未找到应用',
    },
    enabledVersion: '已启用版本：',
  },
  // 重新抽离
  apps: {
    default: {
      setRuntimeVariable: '设置运行时变量',
      applicationMarket: '应用市场',
      uploadApplication: '上传应用',
      managementApplication: '管理应用',
      appliedWorkspaceScheme: '已应用的空间方案',
      description: '您可以在这里启用和禁用应用',
      relateWorkspaceScheme: '关联空间方案',
      itemDetail: '事项详情',
      compileBuild: '编译构建',
      marketGridItemType: '分类：企业插件',
      disabled: '已禁用',
      workspaceName: '空间名称',
      relateWorkspace: '关联空间',
      isBindingWorkspace: '已绑定的空间',
    },
    columns: {
      version: '应用版本',
      applicationName: '应用名称',
      workspaceBindingStatus: '空间绑定状态',
      isBinding: '已绑定',
      notBinding: '未绑定',
      installationSource: '安装来源',
      installManuallyText: '手动安装',
      enabledApplicationVersion: '启用的应用版本',
      operation: '操作',
      workspaceSchemeName: '空间方案名称',
      global: '全局插件',
      active: {
        title: `${global.enable} ${global.status}`, // '启用状态',
        manifest: '扩展点',
        createdBy: global.uploadBy, //  '上传人',
        updatedAt: global.updatedAt, // '上传时间',
      },
    },
    modal: {
      title: global.tip, // '提示',
      content: '是否要卸载应用？',
      updateApplication: '更新应用',
      viewTrigger: '查看trigger',
      appUuid: '应用UUID',
      appKey: '应用唯一标识',
    },
    views: {
      default: {
        setEnvironment: '设置环境变量',
        viewWebTrigger: '查看Webtrigger',
        selectFile: '请选择文件',
      },
      alert: {
        message: `共计{{allCount}}个版本`,
      },
    },
  },

  // 新应用中心国际化
  newApps: {
    batchUpdate: {
      label: '批量安装上传插件',
      result: {
        title: '结果',
        name: '名称',
        status: '状态',
        errorMessage: '错误信息',
        updateInfo: '升级信息',
        installationTenant: '安装的租户',
      },
    },
    default: {
      install: '安装',
      developer: '开发者',
      searchApps: '搜索应用',
      createApp: '创建应用',
      countMessage: '共找到{{count}}个应用',
      noMore: '到底了',
      emptyMessage: '未查到适合你的应用',
      installApp: '安装应用',
      noVersion: '暂无版本',
    },
    columns: {
      tenantName: '租户名称',
      status: '状态',
      currentVersion: '当前版本',
      latest: '已最新',
      updatable: '可更新',
      uninstalled: '未安装',
    },
    manage: {
      unpublishTitle: '应用下架',
      unpublishBlock: '你暂时无法下架该应用。因为以下租户还没有卸载该应用：',
      unpublishConfirm: '你是否要下架应用 {{appName}}?',
      tenantKey: '租户Key：{{key}}',
      appKey: '应用Key：{{key}}',
      uninstallTitle: '确定卸载应用【{{appName}}】？',
    },
    validateErrorMessage: {
      env: '格式不正确，必须是JSON格式',
    },
  },
};

export default application;
