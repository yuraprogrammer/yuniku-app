import { TableRow } from "@mui/material";
import { TableBody } from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import StyledTableCell from "./tables/StyledTableCell";
import StyledTableRow from "./tables/StyledTableRow";

function ParseTable(orders) {
    const parsedOrders = [];
    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        parsedOrders.push(<StyledTableRow>
                <StyledTableCell>{order.id}</StyledTableCell>
                <StyledTableCell>{order.customerName}</StyledTableCell>
                <StyledTableCell>{order.totalAmount}</StyledTableCell>
                <StyledTableCell>{order.status}</StyledTableCell>
            </StyledTableRow>);
                    
                            
    }
    return parsedOrders;
}

export default function OrdersTable({ orders }) {        
    return (
        
    <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table>
            <TableHead>
                <TableRow>  
                    <StyledTableCell>Order ID</StyledTableCell>
                    <StyledTableCell>Customer Name</StyledTableCell>
                    <StyledTableCell>Total Amount</StyledTableCell>
                    <StyledTableCell>Status</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {ParseTable(orders)}
            </TableBody>        
        </Table> 
    </TableContainer>
    ); 
}
