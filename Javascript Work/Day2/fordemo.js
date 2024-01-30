let students = [
    {"id" : "1", "name" : "Prash", "Gender": "M"},
    {"id" : "2", "name" : "Onkar", "Gender": "M"},
    {"id" : "3", "name" : "Preeti", "Gender": "F"},
    {"id" : "4", "name" : "Alia", "Gender": "F"}
]

for (let item of students ){
    if(item.Gender =="F"){
        console.log(item.name)
    }
    else
    console.log('The male names are ' + item.name)
}