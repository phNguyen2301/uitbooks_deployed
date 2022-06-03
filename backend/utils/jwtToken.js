export const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // Options for cookies
  const options = {
    expireIn: process.env.JWT_EXPIRE,
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
    options,
  });
};
