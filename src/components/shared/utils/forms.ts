const findIndexForm = (indexName: string, formData: any[]) => {//tecnical debt
  return formData[formData.findIndex((value) => value.name == indexName)]
    .value;
};

export { findIndexForm }
