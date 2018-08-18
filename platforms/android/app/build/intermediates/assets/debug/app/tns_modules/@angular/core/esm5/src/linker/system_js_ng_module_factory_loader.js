/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { Injectable, Optional } from '../di';
import { Compiler } from './compiler';
var _SEPARATOR = '#';
var FACTORY_CLASS_SUFFIX = 'NgFactory';
/**
 * Configuration for SystemJsNgModuleLoader.
 * token.
 *
 * @experimental
 */
var SystemJsNgModuleLoaderConfig = /** @class */ (function () {
    function SystemJsNgModuleLoaderConfig() {
    }
    return SystemJsNgModuleLoaderConfig;
}());
export { SystemJsNgModuleLoaderConfig };
var DEFAULT_CONFIG = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory',
};
/**
 * NgModuleFactoryLoader that uses SystemJS to load NgModuleFactory
 * @experimental
 */
var SystemJsNgModuleLoader = /** @class */ (function () {
    function SystemJsNgModuleLoader(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || DEFAULT_CONFIG;
    }
    SystemJsNgModuleLoader.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    SystemJsNgModuleLoader.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = tslib_1.__read(path.split(_SEPARATOR), 2), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return System.import(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    SystemJsNgModuleLoader.prototype.loadFactory = function (path) {
        var _a = tslib_1.__read(path.split(_SEPARATOR), 2), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = FACTORY_CLASS_SUFFIX;
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return System.import(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return checkNotEmpty(factory, module, exportName); });
    };
    SystemJsNgModuleLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SystemJsNgModuleLoader.ctorParameters = function () { return [
        { type: Compiler },
        { type: SystemJsNgModuleLoaderConfig, decorators: [{ type: Optional }] }
    ]; };
    return SystemJsNgModuleLoader;
}());
export { SystemJsNgModuleLoader };
function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtX2pzX25nX21vZHVsZV9mYWN0b3J5X2xvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2xpbmtlci9zeXN0ZW1fanNfbmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFHSCxPQUFPLEVBQUMsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLE9BQU8sQ0FBQztBQUUzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sWUFBWSxDQUFDO0FBSXBDLElBQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUV2QixJQUFNLG9CQUFvQixHQUFHLFdBQVcsQ0FBQztBQUd6Qzs7Ozs7R0FLRztBQUNIO0lBQUE7SUFVQSxDQUFDO0lBQUQsbUNBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7QUFFRCxJQUFNLGNBQWMsR0FBaUM7SUFDbkQsaUJBQWlCLEVBQUUsRUFBRTtJQUNyQixpQkFBaUIsRUFBRSxZQUFZO0NBQ2hDLENBQUM7QUFFRjs7O0dBR0c7QUFDSDtJQUlFLGdDQUFvQixTQUFtQixFQUFjLE1BQXFDO1FBQXRFLGNBQVMsR0FBVCxTQUFTLENBQVU7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksY0FBYyxDQUFDO0lBQzFDLENBQUM7SUFFRCxxQ0FBSSxHQUFKLFVBQUssSUFBWTtRQUNmLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLFlBQVksUUFBUSxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVPLCtDQUFjLEdBQXRCLFVBQXVCLElBQVk7UUFBbkMsaUJBVUM7UUFUSyxJQUFBLDhDQUE2QyxFQUE1QyxjQUFNLEVBQUUsa0JBQVUsQ0FBMkI7UUFDbEQsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsVUFBVSxHQUFHLFNBQVMsQ0FBQztRQUN6QixDQUFDO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxVQUFDLE1BQVcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQzthQUN6QyxJQUFJLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxhQUFhLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQzthQUM1RCxJQUFJLENBQUMsVUFBQyxJQUFTLElBQUssT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVPLDRDQUFXLEdBQW5CLFVBQW9CLElBQVk7UUFDMUIsSUFBQSw4Q0FBNkMsRUFBNUMsY0FBTSxFQUFFLGtCQUFVLENBQTJCO1FBQ2xELElBQUksa0JBQWtCLEdBQUcsb0JBQW9CLENBQUM7UUFDOUMsRUFBRSxDQUFDLENBQUMsVUFBVSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUN2QixrQkFBa0IsR0FBRyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUM7YUFDekYsSUFBSSxDQUFDLFVBQUMsTUFBVyxJQUFLLE9BQUEsTUFBTSxDQUFDLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO2FBQzlELElBQUksQ0FBQyxVQUFDLE9BQVksSUFBSyxPQUFBLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Z0JBcENGLFVBQVU7Ozs7Z0JBcENILFFBQVE7Z0JBd0NnRCw0QkFBNEIsdUJBQWhELFFBQVE7O0lBaUNwRCw2QkFBQztDQUFBLEFBckNELElBcUNDO1NBcENZLHNCQUFzQjtBQXNDbkMsdUJBQXVCLEtBQVUsRUFBRSxVQUFrQixFQUFFLFVBQWtCO0lBQ3ZFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWdCLFVBQVUsY0FBUyxVQUFVLE1BQUcsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuXG5pbXBvcnQge0luamVjdGFibGUsIE9wdGlvbmFsfSBmcm9tICcuLi9kaSc7XG5cbmltcG9ydCB7Q29tcGlsZXJ9IGZyb20gJy4vY29tcGlsZXInO1xuaW1wb3J0IHtOZ01vZHVsZUZhY3Rvcnl9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnknO1xuaW1wb3J0IHtOZ01vZHVsZUZhY3RvcnlMb2FkZXJ9IGZyb20gJy4vbmdfbW9kdWxlX2ZhY3RvcnlfbG9hZGVyJztcblxuY29uc3QgX1NFUEFSQVRPUiA9ICcjJztcblxuY29uc3QgRkFDVE9SWV9DTEFTU19TVUZGSVggPSAnTmdGYWN0b3J5JztcbmRlY2xhcmUgdmFyIFN5c3RlbTogYW55O1xuXG4vKipcbiAqIENvbmZpZ3VyYXRpb24gZm9yIFN5c3RlbUpzTmdNb2R1bGVMb2FkZXIuXG4gKiB0b2tlbi5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIFByZWZpeCB0byBhZGQgd2hlbiBjb21wdXRpbmcgdGhlIG5hbWUgb2YgdGhlIGZhY3RvcnkgbW9kdWxlIGZvciBhIGdpdmVuIG1vZHVsZSBuYW1lLlxuICAgKi9cbiAgZmFjdG9yeVBhdGhQcmVmaXg6IHN0cmluZztcblxuICAvKipcbiAgICogU3VmZml4IHRvIGFkZCB3aGVuIGNvbXB1dGluZyB0aGUgbmFtZSBvZiB0aGUgZmFjdG9yeSBtb2R1bGUgZm9yIGEgZ2l2ZW4gbW9kdWxlIG5hbWUuXG4gICAqL1xuICBmYWN0b3J5UGF0aFN1ZmZpeDogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX0NPTkZJRzogU3lzdGVtSnNOZ01vZHVsZUxvYWRlckNvbmZpZyA9IHtcbiAgZmFjdG9yeVBhdGhQcmVmaXg6ICcnLFxuICBmYWN0b3J5UGF0aFN1ZmZpeDogJy5uZ2ZhY3RvcnknLFxufTtcblxuLyoqXG4gKiBOZ01vZHVsZUZhY3RvcnlMb2FkZXIgdGhhdCB1c2VzIFN5c3RlbUpTIHRvIGxvYWQgTmdNb2R1bGVGYWN0b3J5XG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyIGltcGxlbWVudHMgTmdNb2R1bGVGYWN0b3J5TG9hZGVyIHtcbiAgcHJpdmF0ZSBfY29uZmlnOiBTeXN0ZW1Kc05nTW9kdWxlTG9hZGVyQ29uZmlnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbXBpbGVyOiBDb21waWxlciwgQE9wdGlvbmFsKCkgY29uZmlnPzogU3lzdGVtSnNOZ01vZHVsZUxvYWRlckNvbmZpZykge1xuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZyB8fCBERUZBVUxUX0NPTkZJRztcbiAgfVxuXG4gIGxvYWQocGF0aDogc3RyaW5nKTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55Pj4ge1xuICAgIGNvbnN0IG9mZmxpbmVNb2RlID0gdGhpcy5fY29tcGlsZXIgaW5zdGFuY2VvZiBDb21waWxlcjtcbiAgICByZXR1cm4gb2ZmbGluZU1vZGUgPyB0aGlzLmxvYWRGYWN0b3J5KHBhdGgpIDogdGhpcy5sb2FkQW5kQ29tcGlsZShwYXRoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFuZENvbXBpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxOZ01vZHVsZUZhY3Rvcnk8YW55Pj4ge1xuICAgIGxldCBbbW9kdWxlLCBleHBvcnROYW1lXSA9IHBhdGguc3BsaXQoX1NFUEFSQVRPUik7XG4gICAgaWYgKGV4cG9ydE5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXhwb3J0TmFtZSA9ICdkZWZhdWx0JztcbiAgICB9XG5cbiAgICByZXR1cm4gU3lzdGVtLmltcG9ydChtb2R1bGUpXG4gICAgICAgIC50aGVuKChtb2R1bGU6IGFueSkgPT4gbW9kdWxlW2V4cG9ydE5hbWVdKVxuICAgICAgICAudGhlbigodHlwZTogYW55KSA9PiBjaGVja05vdEVtcHR5KHR5cGUsIG1vZHVsZSwgZXhwb3J0TmFtZSkpXG4gICAgICAgIC50aGVuKCh0eXBlOiBhbnkpID0+IHRoaXMuX2NvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyh0eXBlKSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRGYWN0b3J5KHBhdGg6IHN0cmluZyk6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PGFueT4+IHtcbiAgICBsZXQgW21vZHVsZSwgZXhwb3J0TmFtZV0gPSBwYXRoLnNwbGl0KF9TRVBBUkFUT1IpO1xuICAgIGxldCBmYWN0b3J5Q2xhc3NTdWZmaXggPSBGQUNUT1JZX0NMQVNTX1NVRkZJWDtcbiAgICBpZiAoZXhwb3J0TmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBleHBvcnROYW1lID0gJ2RlZmF1bHQnO1xuICAgICAgZmFjdG9yeUNsYXNzU3VmZml4ID0gJyc7XG4gICAgfVxuXG4gICAgcmV0dXJuIFN5c3RlbS5pbXBvcnQodGhpcy5fY29uZmlnLmZhY3RvcnlQYXRoUHJlZml4ICsgbW9kdWxlICsgdGhpcy5fY29uZmlnLmZhY3RvcnlQYXRoU3VmZml4KVxuICAgICAgICAudGhlbigobW9kdWxlOiBhbnkpID0+IG1vZHVsZVtleHBvcnROYW1lICsgZmFjdG9yeUNsYXNzU3VmZml4XSlcbiAgICAgICAgLnRoZW4oKGZhY3Rvcnk6IGFueSkgPT4gY2hlY2tOb3RFbXB0eShmYWN0b3J5LCBtb2R1bGUsIGV4cG9ydE5hbWUpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja05vdEVtcHR5KHZhbHVlOiBhbnksIG1vZHVsZVBhdGg6IHN0cmluZywgZXhwb3J0TmFtZTogc3RyaW5nKTogYW55IHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGZpbmQgJyR7ZXhwb3J0TmFtZX0nIGluICcke21vZHVsZVBhdGh9J2ApO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cbiJdfQ==