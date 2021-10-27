export const formatDate = (date) =>
  date.getDate().toString().padStart(2, 0) +
  "-" +
  date.getMonth().toString().padStart(2, 0) +
  "-" +
  date.getFullYear();

export const validateEmail = (email) => {
  let re = /\S+@\S+\.\S+/;
  return re.test(email);
}