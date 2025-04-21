fetch("data/players.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("player-cards");
    const search = document.getElementById("search");

    function render(players) {
      container.innerHTML = "";
      players.forEach(p => {
        container.innerHTML += `
          <div class="player-card">
            <img src="assets/images/${p.image}" alt="${p.name}">
            <h2>${p.name}</h2>
            <p>${p.country} • ${p.club}</p>
            <div class="stats">
              <p><strong>Goals:</strong> ${p.goals}</p>
              <p><strong>Assists:</strong> ${p.assists}</p>
              <p><strong>Matches:</strong> ${p.matches}</p>
              <p><strong>Trophies:</strong> ${p.trophies}</p>
            </div>
          </div>
        `;
      });
    }

    render(data);

    search.addEventListener("input", e => {
      const keyword = e.target.value.toLowerCase();
      const filtered = data.filter(p => 
        p.name.toLowerCase().includes(keyword) || 
        p.country.toLowerCase().includes(keyword)
      );
      render(filtered);
    });
  });
