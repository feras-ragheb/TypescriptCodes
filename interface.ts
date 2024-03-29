interface IUser{
    userName: string;
    country?: string; // optional you can create the object without it.
    age: number;
    isMarried: boolean;
    isStatus: boolean;
}


const userProfile: IUser = {
    userName:"Tim",
    country: "UK",
    age: 23,
    isMarried: false,
    isStatus: true

}

console.log(userProfile)
