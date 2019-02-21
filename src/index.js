import Log from './log.js'
import bg from './assets/bg.jpg'
import createAvatar from './createAvatar'
import style from './index.scss'

createAvatar()

const dom = document.getElementById('root')
const img = document.createElement('img')
img.src = bg
img.classList.add(style.avatar)
dom.append(img)

const div = document.createElement('div')
const log = new Log()
div.innerText = log
