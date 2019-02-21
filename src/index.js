import Log from './log.js'
import bg from './assets/bg.jpg'
import './index.scss'

const dom = document.getElementById('root')
const img = document.createElement('img')
img.src = bg
img.classList.add('avatar')
dom.append(img)

const div = document.createElement('div')
const log = new Log()
div.innerText = log
