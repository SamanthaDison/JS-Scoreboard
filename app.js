let score = 0

const teams = {
    team1: {
        score: 0
    },
    team2: {
        score: 0
    }
}

function increase(team) {
    teams[team].score++
    draw()
}

function decrease(team) {
    teams[team].score--
    draw()
}

function touchdown(team) {
    teams[team].score += 6
    draw()
}

function fieldgoal(team) {
    teams[team].score += 3
    draw()
}

function resetscores() {
    document.getElementById("score1", "score2").innerText = ("0")
}

function draw() {
    document.getElementById("score1").innerText = (teams['team1'].score)
    document.getElementById("score2").innerText = (teams['team2'].score)
}