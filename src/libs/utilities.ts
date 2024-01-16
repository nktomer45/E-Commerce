
export const schemaTranform = (doc:any, ret:any) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  };