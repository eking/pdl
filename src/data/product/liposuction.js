/*  --------------------
 *  Liposuction 吸脂塑性.
 *  The data of liposuction.
 *  Owner Eking <ekingwee@gmail.com>
 *  --------------------  */
var liposuction = {
    id: 1,
    name: "吸脂塑性",
    key: "liposuction",
    list: ["面部脂肪填充", "面部吸脂", "手臂吸脂", "腰部吸脂", "臀部吸脂", "腿部吸脂", "脂肪移植"],
    details: [
        {
            type: "text",
            title: "适用人群",
            describe: [`单纯性肥胖者`, `局部比例失调`, `中年“发福”`, `顽固性肥胖者`]
        },
        {
            type: "sketch",
            title: "医院特色",
            describe: ["水动力环形吸脂技术"],
            img: "../assets/liposuction1.jpg"
        },
        {
            type: "list",
            title: "注意事项",
            describe: [
                "必须进行身体的检查，通过检查来确定自己的心肝肺肾等内脏都没有疾病；",
                "前三天须进行洗浴，尽量少吃一些含渣的食物；",
                "凝血机制异常和正处于月经期的女性，均应禁做吸脂术；",
                "术前与医生进行沟通，确定自己是否适合进行腹部吸脂手术；",
                "术前6个小时不能进食；",
                "严格遵医嘱（含口头医嘱）执行术后治疗和护理；",
                "14天内要多吃蔬菜，以防便秘;使用抗菌素，防止感染；",
                "术后一个月内禁止做激烈的运动，术后1-3个月穿弹力塑身衣塑形固定；",
                "未拆线之前，患部须避免与水接触；",
                "忌食辛辣、海鲜、烟酒等刺激食物；"
            ]
        },
        {
            type: "question",
            title: "问答中心Q&A",
            describe: [
                {
                    q: "吸脂后皮肤会凹凸不平吗？",
                    a: "肯定不会的。您说的那种情况一般在90年代的时候比较多，一般存在两个原因，一是医生的技术问题，所以术前一定选择正规的医院和专业医生，二是由于术后没有配合穿塑身衣造成的，我们医院是正规医院，而且我们专家都是有20多年的临床经验和精湛的技术，再加上术后您的配合凹凸不平是可以避免的。"
                },
                {
                    q: "吸脂后会留下疤痕吗？",
                    a: "不会的，手术一般在局麻或者全麻下操作的，就一个针眼大小的痕迹，随着时间的推移慢慢就不明显了，所以没有疤痕的。"
                },
                {
                    q: "吸脂之后能瘦多少斤？",
                    a: "是这样的，脂肪是很轻的，吸脂后体重不会变化很大，最重要是减少体积的变化和身体塑形，但是您会明显感觉到瘦了下来，尺寸减小、穿衣服更有型了。"
                },
                {
                    q: "做吸脂需要注意点什么吗？",
                    a: "术前6个小时不能进食，避开月经期;术后6小时后进食，不能吃海鲜及辛辣刺激性的食物，术后一到三个月不要做剧烈运动，要坚持穿塑身衣一到三个月配合术后恢复，有什么情况及时到医院复查。"
                }
            ]
        }
    ],
    items: [

    ],
};

export default liposuction;