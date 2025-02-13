"use strict";
{
    const C3 = globalThis.C3;
    const DOM_COMPONENT_ID = "StraniAnelli_InjectCSS_v2";

    C3.Plugins.StraniAnelli_InjectCSS_v2 = class InjectCSS_v2Plugin extends globalThis.ISDKDOMPluginBase {
        constructor() {
            super(opts, DOM_COMPONENT_ID);

            //this.AddElementMessageHandler("changeaction", (sdkInst, e) => sdkInst._OnMouseLeave(e));
            this.AddElementMessageHandler("changeaction", (sdkInst, e) => {
                this._action = e["action"];
            });
        }
    };
}