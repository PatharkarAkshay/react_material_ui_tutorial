import { Stack, Autocomplete, TextField } from "@mui/material";
import React, { useState } from "react";

type Skill = {
  id: number;
  label: string;
};
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(e: any, newValue: string | null) => setValue(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(e: any, newValue: Skill | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutocomplete;
