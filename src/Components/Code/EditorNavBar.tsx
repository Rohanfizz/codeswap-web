import React from "react";

const EditorNavBar: React.FC<{
    selectedLanguage: string;
    setLanguage: any;
    languages: string[];
}> = ({ selectedLanguage, setLanguage, languages }) => {
    const setLanguageHandler = (language: string) => {
        setLanguage(language);
    };
    return (
        <div className=" h-[5rem]  flex justify-end items-center pr-4 max-w-screen">
            <div className="dropdown dropdown-end ">
                <label
                    tabIndex={0}
                    className="font-bold btn text-slate-200 text-xl normal-case bg-secondary"
                >
                    {selectedLanguage}
                </label>
                <ul
                    tabIndex={0}
                    className="font-bold dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                    {languages.map((language, idx) => (
                        <li key={idx}>
                            <a onClick={() => setLanguageHandler(language)}>
                                {language}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default EditorNavBar;
