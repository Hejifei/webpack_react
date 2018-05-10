框架搭建参考链接： https://github.com/brickspert/blog/issues/1#init


    cnpm install 初始化
    npm start //项目运行
    npm run build //项目打包


#创建静态服务
npm install -g serve
serve -s build

#tips:
1、禁止修改props
2、State(状态)：不要直接修改 state，用setState()代替；state更新是异步的。state(状态)更新会被合并
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
state：本地状态或封装状态
3、数据向下流动，不知道数据的来源；


#生命周期
状态：
Mouning:已插入真实DOM
Updatin：正在被重新渲染
Unmounting：已移出真实DOM
方法：
componentWillMount：在渲染前调用，在客户端也在服务器。
componentDidMount:在第一次渲染后调用，只在客户端。
componentWillReceiveProps：在组件接收到一个新的prop时调用。这个在初始化render时不会被调用。
shouldComponentUpdate：返回一个布尔值。在组件接收到新的props或者state时被调用。
componentWillUpdate：在组件接收到新的props或者state但还没有render时被调用。
componentDidUpdate：在组件完成更新后立即调用。
componentWillUnmount：在组件从DOM中移除的时候立刻被调用。

#事件
<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>


#JSX
1、用户定义组件必须以大写字母开头
2、运行时选择类型，要将表达式赋值给一个以大写字母开头的变量。
3、props属性：
<MyComponent foo={1 + 2 + 3 + 4} />
<MyComponent message="hello world" /> === <MyComponent message={'hello world'} />
props属性默认为true
<Greeting firstName="Ben" lastName="Hector" />
等同于：const props = {firstName: 'Ben', lastName: 'Hector'};return <Greeting {...props} />;
props.children(val);可以向children传值。

#使用 PropTypes 进行prop值类型的设置或者添加默认值
如./src/base/proptype.js可视

#静态类型检查  
1、Flow是一个针对js代码的静态类型检查器。给项目加上严格的类型检测
npm install --save-dev flow-bin
npm run flow init //创建一个需要提交的flow配置文件。
package.json中添加
"scripts": {
    "flow": "flow"
  },
// @flow 
// 或者下面这种
/* @flow */  

2、npm install --save-dev typescript
"scripts": {
    "build": "tsc",
  },
tsc --init

#Refs和DOM
Refs使用场景：
1、处理focus、文本选择或者媒体播放
2、触发强制动画
3、集成第三方DOM库

#优化性能
对于创建最高效的 Brunch 生产版本
npm install --save-dev uglify-js-brunch
brunch build -p

为了创建最高效的 Browserify 生产版本
npm install --save-dev bundle-collapser envify uglify-js uglifyify 

为了创建最高效的 Rollup 生产版本
npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-uglify

#上下文 也就是通信
1、通过将 childContextTypes 和 getChildContext 添加到context 提供者，React 自动地向下传递信息，并且子树中的任何组件都可以通过定义 contextTypes 去访问它。
2、生命周期中可以引用Context
constructor(props, context)
componentWillReceiveProps(nextProps, nextContext)
shouldComponentUpdate(nextProps, nextState, nextContext)
componentWillUpdate(nextProps, nextState, nextContext)
componentDidUpdate(prevProps, prevState, prevContext)
3、无状态的函数式组件中引用Context
Context需要变化的话可以用state的值赋值给他。
getChildContext() {
    return {type: this.state.type};
}

#路由
react-router-dom

#热更新设置
package.json 增加 --hot
或者
配置webpack.dev.config.js
const webpack = require('webpack');

devServer: {
    hot: true
}

plugins:[
     new webpack.HotModuleReplacementPlugin()
]

为了在react模块更新的同时，能保留state等页面中其他状态，我们需要引入react-hot-loader~