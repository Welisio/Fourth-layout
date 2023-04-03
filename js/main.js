var rubrikaList = document.getElementsByClassName("rubrika-list")[0]
var langList = document.getElementsByClassName("lang-list")[0]
function dropDownRubrikaLang (elm1,elm2) {
  var navElem = document.getElementsByClassName("elm1")[0]
  let arrow = document.getElementsByClassName("elm1")[0]
  if (rubrikaList.style.display === "flex") {
    rubrikaList.style.display = "none"
    navElem.style.color = "var(--black)"
    arrow.style.fill = "var(--black)"
  } else {
    rubrikaList.style.display = "flex"
    navElem.style.color = "var(--red)"
    arrow.style.fill = "var(--red)"
  }
}
function dropDownLang () {
  var lang = document.getElementsByClassName("lang")[0]
  let arrow = document.getElementsByClassName("arrow-header2")[0]
  if (langList.style.display === "flex") {
    langList.style.display = "none"
    lang.style.color = "var(--black)"
    arrow.style.fill = "var(--black)"
  } else {
    langList.style.display = "flex"
    lang.style.color = "var(--red)"
    arrow.style.fill = "var(--red)"
  }
}
function changeLang (langIndex) {
  let selectedLang = document.getElementsByClassName("selected-lang")[0]
  let sublangs = document.getElementsByClassName("sublangs")
  let readedVal = sublangs[langIndex].innerHTML
  var selectedLangContainer = selectedLang.innerHTML
  selectedLang.innerHTML = readedVal
  sublangs[langIndex].innerHTML = selectedLangContainer
}
function dropDownMonth () {
  let monthList = document.getElementsByClassName("month-list")[0]
  let jurnalArrow1 = document.getElementsByClassName("jurnal-arrow1")[0]
  if (monthList.style.display === 'flex') {
    monthList.style.display = "none"
    jurnalArrow1.style.transform = "rotate(0deg)"
  } else {
    monthList.style.display = "flex"
    jurnalArrow1.style.transform = "rotate(180deg)"
  }
}
function changeMonth (monthIndex) {
  let selectedMonth = document.getElementsByClassName("selected-month")[0]
  let submonths = document.getElementsByClassName("month-elem")
  let readedVal = submonths[monthIndex].innerHTML
  var selectedMonthContainer = selectedMonth.innerHTML
  selectedMonth.innerHTML = readedVal
  submonths[monthIndex].innerHTML = selectedMonthContainer !== 'Ay' ? selectedMonthContainer : ''
}
function dropDownYear () {
  let yearList = document.getElementsByClassName("year-list")[0]
  let jurnalArrow1 = document.getElementsByClassName("jurnal-arrow2")[0]
  if (yearList.style.display === 'flex') {
    yearList.style.display = "none"
    jurnalArrow1.style.transform = "rotate(0deg)"
  } else {
    yearList.style.display = "flex"
    jurnalArrow1.style.transform = "rotate(180deg)"
  }
}
function changeYear (yearIndex) {
  let selectedYear = document.getElementsByClassName("selected-year")[0]
  let subyears = document.getElementsByClassName("year-elem")
  let readedVal = subyears[yearIndex].innerHTML
  var selectedYearContainer = selectedYear.innerHTML
  selectedYear.innerHTML = readedVal
  subyears[yearIndex].innerHTML = selectedYearContainer !== 'İl' ? selectedYearContainer : ''
}
