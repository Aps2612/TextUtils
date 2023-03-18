import React from 'react'

function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {/* props.alert && :- It is used to handle the case when the initial value of alert is null then it will be evalautes to false so in that case <div> will not be executed and if we do not apply the first condition then if alert is passed as null then it will show error when used inside the div.*/}
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alert
