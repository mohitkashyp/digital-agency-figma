import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import TestimonialCard from './TestimonialCard'

export default function Testimonial() {
  return (
    <Box 
    sx={{
      bgcolor: "primary.main",
      py: "4.5rem",
      px: 10,
    }}
    
  >
    <Typography variant="h2" color="white" mb={"5rem"}>What people are saying about us</Typography>
    <Grid container  justify="space-around" spacing={5}>
      <TestimonialCard type="transparent"/>
      <TestimonialCard type="black"/>
      <TestimonialCard type="transparent"/>
    </Grid>
  </Box>
  )
}
