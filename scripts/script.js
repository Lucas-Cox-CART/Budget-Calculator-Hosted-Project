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
let item;
for (job of data) {
    let item = document.createElement("div");
    item.innerText = job[0];
    item.setAttribute('data-salary', job[1]);
    item.setAttribute("class","job");
    list.appendChild(item);
    list.addEventListener('click', (event) => {
        document.getElementById('grossinput').value = event.target.getAttribute('data-salary');
    });
}

function search_job() {
    let input = document.getElementById('searchbar').value;
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

let NM;
let AI = document.getElementById('grossinput');
let AD = document.getAnimations('AreaDecoration');
AI.addEventListener("change", (e) => calcs());

function calcs() {
    let FTI = document.getElementById('FTI').value / 100;
    let STI = document.getElementById('STI').value / 100;
    let SSI = document.getElementById('SSI').value / 100;
    let MCI = document.getElementById('MCI').value / 100;
    let SDI = document.getElementById('SDI').value / 100;
    let RII = document.getElementById('RII').value / 100;
    let GM = (AI.value / 12);
    let MII = document.getElementById('MII').value / GM;
    let TDI = ((FTI + STI + SSI + MCI + SDI + RII + MII) * 100).toFixed(2);
    document.getElementById('TDI').value = TDI + "%";
    let FT = (GM * FTI);
    let ST = (GM * STI);
    let SS = (GM * SSI);
    let MC = (GM * MCI);
    let SD = (GM * SDI);
    let RI = (GM * RII);
    let MI = (GM * MII);
    let TD = (FT + ST + SS + MC + SD + RI + MI);
    NM = (GM - TD);
    let HA = (GM * 0.33);
    document.getElementById('GM').value = "$" + (GM.toFixed(2));
    document.getElementById('FT').value = "$" + (FT.toFixed(2));
    document.getElementById('ST').value = "$" + (ST.toFixed(2));
    document.getElementById('SS').value = "$" + (SS.toFixed(2));
    document.getElementById('MC').value = "$" + (MC.toFixed(2));
    document.getElementById('SD').value = "$" + (SD.toFixed(2));
    document.getElementById('RI').value = "$" + (RI.toFixed(2));
    document.getElementById('MI').value = "$" + (MI.toFixed(2));
    document.getElementById('TD').value = "$" + (TD.toFixed(2));
    document.getElementById('NM').value = "$" + (NM.toFixed(2));
    document.getElementById('HA').value = "$" + (HA.toFixed(2));
}

let CBIH;
let LT = document.getElementById('LogTrigger');
let AH = document.getElementById('actionHistory');
LT.addEventListener('click', (e) => checkBookFunc());

function checkBookFunc() {
    let CBIH = document.createElement("div");
    CBIH.setAttribute("class", "checkBookItemHandler");
    AH.appendChild(CBIH);
    let form1 = document.createElement("form");
    form1.setAttribute("class", "checkBookItem");
    let form2 = document.createElement("form");
    form2.setAttribute("class", "checkBookItem");
    let form3 = document.createElement("form");
    form3.setAttribute("class", "checkBookItem");
    let form4 = document.createElement("form");
    form4.setAttribute("class", "checkBookItem");
    
    CBIH.appendChild(form1);
    CBIH.appendChild(form2);
    CBIH.appendChild(form3);
    CBIH.appendChild(form4);

    let AD = document.createElement("input");
    AD.setAttribute("type", "text");
    AD.value = document.getElementById('ActionDetails').value;
    form1.appendChild(AD);

    if (AD.value == "") {
        AD.value = "NaN";
    }

    let TT = document.createElement("input");
    TT.setAttribute("type", "text");
    TT.setAttribute("disabled", "");
    TT.value = document.getElementById('selectType').value;
    form2.appendChild(TT);

    let ADV = document.createElement("input");
    ADV.setAttribute("type", "number");
    ADV.value = document.getElementById('ADValue').value;
    form3.appendChild(ADV);
    if (ADV.value == "") {
        ADV.value = "NaN";
    }

    let BR = document.createElement("input");
    BR.setAttribute("type", "number");
    BR.setAttribute("disabled", "");
    if (TT.value == "Payment") {
        BR.value = parseFloat(document.getElementById('BRemain').value) + parseFloat(ADV.value);
    } else if (TT.value == "Withdrawl") {
        BR.value = parseFloat(document.getElementById('BRemain').value) - parseFloat(ADV.value);
    } else {
        document.getElementById('BRemain').value = "Error!";
    }
    document.getElementById('BRemain').value = BR.value;
    form4.appendChild(BR);
    if (BR.value == "") {
        BR.value = "NaN";
    }

    let RT = document.getElementById('ResetTrigger');
    RT.addEventListener('click', (e) => resetValues()); 
    function resetValues() {
        document.getElementById('BRemain').value = 0;
        document.getElementById('ADValue').value = 0;
        document.getElementById('selectType').value = "Payment";
        document.getElementById('ActionDetails').value = "";
        document.getElementById("actionHistory").innerHTML= `<div><p>Transaction History</p></div>`;
    }
}