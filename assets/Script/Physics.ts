const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
	onLoad () {
		let physicsManager = cc.director.getPhysicsManager();
		physicsManager.gravity = cc.Vec2.ZERO;
        physicsManager.enabled = true;
        physicsManager.debugDrawFlags = cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit;
	}
}
