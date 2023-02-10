export const createTestInstanceAndStartTheTest = async (testData) => {
    await fetch("http://localhost:4000/api/e/cti", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ testData }),
    }).then(async (res) => {
        if (res.ok) {
            console.log(await res.json());
        }
    });

}