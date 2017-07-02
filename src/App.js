import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import $ from 'jquery';

class App extends Component {

    render() {
        // React Props
        let HelloMessage = React.createClass({render:function () {
            return <h1>Hello {this.props.name}!</h1>;
        }});
        //我们可以在父组件中设置 state， 并通过在子组件上使用 props 将其传递到子组件上。
        var WebSite = React.createClass({
            getInitialState:function () {
              return {
                  name:'xiaoyan',
                  site:'google.com'
              }
            },
            //设置默认值
            getDefaultProps:function () {
              return {name: 'dayan'};
            },
            render: function() {
                return (
                    <div>
                        <Name name={this.state.name} />
                        <Link site={this.state.site} />
                    </div>
                );
            }
        });

        var Name = React.createClass({
             render: function() {
                 return (
                     <h1>{this.props.name}</h1>
                 );
             }
         });

        var Link = React.createClass({
             render: function() {
                 return (
                     <a href={this.props.site}>
                         {this.props.site}
                     </a>
                 );
             }
         });
        //React State(状态)
        var LikeButton = React.createClass({
           getInitialState: function() {
               return {liked: false};
           },
           handleClick: function(event) {
               this.setState({liked: !this.state.liked});
           },
           render: function() {
               var text = this.state.liked ? '喜欢' : '不喜欢';
               return (
                   <b onClick={this.handleClick}>
                       你<button>{text}</button>我。点我切换状态。
                   </b>
               );
           }
       });

        var title = "菜鸟教程";
        // var title = 123;
        var MyTitle = React.createClass({
            // propTypes: {
            //     // 可以声明 prop 为指定的 JS 基本数据类型，默认情况，这些数据是可选的
            //     optionalArray: React.PropTypes.array,
            //     optionalBool: React.PropTypes.bool,
            //     optionalFunc: React.PropTypes.func,
            //     optionalNumber: React.PropTypes.number,
            //     optionalObject: React.PropTypes.object,
            //     optionalString: React.PropTypes.string,
            //
            //     // 可以被渲染的对象 numbers, strings, elements 或 array
            //     optionalNode: React.PropTypes.node,
            //
            //     //  React 元素
            //     optionalElement: React.PropTypes.element,
            //
            //     // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
            //     optionalMessage: React.PropTypes.instanceOf(Message),
            //
            //     // 用 enum 来限制 prop 只接受指定的值。
            //     optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),
            //
            //     // 可以是多个对象类型中的一个
            //     optionalUnion: React.PropTypes.oneOfType([
            //                                                  React.PropTypes.string,
            //                                                  React.PropTypes.number,
            //                                                  React.PropTypes.instanceOf(Message)
            //                                              ]),
            //
            //     // 指定类型组成的数组
            //     optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),
            //
            //     // 指定类型的属性构成的对象
            //     optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),
            //
            //     // 特定 shape 参数的对象
            //     optionalObjectWithShape: React.PropTypes.shape({
            //                                                        color: React.PropTypes.string,
            //                                                        fontSize: React.PropTypes.number
            //                                                    }),
            //
            //     // 任意类型加上 `isRequired` 来使 prop 不可空。
            //     requiredFunc: React.PropTypes.func.isRequired,
            //
            //     // 不可空的任意类型
            //     requiredAny: React.PropTypes.any.isRequired,
            //
            //     // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
            //     customProp: function(props, propName, componentName) {
            //         if (!/matchme/.test(props[propName])) {
            //             return new Error('Validation failed!');
            //         }
            //     }
                    propTypes: {
                        title: React.PropTypes.string.isRequired,
                        customProp: function(props, propName, componentName) {
                            if (!/matchme/.test(props[propName])) {
                                return new Error('Validation failed!');
                            }
                        }
                    },

                    render: function() {
                        return <h1> {this.props.title} </h1>;
                    }
                });
        var Counter = React.createClass({
            getInitialState: function () {
                return { clickCount: 0 };
            },
            handleClick: function () {
                this.setState(function(state) {
                    return {clickCount: state.clickCount + 1};
                });
                // this.replaceState(function(state) {
                //     return {clickCount: state.clickCount + 1};
                // });
                // this.setProps(function(state) {
                //     return {clickCount: state.clickCount + 1};
                // });
                // this.replaceProps(function(state) {
                //     return {clickCount: state.clickCount + 1};
                // });
                // this.forceUpdate(function () {
                //
                // });
                // //获取DOM节点
                // this.findDOMNode();
                // //判断组件挂载状态：isMountedbool isMounted().isMounted()方法用于判断组件是否已挂载到DOM中。
                // // 可以使用该方法保证了setState()和forceUpdate()在异步场景下的调用不会出错。
            },

            render: function () {
                return (<button onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</button>);
            }
        });
        var Hello = React.createClass({
              getInitialState: function () {
                  return {
                      opacity: 1.0
                  };
              },

              componentDidMount: function () {
                  this.timer = setInterval(function () {
                      var opacity = this.state.opacity;
                      opacity -= .05;
                      if (opacity < 0.1) {
                          opacity = 1.0;
                      }
                      this.setState({
                                        opacity: opacity
                                    });
                  }.bind(this), 100);
              },

              render: function () {
                  return (
                      <div style={{opacity: this.state.opacity}}>
                          Hello {this.props.name}
                      </div>
                  );
              }
          });
        var Button = React.createClass({
           getInitialState: function() {
               return {
                   data:0
               };
           },
           setNewNumber: function() {
               this.setState({data: this.state.data + 1})
           },
           render: function () {
               return (
                   <div>
                       <button onClick = {this.setNewNumber}>INCREMENT</button>
                       <Content myNumber = {this.state.data}></Content>
                   </div>
               );
           }
       })
        var Content = React.createClass({
            componentWillMount:function() {
                console.log('Component WILL MOUNT!')
            },
            componentDidMount:function() {
                console.log('Component DID MOUNT!')
            },
            componentWillReceiveProps:function(newProps) {
                console.log('Component WILL RECEIVE PROPS!')
            },
            shouldComponentUpdate:function(newProps, newState) {
                console.log('Component UPDATE!');
                return true;
            },
            componentWillUpdate:function(nextProps, nextState) {
                console.log('Component WILL UPDATE!');
            },
            componentDidUpdate:function(prevProps, prevState) {
                console.log('Component DID UPDATE!')
            },
            componentWillUnmount:function() {
                console.log('Component WILL UNMOUNT!')
            },

            render: function () {
                return (
                    <div>
                        <h3>{this.props.myNumber}</h3>
                    </div>
                );
            }
        });
        var UserGist = React.createClass({
             getInitialState: function() {
                 return {
                     username: '',
                     lastGistUrl: ''
                 };
             },

             componentDidMount: function() {
                 this.serverRequest = $.get(this.props.source, function (result) {
                     var lastGist = result[0];
                     this.setState({
                                       username: lastGist.owner.login,
                                       lastGistUrl: lastGist.html_url
                                   });
                 }.bind(this));
             },

             componentWillUnmount: function() {
                 this.serverRequest.abort();
             },

             render: function() {
                 return (
                     <div>
                         {this.state.username} 用户最新的 Gist 共享地址：
                         <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
                     </div>
                 );
             }
         });
        //在以下实例中我们将为大家演示如何在子组件上使用表单。 onChange 方法将触发 state 的更新并将更新的值传递到子组件的输入框的 value 上来重新渲染界面。
        //你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上
        var Content1 = React.createClass({
            render: function() {
                return  <div>
                    <input type="text" value={this.props.myDataProp} onChange={this.props.updateStateProp} />
                    <h4>{this.props.myDataProp}</h4>
                </div>;
            }
        });
        var HelloMessage1 = React.createClass({
             getInitialState: function() {
                 return {value: 'Hello Runoob!'};
             },
             handleChange: function(event) {
                 this.setState({value: event.target.value});
             },
             render: function() {
                 var value = this.state.value;
                 return <div>
                     <Content1 myDataProp = {value}
                              updateStateProp = {this.handleChange}></Content1>
                 </div>;
             }
         });
        //当你需要从子组件中更新父组件的 state 时，你需要在父组件通过创建事件句柄 (handleChange) ，并作为 prop (updateStateProp) 传递到你的子组件上。实例如下：
        var Content2 = React.createClass({
            render: function() {
                return  <div>
                    <button onClick = {this.props.updateStateProp}>点我</button>
                    <h4>{this.props.myDataProp}</h4>
                </div>
            }
        });
        var HelloMessage2 = React.createClass({
             getInitialState: function() {
                 return {value: 'Hello Runoob!'};
             },
             handleChange: function(event) {
                 this.setState({value: '菜鸟教程'})
             },
             render: function() {
                 var value = this.state.value;
                 return <div>
                     <Content2 myDataProp = {value}
                              updateStateProp = {this.handleChange}></Content2>
                 </div>;
             }
         });
//         React 支持一种非常特殊的属性 Ref ，你可以用来绑定到 render() 输出的任何组件上。
// 这个特殊的属性允许你引用 render() 返回的相应的支撑实例（ backing instance ）。这样就可以确保在任何时间总是拿到正确的实例。
// 使用方法
//         绑定一个 ref 属性到 render 的返回值上：
// <input ref="myInput" />
//         在其它代码中，通过 this.refs 获取支撑实例:
//             var input = this.refs.myInput;
//         var inputValue = input.value;
//         var inputRect = input.getBoundingClientRect();
//         你可以通过使用 this 来获取当前 React 组件，或使用 ref 来获取组件的引用，实例如下：
        var MyComponent = React.createClass({
            handleClick: function() {
                // 使用原生的 DOM API 获取焦点
                this.refs.myInput.focus();
            },
            render: function() {
                //  当组件插入到 DOM 后，ref 属性添加一个组件的引用于到 this.refs
                return (
                    <div>
                        <input type="text" ref="myInput" />
                        <input
                            type="button"
                            value="点我输入框获取焦点"
                            onClick={this.handleClick}
                        />
                    </div>
                );
            }
        });

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <HelloMessage name="alvin"/>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload1.
                </p>
                <WebSite/>
                <LikeButton/>
                <Counter/>
                <Hello name="alvin1"/>
                <Button/>
                <UserGist source="https://api.github.com/users/octocat/gists"/>
                <HelloMessage1/>
                <HelloMessage2/>
                <MyComponent/>
                <MyTitle title={title} customProp="matchme"/>
            </div>
        );
    }
}

export default App;