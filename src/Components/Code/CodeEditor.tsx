import React from "react";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
const code = `
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
const CodeEditor = () => {
    return (
        <>
             <Editor height="90vh" defaultLanguage="javascript" defaultValue={code} />;
}
        </>
    );
};

export default CodeEditor;
