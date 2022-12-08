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

export class Barco extends Mesh{      

    velocidade = 0;    
    rotacao = 0;    
    constructor(scene, x, y, z){
        super();        
        self = this;
        new GLTFLoader().load('textures/zodiac/scene.gltf', function(gltf){
            //gltf.scene.scale.set(12.0, 12.0, 12.0);
            //self.add(gltf.scene);            
            //scene.add(gltf.scene);            
            self.add(gltf.scene);
        });
        this.name = "barco";
        this.position.x = x;
        this.position.y = y;
        this.position.z = z;        
        self.geometry.scale(12, 12, 12);
        scene.add(this);
        document.addEventListener("keydown", function(event){
            if (event.key == 'a')
                self.rotacao = 0.1;
            if (event.key == 'd')
                self.rotacao = -0.1;
            if (event.key == 'w')
                self.velocidade = -2;
            if (event.key == 's')
                self.velocidade = 2;
        });
        document.addEventListener("keyup", function(event){
            if (event.key == 'a' || event.key == 'd')
                self.rotacao = 0;
            if (event.key == 'w' || event.key == 's')                    
                self.velocidade = 0;
        });        
    }
    andar(){        
        if (this.velocidade != 0){
            this.position.z += this.velocidade                        
        }
        if (this.rotacao != 0){
            this.rotation.y += this.rotacao
        }
    }    
}
