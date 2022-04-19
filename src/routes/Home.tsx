import data from '../data/data'
import University from '../types/types'

export default function Home() {
  const tableData = data
  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5">
      <h1>HomePage</h1>
      <table className="">
        <thead className="">
          <tr >
            <th className='border p-5'>State Provider</th>
            <th className='border p-5'>Country</th>
            <th className='border p-5'>Name</th>
            <th className='border p-5'>Web Pages</th>
            <th className='border p-5'>Domains</th>
            <th className='border p-5'>Alpha Two Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>null</td>
            <td>Australia</td>
            <td>Australian Correspondence Schools</td>
            <td>http://www.acs.edu.au/</td>
            <td>acs.edu.au</td>
            <td>AU</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
