import global from './global';

const moduleName = '翻译';

const translation = {
  moduleName,
  formFields: {
    language: '语言',
    name: global.columns.name,
    description: global.columns.description,
  },
  modal: {
    title: `${moduleName}{{name}}`,
  },
};

export default translation;
