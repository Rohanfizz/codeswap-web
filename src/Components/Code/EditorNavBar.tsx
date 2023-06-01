import React from "react";
import { FiCopy } from "react-icons/fi";
import { FaRegShareSquare } from "react-icons/fa";
const EditorNavBar: React.FC<{
    selectedLanguage: string;
    setLanguage: any;
    languages: string[];
    editorValue: string;
    settextCopyAlert: any;
    roomId: string;
    setshareRoomAlert: any;
    patchBackend:()=>void;
}> = ({
    selectedLanguage,
    setLanguage,
    languages,
    editorValue,
    settextCopyAlert,
    roomId,
    setshareRoomAlert,
    patchBackend
}) => {
    const setLanguageHandler = (language: string) => {
        setLanguage(language);
        patchBackend()
    };
    const handleCopyClick = () => {
        navigator.clipboard
            .writeText(editorValue)
            .then(() => {
                console.log("Text copied to clipboard");
                settextCopyAlert(true);
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    };
    console.log(process.env.NEXT_PUBLIC_CODE_URL_PROD);
    const handleShareClick = () => {
        navigator.clipboard
            .writeText(
                `${
                    process.env.NODE_ENV == "production"
                        ? process.env.NEXT_PUBLIC_CODE_URL_PROD
                        : process.env.NEXT_PUBLIC_CODE_URL_DEV
                }${roomId}`
            )
            .then(() => {
                setshareRoomAlert(true);
            })
            .catch((error) => {
                console.error("Error copying text to clipboard:", error);
            });
    };
    return (
        <>
            <div className=" h-[5rem]  bg-primary flex bg-primry justify-between items-center pl-2 pr-2 max-w-screen">
                <div>
                    <button className="btn mr-2" onClick={handleShareClick}>
                        <FaRegShareSquare className="text-2xl " />
                    </button>
                </div>
                <div className="flex">
                    <div>
                        <button className="btn mr-2" onClick={handleCopyClick}>
                            <FiCopy className="text-2xl " />
                        </button>
                    </div>
                    <div className="dropdown dropdown-end ">
                        <label
                            tabIndex={0}
                            className="font-bold btn text-slate-200 text-xl bg-neutral normal-case "
                        >
                            {selectedLanguage}
                        </label>
                        <ul
                            tabIndex={0}
                            className="font-bold dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            {languages.map((language, idx) => (
                                <li key={idx}>
                                    <a
                                        onClick={() =>
                                            setLanguageHandler(language)
                                        }
                                    >
                                        {language}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditorNavBar;
