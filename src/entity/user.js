import { COLUMNS } from '../tools/constants'

class User {
  constructor ({ id, name, username, email, phone, address }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this.phone = phone
    this._address = address
  }

  get address () {
    return `${this._address.city} ${this._address.street}`
  }

  remove (e) {
    e.target.parentElement.remove()
  }

  render () {
    const tr = document.createElement('tr')

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]
      tr.append(td)
    })

    const action = document.createElement('td')
    action.textContent = 'x'
    action.style.color = 'red'
    action.style.padding = '5px'
    action.style.cursor = 'pointer'
    action.addEventListener('click', this.remove)

    tr.append(action)

    return tr
  }
}

export default User
