import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
        <Typography variant="h1">h1 heading</Typography>
        <Typography variant="h2">h2 heading</Typography>
        <Typography variant="h3">h3 heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
        <Typography variant="h5">h5 heading</Typography>
        <Typography variant="h6">h6 heading</Typography>

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>
        <Typography variant="body1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque explicabo sunt soluta corrupti fuga. Nostrum tempore eos atque odio aliquid praesentium molestias mollitia repellat, qui, error iusto voluptate suscipit voluptates!</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga ullam asperiores quaerat pariatur culpa accusantium sapiente consectetur velit, illo laudantium omnis cupiditate! Hic atque laborum illum, beatae veniam exercitationem.</Typography>
    </div>
  )
}

export default MuiTypography