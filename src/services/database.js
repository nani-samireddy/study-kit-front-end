export const fetchExamsList = async () => {
    const response = await fetch("http://localhost:4000/api/e/getExamsList");
    const json = await response.json();
    if (response.ok) {
        return json;
    }
}

export const fetchExamStreamsDatabyExamId = async (examId) => {
    const response = await fetch("http://localhost:4000/api/e/getExamStreamsList/" + examId);
    const json = await response.json();
    if (response.ok) {
        return json;
    }
}
export const fetchExamStreamDatabyStreamId = async (examId, streamId) => {
    const response = await fetch("http://localhost:4000/api/e/getStreamDetails/" + examId + "/" + streamId);
    const json = await response.json();
    if (response.ok) {
        console.log(json);
        return json;
    }
}

export const fetchFullRandomTest = async ({ examId, streamId, selectedSubjects } = {}) => {
    const response = await fetch("http://localhost:4000/api/e/grp/" + examId + "/" + streamId + "/?subjects=" + selectedSubjects);
    const json = await response.json();
    if (response.ok) {
        console.log("Full random test data fetched successfully");
        console.log(json);
        return json;
    }
}

export const fetchPreviousPaperTestData = async (previousPaperId) => {
    const response = await fetch("http://localhost:4000/api/e/gpp/" + previousPaperId);
    const json = await response.json();
    if (response.ok) {
        console.log("Previous paper test data fetched successfully");
        console.log(json);
        return json;
    }
}
export const fetchSubjectsRandomTest = async (examId, streamId, subjects) => {
    const response = await fetch("http://localhost:4000/api/e/grp/" + examId + "/" + streamId + "?subjects" + { subjects },);
    const json = await response.json();
    if (response.ok) {
        console.log(json);
        return json;
    }
}

