/**
 * @author syt123450 / https://github.com/syt123450
 */

/**
 * This handler handle resize of the window event.
 */

function ResizeHandler ( controller ) {

    function resizeScene () {

        controller.camera.aspect = controller.container.clientWidth / controller.container.clientHeight;
        controller.camera.updateProjectionMatrix();
        controller.renderer.setSize( controller.container.clientWidth, controller.container.clientHeight );

    }

    return {

        resizeScene: resizeScene

    }

}

export { ResizeHandler }