export interface UserModel{
    id: number;
    name: { 
      firstName: string;
      LastName: string;
    };
    email: string;
    phone: string;
    address: string;
    password: { 
      pwd: string;
      confirmPwd: string;
    };
    gender: string; 

}