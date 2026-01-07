fetch('./servers.json')
  .then(response => response.json())
  .then(data => {
    const search = document.getElementById('search');
    const result = document.getElementById('result');

    search.addEventListener('keyup', () => {
      const value = search.value.toLowerCase();
      const server = data.find(s => s.name === value);

      if (server) {
        result.innerHTML = `<p>
          ✅ Server Found:<br>
          <a href="${server.url}" target="_blank">${server.url}</a>
        </p>`;
      } else {
        result.innerHTML = `<p>❌ Server not found</p>`;
      }
    });
  });
