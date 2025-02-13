"use strict";
{
    globalThis.C3.Plugins.StraniAnelli_InjectCSS_v2.Acts = {
        async AddCss()
        {
            this._action = "ADD";

            if ( !! this._isLocal)
            {
                this._url = await this.runtime.GetAssetManager().GetProjectFileUrl(this._css);
            }
            else
            {
                this._url = this._css;
            }

            this._updateElementState();
        },

        async DeleteCss()
        {
            this._action = "DELETE";

            if ( !! this._isLocal)
            {
                this._url = await this.runtime.GetAssetManager().GetProjectFileUrl(this._css);
            }
            else
            {
                this._url = this._css;
            }

            this._updateElementState();
        },

        async ChangeCss(newCss, isLocalCss)
        {
            this._action = "CHANGE";
            this._css = newCss;
            this._isLocal = isLocalCss;

            if ( !! this._isLocal)
            {
                this._url = await this.runtime.GetAssetManager().GetProjectFileUrl(this._css);
            }
            else
            {
                this._url = this._css;
            }


            this._updateElementState();
        },

        async AddClass(selector, classe)
        {
            this._action = "CLASS";

            this._class_action = "ADD";
            this._class_selector = selector;
            this._class_options_first = classe;
            this._class_options_second = classe;

            this._updateElementState();
        },

        async RemoveClass(selector, classe)
        {
            this._action = "CLASS";

            this._class_action = "REMOVE";
            this._class_selector = selector;
            this._class_options_first = classe;
            this._class_options_second = classe;

            this._updateElementState();
        },

        async ToggleClass(selector, classe)
        {
            this._action = "CLASS";

            this._class_action = "TOGGLE";
            this._class_selector = selector;
            this._class_options_first = classe;
            this._class_options_second = classe;

            this._updateElementState();
        },

        async ReplaceClass(selector, oldclasse, newclasse)
        {
            this._action = "CLASS";

            this._class_action = "REPLACE";
            this._class_selector = selector;
            this._class_options_first = oldclasse;
            this._class_options_second = newclasse;

            this._updateElementState();
        }
    };
}