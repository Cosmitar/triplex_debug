# how to replicate the issue

Open the scene in Triplex, select NestedComponents element from the side bar, try to translate.
You should see the cube moving first and the cylinder updating on drag-end. Note that cube and cylinder are siblings into [NestedComponents](https://github.com/Cosmitar/triplex_debug/blob/main/src/components/NestedComponents.tsx) and the props of the component are applied to a wrapper group.
