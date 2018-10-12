x3dom.TurntableNavigation.prototype.animateTo = function(view, target, prev, dur)
{
    var navi = this.navi;
    var targetMat;
    
    if (!view._flyMat)
        this.initTurnTable(view, false);
    
    if (x3dom.isa(target, x3dom.nodeTypes.X3DViewpointNode)) {
//AP: needed inverse()    
        targetMat = x3dom.fields.SFMatrix4f.lookAt(target._vf.position, target.getCenterOfRotation(), new x3dom.fields.SFVec3f(0,1,0)).inverse();        
    }else
        targetMat = target;

    if (navi._vf.transitionType[0].toLowerCase() !== "teleport" && dur != 0 && navi.getType() !== "game")
    {
        if (prev && x3dom.isa(prev, x3dom.nodeTypes.X3DViewpointNode)) {
            prev = prev.getViewMatrix().mult(prev.getCurrentTransform().inverse()).
                         mult(view._transMat).mult(view._rotMat);

            view._mixer.beginTime = view._lastTS;

            if (arguments.length >= 4 && arguments[3] != null) {
                // for lookAt to assure travel speed of 1 m/s
                view._mixer.endTime = view._lastTS + dur;
            }
            else {
                view._mixer.endTime = view._lastTS + navi._vf.transitionTime;
            }

            view._mixer.setBeginMatrix (prev);
            view._mixer.setEndMatrix (targetMat);
            
            view._scene.getViewpoint().setView(prev);//Absolute(prev);
        }
        else if(prev){
            view._mixer.beginTime = view._lastTS;

            if (arguments.length >= 4 && arguments[3] != null) {
                // for lookAt to assure travel speed of 1 m/s
                view._mixer.endTime = view._lastTS + dur;
            }
            else {
                view._mixer.endTime = view._lastTS + navi._vf.transitionTime;
            }

            view._mixer.setBeginMatrix (prev);
            view._mixer.setEndMatrix (targetMat);

            view._scene.getViewpoint().setViewAbsolute(prev);
        }else{
            view._scene.getViewpoint().setViewAbsolute(targetMat);
        }
    }
    else
    {
        view._scene.getViewpoint().setViewAbsolute(target);
    }

    view._rotMat = x3dom.fields.SFMatrix4f.identity();
    view._transMat = x3dom.fields.SFMatrix4f.identity();
    view._movement = new x3dom.fields.SFVec3f(0, 0, 0);
    view._needNavigationMatrixUpdate = true;
    
    this.updateFlyMat(view, target, targetMat);
};