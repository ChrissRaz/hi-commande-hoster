const express = require('express');

//variable declarations
const PORT = process.env.PORT || 3007;

//principal app instantiation
const app = express();

export let intitServer = async () => {
  try {
    //NOTE put all configurations, connections and instantiations here

    //static dir configurations
    app.use(express.static('\\www'));

    //server launch
    let server = app.listen(PORT, () =>
      console.log(`server listening on http://localhost:${PORT}`)
    );
  } catch (error) {
    throw error;
  }
};
