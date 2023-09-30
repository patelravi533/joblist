var appliedJob  = JSON.parse(localStorage.getItem('appliedJob'))||[]

display(appliedJob)
var bookmarks = JSON.parse(localStorage.getItem("bookmarksJob"))||[]

document.querySelector('#sort').addEventListener('change',handleSort)
document.querySelector('#filter').addEventListener('change',handleSalarySort)
document.querySelector('#filterRole').addEventListener('change',handleFilter)

function handleSort(){
    var selected = document.querySelector("#sort").value
    
    if(selected=="asc"){
    appliedJob.sort(function(a,b){
        if(a.name>b.name) return 1;
        if(a.name<b.name) return-1;
        return 0;
    })
    display(appliedJob)
    }
    if(selected=='dsc')
    {
        appliedJob.sort(function(a,b){
            if(a.name>b.name) return -1;
            if(a.name<b.name) return 1;
            return 0;
        })
    display(appliedJob)
    }
    
    
}
function handleSalarySort(){
    var sort = document.querySelector('#filter').value
    if(sort == 'lth'){
        appliedJob.sort(function(a,b){
            return a.salary-b.salary
        })
        display(appliedJob)
    }
    if(sort == 'htl'){
        appliedJob.sort(function(a,b){
            return b.salary-a.salary
            
        })
        display(appliedJob)
    }  
}
function handleFilter(){
    var selected = document.querySelector('#filterRole').value
    
        var filterdList = appliedJob.filter(function(ele){
            return ele.role==selected
        })
        // console.log(ele.role)
        display(filterdList)
    
}
 function display(appliedJob){
     document.querySelector('tbody').innerHTML=""
     appliedJob.map(function(ele){

    var tr = document.createElement('tr')

    var td1 = document.createElement('td')
    td1.innerText = ele.name

    var td2 = document.createElement('td')
    td2.innerText = ele.email

    var td3 = document.createElement('td')
    td3.innerText = ele.role

    var td4 = document.createElement('td')
    td4.innerText="Bookmarks"
    td4.style.color='blue'
    td4.style.cursor='pointer'
    
    td4.addEventListener('click',function(){
        addToBookmark(ele)  
    })
    var td5 = document.createElement('td')
        td5.innerText=ele.salary

    tr.append(td1,td2,td3,td5,td4)
    document.querySelector('tbody').append(tr)
})
}
function addToBookmark(ele){
    bookmarks.push(ele)
    localStorage.setItem('bookmarksJob',JSON.stringify(bookmarks))
}