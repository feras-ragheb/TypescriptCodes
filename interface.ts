interface IUser{
    userName: string;
    country: string;
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
