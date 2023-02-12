import React, { useEffect, useState } from "react"
import { DataGrid} from '@mui/x-data-grid';
import "./fetch.css"

const columns = [
  { field: 'id', headerName: 'ID', width:200},
  { field: 'title', headerName: 'Title', width: 600 },
  { field: 'body', headerName: 'Body', width: 800 }
]

const Fetch = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div className="table">
      <DataGrid
        rows={tableData}
        columns={columns}
      />
    </div>
  )
}

export default Fetch;
