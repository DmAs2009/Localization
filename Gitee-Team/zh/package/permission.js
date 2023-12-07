/**
 * @name 权限相关
 * view/default/组件/components
 */
import btnText from './btnText';
import { global } from './global';
import placeholder from './placeholder';

export const permission = {
  default: {
    systemRoles: '空间成员',
    memberRole: '空间内全部成员',
    permission: global.permission + global.scheme,
    placeholder: ['请选择类型', '请选择添加的人员类型', '请选择一个本空间角色'],
    userType: '人员类型',
    SubmitConfig: '确认并配置',
    view: {
      title: '请勾选要授权的对象类型，并选择授权对象：',
      workspaceRole: '空间角色',
    },
  },
  modal: {
    confirm: {
      title: '提示',
      content: '确定要移除该角色么？',
    },
    delete: {
      title: '提示',
      content: `确定要移除{{rowData.permissionUserInfo.name}}的所有权限么？`,
    },
  },
  columns: {
    tooltip: {
      title: '系统角色无法移除',
    },
    roleTitle: ['角色名称', '用户/用户组/角色名称'],
    BROWSER_WORKSPACES: '查看空间',
    ADMINISTER_WORKSPACES: '空间设置',
    BROWSER_ITEMS: '查看事项',
    ADD_ITEMS: '新建事项',
    MODIFY_ITEMS: '编辑事项',
    DELETE_ITEMS: '删除事项',
    ADD_PUBLIC_VIEW: '新建公共视图',
    tip: ['空间设置内只能修改本空间的权限', '系统角色无法移除'],
  },
  options: {
    all: '全部',
    user: '用户',
    group: '用户组',
    role: '企业角色',
    workspaceRole: '空间角色',
  },
  validate: {
    description: '描述都长度不能超过200',
    name: ['请输入名称', '名称输入不能为空格', '名称长度不能超过40'],
    required: ['请选择人员类型', '请选择用户或角色'],
  },
  FormField: {
    role: '请选择空间内新添加的角色进行授权',
  },
  securityLevel: {
    default: {
      title: '安全级别方案页面',
      user: '用户',
      userGroup: '用户组',
      cardLabel: '事项{{text}}',
    },
    view: {
      createSecurityLevelSchemeBtn: global.getBtnText(btnText.settings.securityLevelScheme),
      fieldConfigTitle: '字段配置',
      columns: {
        name: '级别',
        ACLTemplate: '权限',
        read: '读',
        nothing: '无',
        operation: '操作',
      },
      title: '安全级别',
      roleAuthConfig: '角色权限配置',
      setting: '安全级别设置',
      desc: '说明文字显示说明文字显示说明文字显示说明文字显示说明文字显示说明文字显示说明文字显示',
      modal: {
        delete: '删除安全级别',
        content: `确定删除安全级别「{{name}}」吗？`,
      },
    },
    columns: {
      name: '名称',
      citeCount: '项目',
      commonTable: {
        header: {
          title: '安全级别方案',
          description: '此处定义的字段为企业通用字段，可全局使用',
          insert: '新建安全级别方案',
        },
      },
    },
    modal: {
      create: {
        title: '新建事项安全字段',
      },
      edit: {
        title: '编辑事项安全字段',
      },
      delete: {
        deleteTitle: '删除安全级别方案',
        content: '确定删除「{{name}}」吗？',
      },
      deleteField: {
        title: '删除安全级别字段',
        content: '确定删除「{{name}}」吗？',
      },
    },
    validate: {
      name: ['名称长度为1-50', '请输入唯一名称'],
      description: '描述长度为0-256',
    },
    formField: {
      placeholder: ['请输入1-50字符', '请输入描述信息，0-256字符'],
      name: '名称',
      description: '描述',
    },
    scheme: {
      default: {
        title: '事项安全值',
      },
      backTip: '事项安全值',
      description: '请选择要添加到该安全级别的用户组/用户，设置完成后，只有设置的用户组/用户才有查看该安全级别的卡片',
    },
    securityId: {
      default: {
        title: '事项安全模板',
      },
      columns: {
        name: global.name, //'名称',
        users: global.userOrUserGroup, // '用户/用户组',
        customFields: '事项人员',
      },
      commonTableHeader: {
        title: '事项安全字段',
        description: '配置某个安全级别用户、用户组的可见性，设置成功后只有权限的用户才能看到此类事项',
        create: '新建事项安全字段',
      },
    },
    SecurityLevelModal: {
      modal: {
        create: {
          title: '新建安全级别方案',
        },
        edit: {
          title: '编辑安全级别方案',
        },
        select: {
          title: '选择安全级别方案',
          placeholder: '请选择安全级别方案',
        },
      },
      validate: {
        name: '该安全级别方案已存在',
      },
      FormField: {
        label: '安全级别方案名称',
        placeholder: '请输入安全级别方案名称',
      },
    },
    securityLevelSetting: {
      placeholder: '请输入搜索内容',
      tabTitle: {
        User: '设置用户',
        Group: '设置用户组',
        UserField: '设置事项人员字段',
      },
      clear: '清空',
      modal: {
        move: {
          title: '提示',
          content: `确定移除用户{{row.title}}吗？`,
        },
        message: {
          removeSuccess: '移除成功',
        },
      },
    },
    utils: {
      leftTableColumn: {
        title: ['用户', '用户组', '字段名称'],
        nickname: '昵称',
      },
      Popover: {
        title: '已引用空间',
      },
    },
    config: {
      setUser: '设置用户',
      setUserGroup: '设置用户组',
      setItemUserField: '设置事项人员字段',
      user: '用户',
      nickName: '昵称',
      userGroup: '用户组',
      description: '描述',
      title: '字段名称',
      clear: '清空',
    },
  },
  itemTypeScreenSchemeModal: {
    modal: {
      title: '更改类型界面方案',
      label: '选择应用的类型界面方案',
    },
    message: {
      itemTypeScreenScheme: '请选择类型界面方案',
    },
  },
  // 角色
  workspaceRole: {
    default: {
      title: '空间角色',
      description:
        '空间角色分为系统内置角色、自定义角色，您可创建新的自定义空间角色，创建的空间角色可在权限方案中被添加使用',
    },
    placeholder: {
      keywords: placeholder.default.search,
    },
    modal: {
      title: '删除空间角色',
      deleteContent: '确定删除{{title}}「{{name}}」吗？',
      deleteTip: '删除后数据将不能恢复，请谨慎操作',
    },
    validate: {
      name: '名称输入不能为空',
      nameLengthError: `名称，长度{{min}}-{{max}}个字符`,
      workspaceRoleKey: '该空间角色已存在',
    },
    FormField: {
      name: global.name,
      description: global.description,
    },
    views: {
      createBtn: global.getBtnText(btnText.settings.workspaceRole),
    },
  },

  //
  roles: {
    default: {
      title: '角色管理',
      editModalTitle: '编辑角色',
      addChildModalTitle: '添加子角色',
      createModalTitle: '新建角色',
      authSuccess: '授权成功',
      cancelAuthSuccess: '取消授权成功',
      boardName: '面板名称：',
      addAuth: '添加授权',
      itemGroupName: '事项组名称',
      DEFAULT_BOARD_RULE: {
        name: ['项目内全部面板（内置）', '项目内全部事项组（内置）'],
      },
    },
    columns: {
      name: '唯一标识',
      tag: '角色/用户组名称',
      BROWSER_BOARDS: '查看面板',
      MODIFY_NAME_BOARDS: '修改面板名称',
      DELETE_BOARDS: '删除面板',
      BROWSER_ITEM_GROUPS: '查看事项组',
      MODIFY_ITEM_GROUP_NAME: '修改事项组名称',
      DELETE_ITEM_GROUP: '删除事项组',
    },
    modal: {
      removePermission: '确定移除该权限？',
      deleteRole: '删除角色',
      content: `此操作将会移除该角色的空间权限，您确定要删除吗？`,
      addBoard: '添加面板',
      addItem: '添加事项',
      text: [' 角色「{{tag}}」存在子级，不能直接删除', '如果确定要删除当前角色，请先将当前角色下的子级移到其他角色下'],
      delete: {
        title: '确定要删除角色「{{tag}}」吗？',
        content: '当前角色下不存在下级，可以直接删除',
      },
      deleteAuth: {
        title: '确定移除该权限？',
        content: `此操作将会移除该角色的空间权限，您确定要删除吗？`,
      },
    },
    FormField: {
      boards: ['面板', '类型'],
    },
    MembersModal: {
      placeholder: ['请选择用户', '请选择上级'],
      message: {
        waring: ['请选择授权角色', '请选择授权用户组'],
        success: ['添加用户组成功', '添加角色成功'],
      },
      modal: {
        title: {
          addMember: '添加成员用户',
          addAuth: '添加授权',
        },
      },
      FormField: {
        placeholder: {
          roleName: '请输入角色名称，长度{{min}}-{{max}}个字符',
          key: '请输入唯一标识，长度{{min}}-{{max}}个字符',
          type: '请选择授权对象类型',
          groupName: '请输入组名称添加',
        },
        users: '用户',
        tag: '名称',
        name: '唯一标识',
        role: '上级',
        TreeSelect: {
          title: '添加子角色',
        },
        authType: '授权对象类型',
      },
      validate: {
        name: '请输入唯一标识',
        tag: {
          role: '请输入角色名称',
          exist: '当前名称已存在',
          noBlank: '角色名称不能为纯空格',
        },
      },
    },
    views: {
      createAuthBtn: '添加授权',
      createRoleBtn: global.getBtnText(btnText.settings.role),
    },
  },

  permissionScheme: {
    default: {
      title: '权限方案',
      description: '空间角色权限方案，可以应用到一个或者多个空间上，通过创建空间时选择空间权限方案应用到空间上',
      message: ['成功编辑权限方案', '成功添加权限方案', '删除权限方案成功'],
      titleSettings: '权限方案设置',
    },
    placeholder: {
      keywords: placeholder.default.search,
    },
    FormField: {
      create: '新建权限方案',
      edit: '修改权限方案',
      name: '名称',
      description: '描述',
      cancel: '取消',
      okText: '确认',
      confirmAndConfig: '确认并配置',
    },
    validate: {
      name: '名称不能为空',
      nameSpace: '名称输入不能为空格',
      nameLengthError: '名称长度不能超过40',
      descriptionLengthError: '描述都长度不能超过200',
    },
    columns: {
      usageWorkspaces: '应用空间数',
      schemeName: '方案名称',
    },
    modal: {
      title: '删除权限方案',
      content: {
        areYouSure: '确定删除{{TITLE}}「{{name}}」吗？',
        deleteTip: '删除后数据将不能恢复，请谨慎操作',
        userType: '请选择人员类型',
        userOrRole: '请选择用户或角色',
      },
      userType: '人员类型',
      userTypePlaceHolder: '请选择添加的人员类型',
      removeContent: '确定要移除「{{name}}」的所有权限吗？',
      setSuccessfully: '添加授权成功',
      cancelSuccessfully: '取消授权成功',
    },
    config: {
      workspaceRoleName: '角色名称',
      workspaceRoleAndUserName: '用户/用户组/角色名称',
      workspaceCreator: '空间创建人',
      schemeId: {
        default: {
          title: '空间角色权限方案',
          msg: '添加权限',
        },
        modal: {
          // title: '添加权限',
        },
      },
      selectTypePlaceHolder: '请选择类型',
      inWorkspaceTip: '空间设置内只能修改本空间的权限',
      systemRoleTip: '系统角色无法移除',
      permissions: {
        browserWorkspaces: '查看空间',
        adminWorkspaces: '空间设置',
        browserItems: '查看事项',
        addItems: '新建事项',
        modifyItems: '编辑事项',
        deleteItems: '删除事项',
        addPublicViews: '新建公共视图',
        addVersion: '新建版本',
        itemsRelation: '事项关联',
        removeItemsRelation: '解除事项关联',
      },
      roleType: {
        all: '全部',
        user: '用户',
        group: '用户组',
        role: '企业角色',
        workspaceRole: '空间角色',
      },
    },
    views: {
      createPermissionSchemeBtn: global.getBtnText(btnText.settings.permissionScheme),
    },
  },
};

export default permission;
