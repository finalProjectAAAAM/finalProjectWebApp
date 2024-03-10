import React from "react";
import { styled } from "@mui/system";
import { Button, Typography, Container, Grid, Paper } from "@mui/material";
import { PlayArrow, PersonAdd } from "@mui/icons-material";
import img from "./asset/img.png";
import NavBar from "./NavBar";

const CenteredContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const StyledTypography = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '2.5rem',
  color: '#1976d2', // Navy blue color
  fontFamily: 'Lato', // Specify the custom font family
});

const ImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const StyledPaper = styled(Paper)({
  padding: "40px",
});

const ButtonContainer = styled(Grid)({
  padding: "20px 0",
});

const IconWithText = ({ icon, text }) => (
  <>
    {icon}
    <span style={{ marginLeft: "10px" }}>{text}</span>
  </>
);

const Homepage = () => {
  return (
    <div>
    <NavBar/>
    <CenteredContainer maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ImageContainer>
            <img
              src={`${img}`}
              alt="App Image"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StyledPaper>
            <StyledTypography variant="h6" gutterBottom>
              Opportunities Don't Happen. You Create Them So Go Sign Up
            </StyledTypography>
            <Typography variant="body1" paragraph>
              Your app description goes here. Explain what your app does and why
              users should sign up or watch the video.
            </Typography>
          </StyledPaper>
          <ButtonContainer container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="primary" startIcon={<PlayArrow />}>
                Watch Video
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary" startIcon={<PersonAdd />}>
                Sign Up
              </Button>
            </Grid>
          </ButtonContainer>
        </Grid>
      </Grid>
    </CenteredContainer>
    </div>
  );
};

export default Homepage;
