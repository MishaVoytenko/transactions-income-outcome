// const products = [
//   {
//     date: '29.12.2022',
//     name: 'tangerine',
//     price: 50,
//     quantity: 10,
//   },
//   {
//     date: '29.12.2022',
//     name: 'lime',
//     price: 110,
//     quantity: 12,
//   },
//   {
//     date: '29.12.2022',
//     name: 'lemon',
//     price: 45,
//     quantity: 20,
//   },
//   {
//     date: '29.12.2022',
//     name: 'orange',
//     price: 60,
//     quantity: 40,
//   },
// ]

const addBtn = document.querySelector('.add-btn')
const form = document.querySelector('form')

function transferData() {
  const data = getFormData()
  const row = buildRow(data)

  clearForm()
  apendRow(row)
}


function getFormData() {
  return {
    date: form.date.value,
    name: form.name.value,
    price: form.price.value,
    quantity: form.quantity.value,
  }
}

function buildRow(data) {

}

function clearForm() {

}

function apendRow(row) {

}



addBtn.addEventListener('click', transferData)

