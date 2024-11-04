// 1
let names = ["Ali", "Ayten", "Mehemmed"];

names.push("Aytac");
console.log(names);
names.pop();
console.log(names);
//2
let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    },{
        name: "Nicat",
        surname: "Aliyev",
        age:26,
        driving: false
    },{
        name: "Ayxan",
        surname: "Aliyev",
        age:15,
        driving: true
    },{
        name: "Nihad",
        surname: "Aliyev",
        age:19,
        driving: true
  }
]

//3
function stringN(arr) {
    arr.forEach(person => {
        if (person.name.startsWith("N")) {
            console.log(person);
        }
    });
}

function ageN(arr) {
    arr.forEach(person => {
        if (person.age > 20 && person.age < 26) {
            console.log(person);
        }
    });
}

function drive(arr) {
    arr.forEach(person => {
        if (person.age % 2 === 0 && person.driving) {
            console.log(person);
        }
    });
}
console.log("Adı 'N' ile başlayanlar:" );
stringN(obj);

console.log("Yaşı 20'den boyuk ve 26'dan kiçik olanlar:");
ageN(obj);

console.log("Yaşı cut ve suruculuk vesiqesi olanlar:");
drive(obj);

//4
let tersObj = obj.reverse();
console.log(tersObj);