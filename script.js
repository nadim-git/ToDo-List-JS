display()
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn")

addtaskbtn.addEventListener("click", function () {
    //store value in variable
    addtaskinputval = addtaskinput.value;

    // if textbox value is not equal to blank 
    if (addtaskinputval != 0) {
    // check data exist or not in loalstorage 
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskobject = []
    } else {
        taskobject = JSON.parse(webtask)
        }
        // push value in localstorage
        taskobject.push(addtaskinputval);
        // setitem in localstorage
        localStorage.setItem("localtask", JSON.stringify(taskobject))
        // display all task function called
        addtaskinput.value = '';
        display()
}

})

function display() {
    let webtask = localStorage.getItem("localtask");
    taskobject = JSON.parse(webtask)
    // console.log(taskobject)
    let addedtasklist = document.getElementById("addedtasklist");
    let html = " ";
    if(taskobject != null){
    taskobject.forEach((item,index) => {
            
            // console.log(index);
        html += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${item}</td>
        <td><button type="buttton" onclick="edittask(${index})"
        class="btn btn-primary" style="border-radius: 50px;"><i class="fa fa-edit"></i>
        </button></td>
        <td><button type="buttton" onclick="dltitem(${index})"
        class="btn btn-danger" style="border-radius: 50px;"><i class="fa fa-close" ></i>
        </button></td>
        </td>
    
    </tr>`;
    })

    addedtasklist.innerHTML = html;
    // }
}
}



// Delete perticular task
function dltitem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskobject = JSON.parse(webtask)
    // Perticular one item remove in array using splice Method
    // in splice second parameter define how many value we want remove at once
    taskobject.splice(index, 1);
    // console.log(taskobject);
    localStorage.setItem("localtask", JSON.stringify(taskobject));
    
    display()

}

// edit perticular task in table

function edittask(index) {
    // passing hidden values
    let saveindex = document.getElementById("saveindex")
    // Define Both Buttons
    let addtaskbtn = document.getElementById("addtaskbtn");
    let updatebtn = document.getElementById("updatebtn");

    // store data index value in hidden input(saveindex)
    saveindex.value = index;


    let webtask = localStorage.getItem("localtask");
    let taskobject = JSON.parse(webtask);
    addtaskinput.value = taskobject[index];
    // display update button and hide add task button
    addtaskbtn.style.display = "none";
    updatebtn.style.display = "block";
}

// define Update Buttton
let updatebtn = document.getElementById("updatebtn");
updatebtn.addEventListener("click", function () {
    // getting value for localstorage
    let webtask = localStorage.getItem("localtask");
    let taskobject = JSON.parse(webtask);
    // define hidden index and get value.
    let saveindex = document.getElementById("saveindex").value;
    // store in localstorage
    taskobject[saveindex] = addtaskinput.value;
    localStorage.setItem("localtask", JSON.stringify(taskobject));
    addtaskbtn.style.display = "block";
    updatebtn.style.display = "none";
    addtaskinput.value = "";
    display()

})
// delete all 
let dltall = document.getElementById("dltall");
dltall.addEventListener("click", function () {
    localStorage.clear()
    // taskobject = []
    addedtasklist.innerHTML = "";

    // display()
})




