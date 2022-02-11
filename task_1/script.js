const box = document.querySelector('.font-box-container')
const tabBtns = document.querySelectorAll('.tab-btn')
const tabContent = document.querySelectorAll('.tab-content')

box.addEventListener('click', function (e) {
  const id = e.target.dataset.id
  console.log(id)
  if (id) {
    tabBtns.forEach(function (btn) {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
    tabContent.forEach(function (tab) {
      tab.classList.remove('active')
    })
    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('active')
  }
})
