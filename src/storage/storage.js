const storage=window.localStorage;
export const SetData=(sto,data)=>{
    storage.setItem(sto,JSON.stringify(data));
};
export const GetData=(sto)=>{
    return storage.getItem(sto);
};
