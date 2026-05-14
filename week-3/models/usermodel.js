import {Schema,model} from 'mongoose';

//create user schema(username,password,age)
const userSchema=new Schema({
    username:{
        type:String,
        required:[true,'username is required'],
        minLength:[3,"mini length should be 3"],
        maxLength:[8,"max length is exceeded"]
    },
    password:{
        type:String,
        required:[true,'password is required'],
        minLength:[3,"mini length should be 3"],
        maxLength:[8,"max length is exceeded"]
    },
    age:{
        type:Number,
        required:[true,'age is required'],
        min:[18,'min age should be 18 years'],
        max:[25,'max age should be 25 years']
    }
});

//create user model with the schema
export const UserModel =model('user',userSchema)
