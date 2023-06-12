import NestedComponents from "./components/NestedComponents";

export default function Scene() {
  return (
    <>
      <ambientLight intensity={0.25} />
      <pointLight
        castShadow
        intensity={0.5}
        position={[-0.4826198543855721, 1.6377178989292671, 5.340964327093364]}
      />
      <pointLight
        castShadow
        position={[6.4178570090635905, 1, -0.9711793664704707]}
        intensity={0.5}
      />
      <pointLight castShadow intensity={0.5} />

      <NestedComponents />
    </>
  );
}
