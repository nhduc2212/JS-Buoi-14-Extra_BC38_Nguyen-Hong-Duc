// 1) Viết chương trình nhập vào ngày, tháng, năm (Giả sử nhập đúng, không cần kiểm tra hợp lệ).
// Tìm ngày, tháng, năm của ngày tiếp theo. Tương tự tìm ngày tháng năm của ngày trước đó.
// ===========3 Block Diagram===========
// INPUT: DateA
// OUTPUT: DateA-1, DateA+1
// PROCESS:
// get DateA (including day, month, year) from user input
// if yyyy%4===0 (=> if(dateA=28/02/yyyy)=>dateA-1=day-1/mm/yyyy; DateA+1=29/02/yyyy) else if(dateA=28/02/yyyy)=>dateA-1=day-1/mm/yyyy; DateA+1=01/03/yyyy
// if month =1 & day = 1 => DAteA-1=31/12/yyyy-1; DateA+1=day+1/mm/yyyy;
// if month =3,5,7,8,10 & day = 31 (=> DateA-1=day-1/mm/yyyy; Date+1= 01/mm+1/yyyy;)
// if month =4,6,9,11 & day = 30 (=> DateA-1=day-1/mm/yyyy; Date+1= 1/mm+1/yyyy;)
// if month =12 & day = 31 => DAteA-1=day-1/mm/yyyy-1; DateA+1=01/01/yyyy+1;
// =====================================
function dateChecker() {
  var day = document.getElementById("ex1-day").value * 1;
  var month = document.getElementById("ex1-month").value * 1;
  var year = document.getElementById("ex1-year").value * 1;
  var prevDay = day - 1;
  var prevMonth = month;
  var prevYear = year;
  var nextDay = day + 1;
  var nextMonth = month;
  var nextYear = year;
  var nextDate;
  var prevDate;
  if ((year % 4 === 0) & (day === 28) & (month === 2)) {
    prevDay = day - 1;
    prevMonth = month;
    prevYear = year;
    nextDay = day + 1;
    nextMonth = month;
    nextYear = year;
  } else if ((day === 28) & (month === 2) & (year % 4 !== 0)) {
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
    prevDay = day - 1;
    prevMonth = month;
    prevYear = year;
  }
  if ((year % 4 === 0) & (day === 29) & (month === 2)) {
    prevDay = day - 1;
    prevMonth = month;
    prevYear = year;
    nextDay = 1;
    nextMonth = month + 1;
    nextYear = year;
  }
  if ((day === 1) & (month === 1)) {
    (prevDay = 31), (prevMonth = 12), (prevYear = year - 1);
  }
  if (
    (month === 3 || month === 5 || month === 7 || month === 8 || month === 10) &
    (day === 31)
  ) {
    (nextDay = 1),
      (nextMonth = month + 1),
      (nextYear = year),
      (prevDay = day - 1),
      (prevMonth = month),
      (prevYear = year);
  }
  if (
    (month === 2 || month === 4 || month === 6 || month === 9 || month === 11) &
    (day === 1)
  ) {
    (prevDay = 31),
      (prevMonth = month - 1),
      (prevYear = year),
      (nextDay = day + 1),
      (nextMonth = month),
      (nextYear = year);
  }
  if (
    (month === 4 || month === 6 || month === 9 || month === 11) &
    (day === 30)
  ) {
    (nextDay = 1),
      (nextMonth = month + 1),
      (nextYear = year),
      (prevDay = day - 1),
      (prevMonth = month),
      (prevYear = year);
  }
  if (
    (month === 5 || month === 7 || month === 10 || month === 12) &
    (day === 1)
  ) {
    (prevDay = 30),
      (prevMonth = month - 1),
      (prevYear = year),
      (nextDay = day + 1),
      (nextMonth = month),
      (nextYear = year);
  }
  if ((month === 3) & (day === 1) & (year % 4 === 0)) {
    (prevDay = 29),
      (prevMonth = month - 1),
      (prevYear = year),
      (nextDay = day + 1),
      (nextMonth = month),
      (nextYear = year);
  } else if ((month === 3) & (day === 1) & (year % 4 !== 0)) {
    (prevDay = 28),
      (prevMonth = month - 1),
      (prevYear = year),
      (nextDay = day + 1),
      (nextMonth = month),
      (nextYear = year);
  }
  if ((month === 12) & (day === 31)) {
    nextDay = 1;
    nextMonth = 1;
    nextYear = year + 1;
    prevDay = day - 1;
    prevMonth = month;
    prevYear = year;
  }
  nextDate = nextDay + "/" + nextMonth + "/" + nextYear;
  prevDate = prevDay + "/" + prevMonth + "/" + prevYear;
  document.getElementById("ex1-prev-date").innerHTML = prevDate;
  document.getElementById("ex1-next-date").innerHTML = nextDate;
}

