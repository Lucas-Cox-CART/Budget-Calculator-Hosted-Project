function search_job() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('job');
    // while (input == 0) {
    //     x[i].style.display="none";
    // }
    // let listAvailable = document.getElementsByClassName('job');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        } else if 
        else {
            x[i].style.display="list-item";                 
        }
    }
}

var GrossIncome = 46200;
if (typeof GrossIncome == 'number') {
    var GrossMonthly = GrossIncome / 12;
    var HousingAffordability = GrossMonthly  * 0.33;
} else {
    console.log("Error! Please input number into field.");
}

var FederalTaxes = GrossMonthly * 0.12;
var StateTaxes = GrossMonthly * 0.07;
var SocialSecurity = GrossMonthly * 0.062;
var Medicare = GrossMonthly * 0.0145;
var StateDisability = GrossMonthly * 0.01;
var RetirementInvestment = GrossMonthly * 0.05;
var MedicalInsurance = 180;
var TotalDeductions = GrossMonthly - MedicalInsurance;
var NetMonthly = GrossMonthly - TotalDeductions;
var CurrentBalance = NetMonthly;
console.log(HousingAffordability);

var TransactionDescription = "Kraft Mac";
if (typeof TransactionDescription == 'string') {
    if (TransactionDescription.length < 32) {
        var TransactionType = "+";
        var TransactionAmount = 1000;
        if (typeof (TransactionAmount) == "number") {
                    //CurrentBalance = +/- TransactionAmount
                    //Output CurrentBalance
                    //Last Item in List?
                    //Yes, End
                    //No, Repeat
                    // document.getElementById("CurrentBalance").innerHTML = (levemealon);
        } else {
            console.log("Error! Please enter number into field.")
        }
    } else {
        console.log("Error! Too many characters.")
    }
} else {
    console.log("Error! Please enter non-numerical characters into field.")
}