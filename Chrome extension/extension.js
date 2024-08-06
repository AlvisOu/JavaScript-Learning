let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") );
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

inputBtn.addEventListener("click", function() { //cleaner look and function separation
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads) );
    render(myLeads);
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0]["url"]);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    }) 
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; i++){
        listItems += `<li>
            <a target='_blank' href ='${leads[i]}'> 
                ${leads[i]} 
            </a>
        </li>`;

        //ulEl.innerHTML += "<li>" + leads[i] + "</li>"; //edit HTML from JS
        //Alternative:
        //const li = document.createElement("li");
        //li.textContext = leads[i];
        //ulEl.append(li);
    }
    ulEl.innerHTML = listItems;
}


