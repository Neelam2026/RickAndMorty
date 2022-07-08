import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import"../styles/Box.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const BasicModal=({prop})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {name,status,species,image,gender} = prop;
  const location=prop.location.name
  const origin=prop.origin.name
  

  return (
    <div>
  
      <Button onClick={handleOpen}>See Detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <div id="Model_title">
           <img src={image}></img>
           <div><div id="name">{name}</div>
           <span id="status">{status==="Alive" ? `🟢${status}` : status==="Dead" ? `🔴${status}` :status==="Unknown" ? `⚫` :`🔘${status}`}</span>
           <span id="species">-{species}</span>
           </div></div>
          </Typography>
          <hr></hr>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='details1'><div> <span className='title'>Gender</span> <br></br> <span>{gender}</span></div>
          <div id="l"><span className='title'>Location</span> <br></br><span>{location}</span></div></div>
          <div className='details2'><div><span className='title'>Species  </span><br></br> <span>{species}</span></div>
          <div id="l"><span className='title'>Origin </span><br></br><span> {origin}</span></div></div>
          </Typography>
          
        </Box>
      </Modal>
    </div>
  );
}
