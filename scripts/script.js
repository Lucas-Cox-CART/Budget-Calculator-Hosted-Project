const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'Computer Technician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Blectrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'Lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nuse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]

let list = document.getElementById("list");
for (job of data) {
    let item = document.createElement("div");
    item.innerText = job[0];
    item.setAttribute("class","job");
    list.appendChild(item);
}

function search_job() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('job');
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="flex";
        }
    }
    if (input=="") {
        for(item of x){
            item.style.display="none";
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
                    // CurrentBalance = +/- TransactionAmount
                    // Output CurrentBalance
                    // Last Item in List?
                    // Yes, End
                    // No, Repeat
                    document.getElementById("CurrentBalance").innerHTML = (levemealon);
        } else {
            console.log("Error! Please enter number into field.")
        }
    } else {
        console.log("Error! Too many characters.")
    }
} else {
    console.log("Error! Please enter non-numerical characters into field.")
}