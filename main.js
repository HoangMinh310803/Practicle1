// console.log (greeting); 
// var greeting = "say hello";
// bai 1 abc la 3 canh tam giac
// viet ra dien tich tam giac
// function tinhDienTichTamGiac(a, b, c) {
//     // Sử dụng công thức Heron để tính diện tích tam giác
//     // Bước 1: Tính nửa chu vi của tam giác
//     var p = (a + b + c) / 2;
//     // Bước 2: Tính diện tích tam giác sử dụng công thức Heron
//     var dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));
//     return dienTich;
// }
// function tinhDienTich(){
//     var a = parseFloat(prompt("Nhập độ dài cạnh a:"));
//     var b = parseFloat(prompt("Nhập độ dài cạnh b:"));
//     var c = parseFloat(prompt("Nhập độ dài cạnh c:"));

//     // Kiểm tra tính hợp lệ của các cạnh
//     if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
//         alert("Ba cạnh không hợp lệ! Vui lòng nhập lại.");
//         return;
//         var dienTich = tinhDienTichTamGiac(a, b, c);

//         // Hiển thị kết quả
//         console.log("Diện tích tam giác là: " + dienTich.toFixed(2));
//  }
// }
// toan tu
// var a  = 2;
// a **= a;
// console.log(a);

// on tap
// let username;
// username = window.prompt(`May ten gi`);
// console.log(username);
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("text").value;
    console.log(username);
}