// 2. Viết chương trình nhập vào tháng, năm. Cho biết tháng đó có bao nhiêu ngày. (bao gồm tháng
// của năm nhuận).
// INPUT: Month; Year
// OUTPUT: Number of day in said month
// PROCESS:
// get Month and Year from user input
// Use Switch-case:
// - in case month === 1, 3, 5,7,8,10,12 ==> number of day === 31
// - in case month === 2 ==> (if yyyy%4===0 (=> if(month===2)=>number of day === 29;)) else {if(month===2){number of day === 28}} )
// - in case month === 4, 6, 9, 11 ==> number of day === 30
// =====================================
function numOfDayChecker() {
  var month = document.getElementById("ex2-month").value * 1;
  var year = document.getElementById("ex2-year").value * 1;
  var NOD;
  switch (month) {
    case 1:
      NOD = 31;
      break;
    case 2:
      if (year % 4 === 0) {
        NOD = 29;
      } else {
        NOD = 28;
      }
      break;
    case 3:
      NOD = 31;
      break;
    case 4:
      NOD = 30;
      break;
    case 5:
      NOD = 31;
      break;
    case 6:
      NOD = 30;
      break;
    case 7:
      NOD = 31;
      break;
    case 8:
      NOD = 31;
      break;
    case 9:
      NOD = 30;
      break;
    case 10:
      NOD = 31;
      break;
    case 11:
      NOD = 30;
      break;
    case 12:
      NOD = 31;
      break;
  }

  if (NOD == undefined) {
    document.getElementById("NOD-result").innerHTML =
      "Your input is invalid. Please double check the input";
  } else {
    document.getElementById("NOD-final-result").innerHTML = NOD;
    document.getElementById("NOD-result").style.visibility = "visible";
  }
}

