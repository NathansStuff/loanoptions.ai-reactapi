import hardcodedData from '../data/data'
import Table from '../components/table.component'
import { University } from '../types/types'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState<University[]>([])

  function loadData() {
    setData(hardcodedData)
  }

  function deleteData() {
    const newData = data.pop()
    // since .pop() might return undefined, we need to protect it
    let protectedData: University[]
    if (newData === undefined) {
      protectedData = []
    } else {
      protectedData = data
    }
    setData([...protectedData])
  }

  function addData() {
    const dataToAdd = data[0]
    const newData = [...data, dataToAdd]
    setData([...newData])
  }

  console.log('data >>> ' + data.length)
  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5">
      <h1>HomePage</h1>
      <Table data={data} />
      <button
        onClick={loadData}
        className="border bg-3 text-white p-2 rounded-full hover:bg-4 hover:-translate-y-1 transition ease-in-out delay-150"
      >
        Load Data
      </button>
      <button onClick={deleteData}>Delete Data</button>
      <button onClick={addData}>Add Data</button>
    </div>
  )
}
