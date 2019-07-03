import {
  runInAction,
  observable,
  isArrayLike,
  computed,
  autorun,
  when,
  reaction,
  action
} from "mobx";

class Store {
  @observable array = [];
  @observable obj = {};
  @observable map = new Map();

  @observable string = "hellow";
  @observable number = 20;
  @observable bool = true;

  @computed get mixed() {
    return store.string + "/" + store.number;
  }

  @action.bound bar() {
    this.string = "world";
    this.number = 50;
  }
}

var store = new Store();

// //computed

// var foo = computed(() => store.string + '/' + store.number)

// foo.observe(change => console.log(change))

// // console.log(foo.get());
// store.string = 'world';
// store.number = 50;

// // autorun
// autorun(() => {
//   // console.log(store.string + '/' + store.number);
//   console.log(store.mixed);
// })

// store.string = 'world';
// store.number = 50;

// when
// when(() => store.bool, () => console.log('it is true'))

// //必须依赖于可观察对象
// when(() => !!store.bar, () => console.log('it is true'))
// store.bar = true

// 初始值不能为true， 否则同步执行下一个
// when(() => true, () => console.log('it is true'))

reaction(() => [store.string, store.number], arr => console.log(arr.join(" ")));
// store.string = 'world';
// store.number = 50;

// var bar = store.bar;

// bar()

runInAction('modify',() => {
  store.string = "world";
  store.number = 50;
});
