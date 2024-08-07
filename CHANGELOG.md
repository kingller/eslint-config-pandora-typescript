标签：
<font color=green>新增</font>
<font color=orange>修改</font>
<font color=blue>增强</font>
<font color=red>修复</font>
<font color=red><strong>删除</strong></font>


# Next

# 2.5.3
1. <font color=red>修复</font> 降级包的版本，如下：
```
eslint:                                 8.52.0 
eslint-config-airbnb-typescript:        17.1.0
eslint-config-prettier:                 9.0.0
eslint-plugin-import:                   2.29.0 
eslint-plugin-jsx-a11y:                 6.7.1 
eslint-plugin-prettier:                 5.0.1  
eslint-plugin-react:                    7.33.2   
eslint-plugin-react-hooks:              4.6.0   
prettier:                               3.0.3 
```
# 2.5.2
1. <font color=orange>修改</font> 升级包
```
@typescript-eslint/eslint-plugin:       6.9.0      =>      7.14.1
@typescript-eslint/parser:              6.9.0      =>      7.14.1
eslint:                                 8.52.0     =>      9.5.0
eslint-config-airbnb-typescript:        17.1.0     =>      18.0.0
eslint-config-prettier:                 9.0.0      =>      9.1.0
eslint-plugin-import:                   2.29.0     =>      2.29.1
eslint-plugin-jsx-a11y:                 6.7.1      =>      6.9.0
eslint-plugin-prettier:                 5.0.1      =>      5.1.3
eslint-plugin-react:                    7.33.2     =>      7.34.3
eslint-plugin-react-hooks:              4.6.0      =>      4.6.2
prettier:                               3.0.3      =>      3.3.2
```

# 2.5.1
1. <font color=red>修复</font> Error: Cannot find module 'prettier'
2. <font color=green>新增</font> 依赖包 `prettier`


# 2.5.0
1. <font color=orange>修改</font> 升级包
```
@typescript-eslint/eslint-plugin            5.26.0      =>       6.9.0
@typescript-eslint/parser                   5.26.0      =>       6.9.0
eslint                                      8.16.0      =>       8.52.0    
eslint-config-airbnb-typescript             17.0.0      =>       17.1.0
eslint-config-prettier                      8.5.0       =>       9.0.0
eslint-plugin-import                        2.26.0      =>       2.29.0
eslint-plugin-jsx-a11y                      6.5.1       =>       6.7.1
eslint-plugin-jsx-control-statements        3.0.0       =>       3.0.0
eslint-plugin-prettier                      4.0.0       =>       5.0.1
eslint-plugin-react                         7.30.0      =>       7.33.2
eslint-plugin-react-hooks                   4.5.0       =>       4.6.0
```


# 2.4.0
1. <font color=orange>修改</font> 关闭 `no-template-curly-in-string` 规则


# 2.3.3
1. <font color=orange>修改</font> `react/function-component-definition`规则
```
'react/function-component-definition': [
    'error',
    {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: ['function-expression', 'arrow-function'],
    },
]
```


# 2.3.2
1. <font color=orange>修改</font> `react/function-component-definition`规则


# 2.3.1
1. <font color=blue>增强</font> 升级包
```
@typescript-eslint/eslint-plugin        5.25.0      =>      5.26.0
@typescript-eslint/parser               5.25.0      =>      5.26.0
eslint                                  8.15.0      =>      8.16.0
eslint-plugin-react                     7.29.4      =>      7.30.0
```

# 2.3.0
1. <font color=blue>增强</font> 支持`typescript 4.6.0`以上

# 2.2.1
1. <font color=red>修复</font> ESLint couldn't find the config "airbnb/hooks" to extend from.  
<font color=green>新增</font> 包
```
eslint-config-airbnb    19.0.4
```

# 2.2.0
1. <font color=orange>修改</font> 包版本升级
```
@typescript-eslint/eslint-plugin            4.18.0      =>      5.9.0
@typescript-eslint/parser                   4.18.0      =>      5.9.0
eslint                                      7.22.0      =>      8.6.0
eslint-config-airbnb-typescript             12.3.1      =>      16.1.0
eslint-config-prettier                      8.1.0       =>      8.3.0
eslint-plugin-import                        2.22.1      =>      2.25.4
eslint-plugin-jsx-a11y                      6.4.1       =>      6.5.1
eslint-plugin-prettier                      3.3.1       =>      4.0.0
eslint-plugin-react                         7.22.0      =>      7.28.0
eslint-plugin-react-hooks                   4.2.0       =>      4.3.0
```

# 2.1.0
1. <font color=orange>修改</font> 添加配置`root: true`，`ESLint`不继续向上查询配置文件

# 2.0.2
1. <font color=red>修复</font> `webpack`配置文件不在根目录下时，找不到`tsconfig.json`文件

# 2.0.1
1. <font color=green>新增</font> `react/jsx-no-bind`
2. <font color=green>新增</font> `react/no-danger`
3. <font color=green>新增</font> 对象解构`prefer-destructuring`

# 2.0.0
1. <font color=orange>修改</font> 使用`airbnb`校验规则

# 1.0.1
1. <font color=orange>修改</font> 禁用`react/prop-types`规则
