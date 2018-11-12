/*  --------------------
 *  product 产品信息汇总.
 *  The data collection of company products.
 *  Owner Eking <ekingwee@gmail.com>
 *  --------------------  */
import liposuction from "./product/liposuction"; //吸脂塑性
import breast from "./product/breast";           //胸部整形
import nose from "./product/nose";               //鼻部整形
import eye from "./product/eye";                 //眼部整形
import privacy from "./product/privacy";         //私密整形
import face from "./product/face";               //面部整形
import antifading from "./product/antifading";   //抗衰整形
import skin from "./product/skin";               //美肤

var products = [
    liposuction,
    breast,
    nose,
    eye,
    privacy,
    face,
    antifading,
    skin
];
export default products;