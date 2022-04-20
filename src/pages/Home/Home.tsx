import Table from '../../components/table.component'
import { useEffect, useState } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import {
  addUniversity,
  setUniversities,
} from '../../redux/University/university.actions'
import { University } from '../../types/types'
import { Dispatch } from 'redux';

// Types
type RootState = {
  universities: { universities: University[] }
}
type PropsFromRedux = ConnectedProps<typeof connector>

function Home({
  universities,
  addUniversity,
  setUniversities,
}: PropsFromRedux) {
  const [data, setData] = useState<University[]>([])

  // Rerender the page when the state changes
  useEffect(() => {
    setData(universities.universities)
  }, [universities])

  // Fetch the API data
  function fetchData() {
    return fetch(
      'http://universities.hipolabs.com/search?country=Australia'
    ).then((response) => response.json())
  }

  async function loadData() {
    const fetchedData = await fetchData()
    setUniversities(fetchedData)
  }

  function deleteData() {
    // remove last element
    const newData = data.slice(0, -1)
    setUniversities(newData)
  }

  function addData() {
    // Check to make sure data exists
    if (data[0]) {
      const dataToAdd = data[0]
      addUniversity(dataToAdd)
    }
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addUniversity: (university: University) =>
      dispatch(addUniversity(university)),
    setUniversities: (universities: University[]) =>
      dispatch(setUniversities(universities)),
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    universities: state.universities,
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

export default (connector)(Home)
