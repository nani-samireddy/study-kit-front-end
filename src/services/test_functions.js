import { API_URL } from "../Utils/constants";
export const createTestInstanceAndStartTheTest = async (testData) => {
    await fetch(`${API_URL}/api/e/cti`, {
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