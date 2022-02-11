const box = document.querySelector('.box-container')
const tabBtns = document.querySelectorAll('.tabs__btn')
const tabContent = document.querySelectorAll('.tabs-content__tab')

box.addEventListener('click', function (e) {
  const id = e.target.dataset.id

  if (id) {
    tabBtns.forEach(function (btn) {
      btn.classList.remove('tabs__btn_active')
    })
    e.target.classList.add('tabs__btn_active')
    tabContent.forEach(function (tab) {
      tab.classList.remove('tabs-content__tab_active')
    })
    const element = document.getElementById(id)
    console.log(element)
    element.classList.add('tabs-content__tab_active')
  }
})
