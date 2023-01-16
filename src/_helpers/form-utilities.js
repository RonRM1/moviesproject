export const validateFormValues = (formValues) => {
  const errors = {};
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
//   const paswordPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  //email
  if (!formValues.email) {
    errors.password = "Email is required!"
} else if (!emailPattern.test(formValues.email)){
      errors.password = "this is not valid email format";

  }

//password
  if (!formValues.password) {
    errors.password = "Email is required!"
} else if (!emailPattern.test(formValues.email)){
      errors.password = "Password must be more than 6 characters!";

  }
};

