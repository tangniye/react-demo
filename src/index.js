import './iconfont.scss'
import createAvatar from './createAvatar'

const root = document.getElementById('root')
root.innerHTML = `<div class="iconfont icon-lock"></div>`

createAvatar()
createAvatar()
createAvatar()

const btn = document.createElement('button')
btn.innerText = 'New'
root.appendChild(btn)

btn.onclick = () => {
  const div = document.createElement('div')
  div.innerText = 'item'
  root.appendChild(div)
}