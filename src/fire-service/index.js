const fireService = {
  getURLbase() {
    const isDev = process.env.NODE_ENV == "development";
    const devURL = "http://localhost:3001/";
    const realURL = null; //<- TODO make this real at some point...
    return isDev ? devURL : realURL;
  },

  getYear: (y, successCB, errorCB) => {
    let req = "fires/year=" + y.toString();
    let urlBase = fireService.getURLbase();

    fetch(urlBase + req)
      .then(res => {
        if (res.ok) successCB(y, res);
        else errorCB(y, res);
      })
      .catch(err => {
        errorCB(err);
      });
  }
};

export { fireService };
