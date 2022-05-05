import "./page.css"
/**
 * 
 * 1. current 当前页
 * 2. total 总页数
 * 3. limit 页容量
 * 4. panelNumber 显示多少页数
 * 5. onPagerChang 当前页改变后处理函数
 */
export function PagerFunc({ current, total, limit, panelNumber, onPagerChang }) {
    let panelAll = Math.ceil(total / limit)
    if (panelAll <= 0) {
        return null
    }
    if (current > panelAll) {
        throw new Error('瞎几把传值当前页大于总页数')
    }
    const newLocal = current === 1
    let min = getMinPage(current, panelNumber)
    let max = getMaxPage(min, panelNumber, panelAll)
    if (panelAll >= panelNumber) {
        min = max - panelNumber + 1
    }
    let list = []

    while (min <= max) {
        list.push(
            (<span key={min} className={
                current === min ? "item active" : 'item'
            } onClick={
                ((min) => {
                    return () => {
                        if (current === min) {
                            return
                        }
                        onPagerChang(min)
                    }
                })(min)
            }>{min}</span>)
        )
        min++
    }

    return (
        <>
            <span className={
                current === 1 ? "item disabled" : 'item'
            }
                onClick={
                    () => {
                        if (current === 1) {
                            return
                        }
                        onPagerChang(1)
                    }
                }
            >首页</span>
            <span className={
                newLocal ? "item disabled" : 'item'
            }
                onClick={
                    () => {
                        if (current === 1) {
                            return
                        }
                        let newPage = current - 1
                        onPagerChang(newPage)
                    }
                }>上一页</span>
            {/* 正确的页码数 */}
            {list}
            <span className={
                current >= panelAll ? "item disabled" : 'item'
            }
                onClick={
                    () => {
                        if (current === panelAll) {
                            return
                        }
                        onPagerChang(panelAll)
                    }
                }>尾页</span>
            <span className={
                current >= panelAll ? "item disabled" : 'item'
            } onClick={
                () => {
                    if (current === panelAll) {
                        return
                    }
                    let newPage = current + 1
                    onPagerChang(newPage)
                }
            }>下一页</span>

            <span className="panel" >{current} / {panelAll}</span>
        </>
    )
}
function getMinPage(current, panelNumber) {
    let dis = Math.floor(panelNumber / 2)
    dis = current - dis
    if (dis <= 1) {
        return 1
    }
    return dis
}

function getMaxPage(min, panelNumber, panelAll) {
    let max = min + panelNumber - 1
    if (max >= panelAll) {
        return panelAll
    }
    return max
}