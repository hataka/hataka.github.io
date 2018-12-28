

import flash.events.Event;
import flash.events.EventDispatcher;
import flash.events.IEventDispatcher;
import mx.core.IPropertyChangeNotifier;
import mx.events.PropertyChangeEvent;
import mx.utils.ObjectProxy;
import mx.utils.UIDUtil;

import mx.effects.Sequence;
import mx.controls.TileList;
import mx.collections.ArrayCollection;

class BindableProperty
{
	/*
	 * generated bindable wrapper for property itemsChangeEffect1 (public)
	 * - generated setter
	 * - generated getter
	 * - original public var 'itemsChangeEffect1' moved to '_1818056464itemsChangeEffect1'
	 */

    [Bindable(event="propertyChange")]
    public function get itemsChangeEffect1():mx.effects.Sequence
    {
        return this._1818056464itemsChangeEffect1;
    }

    public function set itemsChangeEffect1(value:mx.effects.Sequence):void
    {
    	var oldValue:Object = this._1818056464itemsChangeEffect1;
        if (oldValue !== value)
        {
            this._1818056464itemsChangeEffect1 = value;
           if (this.hasEventListener("propertyChange"))
               this.dispatchEvent(mx.events.PropertyChangeEvent.createUpdateEvent(this, "itemsChangeEffect1", oldValue, value));
        }
    }

	/*
	 * generated bindable wrapper for property tlist0 (public)
	 * - generated setter
	 * - generated getter
	 * - original public var 'tlist0' moved to '_871003298tlist0'
	 */

    [Bindable(event="propertyChange")]
    public function get tlist0():mx.controls.TileList
    {
        return this._871003298tlist0;
    }

    public function set tlist0(value:mx.controls.TileList):void
    {
    	var oldValue:Object = this._871003298tlist0;
        if (oldValue !== value)
        {
            this._871003298tlist0 = value;
           if (this.hasEventListener("propertyChange"))
               this.dispatchEvent(mx.events.PropertyChangeEvent.createUpdateEvent(this, "tlist0", oldValue, value));
        }
    }

	/*
	 * generated bindable wrapper for property myDP (private)
	 * - generated setter
	 * - generated getter
	 * - original private var 'myDP' moved to '_3365688myDP'
	 */

    [Bindable(event="propertyChange")]
    private function get myDP():ArrayCollection
    {
        return this._3365688myDP;
    }

    private function set myDP(value:ArrayCollection):void
    {
    	var oldValue:Object = this._3365688myDP;
        if (oldValue !== value)
        {
            this._3365688myDP = value;
           if (this.hasEventListener("propertyChange"))
               this.dispatchEvent(mx.events.PropertyChangeEvent.createUpdateEvent(this, "myDP", oldValue, value));
        }
    }



}
