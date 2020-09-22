import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";

import { Typography, TextField } from "@material-ui/core";

import { LocalGasStation, Settings } from "@material-ui/icons";

import "./StarterConfig.global.scss";



export default function StarterConfig() {
  return <div className="root">
    {/* Left content */}
    <div className="left-content">
      <div>
        <Settings className="icon-setting" color="primary" />
      </div>

      <Typography variant="h6">
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
          />
          <TextField
            id="mail"
            name="mail"
            label="Votre adresse mail"
            placeholder="ex: restaulabonnebouffe@gmail.com"
            variant="outlined"
            size="small"
          />
          <TextField
            id="serverIP"
            name="ServerIP"
            label="Adresse IP du serveur local"
            variant="outlined"
            size="small"
          />
          <TextField
            id="SertverPort"
            name="ServerPort"
            label="Port du serveur local"
            variant="outlined"
            size="small"
          />
        </div>

        <div className="right-form">
          <div>Image picker</div>
        </div>
      </form>
    </div>

    {/* Right content */}
    <div className="right-content">
      <div>
        <LocalGasStation />
      </div>
      <div>
        <ul className="text-list">
          <li>
            <div>Menu intéractif pour vos clients</div>
          </li>
          <li>
            <div>Gérer les commandes</div>
          </li>
          <li>
            <div>Menu intéractif pour vos clients</div>
          </li>
          <li>Faites payez vos clients</li>
        </ul>
      </div>
    </div>
  </div>;
}
