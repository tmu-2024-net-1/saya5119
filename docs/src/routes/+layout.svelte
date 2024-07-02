<script>

</script>
  <div class="layout-container">
    <div class="header-container">
      <header>
        <h1>オノマトペツール</h1>
      </header>
    </div>
  
    <main>
      <slot />
    </main>
    <footer>
      <p>オノマトペツール</p>
      <p>制作:2024年</p>
    </footer>
  </div>
  
  <style>
    :global(body) {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .layout-container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
  }
    header,
    main,
    footer {
      box-sizing: border-box;
      width: 1100px;
      margin: 0 auto;
    }
    :global(a) {
      text-decoration: none;
    }
    main {
    flex: 1;
    }
    h1 {
      margin-left: 0.5em;
      color: white;
    }
    h1:hover {
      color: #cbcbcb;
    }
    header {
      background-color: rgb(37, 37, 37);
      left: 0;
      right: 0;
      bottom: 0;
      padding: 2em 2em 0.5em;
      margin: 0 auto;
      width: 100%;
    }
    footer {
      background-color: rgb(37, 37, 37);
      color: white;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1em 2em 0.5em;
      margin: 0 auto;
      width: 100%;
    }
  </style>