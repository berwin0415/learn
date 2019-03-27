import { Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>{ props.title }</h1>
        <Link to="/list">跳转列表页</Link>
    </div>
)

export default connect(state => ({...state.home}))(Home)
