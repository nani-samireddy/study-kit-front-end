class Test {
    constructor(
        {
            name,
            examId,
            examName,
            description,
            streamId,
            streamName,
            subjects,
            selectedSubjects,
            duration,
            totalQuestions,
            totalMarks,
            passingMarks,
            year,
            mode,
            testId,
            testStartTime,
            testEndTime,

        } = {}
    ) {
        this.name = name;
        this.examId = examId;
        this.examName = examName;
        this.description = description;
        this.streamId = streamId;
        this.streamName = streamName;
        this.subjects = subjects;
        this.selectedSubjects = selectedSubjects;
        this.duration = duration;
        this.totalQuestions = totalQuestions;
        this.totalMarks = totalMarks;
        this.passingMarks = passingMarks;
        this.year = year;
        this.mode = mode;
        this.testId = testId;
        this.testStartTime = testStartTime;
        this.testEndTime = testEndTime;
    }

    static fromJson(json) {
        return new Test({
            name: json.name,
            examId: json.examId,
            examName: json.examName,
            description: json.description,
            streamId: json.streamId,
            streamName: json.streamName,
            subjects: json.subjects,
            selectedSubjects: json.selectedSubjects,
            duration: json.duration,
            totalQuestions: json.totalQuestions,
            totalMarks: json.totalMarks,
            passingMarks: json.passingMarks,
            year: json.year,
            mode: json.mode,
            testId: json.testId,
            testStartTime: json.testStartTime,
            testEndTime: json.testEndTime,
        });
    }
}