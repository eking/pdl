/*  --------------------
 *  infomation 公司信息汇总.
 *  The data collection of company infomations.
 *  Owner Eking <ekingwee@gmail.com>
 *  --------------------  */
import zone from "./infomation/zone";               //活动专区
import team from "./infomation/team";               //专家团队
import brand from "./infomation/brand";             //品牌介绍

var infomations = [
    zone,
    team,
    brand
];
infomations.unshift({
    id: 1,
    name: "首页",
    key: ""
});
export default infomations;