// 3. Viết chương trình nhập vào số nguyên có 3 chữ số. In ra cách đọc nó
// INPUT: 3-digit-number
// OUTPUT: spelling
// PROCESS:
// get a 3 digit number from user input
// declare 7 variables:
// - firstDigit
// - secondDigit
// - thirdDigit
// - firstDigitSpell
// - secondDigitSpell
// - thirdDigitSpell
// - numberSpell
// number / 100 => firstDigit => firstDigitSpell: Một trăm, hai trăm, ba trăm, bốn trăm, năm trăm, sáu trăm, bảy trăm, tám trăm, chín trăm (switch-case)
// number % 100 => secondDigit => secondDigitSpell:
// = switch - case:
// - - if secondDigit === 0 => lẻ (linh)
// - - if secondDigit === 0 & third-digit === 0 => blank
// - - if secondDigit === 1 => mười
// - - if secondDigit === 2 => hai mươi
// - - if secondDigit === 3 => ba mươi
// - - if secondDigit === 4 => bốn mươi
// - - if secondDigit === 5 => năm mươi
// - - if secondDigit === 6 => sáu mươi
// - - if secondDigit === 7 => bảy mươi
// - - if secondDigit === 8 => tám mươi
// - - if secondDigit === 9 => chín mươi
// number % 10 => thirdDigit => thirdDigitSpell:
// = switch - case:
// - - if secondDigit !== 0 & thirdDigit === 0 => blank
// - - if secondDigit === 1 & thirdDigit === 1 => một
// - - if thirdDigit === 1 => mốt
// - - if thirdDigit === 2 => hai
// - - if thirdDigit === 3 => ba
// - - if thirdDigit === 4 => bốn (tư)
// - - if secondDigit === 0 & thirdDigit === 5 => năm
// - - if secondDigit !== 0 & thirdDigit === 5 => lăm
// - - if thirdDigit === 6 => sáu
// - - if thirdDigit === 7 => bảy
// - - if thirdDigit === 8 => tám
// - - if thirdDigit === 9 => chín
// =====================================
function numberSpelling() {
  var number = document.getElementById("ex3-number").value * 1;
  var firstDigit = Math.floor(number / 100);
  var secondDigit = Math.floor((number % 100) / 10);
  var thirdDigit = Math.floor(number % 10);
  var firstDigitSpell;
  var secondDigitSpell;
  var thirdDigitSpell;
  var numberSpell;
  switch (firstDigit) {
    case 1:
      firstDigitSpell = "Một trăm";
      break;
    case 2:
      firstDigitSpell = "Hai trăm";
      break;
    case 3:
      firstDigitSpell = "Ba trăm";
      break;
    case 4:
      firstDigitSpell = "Bốn trăm";
      break;
    case 5:
      firstDigitSpell = "Năm trăm";
      break;
    case 6:
      firstDigitSpell = "Sáu trăm";
      break;
    case 7:
      firstDigitSpell = "Bảy trăm";
      break;
    case 8:
      firstDigitSpell = "Tám trăm";
      break;
    case 9:
      firstDigitSpell = "Chín trăm";
      break;
  }

  switch (secondDigit) {
    case 0:
      if (thirdDigit === 0) {
        secondDigitSpell = "";
      } else {
        secondDigitSpell = "lẻ (linh)";
      }
      break;
    case 1:
      secondDigitSpell = "mười";
      break;
    case 2:
      secondDigitSpell = "hai mươi";
      break;
    case 3:
      secondDigitSpell = "ba mươi";
      break;
    case 4:
      secondDigitSpell = "bốn mươi";
      break;
    case 5:
      secondDigitSpell = "năm mươi";
      break;
    case 6:
      secondDigitSpell = "sáu mươi";
      break;
    case 7:
      secondDigitSpell = "bảy mươi";
      break;
    case 8:
      secondDigitSpell = "tám mươi";
      break;
    case 9:
      secondDigitSpell = "chín mươi";
      break;
  }

  switch (thirdDigit) {
    case 0:
      thirdDigitSpell = "";
      break;
    case 1:
      if (secondDigit === 1) {
        thirdDigitSpell = "một";
      } else {
        thirdDigitSpell = "mốt";
      }
      break;
    case 2:
      thirdDigitSpell = "hai";
      break;
    case 3:
      thirdDigitSpell = "ba";
      break;
    case 4:
      thirdDigitSpell = "bốn (tư)";
      break;
    case 5:
      if (secondDigit === 0) {
        thirdDigitSpell = "năm";
      } else {
        thirdDigitSpell = "lăm";
      }
      break;
    case 6:
      thirdDigitSpell = "sáu";
      break;
    case 7:
      thirdDigitSpell = "bảy";
      break;
    case 8:
      thirdDigitSpell = "tám";
      break;
    case 9:
      thirdDigitSpell = "chín";
      break;
  }

  numberSpell =
    firstDigitSpell + " " + secondDigitSpell + " " + thirdDigitSpell;
  if (number < 100 || number > 999) {
    document.getElementById(
      "three-digit-number-spelling-final-result"
    ).innerHTML = "Your number is invalid";
  } else {
    document.getElementById(
      "three-digit-number-spelling-final-result"
    ).innerHTML = numberSpell;
  }
}

