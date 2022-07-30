import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { LANGUAGE_CHINESE, LANGUAGE_ENGLISH } from "./constants";

interface ILanguageButton {
    isButtonChinese: boolean
}

const Button = styled.button<ILanguageButton>`
    position: absolute;
    bottom: 10px;
    right: 15px;
    height: 30px;
    width: 30px;
    border: none;
    background: white;
    border: 1px solid black;
    border-radius: ${(props) => props.isButtonChinese ? '0' : '50%'};
    &:hover  {
        border: 2px solid orange;
    }
`;

type LANGUAGE_ENGLISH = typeof LANGUAGE_ENGLISH;
type LANGUAGE_CHINESE = typeof LANGUAGE_CHINESE;

interface Props {
    language: String;
    displayLanguage: String;
    setLanguage: Dispatch<SetStateAction<LANGUAGE_ENGLISH | LANGUAGE_CHINESE>>;
}

export default function LanguageButton({ language, displayLanguage, setLanguage }: Props) {

    function handleLanguageButtonClick() {
        if (language === LANGUAGE_ENGLISH) {
            setLanguage(LANGUAGE_CHINESE)
        } else {
            setLanguage(LANGUAGE_ENGLISH)
        }
    }

    return (
        <Button isButtonChinese={language === LANGUAGE_CHINESE} onClick={handleLanguageButtonClick}>{displayLanguage}</Button>
    )
}