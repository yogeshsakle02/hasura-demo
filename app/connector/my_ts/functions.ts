/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
export function hello(name?: string) {
  return `hello ${name ?? "world"}`;
}


export function hi(name?: string) {
  return `hi ${name ?? "world"}`;
}


/**
 * @readonly Exposes the function as an NDC function (the function should only query data without making modifications)
 */
  
export function userInfo(name?: string) {
  return {
    name: "yogesh",
    age: 25,
    email: "Yogesh@gemsessnece.com",
    dob: new Date(),
    isMarried: false,
    mobileNo: 1234567890,
      address: [{
      addressType: 'home'  ,
      houseNo: 123,
      homeAddress: "sattelite township",
      area: "bijalpur",
      },
      {
      addressType: 'office'  ,
      houseNo: 321,
      homeAddress: "futikhothi",
      area: "indore",
    }]
  }
}
