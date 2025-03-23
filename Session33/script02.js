function checkCharCount() {
    let input = document.getElementById(`input`)
    let count = input.value.length
    document.getElementById(`count`).innerText=count+ ` ký tự`
}