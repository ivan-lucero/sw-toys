import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import "./form.css";
import Swal from "sweetalert2";

const SummaryForm = ({ total, price_format }) => {
  const regExp = {
    telephone:
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  };
  const schema = Yup.object().shape({
    name: Yup.string()
      .min(2, "El nombre ingresado es demasiado corto")
      .required("El nombre es obligatorio"),
    email: Yup.string()
      .email("El valor ingresado no es un email")
      .required("el email es obligatorio")
      .trim("El email no permite espacios en blanco"),
    telephone: Yup.string()
      .matches(regExp.telephone, "El valor ingresado no es un telefono")
      .max(15),
    address: Yup.string()
      .required("La direccion es obligatoria")
      .max(254, "La dirección es demasiado larga"),
  });

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        name: "",
        email: "",
        telephone: "",
        address: "",
        method: 0,
      }}
      onSubmit={(values) => {
        let inputs_method = document.querySelectorAll("input[type='radio']");
        let method_value = false;
        console.log(inputs_method);
        inputs_method.forEach((input) => {
          if (input.checked) method_value = input.value;
        });
        if (!method_value) {
          Swal.fire({
            icon: "error",
            title: "Debe seleccionar un metodo de pago",
          });
          return;
        }
        Swal.fire({
          icon: "success",
          title: "Felicidades! Ha realizado su compra",
          text: "En instantes nos contactaremos para realizar el envío",
        });
        // alert(JSON.stringify(values));
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        touched,
        errors,
      }) => (
        <Form className="form p-5">
          <section className="card-summary p-5 my-4">
            <h2 className="hero-2 mb-3">Metodo de pago</h2>
            <div>
              <div className="d-flex align-items-center text">
                <input type="radio" id="method1" name="method" value="1" />
                <label className="ms-2" for="method1">
                  Deposito o transferencia bancaria
                </label>
              </div>
              <div className="d-flex align-items-center text">
                <input type="radio" id="method2" name="method" value="2" />
                <label className="ms-2" for="method2">
                  Mercado pago - Ualá
                </label>
              </div>
              <div className="d-flex align-items-center text">
                <input type="radio" id="method3" name="method" value="3" />
                <label className="ms-2" for="method3">
                  Rapipago - PagoFacil
                </label>
              </div>
            </div>
            <p className="hero-2 mt-3">
              TOTAL: {`$${parseInt(total)} ${price_format}`}
            </p>
          </section>
          <section className="card-summary p-5 my-4">
            <h3>CONTACTO:</h3>
            <Form.Group className="mb-3">
              <Form.Label className="text label">Nombre:</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                isValid={touched.name && !errors.name}
                isInvalid={touched.name && errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text label">Email:</Form.Label>
              <Form.Control
                className="input"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isValid={touched.email && !errors.email}
                isInvalid={touched.email && errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text label">
                Teléfono: (opcional)
              </Form.Label>
              <Form.Control
                className="mb-4 input"
                type="text"
                name="telephone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.telephone}
                isValid={touched.telephone && !errors.telephone}
                isInvalid={touched.telephone && errors.telephone}
              />
              <Form.Control.Feedback type="invalid">
                {errors.telephone}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="text label">Dirección:</Form.Label>
              <Form.Control
                className="input"
                type="text"
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address}
                isValid={touched.address && !errors.address}
                isInvalid={touched.address && errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <button
              className="button"
              type="submit"
              onClick={handleSubmit}
              value="Enviar"
            >
              Comprar
            </button>
          </section>
        </Form>
      )}
    </Formik>
  );
};

export default SummaryForm;
