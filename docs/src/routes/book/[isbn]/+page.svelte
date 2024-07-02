<script>
    export let data;
    const url = `https://gist.githubusercontent.com/sugi2000/759d53facd2d9888eb64336c44ec0107/raw/02e6c200281ae30aea52fc0c97c78e6d4e425930/book.json`;

  let book = {};

  fetch(url)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      book = json.Items.find(item => item.isbn === data.isbn);
    })
    .catch(err => console.error(err));
</script>

<svelte:head>
  <title>{book.title}</title>
</svelte:head>

<div class="book-container">
    <a href="{book.itemUrl}" target="_blank">
      <div class="book">
        <h2>{book.title}</h2>
          <img src={book.largeImageUrl} alt={book.title} />
        <p>{book.author}</p>
        <p>{book.publisherName}</p>
        <p>{book.itemPrice}円</p>
      </div>
    </a>
  </div>