const findIndexForm = (indexName: string, formData: any[]) => {
  return formData[formData.findIndex((value) => value.name == indexName)]
    .value;
};

export { findIndexForm }
