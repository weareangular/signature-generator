const validateValue = (value, defaultValue) => {
  if (value) {
    return (
      value !== "" || value || (typeof value !== "undefined" && value !== null)
    );
  } else {
    return (
      defaultValue !== "" &&
      defaultValue &&
      typeof defaultValue !== "undefined" &&
      defaultValue !== null
    );
  }
};

export { validateValue };
