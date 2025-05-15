import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  campaign_name: Yup.string().required("Campaign Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
    name: Yup.string().required("Name is required"),
});

export const validationSchemaManageSender = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
      name: Yup.string().required("Name is required"),
  });
  