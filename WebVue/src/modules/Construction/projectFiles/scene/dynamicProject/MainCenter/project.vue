<template>
<div class="">
    <div class="pr10">
        <div class="analyItem">
            <p class="analyItemTit tx-center">状态</p>
            <div class="analyItemCon">

            </div>
        </div>
    </div>
    <div class="thinScroll pr10" v-scrollHeight="10">
        <router-link tag="div" :to="routerPath('projectScene')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">现场</p>
            <div class="analyItemCon">
                <span><span class="circlemark circlemark-lightGreen">完</span></span>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">项目</p>
            <div class="analyItemCon">
                  <p class="col-md-4">
                    <span class="c999">编号</span> <span>ZZ19038</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">名称</span> <span class="c666666" title="小李补胎河南运营中心室内装饰工程装饰工程">小李补胎河</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">单号</span> <span>20-206878</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">类型</span>
                    <span>办公</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">总金额</span> <span>270,000.00元</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">二维码</span>
                    <span class="dis-il-block two-wei"><img width="25" height="25" src="https://piapi.rxjy.com/actionapi/KGManage/GetProjectQRByRwdId?rwdId=20-206878&amp;width=150&amp;height=150"></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">甲方</p>
            <div class="analyItemCon">
                <span class="cBlue deatailBtn_three">详情<strong class="Arrow">∨</strong></span>
                <div class="mt10 clearfix">
                    <p class="col-md-4">
                        <span class="c999" title="20">地区</span>
                        <span>郑州</span>
                    </p>
                    <p class="col-md-4">
                        <span class="c999">公司</span>
                        <span title="河南小李补胎服务有限公司">河南小李补胎服</span>
                    </p>
                    <p class="col-md-4">
                        <span class="c999">甲方地址</span>
                        <span title=""></span>
                    </p>
                </div>
                <p class="col-md-4">
                    <span class="c999">工程地址</span>
                    <span title="郑州市市中原区西三环大学科技园东区10号楼2楼">郑州市市中原区</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">甲方姓名</span>
                    <span title="李保正">李保正</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">甲方电话</span>
                    <span>****</span>
                </p>
                <div class="hide kuanxiangDetail_three div_kehuMsg"><p class="col-md-4"><span class="cLightGray pr8">年龄</span><span class="spanText">30岁-40岁</span></p><p class="col-md-4"><span class="cLightGray pr8">性格</span><span class="spanText"></span></p><p class="col-md-4"><span class="cLightGray pr8">注重</span><span class="spanText">价格</span></p><p class="col-md-4"><span class="cLightGray pr8">类型</span><span class="spanText">办公</span></p><p class="col-md-4"><span class="cLightGray pr8">面积</span><span class="spanText">0.00</span></p><p class="col-md-4"><span class="cLightGray pr8">身份</span><span class="spanText">老板</span></p></div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">日期</p>
            <div class="analyItemCon">
                <div class="analyItemCon  clearfix">
                    <p class="col-md-4">
                        <span class="c999">签订日期</span>
                        <span>2019-08-26</span>
                    </p>
                    <p class="col-md-4">
                        <span class="c999">开工日期</span>
                        <span>2019-08-28</span>
                    </p>
                    <p class="col-md-4">
                        <span class="c999">工期</span>
                        <span>30</span>
                    </p>
                </div>
            </div>
        </div>
        <router-link tag="div" :to="routerPath('projectData')" class="analyItem anItemBor" active-class="anItemBor-active">
            <p class="analyItemTit tx-center">楼盘</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="c999">施工时间</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">防火等级</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">环保等级</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">保护材料</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">围挡</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">消防维保</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">空调维保</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">物业要求</span><span>无</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">&nbsp;</span><span></span>
                </p>
                <p class="col-md-4 hide">
                    <span class="c999">负责人电话</span><span>无</span>
                </p>
                <p class="col-md-4 hide">
                    <span class="c999">面积</span><span>无</span>
                </p>
                <p class="col-md-4 hide">
                    <span class="c999">保修期</span><span>无</span>
                </p>
                <p class="col-md-4 hide">
                    <span class="c999">维保公司</span><span>无</span>
                </p>
                <p class="col-md-4 hide">
                    <span class="c999">维保公司</span><span>无</span>
                </p>
            </div>
        </router-link>
        <div class="analyItem">
            <p class="analyItemTit tx-center">设计师</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="c999">姓名</span>
                    <span>井延淼</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">电话</span>
                    <span>15038009455</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">配合</span>
                    <span>无</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">合同</p>
            <div class="analyItemCon  clearfix">
                <p class="col-md-4 lh28 contract-pClcik">
                    <a href="javascript:" img="311587!https://imgcdn.wenes.cn/ProjectBusiness/Images/15668065007x9fB8RYmkWw1n0aQ29WAhmp.jpg#合同一页%0;311588!https://imgcdn.wenes.cn/ProjectBusiness/Images/156689889967Q2SjemyfB7zZ4QBbKZ0bGE.jpg#合同二页%0;311589!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566806527zZyChsa8QscZ0d5Z5iRKzNm8.jpg#合同三页%0;311590!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566806541AdGfTCyEy3wY9SwS2jiGMbyf.jpg#合同四页%0;311591!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566894275NB5sw6D5e3TSmk1ybnssRSMS.jpg#合同骑缝%0;311592!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566806418CSzQcji4AYi1bFW7PPHGrwir.jpg#授权委托书%0;311593!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566806387i7fGjKh6cySN36eMiNCKQbYD.jpg#身份证复印件%0">
                        <span class="cBlue">合同</span>
                        <span class="cBlue span_count">7</span>
                    </a>
                </p>
                <p class="col-md-4 lh28 contract-pClcik">
                    <a href="javascript:" img="311595!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566895526D252GjD9Cp6m355B3Z8N7deX.jpg#报价合同%0;311596!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566896906J6saM55pXY1ipWJ95isH5cRP.jpg#报价骑缝%0">
                        <span class="cBlue">报价</span>
                        <span class="cBlue">2</span>
                    </a>
                </p>

                <p class="col-md-4 lh28 contract-pClcik">
                    <a href="javascript:" img="311594!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566894241Z5DX7rKM7EeSz5dD76PENKG7.jpg#附件%0">
                        <span class="cBlue">其他</span>
                        <span class="cBlue">1</span>
                    </a>
                </p>

                <p class="col-md-4 lh28 contract-pClcik">
                    <a href="javascript:" img="311597!https://imgcdn.wenes.cn/ProjectBusiness/Images/15668962872CQ1cm25ATB2PcNmyhzeDWbk.jpg#甲方代购清单%0;311598!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566822805bGydsk6mik4T5sZzxG6neced.jpg#施工图骑缝%0">
                        <span class="cBlue">分项</span>
                        <span class="cBlue">2</span>
                    </a>
                </p>
                <p class="col-md-4 lh28 contract-pClcik">
                    <a href="javascript:" img="311601!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/15630091929NmFCS2ZHCmsf5aWaA1hBn5C.jpeg#量房手绘&amp;%0;311602!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/156300894009eiNRSkJ6RyfmJyM2FfBGPX.jpeg#大厦外立面&amp;%0;311603!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563008952baCk1WPiD21yFxbx9nJkaWbJ.jpeg#周边环境&amp;%0;311604!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/15630090144cNQTGSWB0jkkj8nJs8Ck6aJ.jpg#室内全景照片&amp;%0;311605!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563009058AW0kb4KWe5TXdExnFszE1JHb.jpg#门窗&amp;%0;311606!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/15630090777N8ise606TSxKhpRGBeRA6kp.jpg#空调&amp;%0;311607!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/15630090862R9T2GSChhemaxnWnTFe0TfW.jpg#消防&amp;%0;311608!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/15630090951WpNPjrZBErESEMtKxYREBsN.jpg#强电箱&amp;%0;311609!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563009105j9xkjtPZAR21AcC41WsXCeib.jpg#弱电箱&amp;%0;311610!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563009115fJeEK3i8T2hSdh8CKpQhn6T7.jpg#上下水&amp;%0">
                        <span class="cBlue">现场照片</span>
                        <span class="cBlue">10</span>
                    </a>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">图纸</p>
            <div class="analyItemCon">
                <p class="col-md-4 contract-pClcik">
                    <a href="javascript:" img="311585!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563009031J52rMt0K0KtHxKcPPtPfZcp2.jpg#室内特殊结构照片%0;311586!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563420457RdiH2znTbcaZRs4pG7cEzKz8.jpg#原始结构图%0">
                        <span class="cBlue">效果图</span>
                        <span class="cBlue">2</span>
                    </a>
                </p>
                <p class="col-md-4 contract-pClcik">
                    <a href="javascript:" img="311582!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566820718eFByfs2xfGC7cN3s5B8JdzBC.jpg#点位图%0;311583!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Images/1563420479GNBAHw4JkNTQ8999z8rajCBM.jpg#平面图%0;311584!https://imgcdn.wenes.cn/ProjectBusiness/Zips/1566881772dEK7KXs1imJQfc55NGGMGMee.rar#施工图%0;311599!https://imgcdn.wenes.cn/ProjectBusiness/Images/1566889860dfFbyBKhEct7cGcDsQKb0C5b.jpg#施工图封面%0;311600!https://wenes01.oss-cn-beijing.aliyuncs.com/ProjectBusiness/Zips/1563420442Cs8RdMXXkC1MSERThFGw8cMt.zip#CAD压缩包%0">
                        <span class="cBlue">图纸</span>
                        <span class="cBlue">5</span>
                    </a>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">报价</p>
            <div class="analyItemCon">
                <p class="col-md-4">
                    <span class="c999">多报</span>
                    <span data-totalmoney="0.00">0</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">少报</span>
                    <span data-totalmoney="1,720.00">1</span>
                </p>
                <p class="col-md-4">
                    <span class="c999">临时</span>
                    <span id="span_temp">0</span>
                </p>
                <p class="col-md-4" title="装饰合同额/面积">
                    <span class="c999">单方报价</span>
                    <span>
                        494.00元/㎡
                    </span>
                </p>
                    <p class="col-md-4">
                    <a class=" cBlue" href="http://gbjcbl.rxjy.com/MultiLeavel.aspx?flag=1&amp;rwdid=20-206878" target="_blank">审计成本</a>
                </p>
             </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">款项</p>
            <div class="analyItemCon relative">
                 <div class="clearfix">
                     <div class="clearfix">
                        <p class="col-md-6">
                            <span class="c999">总金额</span> <span>270,000.00元</span>
                        </p>
                        <p class="col-md-6">
                            <span class="c999">装饰合同额</span> <span>247,000.00元</span>
                        </p>
                    </div>
                    <div class="clearfix">
                        <p class="col-md-6">
                            <span class="c999">税金</span> <span>20,405.20元</span>
                        </p>
                        <p class="col-md-6">
                            <span class="c999">折前工程直接费</span> <span>211,498.10元</span>
                        </p>
                    </div>
                    <div class="hide kuanxiangDetail_three">
                        <div class="clearfix">
                            <p class="lh28 col-md-6">
                                <span class="c999">合同总金额：</span>
                                <span>270,000.00元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">装饰合同额：</span>
                                <span>247,000.00元</span>
                            </p>
                        </div>
                        <div class="clearfix">
                            <p class="lh28  col-md-6">
                                <span class="c999">空调合同额：</span>
                                <span>0.00元 </span>
                            </p>
                            <p class="lh28  col-md-6">
                                <span class="c999">钢结构合同额：</span>
                                <span>0.00元 </span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28  col-md-6">
                                <span class="c999">弱电合同额：</span>
                                <span>0.00元 </span>
                            </p>
                            <p class="lh28  col-md-6">
                                <span class="c999">其他分项额：</span>
                                <span>21,100.90元 </span>
                            </p>
                        </div>
                        <div class="clearfix">
                            <p class="lh28  col-md-6">
                                <span class="c999">税金：</span>
                                <span>20,405.20元</span>
                            </p>
                            <p class="lh28  col-md-6">
                                <span class="c999">分项税金：</span>
                                <span>0元</span>
                            </p>
                        </div>
                        <div class="clearfix  ">
                            <p class="lh28 col-md-6">
                                <span class="c999">装饰自定义报价：</span>
                                <span>元</span>
                            </p>
                            <p class="lh28  col-md-6">
                                <span class="c999">物业管理费：</span>
                                <span>0.00元</span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28  col-md-6">
                                <span class="c999">装饰协调费：</span>
                                <span>0.00元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">折前工程直接费：</span>
                                <span>211,498.10元</span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28 col-md-6">
                                <span class="c999">物业押金：</span>
                                <span>0.00元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">装饰其他金额：</span>
                                <span>0元</span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28 col-md-6">
                                <span class="c999">工程一切险：</span>
                                <span>0.00元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">人身意外险：</span>
                                <span>800.00元</span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28 col-md-6">
                                <span class="c999">夜间施工费：</span>
                                <span>0.00元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">远程施工费：</span>
                                <span>0.00元</span>
                            </p>
                        </div>
                        <div class="clearfix  ">
                            <p class="lh28 col-md-6">
                                <span class="c999">回扣系数：</span>
                                <span>1.0000</span>
                            </p>
                            <p class="lh28  col-md-6">
                                <span class="c999">综合取费：</span>
                                <span>9,422.24元</span>
                            </p>
                        </div>
                        <div class="clearfix ">
                            <p class="lh28 col-md-6">
                                <span class="c999">工程总造价：</span>
                                <span>247,129.59元</span>
                            </p>
                            <p class="lh28 col-md-6">
                                <span class="c999">原始总造价：</span>
                                <span>249,625.85元</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">发包协议</p>
            <div class="analyItemCon relative">
                <div class="clearfix">
                    <p class="col-md-4">
                        <a href="javascript:" img="https://gxmgl.rxjy.com//ThirdPM/ShowProtoclItme?orderno=20-206878&amp;uid=4656&amp;type=1">
                            <span class="cBlue">安全管理协议</span>
                            <span class="cBlue"></span>
                        </a>
                    </p>
                    <p class="col-md-4">
                        <a href="javascript:" img="https://gxmgl.rxjy.com//ThirdPM/ShowProtoclItme?orderno=20-206878&amp;uid=4656&amp;type=2">
                            <span class="cBlue">项目施工协议</span>
                            <span class="cBlue"></span>
                        </a>
                    </p>
                    <p class="col-md-4">
                        <a href="javascript:" img="https://gxmgl.rxjy.com//ThirdPM/ShowProtoclItme?orderno=20-206878&amp;uid=4656&amp;type=3">
                            <span class="cBlue">安全生产管理承诺书</span>
                            <span class="cBlue"></span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">回款</p>
            <div class="clearfix analyItemCon">
                <p class="col-md-4">
                    <span class="cLightGray pr8">款期1</span>
                    <span>首期款</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>81000.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">比例</span>
                    <span>30.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">款期2</span>
                    <span>中期款</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>94500.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">比例</span>
                    <span>35.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">款期3</span>
                    <span>尾款</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>81000.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">比例</span>
                    <span>30.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">款期4</span>
                    <span>质保金回款</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">金额</span>
                    <span>13500.0</span>
                </p>
                <p class="col-md-4">
                    <span class="cLightGray pr8">比例</span>
                    <span>5.0</span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">材料</p>
            <div class="analyItemCon  clearfix">
                <p class="col-md-4 lh28">
                    <span class="cBlue uiLinkMeterial pr10 pointer" data-detail="gdcl">固定材料</span> <span class="c666666 matCountToFixed"></span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="cBlue uiLinkMeterial pr10 pointer" data-detail="lscl">临时材料</span> <span class="c666666 matCountToTemp"></span>
                </p>
                <p class="col-md-4 lh28">
                    <span class="c999 pr10">材料商</span> <span class="c666666 materialDealer"></span>
                </p>
            </div>
        </div>
        <div class="analyItem">
            <p class="analyItemTit tx-center">备注</p>
            <div class="analyItemCon">
                <p class="col-md-11">
                    <span>物业要求：0;口头承诺：</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
    created () {

    },
    methods: {
        // 路由跳转路径拼接
        routerPath (path) {
            return this.$route.matched[1].path + '/' + path
        },
        // 直接进行路由跳转路径
        routerPush (path) {
            this.$router.push(this.$route.matched[1].path + '/' + path)
        }
    }
}
</script>
