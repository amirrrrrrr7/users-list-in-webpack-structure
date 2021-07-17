import logo from '../assets/images/logo.png'

export default function renderHead () {
  const div = document.createElement('div')
  const h2 = document.createElement('h2')
  h2.textContent = 'Users list'

  const img = document.createElement('img')
  img.setAttribute('src', logo)

  div.append(img)
  div.append(h2)

  return div
}
