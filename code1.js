gdjs.game_95overCode = {};
gdjs.game_95overCode.GDgameoverObjects1= [];
gdjs.game_95overCode.GDgameoverObjects2= [];
gdjs.game_95overCode.GDgameoverObjects3= [];
gdjs.game_95overCode.GDmessageObjects1= [];
gdjs.game_95overCode.GDmessageObjects2= [];
gdjs.game_95overCode.GDmessageObjects3= [];
gdjs.game_95overCode.GDplayagainObjects1= [];
gdjs.game_95overCode.GDplayagainObjects2= [];
gdjs.game_95overCode.GDplayagainObjects3= [];

gdjs.game_95overCode.conditionTrue_0 = {val:false};
gdjs.game_95overCode.condition0IsTrue_0 = {val:false};
gdjs.game_95overCode.condition1IsTrue_0 = {val:false};
gdjs.game_95overCode.condition2IsTrue_0 = {val:false};
gdjs.game_95overCode.conditionTrue_1 = {val:false};
gdjs.game_95overCode.condition0IsTrue_1 = {val:false};
gdjs.game_95overCode.condition1IsTrue_1 = {val:false};
gdjs.game_95overCode.condition2IsTrue_1 = {val:false};


gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDplayagainObjects1Objects = Hashtable.newFrom({"playagain": gdjs.game_95overCode.GDplayagainObjects1});gdjs.game_95overCode.eventsList0 = function(runtimeScene) {

{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition0IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8209868);
}
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.game_95overCode.GDplayagainObjects1, gdjs.game_95overCode.GDplayagainObjects2);

{for(var i = 0, len = gdjs.game_95overCode.GDplayagainObjects2.length ;i < len;++i) {
    gdjs.game_95overCode.GDplayagainObjects2[i].setColor("65;117;5");
}
}}

}


{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "play", false);
}}

}


};gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDplayagainObjects1Objects = Hashtable.newFrom({"playagain": gdjs.game_95overCode.GDplayagainObjects1});gdjs.game_95overCode.eventsList1 = function(runtimeScene) {

{



}


{


gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("message"), gdjs.game_95overCode.GDmessageObjects1);
{for(var i = 0, len = gdjs.game_95overCode.GDmessageObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDmessageObjects1[i].setString("You have pressed " + gdjs.evtTools.common.toString(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("key_counter"))) + " keys in " + " 60s");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("playagain"), gdjs.game_95overCode.GDplayagainObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDplayagainObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_95overCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_95overCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playagain"), gdjs.game_95overCode.GDplayagainObjects1);

gdjs.game_95overCode.condition0IsTrue_0.val = false;
gdjs.game_95overCode.condition1IsTrue_0.val = false;
{
gdjs.game_95overCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_95overCode.mapOfGDgdjs_46game_9595overCode_46GDplayagainObjects1Objects, runtimeScene, true, true);
}if ( gdjs.game_95overCode.condition0IsTrue_0.val ) {
{
{gdjs.game_95overCode.conditionTrue_1 = gdjs.game_95overCode.condition1IsTrue_0;
gdjs.game_95overCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8211444);
}
}}
if (gdjs.game_95overCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_95overCode.GDplayagainObjects1 */
{for(var i = 0, len = gdjs.game_95overCode.GDplayagainObjects1.length ;i < len;++i) {
    gdjs.game_95overCode.GDplayagainObjects1[i].setColor("74;147;226");
}
}}

}


};

gdjs.game_95overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_95overCode.GDgameoverObjects1.length = 0;
gdjs.game_95overCode.GDgameoverObjects2.length = 0;
gdjs.game_95overCode.GDgameoverObjects3.length = 0;
gdjs.game_95overCode.GDmessageObjects1.length = 0;
gdjs.game_95overCode.GDmessageObjects2.length = 0;
gdjs.game_95overCode.GDmessageObjects3.length = 0;
gdjs.game_95overCode.GDplayagainObjects1.length = 0;
gdjs.game_95overCode.GDplayagainObjects2.length = 0;
gdjs.game_95overCode.GDplayagainObjects3.length = 0;

gdjs.game_95overCode.eventsList1(runtimeScene);
return;

}

gdjs['game_95overCode'] = gdjs.game_95overCode;
