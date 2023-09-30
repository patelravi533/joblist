var bookmarks = JSON.parse(localStorage.getItem("bookmarksJob")) || []
disply(bookmarks)
document.querySelector("#sort").addEventListener('change', handleSort)
document.querySelector('#sortBySalary').addEventListener('change', sortBySalary)
document.querySelector('#filter').addEventListener('change', filterByRole)
function handleSort() {
    var selected = document.querySelector('#sort').value

    if (selected == "asc") {
        bookmarks.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        })

    }
    if (selected == "dsc") {
        bookmarks.sort(function (a, b) {
            if (a.name > b.name) return -1;
            if (a.name < b.name) return 1;
            return 0;
        })
    }
    disply(bookmarks)

}
function sortBySalary() {
    var selected = document.querySelector("#sortBySalary").value
    if (selected == "htl") {
        bookmarks.sort(function (a, b) {
            return b.salary - a.salary
        })
    }
    if (selected == "lth") {
        bookmarks.sort(function (a, b) {
            return a.salary - b.salary
        })
    }
    disply(bookmarks)
}
function filterByRole() {
    var selected = document.querySelector('#filter').value

    var filterList = bookmarks.filter(function (ele) {
        return ele.role == selected
    })

    disply(filterList)
}
function disply(bookmarks) {
    document.querySelector('tbody').innerHTML = ''
    bookmarks.map(function (ele) {
        var tr = document.createElement('tr')

        var td1 = document.createElement('td')
        td1.innerText = ele.name
        var td2 = document.createElement('td')
        td2.innerText = ele.email
        var td3 = document.createElement('td')
        td3.innerText = ele.role
        var td4 = document.createElement('td')
        td4.innerText = ele.salary

        tr.append(td1, td2, td4, td3)
        document.querySelector('tbody').append(tr)

    })
}