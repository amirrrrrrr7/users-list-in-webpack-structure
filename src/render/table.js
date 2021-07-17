import renderTableHead from './tableHead'
import User from '../entity/user'
import '../assets/css/table.css'

export default function renderTable (users) {
  const table = document.createElement('table')
  table.setAttribute('border', 1)
  // table.setAttribute('width', '100%')

  table.append(renderTableHead())

  users.forEach(el => {
    const user = new User(el)
    table.append(user.render())
  })

  return table
}
