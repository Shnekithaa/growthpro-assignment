export const validateForm = (formData) => {
  const errors = {};
  if (!formData.name.trim()) errors.name = 'Business name is required';
  if (!formData.location.trim()) errors.location = 'Location is required';
  return errors;
};
