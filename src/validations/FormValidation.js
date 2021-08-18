// nice library
import * as yup from "yup";

export const schema = yup.object().shape({
  Name: yup.string().required(),
  Price: yup.number().required().positive(),
});
