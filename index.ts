const toggleClass = (
  clickSelector: string,
  addClassSelector: string,
  className?: string
) => {
  const $cDom = document.querySelector<HTMLElement>(clickSelector)
  const $aDom = document.querySelector<HTMLElement>(addClassSelector)
  $cDom.onclick = () => {
    $aDom.classList.toggle(className)
  }
}

toggleClass('.nav .nav-control', '.nav', 'active')

declare var module: any

if (module.hot) {
  module.hot.accept(function() {
    window.location.reload()
  })
}

toggleClass('#show-modal', '.modal', 'show')
toggleClass('.modal .close', '.modal', 'show')
toggleClass('.modal .bg', '.modal', 'show')

const menu = () => {
  ;(Array as any).from(document.querySelectorAll('.menu .title')).map(dom => {
    console.log(dom)
    dom.onclick = () => {
      dom.classList.toggle('show')

      dom.nextElementSibling.classList.toggle('show')
    }
  })
}

menu()
