import { Box, FormControlLabel, Checkbox } from "@mui/material";

const MuiCheckbox = () => {
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={<Checkbox />}
        />
      </Box>
    </Box>
  );
};

export default MuiCheckbox;
