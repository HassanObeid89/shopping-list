import * as yup from "yup";

// export const getDataLS = () => {
//   const data = localStorage.getItem("newitems");
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };


  

export const schema = yup.object().shape({
  
  Name: yup.string().required(),
  Price: yup.number().required().positive(),
  
});
