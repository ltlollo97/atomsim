var modelStr = 'Atoms/C/nucleusC.obj';
var orbitStr = 'Atoms/C/orbitC.obj';
var electronStr = 'Atoms/electron.obj';
var modelTexture = 'model/texture2.png';


function sceneGraph(){

      nucleusNode = new Node();
      nucleusNode.localMatrix = utils.multiplyMatrices(utils.MakeScaleMatrix(2, 1, 2), utils.MakeTranslateMatrix(0.5,-0.5,0.0));
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
      electronNode.localMatrix = utils.MakeTranslateMatrix(0,8,0);
      electronNode.drawInfo = {
        buffer: electronBuffer,
        vao: vao3,
        materialColor: electronColor,
      };

      electronNode2 = new Node();
      electronNode2 = Object.assign(electronNode2, electronNode);
      electronNode2.localMatrix = utils.MakeTranslateMatrix(0,0,11.5);

      electronNode3 = new Node();
      electronNode3 = Object.assign(electronNode3, electronNode);
      electronNode3.localMatrix = utils.MakeTranslateMatrix(10.5, 4, -4);

      electronNode4 = new Node();
      electronNode4 = Object.assign(electronNode4, electronNode);
      electronNode4.localMatrix = utils.MakeTranslateMatrix(-10.5, -4, -4);

      electronNode5 = new Node();
      electronNode5 = Object.assign(electronNode5, electronNode);
      electronNode5.localMatrix = utils.identityMatrix(); //modified in drawScene

      electronNode6 = new Node();
      electronNode6 = Object.assign(electronNode6, electronNode);
      electronNode6.localMatrix = utils.identityMatrix(); //modified in drawScene

      electronNode.setParent(orbitNode);
      electronNode2.setParent(orbitNode);
      electronNode3.setParent(orbitNode);
      electronNode4.setParent(orbitNode);
      electronNode5.setParent(orbitNode);
      electronNode6.setParent(orbitNode);

      objects = [
        nucleusNode,
        orbitNode,
        electronNode,
        electronNode2,
        electronNode3,
        electronNode4,
        electronNode5,
        electronNode6,
      ];
}

function updateLocalMatrices(){
      //orbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(-0.2), orbitNode.localMatrix);
      electronNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(2), electronNode.localMatrix);
      electronNode2.localMatrix = utils.MakeTranslateMatrix((4) + 18*Math.sin((i/(4))*10.0/180.0*Math.PI), 0,  12*Math.cos((i/(4))*10.0/180.0*Math.PI));
      electronNode3.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(2), utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode3.localMatrix));
      electronNode4.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(-2), utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode4.localMatrix));
      electronNode5.localMatrix = utils.MakeTranslateMatrix((-4) + 18*Math.cos((i/4)*10.0/180.0*Math.PI), 12*Math.sin((i/4)*10.0/180.0*Math.PI),0);
      electronNode6.localMatrix = utils.MakeTranslateMatrix((-4) - 18*Math.cos((i/4)*10.0/180.0*Math.PI), 12*Math.sin(-(i/4)*10.0/180.0*Math.PI),0);
      //nucleusNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateZMatrix(0.4),utils.multiplyMatrices(utils.MakeRotateYMatrix(0.8), nucleusNode.localMatrix));


}