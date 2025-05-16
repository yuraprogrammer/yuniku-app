import { TableRow } from "@mui/material";
import { TableBody } from "@mui/material";
import { Table } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableContainer } from "@mui/material";
import { Paper } from "@mui/material";
import StyledTableCell from "./tables/StyledTableCell";
import StyledTableRow from "./tables/StyledTableRow";
import { formatDate } from "../functions/common";

export default function OrdersTable({ orders, color }) {        
    return (
        
    <TableContainer component={Paper} sx={{ mt: 2, padding:2 }} style={{marginLeft: '5%', borderRadius: '10px'}}>
        <Table sx={{ minWidth: 'xl' }} aria-label="customized table"> 
            <TableHead>
                <TableRow style={{backgroundColor: 'darkgray'}}>  
                    <StyledTableCell style={{textAlign: 'center'}}><strong>№ заявки</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Дата</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Вантаж</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Контрагент</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Тягач<br></br>Автоцистерна</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Об'єм по калібровці</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>ПІБ водія</strong></StyledTableCell>
                    <StyledTableCell style={{textAlign: 'center'}}><strong>Час в'їзду</strong></StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map(order => {
                    const date = new Date(order.dataOrder);
                    return (
                        <StyledTableRow key={order.id} style={{cursor: 'pointer', backgroundColor: color}}>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.nomerzay}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{formatDate(date)}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.liquid}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.company}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.truckNumber}<br></br>{order.tankNumber}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.kol}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.pogr}</StyledTableCell>
                        <StyledTableCell style={{color: 'white', textAlign: 'center'}}>{order.inTime}</StyledTableCell>
                        </StyledTableRow>
                )
            })}
            </TableBody>        
        </Table>
    </TableContainer>
    ); 
}
