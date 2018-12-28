
package 
{
import flash.accessibility.*;
import flash.debugger.*;
import flash.display.*;
import flash.errors.*;
import flash.events.*;
import flash.external.*;
import flash.geom.*;
import flash.media.*;
import flash.net.*;
import flash.printing.*;
import flash.profiler.*;
import flash.system.*;
import flash.text.*;
import flash.ui.*;
import flash.utils.*;
import flash.xml.*;
import mx.binding.*;
import mx.controls.Image;
import mx.core.Application;
import mx.core.ClassFactory;
import mx.core.DeferredInstanceFromClass;
import mx.core.DeferredInstanceFromFunction;
import mx.core.IDeferredInstance;
import mx.core.IFactory;
import mx.core.IFlexModuleFactory;
import mx.core.IPropertyChangeNotifier;
import mx.core.mx_internal;
import mx.effects.Zoom;
import mx.filters.*;
import mx.styles.*;
import mx.controls.Text;
import mx.containers.Panel;
import mx.core.Application;

public class ZoomEffectExample extends mx.core.Application
{
	public function ZoomEffectExample() {}

	[Bindable]
	public var zoomAll : mx.effects.Zoom;
	[Bindable]
	public var img : mx.controls.Image;

	mx_internal var _bindings : Array;
	mx_internal var _watchers : Array;
	mx_internal var _bindingsByDestination : Object;
	mx_internal var _bindingsBeginWithWord : Object;

include "F:/GitHub/hataka/hataka.github.io/TourDeFlex3/explorer/mx/effects/ZoomEffectExample/ZoomEffectExample.mxml:25,38";

}}
