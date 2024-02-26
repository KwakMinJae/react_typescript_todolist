import React from 'react';

interface InputTextProps {
    onChange(e:React.ChangeEvent<HTMLInputElement>):void;
    onKeyDown(e:React.KeyboardEvent<HTMLInputElement>):void;
    inputText:string;
}

const InputText= ({
    onChange,
    onKeyDown,
    inputText
}:InputTextProps) => {
    return(
            <input type="text"
            className='inputText'
            placeholder='Enter'
            onChange={e=>onChange(e)}
            onKeyDown={e=>onKeyDown(e)}
            value={inputText}
            />
    );
}

export default InputText;