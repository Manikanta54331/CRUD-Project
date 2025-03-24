const catchAsync = (fn) => {
    return async (req, res) => {
      try {
        await fn(req, res);
      } catch (error) {
        res.status(500).json({ code: 500, message: "Internal Server Error", error: error.message });
      }
    };
  };
  
  module.exports = catchAsync;
  