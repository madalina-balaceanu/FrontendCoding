var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '90123456789',
        salary: 657570
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '60123876789',
        salary: 9000
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '01293836789',
        salary: 45000
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '50148576789',
        salary: 1500
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '01294858789',
        salary: 1000
    }
];

var mapFirstName=[];
var mapLastName=[];
var mapNumbers=[];


function showList() {
    var myTable = '<table class="table table-bordered"" border="1"><tr><th>First Name</th><th>Last Name</th>' +
        '<th>Phone</th><th>Salary</th><th>Show</th><th>Delete</th></tr>';
    for(var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+
        employeesList[i].salary+'</td><td><button type="button" onclick="showEmployee('+i+')">Show</button></td>' +
         '<td><button type="button" onclick="deleteEmployee('+i+')">Delete</button></td></tr>';
    }
   // myTable+="<tr><td>"+uniqLastName()+"</td></tr>";
    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}


function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseFloat(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    showList();
}


function sumSalary(){
    var sum=0;
    for(var i in employeesList)
        sum+=employeesList[i].salary;
    document.getElementById("totalSum").value = sum;
    return sum;
}

function showEmployee(employeeIndex){
    alert("First Name: "+employeesList[employeeIndex].firstName+"\n"+
        "Last Name: "+ employeesList[employeeIndex].lastName+"\n"+
        "Salary: "+ employeesList[employeeIndex].salary+"\n"+
        "Phone : "+employeesList[employeeIndex].phone);
}

function deleteEmployee(employeeIndex){
    employeesList.splice(employeeIndex,1);
    showList();
}
function removeLastEmployees(){
    employeesList.pop();
    showList();
}

var NamesFrecv = function (name) {
    this.name = name;
    this.frecvent = 1;
}




function sortListEmployees () {
    var sortType = parseFloat(document.getElementById("sort").value);
    if(sortType  < 5 && sortType > 0)
    switch (sortType){
        case 1:{
            bubbleSortFirstName();
            showList();
            break;
        }
        case 2:{
            bubbleSortLastName()
            showList();
            break;
        }
        case 3:{
            bubbleSortPhone();
            showList();
            break;
        }
        default :{
            bubbleSortSalary();
            showList();
        }
    }
}

function bubbleSortPhone()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < employeesList.length-1; i++) {
            if (employeesList[i].phone > employeesList[i+1].phone) {
                var temp = employeesList[i];
                employeesList[i] = employeesList[i+1];
                employeesList[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function bubbleSortSalary()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < employeesList.length-1; i++) {
            if (employeesList[i].salary > employeesList[i+1].salary) {
                var temp = employeesList[i];
                employeesList[i] = employeesList[i+1];
                employeesList[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function bubbleSortFirstName()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < employeesList.length-1; i++) {
            if (employeesList[i].firstName.localeCompare(employeesList[i+1].firstName) > 0) {
                var temp = employeesList[i];
                employeesList[i] = employeesList[i+1];
                employeesList[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

}

function bubbleSortLastName()
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < employeesList.length-1; i++) {
            if (employeesList[i].lastName.localeCompare(employeesList[i+1].lastName) > 0) {
                var temp = employeesList[i];
                employeesList[i] = employeesList[i+1];
                employeesList[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

}


function showListSearch() {
    var myTable = '<table class="table table-bordered"" border="1"><tr><th>First Name</th><th>Last Name</th>' +
        '<th>Phone</th><th>Salary</th><th>Show</th><th>Delete</th></tr>';
    var searchWord = document.getElementById('search').value;
    for(var i in employeesList) {
        if(searchListEmployees(i,searchWord)) {
            myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>' + employeesList[i].phone + '</td><td>' +
                employeesList[i].salary + '</td><td><button type="button" onclick="showEmployee(' + i + ')">Show</button></td>' +
                '<td><button type="button" onclick="deleteEmployee(' + i + ')">Delete</button></td></tr>';
        }
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}


function searchListEmployees(index,wordShearch){
   if( employeesList[index].firstName.indexOf(wordShearch) > -1)
       return true;
   else if( employeesList[index].lastName.indexOf(wordShearch) > -1)
        return true;
   else if (employeesList[index].phone.toString().indexOf(wordShearch) > -1)
        return true;
   else if (employeesList[index].salary.toString().indexOf(wordShearch) > -1)
        return true;
   else return false;
}