import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

const Form = ({ open }) => {
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    friendsusername: '',
    friendsemail: '',
  });

  const [op, setOp] = useState(true);
  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    friendsusername: '',
    friendsemail: '',
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      valid = false;
    } else {
      newErrors.username = '';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.friendsusername.trim()) {
      newErrors.friendsusername = "Friend's Username is required";
      valid = false;
    } else {
      newErrors.friendsusername = '';
    }

    if (!formData.friendsemail.trim()) {
      newErrors.friendsemail = "Friend's Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.friendsemail)) {
      newErrors.friendsemail = "Friend's Email is invalid";
      valid = false;
    } else {
      newErrors.friendsemail = '';
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (formErrors[name]) {
      const newErrors = { ...formErrors };
      newErrors[name] = '';
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validateForm()) {
        setOp(false);
        const response = await axios.post('http://localhost:5000', formData);
        console.log('Response:', response.data);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally{
      setLoading(false);
    }
   
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      {op && (
        <div>
          <FormControl variant="standard" error={!!formErrors.username}>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <FormHelperText>{formErrors.username}</FormHelperText>
          </FormControl>
          <FormControl variant="standard" error={!!formErrors.email}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormHelperText>{formErrors.email}</FormHelperText>
          </FormControl>
          <FormControl variant="standard" error={!!formErrors.friendsusername}>
            <InputLabel htmlFor="friendsusername">Friend's Username</InputLabel>
            <Input
              id="friendsusername"
              name="friendsusername"
              value={formData.friendsusername}
              onChange={handleChange}
              required
            />
            <FormHelperText>{formErrors.friendsusername}</FormHelperText>
          </FormControl>
          <FormControl variant="standard" error={!!formErrors.friendsemail}>
            <InputLabel htmlFor="friendsemail">Friend's Email</InputLabel>
            <Input
              id="friendsemail"
              name="friendsemail"
              type="email"
              value={formData.friendsemail}
              onChange={handleChange}
              required
            />
            <FormHelperText>{formErrors.friendsemail}</FormHelperText>
          </FormControl>
          <div>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      )}
      {(!loading && !op) && <h4>Hurray, Email has been sent!</h4>}

      {loading && <CircularProgress size={24} />}
    </Box>
  );
};

export default Form;
