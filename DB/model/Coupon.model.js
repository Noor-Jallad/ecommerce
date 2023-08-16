import mongoose, {Schema,model,Types} from 'mongoose';
const couponSchema= new Schema({
 name:{
    type:String,
    required:true,
    unique:true},
amount:{
    type:Number,
    default:1},
usedBy:[{
    type:Types.ObjectId,
    ref:'User'}]//required true after prototype
,
expiredDate:{
    type:Date,
    required:true}
,
createdBy:{
    type:Types.ObjectId,
    ref:'User',
    required: true
},
updatedBy:{
    type:Types.ObjectId,
    ref:'User',
    required: true
} },
{
timestamps:true
})
const couponModel = mongoose.models.Coupon ||  model('Coupon', couponSchema);
export default couponModel;