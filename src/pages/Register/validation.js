const rules = {
  full_name: {
    required: { value: true, message: "fullname cannot blank" },
    maxLength: { value: 500, message: "max char 500" },
  },
  email: {
    required: { value: true, message: "email cannot blank" },
    maxLength: { value: 225, message: "max char 225" },
    // check email pattern
    pattern: {
      value: /^([\w-.]+@([\w-]+.)+[\w-]{2,4})?$/,
      message: "email invalid",
    },
  },
  password: {
    required: { value: true, message: "password cannot blank" },
    maxLength: { value: 225, message: "max char 225" },
  },
  password_confirmation: {
    required: { value: true, message: "password cannot blank" },
  },
};

export { rules };
