"use strict";
{

    const DOM_COMPONENT_ID = "StraniAnelli_InjectCSS_v2";

    globalThis.C3.Plugins.StraniAnelli_InjectCSS_v2.Instance = class InjectCSS_v2Instance extends globalThis.ISDKDOMInstanceBase {
        constructor() {
            super({ domComponentId: DOM_COMPONENT_ID });

            this._isLocal = true;
            this._css = "personalStyle.css";
            this._url = "personalStyle.css";
            this._idUnico = this._inst._uid;
            this._action = "NONE"; //"NONE", "ADD", "DELETE", "CHANGE", "DESTROY", "CLASS"

            // CSS CLASS
            this._class_action = "NONE"; // "NONE, "ADD", "REMOVE", "REPLACE", "TOGGLE"
            this._class_selector = "";
            this._class_options_first = "";
            this._class_options_second = "";

            if (properties) {
                this._isLocal = properties[0];
                this._css = properties[1];
            }

            // Create an element for this instance. The runtime handles this and will result in a call
            // to CreateElement() in domSide.js where the real DOM calls are made.
            this.CreateElement(
                {
                    "isLocal": this._isLocal,
                    "css": this._css,
                    "url": this._url,
                    "idUnico": this._idUnico,
                    "action": this._action,
                    "class_action": this._class_action,
                    "class_selector": this._class_selector,
                    "class_option_first": this._class_options_first,
                    "class_options_second": this._class_options_second
                });
        }

        async UrlVero(nameFile) {
            const url = await this.runtime.GetAssetManager().GetProjectFileUrl(nameFile);
            return url;
        }

        _onCreate() {
            super._onCreate();
        }

        _getElementState() {
            // Return JSON with the state of the element. This is passed along to both CreateElement()
            // and UpdateState() in domSide.js. It provides a convenient way to send all the DOM element
            // state in one go, ensuring any changes are reflected in the real element.
            return {
                "isLocal": this._isLocal,
                "css": this._css,
                "url": this._url,
                "idUnico": this._idUnico,
                "action": this._action,
                "class_action": this._class_action,
                "class_selector": this._class_selector,
                "class_option_first": this._class_options_first,
                "class_options_second": this._class_options_second
            };
        }

        _draw(renderer) {
            // not used - a DOM element is positioned at this instance instead
        }

        _saveToJson() {
            return {
                "isLocal": this._isLocal,
                "css": this._css,
                "url": this._url,
                "idUnico": this._idUnico,
                "action": this._action,
                "class_action": this._class_action,
                "class_selector": this._class_selector,
                "class_option_first": this._class_options_first,
                "class_options_second": this._class_options_second
            };
        }

        _loadFromJson(o) {
            // load state for savegames
        }
    };
}