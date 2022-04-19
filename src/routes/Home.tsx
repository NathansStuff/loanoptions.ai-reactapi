import data from '../data/data'

export default function Home() {
  const tableHeaders: String[] = [
    'State Provider',
    'Country',
    'Name',
    'Web Pages',
    'Domains',
    'Alpha Two Code',
  ]

  return (
    <div className="flex justify-center items-center w-full flex-col space-y-5 p-5">
      <h1>HomePage</h1>
      <table className="">
        <thead className="">
          <tr>
            {tableHeaders.map((tableHeader) => {
              return <th className="border p-5">{tableHeader}</th>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((dataRow) => {
            // Initialise empty object to store rows
            const tableRows: JSX.Element[] = []

            // The first row including all values
            tableRows.push(
              <tr>
                <td>{dataRow['state-province']}</td>
                <td>{dataRow['country']}</td>
                <td>{dataRow['name']}</td>
                <td>{dataRow['web_pages']}</td>
                <td>{dataRow['domains'][0]}</td>
                <td>{dataRow['alpha_two_code']}</td>
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
                let index = 1;
                index < maxDomainsAndWebpagesLength;
                index++
              ) {
                tableRows.push(
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{dataRow['web_pages'][index]}</td>
                    <td>{dataRow['domains'][index]}</td>
                    <td></td>
                  </tr>
                )
              }
            }
            return tableRows
          })}
        </tbody>
      </table>
    </div>
  )
}
