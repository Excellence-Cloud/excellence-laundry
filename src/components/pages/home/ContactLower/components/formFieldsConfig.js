export const formFields = [
  {
    type: "text",
    name: "fullName",
    label: "fullNameLabel",
    placeholder: "fullNamePlaceholder",
    required: true,
  },
  {
    type: "email",
    name: "email",
    label: "emailLabel",
    placeholder: "emailPlaceholder",
    required: true,
  },
  {
    type: "tel",
    name: "phone",
    label: "phoneLabel",
    placeholder: "phonePlaceholder",
    required: false,
  },
  {
    type: "text",
    name: "address",
    label: "addressLabel",
    placeholder: "addressPlaceholder",
    required: true,
  },
  {
    type: "text",
    name: "companyName",
    label: "companyNameLabel",
    placeholder: "companyNamePlaceholder",
    required: false,
  },
  {
    type: "radio", // Adicionando o campo de seleção do serviço
    name: "serviceType",
    label: "serviceTypeLabel", // Deve estar na tradução
    required: true,
    options: [
      { value: "rental", label: "rentalService" },
      { value: "laundry", label: "laundryService" },
    ],
  },
  {
    type: "textarea",
    name: "message",
    label: "messageLabel",
    placeholder: "messagePlaceholder",
    required: true,
  },
];

export const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  companyName: "",
  serviceType: "", 
  message: "",
};