/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
// import { makeStyles } from '@material-ui/core/styles';



export default function ComboBox() {
    return (
        <Autocomplete
        id="combo-box-demo"
        options={top100Films}
        renderInput={(params) => <TextField {...params} label="Funcionário"  variant="outlined" />}
        />
    );
}

const top100Films = ["OI"]