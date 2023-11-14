const brandBtn = document.getElementById('Brands')
const flavorsBtn = document.getElementById('Flavors')



brandBtn.addEventListener('click', async (e)=>{
  console.log('Look! Brands!')
  await fetch('http://localhost:3000/api/brands')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Fetch Error:',error);
    })
})

flavorsBtn.addEventListener('click', async (e)=>{
  console.log('MMM! Flavors!')
  await fetch('http://localhost:3000/api/flavors')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    })
})

function populateResults(responseData) {

}