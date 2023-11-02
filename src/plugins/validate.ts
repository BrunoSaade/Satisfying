const validate = {
  email_validator(value: string) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(value)
  },
} 

const { email_validator } = validate;

export { email_validator };