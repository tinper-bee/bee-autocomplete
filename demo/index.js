
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AutoComplete from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var DemoArray = [{"example":<Demo1 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"\n/**\n*\n* @title 根据输入框的内容，进行自动匹配列表显示\n* @description 用户可以按需进行选择，支持光标操作，回车事件\n*\n*/\nimport React, { Component } from 'react';\nimport AutoComplete from 'bee-auto-complete'\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"\",\n            options: ['10000(博宇)', '10001(波波)', '10002(李刚)'],\n            placeholder: \"查找关键字,请输入1\",\n            disabled: false\n        }\n        this.onFormChange = this.onFormChange.bind(this);\n    }\n    onFormChange(value) {\n        this.setState({\n            value: value\n        })\n\n    }\n    render() {\n        let { value, options, placeholder,disabled} = this.state;\n        return (\n            <div className=\"demo\" style={{ \"marginBottom\": \"90px\" }}>\n                <AutoComplete\n                    value={value}\n                    disabled={disabled}\n                    options={options}\n                    placeholder={placeholder}\n                    onValueChange={value => this.onFormChange(value)}\n                />\n\n            </div>\n        )\n    }\n}\n\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"},{"example":<Demo2 />,"title":" 根据输入框的内容，进行自动匹配列表显示","code":"\n/**\n*\n* @title 根据输入框的内容，进行自动匹配列表显示\n* @description 用户可以按需进行选择，支持光标操作，回车事件\n*\n*/\nimport React, { Component } from 'react';\nimport AutoComplete from 'bee-auto-complete'\n\nclass Demo2 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: \"\",\n            options: ['a', 'aa', 'aaa', 'aaaa'],\n            placeholder: \"查找关键字,请输入a\",\n            disabled:false\n        }\n        this.onFormChange = this.onFormChange.bind(this);\n    }\n    onFormChange(value) {\n        this.setState({\n            value: value\n        })\n\n    }\n    render() {\n        let { value, options, placeholder,disabled} = this.state;\n        return (\n            <div className=\"demo\" style={{ \"marginBottom\": \"110px\" }}>\n                <AutoComplete\n                    value={value}\n                    disabled={disabled}\n                    options={options}\n                    placeholder={placeholder}\n                    onValueChange={value => this.onFormChange(value)}\n                />\n\n            </div>\n        )\n    }\n}\n\n","desc":" 用户可以按需进行选择，支持光标操作，回车事件"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
