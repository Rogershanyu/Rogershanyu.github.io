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
var oFbutton = document.getElementById("fbutton");
var oFifth = document.getElementById("fifth");
var aRow = document.getElementsByClassName("row");
var oText = document.getElementById("text");
var oScreen = document.getElementById("screen");
var oDeng = document.getElementById("deng");
var oWdbg = document.getElementById("wdbg");
var oTanc = document.getElementById("tanc");
var oFs = document.getElementById("fs");
var oJg = document.getElementById("jg");
var iProgress = 0;
var sLoading = "..";
var oThis;
var nr;
var n = 0;
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
oFbutton.onclick = function(){
	if(oFourthJob.className=="fourth-job-sbz"){
		aRow[2].children[0].innerText = "素食";
		aRow[2].children[1].innerText = "米粉";
		aRow[2].children[2].innerText = "煎饼";
	}
	oFourth.style.display = "none";
	oFifth.style.display = "block";
}
// function(){
// 	this.classList.add("col-xz");
// }
for(i=0;i<aRow.length;i++){
	for(j=0;j<aRow[i].children.length-1;j++){
		if(i<2){
			aRow[i].children[j].index = 100;
		}else{
			aRow[i].children[j].index = 50;
		}
		aRow[i].children[j].onclick = function(){
			if(oThis){
				oThis.classList.remove("col-xz");
				if(oThis.index==100){
					n -=100;
				}else{
					n -=50;
				}
			}
			oThis = this;
			this.classList.add("col-xz");
			oText.style.display = "none";
			// console.log(this.index);
			if(nr){
				if(this.index==100){
					oScreen.innerText = nr + "100";
					n += 100;
				}else{
					oScreen.innerText = nr + "50";
					n += 50;
				}
			}else{
				if(this.index==100){
					oScreen.innerText = "100";
					n += 100;
				}else{
					oScreen.innerText = "50";
					n += 50;
				}
			}
		}
	}
}
var oAC = document.getElementById("AC");
oAC.onclick = function fnAC(){
	nr = "";
	n = 0;
	oThis = "";
	var aclass = document.getElementsByClassName("col-xz");
	console.log(aclass[1]);
	for(i=0;i<aclass.length;i++){
		aclass[i].classList.remove("col-xz")
	}
	oText.style.display = "block";
	oScreen.innerText = "开始计算";
}
var oJia = document.getElementById("jia");
oJia.onclick = function(){
	nr = oScreen.innerText + " + "
	oThis = "";
	oScreen.innerText = nr;
}
oDeng.onclick = function(){
	if(n!=0){
		var aclass = document.getElementsByClassName("col-xz");
		for(i=0;i<aclass.length;i++){
			aclass[i].classList.remove("col-xz")
		}
		oScreen.innerText = oScreen.innerText + " = " + n;
		oWdbg.style.display = "block";
		oFs.innerText = n+ " 分" ;
		if(n<200){
			oTanc.className = "tancc";
			oJg.innerText = "差";
		}else if(n<250){
			oTanc.className = "tancl";
			oJg.innerText = "良";
		}else{
			oTanc.className = "tancy";
			oJg.innerText = "优";
		}
		oTanc.style.display = "block";
	}
}
oTanc.onclick = function(){
	this.style.display = "none";
	oWdbg.style.display = "none";
	nr = "";
	n = 0;
	oThis = "";
	var aclass = document.getElementsByClassName("col-xz");
	for(i=0;i<aclass.length;i++){
		aclass[i].classList.remove("col-xz")
	}
	oText.style.display = "block";
	oScreen.innerText = "开始计算";
}