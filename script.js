document.getElementById("afternoon-btn").onclick = function () {
  // hide morning content
  document.getElementById("morning-content").style.display = "none";
  // show afternoon content
  document.getElementById("afternoon-content").style.display = "block";
  // set shift times
  groups.times = ["2:00 PM", "4:00 PM", "6:00 PM", "7:30 PM", "8:30 PM"];
};

document.getElementById("morning-btn").onclick = function () {
  // hide afternoon content
  document.getElementById("afternoon-content").style.display = "none";
  // show morning content
  document.getElementById("morning-content").style.display = "block";
  // set shift times
  groups.times = ["7:00 AM", "9:00 AM", "11:00 AM", "12:30 PM", "2:00 PM"];
};

var names = [
  { name: "الجدي", option: "afternoon-departure" },
  { name: "عبدالله محمد", option: "afternoon-departure" },
  { name: "المختار", option: "afternoon-departure" },
  { name: "الفقعان", option: "afternoon-departure" },
  { name: "يوسف نجم", option: "afternoon-departure" },
  { name: "العبدالرزاق خلف", option: "afternoon-departure" },
  { name: "احمد الصفار", option: "afternoon-departure" },
  { name: "سالم كمال", option: "afternoon-departure" },
  { name: "عمر جحيل", option: "afternoon-departure" },
  { name: "يعقوب الكندري", option: "morning-departure" },
  { name: "علي الفيلكاوي", option: "morning-departure" },
  { name: "بدر ظاهر", option: "morning-departure" },
  { name: "عبدالله غلوم", option: "morning-departure" },
  { name: "حمد العتيبي", option: "morning-departure" },
  { name: "سعود راشد", option: "morning-departure" },
  { name: "الحميدي العجمي", option: "morning-departure" },
  { name: "داوود البصيري", option: "morning-departure" },
  { name: "جلوي مانع", option: "morning-departure" },
  { name: "عبدالرحمن الجحيل", option: "afternoon-transit" },
  { name: "ابو الملح", option: "afternoon-transit" },
  { name: "الكريديس", option: "afternoon-transit" },
  { name: "جاسم البلوشي", option: "afternoon-transit" },
  { name: "المهنا", option: "morning-transit" },
  { name: "خالد العتيبي", option: "morning-transit" },
  { name: "طلال الديحاني", option: "morning-transit" },
  { name: "العمران", option: "morning-transit" },
];

document.getElementById("departure-btn").onclick = function () {
  displayNames("afternoon-departure");
};
document.getElementById("transit-btn").onclick = function () {
  displayNames("afternoon-transit");
};
document.getElementById("option1-btn").onclick = function () {
  displayNames("morning-departure");
};
document.getElementById("option2-btn").onclick = function () {
  displayNames("morning-transit");
};

function displayNames(option) {
  var filteredNames = names.filter(function (name) {
    return name.option === option;
  });
  var namesList = "";
  filteredNames.forEach(function (name) {
    namesList += "<p class='name-box'>" + name.name + "</p>";
  });
  document.getElementById("group-title").classList.remove("hidden");
  document.getElementById("names-container").innerHTML = namesList;
  var nameBoxes = document.getElementsByClassName("name-box");
  for (var i = 0; i < nameBoxes.length; i++) {
    nameBoxes[i].onclick = function () {
      this.classList.toggle("selected");
    };
  }
}

var nameBoxes = document.getElementsByClassName("name-box");
for (var i = 0; i < nameBoxes.length; i++) {
  nameBoxes[i].onclick = function () {
    this.classList.toggle("selected");
  };
}

var groups = {
  groupA: [],
  groupB: [],
  times: [],
};

document.getElementById("submit-group-a").onclick = function () {
  var selectedNames = document.querySelectorAll(".selected");
  for (var i = 0; i < selectedNames.length; i++) {
    groups.groupA.push(selectedNames[i].innerHTML);
    selectedNames[i].classList.add("disabled");
    selectedNames[i].classList.remove("selected");
  }
  selectedNames = [];
};

document.getElementById("submit-group-b").onclick = function () {
  var selectedNames = document.querySelectorAll(".selected");
  for (var i = 0; i < selectedNames.length; i++) {
    groups.groupB.push(selectedNames[i].innerHTML);
    selectedNames[i].classList.add("disabled");
    selectedNames[i].classList.remove("selected");
  }
  selectedNames = [];
};

document.getElementById("submit-groups").onclick = function () {
  var tbodyRef = document
    .getElementById("schedule-table")
    .getElementsByTagName("tbody")[0];
  var groupANames = ""; // a string with all the names in the group A
  var groupBNames = ""; // a string with all the names in the group B
  var groupATimes = [
    groups.times[0] +
      " to " +
      groups.times[1] +
      " / " +
      groups.times[2] +
      " to " +
      groups.times[3],
  ]; // an arry with two times
  var groupBTimes = [
    groups.times[1] +
      " to " +
      groups.times[2] +
      " / " +
      groups.times[3] +
      " to " +
      groups.times[4],
  ]; // an arry with two times

  // make a string for groupANames
  for (var i = 0; i < groups.groupA.length; i++) {
    var name = groups.groupA[i];
    if (i != groups.groupA.length - 1) {
      groupANames += name + " - ";
    } else {
      groupANames += name;
    }
  }

  // make a string for groupBNames
  for (var i = 0; i < groups.groupB.length; i++) {
    var name = groups.groupB[i];
    if (i != groups.groupB.length - 1) {
      groupBNames += name + " - ";
    } else {
      groupBNames += name;
    }
  }

  // create rows and cells
  for (var i = 0; i < 2; i++) {
    if (i == 0 || i == 2) {
      // Insert a row at the end of table
      var newRow = tbodyRef.insertRow();

      // Insert a cell at the end of the row
      var groupCell = newRow.insertCell();
      var workTimesCell = newRow.insertCell();
      var namesCell = newRow.insertCell();

      //add data
      namesCell.innerHTML = groupANames;
      workTimesCell.innerHTML = groupATimes;
      groupCell.innerHTML = "Group A";
    } else {
      // Insert a row at the end of table
      var newRow = tbodyRef.insertRow();

      // Insert a cell at the end of the row
      var groupCell = newRow.insertCell();
      var workTimesCell = newRow.insertCell();
      var namesCell = newRow.insertCell();

      //add data
      namesCell.innerHTML = groupBNames;
      workTimesCell.innerHTML = groupBTimes;
      groupCell.innerHTML = "Group B";
    }
  }
};
