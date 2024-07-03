///TODO: Fix function attempt below
The code below produces a 5 x 10 box of question marks. Convert the code into a function called drawBox() that has three parameters:
	1. numRows - The number of rows for the box.
	2. numCols - The number of columns for the box.
	3. boxChar - The character to use to create the box. If no argument is supplied, use "X".
Ex: drawBox(5, 4, "!") and drawBox(2, 6) should display the boxes pictured below.

!!!!
!!!!
!!!!
!!!!
!!!!
XXXXXX
XXXXXX
///Attempt1
function drawBox (numRows, numCols, boxChar) {
   console.log("!" * numCols);
   console.log("X" * numCols);
}

///Attempt2
function drawBox (numRows, numCols, boxChar) {
   for (let numRows = 0; numRows < 5; numRows++) {
   let box = "";
   let boxChar = "X";
   for (let numCols = 0; numCols < 10; numCols++) {
      box += "?";
   }
   console.log(box);
   }
}
