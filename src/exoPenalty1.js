

export const tirAuBut = (random = Math.random()) => {
    return random >= 0.5 ? 1 : 0 ;
}

export const tourDeTirs = (scoreEquipeA, scoreEquipeB) => {

    const nouveauScoreEquipeA = scoreEquipeA + tirAuBut();
    scoreEquipeA !== nouveauScoreEquipeA ?  console.log("Équipe A marque!") : console.log("Équipe A rate!")
    const nouveauScoreEquipeB = scoreEquipeB + tirAuBut();
    scoreEquipeB !== nouveauScoreEquipeB ?  console.log("Équipe B marque!") : console.log("Équipe B rate!")

    return {
        nouveauScoreEquipeA,
        nouveauScoreEquipeB ,
    };
}

export const nousAvonsUnGagnant = (scoreEquipeA, scoreEquipeB, index) => {
    return ((Math.abs(scoreEquipeA - scoreEquipeB) > 2 ) || (index === 5 && scoreEquipeA!==scoreEquipeB))
}

export const butEnOr = () => {
    const {scoreEquipeA, scoreEquipeB} = tourDeTirs()
    return scoreEquipeA !== scoreEquipeB ? ramenerLaCoupeALaMaison(scoreEquipeA,scoreEquipeB) : butEnOr()
}

export const ramenerLaCoupeALaMaison = (scoreEquipeA, scoreEquipeB) => {
    scoreEquipeA > scoreEquipeB ? console.log("Equipe A gagne!") : console.log("Equipe B gagne!")
}

export const simulerSeanceTirsAuBut = (index = null, scoreEquipeA = null, scoreEquipeB= null) => {
    const i = index ?? 1;
    const a = scoreEquipeA ?? 0;
    const b = scoreEquipeB ?? 0;
    const{ c, d} = tourDeTirs(a, b);
    console.log("Essai " + index)
    !nousAvonsUnGagnant(c,d,i)
        ? simulerSeanceTirsAuBut(i+1,c,d)
        : i === 5 && !nousAvonsUnGagnant()
            ? butEnOr()
            : ramenerLaCoupeALaMaison(c,d)
}

