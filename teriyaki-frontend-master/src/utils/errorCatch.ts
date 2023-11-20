export const errorCatch = (error: any) => {
  if (error) {
    if (error?.response) {
      return error.response.data.message;
    }
    return error;
  }
  return null;
};