// 4. Cho biết tên và tọa độ nhà của 3 sinh viên. Cho biết tọa độ của trường đại học. Viết chương
// trình in tên sinh viên xa trường nhất.
// INPUT: coordinations (X and Y) and name of 3 students; Coordination of the University (X and Y)
// OUTPUT: Who is living farthest from the university.
// PROCESS:
// Get X and Y and Name of each students and the X and Y of the university via user input.
// declare 16 variables:
// - firstStudentName
// - secondStudentName
// - thirdStudentName
// - firstStudentX
// - firstStudentY
// - secondStudentX
// - secondStudentY
// - thirdStudentX
// - thirdStudentY
// - uniX
// - uniY
// - distanceOfFirstStudent
// - distanceOfSecondStudent
// - distanceOfThirdStudent
// - distanceMax
// - farthestPerson
// distanceOfFirstStudent= Math.pow(if(Math.pow(uniX-firstStudentX)>=0){Math.pow(uniX-firstStudentX)}else{-(Math.pow(uniX-firstStudentX))}+if(Math.pow(uniY-firstStudentY)>=0){Math.pow(uniY-firstStudentY)}else{-(Math.pow(uniY-firstStudentY))},1/2)
// Same goes to distanceOfSecondStudent, distanceOfThirdStudent
// distanceMax=distanceOfFirstStudent;
// farthestPerson=firstStudentName
// if(distanceMax > distanceOfSecondStudent){distanceMax=distanceOfSecondStudent,farthestPerson=secondStudentName}
// if(distanceMax > distanceOfThirdStudent){distanceMax=distanceOfThirdStudent, farthestPerson=thirdStudentName}
// print out farthestPerson and distanceMax
// =====================================
function distanceChecker() {
  var firstStudentName = document.getElementById("firstStudentName").value;
  var secondStudentName = document.getElementById("secondStudentName").value;
  var thirdStudentName = document.getElementById("thirdStudentName").value;
  var firstStudentX = document.getElementById("firstStudentX").value * 1;
  var firstStudentY = document.getElementById("firstStudentY").value * 1;
  var secondStudentX = document.getElementById("secondStudentX").value * 1;
  var secondStudentY = document.getElementById("secondStudentY").value * 1;
  var thirdStudentX = document.getElementById("thirdStudentX").value * 1;
  var thirdStudentY = document.getElementById("thirdStudentY").value * 1;
  var uniX = document.getElementById("uniX").value * 1;
  var uniY = document.getElementById("uniY").value * 1;
  var distanceXOfFirstStudent = uniX - firstStudentX;
  var distanceYOfFirstStudent = uniY - firstStudentY;
  var distanceXOfSecondStudent = uniX - secondStudentX;
  var distanceYOfSecondStudent = uniY - secondStudentY;
  var distanceXOfThirdStudent = uniX - thirdStudentX;
  var distanceYOfThirdStudent = uniY - thirdStudentY;
  var distanceOfFirstStudent;
  var distanceOfSecondStudent;
  var distanceOfThirdStudent;
  var distanceMax;
  var farthestPerson;

  if (distanceXOfFirstStudent < 0) {
    distanceXOfFirstStudent = -distanceXOfFirstStudent;
  }
  if (distanceYOfFirstStudent < 0) {
    distanceYOfFirstStudent = -distanceYOfFirstStudent;
  }
  if (distanceXOfSecondStudent < 0) {
    distanceXOfSecondStudent = -distanceXOfSecondStudent;
  }
  if (distanceYOfSecondStudent < 0) {
    distanceYOfSecondStudent = -distanceYOfSecondStudent;
  }
  if (distanceXOfThirdStudent < 0) {
    distanceXOfThirdStudent = -distanceXOfThirdStudent;
  }
  if (distanceYOfThirdStudent < 0) {
    distanceYOfThirdStudent = -distanceYOfThirdStudent;
  }

  distanceOfFirstStudent = Math.pow(
    Math.pow(distanceXOfFirstStudent, 2) + Math.pow(distanceYOfFirstStudent, 2),
    1 / 2
  );
  distanceOfSecondStudent = Math.pow(
    Math.pow(distanceXOfSecondStudent, 2) +
      Math.pow(distanceYOfSecondStudent, 2),
    1 / 2
  );
  distanceOfThirdStudent = Math.pow(
    Math.pow(distanceXOfThirdStudent, 2) + Math.pow(distanceYOfThirdStudent, 2),
    1 / 2
  );

  distanceMax = distanceOfFirstStudent;
  farthestPerson = firstStudentName;
  if (distanceMax < distanceOfSecondStudent) {
    (distanceMax = distanceOfSecondStudent),
      (farthestPerson = secondStudentName);
  }
  if (distanceMax < distanceOfThirdStudent) {
    (distanceMax = distanceOfThirdStudent), (farthestPerson = thirdStudentName);
  }

  if (distanceOfFirstStudent === distanceOfSecondStudent) {
    farthestPerson = firstStudentName + " and " + secondStudentName;
  }
  if (distanceOfFirstStudent === distanceOfThirdStudent) {
    farthestPerson = firstStudentName + " and " + thirdStudentName;
  }
  if (distanceOfSecondStudent === distanceOfThirdStudent) {
    farthestPerson = secondStudentName + " and " + thirdStudentName;
  }
  document.getElementById("farthestLivingStudentName").innerHTML =
    farthestPerson;
  document.getElementById("distanceMax1").innerHTML = distanceMax;
  document.getElementById("distanceMax2").innerHTML = distanceMax;
  if (
    (distanceOfSecondStudent === distanceOfThirdStudent) &
    (distanceOfFirstStudent === distanceOfThirdStudent)
  ) {
    (document.getElementById("same-distance").style.visibility = "visible"),
      (document.getElementById("distanceCheck-result").style.visibility =
        "hidden");
  } else {
    (document.getElementById("same-distance").style.visibility = "hidden"),
      (document.getElementById("distanceCheck-result").style.visibility =
        "visible");
  }
  console.log(
    distanceOfFirstStudent,
    distanceOfSecondStudent,
    distanceOfThirdStudent
  );
}
