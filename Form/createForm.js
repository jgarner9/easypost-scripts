const createForm = async (shipment, type, options) => {
  const form = shipment.generateForm(shipment.id, type, options);
  return form;
};

export { createForm };
