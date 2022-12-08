import { CubeCamera, Mesh, Object3D } from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {Points} from "three";
import {PointsMaterial} from "three";
import {Vector3} from "three";
import {BufferGeometry} from "three";
import {BoxGeometry} from "three";
import {BufferAttribute} from "three";
import {Float32BufferAttribute} from "three";
import { MeshBasicMaterial } from "three";
import { InstancedMesh } from "three";
import { InstancedBufferGeometry } from "three"
// function criarBala(){
    //console.log(pinguGeometria);
    
    //bala.instanceMatrix.needsUpdate = true; 
    //mesh.instanceMatrix.setUsage( THREE.DynamicDrawUsage );
    //dummy.updateMatrix();
    //mesh.setMatrixAt( i ++, dummy.matrix );

// }

export class Pingu extends Mesh{      
    static geometryBala = new BoxGeometry( 2, 2, 2 );
    static materialBala = new MeshBasicMaterial( {color: 0x00ff00} );
    static BALA = new Mesh( this.geometryBala, this.materialBala);        

    distancia = 150;    
    gunX = 0;
    gunY = 0;
    gunZ = 0;
    bala = Pingu.BALA.clone(false);  
          
    constructor(scene, x, y, z){
        super();        
        //this.name = "pingu";
        this.atualizarBala();
        //self = this;
        this.position.set(x, y, z);
        new GLTFLoader().load('textures/pingu/scene.gltf', function(gltf){            
            self.add(gltf.scene);
            //scene.add(gltf.scene);
        });               
        // math.atan2( x, y)                
        this.add(this.bala);                
        scene.add(this);
    }
    atualizarBala(){
        this.gunX = this.position.x - 12;
        this.gunY = this.position.y + 12;
        this.gunZ = this.position.z +  5;    

        this.bala.visible = false;
        this.bala.position.x = this.gunX;
        this.bala.position.y = this.gunY;
        this.bala.position.z = this.gunZ;        
    }
    atirar(){
        let chance = Math.floor(Math.random() * 10) + 1;
        if (this.distancia == 0){
            if (chance == 10){
                this.bala.position.x = this.gunX;
                this.bala.position.y = this.gunY;
                this.bala.position.z = this.gunZ;        
                this.bala.visible = true;
                this.distancia = 150;                
            }
            else
                this.bala.visible = false;
        }
        else {
            this.bala.position.x-=2;   
            this.distancia--;
        }
    }
}
//  http://127.0.0.1:5500/simulador-navegacao/examples/webgl_shaders_ocean.html    


/* 
    static pinguGltf;
    static geometryBala = new BoxGeometry( 2, 2, 2 );
    static materialBala = new MeshBasicMaterial( {color: 0x00ff00} );
    static BALA = new Mesh( this.geometryBala, this.materialBala);        

    distancia = 150;    
    gunX = 0;
    gunY = 0;
    gunZ = 0;
    bala = Pingu.BALA.clone();        
    constructor(scene, x, y, z){
        super();        
        
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;
        
        this.atualizarBala();                
        scene.add(this.bala);
        scene.add(this);
    }

*/

/*

        new GLTFLoader.load('textures/pingu/scene.gltf', function(gltf){
            Pingu.pinguGltf = gltf;
            console.log(0);
            gltf.scene.traverse(function(node){
                if (node.isMesh){
                    Pingu.pinguGeometria.push(node.geometry);
                    Pingu.pinguMaterial.push(node.material);
                }                
            });
            Pingu.primeiraVez = false;            
        });        

*/
