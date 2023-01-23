import {
    fetchExamStreamsDatabyExamId,
    fetchExamStreamDatabyStreamId,
    fetchPreviousPaperTestData,
    fetchFullRandomTest,
    fetchSubjectsRandomTest

} from "../services/database";

export const exampageLoader = async ({ params }) => {
    const { examId, streamId } = params;
    return await fetchExamStreamDatabyStreamId(examId, streamId);

}

export const examStreamPageLoader = async ({ params }) => {
    const { examId } = params;
    return await fetchExamStreamsDatabyExamId(examId);
}

export const previousPaperTestPreviewLoader = async ({ params }) => {
    const { previousPaperId } = params;
    return await fetchPreviousPaperTestData(previousPaperId);
}

export const fullRandomTestPreviewLoader = async ({ params }) => {
    const { examId, streamId } = params;
    return await fetchFullRandomTest(examId, streamId);
}

export const subjectsRandomTestPreviewLoader = async ({ params }) => {
    const { examId, streamId } = params;
    return await fetchSubjectsRandomTest(examId, streamId);
}