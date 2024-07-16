import React, {useState, useEffect} from "react";
import './Hero.css';
import Button from '@mui/material/Button';
import { useScroll, motion, useAnimation  } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Form from "../Form/Form";

const Hero = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [blur, setBlur] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  useEffect(() => {
    const timer = setTimeout(() => {
      setBlur(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

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

  return (
    
    <div className="hero-container">  
      
      <div className="hero-texts">
        <h1>We make crypto <br></br><span className={`content ${blur ? 'blurred' : 'clear'}`}>clear</span> and <span className="animate-charcter">simple</span></h1>
        <p>
          Buy, sell, and grow your crypto with CoinFlip, the platform dedicated<br></br>
          to every trader at every level.
        </p>
      </div>
      <div className="hero-button">
        <Button variant="contained" className="btn-refer" onClick={handleOpen}>Refer Now</Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <Form open = {open}/>

            {/* </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula. */}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Hero;
