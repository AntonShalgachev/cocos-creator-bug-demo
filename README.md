## ghost-collider
* Move 'Player' node into the 'Object' node by dragging 'Player' with the mouse onto 'Objects'
* Move\scale scene in the editor with the mouse
#### Result: ghost collider of 'Player' just draws itself on top of everything and doesn't respond to the scene movement\scale in the editor

## scaled-joint
* Run a game
#### Result: Connected body ('Wheel') is attached to the wrong point. Setting scale of 'Player' node to 1.0 eliminates the bug

## multi-component-revert
* Drag 'Player' prefab onto the scene
* Revert resulting node by pressing "Go Back" button in the 'Player' node Properties window

#### Result: 'Player' node contains 2 identical PhysicsBoxCollider components with the same data (but data should be different)
