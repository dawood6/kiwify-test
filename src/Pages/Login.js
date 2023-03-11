import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
  return (
    <main>
      <section className="w-full min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={Logo} alt="kiwify" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Entrar na sua conta
          </h2>
          <span className="mt-2 text-base leading-5 text-gray-600 flex justify-center">
            Ou
            <Link to="/signup">
              <span className="ml-1 font-[400] text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                fazer cadastro
              </span>
            </Link>
          </span>
        </div>
        <div className="w-full mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("O e-mail deve ser válido")
                .required("Esse campo é obrigatório"),
              password: Yup.string().required("Esse campo é obrigatório"),
            })}
            onSubmit={(values) => {}}
          >
            {() => (
              <Form className="w-full bg-white py-8 px-4 shadow space-y-6 sm:rounded-lg sm:px-10">
                <Field
                  label="E-mail"
                  type="email"
                  name="email"
                  render={({ field, form: { touched, errors } }) => (
                    <Input
                      field={field}
                      label="E-mail"
                      type="email"
                      name="email"
                      isError={touched.email && errors.email}
                      helperText={errors.email}
                    />
                  )}
                />

                <Field
                  label="Senha"
                  type="password"
                  name="password"
                  render={({ field, form: { touched, errors } }) => (
                    <Input
                      field={field}
                      label="Senha"
                      type="password"
                      name="password"
                      isError={touched.password && errors.password}
                      helperText={errors.password}
                    />
                  )}
                />
                <div
                  className="flex items-center justify-end"
                  style={{ marginTop: 8 }}
                >
                  <div className="text-sm leading-5">
                    <Link to="/">
                      <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        Esqueceu a senha?
                      </span>
                    </Link>
                  </div>
                </div>
                <Button label="Entrar" />
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default Login;
