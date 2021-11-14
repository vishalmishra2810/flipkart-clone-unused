import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const useStyle = makeStyles({
  login: {
    background: "#ffffff",
    color: "#F51E1E",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: 50,
      alignItems: "center",
    },
  },
  container: {
    display: "flex",
  },
});

const HeaderButtons = () => {
  const classes = useStyle();
  return (
    <Box className={classes.wrapper}>
      <Button variant="contained" className={classes.login}>
        Login
      </Button>
      <Typography style={{ marginTop: 5 }}>More</Typography>
      <Box className={classes.container}>
        <Badge badgeContent={2} color="primary">
          <ShoppingCart />
        </Badge>

        <Typography style={{ margin: 10 }}>Cart</Typography>
      </Box>
    </Box>
  );
};

export default HeaderButtons;
