
/**
*
* @title 根据输入框的内容，进行自动匹配列表显示
* @description 用户可以按需进行选择，支持光标操作，回车事件
*
*/
import React, { Component } from 'react';
import AutoComplete from '../../src'

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            options: ['a', 'aa', 'aaa', 'aaaa'],
            placeholder: "查找关键字,请输入a",
            disabled:false
        }
        this.onFormChange = this.onFormChange.bind(this);
    }
    onFormChange(value) {
        this.setState({
            value: value
        })

    }
    render() {
        let { value, options, placeholder,disabled} = this.state;
        return (
            <div className="demo" style={{ "marginBottom": "110px" }}>
                <AutoComplete
                    value={value}
                    disabled={disabled}
                    options={options}
                    placeholder={placeholder}
                    onValueChange={value => this.onFormChange(value)}
                />

            </div>
        )
    }
}

export default Demo2;