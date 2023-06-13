document.addEventListener('DOMContentLoaded', function() {
  // Получаем все элементы чекбоксов для фильтрации по городам
  const cityFilterCheckboxes = document.getElementsByClassName('city-filter');
  
  // Получаем все элементы чекбоксов для фильтрации по специальностям
  const specialityFilterCheckboxes = document.getElementsByClassName('speciality-filter');
  
  // Получаем список всех компаний
  const companyList = document.querySelectorAll('#company-list li');

  // Добавляем обработчики событий на изменение состояния чекбоксов фильтрации по городам
  for (let i = 0; i < cityFilterCheckboxes.length; i++) {
    cityFilterCheckboxes[i].addEventListener('change', applyFilters);
  }

  // Добавляем обработчики событий на изменение состояния чекбоксов фильтрации по специальностям
  for (let i = 0; i < specialityFilterCheckboxes.length; i++) {
    specialityFilterCheckboxes[i].addEventListener('change', applyFilters);
  }

  // Функция для применения фильтров
  function applyFilters() {
    // Получаем выбранные значения чекбоксов фильтрации по городам
    const selectedCities = getSelectedValues('city-filter');
    
    // Получаем выбранные значения чекбоксов фильтрации по специальностям
    const selectedSpecialities = getSelectedValues('speciality-filter');

    // Проходимся по каждой компании и проверяем соответствие выбранным значениям фильтров
    for (let i = 0; i < companyList.length; i++) {
      const company = companyList[i];
      
      // Получаем список городов компании
      const companyCities = company.getAttribute('data-cities').split(' ');
      
      // Получаем список специальностей компании
      const companySpecialities = company.getAttribute('data-specialities').split(' ');

      // Проверяем соответствие выбранным городам
      const cityMatch = selectedCities.length === 0 || selectedCities.some(city => companyCities.includes(city));
      
      // Проверяем соответствие выбранным специальностям
      const specialityMatch = selectedSpecialities.length === 0 || selectedSpecialities.every(speciality => companySpecialities.includes(speciality));

      // Отображаем или скрываем компанию в зависимости от соответствия фильтрам
      if (cityMatch && specialityMatch) {
        company.style.display = 'block'; // Отобразить компанию
      } else {
        company.style.display = 'none'; // Скрыть компанию
      }
    }
  }

  // Функция для получения выбранных значений чекбоксов
  function getSelectedValues(filterClass) {
    const checkboxes = document.getElementsByClassName(filterClass);
    const selectedValues = [];

    for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
        selectedValues.push(checkboxes[i].value);
      }
    }

    return selectedValues;
  }
});






// const specialityFilter = document.getElementsByClassName('speciality-filter');
// const cityFiter = document.getElementsByClassName('city-filter');
// const companyList = document.getElementsByClassName('betriebe-list__link');


// function getSelectedValues(filterClass) {
//   const checkboxes = document.getElementsByClassName(filterClass);
//   const selectedValues = [];

//   for (let i = 0; i < checkboxes.length; i++) {
//     if (checkboxes[i].checked) {
//       selectedValues.push(checkboxes[i].value);
//     }
//   }
//   return selectedValues
// }

// function applyFilters() {
//   const selectedCities = getSelectedValues('city-filter');
//   const selectedSpecialities = getSelectedValues('speciality-filter');

//   for (let i = 0; i < companyList.length; i++) {
//     const company = companyList[i]

//     const companyCities = company.getAttribute('data-city').split(' ');

//     const companySpecialities = company.getAttribute('data-specialty').split(' ');


//     const cityMatch = selectedCities.length === 0 || selectedCities.some(city => companyCities.includes(city))
//     const specialytyMatch = selectedSpecialities.length === 0 || companySpecialities.some(speciality => selectedSpecialities.includes(speciality));
//     if (cityMatch && specialytyMatch) {
//       company.style.display = 'block';
//     } else {
//       company.style.display = 'none';
//     }
//   }
  
// }

// for (let i = 0; i < cityFiter.length; i++) {
//   const element = cityFiter[i];
//   element.addEventListener('change', applyFilters)
// }

// for (let i = 0; i < specialityFilter.length; i++) {
//   const element = specialityFilter[i];
//   element.addEventListener('change', applyFilters)
// }


// const alleBetriebe = document.getElementById('alleBetriebe');
// alleBetriebe.addEventListener('click', function() {
//   const companyArray = Array.from(companyList);
//   companyArray.forEach(element => {
//     element.style.display = 'block';
//   });
//   for (let i = 0; i < cityFiter.length; i++) {
//     const element = cityFiter[i];
//     element.checked = false
    
//   }
//   for (let i = 0; i < specialityFilter.length; i++) {
//     const element = specialityFilter[i];
//     element.checked = false
    
//   }
// });

// const searchLinks = document.getElementsByClassName('betriebe-search__link');
// for (let i = 0; i < searchLinks.length; i++) {
//   const element = searchLinks[i];
//   element.addEventListener ('click', function(event) {
//     event.preventDefault();
//     const filterItem = document.getElementsByClassName('betriebe-search__item');
//     for (let i = 0; i < filterItem.length; i++) {
//       const element = filterItem[i];
//       element.style.display = 'none';
      
//     }
//     const hrefValue = element.getAttribute('href');
//     const hrefWithoutHash = hrefValue.replace('#', '');
//     console.log(hrefWithoutHash);
//     document.getElementById(hrefWithoutHash).style.display = 'grid'
//   })
// }
