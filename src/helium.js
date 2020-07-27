// 3D OBJECTS LOCATIONS
var modelStr = 'Atoms/He/nucleusHe.obj';
var orbitStr = 'Atoms/He/orbitHe.obj';
var electronStr = 'Atoms/electron.obj';
var modelTexture = 'model/texture2.png';


function sceneGraph(){

    //  objects = [];

      nucleusNode = new Node();
      nucleusNode.localMatrix = utils.multiplyMatrices(utils.MakeScaleMatrix(2, 1, 2), utils.MakeTranslateMatrix(0.0,0.0,0.0));
      nucleusNode.drawInfo = {
        buffer: nucleusBuffer,
        vao: vao1,
      };

      orbitNode = new Node();
      orbitNode.localMatrix = utils.MakeTranslateMatrix(0.0,0.0,0.0);
      orbitNode.drawInfo = {
        buffer: orbitBuffer,
        vao: vao2,
        materialColor: orbitColor,
      };

      electronNode = new Node();
      electronNode.localMatrix = utils.MakeTranslateMatrix(8,0,0);
      electronNode.drawInfo = {
        buffer: electronBuffer,
        vao: vao3,
        materialColor: electronColor,
      };

      electronNode2 = new Node();
      electronNode2 = Object.assign(electronNode2, electronNode);
      electronNode2.localMatrix = utils.MakeTranslateMatrix(0,8,0);

      electronNode.setParent(orbitNode);
      electronNode2.setParent(orbitNode);
      nucleusNode.setParent(orbitNode);

      objects = [
        nucleusNode,
        orbitNode,
        electronNode,
        electronNode2,
      ];
}

function updateLocalMatrices(){
      electronNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode.localMatrix);
      electronNode2.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(2), electronNode2.localMatrix);
      //nucleusNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateZMatrix(0.4),utils.multiplyMatrices(utils.MakeRotateYMatrix(0.8), nucleusNode.localMatrix));
}