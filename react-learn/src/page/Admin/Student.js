import React, { useEffect, useState } from 'react'
import { GetStudents } from '../../api/students'
import MyTaber from '../../component/MyTaber'
import { PagerFunc } from "../../component/Pager/PagerFunc"
import { PagerClass } from "../../component/Pager/PagerClass"
import { useLocation, useNavigate } from "react-router-dom";
import qs from "query-string"
function setRightSearch(query) {
  let defaultQuery = {
    page: 1,
    limit: 10
  }
  let queryString = qs.parse(query)
  let rightQuery = Object.assign(defaultQuery, queryString)
  rightQuery.limit = 1 * rightQuery.limit
  rightQuery.page = 1 * rightQuery.page
  return rightQuery
}

function useGetData(search) {
  let [data, setDate] = useState({
    count: 0,
    rows: []
  })
  useEffect(() => {
    GetStudents(search.page, search.limit).then(data => {
      setDate(data)
    })
  }, [search.page, search.limit])

  return data
}


export default function Student() {
  let search = setRightSearch(useLocation().search)
  let datas = useGetData(search)
  let navigate = useNavigate()
  return (
    <div style={{
      padding: "20px"
    }}>
      <MyTaber data={datas.rows}></MyTaber>
      <div>
        <PagerClass onPagerChang={(e) => {
          navigate(`?page=${e}`)
        }} limit={search.limit} panelNumber={5} current={search.page} total={datas.count} ></PagerClass>
      </div>
      <div>
        <PagerFunc onPagerChang={(e) => {
          navigate(`?page=${e}`)
        }} limit={search.limit} panelNumber={5} current={search.page} total={datas.count} ></PagerFunc>
      </div>
    </div>
  )
}
