import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(id, nome, cpf, email, telefone, dtNascimento, salario, dtContracao) {
  return { id, nome, cpf, email, telefone, dtNascimento, salario, dtContracao};
}

const rows = [
  createData(1, 'Yago', 11096044676, 'yago.rox@hotmail.com', '31928333367', '24/07/96', 2500, '15/09/2022'),
  createData(2, 'Silva', 15840700053, 'yago.rox@hotmail.com', '31928333367','24/07/96', 3000, '15/09/2022'),
  createData(3, 'Miranda', 78972882003, 'yago.rox@hotmail.com', '31928333367', '24/07/96', 3800, '15/09/2022'),
  createData(4, 'Ferreira', 93861139022, 'yago.rox@hotmail.com', '31928333367', '24/07/96', 6800, '15/09/2022'),
  createData(5, 'Seven', 67511155049, 'yago.rox@hotmail.com', '31928333367', '24/07/96', 1500, '15/09/2022'),
];
const DenseTable = ()  => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Nome</TableCell>
            <TableCell align="right">Cpf</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Telefone</TableCell>
            <TableCell align="right">Data de nascimento</TableCell>
            <TableCell align="right">Salário</TableCell>
            <TableCell align="right">Data de contratação</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.nome}</TableCell>
              <TableCell align="right">{row.cpf}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.telefone}</TableCell>
              <TableCell align="right">{row.dtNascimento}</TableCell>
              <TableCell align="right">R$ {row.salario}</TableCell>
              <TableCell align="right">{row.dtContracao}</TableCell>

              <TableCell align="right"><EditIcon /></TableCell>
              <TableCell align="right"><DeleteIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable