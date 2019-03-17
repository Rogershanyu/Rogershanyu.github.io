var aDiv = document.getElementById("body").children;
for (i = 0; i < aDiv.length; i++) {
	aDiv[i].index = i;
};
var oFirst = document.getElementById("first");
var oSecond = document.getElementById("second");
var oThird = document.getElementById("third");
var oFourth = document.getElementById("fourth");
var oProgress = document.getElementById("progress");
var oLoading = document.getElementById("loading");
var oNext1 = document.getElementById("next-1");
var oNext2 = document.getElementById("next-2");
var oFourthJob = document.getElementById("fourth-job");
var oSBZ = document.getElementById("sbz");
var oXS = document.getElementById("xs");
var oXZ = document.getElementById("xz");
console.log(oFourthJob.classList);
var iProgress = 0;
var sLoading = "..";
function fnProgress() {
	if (iProgress < 100) {
		iProgress += 4;
		oProgress.innerText = iProgress + "%";
		if (sLoading == "...") {
			sLoading = ".";
		} else {
			sLoading += ".";
		}
		oLoading.innerText = sLoading;
	} else {
		clearInterval(oInterval);
		aDiv[0].style.display = "none";
		aDiv[1].style.display = "block";
		
	}
};
var oInterval = setInterval(function() {fnProgress()}, 300);
oNext1.onclick = function(){
	aDiv[1].style.display = "none";
	aDiv[2].style.display = "block";
};
oNext2.onclick = function(){
	aDiv[2].style.display = "none";
	aDiv[3].style.display = "block";
};
oFourthJob.onclick = function(){
	var c = oFourthJob.className;
	console.log(c);
	oFourthJob.classList.remove(c);
	oFourthJob.classList.add("fourth-select");
	oSBZ.classList.add("sbz");
	oXS.classList.add("xs");
	oXZ.classList.add("xz");
};
oSBZ.onclick = function(){
	oFourthJob.classList.remove("fourth-select");
	oFourthJob.classList.add("fourth-job-sbz");
	oSBZ.classList.remove("sbz");
	oXS.classList.remove("xs");
	oXZ.classList.remove("xz");
};
oXS.onclick = function(){
	oFourthJob.classList.remove("fourth-select");
	oFourthJob.classList.add("fourth-job-xs");
	oSBZ.classList.remove("sbz");
	oXS.classList.remove("xs");
	oXZ.classList.remove("xz");
};
oXZ.onclick = function(){
	oFourthJob.classList.remove("fourth-select");
	oFourthJob.classList.add("fourth-job");
	oSBZ.classList.remove("sbz");
	oXS.classList.remove("xs");
	oXZ.classList.remove("xz");
};


