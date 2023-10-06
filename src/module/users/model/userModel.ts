import mongoose from "mongoose";
import { Schema } from 'mongoose';

const userSchema: Schema = new Schema({

   
    token: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    emailVerifiedAt: {
        type: String,
        required: false
    },
    azureId:{
        type: String,
        required: false
    },
    tenantId: {
        type: String,
        required: false
    },
    siteId: {
        type: Array,
        required: true
    },
    zoneId: {
        type: String,
        required: false
    },
    deletedSite: {
        type: String,
        required: false
    },
    roleId: {
        type: String,
        required: false
    },
    roleName: {
        type: String,
        required: false
    },
    isPlatformRole: {
        type: String,
        required: false
    },
    homeSite: {
        type: String,
        required: false
    },
    createdBy: {
        type: String,
        required: false
    },
    updatedBy: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        required: false
    },
    updatedAt: {
        type: Date,
        required: false
    },
    deletedAt: {
        type: Date,
        required: false
    },
 }
)


let User = mongoose.model('user', userSchema);
export default User;