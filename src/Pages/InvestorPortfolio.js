import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import './Css/Portfolio.css';
// import { width } from "@mui/system";
import Navs from "../components/Investor/Navs";


// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//         fontSize: 14,
//     },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     "&:nth-of-type(odd)": {
//         backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     "&:last-child td, &:last-child th": {
//         border: 0,
//     },
// }));

// function createData(name, calories, fat, carbs) {
//     return { name, calories, fat, carbs };
// }

// const rows = [
//     createData("Torch It", "Elctric vehicles", "25th Jan", "1000"),
//     createData("Rent and Rentals", "Green Energy", "26th Jan", "1500"),
//     createData("Manentia", "Healthtech", "27th Jan", "1799"),
//     createData("Byjus", "Edtech", "28th Jan", "1890"),
//     createData("Zerodha", "Fintech", "29th Jan", "2000"),
// ];

export default function InvestorPortfolio() {
    return (
        <>
            <Navs />
            {/* <div className="portfolio-title w-full text-center">
    <h1 className='  text-white '>Total Portfolio : </h1></div>
    <div className=" absolute bg-white  text-center rounded-lg"><h1 className='totalPortfolio w-2/4 absolute rounded-lg'> Total Invested :  &#8377; 50000 </h1></div> */}
            <div className="portfolio-title ">
                <div className="folio-box">
                    <h1>Total Portfolio : 1,50,000 </h1>
                    <p>Total Invested : &#8377; 50000</p>
                </div>
            </div>
            <div className="portfolio-details  ">
                <div className="left">
                    <h2>Latest Investment  : </h2>
                    <hr />
                    <h2>No. of Invested Startups :  </h2>
                </div>
                <div className="right">
                    <h2>Rent and Rentals</h2>
                    <hr />
                    <h2>20</h2>
                </div>

            </div>

            {/* <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Startup</StyledTableCell>
                            <StyledTableCell align="center">Domain</StyledTableCell>
                            <StyledTableCell align="center">Date</StyledTableCell>
                            <StyledTableCell align="center">Amount</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> */}
        </>
    );
}