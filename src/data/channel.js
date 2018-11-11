/*  --------------------
 *  channel 频道数据汇总.
 *  The data collection of website.
 *  Owner Eking <ekingwee@gmail.com>
 *  --------------------  */
import liposuction from "./liposuction"; //吸脂塑性
import breast from "./breast";           //胸部整形
import nose from "./nose";               //鼻部整形
import eye from "./eye";                 //眼部整形
import privacy from "./privacy";         //私密整形
import face from "./face";               //面部整形
import antifading from "./antifading";   //抗衰整形
import skin from "./skin";               //美肤
import zone from "./zone";               //活动专区
import team from "./team";               //专家团队
import brand from "./brand";             //品牌介绍

var channles = [
    liposuction,
    breast,
    nose,
    eye,
    privacy,
    face,
    antifading,
    skin,
    zone,
    team,
    brand
];
export default channles;