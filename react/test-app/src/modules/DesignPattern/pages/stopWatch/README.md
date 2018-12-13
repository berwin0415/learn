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
```
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