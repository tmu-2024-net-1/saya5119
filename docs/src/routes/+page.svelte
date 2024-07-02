
<script>

</script>

<svelte:head>
  <title>オノマトペツール</title>
</svelte:head>

<div class="nyuryoku">
    <p>生成したい文字を入力してください</p>
    <input type="text" id="txet" maxlength="5" pattern="^[ぁ-んァ-ヶー]+$" placeholder="ひらがな、カタカナのみ五文字以内です"/>
</div>

<p id="msg"></p>


<style>
	p{
		text-align: center;
	}
    input{
        width: 30%;
        margin: 0 auto;
        padding: 0.5em;
        font-size: medium;
    }
    input:invalid {
	background-color: lightpink;
    }
    .nyuryoku{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 60vh;
    }
</style>