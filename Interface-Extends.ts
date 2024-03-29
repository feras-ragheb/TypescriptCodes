interface IUser{
    userName: string;
    country?: string;
    age: number;
    isMarried: boolean;
    isStatus: boolean;
}

interface INewProfile extends IUser{
    address: string;
    urlImage?: string;
}


const newProfile: INewProfile ={
    userName:"Omar",
    age: 33,
    isMarried:true,
    isStatus:true,
    address:"Ramallah"

}

console.log("New User:" , newProfile)
