// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".
let a = +prompt("Son kirting:");
let math = Math.round(a);
console.log(math);
if (a > 0) {
  console.log(Boolean(a));
} else if (a < 0) {
  console.log(false + " Bu son musbot emas.");
}
// Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".
let a2 = +prompt("Son kirting:");
let math2 = Math.round(a2);
console.log(math2);
if (math2 % 2 === 0) {
  console.log("BU son false chunki juft son.");
} else {
  console.log("Bu son true chunki toq son.");
}
// Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".
let son1 = +prompt("Son kirting:");
let son2 = +prompt("Son kirting:");
if (son1 > 2 && son2 <= 3) {
  console.log(true);
} else {
  console.log(
    false + " Chunki birinchi son 2 dan kichikina yoki 2 son 3 dan katta.",
  );
}
// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"
let num1 = +prompt("Son kirting:");
let num2 = +prompt("Son kirting:");
let num3 = +prompt("Son kirting:");
if (num1 <= num2 && num2 <= num3) {
  console.log(true);
} else {
  console.log(false);
}
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".
let number = +prompt("A:");
let number2 = +prompt("B:");

if (number % 2 === number2 % 2) {
  console.log(true);
} else {
  console.log(false);
}
// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".
let A = +prompt("Son kirting:");
let B = +prompt("Son kirting:");
let C = +prompt("Son kirting:");
if (A > 0 || B > 0 || C > 0) {
  console.log(true + " Chunki bitta son musbat.");
} else {
  console.log(false + " Chunki hamma son manfiy.");
}
// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: вЂњUshbu sonning barcha raqamlari har xil".
let A1 = +prompt("Son kirting:");
let B1 = +prompt("Son kirting:");
let C1 = +prompt("Son kirting:");
if (A1 !== B1 && A1 !== C1 && B1 !== C1) {
  console.log(true + "Hamma qiymatlar har xil.");
} else {
  console.log(false + "Qiymatlar ichida bir xilli bor.");
}
// Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
let A2 = +prompt("Son kirting:");
let B2 = +prompt("Son kirting:");
let C2 = +prompt("Son kirting:");
if (A == B || A == C || B == C) {
  console.log(true + " Bir-biriga teng sonlar bor.");
} else {
  console.log(false + " Hech qaysi son bir-birga teng emas.");
}
// Boolean9. Shaxmat doskasining ikkita turli (x1, y1), (x2, y2) koordinalari berilgan (1-8 oraliqda yotuvchi butun sonlar). Jumlani rostlikka tekshiring: "Farzin bir yurishda bir maydondan ikkinchisiga o'ta oladi".

// UYGA VAZIFA

// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft sonвЂќ.
let son = +prompt("Son kirting:");
let yaxlit = Math.round(son);
console.log(yaxlit);
if (yaxlit % 2 === 0) {
  console.log("BU son true chunki juft son.");
} else {
  console.log("Bu son false chunki toq son.");
}
// Boolean2. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring:
// "A >= 0 yoki B <-2"
let A3 = +prompt("Son kirting:");
let B3 = +prompt("Son kirting:");
if (A3 >= 0 || son2 < -2) {
  console.log(true);
} else {
  console.log(false);
}
// Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".
let A4 = +prompt("A sonini kiriting:");
let B4 = +prompt("B sonini kiriting:");
let C4 = +prompt("C sonini kiriting:");

// B soni A dan katta VA C dan kichik bo'lishi kerak
if (B4 > A4 && B4 < C4) {
  console.log(true + " 2 son soni 1 son va 2 soning orasida.");
} else {
  console.log(false + " 2 soni 1 son va 2 soning orasida emas.");
}
// Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
let numb = +prompt("Son kirting:");
let numb2 = +prompt("Son kirting:");
let nummath = Math.round(numb);
let nummath2 = Math.round(numb2);
if (nummath % 2 !== 0 && nummath2 % 2 !== 0) {
  console.log("true chunki hamma son toq son.");
} else {
  console.log("false chunki sonlar ichida juft son bor.");
}
// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son".
let num5 = +prompt("Son kirting:");
let num6 = +prompt("Son kirting:");
let nummath5 = Math.round(num5);
let nummath6 = Math.round(num6);
if (nummath5 % 2 !== 0 || nummath6 % 2 !== 0) {
  console.log("true chunki sonlar ichida toq son bor.");
} else {
  console.log("false chunki sonlar ichida juft son bor.");
}
// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".
let sonn = +prompt("A sonini kiriting:");
let sonn2 = +prompt("B sonini kiriting:");

let numA = Math.round(sonn);
let numB = Math.round(sonn2);
if ((numA % 2 !== 0) !== (numB % 2 !== 0)) {
  console.log(true + " - Faqat bittasi toq son.");
} else {
  console.log(false + " Ikkalasi ham toq yoki ikkalasi ham juft.");
}
// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".
let son7 = +prompt("Son kirting:");
let son7b = +prompt("Son kirting:");
let son7c = +prompt("Son kirting:");
if (son7 > 0 && son7b > 0 && son7c > 0) {
  console.log(true + " Chunki sonlar musbat");
} else {
  console.log(false + " Bu sonlar ichida manfiy bor.");
}
// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".
let A8 = +prompt("A sonini kiriting:");
let B8 = +prompt("B sonini kiriting:");
let C8 = +prompt("C sonini kiriting:");
if (
  (A8 > 0 && B8 <= 0 && C8 <= 0) ||
  (B8 > 0 && A8 <= 0 && C8 <= 0) ||
  (C8 > 0 && A8 <= 0 && B8 <= 0)
) {
  console.log(true + " Chunki ichida bitta musbat son bor.");
} else {
  console.log(false + "Musbat sonlar bittadan ko'p yoki umuman yo'q.");
}
// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".
let A9 = +prompt("A sonini kiriting:");
let B9 = +prompt("B sonini kiriting:");
let C9 = +prompt("C sonini kiriting:");

if (
  (A9 > 0 && B9 > 0 && C9 <= 0) ||
  (A9 > 0 && C9 > 0 && B9 <= 0) ||
  (B9 > 0 && C9 > 0 && A9 <= 0)
) {
  console.log(true + " Faqat ikkita musbat son bor.");
} else {
  console.log(false + " Ikkitadan ko'p, kam yoki umuman musbat yo'q.");
}
// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".
let ikki = +prompt("Sonni kiriting:");
let numbe = Math.round(ikki);
if (numbe >= 10 && numbe <= 99 && numbe % 2 === 0) {
  console.log(true + " Bu ikki xonali juft son.");
} else {
  console.log(false);
}
// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".
let uch = +prompt("Sonni kiriting:");
let num = Math.round(uch);
if (num >= 100 && num <= 999 && num % 2 !== 0) {
  console.log(true + " Bu uch xonali toq son.");
} else {
  console.log(false);
}
// Boolean12. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda bir jufti o'zaro qarama-qarshi".
let q = +prompt("A sonini kiriting:");
let qb = +prompt("B sonini kiriting:");
let qc = +prompt("C sonini kiriting:");

// Shart: A+B=0 YOKI A+C=0 YOKI B+C=0
if (q + qb === 0 || q + qc === 0 || qb + qc === 0) {
  console.log(true + " Qarama-qarshi juftlik bor.");
} else {
  console.log(false + " - Bunday juftlik yo'q.");
}
// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: вЂњUshbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".

// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".

// // Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".
