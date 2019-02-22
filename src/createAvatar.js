import bg from './assets/img/bg.jpg'
import style from './index.scss'

function createAvatar() {
  console.log(style,'style')
  const dom = document.getElementById('root')
  const img = document.createElement('img')
  img.src = bg
  img.classList.add(style.avatar)
  dom.append(img)
}

export default createAvatar;
