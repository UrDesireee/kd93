// Handle hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('show');
});

function calculateDKP() {
    // Get input values
    const t4KillsBefore = parseInt(document.getElementById('t4KillsBefore').value);
    const t5KillsBefore = parseInt(document.getElementById('t5KillsBefore').value);
    const powerBefore = parseInt(document.getElementById('powerBefore').value);
    
    const t4KillsAfter = parseInt(document.getElementById('t4KillsAfter').value);
    const t5KillsAfter = parseInt(document.getElementById('t5KillsAfter').value);
    const t4DeathsAfter = parseInt(document.getElementById('t4DeathsAfter').value);
    const t5DeathsAfter = parseInt(document.getElementById('t5DeathsAfter').value);

    // Calculate differences
    const t4KillsDiff = t4KillsAfter - t4KillsBefore;
    const t5KillsDiff = t5KillsAfter - t5KillsBefore;

    // Calculate DKP
    const dkp = (t4KillsDiff * 1) + (t5KillsDiff * 2) + (t4DeathsAfter * 15);

    // Calculate required DKP based on power
    let requiredDKP, powerMultiplier;
    if (powerBefore < 20000000) {
        requiredDKP = powerBefore * 2;
        powerMultiplier = 2;
    } else if (powerBefore < 30000000) {
        requiredDKP = powerBefore * 2.5;
        powerMultiplier = 2.5;
    } else if (powerBefore < 40000000) {
        requiredDKP = powerBefore * 3;
        powerMultiplier = 3;
    } else if (powerBefore < 50000000) {
        requiredDKP = powerBefore * 3.5;
        powerMultiplier = 3.5;
    } else {
        requiredDKP = powerBefore * 4.5;
        powerMultiplier = 4.5;
    }

    // Calculate percentage of required DKP achieved
    const percentageAchieved = (dkp / requiredDKP) * 100;

    // Display results
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Results:</h3>
        <p>T4 Kills gained: ${t4KillsDiff} (${t4KillsDiff * 1} points)</p>
        <p>T5 Kills gained: ${t5KillsDiff} (${t5KillsDiff * 2} points)</p>
        <p>Deaths: ${t4DeathsAfter} (${t4DeathsAfter * 15} points)</p>
        <p>Total DKP earned: ${dkp}</p>
        <p>Required DKP (${powerMultiplier}x power): ${requiredDKP}</p>
        <p>Percentage of required DKP achieved: ${percentageAchieved.toFixed(2)}%</p>
    `;
}