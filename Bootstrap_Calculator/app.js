function addValue(value) {
    var input = document.getElementById("input")
    input.value += value
}
function calc() {
    var input = document.getElementById("input")
    var ans = eval(input.value)
    input.value = ans
}
function clearInput() {
    document.getElementById('input').value = " "
}
function delOne() {
    var input = document.getElementById("input")
    input.value = input.value.slice(0, -1)
}
