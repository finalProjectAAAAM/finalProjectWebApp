import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navigate, useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate =useNavigate()

    const StyledAppBar = styled(AppBar)({
        backgroundColor: 'white',
        boxShadow: 'none',
        
    });

    const StyledTypography = styled(Typography)({
        flexGrow: 1,
        fontWeight: 'bold',
        fontSize: '2.5rem',
        color: '#1976d2', // Navy blue color
        fontFamily: 'Lato', // Specify the custom font family
    });

    const StyledButton = styled(Button)({
        marginRight: '60px',
        color: '#1a237e', // Navy blue color
        '&:hover': {
            backgroundColor: 'rgba(25, 118, 210, 0.1)', // Example hover background color
        },
    });

    // StyledButton for the "Sign Up" button with a blue background
    const SignUpButton = styled(Button)({
        color: 'white', // Text color
        backgroundColor: '#1976d2', // Blue background color
        '&:hover': {
            backgroundColor: '#1565c0', // Darker shade of blue on hover
        },
    });

    const CenteredToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'center',
    });

    const RightAlignedToolbar = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'flex-end',
    });

    return (
        <StyledAppBar position="static">
            <Toolbar>
                <StyledTypography variant="h10">
                    LAMA ZONE                               
                </StyledTypography>
         
            <CenteredToolbar>
            <StyledButton color="inherit" onClick={()=>{navigate('/home')}} >Home</StyledButton>
                <StyledButton color="inherit" >Features</StyledButton>
                <StyledButton color="inherit">Download</StyledButton>
                <StyledButton color="inherit">About</StyledButton>
                <StyledButton color="inherit" onClick={()=>{navigate('/contact')}}>Contact</StyledButton>
            </CenteredToolbar>
            <RightAlignedToolbar>
                <StyledButton color="inherit">Sign In</StyledButton>
                <SignUpButton>Sign Up</SignUpButton>
            </RightAlignedToolbar>
            </Toolbar>
        </StyledAppBar>

    );
};

export default NavBar;
