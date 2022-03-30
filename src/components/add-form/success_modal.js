import { requirePropFactory } from '@mui/material';
import React from 'react'
import Modal from 'react-modal';
import './success_modal.css';
import {Home} from '@mui/icons-material/';
import {Link} from 'react-router-dom';

const successModal = ({modalOpen, setModalOpen}) => {
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor:'#71ccca',
          borderRadius:'12px',
          
        },
      };
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className='modal-inner'>
          <label>Expense Added Successfully</label>
          <img src={require('../../assets/images/added-image.png')} alt='Expense Added' className='added-image'/>
      </div>
      <Link to='/'>
      <div className='take-home-button'>
          <Home/>
          Home
      </div>
      </Link>
    </Modal>
  )
}

export default successModal;