
const searchInput=document.getElementById("search")
const results=document.getElementById("results")

function debounce(fn, delay){
    let timer;

    return function(...args){
        clearTimeout(timer)

        timer=setTimeout(()=>{
            fn.apply(this, args)
        }, delay)
    }
}

async function fetchUsers(query){
    if(!query){
        results.innerHTML=""
        return;
    }

    const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data=res.json()

    const filtered=data.filter(user=>user.name.toLowercase().includes(query.toLowercase()))
}