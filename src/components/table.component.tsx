import tableHeaders from '../data/tableHeaders'
import { University } from '../types/types'

const tableRowStyle = 'odd:bg-gray-200'
const tableDataStyle = 'border border-black p-2'

export default function Table({ data }: { data: University[] }) {
  // Index will become the id since the data doesnt have id
  let index = 0

  return (
    <table className="container text-softBlack">
      <thead className="bg-blue-4">
        <tr className="">

          {/* Always returns the Table Head even when no data */}
          {tableHeaders.map((tableHeader, index) => {
            return (
              <th className={tableDataStyle} key={index}>
                {tableHeader}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {data?.map((dataRow) => {
          // Remembering index is acting as key ID
          index += 1
          // Initialise empty object to store rows
          const tableRows: JSX.Element[] = []

          // The first row including all values
          tableRows.push(
            <tr key={index} className={tableRowStyle}>
              <td className={tableDataStyle}>{dataRow['state-province']}</td>
              <td className={tableDataStyle}>{dataRow['country']}</td>
              <td className={tableDataStyle}>{dataRow['name']}</td>
              <td className={tableDataStyle}>{dataRow['web_pages']}</td>
              <td className={tableDataStyle}>{dataRow['domains'][0]}</td>
              <td className={tableDataStyle}>{dataRow['alpha_two_code']}</td>
            </tr>
          )

          // Extra rows in case webpages or domains have >1 value

          const domainsLength = dataRow['domains'].length
          const webpagesLength = dataRow['web_pages'].length
          // Determine maximum number of extra rows
          const maxDomainsAndWebpagesLength = Math.max(
            webpagesLength,
            domainsLength
          )
          // Get extra rows only if necessary
          if (maxDomainsAndWebpagesLength !== 1) {
            for (
              let maxIndex = 1;
              maxIndex < maxDomainsAndWebpagesLength;
              maxIndex++
            ) {
              // index increases here to avoid conflicting key ids
              index += 1
              tableRows.push(
                <tr className={tableRowStyle} key={index}>
                  <td className={tableDataStyle} />
                  <td className={tableDataStyle} />
                  <td className={tableDataStyle} />
                  <td className={tableDataStyle}>
                    {dataRow['web_pages'][maxIndex]}
                  </td>
                  <td className={tableDataStyle}>
                    {dataRow['domains'][maxIndex]}
                  </td>
                  <td className={tableDataStyle} />
                </tr>
              )
            }
          }
          return tableRows
        })}
      </tbody>
    </table>
  )
}
