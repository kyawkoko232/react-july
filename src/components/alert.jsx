import React from "react";

const Alert = ({ message = 'Not Authenticated', type = 'warning' }) => {
    let alertClass = 'alert ';

    if (type === 'success') {
        alertClass += 'alert-success';
    } else if (type === 'warning') {
        alertClass += 'alert-warning';
    } // you can add more conditions here for other alert types.

    return (
        <div className={`${alertClass}  max-w-xs`}>
            {message}
        </div>

    );
}

export default Alert;
