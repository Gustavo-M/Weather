import { useState } from "react";
import axios from "axios";

import useStyles from "./App.styles"

import { Button, Grid, TextField } from '@material-ui/core';

const App = () => {

    const classes = useStyles();

    const [ form, setForm ] = useState({
        city: "",
    });
    const handleSearchCity = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=chave&q=${form.city}&lang=pt`)
            .then(response => {
                console.log(response.data);
            })
    }

    const handleInputCity = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        })
    };
    return (
        <>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={3} className={classes.wrap}>
                    <h1 className={classes.title}>Previsão do Tempo</h1>
                    <p className={classes.subTitle}>Digite o nome da sua cidade para conferir como está o clima.</p>
                    <div className={classes.divField}>
                        <TextField
                            variant="outlined"
                            size="small"
                            className={classes.field}
                            name="city"
                            value={form.city}
                            onChange={handleInputCity}
                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleSearchCity()}
                    >
                        Pesquisar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

export default App