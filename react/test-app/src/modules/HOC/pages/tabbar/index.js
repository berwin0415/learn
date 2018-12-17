import React from "react";
import { connect } from "react-redux";
import './index.css'

const tabbarArr = [
  {
    "img": "icon-home",
    "text": "首页"
  },
  {
    "img": "icon-home",
    "text": "分类"
  },
  {
    "img": "icon-home",
    "text": "购物车"
  },
  {
    "img": "icon-home",
    "text": "用户"
  },
]

class Tabbar extends React.Component {
  render() {
    return <div className="tabbar">
    <div className="tabbar-content">
      {
        tabbarArr.map((v, i) => (
          <div key={i} className="tabbar-item">
            <div className={"iconfont"+v.image}></div>
            <div>{v.text}</div>
          </div>
        ))
      }
      </div>
    </div>
  }
}
export default connect(
  state => ({
    state
  }),
  dispatch => ({
    dispatch
  })
)(Tabbar);
