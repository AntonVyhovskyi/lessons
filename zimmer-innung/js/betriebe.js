const specialityFilter = document.getElementsByClassName('speciality-filter');
const cityFiter = document.getElementsByClassName('city-filter');
const companyList = document.getElementsByClassName('betriebe-list__link');


function getSelectedValues(filterClass) {
  const checkboxes = document.getElementsByClassName(filterClass);
  const selectedValues = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      selectedValues.push(checkboxes[i].value);
    }
  }
  return selectedValues
}

function applyFilters() {
  const selectedCities = getSelectedValues('city-filter');
  const selectedSpecialities = getSelectedValues('speciality-filter');

  for (let i = 0; i < companyList.length; i++) {
    const company = companyList[i]

    const companyCities = company.getAttribute('data-city').split(' ');

    const companySpecialities = company.getAttribute('data-specialty').split(' ');


    const cityMatch = selectedCities.length === 0 || selectedCities.some(city => companyCities.includes(city))
    const specialytyMatch = selectedSpecialities.length === 0 || companySpecialities.some(speciality => selectedSpecialities.includes(speciality));
    if (cityMatch && specialytyMatch) {
      company.style.display = 'block';
    } else {
      company.style.display = 'none';
    }
  }
  
}

for (let i = 0; i < cityFiter.length; i++) {
  const element = cityFiter[i];
  element.addEventListener('change', applyFilters)
}

for (let i = 0; i < specialityFilter.length; i++) {
  const element = specialityFilter[i];
  element.addEventListener('change', applyFilters)
}


const alleBetriebe = document.getElementById('alleBetriebe');
alleBetriebe.addEventListener('click', function() {
  const companyArray = Array.from(companyList);
  companyArray.forEach(element => {
    element.style.display = 'block';
  });
  for (let i = 0; i < cityFiter.length; i++) {
    const element = cityFiter[i];
    element.checked = false
    
  }
  for (let i = 0; i < specialityFilter.length; i++) {
    const element = specialityFilter[i];
    element.checked = false
    
  }
});

const searchLinks = document.getElementsByClassName('betriebe-search__link');
for (let i = 0; i < searchLinks.length; i++) {
  const element = searchLinks[i];
  element.addEventListener ('click', function(event) {
    event.preventDefault();
    const filterItem = document.getElementsByClassName('betriebe-search__item');
    for (let i = 0; i < filterItem.length; i++) {
      const element = filterItem[i];
      element.style.display = 'none';
      
    }
    const hrefValue = element.getAttribute('href');
    const hrefWithoutHash = hrefValue.replace('#', '');
    console.log(hrefWithoutHash);
    document.getElementById(hrefWithoutHash).style.display = 'grid'
  })
}

// companyList.forEach(element => {
//   element.addEventListener('click', function() {
//     const subItem = element.ElementByClassName('betriebe-list__sub');
//     subItem.style.height = ('auto')
//   })
// });

// for (let i = 0; i < companyList.length; i++) {
//   const element = companyList[i];
//   element.addEventListener('click', function() {
//     const subItem = element.querySelector('.betriebe-list__sub');
//     console.log(subItem);
//     subItem.style.height = 'auto';
    
//   })

// }