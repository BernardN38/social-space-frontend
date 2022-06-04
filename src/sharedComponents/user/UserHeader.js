import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MessageIcon from "@mui/icons-material/Message";
import AddBoxIcon from "@mui/icons-material/AddBox";
import CancelIcon from "@mui/icons-material/Cancel";
import { Avatar } from "@mui/material";

export default function UserHeader({
  follows = true,
  name = "bernard narvaez",
  imageSrc = "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687",
}) {
  return (
    <Box sx={{ minWidth: 275, padding: "0.25rem" }}>
      <Card variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{ height: 100, width: 100, margin: "4px" }}
            srcSet={imageSrc}
          />
          <Typography >{name}</Typography>
          <Box sx={{display:"flex", width: "100%"}}>
            <Button
              sx={{ marginRight: "3px" }}
              variant="contained"
              endIcon={<MessageIcon />}
              fullWidth
            >
              Message
            </Button>
            {follows ? (
              <Button
                variant="contained"
                color="error"
                endIcon={<CancelIcon />}
                fullWidth
              >
                UnFollow
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                endIcon={<AddBoxIcon />}
                fullWidth
              >
                Follow
              </Button>
            )}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
