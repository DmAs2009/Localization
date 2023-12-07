import apis from './package/apis';
import apiToken from './package/apiToken';
import btnText from './package/btnText';
import className from './package/className';
import date from './package/date';
import formField from './package/formField';
import global from './package/global';
import libs from './package/lib';
import message from './package/message';
import pages from './package/pages';
import placeholder from './package/placeholder';
import reportPlugin from './package/reportPlugin';
import screen from './package/screen';
import sections from './package/sections';
import translation from './package/translation';
import validate from './package/validate';
import views from './package/views';
import workbench from './package/workbench';
import workspaceArchived from './package/workspaceArchived';

export const zhCN = {
  apis,
  apiToken,
  index: {
    hello: '你好, {{name}}。',
    welcome: '欢迎来到',
  },
  locale: {
    current: '当前语言: ',
    zh: '中文',
    'zh-CN': '中文 (简体)',
    'zh-HK': '中文 (繁體)',
    'zh-TW': '中文 (繁體)',
    en: 'English',
    'en-US': 'English (US)',
    'en-UK': 'English (UK)',
    ru: 'Russian',
    'ru-RU': 'Russian (RU)',
  },
  menus: {
    dashboard: '仪表盘',
    workspaces: '工作空间',
    create: '新建',
  },
  global,
  date,
  formField,
  message,
  validate,
  placeholder,
  reportPlugin,
  sections,
  libs,
  views,
  workbench,
  pages,
  screen,
  translation,
  className,
  // 按钮文案单独提取
  btnText,
  workspaceArchived,
};

export default zhCN;
