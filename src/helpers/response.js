const response = ({ req, res, code = 909, message = '', data = {} }) => {
  try {
    return res.status(200).jsonp({
      code: code,
      message: message,
      data: data,
    });
  } catch (error) {
    return res.jsonp({
      code: 444,
      message: "Failed: " + error?.message,
      data: "",
    });
  }
};

// module.exports = response;
module.exports = {
  response,
};
