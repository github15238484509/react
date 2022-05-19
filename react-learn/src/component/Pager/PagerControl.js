import React from 'react'
import { PagerFunc } from './PagerFunc'
import { PagerClass } from "./PagerClass"

/**
 * 
 * 1. current 当前页
 * 2. total 总页数
 * 3. limit 页容量
 * 4. panelNumber 显示多少页数
 * 5. onPagerChang 当前页改变后处理函数
 */

export class PagerControl extends React.Component {
    state = {
        current: 1,
        total: 690,
        limit: 10,
        panelNumber: 5,
    }
    onPagerChang = (newPage) => {
        this.setState({
            current: newPage
        })
    }
    render() {
        return (
            <div>
                <p>函数式组件</p>
                <PagerFunc {...this.state} onPagerChang={this.onPagerChang}></PagerFunc>

                <p>类组件</p>
                <PagerClass {...this.state} onPagerChang={this.onPagerChang}></PagerClass>
            </div>

        )
    }
}