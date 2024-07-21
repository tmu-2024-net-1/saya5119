function buttonClick(event) {
    let myText = document.getElementById('txet');
    let msg = document.getElementById('msg');
    let regex = /^[ぁ-んー]{1,5}$/;

    if (regex.test(myText.value) && myText.value.length <= 5) {
        localStorage.setItem('msg', myText.value);
        window.location.href = 'fontselect/index.html';
    } else {
        msg.textContent = "ひらがなのみ、五文字以内です";
        myText.classList.add('invalid');
        event.preventDefault();  // Prevent the default action (e.g., form submission)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', buttonClick);

    document.getElementById('txet').addEventListener('input', function() {
        let input = this;
        let regex = /^[ぁ-んー]{1,5}$/;
        if (input.value.length > 5 || !regex.test(input.value)) {
            input.classList.add('invalid');
        } else {
            input.classList.remove('invalid');
        }
    });
});