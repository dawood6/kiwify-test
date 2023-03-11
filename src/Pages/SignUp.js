import React from "react";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUp = () => {
  return (
    <main>
      <section className="w-full min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img src={Logo} alt="kiwify" className="mx-auto h-12 w-auto" />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Criar nova conta
          </h2>
          <span className="mt-2 text-base leading-5 text-gray-600 flex justify-center">
            Ou
            <Link to="/">
              <span className="ml-1 font-[400] text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                entrar na sua conta existente
              </span>
            </Link>
          </span>
        </div>
        <div className="w-full mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <Formik
            initialValues={{ email: "", confirmEmail: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("O e-mail deve ser válido")
                .required("Esse campo é obrigatório"),
              confirmEmail: Yup.string()
                .email("O e-mail deve ser válido")
                .required("Esse campo é obrigatório")
                .oneOf([Yup.ref("email")], "Os dois e-mails devem ser iguais."),
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
                  label="Repetir e-mail"
                  type="email"
                  name="confirmEmail"
                  render={({ field, form: { touched, errors } }) => (
                    <Input
                      field={field}
                      label="Repetir e-mail"
                      type="email"
                      name="confirmEmail"
                      isError={touched.confirmEmail && errors.confirmEmail}
                      helperText={errors.confirmEmail}
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

                <div>
                  <label className="relative flex items-start mt-2">
                    <div className="flex items-center h-5">
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer accent-[#5850ec] rounded-xl"
                      />
                    </div>
                    <div className="ml-2 text-sm leading-5">
                      <span className="font-medium text-gray-700">
                        Eu li e aceito os{" "}
                        <a
                          href="https://kiwify.com.br/termos-de-uso"
                          target="_blank"
                          className="underline"
                        >
                          {" "}
                          termos de uso
                        </a>
                        ,{" "}
                        <a
                          href="https://kiwify.com.br/licenca-de-uso-software"
                          target="_blank"
                          className="underline"
                        >
                          {" "}
                          termos de licença de uso de software
                        </a>
                        ,{" "}
                        <a
                          href="https://kiwify.com.br/politica-de-conteudo"
                          target="_blank"
                          className="underline"
                        >
                          {" "}
                          política de conteúdo
                        </a>{" "}
                        da Kiwify{" "}
                      </span>{" "}
                    </div>
                  </label>
                </div>

                <Button label="Criar conta" />
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
