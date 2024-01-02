const nama = "Alan Nofrialdi"
let usia = 18;
let biodata = document.getElementById('generasi');
console.log(generasi)

function generateBiodata () {
    let gen;

    if (usia > 15 && usia <=20) {
        gen = "tos dulu buat Gen Z";
    }
    else if (usia >20 && usia <=30) {
        gen = "Millenials"
    }
    else if (usia >30) {
        gen = "Baby Boomer"
    }
    else {
        gen = "Gen Alpha"
    }
    return generasi.innerHTML = gen
}

console.log (nama);
console.log (usia);

generateBiodata()