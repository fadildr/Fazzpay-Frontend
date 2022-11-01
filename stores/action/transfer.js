export const formTransfer = (form, id, data) => {
  return {
    type: "FORM_TRANSFER",
    form,
    id,
    data,
  };
};
