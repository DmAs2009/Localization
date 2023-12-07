/**
 * @name plugin
 */

export const plugin = {
  default: {
    getPlugin: '插件获取失败（状态码：404）',
    server: '服务端错误',
    assetsNotFound: '资源找不到。如果你用的webpack，请检查的output',
    assetsLoading: '资源加载出错',
    scriptLoading: '脚本加载出错',
    unknown: '未知错误，请联系管理员排查',
    retry: '重试',
    tip: '请查看该应用是否启用，或关联空间方案',
    copyError: '复制错误信息',
    loading: '正在获取插件列表......',
  },
  views: {
    uploadFileDesc: '拖拽图片到此处上传 或 点击 上传图片',
    inputUrl: '请输入图片的url',
  },
};

export default plugin;
