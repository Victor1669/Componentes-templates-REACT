/* FORMULÁRIOS */
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const schema = yup
  .object({
    fNome: yup.string().required("O nome é obrigatório."),
    fEmail: yup
      .string()
      .email("Digite um email válido.")
      .required("O email é obrigatório."),
    fSenha: yup
      .string()
      .min(6, "A senha deve conter no mínimo 6 caracteres.")
      .required("A senha é obrigatória."),
    fConfirmSenha: yup
      .string()
      .required("Por favor confirme a senha.")
      .oneOf([yup.ref("fSenha")], "As senhas devem ser iguais."),
  })
  .required();

import "./Teste.css";
import formLogo from "./formulario-de-registro.png";

export default function Formulario() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (userData) => {
    console.log(userData);
  };

  return (
    <div className="formCont">
      <h1>Formulário</h1>
      <form
        id="formLogin"
        className="formLogin"
        onSubmit={handleSubmit(onSubmit)}
      >
        <img className="formLogo" width={75} src={formLogo}></img>
        <div className="fieldCont">
          <label>
            Digite seu nome:
            <input type="text" {...register("fNome", { required: true })} />
          </label>
          <span className="inputErrorSpan">{errors.fNome?.message}</span>
        </div>
        <div className="fieldCont">
          <label>
            Digite seu email:
            <input type="text" {...register("fEmail", { required: true })} />
          </label>
          <span className="inputErrorSpan">{errors.fEmail?.message}</span>
        </div>
        <div className="fieldCont">
          <label>
            <p>Digite sua senha:</p>
            <input
              type="password"
              {...register("fSenha", { required: true })}
            />
          </label>
          <span className="inputErrorSpan">{errors.fSenha?.message}</span>
        </div>
        <div className="fieldCont">
          <label>
            Confirmar a senha:
            <input
              type="password"
              {...register("fConfirmSenha", { required: true })}
            />
          </label>
          <span className="inputErrorSpan">
            {errors.fConfirmSenha?.message}
          </span>
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
