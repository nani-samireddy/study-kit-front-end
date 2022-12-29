export const exampageLoader = async ({ params }) => {
    const { examName } = params;
    const res = {
        examId: 1,
        examName: examName,
        examDescription: "Andhra Pradesh Engineering Common Entrance Test",
    };
    return res;
}