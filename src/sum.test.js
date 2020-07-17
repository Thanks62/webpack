// import sum from './storage/sum.js';
// test('1+2=3',()=>{
//     expect(sum(1,2)).toBe(3);
// })
import {GetData,SetData} from './storage/storage.js';
test("should set data into localStorage",()=>{
    SetData("test","test");
    expect(localStorage.setItem).toHaveBeenLastCalledWith("test","\"test\"");
    expect(localStorage.__STORE__["test"]).toBe("\"test\"");
})
test("should get data from localStorage",()=>{
    expect(GetData("test")).toBe("\"test\"");
})