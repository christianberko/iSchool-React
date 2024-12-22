import { useState } from "react"
import getData from "../utils/getData";
import React from 'react';

import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal({ title, description}) {
  const [open, setOpen] = React.useState(false)




  return (
    

    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>{title}</Button>}
    >
      
        <Modal.Description>
          <Header>{title}</Header>
          <hr/>
          <p>
            {description}
          </p>
          
        </Modal.Description>
     
      
    </Modal>
  )
}

export default ModalExampleModal;




