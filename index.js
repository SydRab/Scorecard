let home = document.getElementById("home-points")
let away = document.getElementById("away-points")
let hpoints = 0
let apoints = 0

function hbj1() {
    hpoints += 1
    home.textContent = hpoints
}

function hbj2() {
    hpoints += 2
    home.textContent = hpoints
}

function hbj3() {
    hpoints += 3
    home.textContent = hpoints
}

function abj1() {
    apoints += 1
    away.textContent = apoints
}

function abj2() {
    apoints += 2
    away.textContent = apoints    
}

function abj3() {
    apoints += 3
    away.textContent = apoints    
}

function reset() {
    hpoints = 0
    home.textContent = 0
    apoints = 0
    away.textContent = 0
}