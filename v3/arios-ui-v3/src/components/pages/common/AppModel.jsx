import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AppModel = (props) => {

    const message = props.appAlert.message;
    const type = props.appAlert.type;
    return (
        <Modal
          {...props}
          size="lg"
          centered
          backdrop="static"
        >
         <div>
            <div className={type === "info" ? "app-model-info" : type === "success" ? "app-model-success" : "app-model-error" }>
            {type}</div>
            <hr className="app-model-line" />
            <div>{message}</div>
            <Button onClick={props.onHide}>Close</Button>
            <Button onClick={props.onHide}>Proceed</Button>
         </div>
        </Modal>
      );
}

export default AppModel