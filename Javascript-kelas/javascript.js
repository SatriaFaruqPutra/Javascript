// alert("Belajar Javacript"); gawe nampilno pop up

// let a=2;
// let b=3;
// let c=a+b;
// console.log(c);

// 3+2*4/2*3*3+2-5
// let a=2;
// let b=3;
// let c=4;
// let d=5;
// let e=(b+(((a*c)/a)*(b*b))+a-d);
// let f=b+a*c/a*b*b+a-d;
// console.log(f)

// let x=6;
// let y=5;
// if (x>y) {
//     console.log("Benar")
// } else {
//     console.log("Salah")
// }

// let Nilai=10;
// let KKM=80;
// if (Nilai>KKM) {
//     console.log("LULUS")
// } else {
//     console.log("GAGAL")
// }

let bulan=4;
let tanggal=10;
let zodiak="belum diketahui";
if (bulan==1) {
    if (tanggal > 0 && tanggal < 20){
      zodiak="aquarius";
    } 
    if (tanggal > 19 && tanggal < 32){
        zodiak="cappricon";
    }
} else if (bulan==2) {
    if (tanggal > 0 && tanggal < 20){
        zodiak="cappricon";
    }
    if (tanggal > 19 && tanggal < 32){
        zodiak="taurus";
    }
} else if (bulan==3) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="taurus";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="pisces";
    }
} else if (bulan==4) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="pisces";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="libra";
    }
} else if (bulan==5) {
    if (tanggal > 0 && tanggal < 20 ) {
        zodiak="libra";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="gemini";
    }
} else if (bulan==6) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="gemini";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="cancer";
    }
} else if (bulan==7) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="cancer";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="leo";
    }
} else if (bulan==8) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="leo";
    }
    if (tanggal > 19 && tanggal < 20) {
        zodiak="sagitarius";
    }
} else if (bulan==9) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="sagitarius";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="virgo";
    }
} else if (bulan==10) {
    if (tanggal > 0 && tanggal < 20 ) {
        zodiak="virgo";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="scorpio";
    }
} else if (bulan==11) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak="scorpio";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="aries";
    }
} else if (bulan==12){
    if (tanggal > 0 && tanggal < 20) {
        zodiak="aries";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak="aquarius";
    }
} else {
    zodiak="Error";
}
console.log(zodiak);