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


let AI = document.getElementById('grossinput');
let AD = document.getAnimations('AreaDecoration');
AI.addEventListener("change", (e) => calcs());
function calcs(){
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
    let NM = (GM - TD);
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
}

/* Variable = ID of HTML Element , then addEventListener to notice when HTML Element has changed , 
which then calls on a function that contains your calculations.
*/