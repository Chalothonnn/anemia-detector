function startAnemiaTest() {
    const result = Math.random() > 0.5 ? "Anemia detected" : "No risk of Anemia";
    document.getElementById('testResult').innerText = result;
}
