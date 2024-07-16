// Retrieve the value from local storage
const receivedMsg = localStorage.getItem('msg');
const contentDiv = document.getElementById('text');

function createElementForCharacter(char) {
    switch(char) {
        case 'あ':
            return '<div class="hiraa"><img src="font/hiraa.svg"/></div>';
        case 'い':
            return '<div class="hirai"><img src="font/hirai1.svg" class="image"/><img src="font/hirai2.svg" class="image"/></div>';
        case 'う':
            return '<div class="hirau"><img src="font/hirau1.svg" class="image"/><img src="font/hirau2.svg" class="image"/></div>';
        case 'え':
            return '<div class="hirae"><img src="font/hirae1.svg" class="image"/><img src="font/hirae2.svg" class="image"/></div>';
        case 'お':
            return '<div class="hirao"><img src="font/hirao1.svg" class="image"/><img src="font/hirao2.svg" class="image"/></div>';
        case 'か':
            return '<div class="hiraka"><img src="font/hiraka1.svg" class="image"/><img src="font/hiraka2.svg" class="image"/></div>';
        case 'き':
            return '<div class="hiraki"><img src="font/hiraki.svg"/></div>';
        case 'く':
            return '<div class="hiraku"><img src="font/hiraku.svg"/></div>';
        case 'け':
            return '<div class="hirake"><img src="font/hirake1.svg" class="image"/><img src="font/hirake2.svg" class="image"/></div>';
        case 'こ':
            return '<div class="hirako"><img src="font/hirako1.svg" class="image"/><img src="font/hirako2.svg" class="image"/></div>';
        case 'さ':
            return '<div class="hirasa"><img src="font/hirasa.svg"/></div>';
        case 'し':
            return '<div class="hirasi"><img src="font/hirasi.svg"/></div>';
        case 'す':
            return '<div class="hirasu"><img src="font/hirasu.svg"/></div>';
        case 'せ':
            return '<div class="hirase"><img src="font/hirase.svg"/></div>';
        case 'そ':
            return '<div class="hiraso"><img src="font/hiraso.svg"/></div>';
        case 'た':
            return '<div class="hirata"><img src="font/hirata1.svg" class="image"/><img src="font/hirata2.svg" class="image"/><img src="font/hirata3.svg" class="image"/></div>';
        case 'ち':
            return '<div class="hirati"><img src="font/hirati.svg"/></div>';
        case 'つ':
            return '<div class="hiratu"><img src="font/hiratu.svg"/></div>';
        case 'て':
            return '<div class="hirate"><img src="font/hirate.svg"/></div>';
        case 'と':
            return '<div class="hirato"><img src="font/hirato.svg"/></div>';
        case 'な':
            return '<div class="hirana"><img src="font/hirana1.svg" class="image"/><img src="font/hirana2.svg" class="image"/></div>';
        case 'に':
            return '<div class="hirani"><img src="font/hirani1.svg" class="image"/><img src="font/hirani2.svg" class="image"/><img src="font/hirani3.svg" class="image"/></div>';
        case 'ぬ':
            return '<div class="hiranu"><img src="font/hiranu.svg"/></div>';
        case 'ね':
            return '<div class="hirane"><img src="font/hirane.svg"/></div>';
        case 'の':
            return '<div class="hirano"><img src="font/hirano.svg"/></div>';
        case 'は':
            return '<div class="hiraha"><img src="font/hiraha1.svg" class="image"/><img src="font/hiraha2.svg" class="image"/></div>';
        case 'ひ':
            return '<div class="hirahi"><img src="font/hirahi.svg"/></div>';
        case 'ふ':
            return '<div class="hirahu"><img src="font/hirahu.svg"/></div>';
        case 'へ':
            return '<div class="hirahe"><img src="font/hirahe.svg"/></div>';
        case 'ほ':
            return '<div class="hiraho"><img src="font/hiraho1.svg" class="image"/><img src="font/hiraho2.svg" class="image"/></div>';
        case 'ま':
            return '<div class="hirama"><img src="font/hirama.svg"/></div>';
        case 'み':
            return '<div class="hirami"><img src="font/hirami.svg"/></div>';
        case 'む':
            return '<div class="hiramu"><img src="font/hiramu.svg"/></div>';
        case 'め':
            return '<div class="hirame"><img src="font/hirame.svg"/></div>';
        case 'も':
            return '<div class="hiramo"><img src="font/hiramo.svg"/></div>';
        case 'や':
            return '<div class="hiraya"><img src="font/hiraya.svg"/></div>';
        case 'ゆ':
            return '<div class="hirayu"><img src="font/hirayu.svg"/></div>';
        case 'よ':
            return '<div class="hirayo"><img src="font/hirayo.svg"/></div>';
        case 'ら':
            return '<div class="hirara"><img src="font/hirara1.svg" class="image"/><img src="font/hirara2.svg" class="image"/></div>';
        case 'り':
            return '<div class="hirari"><img src="font/hirari.svg"/></div>';
        case 'る':
            return '<div class="hiraru"><img src="font/hiraru.svg"/></div>';
        case 'れ':
            return '<div class="hirare"><img src="font/hirare.svg"/></div>';
        case 'ろ':
            return '<div class="hiraro"><img src="font/hiraro.svg"/></div>';
        case 'わ':
            return '<div class="hirawa"><img src="font/hirawa.svg"/></div>';
        case 'を':
            return '<div class="hirawo"><img src="font/hirawo.svg"/></div>';
        case 'ん':
            return '<div class="hiran"><img src="font/hirann.svg"/></div>';
        default:
            return '';
    }
}

if (receivedMsg) {
    for (let i = 0; i < receivedMsg.length; i++) {
        const char = receivedMsg[i];
        contentDiv.innerHTML += createElementForCharacter(char);
    }
}