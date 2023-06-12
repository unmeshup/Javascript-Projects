const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

// initialize the count variable
let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList
    const decButton = document.querySelector('.decrease')

    if (styles.contains('increase')) {
      count++

      if (decButton.disabled) decButton.disabled = false

      counter.classList.add('up')

      setTimeout(() => {
        counter.classList.remove('up')
      }, 500)
    } else if (styles.contains('decrease')) {
      count--

      if (count < 0) decButton.disabled = true

      counter.classList.add('down')

      setTimeout(() => {
        counter.classList.remove('down')
      }, 500)
    } else {
      if (decButton.disabled) decButton.disabled = false

      count = 0
    }

    if (count > 0)
      counter.style.color = 'green'

    if (count < 0)
      counter.style.color = 'red'

    if (count === 0)
      counter.style.color = 'grey'

    counter.textContent = count
  })
})