const express = require('express');
const mongoose = require('mongoose');


const app = express();
const PORT = process.env.PORT || 3000;

// write a basic Express server
app.get('/', (req, res) => {
  res.send('Server connected sucessfully!');
});

// Implementing PUT end point.
app.put('/update-user', async (req, res) => {
  const { email, newPassword } = req.body; 
    if (!email || !newPassword) {
        return res.status(400).json({ message: 'Email and new password are required.' });
    }   
    try {
const user = [
        {email: "simba123@gmail.com", password: "simba123"},
        {email: "puppy324@gmail.com", password: "puppy324"},
        {email: "MaheshBOB1234@gamil.com", password: "MaheshBOB1234"}

    ];    
        if (!user) {
            return res.status(404).json({ message: 'Email not found.' });
        }   
        user.password = newPassword; // Assuming password is hashed before saving
        await user.save();  
        res.status(200).json({ message: 'User updated successfully.' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Internal server error.' }); 
    }
});

// Implementing DELETE end point by deleting a user by email if user email was found the user will be deleted and mesage will be returned user deleted successfully. if email does not exist then message will be returned email not found.

app.delete('/delete-user', async (req, res) => {
    const {email} = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required.' });
    }
    try {
const user = [
        {email: "simba123@gmail.com", password: "simba123"},
        {email: "puppy324@gmail.com", password: "puppy324"},
        {email: "MaheshBOB1234@gamil.com", password: "MaheshBOB1234"}
    ];
            if (!user) {
            return res.status(404).json({ message: 'Email not found.' });
        }
        res.status(200).json({message: 'User deleted successfully.' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
    
});