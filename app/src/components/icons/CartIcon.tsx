import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Avatar, Box } from "@mui/material";
import { theme } from "../../theme";

const CartIcon = () => {
  const icon = {
    cursor: "pointer",
    fontSize: "30px",
  };

  const iconContainer = {
    marginRight: "10px",
    marginLeft: "auto",
    marginBottom: "10px",
  };

  const number = {
    backgroundColor: theme.palette.secondary.main,
    width: "20px",
    height: "20px",
    top: 9,
    right: -18,
    fontSize: "18px",
    fontWeight: "heavy",
    fontFamilly: "Roboto",
  };
  return (
    <Box sx={iconContainer}>
      <Avatar sx={number}>1</Avatar>
      <ShoppingCartIcon sx={icon}></ShoppingCartIcon>
    </Box>
  );
};

export default CartIcon;
