import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Account Details',
  'Review and confirm',
  'Success',
];

export default function HorizontalLabelPositionBelowStepper(props) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={props.Step} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
