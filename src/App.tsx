import React from 'react';

interface InputTextProps{ //인터페이스
  onChange(e: React.ChangeEvent<HTMLInputElement>):void; // 아무것도 반환하지 않은 void 타입
  onKeyDown(e:React.KeyboardEvent<HTMLInputElement>):void; // 엔터시 텍스트 입력
  inputText:string;
}

const InputText = ({
  onChange,
  onKeyDown,
  inputText
}:InputTextProps) =>{
  return(
    <div className='inputTextContainer'>
      <input type='text'
        className='inputText'
        placeholder='enter'
        onChange={e=>onChange(e)}
        onKeyDown={e=>onKeyDown(e)}
        value={inputText}
      />
    </div>
  )
}
export default InputText;
