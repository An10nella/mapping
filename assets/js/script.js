

const addBtnEl = document.getElementById('addBtn')
const userListEl = document.getElementById('userList')
const liEl = document.createElement('li')
const addToListEl = document.getElementById('addToList')
document.title ='list'

let username =[]
// console.log(username )

// username.push('admin04')
// username.push('admin05')
// console.log(username)

//erase last one
// username.pop() 
// console.log(username)

// username.shift()//erase first one
// add on first
// console.log(username)
// username.unshift('admin00') 

addBtnEl.addEventListener('click', function(){
    username = []
    let newInput = addToListEl.value
    username.push(newInput)

    for(let i in username){
        userListEl.innerHTML += `<li style="margin-left:20px">${username[i]} </li>`

    }
    addToListEl.value=''
    //addToList.appendChild() --> add list wara ba3d
    
})