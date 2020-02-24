let rows = parseInt(prompt("Please enter desired number of rows (1-10): "))
let columns = parseInt(prompt("Please enter desired number of columns (1-10): "))

for (r = 1; r <= rows; r++) { 
   for (c = 1; c <= columns; c++) {     
     document.write("*");
}
document.writeln("<br />");
}