let a=[];
console.log(a==true) //false vì bên trong chuỗi không có ký tự nào
console.log(a===true)//false vì khác kiểu dữ liệu
        
let b=[1];
onsole.log(b==true)//true vì bên trong chuỗi có ký tự 
console.log(b===true)//false vì khác kiểu dữ liệu

let c="";
console.log(a==c)//true vì bên trong không có ký tự nào hết
console.log(a===c)//false vì khác kiểu dữ liệu

let d= 4214.5125;
console.log(a==d)//false vì d là kiểu số thập phân và a là chuỗi rỗng
console.log(a===d)//false vì khác kiểu dữ liệuliệu

let a1=[3,5];
let b1=[3,5];
console.log(toString(a1)==toString(b1))
console.log(toString(a1)===toString(b1))



