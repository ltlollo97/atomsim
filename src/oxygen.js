var modelStr = 'Atoms/O/nucleusO.obj';
var orbitStr = 'Atoms/O/orbitO.obj';
var electronStr = 'Atoms/electron.obj';
var modelTexture = 'model/texture2.png';


function sceneGraph(){

    lookRadius = 30;  //bigger than others, so initially the camera "radius" should be greater for a better visualization

    //  objects = [];

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
      electronNode2.localMatrix = utils.MakeTranslateMatrix(0,9,8);

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
      electronNode6.localMatrix = utils.MakeTranslateMatrix(0, 0, 8); //modified in drawScene

      electronNode7 = new Node();
      electronNode7 = Object.assign(electronNode7, electronNode);
      electronNode7.localMatrix = utils.identityMatrix();//utils.identityMatrix(); //modified in drawScene

      electronNode8 = new Node();
      electronNode8 = Object.assign(electronNode8, electronNode);
      electronNode8.localMatrix = utils.MakeTranslateMatrix(0, -1.5, 30); //modified in drawScene

      electronNode.setParent(orbitNode);
      electronNode2.setParent(orbitNode);
      electronNode3.setParent(orbitNode);
      electronNode4.setParent(orbitNode);
      electronNode5.setParent(orbitNode);
      electronNode6.setParent(orbitNode);
      electronNode7.setParent(orbitNode);
      electronNode8.setParent(orbitNode);
      nucleusNode.setParent(orbitNode);

      //orbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(90), orbitNode.localMatrix);

      objects = [
        nucleusNode,
        orbitNode,
        electronNode,
        electronNode2,
        electronNode3,
        electronNode4,
        electronNode5,
        electronNode6,
        electronNode7,
        electronNode8,
      ];
}

function updateLocalMatrices(){
      //orbitNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(0.5), orbitNode.localMatrix);
      electronNode.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(2), electronNode.localMatrix);
      electronNode2.localMatrix = utils.MakeTranslateMatrix(0, 12*Math.sin((i/4)*10.0/180.0*Math.PI),(4) + (-8)+ (18)*Math.cos((i/4)*10.0/180.0*Math.PI));
      electronNode3.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(2), utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode3.localMatrix));
      electronNode4.localMatrix = utils.multiplyMatrices(utils.MakeRotateZMatrix(-2), utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode4.localMatrix));
      electronNode5.localMatrix = utils.MakeTranslateMatrix((-4) + 18*Math.cos((i/4)*10.0/180.0*Math.PI), 12*Math.sin((i/4)*10.0/180.0*Math.PI),0);
      electronNode6.localMatrix = utils.multiplyMatrices(utils.MakeRotateYMatrix(2), electronNode6.localMatrix);
      electronNode7.localMatrix = utils.MakeTranslateMatrix(11*Math.sin((i/4)*10.0/180.0*Math.PI), 0 ,(4) + (18.5)*Math.cos((i/4)*10.0/180.0*Math.PI));
      electronNode8.localMatrix = utils.MakeTranslateMatrix((3.8) + (16)*Math.cos((i/4)*10.0/180.0*Math.PI),0,(3) + (8.5)*Math.sin(-(i/4)*10.0/180.0*Math.PI));
      //nucleusNode.localMatrix=utils.multiplyMatrices(utils.MakeRotateZMatrix(0.4),utils.multiplyMatrices(utils.MakeRotateYMatrix(0.8), nucleusNode.localMatrix));
}