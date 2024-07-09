function buttonClick(event) {
    let myText = document.getElementById('txet');
    let msg = document.getElementById('msg');
    let regex = /^[ぁ-んァ-ヶー]+$/;

    if (regex.test(myText.value)) {
        msg.textContent = myText.value;
        window.location.href = 'fontselect/index.html';
    } else {
        msg.textContent = "ひらがな、カタカナのみ五文字以内です";
        event.preventDefault();  // Prevent the default action (e.g., form submission)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    let checkButton = document.getElementById('checkButton');
    checkButton.addEventListener('click', buttonClick);
});