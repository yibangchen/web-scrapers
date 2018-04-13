var slaying = true,
    youHit = Math.floor(Math.random()*2),
    damageThisRound = Math.floor(Math.random()*5 + 1),
    totalDamage = 0;

while (slaying) {
    if (youHit) {
        console.log("Congratulations you hit the dragon");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            slaying = false;
        }
    } else {
        console.log("Sorry the dragon defeated you");
    }
    youHit = Math.floor(Math.random()*2);
    // slaying = false;
}