import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  InputPassword,
  InputText,
  LayoutOne,
} from "upkit";
import { rules } from "./validation";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/auth";

const statusList = {
  idle: "idle",
  proccess: "proccess",
  success: "success",
  error: "error",
};

export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();
  let [status, setStatus] = useState(statusList.idle);

  const onSubmit = async (formData) => {
    let { password, password_confirmation } = formData;
    if (password !== password_confirmation) {
      return setError("password_confirmation", {
        type: "equality",
        message: "password and confirmation not same",
      });
    }
    setStatus(statusList.proccess);
    let { data } = await registerUser(formData);
    if (data.error) {
      let fields = Object.keys(data.fields);
      fields.forEach((field) => {
        setError(field, {
          type: "server",
          message: data.fields[field]?.property?.message,
        });
      });
      setStatus(statusList.error);
    }
    setStatus(statusList.success);
  };
  return (
    <>
      <LayoutOne size="small">
        <Card color="white">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* full name input */}
            <FormControl errorMessage={errors.full_name?.message}>
              <InputText
                name="full_name"
                placeholder="Your Full Name"
                fitContainer
                ref={register(rules.full_name)}
              />
            </FormControl>
            {/* email input */}
            <FormControl errorMessage={errors.email?.message}>
              <InputText
                name="email"
                placeholder="Your Email"
                fitContainer
                ref={register(rules.email)}
              />
            </FormControl>
            {/* password input */}
            <FormControl errorMessage={errors.password?.message}>
              <InputPassword
                name="password"
                placeholder="Password"
                fitContainer
                ref={register(rules.password)}
              />
            </FormControl>
            {/* password confirmation */}
            <FormControl errorMessage={errors.password_confirmation?.message}>
              <InputPassword
                name="password_confirmation"
                placeholder="Password Confirmation"
                fitContainer
                ref={register(rules.password_confirmation)}
              />
            </FormControl>
            <Button
              size="large"
              fitContainer
              disabled={status === statusList.proccess}
            >
              {status === statusList.proccess ? "Proccessing" : "Sign Up"}
            </Button>
          </form>
        </Card>
      </LayoutOne>
    </>
  );
}
