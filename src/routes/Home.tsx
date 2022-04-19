import data from '../data/data'
import Table from '../components/table.component';

export default function Home() {
  
  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5">
      <h1>HomePage</h1>
      <Table data={data}/>
    </div>
  )
}
