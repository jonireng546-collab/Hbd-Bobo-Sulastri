const anak = [
{
nama:"Ervin",
foto:"anak1.jpg",
surat:"Happy birthday mamaku tersayang, Ervin sayang mama ❤️ semoga mama masih cantik, sehat, panjang umur, dan selalu bahagia ❤️"
},
{
nama:"Erlin",
foto:"anak2.jpg",
surat:"🍬🎉🍰Happy birthady mama tersayang ❤️❤️ panjang umur ...sehat selalu ...selalu di berkati ❤️❤️❤️😘"
},
{
nama:"Fang-Fang",
foto:"anak3.jpg",
surat:"Happy Birthday buat Mama merangkap Nenek Super!🎉\n\nRumah jadi rame karena Mama, hati anak anak jadi anget karena pelukan Mama.\n\nSemoga tahun ini penuh kado, ketawa dan kue ultah sepotong lagi.... Sepotong lagi....\n\nWe love you to the moon, Ma! ❤️"
},
{
nama:"Novita Sari",
foto:"anak4.jpg",
surat:"Selamat ultah bobo semoga panjang umur , sehat selalu .. terima kasih sudah jadi orang tua sekaligus nenek terbaik buat kita.. love you bobo ❤️"
},
{
nama:"Mike",
foto:"anak5.jpg",
surat:"Semoga semua doa terbaik untuk Bobo dikabulkan ❤️"
}
];

const cucu = [
{
nama:"Marcellino",
foto:"cucu1.jpg",
surat:"Happy Birthday, Bobo! Semoga tahun ini penuh kebahagiaan, rezeki, dan semoga bisa makan enak dan kalorinya pura-pura tidak ada🎂."
},
{
nama:"Radit",
foto:"cucu2.jpg",
surat:"Selamat Ulangtahun bo🥳\n\nsemoga panjang umur, sehat selalu, doa yang bobo panjatkan semoga segera di kabulkan 🎂🎁"
},
{
nama:"Reva",
foto:"cucu3.jpg",
surat:"✨Happy Birthday Bobo✨\n\nSemoga panjang umur, sehat selalu, rezekinya makin deres, dan bahagia selalu.🥳🥳🥳🥳"
},
{
nama:"Aurel",
foto:"cucu4.jpg",
surat:"Happy Birthday buat Bobo!🎉\n\nRumah jadi rame karena Bobo, hati anak anak jadi anget karena pelukan Bobo.\n\nSemoga tahun ini penuh kado, ketawa dan kue ultah sepotong lagi.... Sepotong lagi....\n\nWe love you to the moon, Bo! ❤️"
},
{
nama:"Michael",
foto:"cucu5.jpg",
surat:"Happy Birthday buat Bobo!🎉\n\nRumah jadi rame karena Bobo, hati anak anak jadi anget karena pelukan Bobo.\n\nSemoga tahun ini penuh kado, ketawa dan kue ultah sepotong lagi.... Sepotong lagi....\n\nWe love you to the moon, Bo! ❤️"
},
{
nama:"Michelle",
foto:"cucu6.jpg",
surat:"Happy Birthday buat Bobo!🎉\n\nRumah jadi rame karena Bobo, hati anak anak jadi anget karena pelukan Bobo.\n\nSemoga tahun ini penuh kado, ketawa dan kue ultah sepotong lagi.... Sepotong lagi....\n\nWe love you to the moon, Bo! ❤️"
}
];

function bukaKategori(kategori){

const data = kategori === "anak" ? anak : cucu;

document.getElementById("judulKategori").innerText =
kategori === "anak"
? "Surat dari Anak-Anakmu ❤️"
: "Surat dari Cucu-Cucumu ❤️";

let html = "";

data.forEach((orang,index)=>{

html += `
<div class="person" onclick="bukaSurat('${kategori}',${index})">

<img src="${orang.foto}">

<h3>${orang.nama}</h3>

</div>
`;

});

document.getElementById("isiKategori").innerHTML = html;

document.getElementById("kategoriPopup").style.display =
"flex";
}

function tutupKategori(){
document.getElementById("kategoriPopup").style.display =
"none";
}

function bukaSurat(kategori,index){

const data = kategori === "anak" ? anak : cucu;

document.getElementById("suratFoto").src =
data[index].foto;

document.getElementById("suratNama").innerText =
data[index].nama;

document.getElementById("suratIsi").innerText =
data[index].surat;

document.getElementById("suratPopup").style.display =
"flex";
}

function tutupSurat(){
document.getElementById("suratPopup").style.display =
"none";
}

window.onload = function () {
    const music = document.getElementById("bgm");

    music.play().catch(error => {
        console.log("Autoplay diblokir browser");
    });
};

function mulaiWebsite(){

document.getElementById("bgm").play();

document.getElementById("welcome-screen").style.display =
"none";

confetti({
particleCount:150,
spread:120,
origin:{y:0.6}
});

}