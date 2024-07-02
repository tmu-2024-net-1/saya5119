<script>
    const url = `https://gist.githubusercontent.com/sugi2000/759d53facd2d9888eb64336c44ec0107/raw/02e6c200281ae30aea52fc0c97c78e6d4e425930/book.json`;
    // @ts-ignore
    let books = [];
  
    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        books = json.Items;
      })
      .catch(err => console.error(err));
  </script>
<h1>ブックコレクション</h1>
<p>ブックコレクションのブック</p>

<div class="book-container">
    {#each books as book}
    <a href="book/{book.isbn}">
      <div class="book">
        <h2>{book.title}</h2>
          <img src={book.largeImageUrl} alt={book.title} />
        <p>{book.author}</p>
      </div>
    </a>
    {/each}
  </div>
  <style>
    .book-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .book-container a {
      color: black;
      text-decoration: none;
    }
    .book {
      margin: 1em;
      padding: 1em;
      border: 1px solid #ccc;
      border-radius: 0.5em;
      width: 170px;
    }
    .book:hover {
      border: 1px solid #646cff;
      transform: scale(1.05);
    }
    .book h2 {
      font-size: 1.2em;
      margin: 0;
      text-align: left;
    }
    .book img {
      width: 100%;
      height: 240px;
      object-fit: cover;
    }
    .book p {
      font-size: 0.8em;
      margin: 0;
      text-align: left;
    }
  </style>
