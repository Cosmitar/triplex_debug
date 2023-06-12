import Box from "./box";
import Cylinder from "./cylinder";

export default function NestedComponents(props: JSX.IntrinsicElements["group"]) {
  return (
    <group {...props}>
      <Box />
      <Cylinder />
    </group>
  );
}
