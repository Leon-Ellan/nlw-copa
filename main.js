function createGame(player1, hour, player2) {
  return `
            <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong> 
            <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
          </li>
  `
}

let delay = -0.3;
function createCard(date, day, game, group) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
   <h2>${date} <span>${day}</span></h2>
    <h3>${group}</h3>
     <ul>
      ${game}
     </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Domingo", createGame("qatar", "13:00", "ecuador"), "Grupo A") +
    createCard("21/11", "Segunda", createGame("england", "10:00", "iran") + createGame("eua", "16:00", "gales")+ createGame("senegal", "13:00", "holanda"), "Grupo B" ) +
    createCard("24/11", "Quinta", createGame("brazil", "16:00", "serbia"), "Grupo G") +
    createCard("28/11", "Segunda", createGame("switzerland", "13:00","brazil" ) + createGame("portugal", "16:00", "uruguay"), "Grupo G" ) +
    createCard("02/11", "sexta", createGame("brazil", "16:00", "cameroon"), "Grupo G")


