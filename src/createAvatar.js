import bg from './assets/img/bg.jpg'
import style from './index.scss'

function createAvatar() {
  const dom = document.getElementById('root')
  const img = document.createElement('img')
  img.src = bg
  img.setAttribute('id', 'image')
  img.classList.add(style.avatar)
  dom.append(img)
}

export default createAvatar;
