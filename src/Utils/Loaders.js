export const exampageLoader = async ({ params }) => {
    const { examName } = params;
    const res = {
        examId: 1,
        examName: examName,
        examDescription: "Andhra Pradesh Engineering Common Entrance Test",
        title: examName,

        subjects: [
            {
                id: 1,
                name: "Physics",
                marks: 50,
                questions: 25,
            },
            {
                id: 2,
                name: "Chemistry",
                marks: 50,
                questions: 25,
            },
            {
                id: 3,
                name: "Mathematics",
                marks: 50,
                questions: 50,
            },
            {
                id: 4,
                name: "Computer Science",
                marks: 100,
                questions: 100,

            }
        ],

    };
    return res;
}