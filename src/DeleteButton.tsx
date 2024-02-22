import React from 'react';


interface DeleteButtonProps {
    onClick?():void;
}

const DeleteButton = ({
    onClick
}:DeleteButtonProps)=>{
    return(
        <>
            <div className='deleteButtonContainer' onClick={onClick}>
                <div className='checkIcon'>
                    {'X'}
                </div>
            </div>
        </>
    )
}
