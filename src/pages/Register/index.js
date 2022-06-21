import React from "react";
import {
  Button,
  Card,
  FormControl,
  InputPassword,
  InputText,
  LayoutOne,
} from "upkit";
import { useForm } from "react-hook-form";
import { rules } from "./validation";
import { registerUser } from "../../api/auth";

export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();

  const onSubmit = async (formData) => {
    // alert(JSON.stringify(formData));

    let { password, password_confirmation } = formData;

    if (password !== password_confirmation) {
      return setError("password_confirmation", {
        type: "equality",
        message: "Konfirmasi password harus sama",
      });
    }

    let { data } = await registerUser(formData);

    if (data.error) {
      let fields = Object.keys(data.fields);

      fields.forEach((field) => {
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        });
      });
    }
  };

  return (
    <>
      <LayoutOne size="small">
        <Card color="white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl errorMessage={errors.full_name?.message}>
              <InputText
                name="full_name"
                placeholder="Nama Lengkap"
                fitContainer
                ref={register(rules.full_name)}
              />
            </FormControl>
            <FormControl errorMessage={errors.email?.message}>
              <InputText
                name="email"
                placeholder="Email"
                fitContainer
                ref={register(rules.email)}
              />
            </FormControl>
            <FormControl errorMessage={errors.password?.message}>
              <InputPassword
                name="password"
                placeholder="Password"
                fitContainer
                ref={register(rules.password)}
              />
            </FormControl>
            <FormControl errorMessage={errors.password_confirmation?.message}>
              <InputPassword
                name="password_confirmation"
                placeholder="Password Confirmation"
                fitContainer
                ref={register(rules.password_confirmation)}
              />
            </FormControl>
            <Button size="large" fitContainer>
              Register
            </Button>
          </form>
        </Card>
      </LayoutOne>
    </>
  );
}
