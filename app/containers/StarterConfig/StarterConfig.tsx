import React, { useState, useEffect } from 'react';
import MaskedInput from "react-text-mask";

import { Typography, TextField, Slide, FormControl, InputLabel, MenuItem, Select, Button } from "@material-ui/core";
import { Settings, AttachMoney, MenuBook, LowPriority, ListAlt } from "@material-ui/icons";


// import anime from "animejs";

import ImagePickerButton from "../../components/image-picker-button/ImagePickerButton";

import "./StarterConfig.global.scss";
import routes from '@/constants/routes.json';

import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';


let initAnimations = () => {
  // anime({
  //   targets: '.icon-setting',
  //   rotate: '1turn',
  //   loop: true,
  //   duration: 20000,
  //   easing: 'linear'
  // });

}


export default function StarterConfig() {

  useEffect(() => {
    initAnimations();
  });

  const dispatch = useDispatch();


  return <div className="root">
    {/* Left content */}
    <div className="left-content">
      <div>
        <Settings className="icon-setting" color="primary" />
      </div>

      <Typography variant="h5">
        Configuration minimale de l'application
        </Typography>

      <form action="#">
        <div className="left-form">
          <TextField
            id="name"
            name="name"
            label="Nom de votre établissement"
            placeholder="ex: Restaurant la bonne bouffe"
            variant="outlined"
            size="small"
            fullWidth
            focused
          />

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="lang">Langue par défaut</InputLabel>
            <Select
              id="lang"
              label="Langue par défaut"
            >
              <MenuItem value="en">
                <em>Anglais</em>
              </MenuItem>

              <MenuItem selected value="fr">
                <em>Français</em>
              </MenuItem>

              <MenuItem value="mg">
                <em>Malagasy</em>
              </MenuItem>

            </Select>
          </FormControl>

          <TextField
            id="mail"
            name="mail"
            label="Votre adresse mail"
            placeholder="ex: restaulabonnebouffe@gmail.com"
            variant="outlined"
            size="small"
            fullWidth
          />

          <TextField
            type="password"
            id="password"
            name="password"
            label="Mot de passe"
            placeholder=""
            variant="outlined"
            size="small"
            fullWidth
          />

          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel id="network-label">Choix de réseau</InputLabel>
            <Select
              id="network"
              label="Choix de réseau"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="serverIP"
            name="ServerIP"
            label="Adresse IP du serveur local"
            variant="outlined"
            size="small"
            fullWidth
          />
          <TextField
            id="SertverPort"
            name="ServerPort"
            label="Port du serveur local"
            variant="outlined"
            size="small"
            fullWidth
          />

          <Button
            className="start-btn"
            variant="contained" color="primary" onClick={() => {
              dispatch(push(routes.HOME))
            }}>
            Commencer
          </Button>

        </div>

        <div className="right-form">
          <div className="img-picker-btn">
            <ImagePickerButton title="Votre logo" />
          </div>
        </div>


      </form>


    </div>

    {/* Right content */}
    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1500}>

      <div className="right-content">

        {/* logo */}
        <div className="logo-section">
          <Typography variant="h3" color="textSecondary" >
            Hi-Commande
          </Typography>
        </div>


        <div className="text-list">

          <div className="text-item">
            <MenuBook className="icon-item" color="secondary" /> Menu intéractif pour vos visiteurs
          </div>

          <div className="text-item">
            <ListAlt className="icon-item" color="secondary" />Gérer les commandes de vos visiteurs
          </div>

          <div className="text-item">
            <AttachMoney className="icon-item" color="secondary" /> Faites payer vos visiteurs directement
          </div>

        </div>



      </div>

    </Slide>

  </div>;
}
