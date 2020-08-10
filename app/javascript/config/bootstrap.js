import 'bootstrap'

document.addEventListener("turbolinks:load", () => {
    $('[data-toggle="tooltip"]').tooltip({container: '#main-content'})
  })