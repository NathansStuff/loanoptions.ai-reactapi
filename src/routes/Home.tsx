import Table from '../components/table.component'
import { University } from '../types/types'
import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState<University[]>([])

  const fetchData = () => {
    return fetch(
      'http://universities.hipolabs.com/search?country=Australia'
    ).then((response) => response.json())
  }

  async function loadData() {
    const fetchedData = await fetchData()
    setData(fetchedData)
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

  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5">
      <h1 className='font-softBlack text-xl'>LoanOptions.ai API React</h1>
      <Table data={data} />
      <div className="flex space-x-5">
        <button
          onClick={loadData}
          className="border shadow bg-3 text-white p-2 rounded-full hover:bg-3Dark hover:-translate-y-1 transition ease-in-out delay-150"
        >
          Load Data
        </button>
        <button
          className="border shadow bg-5 text-white p-2 rounded-full hover:bg-red-500 hover:-translate-y-1 transition ease-in-out delay-150"
          onClick={deleteData}
        >
          Delete Data
        </button>
        <button
          className="border shadow bg-4 text-white p-2 rounded-full hover:bg-2 hover:-translate-y-1 transition ease-in-out delay-150"
          onClick={addData}
        >
          Add Data
        </button>
      </div>
    </div>
  )
}
