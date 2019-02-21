import bg from './assets/bg.jpg'
import './index.scss'

function createAvatar() {
  const dom = document.getElementById('root')
  const img = document.createElement('img')
  img.src = bg
  img.classList.add('avatar')
  dom.append(img)
}

export default createAvatar;
