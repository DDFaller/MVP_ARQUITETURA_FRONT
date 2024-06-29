import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react"
import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";





const model_url = 'https://mvp-s3.s3.amazonaws.com/1/hamburguer?AWSAccessKeyId=AKIATHRQUE3TJXG7QPPQ&Expires=1719629081&Signature=acJzgEfIytQNpvuk25Ml4pekgiI%3D'
function GLTFModel({position = [0,0,0], model_url}) {
  const hamburguer = useGLTF(
    'hamburger.glb'
  );
  const scaleOption = 0.2
  console.log(hamburguer)
  return (<group>
    <primitive object={hamburguer.scene} scale={[scaleOption,scaleOption,scaleOption]} position={position}/>
  </group>)
}
export default function ClothModel({model_url = model_url}){
  return <>
    <Canvas
      className='r3f'
      camera={ {
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [ 0, 1, 2]
      } }
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        margin: 0,
        padding: 0
      }}
    >
    
    <Environment preset='city'/>
    <color args = {['#241a1a']} attach='background' />
    <directionalLight></directionalLight>

    <OrbitControls/>
    <GLTFModel model_url={model_url}/>

  </Canvas>
  
  </>
}