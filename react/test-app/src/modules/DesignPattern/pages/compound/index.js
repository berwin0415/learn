import React from 'react'
import Tabs from './tab';
const Item = Tabs.Item
export default class compound extends React.Component {
    render(){
        return(
            <Tabs>
                <Item>one</Item>
                <Item>two</Item>
                <Item>three</Item>
            </Tabs>
        )
    }
}