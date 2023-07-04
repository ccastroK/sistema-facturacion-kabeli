export const formSocioMock: any[] = [ // tecnical debt
  {
    id: 1,
    label: "Nombre",
    name: "name",
    placeholder: "Nombre y Apellido",
    type: "text",
    value: "",
    referenceTexts: [
      {
        state: "info",
        text: "Aquí debe poner su nombre",
        icon: "faInfoCircle",
      },
    ]
  },
  {
    id: 2,
    label: "Correo electrónico personal",
    name: "email",
    placeholder: "nombre@gmail.com",
    type: "text",
    value: "",
  },
  {
    id: 3,
    label: "Teléfono",
    name: "phoneNumber",
    placeholder: "12345678",
    type: "text",
    value: "",
  },
  {
    id: 4,
    label: "Comuna",
    name: "commune",
    type: "select",
    options: ["Santiago", "Providencia", "La Cisterna"],
    value: 0,

  },
  {
    id: 5,
    label: "Dirección",
    name: "address",
    placeholder: "Dirección #0000",
    type: "text",
    value: "",
  },
  {
    id: 6,
    label: "Fecha de nacimiento",
    name: "birthdate",
    type: "text",
    placeholder: "",
    value: "",
  },
];
