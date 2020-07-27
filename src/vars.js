//structural variables
var canvas;
var program;
var gl;
var shaderDir;
var baseDir;
var nucleusModel;


//Shared variables between functions--------------------------------------------

//variables for camera & UI interaction
var lastUpdateTime;
var Rx;
var Ry;
var Rz;
var S;
var cx;
var cy;
var cz;
var elevation;
var angle;
var delta;
var lookRadius;
var specShine;



//variables to extract obj model properties -- CARBON ATOM
var objects = []; //scene graph objects array
var nucleusNode;
var orbitNode;
//6 electrons
var electronNode;
var electronNode2;
var electronNode3;
var electronNode4;
var electronNode5;
var electronNode6;

//buffer for each object, which contains position, indices, texture etc.
var nucleusBuffer;
var orbitBuffer;
var electronBuffer;

//light variables
var dirLightAlpha;
var dirLightBeta;
var directionalLight;
var dirLightColor;
var specularColor;

//object colors
var electronColor;
var orbitColor;

// attributes and uniforms handles
var hasTexture; // wheter to apply texture to an object
var positionAttributeLocation;
var uvAttributeLocation;
var matrixLocation;
var textLocation;
var materialDiffColorHandle;
var lightDirectionHandle;
var normalMatrixPositionHandle;
var dirLightColorHandle;
var specColorHandle;
var worldViewMatrixLocation;
var specShineHandle;

//transformation matrices
var perspectiveMatrix;
var viewMatrix;
var worldMatrix;
var worldViewMatrix;
var worldViewProjection;
var normalMatrix;
//var lightDirMatrix
//var lightDirectionTransformed

//buffers
var vao1;
var vao2;
var vao3;
var positionBuffer;
var normalBuffer;
var uvBuffer;
var indexBuffer;
var texture;
var image;
// -----------------------------------------------------------------------------


//scene graphs variables--------------------------------------------------------
var Node = function() {
  this.children = [];
  this.localMatrix = utils.identityMatrix();
  this.worldMatrix = utils.identityMatrix();
};

Node.prototype.setParent = function(parent) {
  // remove us from our parent
  if (this.parent) {
    var ndx = this.parent.children.indexOf(this);
    if (ndx >= 0) {
      this.parent.children.splice(ndx, 1);
    }
  }

  // Add us to our new parent
  if (parent) {
    parent.children.push(this);
  }
  this.parent = parent;
};

Node.prototype.updateWorldMatrix = function(matrix) {
  if (matrix) {
    // a matrix was passed in so do the math
    this.worldMatrix = utils.multiplyMatrices(matrix, this.localMatrix);
  } else {
    // no matrix was passed in so just copy.
    utils.copy(this.localMatrix, this.worldMatrix);
  }

  // now process all the children
  var worldMatrix = this.worldMatrix;
  this.children.forEach(function(child) {
    child.updateWorldMatrix(worldMatrix);
  });
};
//------------------------------------------------------------------------------


//---EXTRA: BACKGROUND IMAGE INITIALIZER----------------------------------------
function initBkgnd() {
    backTex = gl.createTexture();
    backTex.Img = new Image();
    backTex.Img.onload = function() {
        handleBkTex(backTex);
    }
    backTex.Img.src = "model/blur.jpg";
}

function handleBkTex(tex) {
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, tex.Img);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.bindTexture(gl.TEXTURE_2D, null);
}
//------------------------------------------------------------------------------
