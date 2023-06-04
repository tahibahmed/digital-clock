// const names={
//     size:1,
//     age:26,
//     name: "tahib",
//     blog:["ab","abc","cd"]
// }
// console.log(names.blog[0,2])

const hours = document.querySelector("#hour");
const minutes =document.querySelector("#mintues")
const seconds = document.querySelector("#seconds")
const Ampm = document.querySelector("#ampm")


function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampmm = "AM" 
    if(h > 12 ){
        h = h - 12
        ampmm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hours.innerText = h;
    minutes.innerText= m;
    seconds.innerText =s;
    Ampm,(innerText = ampmm);
    setTimeout(()=>{
        updateClock();
    },100)

}

updateClock();