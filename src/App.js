import { useState } from "react";
import axios from "axios";

import useStyles from "./App.styles";

import WeatherCard from "../src/components/WeatherCard";

import { Button, Grid, TextField } from '@material-ui/core';

const App = () => {

    const classes = useStyles();

    const [form, setForm] = useState({
        city: "",
    });

    const [weatherData, setWeatherData] = useState(null);

    const handleSearchCity = () => {
        axios.get(`http://api.weatherapi.com/v1/current.json?key=chave&q=${form.city}&lang=pt`)
            .then(response => {
                if (response.status === 200) {
                    setWeatherData(response.data);
                }
            })
            .catch((error) => {
                console.log('Houve um erro.', error.message || error)
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
                    <p className={classes.subTitle}>Digite o nome da sua cidade para <br />conferir o clima.</p>
                    <div className={classes.divField}>
                        <TextField
                            variant="outlined"
                            size="small"
                            className={classes.field}
                            name="city"
                            value={form.city.normalize("NFD").replace(/[^a-zA-Z\s]/g, "")}
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
            <Grid container justifyContent="center">
                <Grid item xs={12} md={3} className={classes.wrap}>
                    {weatherData ?
                        <WeatherCard
                            text={weatherData.current.condition.text}
                            temp={`${weatherData.current.temp_c.toFixed()}C`}
                            icon={weatherData.current.condition.icon}
                            wind={`${weatherData.current.wind_mph}km`}
                        />
                        : null
                    }
                </Grid>
            </Grid>
        </>
    )
}

export default App