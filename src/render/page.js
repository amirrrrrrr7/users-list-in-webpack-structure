import renderHead from './head'
import renderTable from './table'
import '../assets/scss/page.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function renderPage (users) {
  const root = document.getElementById('root')

  root.append(renderHead())
  root.append(renderTable(users))
}
