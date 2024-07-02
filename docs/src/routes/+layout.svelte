<nav> 
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/book">Book</a>
</nav>
<slot/>
<footer>
    <p>© 2024 Kuroda Sayane</p>
</footer>

<style>
    :global(body) {
      font-family: Arial, "Hiragino Sans", sans-serif;
    }
    nav {
      display: flex;
      gap: 1rem;
      background-color: #eee;
      padding: 1rem;
      border-radius: 0.25em;
    }
    nav a {
      color: rgb(0, 145, 255);
      text-decoration: none;
    }
    footer {
      margin-top: 2em;
      padding: 1rem;
      background-color: #eee;
      border-radius: 0.25em;
    }
  </style>