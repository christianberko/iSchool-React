import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { grey } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  color: 'black',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: '10px 10px',
  p: 3,
  


};


export default function PeopleModal({ username, facebook, imagePath, interestArea, name, phone, office, title, twitter, website, tagLine, email }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='but'>
        <Button className = 'mybutton' onClick={handleOpen}>
          <p>{name}</p>

        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {name}
          </Typography>

          <Typography id="modal-modal-title" variant="h5" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-title" variant="p" component="h2">
            <img src={imagePath} alt={name} />
          </Typography>

          {office &&
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Office: {office}

          </Typography>
          }

          {phone &&
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Phone: {phone}

          </Typography>
          }   


          {website &&
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Website: <a href = {website} target="_blank">{website}</a>
          </Typography>
          }
          
          {/* <Typography id="modal-modal-title" variant="p" component="h2">
          <
          </Typography>
           */}
        

        <Typography id="modal-modal-title" variant="h5" component="h2">
            Interest Area:{interestArea}
        </Typography>
        </Box>
      </Modal>
    </div>

  );
}