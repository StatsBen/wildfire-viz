const dateTools = {
  formatDateForQuery: date => {
    if (date instanceof Date) {
      let mm = date.getMonth();
      let dd = date.getDate();
      let yy = date.getFullYear();
      return yy + "-" + mm + "-" + dd;
    } else {
      console.error("Error! Not an instance of Date. Instead received: ");
      console.error(date);
      throw new Error();
    }
  }
};

export { dateTools };
