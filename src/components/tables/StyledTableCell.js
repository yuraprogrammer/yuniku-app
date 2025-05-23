import { styled } from '@mui/material/styles';
import { TableCell, tableCellClasses } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    padding: 20,
    textalign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    
  },
}));

export default StyledTableCell;