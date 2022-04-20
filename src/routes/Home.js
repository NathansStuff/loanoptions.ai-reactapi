import Table from '../components/table.component'
import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { addUniversity } from '../redux/University/university.actions'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

function Home({ universities, addUniversity }) {
  const [data, setData] = useState([])

  // Rerender the page when the state changes
  useEffect(() => {
    setData(universities.universities)
  }, [universities])

  function fetchData() {
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
    let protectedData
    if (newData === undefined) {
      protectedData = []
    } else {
      protectedData = data
    }
    setData([...protectedData])
  }

  function addData() {
    const dataToAdd = data[0]
    addUniversity(dataToAdd)
    console.log('add data function')
    // const newData = [...data, dataToAdd]
    // setData([...newData])
  }

  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5 z-10">
      <h1 className="font-softBlack text-xl">LoanOptions.ai API React</h1>

      <div className="flex space-x-5">
        <button
          onClick={loadData}
          className="border shadow bg-3 text-white p-2 rounded-full hover:bg-3Dark hover:-translate-y-1 transition ease-in-out delay-150"
        >
          Load<span className="hidden md:inline"> Data</span>
        </button>
        <button
          className="border shadow bg-5 text-white p-2 rounded-full hover:bg-red-500 hover:-translate-y-1 transition ease-in-out delay-150 "
          onClick={deleteData}
        >
          Delete <span className="hidden md:inline"> Data</span>
        </button>
        <button
          className="border shadow bg-4 text-white p-2 rounded-full hover:bg-2 hover:-translate-y-1 transition ease-in-out delay-150"
          onClick={() => addData()}
        >
          Add <span className="hidden md:inline"> Data</span>
        </button>
      </div>
      <Table data={data} />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUniversity: (university) => dispatch(addUniversity(university)),
  }
}

const mapStateToProps = (state) => {
  return {
    universities: state.universities,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
