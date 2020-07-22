const storage=window.localStorage;
export const SetData=(sto,data)=>{
    storage.setItem(sto,JSON.stringify(data));
};
export const GetData=(sto)=>{
    return storage.getItem(sto);
};

// export const getRequestData(){
//     axios.get('http://loacalhost:9000/',{
//         params:{
//             id:'test'
//         }
//     }).then((res)=>{
//         console.log(res);
//     })
// }
