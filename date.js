async function convertDate() {
    const dateInput = document.getElementById("dateInput").value;
    const resultDiv = document.getElementById("result");

    if (!dateInput) {
        resultDiv.textContent = "Please select a date.";
        return;
    }

    try {
        const response = await fetch(
            `https://www.hebcal.com/converter?cfg=json&date=${dateInput}&g2h=1`
        );

        if (!response.ok) {
            throw new Error("Failed to fetch Hebrew date.");
        }

        const data = await response.json();
        resultDiv.textContent = `Hebrew Date: ${data.hebrew}`;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
}
