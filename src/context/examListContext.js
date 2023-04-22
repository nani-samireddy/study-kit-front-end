import { createContext, useContext, useState } from "react";
import { fetchExamsList } from '../services/database';
// Create a context object
export const ExamListContext = createContext();

export const useAuth = () => useContext(ExamListContext);

const ExamListProvider = ({ children }) => {
    const [examList, setExamList] = useState([]);

    const updateExamListData = async () => {
        await setExamList(fetchExamsList());
    }

    return (<ExamListContext.Provider value={examList}>
        {children}
    </ExamListContext.Provider>)
}
