const brandBtn = document.getElementById('Brands')
const flavorsBtn = document.getElementById('Flavors')

brandBtn.addEventListener('click', async (e)=>{
 await fetch('https://localhost:3000/api/brands')
  console.log('Look! Brands!')
})

flavorsBtn.addEventListener('click',(e)=>{
  await fetch('https://localhost:3000/api/flavors')
  console.log('MMM! Flavors!')
})