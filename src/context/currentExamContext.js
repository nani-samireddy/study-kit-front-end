import { createContext, Component } from "react";

export const CurrentExamContext = createContext();

class CurrentExamContextProvider extends Component {
    state = {
        currentExam: null,
    }
    updateCurrentExam = (exam) => {
        console.log("Current exam updated to ");
        console.log(exam)
        this.setState({ currentExam: exam });
    }
    render() {
        return (
            <CurrentExamContext.Provider value={{ ...this.state, updateCurrentExam: this.updateCurrentExam }}>
                {this.props.children}
            </CurrentExamContext.Provider>

        );
    }
}

export default CurrentExamContextProvider;