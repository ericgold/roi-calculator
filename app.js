var calcButton = document.getElementById("calculate");
var output = document.getElementById("output");
var rateBox = document.getElementById("rate-box");
var rate = document.getElementById("rate");

(function(exports) {

	var plan = document.getElementById("plan").value;
	var leads = document.getElementById("leads").value;
	var rate = document.getElementById("rate").value;
	var ratePercent = rate/100;
	var transAmt = document.getElementById("trans-amt").value;

	function displayOutput(amount) {
		output.innerText = "$" + amount;
		return output.innerText;
	}

	function calculateROI() {
		var roi = (leads*ratePercent)*transAmt;
		roi = roi - plan;
		roi = parseFloat(Math.round(roi * 100) / 100).toFixed(2);
		displayOutput(roi);
	}

	exports.showRate = function() {
		rate = document.getElementById("rate").value;
		rateBox.innerText = rate + "%";
	}

	exports.updateValues = function() {
		plan = document.getElementById("plan").value;
		leads = document.getElementById("leads").value;
		rate = document.getElementById("rate").value;
		ratePercent = rate/100;
		transAmt = document.getElementById("trans-amt").value;

		calculateROI();
	}

}(typeof window === 'undefined' || window === null ? global.roiCalc = {} : window.roiCalc = {}))

calcButton.addEventListener("click", roiCalc.updateValues);
rate.addEventListener("mousemove", roiCalc.showRate);

