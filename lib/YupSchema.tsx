import * as yup from "yup";

export const mainLoginSchema = yup
  .object({
    email: yup
      .string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required')
  })
  .required();
export const mainWalletTopUpSchema = yup
  .object({
    amount: yup.string().required('amount is required')
  })
  .required();
export const interestSelectSchema = yup
  .object({
    interest: yup
      .array()
      .of(yup.string().required())
      .min(1, 'Please select at least one interest')
      .required('Interest is required')
  })
  .required();
export const uploadImageSchema = yup
  .object({
    image: yup
      .mixed()
      .required('Image is required')
      .test('fileType', 'Unsupported File Format', (value) => {
        return value instanceof File
          ? ['image/jpeg', 'image/png', 'image/gif'].includes(value.type)
          : true;
      })
      .test('fileSize', 'File Size is too large', (value) => {
        return value instanceof File ? value.size <= 5000000 : true; // 5MB
      })
  })
  .required();
 export const loginSchema = yup
 .object({
   first_name: yup.string().required("First name is required"),
   last_name: yup.string().required("Last name is required"),
   email: yup
     .string()
     .email("Must be a valid email")
     .required("Email is required"),
   password: yup
     .string()
     .min(8, "Password must be at least 8 characters long")
     .required("Password is required"),
   // country_id: yup
   //   .unknown()
   //   .required("Country must be selected")
   //   // .required("Country is required"),
 })
 .required();


 export const UsernameSchema = yup
 .object({
   username: yup.string().required("Username is required"),
   day: yup.string().required("Day is required"),
   month: yup.string().required("Month is required"),
   year: yup.string().required("Year is required"),
   date_of_birth: yup.string().required("Year is required"),
   female: yup.string().required("Gender is required"),
   male: yup.string().required("Gender is required"),
   gender: yup.string().required("Gender is required"),
 })
 .required();

export const CreateHiveSchema = yup.object().shape({
  name: yup.string().required("Title is required"),
  interest_id: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  visiblity: yup.string().required("Visibility is required"),
  type: yup.string().required("Type is required"),
  image: yup.mixed().required("Image is required"),
});
