export const formTransfer = (form, id) => {
  return {
    type: "FORM_TRANSFER",
    data: form,
    id,
  };
};
