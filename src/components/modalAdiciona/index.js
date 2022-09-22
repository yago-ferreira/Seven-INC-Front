import React from 'react';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ModalAdiciona = ({ data, setData, dataEdit, onClose }) => {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState(dataEdit.name || "");
  const [email, setEmail] = useState(dataEdit.email || "");
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleSave = () => {
    if (!name || !email) return;

    if (emailAlreadyExists()) {
      return alert("E-mail já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, email };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, email }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_funcionario", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const emailAlreadyExists = () => {
    if (dataEdit.email !== email && data?.length) {
      return data.find((item) => item.email === email);
    }

    return false;
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Cadastro de funcionário</h2>
      <form>
        <TextField 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="outlined-basic" 
          label="Nome"
          variant="outlined" />
        <TextField 
          value={email} 
          id="outlined-basic" 
          type="email" 
          label="E-mail" 
          variant="outlined" 
          onChange={(e) => 
          setEmail(e.target.value)}/>
        </form>
      <Button variant="contained" onClick={handleSave} color="primary">
        Salvar
      </Button>
      
      <Button variant="contained" onClick={onClose} color="secondary">
        Cancelar
      </Button>
      <ModalAdiciona />
    </div>
  );

    return (
      <>
      <div>
        <button type="button" onClick={handleOpen}>
          Adicionar Funcionário
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>  
      </>
    );
  
};

export default ModalAdiciona;