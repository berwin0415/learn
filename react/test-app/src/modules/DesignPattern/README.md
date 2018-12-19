#React 实战：设计模式和最佳实践

## 一、组件实践(1):定义清晰可维护的接口

### 设计原则

1. 保持接口小，props 数量要少；
2. 根据数据边界来划分组件，充分利用组合（composition）；
3. 把 state 往上层组件提取，让下层组件只需要实现为纯函数。

### 最佳实践

1. 避免 renderXXXX 函数
2. 给回调函数类型的 props 加统一前缀,`on`或者`handle`都可以
3. 使用 propTypes 来定义组件的 props

## 二、组件实践(2):组件的内部实现

### 技巧

1. 尽量每个组件都有自己专属的源代码文件；
2. 用解构赋值（destructuring assignment）的方法获取参数 props 的每个属性值；
3. 利用属性初始化（property initializer）来定义 state 和成员函数。

## 三、组件实践(3):组件化样式

1. React 将内容、样式和动态功能聚集在一个模块中，是高聚合的表现；
2. React 原生 style 属性的用法；
3. 组件化样式 styled jsx 的用法。

## 四、组件设计模式(1):聪明组件和傻瓜组件

多种称呼：

- 容器组件和展示组件（Container and Presentational Components）；
- 胖组件和瘦组件；
- 有状态组件和无状态组件。

 优化组件

- React.PureComponent  浅比较
- React.memo(youComponent,compareMethod) 也是浅比较，但是可以  通过第二个参数自定比比较规则，但是无法访问 state

## 五、组件设计模式(2):高阶组件

### 5.1 高阶组件的形式；

1. 高阶组件不能去修改作为参数的组件，高阶组件必须是一个纯函数，不应该有任何副作用。
2. 高阶组件返回的结果必须是一个新的 React 组件，这个新的组件的 JSX 部分肯定会包含作为参数的组件。
3. 高阶组件一般需要把传给自己的 props 转手传递给作为参数的组件。

```
const withDoNothing = (Component) => {
  const NewComponent = (props) => {
    return <Component {...props} />;
  };
  return NewComponent;
};
```

### 5.2 高阶组件的链式调用方法；

假设，你有三个高阶组件分别是 withOne、withTwo 和 withThree，那么，如果要赋予一个组件 X 某个高阶组件的超能力，那么，你要做的就是挨个使用高阶组件包装

```
const hoc = compose(withThree, withTow, withOne);
const SuperX = hoc(X);
```

```
export default function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
```

### 5.3 高阶组件的不足。

1. 高阶组件不得不处理 displayName，不然 debug 会很痛苦。
2. 如果内层组件包含定制的静态函数，这些静态函数的调用在 React 生命周期之外，那么高阶组件就必须要在新产生的组件中增加这些静态函数的支持，这更加麻烦。
3. 高阶组件支持嵌套调用，这是它的优势。但是如果真的一大长串高阶组件被应用的话，当组件出错，你看到的会是一个超深的 stack trace，十分痛苦。
4. 使用高阶组件，一定要非常小心，要避免重复产生 React 组件.

```jsx
//反例
const Example = () => {
  const EnhancedFoo = withExample(Foo);
  return <EnhancedFoo />;
};
```

## 六、组件设计模式(3):render props 模式

### 1. render props 的形式

所谓 render props，指的是让 React 组件的 props 支持函数这种模式。因为作为 props 传入的函数往往被用来渲染一部分界面，所以这种模式被称为 render props。

```
const RenderAll = (props) => {
  return(
     <React.Fragment>
     	{props.children(props)}
     </React.Fragement>
  );
};

<RenderAll>
        {() => <h1>hello world</h1>}
</RenderAll>
```

### 2. render props 其实就是“依赖注入”

所谓依赖注入，指的是解决这样一个问题：逻辑 A 依赖于逻辑 B，如果让 A 直接依赖于 B，当然可行，但是 A 就没法做得通用了。依赖注入就是把 B 的逻辑以函数形式传递给 A，A 和 B 之间只需要对这个函数接口达成一致就行，如此一来，再来一个逻辑 C，也可以用一样的方法重用逻辑 A。

### 3. 如何利用 render props 实现共享组件之间的逻辑。
```jsx
const Login = (props) => {
  const userName = getUserName();

  if (userName) {
    const allProps = {userName, ...props};
    return (
      <React.Fragment>
        {props.children(allProps)}
      </React.Fragment>
    );
  } else {
    return null;
  }
};


<Login>
  {
    (props) => {
      const {userName} = props;
      return <TheComponent {...props} name={userName} />
    }
  }
</Login>
```

## 七、组件设计模式(4): 提供者模式
1. 提供者模式解决的问题；
2. React 的 Context 功能对这种模式有很直接的支持；
3. 提供者模式中 render props 的应用。
```jsx
const ThemeContext = React.createContext();
const ThemeProvider = ThemeContext.Provider;
const ThemeConsumer = ThemeContext.Consumer;

class Subject extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {
          (theme) => (
            <h1 style={{color: theme.mainColor}}>
              {this.props.children}
            </h1>
          )
        }
      </ThemeConsumer>
    );
  }
}

const Paragraph = (props, context) => {
  return (
    <ThemeConsumer>
      {
        (theme) => (
          <p style={{color: theme.textColor}}>
            {props.children}
          </p>
          )
      }
    </ThemeConsumer>
  );
};

const Page = () => (
  <div>
    <Subject>这是标题</Subject>
    <Paragraph>
      这是正文
    </Paragraph>
  </div>
);


<ThemeProvider value={{mainColor: 'green', textColor: 'red'}} >
    <Page />
</ThemeProvider>
```
## 八、组件设计模式(5): 组合模式
组合组件模式要解决的是这样一类问题：父组件想要传递一些信息给子组件，但是，如果用 props 传递又显得十分麻烦。

使用 Context 也不是完美解法，上一节我们介绍过，使用 React 在 v16.3.0 之后提供的新的 Context API，需要让“提供者”和“消费者”共同依赖于一个 Context 对象，而且消费者也要使用 render props 模式

实例
```jsx
export default class Tabs extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0
        }
    }
    render(){
        const newChildren = React.Children.map(this.props.children, (child,index) => {
            if(child.type) {
                return React.cloneElement(child, {
                    active: this.state.activeIndex === index,
                    onClick: () => this.setState({activeIndex: index})
                })
            }else{
                return child
            }
        })
        return (
            <>
                {newChildren}
            </>
        )
    }
}

Tabs.Item = props => {
  const { active, onClick } = props;
  const tabStyle = {
    "maxWidth": "150px",
    color: active ? "red" : "green",
    border: active ? "1px red solid" : "0px"
  };
  return (
    <h1 style={tabStyle} onClick={onClick}>
      {props.children}
    </h1>
  );
};
```

## 九、单元测试
## 十、React 状态管理（1）：组件状态
1. 如何确定数据以 props 还是以 state 形式存在；
2. 更新 state 的正确方法；
3. setState 通常并不会立刻更新 state；
4. 函数参数形式的 setState 才是推荐的用法。
## 十一、React 状态管理（2）：Redux使用模式
### 适合 Redux 的场景
当一个 React 应用采用 Redux 之后，开发者往往就会陷入这样的纠结：对于某个状态，到底是放在 Redux 的 Store 中呢，还是放在 React 组件自身的状态中呢？
- 第一步，看这个状态是否会被多个 React 组件共享。
- 第二步，看这个组件被 unmount 之后重新被 mount，之前的状态是否需要保留。