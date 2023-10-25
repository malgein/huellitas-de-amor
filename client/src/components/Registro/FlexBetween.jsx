import { Box } from "@mui/material";
import { styled } from "@mui/system";


//Componente de estilo para reutilizar
const FlexBetween = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export default FlexBetween;