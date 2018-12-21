import React from 'react';

function Modal (props) {
    return (
        <div className="modal" role="dialog" style={{ display: props.display }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h3>{props.header}</h3>
                    </div>
                    <div className="modal-body">
                       {props.children}
                    </div>
                </div>
            </div>
        </div>
      )
    }



export default Modal;