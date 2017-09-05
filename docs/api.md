# bee-auto-complete
根据用户的输入，进行自动匹配显示列表，用户可以进行按需选择自己需要的内容
## 代码演示
## API
### bee-auto-complete
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|value|传入的输入框的值|any|-|
|options|自动匹配列表|array|[]|
|placeholder|输入框的默认提示|string|-|
|show|控制自动匹配列表的展开和隐藏|boolean|false|
|onChange| input 的 value 变化时，调用此函数|handleChange(value)|-|
|onKeyDown| 监听input的键盘事件，调用此函数|handleKeyDown()|-|
|onBlur| input 的失去焦点时，调用此函数|handLeBlur()|-|
|onMouseEnter| 自动匹配列表随着光标选中变化时候，调用此函数|handleEnter(index)|-|
|onClick| 自动匹配列表某一项列表被点击的时候，调用此函数|handleChangeList(item)|-|

