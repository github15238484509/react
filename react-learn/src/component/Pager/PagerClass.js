import React from 'react'
import "./page.css"

/**
 * 
 * 1. current 当前页
 * 2. total 总页数
 * 3. limit 页容量
 * 4. panelNumber 显示多少页数
 * 5. onPagerChang 当前页改变后处理函数
 */
export class PagerClass extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.list = []
        this.panelAll = 0
    }
    render() {
        this.panelAll = Math.ceil(this.props.total / this.props.limit)
        if (this.panelAll <= 0) {
            return null
        }
        let min = this.props.current - Math.floor(this.props.panelNumber / 2)
        if (min <= 1) {
            min = 1
        }
        let max = min + this.props.panelNumber - 1
        if (max >= this.panelAll) {
            max = this.panelAll
        }
        this.list = []
        if (this.panelAll >= this.props.panelNumber) {
            min = max - this.props.panelNumber + 1
        }
        while (min <= max) {
            this.list.push(
                (<span key={min} className={
                    this.props.current === min ? "item active" : 'item'
                } onClick={
                    ((min) => {
                        return () => {
                            if (this.props.current === min) {
                                return
                            }
                            this.props.onPagerChang(min)
                        }
                    })(min)
                }>{min}</span>)
            )
            min++
        }
        return (
            <>
                <span className={
                    this.props.current === 1 ? "item disabled" : 'item'
                }
                    onClick={
                        () => {
                            this.props.onPagerChang(1)
                        }
                    }
                >首页</span>
                <span className={
                    this.props.current === 1 ? "item disabled" : 'item'
                }
                    onClick={
                        () => {
                            if (this.props.current === 1) {
                                return
                            }
                            let newPage = this.props.current - 1
                            this.props.onPagerChang(newPage)
                        }
                    }>上一页</span>
                {/* 正确的页码数 */}
                {this.list}
                <span className={
                    this.props.current >= this.panelAll ? "item disabled" : 'item'
                }
                    onClick={
                        () => {
                            if (this.props.current === this.panelAll) {
                                return
                            }
                            this.props.onPagerChang(this.panelAll)
                        }
                    }>尾页</span>
                <span className={
                    this.props.current >= this.panelAll ? "item disabled" : 'item'
                } onClick={
                    () => {
                        if (this.props.current === this.panelAll) {
                            return
                        }
                        let newPage = this.props.current + 1
                        this.props.onPagerChang(newPage)
                    }
                }>下一页</span>

                <span className="panel" >{this.props.current} / {this.panelAll}</span>
            </>
        )
    }
}