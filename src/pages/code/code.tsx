import Editor from "@/Components/Code/CodeEditor";
import EditorNavBar from "@/Components/Code/EditorNavBar";
import React, { useState } from "react";
export const languages = [
    "C++",
    "Java",
    "Javascript",
    "HTML",
    "CSS",
    "Python",
    "Ruby",
];
const defaultEditorValue = `
let arr = [
    [1, 2, 3],
    [3, 4, 5],
    [6, 7, 8],
    [10, 2, 3],
];

function maxInArrays(arr) {
    let ans = [];

    for (let i = 0; i < arr.length; i++) {
        let maxi = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxi) maxi = arr[i][j];
        }
        //ill be having the max elem of arr[i]th array in maxi
        ans.push(maxi);
    }
    return ans;
}

console.log(maxInArrays(arr));`;
const Code = () => {
    const [language, setlanguage] = useState("Javascript");
    const [editorValue, setEditorValue] = useState(defaultEditorValue);

    return (
        <>
            <EditorNavBar
                setLanguage={setlanguage}
                languages={languages}
                selectedLanguage={language}
            />
            <Editor
                selectedLanguage={language}
                setEditorValue={setEditorValue}
                value={editorValue}
            />
        </>
    );
};

export default Code;
