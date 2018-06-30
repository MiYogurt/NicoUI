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
