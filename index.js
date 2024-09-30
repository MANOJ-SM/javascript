
// chaining of map , filter and reduce 

// print total marks of the students with the marks gretrer then 60 , after 20 marks have been added to those who scored less then 60 

// marks < 60  -add 20 
// print total marks students marks > 60

const students = [
     {
        "fname":"manu",
        "marks" : 75,
     },
     {
        "fname":"manu",
        "marks" : 85,
     },
     {
        "fname":"manu",
        "marks" : 25,
     },
     {
        "fname":"manu",
        "marks" : 45,
     }
]

const newMarks = students.map( student => {
    if(student.marks < 60){
        student.marks = student.marks + 20;
    }
    // return student.marks
      const newMarks = student;
      return newMarks;  
    
});

console.log(newMarks);

const totalMarks = newMarks.filter( student => student.marks > 60 )
         
console.log(totalMarks);


