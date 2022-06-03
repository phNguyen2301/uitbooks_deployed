export const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for cookies
  const options = {
    expiresIn: 24 * 60 * 60 * 100,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
    options,
  });
};
