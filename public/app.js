const brandBtn = document.getElementById('Brands')
const flavorsBtn = document.getElementById('Flavors')
const container = document.getElementById('Container')
const resultsPane = document.createElement('div')
resultsPane.id = 'ResultsPane'
container.appendChild(resultsPane)

brandBtn.addEventListener('click', async (e)=>{
  console.log('Look! Brands!')
  await fetch('http://localhost:3000/api/brands')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let responseData = data
      populateBrandResults(responseData);
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
      let responseData = data
      populateFlavorResults(responseData);
    })
    .catch(error => {
      console.error('Fetch Error:', error);
    })
})

function populateFlavorResults(responseData) {
  while (resultsPane.firstChild) {
    resultsPane.removeChild(resultsPane.firstChild)
  }

  responseData.forEach( (data) => {
    const flavorPane = document.createElement('div')
      flavorPane.id = 'FlavorPane'

    const flavorBrand = document.createElement('h1')
      flavorBrand.id = 'FlavorBrand'
      flavorBrand.textContent = data.brandname

    const flavorName = document.createElement('h2')
      flavorName.className = 'flavor-name'
      flavorName.id = `${data.id}`
      flavorName.textContent = data.flavor

    const flavorDelete = document.createElement('button')
      flavorDelete.id = 'FlavorDelete'
      flavorDelete.textContent = `Delete Flavor`
      flavorDelete.addEventListener('click', (e) => {
        const delMe = e.target.parentNode.children[1].id
        deleteFlavor(delMe)
      })

    const brandDelete = document.createElement('button')
      brandDelete.id = 'BrandDelete'
      brandDelete.textContent = `Delete Brand`
      brandDelete.addEventListener('click', (e) => {
        const delMe = e.target.parentNode.children[0].textContent
        deleteBrand(delMe)
      })

    flavorPane.appendChild(flavorBrand)
    flavorPane.appendChild(flavorName)
    flavorPane.appendChild(flavorDelete)
    flavorPane.appendChild(brandDelete)
    resultsPane.appendChild(flavorPane)
  })
}

function populateBrandResults(responseData) {
  while (resultsPane.firstChild) {
    resultsPane.removeChild(resultsPane.firstChild)
  }
  responseData.forEach( (data) => {
    const brandPane = document.createElement('div')
      brandPane.id = 'BrandPane'
    const brandName = document.createElement('h1')
      brandName.textContent = `${data.brandname}`
      brandName.id = 'BrandName';
      brandName.addEventListener('click', (e) => {
        setBrandId(e)
      })
    brandPane.appendChild(brandName)
    resultsPane.appendChild(brandPane)
  })
}

function setBrandId(brandName) {
  // assign id to brandName.target.textContent
  console.log(brandName.target)
  let brandId =
    brandName.target.textContent === 'Monster' ? 1 :
    brandName.target.textContent === 'Reign' ? 2 :     brandName.target.textContent === 'Rip it' ? 3 :
    undefined;
  // make fetch request based on id number
  getSingleBrandFlavors(brandId)
}

async function getSingleBrandFlavors(id) {
  await fetch(`http://localhost:3000/api/flavors/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      let responseData = data
      populateFlavorResults(responseData)
    })
    .catch(error => {
      console.error('Fetch Error:', error)
    })
}

async function deleteFlavor(id) {
  console.log("Attempting Flavor Removal")
  await fetch(`http://localhost:3000/api/flavors/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  .then(response =>  response.json())
  .then(response => {
    console.log(`Successfully Deleted ${response}`)
  })
  .catch(error => {
    console.error('Delete Request Failed:',error);
  })
}