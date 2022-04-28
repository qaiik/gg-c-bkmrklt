let amot = parseInt(prompt("Delay between tabs, the lower, the better pc goguardian is running on. 1 = nasa supercomputer, 700 = school chromebook"))
let amt = parseInt(prompt("Amount of tabs per cycle, higher = better pc, school chromebook = 10, gaming pc = 200"))
alert("To stop, press CTRL + Tab Number (1,2,3,4) + W")

let iint = setInterval(()=>{
  Array(amt).fill(1).forEach(()=>{
    window.open("//gg-crash.ikpar3.repl.co/fpnocramming.html")
  })
}, amot)

