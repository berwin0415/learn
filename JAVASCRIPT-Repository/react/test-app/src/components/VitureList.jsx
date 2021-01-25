import React, { PureComponent } from "react";
const throttle = (func, wait, options = { leading: true, trailing: true }) => {
  let timeout, context, args; // result
  let previous = 0;
  if (!options) options = {};

  const later = function () {
    previous = options.leading === false ? 0 : new Date().getTime();
    timeout = null;
    func.apply(context, args);
    if (!timeout) context = args = null;
  };

  const throttled = function () {
    const now = new Date().getTime();
    if (!previous && options.leading === false) previous = now;
    const remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
  };

  throttled.cancel = () => {
    clearTimeout(timeout);
    previous = 0;
    timeout = null;
  };
  return throttled;
};

// 应该接收的props: renderItem: Function, height:string; estimateHeight:Number
class ScrollList extends PureComponent {
  constructor(props) {
    super(props);
    const data = Array(1000)
      .fill(1)
      .map((_, i) => i);
    this.state = {
      positions: this.initPositions(data),
      data,
      height: 250,
      headerHeight: 0,
      bottomHeight: 0,
    };

    this.renderItem = props.renderItem;
    this.getData = props.getData;
    // 预估高度 做屏幕适配
    this.estimateHeight =
      document.documentElement.clientWidth * (props.estimateHeight / 320);
    // 每一页展示的数据
    //一页10条数据，进行一页数据的预估
    // 每一页的总体高度
    this.pageHeight = [];

    this.scrollWrapper = React.createRef();
    this.handleScroll = throttle(this.onScroll, 300);
    this.hasDidMounted = false;
  }

  initPositions = (data) => {
    const { height } = this.state;
    const positions = data.map((d, index) => ({
      index,
      height,
      top: index,
      bottom: (index + 1) * height,
    }));
    return positions;
  };
  onScroll = function () {};
  // 滚动修改当前加载的数据(默认展示10条数据)
  getShowScrollData(scrollTop) {
    let startIndex = this.getStartIndex(scrollTop);
    // 当获取到startIndex大于或等于列表数据的最后10条的index，不再改变应该渲染的数据
    if (startIndex == null || startIndex + 10 > this.scrollData.length) {
      startIndex = this.scrollData.length - 10;
    }
    this.realdata = this.scrollData.slice(startIndex, startIndex + 10);
    return startIndex;
  }

  // 获取列表起始索引
  getStartIndex(scrollTop = 0) {
    // 二分法查找
    return this.binarySearch(this.positions, scrollTop);
  }
  // 获取列表项的当前尺寸
  updateItemsSize(scrollItemId) {
    // 获取当前渲染的数据的node节点
    let nodes = document.querySelectorAll(`.real-item`);
    nodes = Array.prototype.slice.call(nodes); // 类数组转数组
    nodes.forEach((node) => {
      // 根据getBoundingClientRect这个API获取到每个节点实际的数据
      const rect = node.getBoundingClientRect();
      const height = rect.height;
      const index = +node.id; // 每个node的id是数据在scrollData的下标
      const oldHeight = this.positions[index].height;
      const dValue = oldHeight - height;
      // 存在差值
      if (dValue) {
        this.positions[index].bottom = this.positions[index].bottom - dValue;
        this.positions[index].height = height;
        for (let k = index + 1; k < this.positions.length; k++) {
          this.positions[k].top = this.positions[k - 1].bottom;
          this.positions[k].bottom = this.positions[k].bottom - dValue;
        }
      }
    });
  }

  binarySearch = function (list, value) {
    let start = 0;
    let end = list.length - 1;
    let tempIndex = null;
    while (start <= end) {
      const midIndex = parseInt(`${(start + end) / 2}`, 10);
      const midValue = list[midIndex].bottom;
      if (midValue === value) {
        // 相等时结束
        return midIndex + 1;
      } else if (midValue < value) {
        // 小于时，startIndex增加
        start = midIndex + 1;
      } else if (midValue > value) {
        // 大于时， endIndex减小
        if (tempIndex === null || tempIndex > midIndex) {
          tempIndex = midIndex;
        }
        end = end - 1;
      }
    }
    return tempIndex;
  };

  render() {
    const { headerHeight, height, bottomHeight } = this.state;
    return (
      <div
        ref={(node) => (this.scrollWrapper = node)}
        onScroll={this.handleScroll}
        style={{ height, overflow: "scroll" }}
      >
        <div style={{ height: headerHeight }} />
        {this.state.data.map((item) => (
          <div key={item} style={{ height: 50 }}>
            {item}
          </div>
        ))}
        <div style={{ height: bottomHeight }} />
      </div>
    );
  }
}

export default ScrollList;
