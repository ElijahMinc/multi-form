// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"Q3QBE":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "6e8a5cd20fbc91cd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"fFaKF":[function(require,module,exports) {
var _virtualSelect = require("virtual-select-plugin/dist/virtual-select");
var _attachFileService = require("./services/AttachFileService");
var _indexedDbService = require("./services/IndexedDbService");
var _spinnerService = require("./services/SpinnerService");
var _multiFormService = require("./services/MultiFormService");
var _initMaskForDateInput = require("./utils/initMaskForDateInput");
var _initMaskForPhoneInput = require("./utils/initMaskForPhoneInput");
var _userService = require("./services/UserService");
var _informationPanelService = require("./services/InformationPanelService");
var _toggleRenderFormOrInformationPanel = require("./utils/toggleRenderFormOrInformationPanel");
var _getEllapsedTimeStatus = require("./utils/getEllapsedTimeStatus");
var _constants = require("./constants");
var _formService = require("./services/FormService");
var _modalService = require("./services/ModalService");
var _handleCustomValidateFieldsForMultiForm = require("./utils/handleCustomValidateFieldsForMultiForm");
var _indexScss = require("../styles/index.scss");
function initConfetti() {
    const confettiCanvas = document.createElement("canvas");
    document.body.appendChild(confettiCanvas);
    window.confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true
    });
}
function initModal() {
    const btn = document.querySelector(".btn-modal");
    if (!btn) throw new Error("Something went wrong");
    const modal = new (0, _modalService.ModalService)({
        id: "modal",
        closeId: "modal-close-btn"
    });
    btn.addEventListener("click", modal.toggle.bind(modal));
}
function initResetModal(userInfoIndexedDb) {
    const btnResetModal = document.querySelector(".btn-reset-form");
    console.log("btnResetModal", btnResetModal);
    btnResetModal.addEventListener("click", async ()=>{
        await userInfoIndexedDb.del("info");
        localStorage.removeItem(`FORM_STEP-${window.location.pathname}`);
        window.location.reload();
    });
}
async function initForm() {
    const formWrapper = document.querySelector(".form");
    const form = formWrapper.querySelector("#form");
    const informationPanelWrapper = new (0, _informationPanelService.InformationPanelService)({
        handleContinueBtnClick: ()=>{
            (0, _toggleRenderFormOrInformationPanel.toggleRenderFormOrInformationPanel)();
        }
    });
    const sessionFromStorage = localStorage.getItem(`FORM_STEP-${window.location.pathname}`);
    const userInfoIndexedDb = new (0, _indexedDbService.IndexedDbService)("userInfo", 1, {
        upgrade (db) {
            db.createObjectStore("userInfo");
        }
    });
    initResetModal(userInfoIndexedDb);
    if (!form) {
        console.error(`Not found form: ${form}`);
        return;
    }
    let user = null;
    let step = 0;
    if (sessionFromStorage) {
        const userSession = JSON.parse(sessionFromStorage);
        const timeExpired = (0, _getEllapsedTimeStatus.getEllapsedTimeStatus)(userSession.created_date);
        const continueStep = informationPanelWrapper.getContinueInformationStep();
        const expiresStep = informationPanelWrapper.getExpiresInformationStep();
        const successStep = informationPanelWrapper.getSuccessInformationStep();
        if (userSession.isFullyRegistrationSuccess) {
            informationPanelWrapper.deleteActiveInformationSteps();
            informationPanelWrapper.activeInformationStep(successStep);
            (0, _toggleRenderFormOrInformationPanel.toggleRenderFormOrInformationPanel)();
            form.remove();
            return;
        }
        if (timeExpired) {
            informationPanelWrapper.deleteActiveInformationSteps();
            informationPanelWrapper.activeInformationStep(expiresStep);
            await userInfoIndexedDb.del("info");
            (0, _toggleRenderFormOrInformationPanel.toggleRenderFormOrInformationPanel)();
            form.remove();
        } else {
            informationPanelWrapper.deleteActiveInformationSteps();
            informationPanelWrapper.activeInformationStep(continueStep);
            step = userSession.step;
            user = await userInfoIndexedDb.get("info");
            (0, _toggleRenderFormOrInformationPanel.toggleRenderFormOrInformationPanel)();
        }
    }
    let userInfoFromSession = {
        user,
        step
    };
    console.log("init");
    await initForm(userInfoFromSession);
    async function initForm(dataFromSession) {
        const userFromSession = dataFromSession.user;
        const stepFromSession = dataFromSession.step;
        const userInfoIndexedDb = window["idb-userInfo"];
        const { _phoneInput , phoneIti  } = (0, _initMaskForPhoneInput.initMaskForPhoneInput)("#mobile-number");
        const $educationSelect = form.querySelector("#education-select");
        const $englishLevelSelect = form.querySelector("#english-level-select");
        const $yearSelect = form.querySelector("#year-select");
        VirtualSelect.init({
            ele: $englishLevelSelect,
            multiple: false,
            search: false,
            required: true,
            hideClearButton: true,
            name: "english-level",
            placeholder: "English level",
            options: (0, _constants.englishLevelSelectOptions),
            showDropboxAsPopup: false
        });
        VirtualSelect.init({
            ele: $educationSelect,
            multiple: false,
            search: false,
            required: false,
            hideClearButton: true,
            name: "education-institution",
            placeholder: "Educational Institution",
            options: [],
            allowNewOption: true,
            showDropboxAsPopup: false
        });
        VirtualSelect.init({
            ele: $yearSelect,
            multiple: false,
            search: false,
            required: true,
            hideClearButton: true,
            name: "year",
            placeholder: "Year",
            options: (0, _constants.yearSelectOptions),
            showDropboxAsPopup: false
        });
        const file = new (0, _attachFileService.AttachFileService)("upload-file", {
            handleChangeValidateInput: (fileInput)=>{
                const { error , errorMessage  } = multiForm.handleValidateInput(fileInput);
                if (!!error) throw new Error(errorMessage);
            },
            handleSuccessAttach: (fileInput)=>{
                (0, _formService.FormService).setSuccessRequire(fileInput);
            },
            handleCanceled: (fileInput)=>{
                (0, _formService.FormService).removeSuccessRequire(fileInput);
            }
        });
        const multiForm = new (0, _multiFormService.MultiFormService)("form", {
            currentStep: stepFromSession || 0,
            customValidateFields: (0, _handleCustomValidateFieldsForMultiForm.handleCustomValidateFieldsForMultiForm),
            handleSuccessNextStep: async (formData, currentStep)=>{
                const userData = formData;
                let allUserData = await userInfoIndexedDb.get("info");
                await userInfoIndexedDb.set("info", {
                    ...allUserData,
                    ...userData
                });
                allUserData = await userInfoIndexedDb.get("info");
                localStorage.setItem(`FORM_STEP-${window.location.pathname}`, JSON.stringify({
                    created_date: Date.now(),
                    step: currentStep + 1,
                    isFullyRegistrationSuccess: false
                }));
                (0, _spinnerService.SpinnerService).showSpinner();
                try {
                    await (0, _userService.UserService).sendUserInfo(allUserData);
                } catch (error) {} finally{
                    (0, _spinnerService.SpinnerService).hideSpinner();
                }
            },
            handleSubmit: async (formData, currentStep)=>{
                const userData = formData;
                let allUserData = await userInfoIndexedDb.get("info");
                await userInfoIndexedDb.set("info", {
                    ...allUserData,
                    ...userData
                });
                allUserData = await userInfoIndexedDb.get("info");
                localStorage.setItem(`FORM_STEP-${window.location.pathname}`, JSON.stringify({
                    created_date: Date.now(),
                    step: currentStep,
                    isFullyRegistrationSuccess: false
                }));
                (0, _spinnerService.SpinnerService).showSpinner();
                try {
                    const responseUser = await (0, _userService.UserService).sendUserData(allUserData);
                    const successStep = informationPanelWrapper.getSuccessInformationStep();
                    informationPanelWrapper.deleteActiveInformationSteps();
                    informationPanelWrapper.activeInformationStep(successStep);
                    (0, _toggleRenderFormOrInformationPanel.toggleRenderFormOrInformationPanel)();
                    form.remove();
                    localStorage.setItem(`FORM_STEP-${window.location.pathname}`, JSON.stringify({
                        created_date: Date.now(),
                        step: currentStep,
                        isFullyRegistrationSuccess: true
                    }));
                    await userInfoIndexedDb.del("info");
                    alert(JSON.stringify(allUserData, null, 4));
                    window.confetti();
                } catch (error) {
                    console.log("error", error);
                } finally{
                    (0, _spinnerService.SpinnerService).hideSpinner();
                }
            },
            setValueOnInit: (input, valueFromInitData)=>{
                if (input.type === "tel") phoneIti.setNumber(valueFromInitData);
                if (input.type === "file") {
                    const fileData = userFromSession?.[input.name] || null;
                    if (!fileData) return;
                    file.setSuccessfulyUploadedStatus(fileData);
                }
            },
            initFormData: userFromSession
        });
        (0, _initMaskForDateInput.initMaskForDateInput)("#date-of-birth");
    }
}
initConfetti();
initForm();
initModal();

},{"virtual-select-plugin/dist/virtual-select":"dld3z","./services/AttachFileService":"g5JSb","./services/IndexedDbService":"5znpE","./services/SpinnerService":"iJIGT","./services/MultiFormService":"13fZW","./utils/initMaskForDateInput":"hjZo1","./utils/initMaskForPhoneInput":"89cpb","./services/UserService":"kdlim","./services/InformationPanelService":"jLmfy","./utils/toggleRenderFormOrInformationPanel":"5QWwT","./utils/getEllapsedTimeStatus":"eGgmI","./constants":"5cvxR","./services/FormService":"u4Saz","./services/ModalService":"9LSIW","./utils/handleCustomValidateFieldsForMultiForm":"kSCKv","../styles/index.scss":"aSOSS"}],"dld3z":[function(require,module,exports) {
/*!
 * Virtual Select v1.0.39
 * https://sa-si-dev.github.io/virtual-select
 * Licensed under MIT (https://github.com/sa-si-dev/virtual-select/blob/master/LICENSE)
 */ /******/ (function() {
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    !function() {
        "use strict";
        function _toConsumableArray(arr) {
            return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
            return arr2;
        }
        function _typeof(obj) {
            "@babel/helpers - typeof";
            return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, _typeof(obj);
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return _typeof(key) === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
            if (_typeof(input) !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (_typeof(res) !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }
        var Utils = /*#__PURE__*/ function() {
            function Utils() {
                _classCallCheck(this, Utils);
            }
            _createClass(Utils, null, [
                {
                    key: "getString",
                    value: /**
     * @param {any} text
     * @returns {string}
     */ function getString(text) {
                        return text || text === 0 ? text.toString() : "";
                    }
                },
                {
                    key: "convertToBoolean",
                    value: function convertToBoolean(value) {
                        var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var result;
                        if (value === true || value === "true") result = true;
                        else if (value === false || value === "false") result = false;
                        else result = defaultValue;
                        return result;
                    }
                },
                {
                    key: "isEmpty",
                    value: function isEmpty(value) {
                        var result = false;
                        if (!value) result = true;
                        else if (Array.isArray(value)) {
                            if (value.length === 0) result = true;
                        } else if (_typeof(value) === "object" && Object.keys(value).length === 0) result = true;
                        return result;
                    }
                },
                {
                    key: "isNotEmpty",
                    value: function isNotEmpty(value) {
                        return !this.isEmpty(value);
                    }
                },
                {
                    key: "removeItemFromArray",
                    value: function removeItemFromArray(array, value) {
                        var cloneArray = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        if (!Array.isArray(array) || !array.length) return array;
                        var inputArr = cloneArray ? _toConsumableArray(array) : array;
                        var index = inputArr.indexOf(value);
                        if (index !== -1) inputArr.splice(index, 1);
                        return inputArr;
                    }
                },
                {
                    key: "removeArrayEmpty",
                    value: function removeArrayEmpty(array) {
                        if (!Array.isArray(array) || !array.length) return [];
                        return array.filter(function(d) {
                            return !!d;
                        });
                    }
                },
                {
                    key: "getRandomInt",
                    value: function getRandomInt(max) {
                        var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                        var minN = Math.ceil(min);
                        var maxN = Math.floor(max);
                        return Math.floor(Math.random() * (maxN - minN - 1)) + minN;
                    }
                },
                {
                    key: "regexEscape",
                    value: function regexEscape(text) {
                        var ESC_REGEX = /[-/\\^$*+?.()|[\]{}]/g;
                        return text.replace(ESC_REGEX, "\\$&");
                    }
                },
                {
                    key: "normalizeString",
                    value: function normalizeString(text) {
                        var NON_WORD_REGEX = /[^\w]/g;
                        return text.normalize("NFD").replace(NON_WORD_REGEX, "");
                    }
                }
            ]);
            return Utils;
        }();
        function dom_utils_typeof(obj) {
            "@babel/helpers - typeof";
            return dom_utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, dom_utils_typeof(obj);
        }
        function _slicedToArray(arr, i) {
            return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || dom_utils_unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
            if (null != _i) {
                var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
                try {
                    if (_x = (_i = _i.call(arr)).next, 0 === i) {
                        if (Object(_i) !== _i) return;
                        _n = !1;
                    } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
                } catch (err) {
                    _d = !0, _e = err;
                } finally{
                    try {
                        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function dom_utils_toConsumableArray(arr) {
            return dom_utils_arrayWithoutHoles(arr) || dom_utils_iterableToArray(arr) || dom_utils_unsupportedIterableToArray(arr) || dom_utils_nonIterableSpread();
        }
        function dom_utils_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function dom_utils_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return dom_utils_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return dom_utils_arrayLikeToArray(o, minLen);
        }
        function dom_utils_iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function dom_utils_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return dom_utils_arrayLikeToArray(arr);
        }
        function dom_utils_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
            return arr2;
        }
        function dom_utils_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function dom_utils_defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, dom_utils_toPropertyKey(descriptor.key), descriptor);
            }
        }
        function dom_utils_createClass(Constructor, protoProps, staticProps) {
            if (protoProps) dom_utils_defineProperties(Constructor.prototype, protoProps);
            if (staticProps) dom_utils_defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function dom_utils_toPropertyKey(arg) {
            var key = dom_utils_toPrimitive(arg, "string");
            return dom_utils_typeof(key) === "symbol" ? key : String(key);
        }
        function dom_utils_toPrimitive(input, hint) {
            if (dom_utils_typeof(input) !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (dom_utils_typeof(res) !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }
        var DomUtils = /*#__PURE__*/ function() {
            function DomUtils() {
                dom_utils_classCallCheck(this, DomUtils);
            }
            dom_utils_createClass(DomUtils, null, [
                {
                    key: "addClass",
                    value: /**
     * @param {HTMLElement | NodeListOf<HTMLElement>} $ele
     * @param {string} classNames
     */ function addClass($ele, classNames) {
                        if (!$ele) return;
                        var classNamesArr = classNames.split(" ");
                        DomUtils.getElements($ele).forEach(function($this) {
                            var _$this$classList;
                            (_$this$classList = $this.classList).add.apply(_$this$classList, dom_utils_toConsumableArray(classNamesArr));
                        });
                    }
                },
                {
                    key: "removeClass",
                    value: function removeClass($ele, classNames) {
                        if (!$ele) return;
                        var classNamesArr = classNames.split(" ");
                        DomUtils.getElements($ele).forEach(function($this) {
                            var _$this$classList2;
                            (_$this$classList2 = $this.classList).remove.apply(_$this$classList2, dom_utils_toConsumableArray(classNamesArr));
                        });
                    }
                },
                {
                    key: "toggleClass",
                    value: function toggleClass($ele, classNames, isAdd) {
                        if (!$ele) return;
                        /** @type {boolean | undefined} */ var isAdding;
                        if (isAdd !== undefined) isAdding = Boolean(isAdd);
                        DomUtils.getElements($ele).forEach(function($this) {
                            $this.classList.toggle(classNames, isAdding);
                        });
                    }
                },
                {
                    key: "hasClass",
                    value: function hasClass($ele, className) {
                        if (!$ele) return false;
                        return $ele.classList.contains(className);
                    }
                },
                {
                    key: "hasEllipsis",
                    value: function hasEllipsis($ele) {
                        if (!$ele) return false;
                        return $ele.scrollWidth > $ele.offsetWidth;
                    }
                },
                {
                    key: "getData",
                    value: function getData($ele, name, type) {
                        if (!$ele) return undefined;
                        /** @type {any} */ var value = $ele ? $ele.dataset[name] : "";
                        if (type === "number") value = parseFloat(value) || 0;
                        else if (value === "true") value = true;
                        else if (value === "false") value = false;
                        return value;
                    }
                },
                {
                    key: "setData",
                    value: function setData($ele, name, value) {
                        if (!$ele) return;
                        // eslint-disable-next-line no-param-reassign
                        $ele.dataset[name] = value;
                    }
                },
                {
                    key: "setAttr",
                    value: function setAttr($ele, name, value) {
                        if (!$ele) return;
                        $ele.setAttribute(name, value);
                    }
                },
                {
                    key: "setAttrFromEle",
                    value: function setAttrFromEle($from, $to, attrList, valueLessProps) {
                        /** @type {any} */ var values = {};
                        attrList.forEach(function(attr) {
                            values[attr] = $from.getAttribute(attr);
                        });
                        attrList.forEach(function(attr) {
                            var value = values[attr];
                            if (value || valueLessProps.indexOf(attr) !== -1 && value === "") $to.setAttribute(attr, value);
                        });
                    }
                },
                {
                    key: "setStyle",
                    value: function setStyle($ele, name, value) {
                        if (!$ele) return;
                        // @ts-ignore
                        // eslint-disable-next-line no-param-reassign
                        $ele.style[name] = value;
                    }
                },
                {
                    key: "setStyles",
                    value: function setStyles($ele, props) {
                        if (!$ele || !props) return;
                        Object.keys(props).forEach(function(name) {
                            // @ts-ignore
                            // eslint-disable-next-line no-param-reassign
                            $ele.style[name] = props[name];
                        });
                    }
                },
                {
                    key: "setAria",
                    value: function setAria($ele, name, value) {
                        var attrName = name;
                        if (attrName !== "role") attrName = "aria-".concat(attrName);
                        $ele.setAttribute(attrName, value);
                    }
                },
                {
                    key: "getElements",
                    value: function getElements($ele) {
                        if (!$ele) return [];
                        return $ele.forEach === undefined ? [
                            $ele
                        ] : $ele;
                    }
                },
                {
                    key: "addEvent",
                    value: function addEvent($ele, events, callback) {
                        if (!$ele) return;
                        var eventsArray = Utils.removeArrayEmpty(events.split(" "));
                        eventsArray.forEach(function(event) {
                            var $eleArray = DomUtils.getElements($ele);
                            $eleArray.forEach(function($this) {
                                $this.addEventListener(event, callback);
                            });
                        });
                    }
                },
                {
                    key: "dispatchEvent",
                    value: function dispatchEvent($ele, eventName) {
                        var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        if (!$ele) return;
                        var $eleArray = DomUtils.getElements($ele);
                        /** using setTimeout to trigger asynchronous event */ setTimeout(function() {
                            $eleArray.forEach(function($this) {
                                $this.dispatchEvent(new CustomEvent(eventName, {
                                    bubbles: bubbles
                                }));
                            });
                        }, 0);
                    }
                },
                {
                    key: "getAttributesText",
                    value: function getAttributesText(data) {
                        var html = "";
                        if (!data) return html;
                        // @ts-ignore
                        Object.entries(data).forEach(function(_ref) {
                            var _ref2 = _slicedToArray(_ref, 2), k = _ref2[0], v = _ref2[1];
                            if (v !== undefined) html += " ".concat(k, '="').concat(v, '" ');
                        });
                        return html;
                    }
                },
                {
                    key: "convertPropToDataAttr",
                    value: function convertPropToDataAttr(prop) {
                        return prop ? "data-".concat(prop).replace(/([A-Z])/g, "-$1").toLowerCase() : "";
                    }
                },
                {
                    key: "changeTabIndex",
                    value: function changeTabIndex($ele, newTabIndex) {
                        if (!$ele) {
                            // eslint-disable-next-line no-console
                            console.log($ele, "Invalid element provided.");
                            return;
                        }
                        DomUtils.getElements($ele).forEach(function($this) {
                            // eslint-disable-next-line no-param-reassign
                            $this.tabIndex = newTabIndex;
                        });
                    }
                }
            ]);
            return DomUtils;
        }();
        function ownKeys(object, enumerableOnly) {
            var keys = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var symbols = Object.getOwnPropertySymbols(object);
                enumerableOnly && (symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                })), keys.push.apply(keys, symbols);
            }
            return keys;
        }
        function _objectSpread(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            key = virtual_select_toPropertyKey(key);
            if (key in obj) Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            else obj[key] = value;
            return obj;
        }
        function virtual_select_typeof(obj) {
            "@babel/helpers - typeof";
            return virtual_select_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                return typeof obj;
            } : function(obj) {
                return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            }, virtual_select_typeof(obj);
        }
        function virtual_select_slicedToArray(arr, i) {
            return virtual_select_arrayWithHoles(arr) || virtual_select_iterableToArrayLimit(arr, i) || virtual_select_unsupportedIterableToArray(arr, i) || virtual_select_nonIterableRest();
        }
        function virtual_select_nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function virtual_select_iterableToArrayLimit(arr, i) {
            var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
            if (null != _i) {
                var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1;
                try {
                    if (_x = (_i = _i.call(arr)).next, 0 === i) {
                        if (Object(_i) !== _i) return;
                        _n = !1;
                    } else for(; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
                } catch (err) {
                    _d = !0, _e = err;
                } finally{
                    try {
                        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
                    } finally{
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
        }
        function virtual_select_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
        }
        function virtual_select_toConsumableArray(arr) {
            return virtual_select_arrayWithoutHoles(arr) || virtual_select_iterableToArray(arr) || virtual_select_unsupportedIterableToArray(arr) || virtual_select_nonIterableSpread();
        }
        function virtual_select_nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function virtual_select_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return virtual_select_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            if (n === "Map" || n === "Set") return Array.from(o);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return virtual_select_arrayLikeToArray(o, minLen);
        }
        function virtual_select_iterableToArray(iter) {
            if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function virtual_select_arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return virtual_select_arrayLikeToArray(arr);
        }
        function virtual_select_arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
            return arr2;
        }
        function virtual_select_classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function virtual_select_defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, virtual_select_toPropertyKey(descriptor.key), descriptor);
            }
        }
        function virtual_select_createClass(Constructor, protoProps, staticProps) {
            if (protoProps) virtual_select_defineProperties(Constructor.prototype, protoProps);
            if (staticProps) virtual_select_defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function virtual_select_toPropertyKey(arg) {
            var key = virtual_select_toPrimitive(arg, "string");
            return virtual_select_typeof(key) === "symbol" ? key : String(key);
        }
        function virtual_select_toPrimitive(input, hint) {
            if (virtual_select_typeof(input) !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (virtual_select_typeof(res) !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }
        /** cSpell:ignore nocheck, Labelledby, vscomp, tabindex, combobox, haspopup, listbox, activedescendant */ /* eslint-disable class-methods-use-this */ // @ts-nocheck
        var dropboxCloseButtonFullHeight = 48;
        var searchHeight = 40;
        var keyDownMethodMapping = {
            13: "onEnterPress",
            38: "onUpArrowPress",
            40: "onDownArrowPress"
        };
        var valueLessProps = [
            "autofocus",
            "disabled",
            "multiple",
            "required"
        ];
        var nativeProps = [
            "autofocus",
            "class",
            "disabled",
            "id",
            "multiple",
            "name",
            "placeholder",
            "required"
        ];
        var attrPropsMapping;
        var dataProps = [
            "additionalClasses",
            "aliasKey",
            "allOptionsSelectedText",
            "allowNewOption",
            "alwaysShowSelectedOptionsCount",
            "alwaysShowSelectedOptionsLabel",
            "ariaLabelledby",
            "ariaLabelText",
            "autoSelectFirstOption",
            "clearButtonText",
            "descriptionKey",
            "disableAllOptionsSelectedText",
            "disableOptionGroupCheckbox",
            "disableSelectAll",
            "disableValidation",
            "dropboxWidth",
            "dropboxWrapper",
            "emptyValue",
            "enableSecureText",
            "focusSelectedOptionOnOpen",
            "hasOptionDescription",
            "hideClearButton",
            "hideValueTooltipOnSelectAll",
            "keepAlwaysOpen",
            "labelKey",
            "markSearchResults",
            "maxValues",
            "maxWidth",
            "minValues",
            "moreText",
            "noOfDisplayValues",
            "noOptionsText",
            "noSearchResultsText",
            "optionHeight",
            "optionSelectedText",
            "optionsCount",
            "optionsSelectedText",
            "popupDropboxBreakpoint",
            "popupPosition",
            "position",
            "search",
            "searchByStartsWith",
            "searchDelay",
            "searchFormLabel",
            "searchGroup",
            "searchNormalize",
            "searchPlaceholderText",
            "selectAllOnlyVisible",
            "selectAllText",
            "setValueAsArray",
            "showDropboxAsPopup",
            "showOptionsOnlyOnSearch",
            "showSelectedOptionsFirst",
            "showValueAsTags",
            "silentInitialValueSet",
            "textDirection",
            "tooltipAlignment",
            "tooltipFontSize",
            "tooltipMaxWidth",
            "updatePositionThrottle",
            "useGroupValue",
            "valueKey",
            "zIndex"
        ];
        /** Class representing VirtualSelect */ var VirtualSelect = /*#__PURE__*/ function() {
            /**
   * @param {virtualSelectOptions} options
   */ function VirtualSelect(options) {
                virtual_select_classCallCheck(this, VirtualSelect);
                try {
                    this.createSecureTextElements();
                    this.setProps(options);
                    this.setDisabledOptions(options.disabledOptions);
                    this.setOptions(options.options);
                    this.render();
                } catch (e) {
                    // eslint-disable-next-line no-console
                    console.warn("Couldn't initiate Virtual Select");
                    // eslint-disable-next-line no-console
                    console.error(e);
                }
            }
            /** render methods - start */ virtual_select_createClass(VirtualSelect, [
                {
                    key: "render",
                    value: function render() {
                        if (!this.$ele) return;
                        var uniqueId = this.uniqueId;
                        var wrapperClasses = "vscomp-wrapper";
                        var valueTooltip = this.getTooltipAttrText(this.placeholder, true, true);
                        var clearButtonTooltip = this.getTooltipAttrText(this.clearButtonText);
                        var ariaLabelledbyText = this.ariaLabelledby ? 'aria-labelledby="'.concat(this.ariaLabelledby, '"') : "";
                        var ariaLabelText = this.ariaLabelText ? 'aria-label="'.concat(this.ariaLabelText, '"') : "";
                        var isExpanded = false;
                        if (this.additionalClasses) wrapperClasses += " ".concat(this.additionalClasses);
                        if (this.multiple) {
                            wrapperClasses += " multiple";
                            if (!this.disableSelectAll) wrapperClasses += " has-select-all";
                        }
                        if (!this.hideClearButton) wrapperClasses += " has-clear-button";
                        if (this.keepAlwaysOpen) {
                            wrapperClasses += " keep-always-open";
                            isExpanded = true;
                        } else wrapperClasses += " closed";
                        if (this.showAsPopup) wrapperClasses += " show-as-popup";
                        if (this.hasSearch) wrapperClasses += " has-search-input";
                        if (this.showValueAsTags) wrapperClasses += " show-value-as-tags";
                        if (this.textDirection) wrapperClasses += " text-direction-".concat(this.textDirection);
                        if (this.popupPosition) wrapperClasses += " popup-position-".concat(this.popupPosition.toLowerCase());
                        var html = '<div id="vscomp-ele-wrapper-'.concat(uniqueId, '" class="vscomp-ele-wrapper ').concat(wrapperClasses, '" tabindex="0"\n        role="combobox" aria-haspopup="listbox" aria-controls="vscomp-dropbox-container-').concat(uniqueId, '"\n        aria-expanded="').concat(isExpanded, '" ').concat(ariaLabelledbyText, " ").concat(ariaLabelText, '\n      >\n        <input type="hidden" name="').concat(this.name, '" class="vscomp-hidden-input">\n\n        <div class="vscomp-toggle-button">\n          <div class="vscomp-value" ').concat(valueTooltip, ">\n            ").concat(this.placeholder, '\n          </div>\n\n          <div class="vscomp-arrow"></div>\n\n          <div class="vscomp-clear-button toggle-button-child" ').concat(clearButtonTooltip, '>\n            <i class="vscomp-clear-icon"></i>\n          </div>\n        </div>\n\n        <section role="region" class="vscomp-live-region" aria-live="polite">\n          <p class="vscomp-live-region-title"></p>\n        </section>\n\n        ').concat(this.renderDropbox({
                            wrapperClasses: wrapperClasses
                        }), "\n      </div>");
                        this.$ele.innerHTML = html;
                        this.$body = document.querySelector("body");
                        this.$wrapper = this.$ele.querySelector(".vscomp-wrapper");
                        this.$ariaLiveElem = this.$ele.querySelector(".vscomp-live-region-title");
                        if (this.hasDropboxWrapper) {
                            this.$allWrappers = [
                                this.$wrapper,
                                this.$dropboxWrapper
                            ];
                            this.$dropboxContainer = this.$dropboxWrapper.querySelector(".vscomp-dropbox-container");
                            DomUtils.addClass(this.$dropboxContainer, "pop-comp-wrapper");
                        } else {
                            this.$allWrappers = [
                                this.$wrapper
                            ];
                            this.$dropboxContainer = this.$wrapper.querySelector(".vscomp-dropbox-container");
                        }
                        this.$toggleButton = this.$ele.querySelector(".vscomp-toggle-button");
                        this.$clearButton = this.$ele.querySelector(".vscomp-clear-button");
                        this.$valueText = this.$ele.querySelector(".vscomp-value");
                        this.$hiddenInput = this.$ele.querySelector(".vscomp-hidden-input");
                        this.$dropbox = this.$dropboxContainer.querySelector(".vscomp-dropbox");
                        this.$dropboxCloseButton = this.$dropboxContainer.querySelector(".vscomp-dropbox-close-button");
                        this.$search = this.$dropboxContainer.querySelector(".vscomp-search-wrapper");
                        this.$optionsContainer = this.$dropboxContainer.querySelector(".vscomp-options-container");
                        this.$optionsList = this.$dropboxContainer.querySelector(".vscomp-options-list");
                        this.$options = this.$dropboxContainer.querySelector(".vscomp-options");
                        this.$noOptions = this.$dropboxContainer.querySelector(".vscomp-no-options");
                        this.$noSearchResults = this.$dropboxContainer.querySelector(".vscomp-no-search-results");
                        this.afterRenderWrapper();
                    }
                },
                {
                    key: "renderDropbox",
                    value: function renderDropbox(_ref) {
                        var wrapperClasses = _ref.wrapperClasses;
                        var $wrapper = this.dropboxWrapper !== "self" ? document.querySelector(this.dropboxWrapper) : null;
                        var html = '<div id="vscomp-dropbox-container-'.concat(this.uniqueId, '" role="listbox" class="vscomp-dropbox-container">\n        <div class="vscomp-dropbox">\n          <div class="vscomp-search-wrapper"></div>\n\n          <div class="vscomp-options-container">\n            <div class="vscomp-options-loader"></div>\n\n            <div class="vscomp-options-list">\n              <div class="vscomp-options"></div>\n            </div>\n          </div>\n\n          <div class="vscomp-options-bottom-freezer"></div>\n          <div class="vscomp-no-options">').concat(this.noOptionsText, '</div>\n          <div class="vscomp-no-search-results">').concat(this.noSearchResultsText, '</div>\n\n          <span class="vscomp-dropbox-close-button"><i class="vscomp-clear-icon"></i></span>\n        </div>\n      </div>\n');
                        if ($wrapper) {
                            var $dropboxWrapper = document.createElement("div");
                            this.$dropboxWrapper = $dropboxWrapper;
                            this.hasDropboxWrapper = true;
                            $dropboxWrapper.innerHTML = html;
                            $wrapper.appendChild($dropboxWrapper);
                            DomUtils.addClass($dropboxWrapper, "vscomp-dropbox-wrapper ".concat(wrapperClasses));
                            return "";
                        }
                        this.hasDropboxWrapper = false;
                        return html;
                    }
                },
                {
                    key: "renderOptions",
                    value: function renderOptions() {
                        var _this = this;
                        var html = "";
                        var visibleOptions = this.getVisibleOptions();
                        var checkboxHtml = "";
                        var newOptionIconHtml = "";
                        var markSearchResults = !!(this.markSearchResults && this.searchValue);
                        var searchRegex;
                        var labelRenderer = this.labelRenderer, disableOptionGroupCheckbox = this.disableOptionGroupCheckbox, uniqueId = this.uniqueId, searchGroup = this.searchGroup;
                        var hasLabelRenderer = typeof labelRenderer === "function";
                        var convertToBoolean = Utils.convertToBoolean;
                        if (markSearchResults) searchRegex = new RegExp("(".concat(Utils.regexEscape(this.searchValue), ")(?!([^<]+)?>)"), "gi");
                        if (this.multiple) checkboxHtml = '<span class="checkbox-icon"></span>';
                        if (this.allowNewOption) {
                            var newOptionTooltip = this.getTooltipAttrText("New Option");
                            newOptionIconHtml = '<span class="vscomp-new-option-icon" '.concat(newOptionTooltip, "></span>");
                        }
                        visibleOptions.forEach(function(d) {
                            var index = d.index;
                            var optionLabel;
                            var optionClasses = "vscomp-option";
                            var optionTooltip = _this.getTooltipAttrText("", true, true);
                            var leftSection = checkboxHtml;
                            var rightSection = "";
                            var description = "";
                            var groupIndexText = "";
                            var isSelected1 = convertToBoolean(d.isSelected);
                            var ariaDisabledText = "";
                            if (d.classNames) optionClasses += " ".concat(d.classNames);
                            if (d.isFocused) optionClasses += " focused";
                            if (d.isDisabled) {
                                optionClasses += " disabled";
                                ariaDisabledText = 'aria-disabled="true"';
                            }
                            if (d.isGroupTitle) {
                                optionClasses += " group-title";
                                if (disableOptionGroupCheckbox) leftSection = "";
                            }
                            if (isSelected1) optionClasses += " selected";
                            if (d.isGroupOption) {
                                optionClasses += " group-option";
                                groupIndexText = 'data-group-index="'.concat(d.groupIndex, '"');
                            }
                            if (hasLabelRenderer) optionLabel = labelRenderer(d);
                            else optionLabel = d.label;
                            if (d.description) description = '<div class="vscomp-option-description" '.concat(optionTooltip, ">").concat(d.description, "</div>");
                            if (d.isCurrentNew) {
                                optionClasses += " current-new";
                                rightSection += newOptionIconHtml;
                            } else if (markSearchResults && (!d.isGroupTitle || searchGroup)) optionLabel = optionLabel.replace(searchRegex, "<mark>$1</mark>");
                            html += '<div role="option" aria-selected="'.concat(isSelected1, '" id="vscomp-option-').concat(uniqueId, "-").concat(index, '"\n          class="').concat(optionClasses, '" data-value="').concat(d.value, '" data-index="').concat(index, '" data-visible-index="').concat(d.visibleIndex, '" tabindex="0" ').concat(groupIndexText, " ").concat(ariaDisabledText, "\n        >\n          ").concat(leftSection, '\n          <span class="vscomp-option-text" ').concat(optionTooltip, ">\n            ").concat(optionLabel, "\n          </span>\n          ").concat(description, "\n          ").concat(rightSection, "\n        </div>");
                        });
                        this.$options.innerHTML = html;
                        this.$visibleOptions = this.$options.querySelectorAll(".vscomp-option");
                        this.afterRenderOptions();
                    }
                },
                {
                    key: "renderSearch",
                    value: function renderSearch() {
                        if (!this.hasSearchContainer) return;
                        var checkboxHtml = "";
                        var searchInput = "";
                        if (this.multiple && !this.disableSelectAll) checkboxHtml = '<span class="vscomp-toggle-all-button">\n          <span class="checkbox-icon vscomp-toggle-all-checkbox"></span>\n          <span class="vscomp-toggle-all-label">'.concat(this.selectAllText, "</span>\n        </span>");
                        if (this.hasSearch) searchInput = '<label for="vscomp-search-input-'.concat(this.uniqueId, '" class="vscomp-search-label" id="vscomp-search-label-').concat(this.uniqueId, '">').concat(this.searchFormLabel, '</label>\n      <input type="text" class="vscomp-search-input" placeholder="').concat(this.searchPlaceholderText, '" id="vscomp-search-input-').concat(this.uniqueId, '">\n      <span class="vscomp-search-clear">&times;</span>');
                        var html = '<div class="vscomp-search-container">\n        '.concat(checkboxHtml, "\n        ").concat(searchInput, "\n      </div>");
                        this.$search.innerHTML = html;
                        this.$searchInput = this.$dropboxContainer.querySelector(".vscomp-search-input");
                        this.$searchClear = this.$dropboxContainer.querySelector(".vscomp-search-clear");
                        this.$toggleAllButton = this.$dropboxContainer.querySelector(".vscomp-toggle-all-button");
                        this.$toggleAllCheckbox = this.$dropboxContainer.querySelector(".vscomp-toggle-all-checkbox");
                        this.addEvent(this.$searchInput, "input", "onSearch");
                        this.addEvent(this.$searchClear, "click", "onSearchClear");
                        this.addEvent(this.$toggleAllButton, "click", "onToggleAllOptions");
                    }
                },
                {
                    key: "addEvents",
                    value: function addEvents() {
                        this.addEvent(document, "click", "onDocumentClick");
                        this.addEvent(this.$allWrappers, "keydown", "onKeyDown");
                        this.addEvent(this.$toggleButton, "click", "onToggleButtonClick");
                        this.addEvent(this.$clearButton, "click", "onClearButtonClick");
                        this.addEvent(this.$dropboxContainer, "click", "onDropboxContainerClick");
                        this.addEvent(this.$dropboxCloseButton, "click", "onDropboxCloseButtonClick");
                        this.addEvent(this.$optionsContainer, "scroll", "onOptionsScroll");
                        this.addEvent(this.$options, "click", "onOptionsClick");
                        this.addEvent(this.$options, "mouseover", "onOptionsMouseOver");
                        this.addEvent(this.$options, "touchmove", "onOptionsTouchMove");
                        this.addMutationObserver();
                    }
                },
                {
                    key: "addEvent",
                    value: function addEvent($ele, events, method) {
                        var _this2 = this;
                        if (!$ele) return;
                        var eventsArray = Utils.removeArrayEmpty(events.split(" "));
                        eventsArray.forEach(function(event) {
                            var eventsKey = "".concat(method, "-").concat(event);
                            var callback = _this2.events[eventsKey];
                            if (!callback) {
                                callback = _this2[method].bind(_this2);
                                _this2.events[eventsKey] = callback;
                            }
                            DomUtils.addEvent($ele, event, callback);
                        });
                    }
                },
                {
                    key: "onDocumentClick",
                    value: function onDocumentClick(e) {
                        var $eleToKeepOpen = e.target.closest(".vscomp-wrapper");
                        if ($eleToKeepOpen !== this.$wrapper && $eleToKeepOpen !== this.$dropboxWrapper && this.isOpened()) this.closeDropbox();
                    }
                },
                {
                    key: "onKeyDown",
                    value: function onKeyDown(e) {
                        var key = e.which || e.keyCode;
                        var method = keyDownMethodMapping[key];
                        if (document.activeElement === this.$searchInput && (key === 9 || e.shiftKey && key === 9)) {
                            this.closeDropbox();
                            return;
                        }
                        // Handle the Escape key when showing the dropdown as a popup, closing it
                        if (document.activeElement === this.$wrapper && (key === 27 || e.key === "Escape") && this.showAsPopup) {
                            this.closeDropbox();
                            return;
                        }
                        if (method) this[method](e);
                    }
                },
                {
                    key: "onEnterPress",
                    value: function onEnterPress(e) {
                        e.preventDefault();
                        if (this.isOpened()) this.selectFocusedOption();
                        else this.openDropbox();
                    }
                },
                {
                    key: "onDownArrowPress",
                    value: function onDownArrowPress(e) {
                        e.preventDefault();
                        if (this.isOpened()) this.focusOption({
                            direction: "next"
                        });
                        else this.openDropbox();
                    }
                },
                {
                    key: "onUpArrowPress",
                    value: function onUpArrowPress(e) {
                        e.preventDefault();
                        if (this.isOpened()) this.focusOption({
                            direction: "previous"
                        });
                        else this.openDropbox();
                    }
                },
                {
                    key: "onToggleButtonClick",
                    value: function onToggleButtonClick(e) {
                        var $target = e.target;
                        if ($target.closest(".vscomp-value-tag-clear-button")) this.removeValue($target.closest(".vscomp-value-tag"));
                        else if (!$target.closest(".toggle-button-child")) this.toggleDropbox();
                    }
                },
                {
                    key: "onClearButtonClick",
                    value: function onClearButtonClick() {
                        this.reset();
                    }
                },
                {
                    key: "onOptionsScroll",
                    value: function onOptionsScroll() {
                        this.setVisibleOptions();
                    }
                },
                {
                    key: "onOptionsClick",
                    value: function onOptionsClick(e) {
                        var $option = e.target.closest(".vscomp-option");
                        if ($option && !DomUtils.hasClass($option, "disabled")) {
                            if (DomUtils.hasClass($option, "group-title")) this.onGroupTitleClick($option);
                            else this.selectOption($option, {
                                event: e
                            });
                        }
                    }
                },
                {
                    key: "onGroupTitleClick",
                    value: function onGroupTitleClick($ele) {
                        if (!$ele || !this.multiple || this.disableOptionGroupCheckbox) return;
                        var isAdding = !DomUtils.hasClass($ele, "selected");
                        this.toggleGroupTitleCheckbox($ele, isAdding);
                        this.toggleGroupOptions($ele, isAdding);
                    }
                },
                {
                    key: "onDropboxContainerClick",
                    value: function onDropboxContainerClick(e) {
                        if (!e.target.closest(".vscomp-dropbox")) this.closeDropbox();
                    }
                },
                {
                    key: "onDropboxCloseButtonClick",
                    value: function onDropboxCloseButtonClick() {
                        this.closeDropbox();
                    }
                },
                {
                    key: "onOptionsMouseOver",
                    value: function onOptionsMouseOver(e) {
                        var $ele = e.target.closest(".vscomp-option");
                        if ($ele && this.isOpened()) {
                            if (DomUtils.hasClass($ele, "disabled") || DomUtils.hasClass($ele, "group-title")) this.removeOptionFocus();
                            else this.focusOption({
                                $option: $ele
                            });
                        }
                    }
                },
                {
                    key: "onOptionsTouchMove",
                    value: function onOptionsTouchMove() {
                        this.removeOptionFocus();
                    }
                },
                {
                    key: "onSearch",
                    value: function onSearch(e) {
                        e.stopPropagation();
                        this.setSearchValue(e.target.value, true);
                    }
                },
                {
                    key: "onSearchClear",
                    value: function onSearchClear() {
                        this.setSearchValue("");
                        this.focusSearchInput();
                    }
                },
                {
                    key: "onToggleAllOptions",
                    value: function onToggleAllOptions() {
                        this.toggleAllOptions();
                    }
                },
                {
                    key: "onResize",
                    value: function onResize() {
                        this.setOptionsContainerHeight(true);
                    }
                },
                {
                    key: "addMutationObserver",
                    value: function addMutationObserver() {
                        var _this3 = this;
                        if (!this.hasDropboxWrapper) return;
                        var $vscompEle = this.$ele;
                        this.mutationObserver = new MutationObserver(function(mutations) {
                            var isAdded = false;
                            var isRemoved = false;
                            mutations.forEach(function(mutation) {
                                if (!isAdded) isAdded = virtual_select_toConsumableArray(mutation.addedNodes).some(function($ele) {
                                    return !!($ele === $vscompEle || $ele.contains($vscompEle));
                                });
                                if (!isRemoved) isRemoved = virtual_select_toConsumableArray(mutation.removedNodes).some(function($ele) {
                                    return !!($ele === $vscompEle || $ele.contains($vscompEle));
                                });
                            });
                            if (isRemoved && !isAdded) _this3.destroy();
                        });
                        this.mutationObserver.observe(document.querySelector("body"), {
                            childList: true,
                            subtree: true
                        });
                    }
                },
                {
                    key: "beforeValueSet",
                    value: function beforeValueSet(isReset) {
                        this.toggleAllOptionsClass(isReset ? false : undefined);
                    }
                },
                {
                    key: "beforeSelectNewValue",
                    value: function beforeSelectNewValue() {
                        var _this4 = this;
                        var newOption = this.getNewOption();
                        var newIndex = newOption.index;
                        this.newValues.push(newOption.value);
                        this.setOptionProp(newIndex, "isCurrentNew", false);
                        this.setOptionProp(newIndex, "isNew", true);
                        /** using setTimeout to fix the issue of dropbox getting closed on select */ setTimeout(function() {
                            _this4.setSearchValue("");
                            _this4.focusSearchInput();
                        }, 0);
                    }
                },
                {
                    key: "afterRenderWrapper",
                    value: function afterRenderWrapper() {
                        DomUtils.addClass(this.$ele, "vscomp-ele");
                        this.renderSearch();
                        this.setEleStyles();
                        this.setDropboxStyles();
                        this.setOptionsHeight();
                        this.setVisibleOptions();
                        this.setOptionsContainerHeight();
                        this.addEvents();
                        this.setEleProps();
                        if (!this.keepAlwaysOpen && !this.showAsPopup) this.initDropboxPopover();
                        if (this.initialSelectedValue) this.setValueMethod(this.initialSelectedValue, this.silentInitialValueSet);
                        else if (this.autoSelectFirstOption && this.visibleOptions.length) this.setValueMethod(this.visibleOptions[0].value, this.silentInitialValueSet);
                        if (this.showOptionsOnlyOnSearch) this.setSearchValue("", false, true);
                        if (this.initialDisabled) this.disable();
                        if (this.autofocus) this.focus();
                    }
                },
                {
                    key: "afterRenderOptions",
                    value: function afterRenderOptions() {
                        var visibleOptions = this.getVisibleOptions();
                        var hasNoOptions = !this.options.length && !this.hasServerSearch;
                        var hasNoSearchResults = !hasNoOptions && !visibleOptions.length;
                        if (!this.allowNewOption || this.hasServerSearch || this.showOptionsOnlyOnSearch) DomUtils.toggleClass(this.$allWrappers, "has-no-search-results", hasNoSearchResults);
                        DomUtils.toggleClass(this.$allWrappers, "has-no-options", hasNoOptions);
                        this.setOptionAttr();
                        this.setOptionsPosition();
                        this.setOptionsTooltip();
                    }
                },
                {
                    key: "afterSetOptionsContainerHeight",
                    value: function afterSetOptionsContainerHeight(reset) {
                        if (reset && this.showAsPopup) this.setVisibleOptions();
                    }
                },
                {
                    key: "afterSetSearchValue",
                    value: function afterSetSearchValue() {
                        var _this5 = this;
                        if (this.hasServerSearch) {
                            clearInterval(this.serverSearchTimeout);
                            this.serverSearchTimeout = setTimeout(function() {
                                _this5.serverSearch();
                            }, this.searchDelay);
                        } else this.setVisibleOptionsCount();
                        if (this.selectAllOnlyVisible) this.toggleAllOptionsClass();
                        this.focusOption({
                            focusFirst: true
                        });
                    }
                },
                {
                    key: "afterSetVisibleOptionsCount",
                    value: function afterSetVisibleOptionsCount() {
                        this.scrollToTop();
                        this.setOptionsHeight();
                        this.setVisibleOptions();
                        this.updatePosition();
                    }
                },
                {
                    key: "afterValueSet",
                    value: function afterValueSet() {
                        this.scrollToTop();
                        this.setSearchValue("");
                        this.renderOptions();
                    }
                },
                {
                    key: "afterSetOptions",
                    value: function afterSetOptions(keepValue) {
                        if (keepValue) this.setSelectedProp();
                        this.setOptionsHeight();
                        this.setVisibleOptions();
                        if (this.showOptionsOnlyOnSearch) this.setSearchValue("", false, true);
                        if (!keepValue) this.reset();
                    }
                },
                {
                    key: "setProps",
                    value: function setProps(params) {
                        var options = this.setDefaultProps(params);
                        this.setPropsFromElementAttr(options);
                        var convertToBoolean = Utils.convertToBoolean;
                        this.$ele = options.ele;
                        this.dropboxWrapper = options.dropboxWrapper;
                        this.valueKey = options.valueKey;
                        this.labelKey = options.labelKey;
                        this.descriptionKey = options.descriptionKey;
                        this.aliasKey = options.aliasKey;
                        this.optionHeightText = options.optionHeight;
                        this.optionHeight = parseFloat(this.optionHeightText);
                        this.multiple = convertToBoolean(options.multiple);
                        this.hasSearch = convertToBoolean(options.search);
                        this.searchByStartsWith = convertToBoolean(options.searchByStartsWith);
                        this.searchGroup = convertToBoolean(options.searchGroup);
                        this.hideClearButton = convertToBoolean(options.hideClearButton);
                        this.autoSelectFirstOption = convertToBoolean(options.autoSelectFirstOption);
                        this.hasOptionDescription = convertToBoolean(options.hasOptionDescription);
                        this.silentInitialValueSet = convertToBoolean(options.silentInitialValueSet);
                        this.allowNewOption = convertToBoolean(options.allowNewOption);
                        this.markSearchResults = convertToBoolean(options.markSearchResults);
                        this.showSelectedOptionsFirst = convertToBoolean(options.showSelectedOptionsFirst);
                        this.disableSelectAll = convertToBoolean(options.disableSelectAll);
                        this.keepAlwaysOpen = convertToBoolean(options.keepAlwaysOpen);
                        this.showDropboxAsPopup = convertToBoolean(options.showDropboxAsPopup);
                        this.hideValueTooltipOnSelectAll = convertToBoolean(options.hideValueTooltipOnSelectAll);
                        this.showOptionsOnlyOnSearch = convertToBoolean(options.showOptionsOnlyOnSearch);
                        this.selectAllOnlyVisible = convertToBoolean(options.selectAllOnlyVisible);
                        this.alwaysShowSelectedOptionsCount = convertToBoolean(options.alwaysShowSelectedOptionsCount);
                        this.alwaysShowSelectedOptionsLabel = convertToBoolean(options.alwaysShowSelectedOptionsLabel);
                        this.disableAllOptionsSelectedText = convertToBoolean(options.disableAllOptionsSelectedText);
                        this.showValueAsTags = convertToBoolean(options.showValueAsTags);
                        this.disableOptionGroupCheckbox = convertToBoolean(options.disableOptionGroupCheckbox);
                        this.enableSecureText = convertToBoolean(options.enableSecureText);
                        this.setValueAsArray = convertToBoolean(options.setValueAsArray);
                        this.disableValidation = convertToBoolean(options.disableValidation);
                        this.initialDisabled = convertToBoolean(options.disabled);
                        this.required = convertToBoolean(options.required);
                        this.autofocus = convertToBoolean(options.autofocus);
                        this.useGroupValue = convertToBoolean(options.useGroupValue);
                        this.focusSelectedOptionOnOpen = convertToBoolean(options.focusSelectedOptionOnOpen);
                        this.noOptionsText = options.noOptionsText;
                        this.noSearchResultsText = options.noSearchResultsText;
                        this.selectAllText = options.selectAllText;
                        this.searchNormalize = options.searchNormalize;
                        this.searchPlaceholderText = options.searchPlaceholderText;
                        this.searchFormLabel = options.searchFormLabel;
                        this.optionsSelectedText = options.optionsSelectedText;
                        this.optionSelectedText = options.optionSelectedText;
                        this.allOptionsSelectedText = options.allOptionsSelectedText;
                        this.clearButtonText = options.clearButtonText;
                        this.moreText = options.moreText;
                        this.placeholder = options.placeholder;
                        this.position = options.position;
                        this.textDirection = options.textDirection;
                        this.dropboxWidth = options.dropboxWidth;
                        this.tooltipFontSize = options.tooltipFontSize;
                        this.tooltipAlignment = options.tooltipAlignment;
                        this.tooltipMaxWidth = options.tooltipMaxWidth;
                        this.updatePositionThrottle = options.updatePositionThrottle;
                        this.noOfDisplayValues = parseInt(options.noOfDisplayValues);
                        this.zIndex = parseInt(options.zIndex);
                        this.maxValues = parseInt(options.maxValues);
                        this.minValues = parseInt(options.minValues);
                        this.name = this.secureText(options.name);
                        this.additionalClasses = options.additionalClasses;
                        this.popupDropboxBreakpoint = options.popupDropboxBreakpoint;
                        this.popupPosition = options.popupPosition;
                        this.onServerSearch = options.onServerSearch;
                        this.labelRenderer = options.labelRenderer;
                        this.initialSelectedValue = options.selectedValue === 0 ? "0" : options.selectedValue;
                        this.emptyValue = options.emptyValue;
                        this.ariaLabelledby = options.ariaLabelledby;
                        this.ariaLabelText = options.ariaLabelText;
                        this.maxWidth = options.maxWidth;
                        this.searchDelay = options.searchDelay;
                        /** @type {string[]} */ this.selectedValues = [];
                        /** @type {virtualSelectOption[]} */ this.selectedOptions = [];
                        this.newValues = [];
                        this.events = {};
                        this.tooltipEnterDelay = 200;
                        this.searchValue = "";
                        this.searchValueOriginal = "";
                        this.isAllSelected = false;
                        if (options.search === undefined && this.multiple || this.allowNewOption || this.showOptionsOnlyOnSearch) this.hasSearch = true;
                        this.hasServerSearch = typeof this.onServerSearch === "function";
                        if (this.maxValues || this.hasServerSearch || this.showOptionsOnlyOnSearch) {
                            this.disableSelectAll = true;
                            this.disableOptionGroupCheckbox = true;
                        }
                        if (this.keepAlwaysOpen) this.dropboxWrapper = "self";
                        this.showAsPopup = this.showDropboxAsPopup && !this.keepAlwaysOpen && window.innerWidth <= parseFloat(this.popupDropboxBreakpoint);
                        this.hasSearchContainer = this.hasSearch || this.multiple && !this.disableSelectAll;
                        this.optionsCount = this.getOptionsCount(options.optionsCount);
                        this.halfOptionsCount = Math.ceil(this.optionsCount / 2);
                        this.optionsHeight = this.getOptionsHeight();
                        this.uniqueId = this.getUniqueId();
                    }
                },
                {
                    key: "setDefaultProps",
                    value: function setDefaultProps(options) {
                        var defaultOptions = {
                            dropboxWrapper: "self",
                            valueKey: "value",
                            labelKey: "label",
                            descriptionKey: "description",
                            aliasKey: "alias",
                            ariaLabelText: "Options list",
                            optionsCount: 5,
                            noOfDisplayValues: 50,
                            optionHeight: "40px",
                            noOptionsText: "No options found",
                            noSearchResultsText: "No results found",
                            selectAllText: "Select All",
                            searchNormalize: false,
                            searchPlaceholderText: "Search...",
                            searchFormLabel: "Search",
                            clearButtonText: "Clear",
                            moreText: "more...",
                            optionsSelectedText: "options selected",
                            optionSelectedText: "option selected",
                            allOptionsSelectedText: "All",
                            placeholder: "Select",
                            position: "bottom left",
                            zIndex: options.keepAlwaysOpen ? 1 : 2,
                            tooltipFontSize: "14px",
                            tooltipAlignment: "center",
                            tooltipMaxWidth: "300px",
                            updatePositionThrottle: 100,
                            name: "",
                            additionalClasses: "",
                            maxValues: 0,
                            showDropboxAsPopup: true,
                            popupDropboxBreakpoint: "576px",
                            popupPosition: "center",
                            hideValueTooltipOnSelectAll: true,
                            emptyValue: "",
                            searchDelay: 300,
                            focusSelectedOptionOnOpen: true
                        };
                        if (options.hasOptionDescription) {
                            defaultOptions.optionsCount = 4;
                            defaultOptions.optionHeight = "50px";
                        }
                        return Object.assign(defaultOptions, options);
                    }
                },
                {
                    key: "setPropsFromElementAttr",
                    value: function setPropsFromElementAttr(options) {
                        var $ele = options.ele;
                        Object.keys(attrPropsMapping).forEach(function(k) {
                            var value = $ele.getAttribute(k);
                            if (valueLessProps.indexOf(k) !== -1 && (value === "" || value === "true")) value = true;
                            if (value) // eslint-disable-next-line no-param-reassign
                            options[attrPropsMapping[k]] = value;
                        });
                    }
                },
                {
                    key: "setEleProps",
                    value: function setEleProps() {
                        var $ele = this.$ele;
                        $ele.virtualSelect = this;
                        $ele.value = this.multiple ? [] : "";
                        $ele.name = this.name;
                        $ele.disabled = false;
                        $ele.required = this.required;
                        $ele.autofocus = this.autofocus;
                        $ele.multiple = this.multiple;
                        $ele.form = $ele.closest("form");
                        $ele.reset = VirtualSelect.reset;
                        $ele.setValue = VirtualSelect.setValueMethod;
                        $ele.setOptions = VirtualSelect.setOptionsMethod;
                        $ele.setDisabledOptions = VirtualSelect.setDisabledOptionsMethod;
                        $ele.setEnabledOptions = VirtualSelect.setEnabledOptionsMethod;
                        $ele.toggleSelectAll = VirtualSelect.toggleSelectAll;
                        $ele.isAllSelected = VirtualSelect.isAllSelected;
                        $ele.addOption = VirtualSelect.addOptionMethod;
                        $ele.getNewValue = VirtualSelect.getNewValueMethod;
                        $ele.getDisplayValue = VirtualSelect.getDisplayValueMethod;
                        $ele.getSelectedOptions = VirtualSelect.getSelectedOptionsMethod;
                        $ele.getDisabledOptions = VirtualSelect.getDisabledOptionsMethod;
                        $ele.open = VirtualSelect.openMethod;
                        $ele.close = VirtualSelect.closeMethod;
                        $ele.focus = VirtualSelect.focusMethod;
                        $ele.enable = VirtualSelect.enableMethod;
                        $ele.disable = VirtualSelect.disableMethod;
                        $ele.destroy = VirtualSelect.destroyMethod;
                        $ele.validate = VirtualSelect.validateMethod;
                        $ele.toggleRequired = VirtualSelect.toggleRequiredMethod;
                        if (this.hasDropboxWrapper) this.$dropboxWrapper.virtualSelect = this;
                    }
                },
                {
                    key: "setValueMethod",
                    value: function setValueMethod(newValue, silentChange) {
                        var valuesMapping = {};
                        var valuesOrder = {};
                        var validValues = [];
                        var isMultiSelect = this.multiple;
                        var value = newValue;
                        if (value) {
                            if (!Array.isArray(value)) value = [
                                value
                            ];
                            if (isMultiSelect) {
                                var maxValues = this.maxValues;
                                if (maxValues && value.length > maxValues) value.splice(maxValues);
                            } else if (value.length > 1) value = [
                                value[0]
                            ];
                            /** converting value to string */ value = value.map(function(v) {
                                return v || v === 0 ? v.toString() : "";
                            });
                            if (this.useGroupValue) value = this.setGroupOptionsValue(value);
                            value.forEach(function(d, i) {
                                valuesMapping[d] = true;
                                valuesOrder[d] = i;
                            });
                            if (this.allowNewOption && value) this.setNewOptionsFromValue(value);
                        }
                        this.options.forEach(function(d) {
                            if (valuesMapping[d.value] === true && !d.isDisabled && !d.isGroupTitle) {
                                // eslint-disable-next-line no-param-reassign
                                d.isSelected = true;
                                validValues.push(d.value);
                            } else // eslint-disable-next-line no-param-reassign
                            d.isSelected = false;
                        });
                        if (isMultiSelect) {
                            if (this.hasOptionGroup) this.setGroupsSelectedProp();
                            /** sorting validValues in the given values order */ validValues.sort(function(a, b) {
                                return valuesOrder[a] - valuesOrder[b];
                            });
                        } else {
                            /** taking first value for single select */ var _validValues = validValues;
                            var _validValues2 = virtual_select_slicedToArray(_validValues, 1);
                            validValues = _validValues2[0];
                        }
                        this.beforeValueSet();
                        this.setValue(validValues, {
                            disableEvent: silentChange
                        });
                        this.afterValueSet();
                    }
                },
                {
                    key: "setGroupOptionsValue",
                    value: function setGroupOptionsValue(preparedValues) {
                        var selectedValues = [];
                        var selectedGroups = {};
                        var valuesMapping = {};
                        preparedValues.forEach(function(d) {
                            valuesMapping[d] = true;
                        });
                        this.options.forEach(function(d) {
                            var value = d.value;
                            var isSelected1 = valuesMapping[value] === true;
                            if (d.isGroupTitle) {
                                if (isSelected1) selectedGroups[d.index] = true;
                            } else if (isSelected1 || selectedGroups[d.groupIndex]) selectedValues.push(value);
                        });
                        return selectedValues;
                    }
                },
                {
                    key: "setGroupsSelectedProp",
                    value: function setGroupsSelectedProp() {
                        var isAllGroupOptionsSelected = this.isAllGroupOptionsSelected.bind(this);
                        this.options.forEach(function(d) {
                            if (d.isGroupTitle) // eslint-disable-next-line no-param-reassign
                            d.isSelected = isAllGroupOptionsSelected(d.index);
                        });
                    }
                },
                {
                    key: "setOptionsMethod",
                    value: function setOptionsMethod(options, keepValue) {
                        this.setOptions(options);
                        this.afterSetOptions(keepValue);
                    }
                },
                {
                    key: "setDisabledOptionsMethod",
                    value: function setDisabledOptionsMethod(disabledOptions) {
                        var keepValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        this.setDisabledOptions(disabledOptions, true);
                        if (!keepValue) {
                            this.setValueMethod(null);
                            this.toggleAllOptionsClass();
                        }
                        this.setVisibleOptions();
                    }
                },
                {
                    key: "setDisabledOptions",
                    value: function setDisabledOptions(disabledOptions) {
                        var setOptionsProp = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var disabledOptionsArr = [];
                        if (!disabledOptions) {
                            if (setOptionsProp) this.options.forEach(function(d) {
                                // eslint-disable-next-line no-param-reassign
                                d.isDisabled = false;
                                return d;
                            });
                        } else if (disabledOptions === true) {
                            if (setOptionsProp) this.options.forEach(function(d) {
                                // eslint-disable-next-line no-param-reassign
                                d.isDisabled = true;
                                disabledOptionsArr.push(d.value);
                                return d;
                            });
                        } else {
                            disabledOptionsArr = disabledOptions.map(function(d) {
                                return d.toString();
                            });
                            var disabledOptionsMapping = {};
                            disabledOptionsArr.forEach(function(d) {
                                disabledOptionsMapping[d] = true;
                            });
                            if (setOptionsProp) this.options.forEach(function(d) {
                                // eslint-disable-next-line no-param-reassign
                                d.isDisabled = disabledOptionsMapping[d.value] === true;
                                return d;
                            });
                        }
                        this.disabledOptions = disabledOptionsArr;
                    }
                },
                {
                    key: "setEnabledOptionsMethod",
                    value: function setEnabledOptionsMethod(disabledOptions) {
                        var keepValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        this.setEnabledOptions(disabledOptions);
                        if (!keepValue) {
                            this.setValueMethod(null);
                            this.toggleAllOptionsClass();
                        }
                        this.setVisibleOptions();
                    }
                },
                {
                    key: "setEnabledOptions",
                    value: function setEnabledOptions(enabledOptions) {
                        if (enabledOptions === undefined) return;
                        var disabledOptionsArr = [];
                        if (enabledOptions === true) this.options.forEach(function(d) {
                            // eslint-disable-next-line no-param-reassign
                            d.isDisabled = false;
                            return d;
                        });
                        else {
                            var enabledOptionsMapping = {};
                            enabledOptions.forEach(function(d) {
                                enabledOptionsMapping[d] = true;
                            });
                            this.options.forEach(function(d) {
                                var isDisabled = enabledOptionsMapping[d.value] !== true;
                                // eslint-disable-next-line no-param-reassign
                                d.isDisabled = isDisabled;
                                if (isDisabled) disabledOptionsArr.push(d.value);
                                return d;
                            });
                        }
                        this.disabledOptions = disabledOptionsArr;
                    }
                },
                {
                    key: "setOptions",
                    value: function setOptions() {
                        var _this6 = this;
                        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var preparedOptions = [];
                        var hasDisabledOptions = this.disabledOptions.length;
                        var valueKey = this.valueKey, labelKey = this.labelKey, descriptionKey = this.descriptionKey, aliasKey = this.aliasKey, hasOptionDescription = this.hasOptionDescription;
                        var getString = Utils.getString, convertToBoolean = Utils.convertToBoolean;
                        var secureText = this.secureText.bind(this);
                        var getAlias = this.getAlias.bind(this);
                        var index = 0;
                        var hasOptionGroup = false;
                        var disabledOptionsMapping = {};
                        var hasEmptyValueOption = false;
                        this.disabledOptions.forEach(function(d) {
                            disabledOptionsMapping[d] = true;
                        });
                        var prepareOption = function prepareOption(d) {
                            if (virtual_select_typeof(d) !== "object") {
                                var _d2;
                                // eslint-disable-next-line no-param-reassign
                                d = (_d2 = {}, _defineProperty(_d2, valueKey, d), _defineProperty(_d2, labelKey, d), _d2);
                            }
                            var value = secureText(getString(d[valueKey]));
                            var label = secureText(getString(d[labelKey]));
                            var childOptions = d.options;
                            var isGroupTitle = !!childOptions;
                            var option = {
                                index: index,
                                value: value,
                                label: label,
                                labelNormalized: _this6.searchNormalize ? Utils.normalizeString(label).toLowerCase() : label.toLowerCase(),
                                alias: getAlias(d[aliasKey]),
                                isVisible: convertToBoolean(d.isVisible, true),
                                isNew: d.isNew || false,
                                isGroupTitle: isGroupTitle,
                                classNames: d.classNames
                            };
                            if (!hasEmptyValueOption && value === "") hasEmptyValueOption = true;
                            if (hasDisabledOptions) option.isDisabled = disabledOptionsMapping[value] === true;
                            if (d.isGroupOption) {
                                option.isGroupOption = true;
                                option.groupIndex = d.groupIndex;
                            }
                            if (hasOptionDescription) option.description = secureText(getString(d[descriptionKey]));
                            if (d.customData) option.customData = d.customData;
                            preparedOptions.push(option);
                            index += 1;
                            if (isGroupTitle) {
                                var groupIndex = option.index;
                                hasOptionGroup = true;
                                childOptions.forEach(function(childData) {
                                    // eslint-disable-next-line no-param-reassign
                                    childData.isGroupOption = true;
                                    // eslint-disable-next-line no-param-reassign
                                    childData.groupIndex = groupIndex;
                                    prepareOption(childData);
                                });
                            }
                        };
                        if (Array.isArray(options)) options.forEach(prepareOption);
                        var optionsLength = preparedOptions.length;
                        var $ele = this.$ele;
                        $ele.options = preparedOptions;
                        $ele.length = optionsLength;
                        this.options = preparedOptions;
                        this.visibleOptionsCount = optionsLength;
                        this.lastOptionIndex = optionsLength - 1;
                        this.newValues = [];
                        this.hasOptionGroup = hasOptionGroup;
                        this.hasEmptyValueOption = hasEmptyValueOption;
                        this.setSortedOptions();
                    }
                },
                {
                    key: "setServerOptions",
                    value: function setServerOptions() {
                        var _this7 = this;
                        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        this.setOptionsMethod(options, true);
                        var selectedOptions = this.selectedOptions;
                        var newOptions = this.options;
                        var optionsUpdated = false;
                        /** merging already selected options details with new options */ if (selectedOptions.length) {
                            var newOptionsValueMapping = {};
                            optionsUpdated = true;
                            newOptions.forEach(function(d) {
                                newOptionsValueMapping[d.value] = true;
                            });
                            selectedOptions.forEach(function(d) {
                                if (newOptionsValueMapping[d.value] !== true) {
                                    // eslint-disable-next-line no-param-reassign
                                    d.isVisible = false;
                                    newOptions.push(d);
                                }
                            });
                            this.setOptionsMethod(newOptions, true);
                        }
                        /** merging new search option */ if (this.allowNewOption && this.searchValue) {
                            var hasExactOption = newOptions.some(function(d) {
                                return d.label.toLowerCase() === _this7.searchValue;
                            });
                            if (!hasExactOption) {
                                optionsUpdated = true;
                                this.setNewOption();
                            }
                        }
                        if (optionsUpdated) {
                            this.setVisibleOptionsCount();
                            if (this.multiple) this.toggleAllOptionsClass();
                            this.setValueText();
                        } else this.updatePosition();
                        DomUtils.removeClass(this.$allWrappers, "server-searching");
                    }
                },
                {
                    key: "setSelectedOptions",
                    value: function setSelectedOptions() {
                        this.selectedOptions = this.options.filter(function(d) {
                            return d.isSelected;
                        });
                    }
                },
                {
                    key: "setSortedOptions",
                    value: function setSortedOptions() {
                        var sortedOptions = virtual_select_toConsumableArray(this.options);
                        if (this.showSelectedOptionsFirst && this.selectedValues.length) {
                            if (this.hasOptionGroup) sortedOptions = this.sortOptionsGroup(sortedOptions);
                            else sortedOptions = this.sortOptions(sortedOptions);
                        }
                        this.sortedOptions = sortedOptions;
                    }
                },
                {
                    key: "setVisibleOptions",
                    value: function setVisibleOptions() {
                        var visibleOptions = virtual_select_toConsumableArray(this.sortedOptions);
                        var maxOptionsToShow = this.optionsCount * 2;
                        var startIndex = this.getVisibleStartIndex();
                        var newOption = this.getNewOption();
                        var endIndex = startIndex + maxOptionsToShow - 1;
                        var i = 0;
                        if (newOption) {
                            newOption.visibleIndex = i;
                            i += 1;
                        }
                        visibleOptions = visibleOptions.filter(function(d) {
                            var inView = false;
                            if (d.isVisible && !d.isCurrentNew) {
                                inView = i >= startIndex && i <= endIndex;
                                // eslint-disable-next-line no-param-reassign
                                d.visibleIndex = i;
                                i += 1;
                            }
                            return inView;
                        });
                        if (newOption) visibleOptions = [
                            newOption
                        ].concat(virtual_select_toConsumableArray(visibleOptions));
                        this.visibleOptions = visibleOptions;
                        this.renderOptions();
                    }
                },
                {
                    key: "setOptionsPosition",
                    value: function setOptionsPosition(startIndex) {
                        var top = (startIndex || this.getVisibleStartIndex()) * this.optionHeight;
                        this.$options.style.transform = "translate3d(0, ".concat(top, "px, 0)");
                        DomUtils.setData(this.$options, "top", top);
                    }
                },
                {
                    key: "setOptionsTooltip",
                    value: function setOptionsTooltip() {
                        var _this8 = this;
                        var visibleOptions = this.getVisibleOptions();
                        var hasOptionDescription = this.hasOptionDescription;
                        visibleOptions.forEach(function(d) {
                            var $optionEle = _this8.$dropboxContainer.querySelector('.vscomp-option[data-index="'.concat(d.index, '"]'));
                            DomUtils.setData($optionEle.querySelector(".vscomp-option-text"), "tooltip", d.label);
                            if (hasOptionDescription) DomUtils.setData($optionEle.querySelector(".vscomp-option-description"), "tooltip", d.description);
                        });
                    }
                },
                {
                    key: "setValue",
                    value: function setValue(value) {
                        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, _ref2$disableEvent = _ref2.disableEvent, disableEvent = _ref2$disableEvent === void 0 ? false : _ref2$disableEvent, _ref2$disableValidati = _ref2.disableValidation, disableValidation = _ref2$disableValidati === void 0 ? false : _ref2$disableValidati;
                        var isValidValue = this.hasEmptyValueOption && value === "" || value;
                        if (!isValidValue) this.selectedValues = [];
                        else if (Array.isArray(value)) this.selectedValues = virtual_select_toConsumableArray(value);
                        else this.selectedValues = [
                            value
                        ];
                        var newValue = this.getValue();
                        this.$ele.value = newValue;
                        this.$hiddenInput.value = this.getInputValue(newValue);
                        this.isMaxValuesSelected = !!(this.maxValues && this.maxValues <= this.selectedValues.length);
                        this.toggleAllOptionsClass();
                        this.setValueText();
                        DomUtils.toggleClass(this.$allWrappers, "has-value", Utils.isNotEmpty(this.selectedValues));
                        DomUtils.toggleClass(this.$allWrappers, "max-value-selected", this.isMaxValuesSelected);
                        if (!disableValidation) this.validate();
                        if (!disableEvent) DomUtils.dispatchEvent(this.$ele, "change", true);
                    }
                },
                {
                    key: "setValueText",
                    value: function setValueText() {
                        var multiple = this.multiple, selectedValues = this.selectedValues, noOfDisplayValues = this.noOfDisplayValues, showValueAsTags = this.showValueAsTags, $valueText = this.$valueText;
                        var valueText = [];
                        var valueTooltip = [];
                        var selectedLength = selectedValues.length;
                        var selectedValuesCount = 0;
                        var showAllText = this.isAllSelected && !this.hasServerSearch && !this.disableAllOptionsSelectedText && !showValueAsTags;
                        /** show all values selected text without tooltip text */ if (showAllText && this.hideValueTooltipOnSelectAll) $valueText.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(selectedLength, ")");
                        else {
                            var selectedOptions = this.getSelectedOptions({
                                fullDetails: true,
                                keepSelectionOrder: true
                            });
                            selectedOptions.some(function(d) {
                                if (d.isCurrentNew) return false;
                                if (selectedValuesCount >= noOfDisplayValues) return true;
                                var label = d.label;
                                valueText.push(label);
                                selectedValuesCount += 1;
                                if (showValueAsTags) {
                                    var valueTagHtml = '<span class="vscomp-value-tag" data-index="'.concat(d.index, '">\n              <span class="vscomp-value-tag-content">').concat(label, '</span>\n              <span class="vscomp-value-tag-clear-button">\n                <i class="vscomp-clear-icon"></i>\n              </span>\n            </span>');
                                    valueTooltip.push(valueTagHtml);
                                } else valueTooltip.push(label);
                                return false;
                            });
                            var moreSelectedOptions = selectedLength - noOfDisplayValues;
                            if (moreSelectedOptions > 0) valueTooltip.push('<span class="vscomp-value-tag more-value-count">+ '.concat(moreSelectedOptions, " ").concat(this.moreText, "</span>"));
                            var aggregatedValueText = valueText.join(", ");
                            if (aggregatedValueText === "") $valueText.innerHTML = this.placeholder;
                            else {
                                $valueText.innerHTML = aggregatedValueText;
                                if (multiple) {
                                    var maxValues = this.maxValues;
                                    var showSelectedCount = this.alwaysShowSelectedOptionsCount || DomUtils.hasEllipsis($valueText);
                                    if (showSelectedCount || maxValues || showValueAsTags) {
                                        var countText = '<span class="vscomp-selected-value-count">'.concat(selectedLength, "</span>");
                                        if (maxValues) countText += ' / <span class="vscomp-max-value-count">'.concat(maxValues, "</span>");
                                        /** show all values selected text with tooltip text */ if (showAllText) $valueText.innerHTML = "".concat(this.allOptionsSelectedText, " (").concat(selectedLength, ")");
                                        else if (showValueAsTags) {
                                            $valueText.innerHTML = valueTooltip.join("");
                                            this.$valueTags = $valueText.querySelectorAll(".vscomp-value-tag");
                                            this.setValueTagAttr();
                                        } else if (!this.alwaysShowSelectedOptionsLabel) {
                                            /** replace comma separated list of selections with shorter text indicating selection count */ var optionsSelectedText = selectedLength === 1 ? this.optionSelectedText : this.optionsSelectedText;
                                            $valueText.innerHTML = "".concat(countText, " ").concat(optionsSelectedText);
                                        }
                                    } else /** removing tooltip if full value text is visible */ valueTooltip = [];
                                }
                            }
                        }
                        var tooltipText = "";
                        if (selectedLength === 0) tooltipText = this.placeholder;
                        else if (!showValueAsTags) tooltipText = valueTooltip.join(", ");
                        DomUtils.setData($valueText, "tooltip", tooltipText);
                        if (multiple) {
                            DomUtils.setData($valueText, "tooltipEllipsisOnly", selectedLength === 0);
                            if (showValueAsTags) this.updatePosition();
                        }
                    }
                },
                {
                    key: "setSearchValue",
                    value: function setSearchValue(value) {
                        var skipInputSet = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var forceSet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        if (value === this.searchValueOriginal && !forceSet) return;
                        if (!skipInputSet) this.$searchInput.value = value;
                        var searchValue = value.replace(/\\/g, "").toLowerCase().trim();
                        this.searchValue = searchValue;
                        this.searchValueOriginal = value;
                        DomUtils.toggleClass(this.$allWrappers, "has-search-value", value);
                        this.afterSetSearchValue();
                    }
                },
                {
                    key: "setVisibleOptionsCount",
                    value: function setVisibleOptionsCount() {
                        var visibleOptionsCount = 0;
                        var hasExactOption = false;
                        var visibleOptionGroupsMapping;
                        var searchGroup = this.searchGroup, showOptionsOnlyOnSearch = this.showOptionsOnlyOnSearch, searchByStartsWith = this.searchByStartsWith;
                        //If searchNormalize we'll normalize the searchValue
                        var searchValue = this.searchValue;
                        searchValue = this.searchNormalize ? Utils.normalizeString(searchValue) : searchValue;
                        var isOptionVisible = this.isOptionVisible.bind(this);
                        if (this.hasOptionGroup) visibleOptionGroupsMapping = this.getVisibleOptionGroupsMapping(searchValue);
                        this.options.forEach(function(d) {
                            if (d.isCurrentNew) return;
                            var result;
                            if (showOptionsOnlyOnSearch && !searchValue) {
                                // eslint-disable-next-line no-param-reassign
                                d.isVisible = false;
                                result = {
                                    isVisible: false,
                                    hasExactOption: false
                                };
                            } else result = isOptionVisible({
                                data: d,
                                searchValue: searchValue,
                                hasExactOption: hasExactOption,
                                visibleOptionGroupsMapping: visibleOptionGroupsMapping,
                                searchGroup: searchGroup,
                                searchByStartsWith: searchByStartsWith
                            });
                            if (result.isVisible) visibleOptionsCount += 1;
                            if (!hasExactOption) hasExactOption = result.hasExactOption;
                        });
                        if (this.allowNewOption) {
                            if (searchValue && !hasExactOption) {
                                this.setNewOption();
                                visibleOptionsCount += 1;
                            } else this.removeNewOption();
                        }
                        this.visibleOptionsCount = visibleOptionsCount;
                        this.afterSetVisibleOptionsCount();
                    }
                },
                {
                    key: "setOptionProp",
                    value: function setOptionProp(index, key, value) {
                        if (!this.options[index]) return;
                        this.options[index][key] = value;
                    }
                },
                {
                    key: "setOptionsHeight",
                    value: function setOptionsHeight() {
                        this.$optionsList.style.height = "".concat(this.optionHeight * this.visibleOptionsCount, "px");
                    }
                },
                {
                    key: "setOptionsContainerHeight",
                    value: function setOptionsContainerHeight(reset) {
                        var optionsHeight;
                        if (reset) {
                            if (this.showAsPopup) {
                                this.optionsCount = this.getOptionsCount();
                                this.halfOptionsCount = Math.ceil(this.optionsCount / 2);
                                optionsHeight = this.getOptionsHeight();
                                this.optionsHeight = optionsHeight;
                            }
                        } else {
                            optionsHeight = this.optionsHeight;
                            if (this.keepAlwaysOpen) {
                                DomUtils.setStyle(this.$noOptions, "height", optionsHeight);
                                DomUtils.setStyle(this.$noSearchResults, "height", optionsHeight);
                            }
                        }
                        DomUtils.setStyle(this.$optionsContainer, "max-height", optionsHeight);
                        this.afterSetOptionsContainerHeight(reset);
                    }
                },
                {
                    key: "setNewOption",
                    value: function setNewOption(newValue) {
                        var value = newValue || this.searchValueOriginal.trim();
                        if (!value) return;
                        var newOption = this.getNewOption();
                        if (newOption) {
                            var newIndex = newOption.index;
                            this.setOptionProp(newIndex, "value", this.secureText(value));
                            this.setOptionProp(newIndex, "label", this.secureText(value));
                        } else {
                            var data = {
                                value: value,
                                label: value
                            };
                            if (newValue) {
                                data.isNew = true;
                                this.newValues.push(value);
                            } else data.isCurrentNew = true;
                            this.addOption(data);
                        }
                    }
                },
                {
                    key: "setSelectedProp",
                    value: function setSelectedProp() {
                        var valuesMapping = {};
                        this.selectedValues.forEach(function(d) {
                            valuesMapping[d] = true;
                        });
                        this.options.forEach(function(d) {
                            if (valuesMapping[d.value] === true) // eslint-disable-next-line no-param-reassign
                            d.isSelected = true;
                        });
                    }
                },
                {
                    key: "setNewOptionsFromValue",
                    value: function setNewOptionsFromValue(values) {
                        if (!values) return;
                        var setNewOption = this.setNewOption.bind(this);
                        var availableValuesMapping = {};
                        this.options.forEach(function(d) {
                            availableValuesMapping[d.value] = true;
                        });
                        values.forEach(function(d) {
                            if (d && availableValuesMapping[d] !== true) setNewOption(d);
                        });
                    }
                },
                {
                    key: "setDropboxWrapperWidth",
                    value: function setDropboxWrapperWidth() {
                        if (this.showAsPopup) return;
                        var width = this.dropboxWidth || "".concat(this.$wrapper.offsetWidth, "px");
                        DomUtils.setStyle(this.$dropboxContainer, "max-width", width);
                    }
                },
                {
                    key: "setEleStyles",
                    value: function setEleStyles() {
                        var maxWidth = this.maxWidth;
                        var styles = {};
                        if (maxWidth) styles["max-width"] = maxWidth;
                        DomUtils.setStyles(this.$ele, styles);
                    }
                },
                {
                    key: "setDropboxStyles",
                    value: function setDropboxStyles() {
                        var dropboxWidth = this.dropboxWidth;
                        var styles = {};
                        var containerStyles = {
                            "z-index": this.zIndex
                        };
                        if (dropboxWidth) {
                            if (this.showAsPopup) styles["max-width"] = dropboxWidth;
                            else containerStyles.width = dropboxWidth;
                        }
                        DomUtils.setStyles(this.$dropboxContainer, containerStyles);
                        DomUtils.setStyles(this.$dropbox, styles);
                    }
                },
                {
                    key: "setOptionAttr",
                    value: function setOptionAttr() {
                        var $visibleOptions = this.$visibleOptions;
                        var options = this.options;
                        var optionHeight = "".concat(this.optionHeight, "px");
                        var setStyle = DomUtils.setStyle, getData = DomUtils.getData, setData = DomUtils.setData;
                        if ($visibleOptions && $visibleOptions.length) $visibleOptions.forEach(function($option) {
                            var optionDetails = options[getData($option, "index")];
                            setStyle($option, "height", optionHeight);
                            setData($option, "value", optionDetails.value);
                        });
                    }
                },
                {
                    key: "setValueTagAttr",
                    value: function setValueTagAttr() {
                        var $valueTags = this.$valueTags;
                        if (!$valueTags || !$valueTags.length) return;
                        var getData = DomUtils.getData, setData = DomUtils.setData;
                        var options = this.options;
                        $valueTags.forEach(function($valueTag) {
                            var index = getData($valueTag, "index");
                            if (typeof index !== "undefined") {
                                var optionDetails = options[index];
                                setData($valueTag, "value", optionDetails.value);
                            }
                        });
                    }
                },
                {
                    key: "setScrollTop",
                    value: function setScrollTop() {
                        var selectedValues = this.selectedValues;
                        if (this.showSelectedOptionsFirst || !this.focusSelectedOptionOnOpen || selectedValues.length === 0) return;
                        var valuesMapping = {};
                        var selectedOptionIndex;
                        selectedValues.forEach(function(d) {
                            valuesMapping[d] = true;
                        });
                        this.options.some(function(d) {
                            if (valuesMapping[d.value]) {
                                selectedOptionIndex = d.visibleIndex;
                                return true;
                            }
                            return false;
                        });
                        if (selectedOptionIndex) this.$optionsContainer.scrollTop = this.optionHeight * selectedOptionIndex;
                    }
                },
                {
                    key: "getVisibleOptions",
                    value: function getVisibleOptions() {
                        return this.visibleOptions || [];
                    }
                },
                {
                    key: "getValue",
                    value: function getValue() {
                        var value;
                        if (this.multiple) {
                            if (this.useGroupValue) value = this.getGroupValue();
                            else value = this.selectedValues;
                        } else value = this.selectedValues[0] || "";
                        return value;
                    }
                },
                {
                    key: "getGroupValue",
                    value: function getGroupValue() {
                        var selectedValues = [];
                        var selectedGroups = {};
                        this.options.forEach(function(d) {
                            if (!d.isSelected) return;
                            var value = d.value;
                            if (d.isGroupTitle) {
                                if (value) {
                                    selectedGroups[d.index] = true;
                                    selectedValues.push(value);
                                }
                            } else if (selectedGroups[d.groupIndex] !== true) selectedValues.push(value);
                        });
                        return selectedValues;
                    }
                },
                {
                    key: "getInputValue",
                    value: function getInputValue(preparedValue) {
                        var value = preparedValue;
                        if (value && value.length) {
                            if (this.setValueAsArray && this.multiple) value = JSON.stringify(value);
                        } else value = this.emptyValue;
                        return value;
                    }
                },
                {
                    key: "getFirstVisibleOptionIndex",
                    value: function getFirstVisibleOptionIndex() {
                        return Math.ceil(this.$optionsContainer.scrollTop / this.optionHeight);
                    }
                },
                {
                    key: "getVisibleStartIndex",
                    value: function getVisibleStartIndex() {
                        var firstVisibleOptionIndex = this.getFirstVisibleOptionIndex();
                        var startIndex = firstVisibleOptionIndex - this.halfOptionsCount;
                        if (startIndex < 0) startIndex = 0;
                        return startIndex;
                    }
                },
                {
                    key: "getTooltipAttrText",
                    value: function getTooltipAttrText(text) {
                        var ellipsisOnly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        var allowHtml = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
                        var data = {
                            "data-tooltip": text || "",
                            "data-tooltip-enter-delay": this.tooltipEnterDelay,
                            "data-tooltip-z-index": this.zIndex,
                            "data-tooltip-font-size": this.tooltipFontSize,
                            "data-tooltip-alignment": this.tooltipAlignment,
                            "data-tooltip-max-width": this.tooltipMaxWidth,
                            "data-tooltip-ellipsis-only": ellipsisOnly,
                            "data-tooltip-allow-html": allowHtml
                        };
                        return DomUtils.getAttributesText(data);
                    }
                },
                {
                    key: "getOptionObj",
                    value: function getOptionObj(data) {
                        if (!data) return undefined;
                        var getString = Utils.getString;
                        var secureText = this.secureText.bind(this);
                        return {
                            index: data.index,
                            value: secureText(getString(data.value)),
                            label: secureText(getString(data.label)),
                            description: secureText(getString(data.description)),
                            alias: this.getAlias(data.alias),
                            isCurrentNew: data.isCurrentNew || false,
                            isNew: data.isNew || false,
                            isVisible: true
                        };
                    }
                },
                {
                    key: "getNewOption",
                    value: function getNewOption() {
                        var lastOption = this.options[this.lastOptionIndex];
                        if (!lastOption || !lastOption.isCurrentNew) return undefined;
                        return lastOption;
                    }
                },
                {
                    key: "getOptionIndex",
                    value: function getOptionIndex(value) {
                        var index;
                        this.options.some(function(d) {
                            if (d.value === value) {
                                index = d.index;
                                return true;
                            }
                            return false;
                        });
                        return index;
                    }
                },
                {
                    key: "getNewValue",
                    value: function getNewValue() {
                        var valuesMapping = {};
                        this.newValues.forEach(function(d) {
                            valuesMapping[d] = true;
                        });
                        var result = this.selectedValues.filter(function(d) {
                            return valuesMapping[d] === true;
                        });
                        return this.multiple ? result : result[0];
                    }
                },
                {
                    key: "getAlias",
                    value: function getAlias(alias) {
                        var result = alias;
                        if (result) {
                            if (Array.isArray(result)) result = result.join(",");
                            else result = result.toString().trim();
                            result = result.toLowerCase();
                        }
                        return result || "";
                    }
                },
                {
                    key: "getDisplayValue",
                    value: function getDisplayValue() {
                        var displayValues = [];
                        this.options.forEach(function(d) {
                            if (d.isSelected) displayValues.push(d.label);
                        });
                        return this.multiple ? displayValues : displayValues[0] || "";
                    }
                },
                {
                    key: "getSelectedOptions",
                    value: function getSelectedOptions() {
                        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, _ref3$fullDetails = _ref3.fullDetails, fullDetails = _ref3$fullDetails === void 0 ? false : _ref3$fullDetails, _ref3$keepSelectionOr = _ref3.keepSelectionOrder, keepSelectionOrder = _ref3$keepSelectionOr === void 0 ? false : _ref3$keepSelectionOr;
                        var valueKey = this.valueKey, labelKey = this.labelKey, selectedValues = this.selectedValues;
                        var selectedOptions = [];
                        this.options.forEach(function(d) {
                            if (d.isSelected && !d.isGroupTitle) {
                                if (fullDetails) selectedOptions.push(d);
                                else {
                                    var _data;
                                    var data = (_data = {}, _defineProperty(_data, valueKey, d.value), _defineProperty(_data, labelKey, d.label), _data);
                                    if (d.isNew) data.isNew = true;
                                    if (d.customData) data.customData = d.customData;
                                    selectedOptions.push(data);
                                }
                            }
                        });
                        if (keepSelectionOrder) {
                            var valuesOrder = {};
                            selectedValues.forEach(function(d, i) {
                                valuesOrder[d] = i;
                            });
                            selectedOptions.sort(function(a, b) {
                                return valuesOrder[a.value] - valuesOrder[b.value];
                            });
                        }
                        return this.multiple || fullDetails ? selectedOptions : selectedOptions[0];
                    }
                },
                {
                    key: "getDisabledOptions",
                    value: function getDisabledOptions() {
                        var valueKey = this.valueKey, labelKey = this.labelKey, disabledOptions = this.disabledOptions;
                        var disabledOptionsValueMapping = {};
                        var result = [];
                        disabledOptions.forEach(function(value) {
                            disabledOptionsValueMapping[value] = true;
                        });
                        this.options.forEach(function(_ref4) {
                            var value = _ref4.value, label = _ref4.label;
                            if (disabledOptionsValueMapping[value]) {
                                var _result$push;
                                result.push((_result$push = {}, _defineProperty(_result$push, valueKey, value), _defineProperty(_result$push, labelKey, label), _result$push));
                            }
                        });
                        return result;
                    }
                },
                {
                    key: "getVisibleOptionGroupsMapping",
                    value: function getVisibleOptionGroupsMapping(searchValue) {
                        var options = this.options;
                        var result = {};
                        var isOptionVisible = this.isOptionVisible.bind(this);
                        options = this.structureOptionGroup(options);
                        options.forEach(function(d) {
                            result[d.index] = d.options.some(function(e) {
                                return isOptionVisible({
                                    data: e,
                                    searchValue: searchValue
                                }).isVisible;
                            });
                        });
                        return result;
                    }
                },
                {
                    key: "getOptionsCount",
                    value: function getOptionsCount(count) {
                        var result;
                        if (this.showAsPopup) {
                            var availableHeight = window.innerHeight * 80 / 100 - dropboxCloseButtonFullHeight;
                            if (this.hasSearchContainer) availableHeight -= searchHeight;
                            result = Math.floor(availableHeight / this.optionHeight);
                        } else result = parseInt(count);
                        return result;
                    }
                },
                {
                    key: "getOptionsHeight",
                    value: function getOptionsHeight() {
                        return "".concat(this.optionsCount * this.optionHeight, "px");
                    }
                },
                {
                    key: "getSibling",
                    value: function getSibling($ele, direction) {
                        var propName = direction === "next" ? "nextElementSibling" : "previousElementSibling";
                        var $sibling = $ele;
                        do if ($sibling) $sibling = $sibling[propName];
                        while (DomUtils.hasClass($sibling, "disabled") || DomUtils.hasClass($sibling, "group-title"));
                        return $sibling;
                    }
                },
                {
                    key: "getUniqueId",
                    value: function getUniqueId() {
                        var uniqueId = Utils.getRandomInt(10000);
                        var isAlreadyUsed = document.querySelector("#vscomp-ele-wrapper-".concat(uniqueId));
                        if (isAlreadyUsed) return this.getUniqueId();
                        return uniqueId;
                    }
                },
                {
                    key: "initDropboxPopover",
                    value: function initDropboxPopover() {
                        var data = {
                            ele: this.$ele,
                            target: this.$dropboxContainer,
                            position: this.position,
                            zIndex: this.zIndex,
                            margin: 4,
                            transitionDistance: 30,
                            hideArrowIcon: true,
                            disableManualAction: true,
                            disableUpdatePosition: !this.hasDropboxWrapper,
                            updatePositionThrottle: this.updatePositionThrottle,
                            afterShow: this.afterShowPopper.bind(this),
                            afterHide: this.afterHidePopper.bind(this)
                        };
                        this.dropboxPopover = new PopoverComponent(data);
                    }
                },
                {
                    key: "openDropbox",
                    value: function openDropbox(isSilent) {
                        this.isSilentOpen = isSilent;
                        if (isSilent) DomUtils.setStyle(this.$dropboxContainer, "display", "inline-flex");
                        else {
                            DomUtils.dispatchEvent(this.$ele, "beforeOpen");
                            DomUtils.setAria(this.$wrapper, "expanded", true);
                        }
                        this.setDropboxWrapperWidth();
                        DomUtils.removeClass(this.$allWrappers, "closed");
                        DomUtils.changeTabIndex(this.$allWrappers, 0);
                        if (this.dropboxPopover && !isSilent) this.dropboxPopover.show();
                        else this.afterShowPopper();
                    }
                },
                {
                    key: "afterShowPopper",
                    value: function afterShowPopper() {
                        var isSilent = this.isSilentOpen;
                        this.isSilentOpen = false;
                        if (!isSilent) {
                            this.moveSelectedOptionsFirst();
                            this.setScrollTop();
                            DomUtils.addClass(this.$allWrappers, "focused");
                            if (this.showAsPopup) {
                                DomUtils.addClass(this.$body, "vscomp-popup-active");
                                this.isPopupActive = true;
                            } else this.focusSearchInput();
                            DomUtils.dispatchEvent(this.$ele, "afterOpen");
                        }
                    }
                },
                {
                    key: "closeDropbox",
                    value: function closeDropbox(isSilent) {
                        this.isSilentClose = isSilent;
                        if (this.keepAlwaysOpen) {
                            this.removeOptionFocus();
                            return;
                        }
                        if (isSilent) DomUtils.setStyle(this.$dropboxContainer, "display", "");
                        else {
                            DomUtils.dispatchEvent(this.$ele, "beforeClose");
                            DomUtils.setAria(this.$wrapper, "expanded", false);
                            DomUtils.setAria(this.$wrapper, "activedescendant", "");
                        }
                        if (this.dropboxPopover && !isSilent) this.dropboxPopover.hide();
                        else this.afterHidePopper();
                    }
                },
                {
                    key: "afterHidePopper",
                    value: function afterHidePopper() {
                        var isSilent = this.isSilentClose;
                        this.isSilentClose = false;
                        DomUtils.removeClass(this.$allWrappers, "focused");
                        this.removeOptionFocus();
                        if (!isSilent && this.isPopupActive) {
                            DomUtils.removeClass(this.$body, "vscomp-popup-active");
                            this.isPopupActive = false;
                        }
                        DomUtils.addClass(this.$allWrappers, "closed");
                        if (!isSilent) DomUtils.dispatchEvent(this.$ele, "afterClose");
                        this.focus();
                    }
                },
                {
                    key: "moveSelectedOptionsFirst",
                    value: function moveSelectedOptionsFirst() {
                        if (!this.showSelectedOptionsFirst) return;
                        this.setSortedOptions();
                        if (!this.$optionsContainer.scrollTop || !this.selectedValues.length) this.setVisibleOptions();
                        else this.scrollToTop();
                    }
                },
                {
                    key: "toggleDropbox",
                    value: function toggleDropbox() {
                        if (this.isOpened()) this.closeDropbox();
                        else this.openDropbox();
                    }
                },
                {
                    key: "updatePosition",
                    value: function updatePosition() {
                        if (!this.dropboxPopover || !this.isOpened()) return;
                        this.$ele.updatePosition();
                    }
                },
                {
                    key: "isOpened",
                    value: function isOpened() {
                        return !DomUtils.hasClass(this.$wrapper, "closed");
                    }
                },
                {
                    key: "focusSearchInput",
                    value: function focusSearchInput() {
                        var $ele = this.$searchInput;
                        if ($ele) $ele.focus();
                    }
                },
                {
                    key: "focusOption",
                    value: function focusOption() {
                        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, direction = _ref5.direction, $option = _ref5.$option, focusFirst = _ref5.focusFirst;
                        var $focusedEle = this.$dropboxContainer.querySelector(".vscomp-option.focused");
                        var $newFocusedEle;
                        if ($option) $newFocusedEle = $option;
                        else if (!$focusedEle || focusFirst) {
                            /* if no element on focus choose first visible one */ var firstVisibleOptionIndex = this.getFirstVisibleOptionIndex();
                            $newFocusedEle = this.$dropboxContainer.querySelector('.vscomp-option[data-visible-index="'.concat(firstVisibleOptionIndex, '"]'));
                            if (DomUtils.hasClass($newFocusedEle, "disabled") || DomUtils.hasClass($newFocusedEle, "group-title")) $newFocusedEle = this.getSibling($newFocusedEle, "next");
                        } else $newFocusedEle = this.getSibling($focusedEle, direction);
                        if ($newFocusedEle && $newFocusedEle !== $focusedEle) {
                            if ($focusedEle) this.toggleOptionFocusedState($focusedEle, false);
                            if (this.$ariaLiveElem) this.$ariaLiveElem.textContent = $newFocusedEle.textContent;
                            this.toggleOptionFocusedState($newFocusedEle, true);
                            this.toggleFocusedProp(DomUtils.getData($newFocusedEle, "index"), true);
                            this.moveFocusedOptionToView($newFocusedEle);
                        }
                    }
                },
                {
                    key: "moveFocusedOptionToView",
                    value: function moveFocusedOptionToView($ele) {
                        var $focusedEle = $ele || this.$dropboxContainer.querySelector(".vscomp-option.focused");
                        if (!$focusedEle) return;
                        var newScrollTop;
                        var containerRect = this.$optionsContainer.getBoundingClientRect();
                        var optionRect = $focusedEle.getBoundingClientRect();
                        var containerTop = containerRect.top;
                        var containerBottom = containerRect.bottom;
                        var containerHeight = containerRect.height;
                        var optionTop = optionRect.top;
                        var optionBottom = optionRect.bottom;
                        var optionHeight = optionRect.height;
                        var optionOffsetTop = $focusedEle.offsetTop;
                        var optionsTop = DomUtils.getData(this.$options, "top", "number");
                        /* if option hidden on top */ if (containerTop > optionTop) newScrollTop = optionOffsetTop + optionsTop;
                        else if (containerBottom < optionBottom) /* if option hidden on bottom */ newScrollTop = optionOffsetTop - containerHeight + optionHeight + optionsTop;
                        if (newScrollTop !== undefined) this.$optionsContainer.scrollTop = newScrollTop;
                    }
                },
                {
                    key: "removeOptionFocus",
                    value: function removeOptionFocus() {
                        var $focusedEle = this.$dropboxContainer.querySelector(".vscomp-option.focused");
                        if (!$focusedEle) return;
                        this.toggleOptionFocusedState($focusedEle, false);
                        this.toggleFocusedProp(null);
                    }
                },
                {
                    key: "selectOption",
                    value: function selectOption($ele) {
                        var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}, event = _ref6.event;
                        if (!$ele) return;
                        var isAdding = !DomUtils.hasClass($ele, "selected");
                        if (isAdding) {
                            if (this.multiple && this.isMaxValuesSelected) return;
                        } else if (!this.multiple) {
                            /** on selecting same value in single select */ this.closeDropbox();
                            return;
                        }
                        var selectedValues = this.selectedValues;
                        var selectedValue = DomUtils.getData($ele, "value");
                        var selectedIndex = DomUtils.getData($ele, "index", "number");
                        var isNewOption = DomUtils.hasClass($ele, "current-new");
                        var shouldSelectRange = false;
                        var lastSelectedOptionIndex = this.lastSelectedOptionIndex;
                        this.lastSelectedOptionIndex = null;
                        this.toggleSelectedProp(selectedIndex, isAdding);
                        if (isAdding) {
                            if (this.multiple) {
                                selectedValues.push(selectedValue);
                                this.toggleAllOptionsClass();
                                this.toggleGroupOptionsParent($ele);
                                if (event && event.shiftKey) shouldSelectRange = true;
                            } else {
                                if (selectedValues.length) this.toggleSelectedProp(this.getOptionIndex(selectedValues[0]), false);
                                selectedValues = [
                                    selectedValue
                                ];
                                var $prevSelectedOption = this.$dropboxContainer.querySelector(".vscomp-option.selected");
                                if ($prevSelectedOption) this.toggleOptionSelectedState($prevSelectedOption, false);
                                this.closeDropbox();
                                if (!isNewOption) this.setSearchValue("");
                            }
                            this.lastSelectedOptionIndex = selectedIndex;
                            this.toggleOptionSelectedState($ele);
                        } else if (this.multiple) {
                            this.toggleOptionSelectedState($ele);
                            Utils.removeItemFromArray(selectedValues, selectedValue);
                            this.toggleAllOptionsClass(false);
                            this.toggleGroupOptionsParent($ele, false);
                        }
                        if (isNewOption) this.beforeSelectNewValue();
                        this.setValue(selectedValues);
                        if (shouldSelectRange) this.selectRangeOptions(lastSelectedOptionIndex, selectedIndex);
                    }
                },
                {
                    key: "selectFocusedOption",
                    value: function selectFocusedOption() {
                        this.selectOption(this.$dropboxContainer.querySelector(".vscomp-option.focused"));
                    }
                },
                {
                    key: "selectRangeOptions",
                    value: function selectRangeOptions(lastSelectedOptionIndex, selectedIndex) {
                        var _this9 = this;
                        if (typeof lastSelectedOptionIndex !== "number" || this.maxValues) return;
                        var selectedValues = this.selectedValues, hasOptionGroup = this.hasOptionGroup;
                        var groupIndexes = {};
                        var startIndex;
                        var endIndex;
                        if (lastSelectedOptionIndex < selectedIndex) {
                            startIndex = lastSelectedOptionIndex;
                            endIndex = selectedIndex;
                        } else {
                            startIndex = selectedIndex;
                            endIndex = lastSelectedOptionIndex;
                        }
                        this.options.forEach(function(d) {
                            if (d.isDisabled || d.isGroupTitle || !d.isVisible || d.isSelected) return;
                            var index = d.index;
                            if (index > startIndex && index < endIndex) {
                                if (hasOptionGroup) {
                                    var groupIndex = d.groupIndex;
                                    if (typeof groupIndex === "number") groupIndexes[groupIndex] = true;
                                }
                                // eslint-disable-next-line no-param-reassign
                                d.isSelected = true;
                                selectedValues.push(d.value);
                            }
                        });
                        this.toggleAllOptionsClass();
                        this.setValue(selectedValues);
                        groupIndexes = Object.keys(groupIndexes);
                        if (groupIndexes.length) {
                            var toggleGroupTitleProp = this.toggleGroupTitleProp.bind(this);
                            groupIndexes.forEach(function(i) {
                                toggleGroupTitleProp(parseInt(i));
                            });
                        }
                        /** using setTimeout to fix the issue of dropbox getting closed on select */ setTimeout(function() {
                            _this9.renderOptions();
                        }, 0);
                    }
                },
                {
                    key: "toggleAllOptions",
                    value: function toggleAllOptions(selectAll) {
                        if (!this.multiple || this.disableSelectAll) return;
                        var selectingAll = typeof isSelected === "boolean" ? selectAll : !DomUtils.hasClass(this.$toggleAllCheckbox, "checked");
                        var selectedValues = [];
                        var selectAllOnlyVisible = this.selectAllOnlyVisible;
                        this.options.forEach(function(d) {
                            var option = d;
                            if (option.isDisabled || option.isCurrentNew) return;
                            var isVisible = option.isVisible, isSelected1 = option.isSelected;
                            /** unselected items are */ if (/** when unselecting all, selectAllOnlyVisible feature disabled or visible items or already unselected items */ !selectingAll && (!selectAllOnlyVisible || isVisible || !isSelected1) || /** when selecting all, selectAllOnlyVisible feature enabled and hidden items those are not already selected */ selectingAll && selectAllOnlyVisible && !isVisible && !isSelected1) option.isSelected = false;
                            else {
                                option.isSelected = true;
                                if (!option.isGroupTitle) selectedValues.push(option.value);
                            }
                        });
                        this.toggleAllOptionsClass(selectingAll);
                        this.setValue(selectedValues);
                        this.renderOptions();
                    }
                },
                {
                    key: "toggleAllOptionsClass",
                    value: function toggleAllOptionsClass(isAllSelected) {
                        if (!this.multiple) return;
                        var valuePassed = typeof isAllSelected === "boolean";
                        var isAllVisibleSelected = false;
                        if (!valuePassed) // eslint-disable-next-line no-param-reassign
                        isAllSelected = this.isAllOptionsSelected();
                        /** when all options not selected, checking if all visible options selected */ if (!isAllSelected && this.selectAllOnlyVisible) isAllVisibleSelected = this.isAllOptionsSelected(true);
                        DomUtils.toggleClass(this.$toggleAllCheckbox, "checked", isAllSelected || isAllVisibleSelected);
                        this.isAllSelected = isAllSelected;
                    }
                },
                {
                    key: "isAllOptionsSelected",
                    value: function isAllOptionsSelected(visibleOnly) {
                        var isAllSelected = false;
                        if (this.options.length && this.selectedValues.length) isAllSelected = !this.options.some(/**
         * stop looping if any option is not selected
         * for selectAllOnlyVisible case hidden option need not to be selected
         */ function(d) {
                            return !d.isSelected && !d.isDisabled && !d.isGroupTitle && (!visibleOnly || d.isVisible);
                        });
                        return isAllSelected;
                    }
                },
                {
                    key: "isAllGroupOptionsSelected",
                    value: function isAllGroupOptionsSelected(groupIndex) {
                        var isAllSelected = false;
                        if (this.options.length) isAllSelected = !this.options.some(function(d) {
                            return !d.isSelected && !d.isDisabled && !d.isGroupTitle && d.groupIndex === groupIndex;
                        });
                        return isAllSelected;
                    }
                },
                {
                    key: "toggleGroupOptionsParent",
                    value: function toggleGroupOptionsParent($option, isSelected1) {
                        if (!this.hasOptionGroup || this.disableOptionGroupCheckbox || !$option) return;
                        var groupIndex = DomUtils.getData($option, "groupIndex");
                        if (groupIndex !== undefined) groupIndex = parseInt(groupIndex);
                        var $group = this.$options.querySelector('.vscomp-option[data-index="'.concat(groupIndex, '"]'));
                        var isAllSelected = typeof isSelected1 === "boolean" ? isSelected1 : this.isAllGroupOptionsSelected(groupIndex);
                        this.toggleGroupTitleCheckbox($group, isAllSelected);
                        this.toggleGroupTitleProp(groupIndex, isAllSelected);
                    }
                },
                {
                    key: "toggleGroupTitleProp",
                    value: function toggleGroupTitleProp(groupIndex, isSelected1) {
                        var isAllSelected = typeof isSelected1 === "boolean" ? isSelected1 : this.isAllGroupOptionsSelected(groupIndex);
                        this.toggleSelectedProp(groupIndex, isAllSelected);
                    }
                },
                {
                    key: "toggleGroupOptions",
                    value: function toggleGroupOptions($ele, isSelected1) {
                        var _this10 = this;
                        if (!this.hasOptionGroup || this.disableOptionGroupCheckbox || !$ele) return;
                        var groupIndex = DomUtils.getData($ele, "index", "number");
                        var selectedValues = this.selectedValues, selectAllOnlyVisible = this.selectAllOnlyVisible;
                        var valuesMapping = {};
                        var removeItemFromArray = Utils.removeItemFromArray;
                        selectedValues.forEach(function(d) {
                            valuesMapping[d] = true;
                        });
                        this.options.forEach(function(d) {
                            if (d.isDisabled || d.groupIndex !== groupIndex) return;
                            var value = d.value;
                            if (!isSelected1 || selectAllOnlyVisible && !d.isVisible) {
                                // eslint-disable-next-line no-param-reassign
                                d.isSelected = false;
                                if (valuesMapping[value]) removeItemFromArray(selectedValues, value);
                            } else {
                                // eslint-disable-next-line no-param-reassign
                                d.isSelected = true;
                                if (!valuesMapping[value]) selectedValues.push(value);
                            }
                        });
                        this.toggleAllOptionsClass(isSelected1 ? null : false);
                        this.setValue(selectedValues);
                        /** using setTimeout to fix the issue of dropbox getting closed on select */ setTimeout(function() {
                            _this10.renderOptions();
                        }, 0);
                    }
                },
                {
                    key: "toggleGroupTitleCheckbox",
                    value: function toggleGroupTitleCheckbox($ele, isSelected1) {
                        if (!$ele) return;
                        var selectedIndex = DomUtils.getData($ele, "index", "number");
                        this.toggleSelectedProp(selectedIndex, isSelected1);
                        this.toggleOptionSelectedState($ele, isSelected1);
                    }
                },
                {
                    key: "toggleFocusedProp",
                    value: function toggleFocusedProp(index) {
                        var isFocused = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        if (this.focusedOptionIndex) this.setOptionProp(this.focusedOptionIndex, "isFocused", false);
                        this.setOptionProp(index, "isFocused", isFocused);
                        this.focusedOptionIndex = index;
                    }
                },
                {
                    key: "toggleSelectedProp",
                    value: function toggleSelectedProp(index) {
                        var isSelected1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                        this.setOptionProp(index, "isSelected", isSelected1);
                    }
                },
                {
                    key: "scrollToTop",
                    value: function scrollToTop() {
                        var isClosed = !this.isOpened();
                        if (isClosed) this.openDropbox(true);
                        var scrollTop = this.$optionsContainer.scrollTop;
                        if (scrollTop > 0) this.$optionsContainer.scrollTop = 0;
                        if (isClosed) this.closeDropbox(true);
                    }
                },
                {
                    key: "reset",
                    value: function reset() {
                        var formReset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                        this.options.forEach(function(d) {
                            // eslint-disable-next-line no-param-reassign
                            d.isSelected = false;
                        });
                        this.beforeValueSet(true);
                        this.setValue(null, {
                            disableValidation: formReset
                        });
                        this.afterValueSet();
                        if (formReset) DomUtils.removeClass(this.$allWrappers, "has-error");
                        DomUtils.dispatchEvent(this.$ele, "reset");
                    }
                },
                {
                    key: "addOption",
                    value: function addOption(data, rerender) {
                        if (!data) return;
                        this.lastOptionIndex += 1;
                        var newOption = this.getOptionObj(_objectSpread(_objectSpread({}, data), {}, {
                            index: this.lastOptionIndex
                        }));
                        this.options.push(newOption);
                        this.sortedOptions.push(newOption);
                        if (rerender) {
                            this.visibleOptionsCount += 1;
                            this.afterSetOptions();
                        }
                    }
                },
                {
                    key: "removeOption",
                    value: function removeOption(index) {
                        if (!index && index !== 0) return;
                        this.options.splice(index, 1);
                        this.lastOptionIndex -= 1;
                    }
                },
                {
                    key: "removeNewOption",
                    value: function removeNewOption() {
                        var newOption = this.getNewOption();
                        if (newOption) this.removeOption(newOption.index);
                    }
                },
                {
                    key: "sortOptions",
                    value: function sortOptions(options) {
                        return options.sort(function(a, b) {
                            var aIsSelected = a.isSelected || a.isAnySelected;
                            var bIsSelected = b.isSelected || b.isAnySelected;
                            if (!aIsSelected && !bIsSelected) return 0;
                            if (aIsSelected && (!bIsSelected || a.index < b.index)) return -1;
                            return 1;
                        });
                    }
                },
                {
                    key: "sortOptionsGroup",
                    value: function sortOptionsGroup(options) {
                        var sortOptions = this.sortOptions.bind(this);
                        var structuredOptions = this.structureOptionGroup(options);
                        structuredOptions.forEach(function(d) {
                            var childOptions = d.options;
                            // eslint-disable-next-line no-param-reassign
                            d.isAnySelected = childOptions.some(function(e) {
                                return e.isSelected;
                            });
                            if (d.isAnySelected) sortOptions(childOptions);
                        });
                        sortOptions(structuredOptions);
                        return this.destructureOptionGroup(structuredOptions);
                    }
                },
                {
                    key: "isOptionVisible",
                    value: function isOptionVisible(_ref7) {
                        var data = _ref7.data, searchValue = _ref7.searchValue, hasExactOption = _ref7.hasExactOption, visibleOptionGroupsMapping = _ref7.visibleOptionGroupsMapping, searchGroup = _ref7.searchGroup, searchByStartsWith = _ref7.searchByStartsWith;
                        var value = data.value.toLowerCase();
                        var label = this.searchNormalize ? data.labelNormalized : data.label.toLowerCase();
                        var description = data.description, alias = data.alias;
                        var isVisible = searchByStartsWith ? label.startsWith(searchValue) : label.includes(searchValue);
                        if (data.isGroupTitle && (!searchGroup || !isVisible)) isVisible = visibleOptionGroupsMapping[data.index];
                        if (!searchByStartsWith && alias && !isVisible) isVisible = alias.includes(searchValue);
                        if (!searchByStartsWith && description && !isVisible) isVisible = description.toLowerCase().includes(searchValue);
                        // eslint-disable-next-line no-param-reassign
                        data.isVisible = isVisible;
                        if (!hasExactOption) // eslint-disable-next-line no-param-reassign
                        hasExactOption = label === searchValue || value === searchValue;
                        return {
                            isVisible: isVisible,
                            hasExactOption: hasExactOption
                        };
                    }
                },
                {
                    key: "structureOptionGroup",
                    value: function structureOptionGroup(options) {
                        var result = [];
                        var childOptions = {};
                        /** getting all group title */ options.forEach(function(d) {
                            if (d.isGroupTitle) {
                                var childArray = [];
                                // eslint-disable-next-line no-param-reassign
                                d.options = childArray;
                                childOptions[d.index] = childArray;
                                result.push(d);
                            }
                        });
                        /** getting all group options */ options.forEach(function(d) {
                            if (d.isGroupOption) childOptions[d.groupIndex].push(d);
                        });
                        return result;
                    }
                },
                {
                    key: "destructureOptionGroup",
                    value: function destructureOptionGroup(options) {
                        var result = [];
                        options.forEach(function(d) {
                            result.push(d);
                            result = result.concat(d.options);
                        });
                        return result;
                    }
                },
                {
                    key: "serverSearch",
                    value: function serverSearch() {
                        DomUtils.removeClass(this.$allWrappers, "has-no-search-results");
                        DomUtils.addClass(this.$allWrappers, "server-searching");
                        this.setSelectedOptions();
                        this.onServerSearch(this.searchValue, this);
                    }
                },
                {
                    key: "removeValue",
                    value: function removeValue($ele) {
                        var selectedValues = this.selectedValues;
                        var selectedValue = DomUtils.getData($ele, "value");
                        Utils.removeItemFromArray(selectedValues, selectedValue);
                        this.setValueMethod(selectedValues);
                    }
                },
                {
                    key: "focus",
                    value: function focus() {
                        this.$wrapper.focus();
                    }
                },
                {
                    key: "enable",
                    value: function enable() {
                        this.$ele.disabled = false;
                        this.$ele.removeAttribute("disabled");
                        this.$hiddenInput.removeAttribute("disabled");
                        DomUtils.setAria(this.$wrapper, "disabled", false);
                    }
                },
                {
                    key: "disable",
                    value: function disable() {
                        this.$ele.disabled = true;
                        this.$ele.setAttribute("disabled", "");
                        this.$hiddenInput.setAttribute("disabled", "");
                        DomUtils.setAria(this.$wrapper, "disabled", true);
                    }
                },
                {
                    key: "validate",
                    value: function validate() {
                        if (this.disableValidation) return true;
                        var hasError = false;
                        var selectedValues = this.selectedValues, minValues = this.minValues;
                        if (this.required && (Utils.isEmpty(selectedValues) || /** required minium options not selected */ this.multiple && minValues && selectedValues.length < minValues)) hasError = true;
                        DomUtils.toggleClass(this.$allWrappers, "has-error", hasError);
                        return !hasError;
                    }
                },
                {
                    key: "destroy",
                    value: function destroy() {
                        var $ele = this.$ele;
                        $ele.virtualSelect = undefined;
                        $ele.value = undefined;
                        $ele.innerHTML = "";
                        if (this.hasDropboxWrapper) {
                            this.$dropboxWrapper.remove();
                            this.mutationObserver.disconnect();
                        }
                        if (this.dropboxPopover) this.dropboxPopover.destroy();
                        DomUtils.removeClass($ele, "vscomp-ele");
                    }
                },
                {
                    key: "createSecureTextElements",
                    value: function createSecureTextElements() {
                        this.$secureDiv = document.createElement("div");
                        this.$secureText = document.createTextNode("");
                        this.$secureDiv.appendChild(this.$secureText);
                    }
                },
                {
                    key: "secureText",
                    value: function secureText(text) {
                        if (!text || !this.enableSecureText) return text;
                        this.$secureText.nodeValue = text;
                        return this.$secureDiv.innerHTML;
                    }
                },
                {
                    key: "toggleRequired",
                    value: function toggleRequired(isRequired) {
                        this.required = Utils.convertToBoolean(isRequired);
                        this.$ele.required = this.required;
                    }
                },
                {
                    key: "toggleOptionSelectedState",
                    value: function toggleOptionSelectedState($ele, value) {
                        var isSelected1 = value;
                        if (typeof isSelected1 === "undefined") isSelected1 = !DomUtils.hasClass($ele, "selected");
                        DomUtils.toggleClass($ele, "selected", isSelected1);
                        DomUtils.setAria($ele, "selected", isSelected1);
                    }
                },
                {
                    key: "toggleOptionFocusedState",
                    value: function toggleOptionFocusedState($ele, isFocused) {
                        if (!$ele) return;
                        DomUtils.toggleClass($ele, "focused", isFocused);
                        if (isFocused) DomUtils.setAria(this.$wrapper, "activedescendant", $ele.id);
                    }
                }
            ], [
                {
                    key: "init",
                    value: function init(options) {
                        var $eleArray = options.ele;
                        if (!$eleArray) return undefined;
                        var singleEle = false;
                        if (typeof $eleArray === "string") {
                            $eleArray = document.querySelectorAll($eleArray);
                            var eleLength = $eleArray.length;
                            if (eleLength === 0) return undefined;
                            if (eleLength === 1) singleEle = true;
                        }
                        if ($eleArray.length === undefined || $eleArray.forEach === undefined) {
                            $eleArray = [
                                $eleArray
                            ];
                            singleEle = true;
                        }
                        var instances = [];
                        $eleArray.forEach(function($ele) {
                            /** skipping initialization on calling init method multiple times */ if ($ele.virtualSelect) {
                                instances.push($ele.virtualSelect);
                                return;
                            }
                            // eslint-disable-next-line no-param-reassign
                            options.ele = $ele;
                            if ($ele.tagName === "SELECT") VirtualSelect.setPropsFromSelect(options);
                            instances.push(new VirtualSelect(options));
                        });
                        return singleEle ? instances[0] : instances;
                    }
                },
                {
                    key: "getAttrProps",
                    value: function getAttrProps() {
                        var convertPropToDataAttr = DomUtils.convertPropToDataAttr;
                        var result = {};
                        nativeProps.forEach(function(d) {
                            result[d] = d;
                        });
                        dataProps.forEach(function(d) {
                            result[convertPropToDataAttr(d)] = d;
                        });
                        return result;
                    }
                },
                {
                    key: "setPropsFromSelect",
                    value: function setPropsFromSelect(props) {
                        var $ele = props.ele;
                        var disabledOptions = [];
                        var selectedValue = [];
                        var getNativeOptions = function getNativeOptions($container) {
                            var options = [];
                            var $options = Array.from($container.children);
                            $options.forEach(function($option) {
                                var value = $option.value;
                                var option = {
                                    value: value
                                };
                                if ($option.tagName === "OPTGROUP") {
                                    option.label = $option.getAttribute("label");
                                    option.options = getNativeOptions($option);
                                } else option.label = $option.innerHTML;
                                options.push(option);
                                if ($option.disabled) disabledOptions.push(value);
                                if ($option.selected) selectedValue.push(value);
                            });
                            return options;
                        };
                        var optionsList = getNativeOptions($ele);
                        /** creating div element to initiate plugin and removing native element */ var $newEle = document.createElement("div");
                        DomUtils.setAttrFromEle($ele, $newEle, Object.keys(attrPropsMapping), valueLessProps);
                        $ele.parentNode.insertBefore($newEle, $ele);
                        $ele.remove();
                        // eslint-disable-next-line no-param-reassign
                        props.ele = $newEle;
                        // eslint-disable-next-line no-param-reassign
                        props.options = optionsList;
                        // eslint-disable-next-line no-param-reassign
                        props.disabledOptions = disabledOptions;
                        // eslint-disable-next-line no-param-reassign
                        props.selectedValue = selectedValue;
                    }
                },
                {
                    key: "onFormReset",
                    value: function onFormReset(e) {
                        var $form = e.target.closest("form");
                        if (!$form) return;
                        $form.querySelectorAll(".vscomp-ele-wrapper").forEach(function($ele) {
                            $ele.parentElement.virtualSelect.reset(true);
                        });
                    }
                },
                {
                    key: "onFormSubmit",
                    value: function onFormSubmit(e) {
                        if (!VirtualSelect.validate(e.target.closest("form"))) e.preventDefault();
                    }
                },
                {
                    key: "validate",
                    value: function validate($container) {
                        if (!$container) return true;
                        var hasError = false;
                        $container.querySelectorAll(".vscomp-ele-wrapper").forEach(function($ele) {
                            var result = $ele.parentElement.virtualSelect.validate();
                            if (!hasError && !result) hasError = true;
                        });
                        return !hasError;
                    }
                },
                {
                    key: "reset",
                    value: function reset() {
                        this.virtualSelect.reset();
                    }
                },
                {
                    key: "setValueMethod",
                    value: function setValueMethod() {
                        var _this$virtualSelect;
                        (_this$virtualSelect = this.virtualSelect).setValueMethod.apply(_this$virtualSelect, arguments);
                    }
                },
                {
                    key: "setOptionsMethod",
                    value: function setOptionsMethod() {
                        var _this$virtualSelect2;
                        (_this$virtualSelect2 = this.virtualSelect).setOptionsMethod.apply(_this$virtualSelect2, arguments);
                    }
                },
                {
                    key: "setDisabledOptionsMethod",
                    value: function setDisabledOptionsMethod() {
                        var _this$virtualSelect3;
                        (_this$virtualSelect3 = this.virtualSelect).setDisabledOptionsMethod.apply(_this$virtualSelect3, arguments);
                    }
                },
                {
                    key: "setEnabledOptionsMethod",
                    value: function setEnabledOptionsMethod() {
                        var _this$virtualSelect4;
                        (_this$virtualSelect4 = this.virtualSelect).setEnabledOptionsMethod.apply(_this$virtualSelect4, arguments);
                    }
                },
                {
                    key: "toggleSelectAll",
                    value: function toggleSelectAll(isSelected1) {
                        this.virtualSelect.toggleAllOptions(isSelected1);
                    }
                },
                {
                    key: "isAllSelected",
                    value: function isAllSelected() {
                        return this.virtualSelect.isAllSelected;
                    }
                },
                {
                    key: "addOptionMethod",
                    value: function addOptionMethod(data) {
                        this.virtualSelect.addOption(data, true);
                    }
                },
                {
                    key: "getNewValueMethod",
                    value: function getNewValueMethod() {
                        return this.virtualSelect.getNewValue();
                    }
                },
                {
                    key: "getDisplayValueMethod",
                    value: function getDisplayValueMethod() {
                        return this.virtualSelect.getDisplayValue();
                    }
                },
                {
                    key: "getSelectedOptionsMethod",
                    value: function getSelectedOptionsMethod(params) {
                        return this.virtualSelect.getSelectedOptions(params);
                    }
                },
                {
                    key: "getDisabledOptionsMethod",
                    value: function getDisabledOptionsMethod() {
                        return this.virtualSelect.getDisabledOptions();
                    }
                },
                {
                    key: "openMethod",
                    value: function openMethod() {
                        return this.virtualSelect.openDropbox();
                    }
                },
                {
                    key: "closeMethod",
                    value: function closeMethod() {
                        return this.virtualSelect.closeDropbox();
                    }
                },
                {
                    key: "focusMethod",
                    value: function focusMethod() {
                        return this.virtualSelect.focus();
                    }
                },
                {
                    key: "enableMethod",
                    value: function enableMethod() {
                        return this.virtualSelect.enable();
                    }
                },
                {
                    key: "disableMethod",
                    value: function disableMethod() {
                        return this.virtualSelect.disable();
                    }
                },
                {
                    key: "destroyMethod",
                    value: function destroyMethod() {
                        return this.virtualSelect.destroy();
                    }
                },
                {
                    key: "validateMethod",
                    value: function validateMethod() {
                        return this.virtualSelect.validate();
                    }
                },
                {
                    key: "toggleRequiredMethod",
                    value: function toggleRequiredMethod(isRequired) {
                        return this.virtualSelect.toggleRequired(isRequired);
                    }
                },
                {
                    key: "onResizeMethod",
                    value: function onResizeMethod() {
                        document.querySelectorAll(".vscomp-ele-wrapper").forEach(function($ele) {
                            $ele.parentElement.virtualSelect.onResize();
                        });
                    }
                }
            ]);
            return VirtualSelect;
        }();
        document.addEventListener("reset", VirtualSelect.onFormReset);
        document.addEventListener("submit", VirtualSelect.onFormSubmit);
        window.addEventListener("resize", VirtualSelect.onResizeMethod);
        attrPropsMapping = VirtualSelect.getAttrProps();
        window.VirtualSelect = VirtualSelect;
        /** polyfill to fix an issue in ie browser */ if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) NodeList.prototype.forEach = Array.prototype.forEach;
    }();
    // This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
    !function() {
        /*!
 * Popover v1.0.12
 * https://sa-si-dev.github.io/popover
 * Licensed under MIT (https://github.com/sa-si-dev/popover/blob/master/LICENSE)
 */ !function() {
            "use strict";
            function e(e) {
                return function(e) {
                    if (Array.isArray(e)) return t(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || function(e, o) {
                    if (e) {
                        if ("string" == typeof e) return t(e, o);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? t(e, o) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function t(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var o = 0, i = new Array(t); o < t; o++)i[o] = e[o];
                return i;
            }
            function o(e, t) {
                for(var o = 0; o < t.length; o++){
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var i = function() {
                function t() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, t);
                }
                var i, n;
                return i = t, n = [
                    {
                        key: "addClass",
                        value: function(o, i) {
                            o && (i = i.split(" "), t.getElements(o).forEach(function(t) {
                                var o;
                                (o = t.classList).add.apply(o, e(i));
                            }));
                        }
                    },
                    {
                        key: "removeClass",
                        value: function(o, i) {
                            o && (i = i.split(" "), t.getElements(o).forEach(function(t) {
                                var o;
                                (o = t.classList).remove.apply(o, e(i));
                            }));
                        }
                    },
                    {
                        key: "getElements",
                        value: function(e) {
                            if (e) return void 0 === e.forEach && (e = [
                                e
                            ]), e;
                        }
                    },
                    {
                        key: "getMoreVisibleSides",
                        value: function(e) {
                            if (!e) return {};
                            var t = e.getBoundingClientRect(), o = window.innerWidth, i = window.innerHeight, n = t.left, r = t.top;
                            return {
                                horizontal: n > o - n - t.width ? "left" : "right",
                                vertical: r > i - r - t.height ? "top" : "bottom"
                            };
                        }
                    },
                    {
                        key: "getAbsoluteCoords",
                        value: function(e) {
                            if (e) {
                                var t = e.getBoundingClientRect(), o = window.pageXOffset, i = window.pageYOffset;
                                return {
                                    width: t.width,
                                    height: t.height,
                                    top: t.top + i,
                                    right: t.right + o,
                                    bottom: t.bottom + i,
                                    left: t.left + o
                                };
                            }
                        }
                    },
                    {
                        key: "getCoords",
                        value: function(e) {
                            return e ? e.getBoundingClientRect() : {};
                        }
                    },
                    {
                        key: "getData",
                        value: function(e, t, o) {
                            if (e) {
                                var i = e ? e.dataset[t] : "";
                                return "number" === o ? i = parseFloat(i) || 0 : "true" === i ? i = !0 : "false" === i && (i = !1), i;
                            }
                        }
                    },
                    {
                        key: "setData",
                        value: function(e, t, o) {
                            e && (e.dataset[t] = o);
                        }
                    },
                    {
                        key: "setStyle",
                        value: function(e, t, o) {
                            e && (e.style[t] = o);
                        }
                    },
                    {
                        key: "show",
                        value: function(e) {
                            var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "block";
                            t.setStyle(e, "display", o);
                        }
                    },
                    {
                        key: "hide",
                        value: function(e) {
                            t.setStyle(e, "display", "none");
                        }
                    },
                    {
                        key: "getHideableParent",
                        value: function(e) {
                            for(var t, o = e.parentElement; o;){
                                var i = getComputedStyle(o).overflow;
                                if (-1 !== i.indexOf("scroll") || -1 !== i.indexOf("auto")) {
                                    t = o;
                                    break;
                                }
                                o = o.parentElement;
                            }
                            return t;
                        }
                    }
                ], o(i, n), t;
            }();
            function n(e, t) {
                for(var o = 0; o < t.length; o++){
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var r = [
                "top",
                "bottom",
                "left",
                "right"
            ].map(function(e) {
                return "position-".concat(e);
            }), a = {
                top: "rotate(180deg)",
                left: "rotate(90deg)",
                right: "rotate(-90deg)"
            }, s = function() {
                function e(t) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e);
                    try {
                        this.setProps(t), this.init();
                    } catch (e) {
                        console.warn("Couldn't initiate popper"), console.error(e);
                    }
                }
                var t, o;
                return t = e, o = [
                    {
                        key: "init",
                        value: function() {
                            var e = this.$popperEle;
                            e && this.$triggerEle && (i.setStyle(e, "zIndex", this.zIndex), this.setPosition());
                        }
                    },
                    {
                        key: "setProps",
                        value: function(e) {
                            var t = (e = this.setDefaultProps(e)).position ? e.position.toLowerCase() : "auto";
                            if (this.$popperEle = e.$popperEle, this.$triggerEle = e.$triggerEle, this.$arrowEle = e.$arrowEle, this.margin = parseFloat(e.margin), this.offset = parseFloat(e.offset), this.enterDelay = parseFloat(e.enterDelay), this.exitDelay = parseFloat(e.exitDelay), this.showDuration = parseFloat(e.showDuration), this.hideDuration = parseFloat(e.hideDuration), this.transitionDistance = parseFloat(e.transitionDistance), this.zIndex = parseFloat(e.zIndex), this.afterShowCallback = e.afterShow, this.afterHideCallback = e.afterHide, this.hasArrow = !!this.$arrowEle, -1 !== t.indexOf(" ")) {
                                var o = t.split(" ");
                                this.position = o[0], this.secondaryPosition = o[1];
                            } else this.position = t;
                        }
                    },
                    {
                        key: "setDefaultProps",
                        value: function(e) {
                            return Object.assign({
                                position: "auto",
                                margin: 8,
                                offset: 5,
                                enterDelay: 0,
                                exitDelay: 0,
                                showDuration: 300,
                                hideDuration: 200,
                                transitionDistance: 10,
                                zIndex: 1
                            }, e);
                        }
                    },
                    {
                        key: "setPosition",
                        value: function() {
                            i.show(this.$popperEle, "inline-flex");
                            var e, t, o, n = window.innerWidth, s = window.innerHeight, l = i.getAbsoluteCoords(this.$popperEle), h = i.getAbsoluteCoords(this.$triggerEle), p = l.width, u = l.height, c = l.top, f = l.right, v = l.bottom, d = l.left, y = h.width, m = h.height, g = h.top, w = h.right, E = h.bottom, b = h.left, k = g - c, $ = b - d, D = $, C = k, P = this.position, S = this.secondaryPosition, O = y / 2 - p / 2, A = m / 2 - u / 2, T = this.margin, x = this.transitionDistance, H = window.scrollY - c, L = s + H, R = window.scrollX - d, z = n + R, F = this.offset;
                            F && (H += F, L -= F, R += F, z -= F), "auto" === P && (P = i.getMoreVisibleSides(this.$triggerEle).vertical);
                            var I = {
                                top: {
                                    top: C - u - T,
                                    left: D + O
                                },
                                bottom: {
                                    top: C + m + T,
                                    left: D + O
                                },
                                right: {
                                    top: C + A,
                                    left: D + y + T
                                },
                                left: {
                                    top: C + A,
                                    left: D - p - T
                                }
                            }, M = I[P];
                            if (C = M.top, D = M.left, S && ("top" === S ? C = k : "bottom" === S ? C = k + m - u : "left" === S ? D = $ : "right" === S && (D = $ + y - p)), D < R ? "left" === P ? o = "right" : D = R + d > w ? w - d : R : D + p > z && ("right" === P ? o = "left" : D = z + d < b ? b - f : z - p), C < H ? "top" === P ? o = "bottom" : C = H + c > E ? E - c : H : C + u > L && ("bottom" === P ? o = "top" : C = L + c < g ? g - v : L - u), o) {
                                var j = I[o];
                                "top" === (P = o) || "bottom" === P ? C = j.top : "left" !== P && "right" !== P || (D = j.left);
                            }
                            "top" === P ? (e = C + x, t = D) : "right" === P ? (e = C, t = D - x) : "left" === P ? (e = C, t = D + x) : (e = C - x, t = D);
                            var U = "translate3d(".concat(t, "px, ").concat(e, "px, 0)");
                            if (i.setStyle(this.$popperEle, "transform", U), i.setData(this.$popperEle, "fromLeft", t), i.setData(this.$popperEle, "fromTop", e), i.setData(this.$popperEle, "top", C), i.setData(this.$popperEle, "left", D), i.removeClass(this.$popperEle, r.join(" ")), i.addClass(this.$popperEle, "position-".concat(P)), this.hasArrow) {
                                var B = 0, q = 0, W = D + d, K = C + c, V = this.$arrowEle.offsetWidth / 2, X = a[P] || "";
                                "top" === P || "bottom" === P ? (B = y / 2 + b - W) < V ? B = V : B > p - V && (B = p - V) : "left" !== P && "right" !== P || ((q = m / 2 + g - K) < V ? q = V : q > u - V && (q = u - V)), i.setStyle(this.$arrowEle, "transform", "translate3d(".concat(B, "px, ").concat(q, "px, 0) ").concat(X));
                            }
                            i.hide(this.$popperEle);
                        }
                    },
                    {
                        key: "resetPosition",
                        value: function() {
                            i.setStyle(this.$popperEle, "transform", "none"), this.setPosition();
                        }
                    },
                    {
                        key: "show",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.resetPosition, n = t.data;
                            clearTimeout(this.exitDelayTimeout), clearTimeout(this.hideDurationTimeout), o && this.resetPosition(), this.enterDelayTimeout = setTimeout(function() {
                                var t = i.getData(e.$popperEle, "left"), o = i.getData(e.$popperEle, "top"), r = "translate3d(".concat(t, "px, ").concat(o, "px, 0)"), a = e.showDuration;
                                i.show(e.$popperEle, "inline-flex"), i.getCoords(e.$popperEle), i.setStyle(e.$popperEle, "transitionDuration", a + "ms"), i.setStyle(e.$popperEle, "transform", r), i.setStyle(e.$popperEle, "opacity", 1), e.showDurationTimeout = setTimeout(function() {
                                    "function" == typeof e.afterShowCallback && e.afterShowCallback(n);
                                }, a);
                            }, this.enterDelay);
                        }
                    },
                    {
                        key: "hide",
                        value: function() {
                            var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = t.data;
                            clearTimeout(this.enterDelayTimeout), clearTimeout(this.showDurationTimeout), this.exitDelayTimeout = setTimeout(function() {
                                if (e.$popperEle) {
                                    var t = i.getData(e.$popperEle, "fromLeft"), n = i.getData(e.$popperEle, "fromTop"), r = "translate3d(".concat(t, "px, ").concat(n, "px, 0)"), a = e.hideDuration;
                                    i.setStyle(e.$popperEle, "transitionDuration", a + "ms"), i.setStyle(e.$popperEle, "transform", r), i.setStyle(e.$popperEle, "opacity", 0), e.hideDurationTimeout = setTimeout(function() {
                                        i.hide(e.$popperEle), "function" == typeof e.afterHideCallback && e.afterHideCallback(o);
                                    }, a);
                                }
                            }, this.exitDelay);
                        }
                    },
                    {
                        key: "updatePosition",
                        value: function() {
                            i.setStyle(this.$popperEle, "transitionDuration", "0ms"), this.resetPosition();
                            var e = i.getData(this.$popperEle, "left"), t = i.getData(this.$popperEle, "top");
                            i.show(this.$popperEle, "inline-flex"), i.setStyle(this.$popperEle, "transform", "translate3d(".concat(e, "px, ").concat(t, "px, 0)"));
                        }
                    }
                ], n(t.prototype, o), e;
            }();
            window.PopperComponent = s;
        }(), function() {
            "use strict";
            function e(e, t) {
                for(var o = 0; o < t.length; o++){
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var t = function() {
                function t() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, t);
                }
                var o, i, n;
                return o = t, n = [
                    {
                        key: "convertToBoolean",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return e = !0 === e || "true" === e || !1 !== e && "false" !== e && t;
                        }
                    },
                    {
                        key: "removeArrayEmpty",
                        value: function(e) {
                            return Array.isArray(e) && e.length ? e.filter(function(e) {
                                return !!e;
                            }) : [];
                        }
                    },
                    {
                        key: "throttle",
                        value: function(e, t) {
                            var o, i = 0;
                            return function() {
                                for(var n = arguments.length, r = new Array(n), a = 0; a < n; a++)r[a] = arguments[a];
                                var s = (new Date).getTime(), l = t - (s - i);
                                clearTimeout(o), l <= 0 ? (i = s, e.apply(void 0, r)) : o = setTimeout(function() {
                                    e.apply(void 0, r);
                                }, l);
                            };
                        }
                    }
                ], i = null, n && e(o, n), Object.defineProperty(o, "prototype", {
                    writable: !1
                }), t;
            }();
            function o(e) {
                return function(e) {
                    if (Array.isArray(e)) return i(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return i(e, t);
                        var o = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === o && e.constructor && (o = e.constructor.name), "Map" === o || "Set" === o ? Array.from(e) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? i(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var o = 0, i = new Array(t); o < t; o++)i[o] = e[o];
                return i;
            }
            function n(e, t) {
                for(var o = 0; o < t.length; o++){
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var r = function() {
                function e() {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e);
                }
                var i, r, a;
                return i = e, a = [
                    {
                        key: "addClass",
                        value: function(t, i) {
                            t && (i = i.split(" "), e.getElements(t).forEach(function(e) {
                                var t;
                                (t = e.classList).add.apply(t, o(i));
                            }));
                        }
                    },
                    {
                        key: "removeClass",
                        value: function(t, i) {
                            t && (i = i.split(" "), e.getElements(t).forEach(function(e) {
                                var t;
                                (t = e.classList).remove.apply(t, o(i));
                            }));
                        }
                    },
                    {
                        key: "hasClass",
                        value: function(e, t) {
                            return !!e && e.classList.contains(t);
                        }
                    },
                    {
                        key: "getElement",
                        value: function(e) {
                            return e && ("string" == typeof e ? e = document.querySelector(e) : void 0 !== e.length && (e = e[0])), e || null;
                        }
                    },
                    {
                        key: "getElements",
                        value: function(e) {
                            if (e) return void 0 === e.forEach && (e = [
                                e
                            ]), e;
                        }
                    },
                    {
                        key: "addEvent",
                        value: function(t, o, i) {
                            e.addOrRemoveEvent(t, o, i, "add");
                        }
                    },
                    {
                        key: "removeEvent",
                        value: function(t, o, i) {
                            e.addOrRemoveEvent(t, o, i, "remove");
                        }
                    },
                    {
                        key: "addOrRemoveEvent",
                        value: function(o, i, n, r) {
                            o && (i = t.removeArrayEmpty(i.split(" "))).forEach(function(t) {
                                (o = e.getElements(o)).forEach(function(e) {
                                    "add" === r ? e.addEventListener(t, n) : e.removeEventListener(t, n);
                                });
                            });
                        }
                    },
                    {
                        key: "getScrollableParents",
                        value: function(e) {
                            if (!e) return [];
                            for(var t = [
                                window
                            ], o = e.parentElement; o;){
                                var i = getComputedStyle(o).overflow;
                                -1 === i.indexOf("scroll") && -1 === i.indexOf("auto") || t.push(o), o = o.parentElement;
                            }
                            return t;
                        }
                    },
                    {
                        key: "convertPropToDataAttr",
                        value: function(e) {
                            return e ? "data-popover-".concat(e).replace(/([A-Z])/g, "-$1").toLowerCase() : "";
                        }
                    }
                ], r = null, a && n(i, a), Object.defineProperty(i, "prototype", {
                    writable: !1
                }), e;
            }();
            function a(e, t) {
                for(var o = 0; o < t.length; o++){
                    var i = t[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                }
            }
            var s, l = {
                27: "onEscPress"
            }, h = [
                "target",
                "position",
                "margin",
                "offset",
                "enterDelay",
                "exitDelay",
                "showDuration",
                "hideDuration",
                "transitionDistance",
                "updatePositionThrottle",
                "zIndex",
                "hideOnOuterClick",
                "showOnHover",
                "hideArrowIcon",
                "disableManualAction",
                "disableUpdatePosition"
            ], p = function() {
                function e(t) {
                    !function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, e);
                    try {
                        this.setProps(t), this.init();
                    } catch (e) {
                        console.warn("Couldn't initiate Popover component"), console.error(e);
                    }
                }
                var o, i, n;
                return o = e, n = [
                    {
                        key: "init",
                        value: function(t) {
                            var o = t.ele;
                            if (o) {
                                var i = !1;
                                if ("string" == typeof o) {
                                    if (!(o = document.querySelectorAll(o))) return;
                                    1 === o.length && (i = !0);
                                }
                                void 0 === o.length && (o = [
                                    o
                                ], i = !0);
                                var n = [];
                                return o.forEach(function(o) {
                                    t.ele = o, e.destroy(o), n.push(new e(t));
                                }), i ? n[0] : n;
                            }
                        }
                    },
                    {
                        key: "destroy",
                        value: function(e) {
                            if (e) {
                                var t = e.popComp;
                                t && t.destroy();
                            }
                        }
                    },
                    {
                        key: "showMethod",
                        value: function() {
                            this.popComp.show();
                        }
                    },
                    {
                        key: "hideMethod",
                        value: function() {
                            this.popComp.hide();
                        }
                    },
                    {
                        key: "updatePositionMethod",
                        value: function() {
                            this.popComp.popper.updatePosition();
                        }
                    },
                    {
                        key: "getAttrProps",
                        value: function() {
                            var e = r.convertPropToDataAttr, t = {};
                            return h.forEach(function(o) {
                                t[e(o)] = o;
                            }), t;
                        }
                    }
                ], i = [
                    {
                        key: "init",
                        value: function() {
                            this.$popover && (this.setElementProps(), this.renderArrow(), this.initPopper(), this.addEvents());
                        }
                    },
                    {
                        key: "getEvents",
                        value: function() {
                            var e = [
                                {
                                    $ele: document,
                                    event: "click",
                                    method: "onDocumentClick"
                                },
                                {
                                    $ele: document,
                                    event: "keydown",
                                    method: "onDocumentKeyDown"
                                }
                            ];
                            return this.disableManualAction || (e.push({
                                $ele: this.$ele,
                                event: "click",
                                method: "onTriggerEleClick"
                            }), this.showOnHover && (e.push({
                                $ele: this.$ele,
                                event: "mouseenter",
                                method: "onTriggerEleMouseEnter"
                            }), e.push({
                                $ele: this.$ele,
                                event: "mouseleave",
                                method: "onTriggerEleMouseLeave"
                            }))), e;
                        }
                    },
                    {
                        key: "addOrRemoveEvents",
                        value: function(e) {
                            var t = this;
                            this.getEvents().forEach(function(o) {
                                t.addOrRemoveEvent({
                                    action: e,
                                    $ele: o.$ele,
                                    events: o.event,
                                    method: o.method
                                });
                            });
                        }
                    },
                    {
                        key: "addEvents",
                        value: function() {
                            this.addOrRemoveEvents("add");
                        }
                    },
                    {
                        key: "removeEvents",
                        value: function() {
                            this.addOrRemoveEvents("remove"), this.removeScrollEventListeners(), this.removeResizeEventListeners();
                        }
                    },
                    {
                        key: "addOrRemoveEvent",
                        value: function(e) {
                            var o = this, i = e.action, n = e.$ele, a = e.events, s = e.method, l = e.throttle;
                            n && (a = t.removeArrayEmpty(a.split(" "))).forEach(function(e) {
                                var a = "".concat(s, "-").concat(e), h = o.events[a];
                                h || (h = o[s].bind(o), l && (h = t.throttle(h, l)), o.events[a] = h), "add" === i ? r.addEvent(n, e, h) : r.removeEvent(n, e, h);
                            });
                        }
                    },
                    {
                        key: "addScrollEventListeners",
                        value: function() {
                            this.$scrollableElems = r.getScrollableParents(this.$ele), this.addOrRemoveEvent({
                                action: "add",
                                $ele: this.$scrollableElems,
                                events: "scroll",
                                method: "onAnyParentScroll",
                                throttle: this.updatePositionThrottle
                            });
                        }
                    },
                    {
                        key: "removeScrollEventListeners",
                        value: function() {
                            this.$scrollableElems && (this.addOrRemoveEvent({
                                action: "remove",
                                $ele: this.$scrollableElems,
                                events: "scroll",
                                method: "onAnyParentScroll"
                            }), this.$scrollableElems = null);
                        }
                    },
                    {
                        key: "addResizeEventListeners",
                        value: function() {
                            this.addOrRemoveEvent({
                                action: "add",
                                $ele: window,
                                events: "resize",
                                method: "onResize",
                                throttle: this.updatePositionThrottle
                            });
                        }
                    },
                    {
                        key: "removeResizeEventListeners",
                        value: function() {
                            this.addOrRemoveEvent({
                                action: "remove",
                                $ele: window,
                                events: "resize",
                                method: "onResize"
                            });
                        }
                    },
                    {
                        key: "onAnyParentScroll",
                        value: function() {
                            this.popper.updatePosition();
                        }
                    },
                    {
                        key: "onResize",
                        value: function() {
                            this.popper.updatePosition();
                        }
                    },
                    {
                        key: "onDocumentClick",
                        value: function(e) {
                            var t = e.target, o = t.closest(".pop-comp-ele"), i = t.closest(".pop-comp-wrapper");
                            this.hideOnOuterClick && o !== this.$ele && i !== this.$popover && this.hide();
                        }
                    },
                    {
                        key: "onDocumentKeyDown",
                        value: function(e) {
                            var t = e.which || e.keyCode, o = l[t];
                            o && this[o](e);
                        }
                    },
                    {
                        key: "onEscPress",
                        value: function() {
                            this.hideOnOuterClick && this.hide();
                        }
                    },
                    {
                        key: "onTriggerEleClick",
                        value: function() {
                            this.toggle();
                        }
                    },
                    {
                        key: "onTriggerEleMouseEnter",
                        value: function() {
                            this.show();
                        }
                    },
                    {
                        key: "onTriggerEleMouseLeave",
                        value: function() {
                            this.hide();
                        }
                    },
                    {
                        key: "setProps",
                        value: function(e) {
                            e = this.setDefaultProps(e), this.setPropsFromElementAttr(e);
                            var o = t.convertToBoolean;
                            this.$ele = e.ele, this.target = e.target, this.position = e.position, this.margin = parseFloat(e.margin), this.offset = parseFloat(e.offset), this.enterDelay = parseFloat(e.enterDelay), this.exitDelay = parseFloat(e.exitDelay), this.showDuration = parseFloat(e.showDuration), this.hideDuration = parseFloat(e.hideDuration), this.transitionDistance = parseFloat(e.transitionDistance), this.updatePositionThrottle = parseFloat(e.updatePositionThrottle), this.zIndex = parseFloat(e.zIndex), this.hideOnOuterClick = o(e.hideOnOuterClick), this.showOnHover = o(e.showOnHover), this.hideArrowIcon = o(e.hideArrowIcon), this.disableManualAction = o(e.disableManualAction), this.disableUpdatePosition = o(e.disableUpdatePosition), this.beforeShowCallback = e.beforeShow, this.afterShowCallback = e.afterShow, this.beforeHideCallback = e.beforeHide, this.afterHideCallback = e.afterHide, this.events = {}, this.$popover = r.getElement(this.target);
                        }
                    },
                    {
                        key: "setDefaultProps",
                        value: function(e) {
                            return Object.assign({
                                position: "auto",
                                margin: 8,
                                offset: 5,
                                enterDelay: 0,
                                exitDelay: 0,
                                showDuration: 300,
                                hideDuration: 200,
                                transitionDistance: 10,
                                updatePositionThrottle: 100,
                                zIndex: 1,
                                hideOnOuterClick: !0,
                                showOnHover: !1,
                                hideArrowIcon: !1,
                                disableManualAction: !1,
                                disableUpdatePosition: !1
                            }, e);
                        }
                    },
                    {
                        key: "setPropsFromElementAttr",
                        value: function(e) {
                            var t = e.ele;
                            for(var o in s){
                                var i = t.getAttribute(o);
                                i && (e[s[o]] = i);
                            }
                        }
                    },
                    {
                        key: "setElementProps",
                        value: function() {
                            var t = this.$ele;
                            t.popComp = this, t.show = e.showMethod, t.hide = e.hideMethod, t.updatePosition = e.updatePositionMethod, r.addClass(this.$ele, "pop-comp-ele"), r.addClass(this.$popover, "pop-comp-wrapper");
                        }
                    },
                    {
                        key: "getOtherTriggerPopComp",
                        value: function() {
                            var e, t = this.$popover.popComp;
                            return t && t.$ele !== this.$ele && (e = t), e;
                        }
                    },
                    {
                        key: "initPopper",
                        value: function() {
                            var e = {
                                $popperEle: this.$popover,
                                $triggerEle: this.$ele,
                                $arrowEle: this.$arrowEle,
                                position: this.position,
                                margin: this.margin,
                                offset: this.offset,
                                enterDelay: this.enterDelay,
                                exitDelay: this.exitDelay,
                                showDuration: this.showDuration,
                                hideDuration: this.hideDuration,
                                transitionDistance: this.transitionDistance,
                                zIndex: this.zIndex,
                                afterShow: this.afterShow.bind(this),
                                afterHide: this.afterHide.bind(this)
                            };
                            this.popper = new PopperComponent(e);
                        }
                    },
                    {
                        key: "beforeShow",
                        value: function() {
                            "function" == typeof this.beforeShowCallback && this.beforeShowCallback(this);
                        }
                    },
                    {
                        key: "beforeHide",
                        value: function() {
                            "function" == typeof this.beforeHideCallback && this.beforeHideCallback(this);
                        }
                    },
                    {
                        key: "show",
                        value: function() {
                            this.isShown() || (this.isShownForOtherTrigger() ? this.showAfterOtherHide() : (r.addClass(this.$popover, "pop-comp-disable-events"), this.$popover.popComp = this, this.beforeShow(), this.popper.show({
                                resetPosition: !0
                            }), r.addClass(this.$ele, "pop-comp-active")));
                        }
                    },
                    {
                        key: "hide",
                        value: function() {
                            this.isShown() && (this.beforeHide(), this.popper.hide(), this.removeScrollEventListeners(), this.removeResizeEventListeners());
                        }
                    },
                    {
                        key: "toggle",
                        value: function(e) {
                            void 0 === e && (e = !this.isShown()), e ? this.show() : this.hide();
                        }
                    },
                    {
                        key: "isShown",
                        value: function() {
                            return r.hasClass(this.$ele, "pop-comp-active");
                        }
                    },
                    {
                        key: "isShownForOtherTrigger",
                        value: function() {
                            var e = this.getOtherTriggerPopComp();
                            return !!e && e.isShown();
                        }
                    },
                    {
                        key: "showAfterOtherHide",
                        value: function() {
                            var e = this, t = this.getOtherTriggerPopComp();
                            if (t) {
                                var o = t.exitDelay + t.hideDuration + 100;
                                setTimeout(function() {
                                    e.show();
                                }, o);
                            }
                        }
                    },
                    {
                        key: "afterShow",
                        value: function() {
                            var e = this;
                            this.showOnHover ? setTimeout(function() {
                                r.removeClass(e.$popover, "pop-comp-disable-events");
                            }, 2e3) : r.removeClass(this.$popover, "pop-comp-disable-events"), this.disableUpdatePosition || (this.addScrollEventListeners(), this.addResizeEventListeners()), "function" == typeof this.afterShowCallback && this.afterShowCallback(this);
                        }
                    },
                    {
                        key: "afterHide",
                        value: function() {
                            r.removeClass(this.$ele, "pop-comp-active"), "function" == typeof this.afterHideCallback && this.afterHideCallback(this);
                        }
                    },
                    {
                        key: "renderArrow",
                        value: function() {
                            if (!this.hideArrowIcon) {
                                var e = this.$popover.querySelector(".pop-comp-arrow");
                                e || (this.$popover.insertAdjacentHTML("afterbegin", '<i class="pop-comp-arrow"></i>'), e = this.$popover.querySelector(".pop-comp-arrow")), this.$arrowEle = e;
                            }
                        }
                    },
                    {
                        key: "destroy",
                        value: function() {
                            this.removeEvents();
                        }
                    }
                ], a(o.prototype, i), n && a(o, n), Object.defineProperty(o, "prototype", {
                    writable: !1
                }), e;
            }();
            s = p.getAttrProps(), window.PopoverComponent = p;
        }();
    }();
/******/ })();

},{}],"g5JSb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AttachFileService", ()=>AttachFileService);
class AttachFileService {
    NO_VALID_CLASS = "no-valid";
    ATTACH_FILE_LABEL_TEXT_CONTENT = "One file, up to 20 mb";
    constructor(idRootNode, options = {
        handleChangeValidateInput: (fileInput)=>{},
        handleSuccessAttach: (fileInput)=>{},
        handleCanceled: (fileInput)=>{}
    }){
        this.$root = document.querySelector(`#${idRootNode}`);
        if (!this.$root) {
            console.error(`You are trying init AttachFile by #${idRootNode} node, but this was not found `);
            return;
        }
        this.cvInput = this.$root.querySelector("input");
        this.fileBody = this.$root.querySelector("[data-attach-file-body]");
        this.labelCVFile = this.$root.querySelector("[data-attach-file-resume-add]");
        this.infoCVFile = this.$root.querySelector("[data-attach-file-description]");
        this.progressUploadCV = this.$root.querySelector("[data-attach-file-progress]");
        this.progressUploadCVLine = this.$root.querySelector("[data-attach-file-progress-line]");
        this.progressUploadCVPercentValue = this.$root.querySelector("[data-attach-file-percent]");
        this.spinnerCVFile = this.$root.querySelector("[data-attach-file-spinner]");
        this.successUploadCVFileIcon = this.$root.querySelector("[data-attach-file-success-uploaded]");
        this.cancelCVFileIcon = this.$root.querySelector("[data-attach-file-cancel]");
        this.trashCVFileIcon = this.$root.querySelector("[data-attach-file-trash]");
        this.options = options;
        this.ATTACH_FILE = null;
        this.file = null;
        this.#setup();
    }
    showElement(nodeEl) {
        nodeEl.style.display = "inline-block";
    }
    hideElement(nodeEl) {
        nodeEl.style.display = "none";
    }
    cancelCv() {
        this.options.handleCanceled?.(this.cvInput);
        this.setInvalidStatus();
        this.cvInput.value = "";
        this.ATTACH_FILE = null;
        this.labelCVFile.textContent = "Add Your English CV";
        this.hideElement(this.progressUploadCVPercentValue);
        this.hideElement(this.spinnerCVFile);
        this.hideElement(this.cancelCVFileIcon);
        this.hideElement(this.trashCVFileIcon);
        this.hideElement(this.progressUploadCV);
        this.hideElement(this.successUploadCVFileIcon);
        this.showElement(this.infoCVFile);
        this.infoCVFile.textContent = this.ATTACH_FILE_LABEL_TEXT_CONTENT;
        this.fileBody.style.pointerEvents = "auto";
        this.labelCVFile.classList.remove("owner-file-name");
        this.progressUploadCVLine.classList.remove("uploaded");
    }
    removeInvalidStatus() {
        this.$root.classList.remove(this.NO_VALID_CLASS);
    }
    setInvalidStatus() {
        this.$root.classList.add(this.NO_VALID_CLASS);
    }
    handleChange() {
        try {
            this.removeInvalidStatus();
            this.infoCVFile.textContent = this.ATTACH_FILE_LABEL_TEXT_CONTENT;
            if (!this.cvInput.value.length) {
                this.setInvalidStatus();
                return;
            }
            const file = this.cvInput.files[0];
            this.file = file;
            this.options.handleChangeValidateInput?.(this.cvInput);
            const reader = new FileReader();
            this.showElement(this.cancelCVFileIcon);
            this.showElement(this.progressUploadCV);
            this.showElement(this.spinnerCVFile);
            this.showElement(this.progressUploadCVPercentValue);
            this.fileBody.style.pointerEvents = "none";
            this.labelCVFile.classList.add("owner-file-name");
            this.labelCVFile.innerText = file.name;
            this.infoCVFile.style.display = "none";
            reader.onload = ()=>{
                this.options.handleSuccessAttach?.(this.cvInput);
                this.showElement(this.successUploadCVFileIcon);
                this.showElement(this.trashCVFileIcon);
                this.hideElement(this.spinnerCVFile);
                this.hideElement(this.cancelCVFileIcon);
                this.ATTACH_FILE = file;
            };
            reader.onprogress = (event)=>{
                if (event.lengthComputable) {
                    let progress = event.loaded / event.total * 100;
                    this.progressUploadCVLine.style.width = progress + "%";
                    this.progressUploadCVPercentValue.textContent = Math.round(progress) + "%";
                    if (progress === 100) this.progressUploadCVLine.classList.add("uploaded");
                }
            };
            reader.readAsDataURL(file);
        } catch (errorMessage) {
            console.log("ERROR FILE", errorMessage);
            this.cancelCv();
            this.showElement(this.trashCVFileIcon);
            this.infoCVFile.textContent = errorMessage?.message;
            this.labelCVFile.textContent = this.file?.name || "";
            this.file = null;
        }
    }
    setFile(file) {
        let container = new DataTransfer();
        container.items.add(file);
        this.cvInput.files = container.files;
        this.ATTACH_FILE = file;
    }
    getFile() {
        return this.ATTACH_FILE;
    }
    setSuccessfulyUploadedStatus(file) {
        if (!file) return;
        this.setFile(file);
        this.fileBody.style.pointerEvents = "none";
        this.labelCVFile.classList.add("owner-file-name");
        this.labelCVFile.innerText = file.name;
        this.infoCVFile.style.display = "none";
        this.showElement(this.progressUploadCV);
        this.showElement(this.progressUploadCVPercentValue);
        this.showElement(this.successUploadCVFileIcon);
        this.showElement(this.trashCVFileIcon);
        this.hideElement(this.spinnerCVFile);
        this.hideElement(this.cancelCVFileIcon);
        this.progressUploadCVLine.style.width = "100%";
        this.progressUploadCVPercentValue.textContent = "100%";
        this.progressUploadCVLine.classList.add("uploaded");
        this.options.handleSuccessAttach?.(this.cvInput);
    }
    #setup() {
        this.cvInput?.addEventListener("change", this.handleChange.bind(this));
        this.trashCVFileIcon?.addEventListener("click", this.cancelCv.bind(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5znpE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "IndexedDbService", ()=>IndexedDbService);
var _idb = require("idb");
class IndexedDbService {
    name = null;
    idb = null;
    constructor(name, version, config){
        this.name = name;
        this.idb = (0, _idb.openDB)(name, version, config);
        this.setup();
    }
    async get(key) {
        return (await this.idb).get(this.name, key);
    }
    async set(key, val) {
        return (await this.idb).put(this.name, val, key);
    }
    async del(key) {
        return (await this.idb).delete(this.name, key);
    }
    async clear() {
        return (await this.idb).clear(this.name);
    }
    async keys() {
        return (await this.idb).getAllKeys(this.name);
    }
    setup() {
        window[`idb-${this.name}`] = this;
    }
}

},{"idb":"kozAz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kozAz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unwrap", ()=>(0, _wrapIdbValueJs.u));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapIdbValueJs.w));
parcelHelpers.export(exports, "deleteDB", ()=>deleteDB);
parcelHelpers.export(exports, "openDB", ()=>openDB);
var _wrapIdbValueJs = require("./wrap-idb-value.js");
/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */ function openDB(name, version, { blocked , upgrade , blocking , terminated  } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0, _wrapIdbValueJs.w)(request);
    if (upgrade) request.addEventListener("upgradeneeded", (event)=>{
        upgrade((0, _wrapIdbValueJs.w)(request.result), event.oldVersion, event.newVersion, (0, _wrapIdbValueJs.w)(request.transaction), event);
    });
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    openPromise.then((db)=>{
        if (terminated) db.addEventListener("close", ()=>terminated());
        if (blocking) db.addEventListener("versionchange", (event)=>blocking(event.oldVersion, event.newVersion, event));
    }).catch(()=>{});
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */ function deleteDB(name, { blocked  } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) request.addEventListener("blocked", (event)=>blocked(// Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    return (0, _wrapIdbValueJs.w)(request).then(()=>undefined);
}
const readMethods = [
    "get",
    "getKey",
    "getAll",
    "getAllKeys",
    "count"
];
const writeMethods = [
    "put",
    "add",
    "delete",
    "clear"
];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) return;
    if (cachedMethods.get(prop)) return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, "");
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (// Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) return;
    const method = async function(storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
        let target = tx.store;
        if (useIndex) target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0, _wrapIdbValueJs.r)((oldTraps)=>({
        ...oldTraps,
        get: (target, prop, receiver)=>getMethod(target, prop) || oldTraps.get(target, prop, receiver),
        has: (target, prop)=>!!getMethod(target, prop) || oldTraps.has(target, prop)
    }));

},{"./wrap-idb-value.js":"lS54k","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lS54k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "a", ()=>reverseTransformCache);
parcelHelpers.export(exports, "i", ()=>instanceOfAny);
parcelHelpers.export(exports, "r", ()=>replaceTraps);
parcelHelpers.export(exports, "u", ()=>unwrap);
parcelHelpers.export(exports, "w", ()=>wrap);
const instanceOfAny = (object, constructors)=>constructors.some((c)=>object instanceof c);
let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return idbProxyableTypes || (idbProxyableTypes = [
        IDBDatabase,
        IDBObjectStore,
        IDBIndex,
        IDBCursor,
        IDBTransaction
    ]);
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return cursorAdvanceMethods || (cursorAdvanceMethods = [
        IDBCursor.prototype.advance,
        IDBCursor.prototype.continue,
        IDBCursor.prototype.continuePrimaryKey
    ]);
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            request.removeEventListener("success", success);
            request.removeEventListener("error", error);
        };
        const success = ()=>{
            resolve(wrap(request.result));
            unlisten();
        };
        const error = ()=>{
            reject(request.error);
            unlisten();
        };
        request.addEventListener("success", success);
        request.addEventListener("error", error);
    });
    promise.then((value)=>{
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) cursorRequestMap.set(value, request);
    // Catching to avoid "Uncaught Promise exceptions"
    }).catch(()=>{});
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx)) return;
    const done = new Promise((resolve, reject)=>{
        const unlisten = ()=>{
            tx.removeEventListener("complete", complete);
            tx.removeEventListener("error", error);
            tx.removeEventListener("abort", error);
        };
        const complete = ()=>{
            resolve();
            unlisten();
        };
        const error = ()=>{
            reject(tx.error || new DOMException("AbortError", "AbortError"));
            unlisten();
        };
        tx.addEventListener("complete", complete);
        tx.addEventListener("error", error);
        tx.addEventListener("abort", error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get (target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === "done") return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === "objectStoreNames") return target.objectStoreNames || transactionStoreNamesMap.get(target);
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === "store") return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set (target, prop, value) {
        target[prop] = value;
        return true;
    },
    has (target, prop) {
        if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) return true;
        return prop in target;
    }
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) return function(storeNames, ...args) {
        const tx = func.call(unwrap(this), storeNames, ...args);
        transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [
            storeNames
        ]);
        return wrap(tx);
    };
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        func.apply(unwrap(this), args);
        return wrap(cursorRequestMap.get(this));
    };
    return function(...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === "function") return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest) return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value)) return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value)=>reverseTransformCache.get(value);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iJIGT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpinnerService", ()=>SpinnerService);
class SpinnerService {
    static $spinner = document.querySelector(".spinner");
    static showSpinner() {
        SpinnerService.$spinner.classList.add("show");
    }
    static hideSpinner() {
        SpinnerService.$spinner.classList.remove("show");
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"13fZW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MultiFormService", ()=>MultiFormService);
var _formService = require("./FormService");
class MultiFormService extends (0, _formService.FormService) {
    ACTIVE_FORM_STEP_CLASS = "form__step-active";
    ACTIVE_PROGRESS_STEP_CLASS = "progressbar-step-active";
    options = {
        currentStep: 0,
        handleSuccessNextStep: async (formData, currentStep)=>{},
        handleSubmit: async (formData, currentStep)=>{},
        setValueOnInit: (input, valueFromInitData)=>{},
        customValidateByStep: (inputField)=>{},
        watch: (fieldName, fieldValue)=>{},
        initFormData: null
    };
    constructor(formId, options = {
        currentStep: 0,
        handleSuccessNextStep: async (formData, currentStep)=>{},
        handleSubmit: async (formData, currentStep)=>{},
        watch: (fieldName, fieldValue)=>{},
        setValueOnInit: (input, valueFromInitData)=>{},
        customValidateFields: (input, options = {
            isNotRequiredButMustValidate: false,
            configurationErrorHandling: {
                isEmpty: true,
                error: 0,
                errorMessage: ""
            }
        })=>{},
        initFormData: null
    }){
        const { handleSubmit , setValueOnInit , watch , ...restMultiFormOptions } = options;
        super(formId, {
            handleSubmit,
            setValueOnInit,
            watch,
            initFormData: null
        });
        if (!this.$form) return;
        this.$steps = [
            ...this.$form.querySelectorAll("[data-step]")
        ];
        this.$progressSteps = [
            ...this.$form.querySelectorAll(".progressbar-step")
        ];
        this.options = {
            ...restMultiFormOptions,
            watch,
            handleSubmit,
            setValueOnInit
        };
        this.currentStep = this.options?.currentStep ?? this.$steps.findIndex((e)=>e.classList.contains(this.ACTIVE_FORM_STEP_CLASS));
        if (this.options?.currentStep < 0) {
            this.currentStep = 0;
            this.$steps[this.currentStep].classList.add(this.ACTIVE_FORM_STEP_CLASS);
        }
        this.#setupMultiForm();
        if (options.initFormData) this.initMultiForm(options.initFormData);
    }
    renderSteps() {
        this.$steps.forEach((step, index)=>{
            step.classList.toggle(this.ACTIVE_FORM_STEP_CLASS, index === this.currentStep);
        });
    }
    renderProgress() {
        if (!this.$progressSteps.length) return;
        this.$progressSteps.forEach((progressStep, index)=>{
            progressStep.classList.toggle(this.ACTIVE_PROGRESS_STEP_CLASS, index === this.currentStep);
        });
    }
    getRequireInputsByStep(step) {
        const stepContainer = this.$form.querySelector(`[data-step="${step}"]`);
        const requiredFields = stepContainer.querySelectorAll("._require");
        return requiredFields;
    }
    getAllFieldsByStep(step) {
        const stepContainer = this.$form.querySelector(`[data-step="${step}"]`);
        const requiredFields = stepContainer.querySelectorAll("._field");
        return requiredFields;
    }
    async handleSteps(e) {
        const target = e.target;
        if (!target.matches("[data-btn]")) return;
        let incrementor = 0;
        const btn = target.dataset.btn;
        const prevBtn = btn === "prev";
        const nextPrev = btn === "next";
        const submitBtn = btn === "submit";
        function getInputFromWrapperBlock(requiredBlock) {
            let input = requiredBlock.querySelector("input");
            if (requiredBlock.classList.contains("fields-block__textarea")) input = requiredBlock.querySelector("textarea");
            if (!input) return null;
            return input;
        }
        const getValuesByStep = async (step)=>{
            const data = {};
            let errors = 0;
            const fieldBlocks = this.getAllFieldsByStep(step + 1);
            let isValidStep = this.getValidateMultiForm();
            fieldBlocks.forEach((field)=>{
                const input = getInputFromWrapperBlock(field);
                if (!input) return;
                const { error: validateError  } = this.handleValidateInput(input);
                errors += validateError;
                isValidStep = !errors;
            });
            if (!isValidStep) return {
                data,
                isValid: false
            };
            function setInputValue(input, validateCb = (inputName, inputValue)=>{
                return true; // by default
            } // you must returned true or false for set input
            ) {
                const inputName = input.name;
                const inputValue = input.value;
                if (input.type === "radio") {
                    const fieldBlock = input.closest("._field");
                    const radios = fieldBlock.querySelectorAll("input");
                    const checkedRadio = Array.from(radios).find((radio)=>radio.checked);
                    const isSetValueEnabled = validateCb(inputName, checkedRadio.value);
                    if (!isSetValueEnabled) return;
                    data[inputName] = checkedRadio.value;
                    return;
                }
                if (input.type === "file") {
                    const isSetValueEnabled = validateCb(inputName, input.files[0]);
                    if (!isSetValueEnabled) return;
                    data[inputName] = input.files[0];
                    return;
                }
                const isSetValueEnabled = validateCb(inputName, inputValue);
                if (!isSetValueEnabled) return;
                data[inputName] = inputValue;
            }
            const validateInputCb = (inputName, inputValue)=>{
                try {
                    const isCustomSetValueEnabled = this.options.customValidateByStep?.(inputName, inputValue);
                    return isCustomSetValueEnabled ?? true;
                } catch (err) {
                    // or we can THROW error
                    return false;
                }
            };
            fieldBlocks.forEach((fieldBlock)=>{
                if (fieldBlock.classList.contains("_require")) {
                    const input = getInputFromWrapperBlock(fieldBlock);
                    if (!input) return;
                    setInputValue(input, validateInputCb);
                } else {
                    const input = getInputFromWrapperBlock(fieldBlock);
                    const isValidByDefault = true;
                    setInputValue(input, ()=>isValidByDefault);
                }
            });
            return {
                data,
                isValid: true
            };
        };
        if (submitBtn) {
            const { isValid , data  } = await getValuesByStep(this.currentStep);
            if (!isValid) return;
            await this.options.handleSubmit?.(data, this.currentStep);
            return;
        }
        if (nextPrev) {
            const { isValid , data  } = await getValuesByStep(this.currentStep);
            if (!isValid) return;
            await this.options.handleSuccessNextStep?.(data, this.currentStep);
            incrementor = 1;
        }
        if (prevBtn) incrementor = -1;
        this.currentStep += incrementor;
        this.renderSteps();
        this.renderProgress();
    }
    getValidateMultiForm() {
        const currentStepContainer = this.$form.querySelector(`[data-step="${this.currentStep + 1}"]`);
        function checkRequiredFieldsByCurrentStep() {
            const requiredFields = currentStepContainer.querySelectorAll("._require");
            const filledRequiredFields = Array.from(requiredFields).every((field)=>field.hasAttribute("data-success"));
            return filledRequiredFields;
        }
        return checkRequiredFieldsByCurrentStep();
    }
    initMultiForm(initData, initCallback) {
        if (!initData) return;
        this.$steps.forEach((_, formIdx)=>{
            const step = formIdx + 1;
            const fieldBlocks = this.getAllFieldsByStep(step);
            fieldBlocks.forEach((fieldBlock)=>this.initForm(fieldBlock, initData));
        });
    }
    #setupMultiForm() {
        this.$form.addEventListener("click", this.handleSteps.bind(this));
        this.renderSteps();
        this.renderProgress();
    }
}

},{"./FormService":"u4Saz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"u4Saz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FormService", ()=>FormService);
var _constants = require("../constants");
class FormService {
    static NO_VALID_CLASS = "no-valid";
    static FORM_HIDE_CLASS = "hide";
    options = {
        initFormData: null,
        handleSubmit: async (formData, currentStep)=>{},
        setValueOnInit: (input, valueFromInitData)=>{},
        watch: (fieldName, fieldValue)=>{},
        customValidateFields: (input, options = {
            isNotRequiredButMustValidate: false,
            configurationErrorHandling: {
                isEmpty: true,
                error: 0,
                errorMessage: ""
            }
        })=>{}
    };
    constructor(formId, options = {
        handleSubmit: async (formData, currentStep)=>{},
        setValueOnInit: (input, valueFromInitData)=>{},
        watch: (fieldName, fieldValue)=>{},
        customValidateFields: (input, options = {
            isNotRequiredButMustValidate: false,
            configurationErrorHandling: {
                isEmpty: true,
                error: 0,
                errorMessage: ""
            }
        })=>{},
        initFormData: null
    }){
        this.$form = document.querySelector(`#${formId}`);
        if (!this.$form) return; //! We are not working without form which are wrapper for all logic!
        this.options = options;
        this.#setupForm();
        if (this.options.initFormData) this.initForm(this.options.initFormData);
    }
    static getRequireFieldBlock(input) {
        if (input.classList.contains("_require")) return input;
        const requireFieldBlock = input.closest("._require");
        return requireFieldBlock;
    }
    static setSuccessRequire(input) {
        let fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) {
            let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);
            fieldBlock = validatedFieldInAnyCase;
        }
        if (!fieldBlock) return;
        fieldBlock.setAttribute("data-success", "");
    }
    static isInvalidFormat(file, validFormats) {
        const formats = validFormats || [
            "image/jpeg",
            "image/png",
            "image/webp",
            "application/msword",
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "text/plain"
        ];
        return !formats.includes(file.type);
    }
    static isInvalidSize(file, validMb = 20) {
        return file.size > validMb * 1048576 || file.size === 0;
    }
    static removeSuccessRequire(input) {
        const fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) return;
        fieldBlock.removeAttribute("data-success");
    }
    static cancelError(input) {
        let fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) {
            let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);
            fieldBlock = validatedFieldInAnyCase;
        }
        if (!fieldBlock) return;
        const errorMessage = fieldBlock.querySelector(".fields-block__no-valid-message");
        if (fieldBlock.classList.contains(FormService.NO_VALID_CLASS)) fieldBlock.classList.remove(FormService.NO_VALID_CLASS);
        FormService.setSuccessRequire(input);
        if (!errorMessage) return;
        errorMessage.style.display = "none";
    }
    static setError(input, messageError) {
        let fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) {
            let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);
            fieldBlock = validatedFieldInAnyCase;
        }
        if (!fieldBlock) return;
        const errorMessage = fieldBlock.querySelector(".fields-block__no-valid-message");
        if (fieldBlock.classList.contains(FormService.NO_VALID_CLASS)) return;
        fieldBlock.classList.add(FormService.NO_VALID_CLASS);
        FormService.removeSuccessRequire(input);
        if (!errorMessage) return;
        errorMessage.style.display = "block";
        errorMessage.textContent = messageError ?? "";
    }
    static emailTest(input) {
        return !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(input.value);
    }
    hide() {
        this.$form.classList.add(FormService.FORM_HIDE_CLASS);
    }
    show() {
        this.$form.classList.remove(FormService.FORM_HIDE_CLASS);
    }
    static hideFormById(formId) {
        const form = document.querySelector(`#${formId}`);
        if (!form) return;
        form.classList.add(FormService.FORM_HIDE_CLASS);
    }
    static showFormById(formId) {
        const form = document.querySelector(`#${formId}`);
        if (!form) return;
        form.classList.remove(FormService.FORM_HIDE_CLASS);
    }
    static toggleShowHideFormById(formId) {
        const form = document.querySelector(`#${formId}`);
        if (!form) return;
        form.classList.toggle(FormService.FORM_HIDE_CLASS);
    }
    static setConfigurationErrorMessage(configurationErrorHandling, message) {
        Object.entries(configurationErrorHandling).forEach(([key])=>{
            if (key === "errorMessage") configurationErrorHandling[key] = message || "";
        });
        configurationErrorHandling.isEmpty = false;
        configurationErrorHandling.errors = ++configurationErrorHandling.errors;
    }
    validateFields(inputs) {
        const configurationErrorHandling = {
            errors: 0,
            isEmpty: false,
            errorMessage: ""
        };
        inputs.forEach((input)=>{
            FormService.cancelError(input);
            const isNotRequiredButMustValidate = input.classList.contains("_validate") || !input.closest("._require");
            if (!input.value.length && !isNotRequiredButMustValidate) {
                configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                configurationErrorHandling.isEmpty = true;
                configurationErrorHandling.errorMessage = "Required field";
                if (!!this.options?.customValidateFields) this.options?.customValidateFields(input, {
                    isNotRequiredButMustValidate,
                    configurationErrorHandling
                });
                return {
                    error: configurationErrorHandling.errors,
                    errorMessage: configurationErrorHandling.errorMessage,
                    isEmpty: configurationErrorHandling.isEmpty
                };
            }
            if (!input.value && isNotRequiredButMustValidate) {
                configurationErrorHandling.errorMessage = "";
                configurationErrorHandling.errors = 0;
                if (!!this.options?.customValidateFields) this.options?.customValidateFields(input, {
                    isNotRequiredButMustValidate,
                    configurationErrorHandling
                });
                return {
                    error: configurationErrorHandling.errors,
                    errorMessage: configurationErrorHandling.errorMessage,
                    isEmpty: configurationErrorHandling.isEmpty
                };
            }
            if (input.type === "radio") {
                const wrapperContainer = FormService.getRequireFieldBlock(input);
                if (!wrapperContainer) return;
                const isSomeoneChecked = Array.from(wrapperContainer.querySelectorAll("input")).some((input)=>input.checked);
                if (!isSomeoneChecked && !isNotRequiredButMustValidate) {
                    configurationErrorHandling.isEmpty = true;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = "";
                }
            }
            if (input.type === "checkbox") {
                const wrapperContainer = FormService.getRequireFieldBlock(input);
                if (!wrapperContainer) return;
                const isSomeoneChecked = Array.from(wrapperContainer.querySelectorAll("input")).some((input)=>input.checked);
                if (!isSomeoneChecked && !isNotRequiredButMustValidate) {
                    configurationErrorHandling.isEmpty = true;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = "";
                }
            }
            if (input.type === "email") {
                if (FormService.emailTest(input)) {
                    configurationErrorHandling.isEmpty = false;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = (0, _constants.errorMessageInvalidEmail);
                }
                if (!input.value.length && !isNotRequiredButMustValidate) {
                    configurationErrorHandling.isEmpty = true;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
                }
            }
            if (input.type === "file") {
                const file = input.files[0];
                if (!file) configurationErrorHandling.isEmpty = true;
                if (!file && !isNotRequiredButMustValidate) {
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = "";
                } else if (FormService.isInvalidFormat(file)) {
                    configurationErrorHandling.isEmpty = false;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = (0, _constants.errorMessageInvalidFileFormat);
                } else if (FormService.isInvalidSize(file)) {
                    configurationErrorHandling.isEmpty = false;
                    configurationErrorHandling.errors = ++configurationErrorHandling.errors;
                    configurationErrorHandling.errorMessage = (0, _constants.errorMessageInvalidFileSize);
                }
            }
            if (!!this.options?.customValidateFields) this.options?.customValidateFields(input, {
                isNotRequiredButMustValidate,
                configurationErrorHandling
            });
        });
        return {
            error: configurationErrorHandling.errors,
            errorMessage: configurationErrorHandling.errorMessage,
            isEmpty: configurationErrorHandling.isEmpty
        };
    }
    static getValidateFieldBlock(input) {
        if (input.classList.contains("_field")) return input;
        const validateFieldBlock = input.closest("._field");
        return validateFieldBlock;
    }
    static setEmpty(input) {
        let fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) {
            let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);
            fieldBlock = validatedFieldInAnyCase;
        }
        if (!fieldBlock) return;
        fieldBlock.setAttribute("data-empty", "");
    }
    static notEmpty(input) {
        let fieldBlock = FormService.getRequireFieldBlock(input);
        if (!fieldBlock) {
            let validatedFieldInAnyCase = FormService.getValidateFieldBlock(input);
            fieldBlock = validatedFieldInAnyCase;
        }
        if (!fieldBlock) return;
        fieldBlock.removeAttribute("data-empty");
    }
    handleValidateInput(input) {
        const { error , errorMessage , isEmpty  } = this.validateFields([
            input
        ]);
        !!error ? FormService.setError(input, errorMessage) : FormService.cancelError(input);
        isEmpty ? FormService.setEmpty(input) : FormService.notEmpty(input);
        return {
            error,
            errorMessage
        };
    }
    initForm(fieldBlock, initData) {
        if (!initData) return;
        let input = fieldBlock.querySelector("input");
        if (fieldBlock.classList.contains("fields-block__textarea")) input = fieldBlock.querySelector("textarea");
        if (!input) return;
        const inputName = input.name;
        const valueFromInitDataByInputName = initData?.[inputName] || "";
        if (!valueFromInitDataByInputName) return;
        if (input.classList.contains("vscomp-hidden-input")) {
            const vcCompCustomSelect = input.closest(".vscom-custom-select");
            vcCompCustomSelect.setValue(valueFromInitDataByInputName);
            FormService.setSuccessRequire(input);
            this.options?.setValueOnInit?.(input);
            return;
        }
        if (input.type === "tel") {
            this.options?.setValueOnInit?.(input, valueFromInitDataByInputName);
            FormService.setSuccessRequire(input);
            return;
        }
        if (input.type === "file") {
            this.options?.setValueOnInit?.(input);
            //! INIT FILE
            return;
        }
        const inputByName = this.$form.querySelectorAll(`[name="${inputName}"`);
        if (inputByName.length === 1) {
            inputByName[0].value = valueFromInitDataByInputName;
            if (inputByName[0].type === "checkbox") inputByName[0].checked = true;
            this.options?.setValueOnInit?.(input);
            FormService.setSuccessRequire(input);
            return;
        }
        if (inputByName.length > 1) {
            const inputs = inputByName;
            const isRadio = inputs[0].type === "radio";
            if (isRadio) inputs.forEach((inp)=>{
                if (inp.value === valueFromInitDataByInputName) {
                    inp.checked = true;
                    FormService.setSuccessRequire(inp);
                }
            });
            return;
        }
    }
    #setupForm() {
        this.$form.querySelectorAll("input").forEach((input)=>{
            if (input.classList.contains("vscomp-search-input")) return;
            switch(input.type){
                case "checkbox":
                    input.addEventListener("change", ()=>{
                        this.options?.watch?.(input.name, input.value);
                        this.handleValidateInput(input);
                    });
                    break;
                case "radio":
                    input.addEventListener("change", ()=>{
                        this.options?.watch?.(input.name, input.value);
                        this.handleValidateInput(input);
                    });
                    break;
                case "hidden":
                    const vscompInputHidden = input.classList.contains("vscomp-hidden-input");
                    if (!vscompInputHidden) break;
                    const vscomCustomSelect = input.closest(".vscom-custom-select");
                    vscomCustomSelect.addEventListener("change", ()=>{
                        if (vscomCustomSelect.classList.contains("_after-prefetch")) {
                            vscomCustomSelect.classList.remove("_after-prefetch");
                            return;
                        }
                        const hiddenInput = vscomCustomSelect.querySelector('input[type="hidden"]');
                        this.handleValidateInput(hiddenInput);
                    });
                    break;
                default:
                    this.options?.watch && input.addEventListener("input", ()=>this.options?.watch?.(input.name, input.value));
                    input.addEventListener("blur", ()=>{
                        this.options?.watch?.(input.name, input.value);
                        this.handleValidateInput(input);
                    });
            }
        });
        this.$form.querySelectorAll("textarea").forEach((textarea)=>textarea.addEventListener("blur", ()=>this.handleValidateInput(textarea)));
    }
}

},{"../constants":"5cvxR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cvxR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "englishLevelSelectOptions", ()=>englishLevelSelectOptions);
parcelHelpers.export(exports, "yearSelectOptions", ()=>yearSelectOptions);
parcelHelpers.export(exports, "errorMessageDateOfBirth", ()=>errorMessageDateOfBirth);
parcelHelpers.export(exports, "errorMessagePhone", ()=>errorMessagePhone);
parcelHelpers.export(exports, "errorMessageRequiredField", ()=>errorMessageRequiredField);
parcelHelpers.export(exports, "errorMessageInvalidEmail", ()=>errorMessageInvalidEmail);
parcelHelpers.export(exports, "errorMessageInvalidFileFormat", ()=>errorMessageInvalidFileFormat);
parcelHelpers.export(exports, "errorMessageInvalidFileSize", ()=>errorMessageInvalidFileSize);
parcelHelpers.export(exports, "dateOfBirthOptions", ()=>dateOfBirthOptions);
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
const englishLevelSelectOptions = [
    {
        label: "A1",
        value: "4"
    },
    {
        label: "A2",
        value: "5"
    },
    {
        label: "B1",
        value: "6"
    },
    {
        label: "B2",
        value: "7"
    },
    {
        label: "C1",
        value: "8"
    },
    {
        label: "C2",
        value: "9"
    }
];
const yearSelectOptions = [
    {
        label: "1",
        value: "1"
    },
    {
        label: "2",
        value: "2"
    },
    {
        label: "3",
        value: "3"
    },
    {
        label: "4",
        value: "4"
    }
];
const errorMessageDateOfBirth = "Invalid date of birth";
const errorMessagePhone = "Invalid phone";
const errorMessageRequiredField = "Required field";
const errorMessageInvalidEmail = "Invalid email";
const errorMessageInvalidFileFormat = "Invalid format";
const errorMessageInvalidFileSize = "File is too large";
const dateOfBirthOptions = {
    mask: Date,
    pattern: "YYYY.MM.DD",
    lazy: false,
    blocks: {
        YYYY: {
            mask: (0, _imaskDefault.default).MaskedRange,
            from: 1932,
            to: 2090,
            placeholderChar: "Y"
        },
        MM: {
            mask: (0, _imaskDefault.default).MaskedRange,
            from: 1,
            to: 12,
            placeholderChar: "M"
        },
        DD: {
            mask: (0, _imaskDefault.default).MaskedRange,
            from: 1,
            to: 31,
            placeholderChar: "D"
        }
    },
    format: function(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        if (day < 10) day = "0" + day;
        if (month < 10) month = "0" + month;
        return year + "." + month + "." + day;
    },
    parse: function(str) {
        const yearMonthDay = str.split(".");
        const year = parseInt(yearMonthDay[0], 10);
        const month = parseInt(yearMonthDay[1], 10) - 1;
        const day = parseInt(yearMonthDay[2], 10);
        return new Date(year, month, day);
    }
};

},{"imask":"aLznl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLznl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InputMask", ()=>(0, _inputJsDefault.default));
parcelHelpers.export(exports, "HTMLContenteditableMaskElement", ()=>(0, _htmlContenteditableMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLInputMaskElement", ()=>(0, _htmlInputMaskElementJsDefault.default));
parcelHelpers.export(exports, "HTMLMaskElement", ()=>(0, _htmlMaskElementJsDefault.default));
parcelHelpers.export(exports, "MaskElement", ()=>(0, _maskElementJsDefault.default));
parcelHelpers.export(exports, "ChangeDetails", ()=>(0, _changeDetailsJsDefault.default));
parcelHelpers.export(exports, "DIRECTION", ()=>(0, _utilsJs.DIRECTION));
parcelHelpers.export(exports, "forceDirection", ()=>(0, _utilsJs.forceDirection));
parcelHelpers.export(exports, "Masked", ()=>(0, _baseJsDefault.default));
parcelHelpers.export(exports, "MaskedDate", ()=>(0, _dateJsDefault.default));
parcelHelpers.export(exports, "MaskedDynamic", ()=>(0, _dynamicJsDefault.default));
parcelHelpers.export(exports, "MaskedEnum", ()=>(0, _enumJsDefault.default));
parcelHelpers.export(exports, "createMask", ()=>(0, _factoryJsDefault.default));
parcelHelpers.export(exports, "normalizeOpts", ()=>(0, _factoryJs.normalizeOpts));
parcelHelpers.export(exports, "MaskedFunction", ()=>(0, _functionJsDefault.default));
parcelHelpers.export(exports, "MaskedNumber", ()=>(0, _numberJsDefault.default));
parcelHelpers.export(exports, "MaskedPattern", ()=>(0, _patternJsDefault.default));
parcelHelpers.export(exports, "ChunksTailDetails", ()=>(0, _chunkTailDetailsJsDefault.default));
parcelHelpers.export(exports, "PatternFixedDefinition", ()=>(0, _fixedDefinitionJsDefault.default));
parcelHelpers.export(exports, "PatternInputDefinition", ()=>(0, _inputDefinitionJsDefault.default));
parcelHelpers.export(exports, "PIPE_TYPE", ()=>(0, _pipeJs.PIPE_TYPE));
parcelHelpers.export(exports, "createPipe", ()=>(0, _pipeJs.createPipe));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeJs.pipe));
parcelHelpers.export(exports, "MaskedRange", ()=>(0, _rangeJsDefault.default));
parcelHelpers.export(exports, "MaskedRegExp", ()=>(0, _regexpJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _holderJsDefault.default));
var _inputJs = require("./controls/input.js");
var _inputJsDefault = parcelHelpers.interopDefault(_inputJs);
var _holderJs = require("./core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _htmlContenteditableMaskElementJs = require("./controls/html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _htmlInputMaskElementJs = require("./controls/html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlMaskElementJs = require("./controls/html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _maskElementJs = require("./controls/mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _changeDetailsJs = require("./core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("./core/utils.js");
var _baseJs = require("./masked/base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _dateJs = require("./masked/date.js");
var _dateJsDefault = parcelHelpers.interopDefault(_dateJs);
var _dynamicJs = require("./masked/dynamic.js");
var _dynamicJsDefault = parcelHelpers.interopDefault(_dynamicJs);
var _enumJs = require("./masked/enum.js");
var _enumJsDefault = parcelHelpers.interopDefault(_enumJs);
var _factoryJs = require("./masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _functionJs = require("./masked/function.js");
var _functionJsDefault = parcelHelpers.interopDefault(_functionJs);
var _numberJs = require("./masked/number.js");
var _numberJsDefault = parcelHelpers.interopDefault(_numberJs);
var _patternJs = require("./masked/pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _chunkTailDetailsJs = require("./masked/pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _fixedDefinitionJs = require("./masked/pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./masked/pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _pipeJs = require("./masked/pipe.js");
var _rangeJs = require("./masked/range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _regexpJs = require("./masked/regexp.js");
var _regexpJsDefault = parcelHelpers.interopDefault(_regexpJs);
var _actionDetailsJs = require("./core/action-details.js");
var _continuousTailDetailsJs = require("./core/continuous-tail-details.js");
var _cursorJs = require("./masked/pattern/cursor.js");
try {
    globalThis.IMask = (0, _holderJsDefault.default);
} catch  {}

},{"./controls/input.js":"bZfiB","./core/holder.js":"fNs7n","./controls/html-contenteditable-mask-element.js":"l1S15","./controls/html-input-mask-element.js":"2feR7","./controls/html-mask-element.js":"exheL","./controls/mask-element.js":"6dhyp","./core/change-details.js":"cDdFe","./core/utils.js":"hh2Rx","./masked/base.js":"i9dza","./masked/date.js":"1V3CB","./masked/dynamic.js":"kPiRi","./masked/enum.js":"dmeoh","./masked/factory.js":"4c29b","./masked/function.js":"64ffz","./masked/number.js":"gHi3R","./masked/pattern.js":"edg1G","./masked/pattern/chunk-tail-details.js":"a8Q24","./masked/pattern/fixed-definition.js":"fnLC7","./masked/pattern/input-definition.js":"lGvsS","./masked/pipe.js":"knGz0","./masked/range.js":"iHvQL","./masked/regexp.js":"7B25G","./core/action-details.js":"cJg34","./core/continuous-tail-details.js":"5MbDY","./masked/pattern/cursor.js":"1K9Ff","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZfiB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>InputMask);
var _utilsJs = require("../core/utils.js");
var _actionDetailsJs = require("../core/action-details.js");
var _actionDetailsJsDefault = parcelHelpers.interopDefault(_actionDetailsJs);
var _factoryJs = require("../masked/factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _htmlInputMaskElementJs = require("./html-input-mask-element.js");
var _htmlInputMaskElementJsDefault = parcelHelpers.interopDefault(_htmlInputMaskElementJs);
var _htmlContenteditableMaskElementJs = require("./html-contenteditable-mask-element.js");
var _htmlContenteditableMaskElementJsDefault = parcelHelpers.interopDefault(_htmlContenteditableMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _htmlMaskElementJs = require("./html-mask-element.js");
/** Listens to element events and controls changes between element and {@link Masked} */ class InputMask {
    /**
    View element
  */ /** Internal {@link Masked} model */ constructor(el, opts){
        this.el = el instanceof (0, _maskElementJsDefault.default) ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new (0, _htmlContenteditableMaskElementJsDefault.default)(el) : new (0, _htmlInputMaskElementJsDefault.default)(el);
        this.masked = (0, _factoryJsDefault.default)(opts);
        this._listeners = {};
        this._value = "";
        this._unmaskedValue = "";
        this._saveSelection = this._saveSelection.bind(this);
        this._onInput = this._onInput.bind(this);
        this._onChange = this._onChange.bind(this);
        this._onDrop = this._onDrop.bind(this);
        this._onFocus = this._onFocus.bind(this);
        this._onClick = this._onClick.bind(this);
        this.alignCursor = this.alignCursor.bind(this);
        this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
        this._bindEvents();
        // refresh
        this.updateValue();
        this._onChange();
    }
    maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) == null ? void 0 : _this$masked.maskEquals(mask));
    }
    /** Masked */ get mask() {
        return this.masked.mask;
    }
    set mask(mask) {
        if (this.maskEquals(mask)) return;
        if (!(mask instanceof (0, _holderJsDefault.default).Masked) && this.masked.constructor === (0, _factoryJs.maskedClass)(mask)) {
            // TODO "any" no idea
            this.masked.updateOptions({
                mask
            });
            return;
        }
        const masked = mask instanceof (0, _holderJsDefault.default).Masked ? mask : (0, _factoryJsDefault.default)({
            mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
    }
    /** Raw value */ get value() {
        return this._value;
    }
    set value(str) {
        if (this.value === str) return;
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Unmasked value */ get unmaskedValue() {
        return this._unmaskedValue;
    }
    set unmaskedValue(str) {
        if (this.unmaskedValue === str) return;
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
    }
    /** Typed unmasked value */ get typedValue() {
        return this.masked.typedValue;
    }
    set typedValue(val) {
        if (this.masked.typedValueEquals(val)) return;
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
    }
    /** Display value */ get displayValue() {
        return this.masked.displayValue;
    }
    /** Starts listening to element events */ _bindEvents() {
        this.el.bindEvents({
            selectionChange: this._saveSelection,
            input: this._onInput,
            drop: this._onDrop,
            click: this._onClick,
            focus: this._onFocus,
            commit: this._onChange
        });
    }
    /** Stops listening to element events */ _unbindEvents() {
        if (this.el) this.el.unbindEvents();
    }
    /** Fires custom event */ _fireEvent(ev, e) {
        const listeners = this._listeners[ev];
        if (!listeners) return;
        listeners.forEach((l)=>l(e));
    }
    /** Current selection start */ get selectionStart() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
    }
    /** Current cursor position */ get cursorPos() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
    }
    set cursorPos(pos) {
        if (!this.el || !this.el.isActive) return;
        this.el.select(pos, pos);
        this._saveSelection();
    }
    /** Stores current selection */ _saveSelection() {
        if (this.displayValue !== this.el.value) console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."); // eslint-disable-line no-console
        this._selection = {
            start: this.selectionStart,
            end: this.cursorPos
        };
    }
    /** Syncronizes model value from view */ updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
    }
    /** Syncronizes view from model value, fires change events */ updateControl() {
        const newUnmaskedValue = this.masked.unmaskedValue;
        const newValue = this.masked.value;
        const newDisplayValue = this.displayValue;
        const isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newDisplayValue) this.el.value = newDisplayValue;
        if (isChanged) this._fireChangeEvents();
    }
    /** Updates options with deep equal check, recreates {@link Masked} model if mask type changes */ updateOptions(opts) {
        const { mask , ...restOpts } = opts;
        const updateMask = !this.maskEquals(mask);
        const updateOpts = !(0, _utilsJs.objectIncludes)(this.masked, restOpts);
        if (updateMask) this.mask = mask;
        if (updateOpts) this.masked.updateOptions(restOpts); // TODO
        if (updateMask || updateOpts) this.updateControl();
    }
    /** Updates cursor */ updateCursor(cursorPos) {
        if (cursorPos == null) return;
        this.cursorPos = cursorPos;
        // also queue change cursor for mobile browsers
        this._delayUpdateCursor(cursorPos);
    }
    /** Delays cursor update to support mobile browsers */ _delayUpdateCursor(cursorPos) {
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(()=>{
            if (!this.el) return; // if was destroyed
            this.cursorPos = this._changingCursorPos;
            this._abortUpdateCursor();
        }, 10);
    }
    /** Fires custom events */ _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent);
        if (this.masked.isComplete) this._fireEvent("complete", this._inputEvent);
    }
    /** Aborts delayed cursor update */ _abortUpdateCursor() {
        if (this._cursorChanging) {
            clearTimeout(this._cursorChanging);
            delete this._cursorChanging;
        }
    }
    /** Aligns cursor to nearest available position */ alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, (0, _utilsJs.DIRECTION).LEFT));
    }
    /** Aligns cursor only if selection is empty */ alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos) return; // skip if range is selected
        this.alignCursor();
    }
    /** Adds listener on custom event */ on(ev, handler) {
        if (!this._listeners[ev]) this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
    }
    /** Removes custom event listener */ off(ev, handler) {
        if (!this._listeners[ev]) return this;
        if (!handler) {
            delete this._listeners[ev];
            return this;
        }
        const hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0) this._listeners[ev].splice(hIndex, 1);
        return this;
    }
    /** Handles view input event */ _onInput(e) {
        this._inputEvent = e;
        this._abortUpdateCursor();
        // fix strange IE behavior
        if (!this._selection) return this.updateValue();
        const details = new (0, _actionDetailsJsDefault.default)({
            // new state
            value: this.el.value,
            cursorPos: this.cursorPos,
            // old state
            oldValue: this.displayValue,
            oldSelection: this._selection
        });
        const oldRawValue = this.masked.rawInputValue;
        const offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection, {
            input: true,
            raw: true
        }).offset;
        // force align in remove direction only if no input chars were removed
        // otherwise we still need to align with NONE (to get out from fixed symbols for instance)
        const removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : (0, _utilsJs.DIRECTION).NONE;
        let cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) cursorPos = this.masked.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
    }
    /** Handles view change event and commits model value */ _onChange() {
        if (this.displayValue !== this.el.value) this.updateValue();
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
    }
    /** Handles view drop event, prevents by default */ _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
    }
    /** Restore last selection on focus */ _onFocus(ev) {
        this.alignCursorFriendly();
    }
    /** Restore last selection on focus */ _onClick(ev) {
        this.alignCursorFriendly();
    }
    /** Unbind view events and removes element reference */ destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
    }
}
(0, _holderJsDefault.default).InputMask = InputMask;

},{"../core/utils.js":"hh2Rx","../core/action-details.js":"cJg34","../masked/factory.js":"4c29b","./mask-element.js":"6dhyp","./html-input-mask-element.js":"2feR7","./html-contenteditable-mask-element.js":"l1S15","../core/holder.js":"fNs7n","./html-mask-element.js":"exheL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hh2Rx":[function(require,module,exports) {
/** Checks if value is string */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** Selection range */ parcelHelpers.export(exports, "DIRECTION", ()=>DIRECTION);
parcelHelpers.export(exports, "escapeRegExp", ()=>escapeRegExp);
parcelHelpers.export(exports, "forceDirection", ()=>forceDirection);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "objectIncludes", ()=>objectIncludes);
parcelHelpers.export(exports, "pick", ()=>pick);
function isString(str) {
    return typeof str === "string" || str instanceof String;
}
/** Checks if value is object */ function isObject(obj) {
    var _obj$constructor;
    return typeof obj === "object" && obj != null && (obj == null ? void 0 : (_obj$constructor = obj.constructor) == null ? void 0 : _obj$constructor.name) === "Object";
}
function pick(obj, keys) {
    if (Array.isArray(keys)) return pick(obj, (_, k)=>keys.includes(k));
    return Object.entries(obj).reduce((acc, _ref)=>{
        let [k, v] = _ref;
        if (keys(v, k)) acc[k] = v;
        return acc;
    }, {});
}
/** Direction */ const DIRECTION = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
};
/** Direction */ function forceDirection(direction) {
    switch(direction){
        case DIRECTION.LEFT:
            return DIRECTION.FORCE_LEFT;
        case DIRECTION.RIGHT:
            return DIRECTION.FORCE_RIGHT;
        default:
            return direction;
    }
}
/** Escapes regular expression control chars */ function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}
// cloned from https://github.com/epoberezkin/fast-deep-equal with small changes
function objectIncludes(b, a) {
    if (a === b) return true;
    const arrA = Array.isArray(a), arrB = Array.isArray(b);
    let i;
    if (arrA && arrB) {
        if (a.length != b.length) return false;
        for(i = 0; i < a.length; i++)if (!objectIncludes(a[i], b[i])) return false;
        return true;
    }
    if (arrA != arrB) return false;
    if (a && b && typeof a === "object" && typeof b === "object") {
        const dateA = a instanceof Date, dateB = b instanceof Date;
        if (dateA && dateB) return a.getTime() == b.getTime();
        if (dateA != dateB) return false;
        const regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
        if (regexpA && regexpB) return a.toString() == b.toString();
        if (regexpA != regexpB) return false;
        const keys = Object.keys(a);
        // if (keys.length !== Object.keys(b).length) return false;
        for(i = 0; i < keys.length; i++)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = 0; i < keys.length; i++)if (!objectIncludes(b[keys[i]], a[keys[i]])) return false;
        return true;
    } else if (a && b && typeof a === "function" && typeof b === "function") return a.toString() === b.toString();
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cJg34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ActionDetails);
var _utilsJs = require("./utils.js");
/** Provides details of changing input */ class ActionDetails {
    /** Current input value */ /** Current cursor position */ /** Old input value */ /** Old selection */ constructor(opts){
        Object.assign(this, opts);
        // double check if left part was changed (autofilling, other non-standard input triggers)
        while(this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos))--this.oldSelection.start;
    }
    /** Start changing position */ get startChangePos() {
        return Math.min(this.cursorPos, this.oldSelection.start);
    }
    /** Inserted symbols count */ get insertedCount() {
        return this.cursorPos - this.startChangePos;
    }
    /** Inserted symbols */ get inserted() {
        return this.value.substr(this.startChangePos, this.insertedCount);
    }
    /** Removed symbols count */ get removedCount() {
        // Math.max for opposite operation
        return Math.max(this.oldSelection.end - this.startChangePos || // for Delete
        this.oldValue.length - this.value.length, 0);
    }
    /** Removed symbols */ get removed() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
    }
    /** Unchanged head symbols */ get head() {
        return this.value.substring(0, this.startChangePos);
    }
    /** Unchanged tail symbols */ get tail() {
        return this.value.substring(this.startChangePos + this.insertedCount);
    }
    /** Remove direction */ get removeDirection() {
        if (!this.removedCount || this.insertedCount) return (0, _utilsJs.DIRECTION).NONE;
        // align right if delete at right
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && // if not range removed (event with backspace)
        this.oldSelection.end === this.oldSelection.start ? (0, _utilsJs.DIRECTION).RIGHT : (0, _utilsJs.DIRECTION).LEFT;
    }
}

},{"./utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c29b":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>createMask);
parcelHelpers.export(exports, "maskedClass", ()=>maskedClass);
parcelHelpers.export(exports, "normalizeOpts", ()=>normalizeOpts);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// export function maskedClass(mask: string): typeof MaskedPattern;
// export function maskedClass(mask: DateConstructor): typeof MaskedDate;
// export function maskedClass(mask: NumberConstructor): typeof MaskedNumber;
// export function maskedClass(mask: Array<any> | ArrayConstructor): typeof MaskedDynamic;
// export function maskedClass(mask: MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass(mask: Masked): typeof Masked;
// export function maskedClass(mask: typeof Masked): typeof Masked;
// export function maskedClass(mask: typeof MaskedDate): typeof MaskedDate;
// export function maskedClass(mask: typeof MaskedNumber): typeof MaskedNumber;
// export function maskedClass(mask: typeof MaskedEnum): typeof MaskedEnum;
// export function maskedClass(mask: typeof MaskedRange): typeof MaskedRange;
// export function maskedClass(mask: typeof MaskedRegExp): typeof MaskedRegExp;
// export function maskedClass(mask: typeof MaskedFunction): typeof MaskedFunction;
// export function maskedClass(mask: typeof MaskedPattern): typeof MaskedPattern;
// export function maskedClass(mask: typeof MaskedDynamic): typeof MaskedDynamic;
// export function maskedClass<Mask extends typeof Masked> (mask: Mask): Mask;
// export function maskedClass(mask: RegExp): typeof MaskedRegExp;
// export function maskedClass(mask: (value: string, ...args: any[]) => boolean): typeof MaskedFunction;
/** Get Masked class by mask type */ function maskedClass(mask) /* TODO */ {
    if (mask == null) throw new Error("mask property should be defined");
    if (mask instanceof RegExp) return (0, _holderJsDefault.default).MaskedRegExp;
    if ((0, _utilsJs.isString)(mask)) return (0, _holderJsDefault.default).MaskedPattern;
    if (mask === Date) return (0, _holderJsDefault.default).MaskedDate;
    if (mask === Number) return (0, _holderJsDefault.default).MaskedNumber;
    if (Array.isArray(mask) || mask === Array) return (0, _holderJsDefault.default).MaskedDynamic;
    if ((0, _holderJsDefault.default).Masked && mask.prototype instanceof (0, _holderJsDefault.default).Masked) return mask;
    if ((0, _holderJsDefault.default).Masked && mask instanceof (0, _holderJsDefault.default).Masked) return mask.constructor;
    if (mask instanceof Function) return (0, _holderJsDefault.default).MaskedFunction;
    console.warn("Mask not found for mask", mask); // eslint-disable-line no-console
    return (0, _holderJsDefault.default).Masked;
}
function normalizeOpts(opts) {
    if (!opts) throw new Error("Options in not defined");
    if ((0, _holderJsDefault.default).Masked) {
        if (opts.prototype instanceof (0, _holderJsDefault.default).Masked) return {
            mask: opts
        };
        /*
      handle cases like:
      1) opts = Masked
      2) opts = { mask: Masked, ...instanceOpts }
    */ const { mask , ...instanceOpts } = opts instanceof (0, _holderJsDefault.default).Masked ? {
            mask: opts
        } : (0, _utilsJs.isObject)(opts) && opts.mask instanceof (0, _holderJsDefault.default).Masked ? opts : {};
        if (mask) {
            const _mask = mask.mask;
            return {
                ...(0, _utilsJs.pick)(mask, (_, k)=>!k.startsWith("_")),
                mask: mask.constructor,
                _mask,
                ...instanceOpts
            };
        }
    }
    if (!(0, _utilsJs.isObject)(opts)) return {
        mask: opts
    };
    return {
        ...opts
    };
}
// TODO can't use overloads here because of https://github.com/microsoft/TypeScript/issues/50754
// From masked
// export default function createMask<Opts extends Masked, ReturnMasked=Opts> (opts: Opts): ReturnMasked;
// // From masked class
// export default function createMask<Opts extends MaskedOptions<typeof Masked>, ReturnMasked extends Masked=InstanceType<Opts['mask']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDate>, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedNumber>, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedEnum>, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRange>, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedRegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedFunction>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedPattern>, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<typeof MaskedDynamic>, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// // From mask opts
// export default function createMask<Opts extends MaskedOptions<Masked>, ReturnMasked=Opts extends MaskedOptions<infer M> ? M : never> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedNumberOptions, ReturnMasked extends MaskedNumber=MaskedNumber<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDateFactoryOptions, ReturnMasked extends MaskedDate=MaskedDate<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedEnumOptions, ReturnMasked extends MaskedEnum=MaskedEnum<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedRangeOptions, ReturnMasked extends MaskedRange=MaskedRange<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedPatternOptions, ReturnMasked extends MaskedPattern=MaskedPattern<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedDynamicOptions, ReturnMasked extends MaskedDynamic=MaskedDynamic<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<RegExp>, ReturnMasked extends MaskedRegExp=MaskedRegExp<Opts['parent']>> (opts: Opts): ReturnMasked;
// export default function createMask<Opts extends MaskedOptions<Function>, ReturnMasked extends MaskedFunction=MaskedFunction<Opts['parent']>> (opts: Opts): ReturnMasked;
/** Creates new {@link Masked} depending on mask type */ function createMask(opts) {
    if ((0, _holderJsDefault.default).Masked && opts instanceof (0, _holderJsDefault.default).Masked) return opts;
    const nOpts = normalizeOpts(opts);
    const MaskedClass = maskedClass(nOpts.mask);
    if (!MaskedClass) throw new Error("Masked class is not found for provided mask, appropriate module needs to be imported manually before creating mask.");
    if (nOpts.mask === MaskedClass) delete nOpts.mask;
    if (nOpts._mask) {
        nOpts.mask = nOpts._mask;
        delete nOpts._mask;
    }
    return new MaskedClass(nOpts);
}
(0, _holderJsDefault.default).createMask = createMask;

},{"../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNs7n":[function(require,module,exports) {
/** Applies mask on element */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>IMask);
function IMask(el, opts) {
    // currently available only for input-like elements
    return new IMask.InputMask(el, opts);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dhyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskElement);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/**  Generic element API to use with mask */ class MaskElement {
    /** */ /** */ /** */ /** Safely returns selection start */ get selectionStart() {
        let start;
        try {
            start = this._unsafeSelectionStart;
        } catch  {}
        return start != null ? start : this.value.length;
    }
    /** Safely returns selection end */ get selectionEnd() {
        let end;
        try {
            end = this._unsafeSelectionEnd;
        } catch  {}
        return end != null ? end : this.value.length;
    }
    /** Safely sets element selection */ select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd) return;
        try {
            this._unsafeSelect(start, end);
        } catch  {}
    }
    /** */ get isActive() {
        return false;
    }
}
(0, _holderJsDefault.default).MaskElement = MaskElement;

},{"../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2feR7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLInputMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
/** Bridge between InputElement and {@link Masked} */ class HTMLInputMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** InputElement to use mask on */ constructor(input){
        super(input);
        this.input = input;
        this._handlers = {};
    }
    /** Returns InputElement selection start */ get _unsafeSelectionStart() {
        return this.input.selectionStart != null ? this.input.selectionStart : this.value.length;
    }
    /** Returns InputElement selection end */ get _unsafeSelectionEnd() {
        return this.input.selectionEnd;
    }
    /** Sets InputElement selection */ _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
    }
    get value() {
        return this.input.value;
    }
    set value(value) {
        this.input.value = value;
    }
}
(0, _holderJsDefault.default).HTMLMaskElement = (0, _htmlMaskElementJsDefault.default);

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"exheL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLMaskElement);
var _maskElementJs = require("./mask-element.js");
var _maskElementJsDefault = parcelHelpers.interopDefault(_maskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Bridge between HTMLElement and {@link Masked} */ class HTMLMaskElement extends (0, _maskElementJsDefault.default) {
    /** HTMLElement to use mask on */ constructor(input){
        super();
        this.input = input;
        this._handlers = {};
    }
    get rootElement() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) == null ? void 0 : _this$input$getRootNo2.call(_this$input)) != null ? _this$input$getRootNo : document;
    }
    /**
    Is element in focus
  */ get isActive() {
        return this.input === this.rootElement.activeElement;
    }
    /**
    Binds HTMLElement events to mask internal events
  */ bindEvents(handlers) {
        Object.keys(handlers).forEach((event)=>this._toggleEventHandler(HTMLMaskElement.EVENTS_MAP[event], handlers[event]));
    }
    /**
    Unbinds HTMLElement events to mask internal events
  */ unbindEvents() {
        Object.keys(this._handlers).forEach((event)=>this._toggleEventHandler(event));
    }
    _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
            this.input.removeEventListener(event, this._handlers[event]);
            delete this._handlers[event];
        }
        if (handler) {
            this.input.addEventListener(event, handler);
            this._handlers[event] = handler;
        }
    }
}
/** Mapping between HTMLElement events and mask internal events */ HTMLMaskElement.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
};
(0, _holderJsDefault.default).HTMLMaskElement = HTMLMaskElement;

},{"./mask-element.js":"6dhyp","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1S15":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>HTMLContenteditableMaskElement);
var _htmlMaskElementJs = require("./html-mask-element.js");
var _htmlMaskElementJsDefault = parcelHelpers.interopDefault(_htmlMaskElementJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _maskElementJs = require("./mask-element.js");
class HTMLContenteditableMaskElement extends (0, _htmlMaskElementJsDefault.default) {
    /** Returns HTMLElement selection start */ get _unsafeSelectionStart() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Returns HTMLElement selection end */ get _unsafeSelectionEnd() {
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        const anchorOffset = selection && selection.anchorOffset;
        const focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) return anchorOffset;
        return focusOffset;
    }
    /** Sets HTMLElement selection */ _unsafeSelect(start, end) {
        if (!this.rootElement.createRange) return;
        const range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        const root = this.rootElement;
        const selection = root.getSelection && root.getSelection();
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }
    /** HTMLElement value */ get value() {
        return this.input.textContent || "";
    }
    set value(value) {
        this.input.textContent = value;
    }
}
(0, _holderJsDefault.default).HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

},{"./html-mask-element.js":"exheL","../core/holder.js":"fNs7n","./mask-element.js":"6dhyp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDdFe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChangeDetails);
var _holderJs = require("./holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Provides details of changing model value */ class ChangeDetails {
    /** Inserted symbols */ /** Can skip chars */ /** Additional offset if any changes occurred before tail */ /** Raw inserted is used by dynamic mask */ static normalize(prep) {
        return Array.isArray(prep) ? prep : [
            prep,
            new ChangeDetails()
        ];
    }
    constructor(details){
        Object.assign(this, {
            inserted: "",
            rawInserted: "",
            skip: false,
            tailShift: 0
        }, details);
    }
    /** Aggregate changes */ aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
    }
    /** Total offset considering all changes */ get offset() {
        return this.tailShift + this.inserted.length;
    }
}
(0, _holderJsDefault.default).ChangeDetails = ChangeDetails;

},{"./holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i9dza":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Masked);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _utilsJs = require("../core/utils.js");
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
/** Append flags */ /** Extract flags */ // see https://github.com/microsoft/TypeScript/issues/6223
/** Provides common masking stuff */ class Masked {
    /** */ /** */ /** Transforms value before mask processing */ /** Transforms each char before mask processing */ /** Validates if value is acceptable */ /** Does additional processing at the end of editing */ /** Format typed value to string */ /** Parse string to get typed value */ /** Enable characters overwriting */ /** */ /** */ /** */ constructor(opts){
        this._value = "";
        this._update({
            ...Masked.DEFAULTS,
            ...opts
        });
        this._initialized = true;
    }
    /** Sets and applies new options */ updateOptions(opts) {
        if (!Object.keys(opts).length) return;
        this.withValueRefresh(this._update.bind(this, opts));
    }
    /** Sets new options */ _update(opts) {
        Object.assign(this, opts);
    }
    /** Mask state */ get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
    }
    /** Resets value */ reset() {
        this._value = "";
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this.resolve(value, {
            input: true
        });
    }
    /** Resolve new value */ resolve(value, flags) {
        if (flags === void 0) flags = {
            input: true
        };
        this.reset();
        this.append(value, flags, "");
        this.doCommit();
    }
    get unmaskedValue() {
        return this.value;
    }
    set unmaskedValue(value) {
        this.resolve(value, {});
    }
    get typedValue() {
        return this.parse ? this.parse(this.value, this) : this.unmaskedValue;
    }
    set typedValue(value) {
        if (this.format) this.value = this.format(value, this);
        else this.unmaskedValue = String(value);
    }
    /** Value that includes raw user input */ get rawInputValue() {
        return this.extractInput(0, this.value.length, {
            raw: true
        });
    }
    set rawInputValue(value) {
        this.resolve(value, {
            raw: true
        });
    }
    get displayValue() {
        return this.value;
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return this.isComplete;
    }
    /** Finds nearest input position in direction */ nearestInputPos(cursorPos, direction) {
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return Math.min(this.value.length, toPos - fromPos);
    }
    /** Extracts value in range considering flags */ extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.value.slice(fromPos, toPos);
    }
    /** Extracts tail in range */ extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return new (0, _continuousTailDetailsJsDefault.default)(this.extractInput(fromPos, toPos), fromPos);
    }
    /** Appends tail */ appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    /** Appends char */ _appendCharRaw(ch, flags) {
        if (!ch) return new (0, _changeDetailsJsDefault.default)();
        this._value += ch;
        return new (0, _changeDetailsJsDefault.default)({
            inserted: ch,
            rawInserted: ch
        });
    }
    /** Appends char */ _appendChar(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const consistentState = this.state;
        let details;
        [ch, details] = this.doPrepareChar(ch, flags);
        details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
            let consistentTail;
            let appended = this.doValidate(flags) !== false;
            if (appended && checkTail != null) {
                // validation ok, check tail
                const beforeTailState = this.state;
                if (this.overwrite === true) {
                    consistentTail = checkTail.state;
                    checkTail.unshift(this.value.length - details.tailShift);
                }
                let tailDetails = this.appendTail(checkTail);
                appended = tailDetails.rawInserted === checkTail.toString();
                // not ok, try shift
                if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
                    this.state = beforeTailState;
                    consistentTail = checkTail.state;
                    checkTail.shift();
                    tailDetails = this.appendTail(checkTail);
                    appended = tailDetails.rawInserted === checkTail.toString();
                }
                // if ok, rollback state after tail
                if (appended && tailDetails.inserted) this.state = beforeTailState;
            }
            // revert all if something went wrong
            if (!appended) {
                details = new (0, _changeDetailsJsDefault.default)();
                this.state = consistentState;
                if (checkTail && consistentTail) checkTail.state = consistentTail;
            }
        }
        return details;
    }
    /** Appends optional placeholder at the end */ _appendPlaceholder() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends optional eager placeholder at the end */ _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Appends symbols considering flags */ append(str, flags, tail) {
        if (!(0, _utilsJs.isString)(str)) throw new Error("value should be string");
        const checkTail = (0, _utilsJs.isString)(tail) ? new (0, _continuousTailDetailsJsDefault.default)(String(tail)) : tail;
        if (flags != null && flags.tail) flags._beforeTailState = this.state;
        let details;
        [str, details] = this.doPrepare(str, flags);
        for(let ci = 0; ci < str.length; ++ci){
            const d = this._appendChar(str[ci], flags, checkTail);
            if (!d.rawInserted && !this.doSkipInvalid(str[ci], flags, checkTail)) break;
            details.aggregate(d);
        }
        if ((this.eager === true || this.eager === "append") && flags != null && flags.input && str) details.aggregate(this._appendEager());
        // append tail but aggregate only tailShift
        if (checkTail != null) details.tailShift += this.appendTail(checkTail).tailShift;
        return details;
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new (0, _changeDetailsJsDefault.default)();
    }
    /** Calls function and reapplies current value */ withValueRefresh(fn) {
        if (this._refreshing || !this._initialized) return fn();
        this._refreshing = true;
        const rawInput = this.rawInputValue;
        const value = this.value;
        const ret = fn();
        this.rawInputValue = rawInput;
        // append lost trailing chars at the end
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) this.append(value.slice(this.value.length), {}, "");
        delete this._refreshing;
        return ret;
    }
    runIsolated(fn) {
        if (this._isolated || !this._initialized) return fn(this);
        this._isolated = true;
        const state = this.state;
        const ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
    }
    doSkipInvalid(ch, flags, checkTail) {
        return Boolean(this.skipInvalid);
    }
    /** Prepares string before mask processing */ doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepare ? this.prepare(str, this, flags) : str);
    }
    /** Prepares each char before mask processing */ doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        return (0, _changeDetailsJsDefault.default).normalize(this.prepareChar ? this.prepareChar(str, this, flags) : str);
    }
    /** Validates if value is acceptable */ doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
    }
    /** Does additional processing at the end of editing */ doCommit() {
        if (this.commit) this.commit(this.value, this);
    }
    splice(start, deleteCount, inserted, removeDirection, flags) {
        if (removeDirection === void 0) removeDirection = (0, _utilsJs.DIRECTION).NONE;
        if (flags === void 0) flags = {
            input: true
        };
        const tailPos = start + deleteCount;
        const tail = this.extractTail(tailPos);
        const eagerRemove = this.eager === true || this.eager === "remove";
        let oldRawValue;
        if (eagerRemove) {
            removeDirection = (0, _utilsJs.forceDirection)(removeDirection);
            oldRawValue = this.extractInput(0, tailPos, {
                raw: true
            });
        }
        let startChangePos = start;
        const details = new (0, _changeDetailsJsDefault.default)();
        // if it is just deletion without insertion
        if (removeDirection !== (0, _utilsJs.DIRECTION).NONE) {
            startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !eagerRemove ? (0, _utilsJs.DIRECTION).NONE : removeDirection);
            // adjust tailShift if start was aligned
            details.tailShift = startChangePos - start;
        }
        details.aggregate(this.remove(startChangePos));
        if (eagerRemove && removeDirection !== (0, _utilsJs.DIRECTION).NONE && oldRawValue === this.rawInputValue) {
            if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
                let valLength;
                while(oldRawValue === this.rawInputValue && (valLength = this.value.length))details.aggregate(new (0, _changeDetailsJsDefault.default)({
                    tailShift: -1
                })).aggregate(this.remove(valLength - 1));
            } else if (removeDirection === (0, _utilsJs.DIRECTION).FORCE_RIGHT) tail.unshift();
        }
        return details.aggregate(this.append(inserted, flags, tail));
    }
    maskEquals(mask) {
        return this.mask === mask;
    }
    typedValueEquals(value) {
        const tval = this.typedValue;
        return value === tval || Masked.EMPTY_VALUES.includes(value) && Masked.EMPTY_VALUES.includes(tval) || (this.format ? this.format(value, this) === this.format(this.typedValue, this) : false);
    }
}
Masked.DEFAULTS = {
    skipInvalid: true
};
Masked.EMPTY_VALUES = [
    undefined,
    null,
    ""
];
(0, _holderJsDefault.default).Masked = Masked;

},{"../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5MbDY":[function(require,module,exports) {
/** Provides details of continuous extracted tail */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ContinuousTailDetails);
class ContinuousTailDetails {
    /** Tail value as string */ /** Tail start position */ /** Start position */ constructor(value, from, stop){
        if (value === void 0) value = "";
        if (from === void 0) from = 0;
        this.value = value;
        this.from = from;
        this.stop = stop;
    }
    toString() {
        return this.value;
    }
    extend(tail) {
        this.value += String(tail);
    }
    appendTo(masked) {
        return masked.append(this.toString(), {
            tail: true
        }).aggregate(masked._appendPlaceholder());
    }
    get state() {
        return {
            value: this.value,
            from: this.from,
            stop: this.stop
        };
    }
    set state(state) {
        Object.assign(this, state);
    }
    unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos) return "";
        const shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
    }
    shift() {
        if (!this.value.length) return "";
        const shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1V3CB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDate);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _rangeJs = require("./range.js");
var _rangeJsDefault = parcelHelpers.interopDefault(_rangeJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Date mask */ class MaskedDate extends (0, _patternJsDefault.default) {
    /** Pattern mask for date according to {@link MaskedDate#format} */ /** Start date */ /** End date */ /** */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        const { mask , pattern , ...patternOpts } = {
            ...MaskedDate.DEFAULTS,
            ...opts
        };
        super({
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { mask , pattern , blocks , ...patternOpts } = {
            ...MaskedDate.DEFAULTS,
            ...opts
        };
        const patternBlocks = Object.assign({}, MaskedDate.GET_DEFAULT_BLOCKS());
        // adjust year block
        if (opts.min) patternBlocks.Y.from = opts.min.getFullYear();
        if (opts.max) patternBlocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && patternBlocks.Y.from === patternBlocks.Y.to) {
            patternBlocks.m.from = opts.min.getMonth() + 1;
            patternBlocks.m.to = opts.max.getMonth() + 1;
            if (patternBlocks.m.from === patternBlocks.m.to) {
                patternBlocks.d.from = opts.min.getDate();
                patternBlocks.d.to = opts.max.getDate();
            }
        }
        Object.assign(patternBlocks, this.blocks, blocks);
        // add autofix
        Object.keys(patternBlocks).forEach((bk)=>{
            const b = patternBlocks[bk];
            if (!("autofix" in b) && "autofix" in opts) b.autofix = opts.autofix;
        });
        super._update({
            ...patternOpts,
            mask: (0, _utilsJs.isString)(mask) ? mask : pattern,
            blocks: patternBlocks
        });
    }
    doValidate(flags) {
        const date = this.date;
        return super.doValidate(flags) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
    }
    /** Checks if date is exists */ isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
    }
    /** Parsed Date */ get date() {
        return this.typedValue;
    }
    set date(date) {
        this.typedValue = date;
    }
    get typedValue() {
        return this.isComplete ? super.typedValue : null;
    }
    set typedValue(value) {
        super.typedValue = value;
    }
    maskEquals(mask) {
        return mask === Date || super.maskEquals(mask);
    }
}
MaskedDate.GET_DEFAULT_BLOCKS = ()=>({
        d: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 31,
            maxLength: 2
        },
        m: {
            mask: (0, _rangeJsDefault.default),
            from: 1,
            to: 12,
            maxLength: 2
        },
        Y: {
            mask: (0, _rangeJsDefault.default),
            from: 1900,
            to: 9999
        }
    });
MaskedDate.DEFAULTS = {
    mask: Date,
    pattern: "d{.}`m{.}`Y",
    format: (date, masked)=>{
        if (!date) return "";
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return [
            day,
            month,
            year
        ].join(".");
    },
    parse: (str, masked)=>{
        const [day, month, year] = str.split(".").map(Number);
        return new Date(year, month - 1, day);
    }
};
(0, _holderJsDefault.default).MaskedDate = MaskedDate;

},{"./pattern.js":"edg1G","./range.js":"iHvQL","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"edg1G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedPattern);
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _chunkTailDetailsJsDefault = parcelHelpers.interopDefault(_chunkTailDetailsJs);
var _cursorJs = require("./pattern/cursor.js");
var _cursorJsDefault = parcelHelpers.interopDefault(_cursorJs);
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _fixedDefinitionJsDefault = parcelHelpers.interopDefault(_fixedDefinitionJs);
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _inputDefinitionJsDefault = parcelHelpers.interopDefault(_inputDefinitionJs);
var _regexpJs = require("./regexp.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Pattern mask */ class MaskedPattern extends (0, _baseJsDefault.default) {
    /** */ /** */ /** Single char for empty input */ /** Single char for filled input */ /** Show placeholder only when needed */ /** Enable characters overwriting */ /** */ /** */ constructor(opts){
        super({
            ...MaskedPattern.DEFAULTS,
            ...opts,
            definitions: Object.assign({}, (0, _inputDefinitionJsDefault.default).DEFAULT_DEFINITIONS, opts == null ? void 0 : opts.definitions)
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        super._update(opts);
        this._rebuildMask();
    }
    _rebuildMask() {
        const defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        const pattern = this.mask;
        if (!pattern || !defs) return;
        let unmaskingBlock = false;
        let optionalBlock = false;
        for(let i = 0; i < pattern.length; ++i){
            if (this.blocks) {
                const p = pattern.slice(i);
                const bNames = Object.keys(this.blocks).filter((bName)=>p.indexOf(bName) === 0);
                // order by key length
                bNames.sort((a, b)=>b.length - a.length);
                // use block name with max length
                const bName = bNames[0];
                if (bName) {
                    const maskedBlock = (0, _factoryJsDefault.default)({
                        lazy: this.lazy,
                        eager: this.eager,
                        placeholderChar: this.placeholderChar,
                        displayChar: this.displayChar,
                        overwrite: this.overwrite,
                        ...(0, _factoryJs.normalizeOpts)(this.blocks[bName]),
                        parent: this
                    });
                    if (maskedBlock) {
                        this._blocks.push(maskedBlock);
                        // store block index
                        if (!this._maskedBlocks[bName]) this._maskedBlocks[bName] = [];
                        this._maskedBlocks[bName].push(this._blocks.length - 1);
                    }
                    i += bName.length - 1;
                    continue;
                }
            }
            let char = pattern[i];
            let isInput = char in defs;
            if (char === MaskedPattern.STOP_CHAR) {
                this._stops.push(this._blocks.length);
                continue;
            }
            if (char === "{" || char === "}") {
                unmaskingBlock = !unmaskingBlock;
                continue;
            }
            if (char === "[" || char === "]") {
                optionalBlock = !optionalBlock;
                continue;
            }
            if (char === MaskedPattern.ESCAPE_CHAR) {
                ++i;
                char = pattern[i];
                if (!char) break;
                isInput = false;
            }
            const def = isInput ? new (0, _inputDefinitionJsDefault.default)({
                isOptional: optionalBlock,
                lazy: this.lazy,
                eager: this.eager,
                placeholderChar: this.placeholderChar,
                displayChar: this.displayChar,
                ...(0, _factoryJs.normalizeOpts)(defs[char]),
                parent: this
            }) : new (0, _fixedDefinitionJsDefault.default)({
                char,
                eager: this.eager,
                isUnmasking: unmaskingBlock
            });
            this._blocks.push(def);
        }
    }
    get state() {
        return {
            ...super.state,
            _blocks: this._blocks.map((b)=>b.state)
        };
    }
    set state(state) {
        const { _blocks , ...maskedState } = state;
        this._blocks.forEach((b, bi)=>b.state = _blocks[bi]);
        super.state = maskedState;
    }
    reset() {
        super.reset();
        this._blocks.forEach((b)=>b.reset());
    }
    get isComplete() {
        return this._blocks.every((b)=>b.isComplete);
    }
    get isFilled() {
        return this._blocks.every((b)=>b.isFilled);
    }
    get isFixed() {
        return this._blocks.every((b)=>b.isFixed);
    }
    get isOptional() {
        return this._blocks.every((b)=>b.isOptional);
    }
    doCommit() {
        this._blocks.forEach((b)=>b.doCommit());
        super.doCommit();
    }
    get unmaskedValue() {
        return this._blocks.reduce((str, b)=>str += b.unmaskedValue, "");
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    get value() {
        // TODO return _value when not in change?
        return this._blocks.reduce((str, b)=>str += b.value, "");
    }
    set value(value) {
        super.value = value;
    }
    get displayValue() {
        return this._blocks.reduce((str, b)=>str += b.displayValue, "");
    }
    appendTail(tail) {
        return super.appendTail(tail).aggregate(this._appendPlaceholder());
    }
    _appendEager() {
        var _this$_mapPosToBlock;
        const details = new (0, _changeDetailsJsDefault.default)();
        let startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) == null ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null) return details;
        // TODO test if it works for nested pattern masks
        if (this._blocks[startBlockIndex].isFilled) ++startBlockIndex;
        for(let bi = startBlockIndex; bi < this._blocks.length; ++bi){
            const d = this._blocks[bi]._appendEager();
            if (!d.inserted) break;
            details.aggregate(d);
        }
        return details;
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const blockIter = this._mapPosToBlock(this.value.length);
        const details = new (0, _changeDetailsJsDefault.default)();
        if (!blockIter) return details;
        for(let bi = blockIter.index;; ++bi){
            var _flags$_beforeTailSta, _flags$_beforeTailSta2;
            const block = this._blocks[bi];
            if (!block) break;
            const blockDetails = block._appendChar(ch, {
                ...flags,
                _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : (_flags$_beforeTailSta2 = _flags$_beforeTailSta._blocks) == null ? void 0 : _flags$_beforeTailSta2[bi]
            });
            const skip = blockDetails.skip;
            details.aggregate(blockDetails);
            if (skip || blockDetails.rawInserted) break; // go next char
        }
        return details;
    }
    extractTail(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        const chunkTail = new (0, _chunkTailDetailsJsDefault.default)();
        if (fromPos === toPos) return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, (b, bi, bFromPos, bToPos)=>{
            const blockChunk = b.extractTail(bFromPos, bToPos);
            blockChunk.stop = this._findStopBefore(bi);
            blockChunk.from = this._blockStartPos(bi);
            if (blockChunk instanceof (0, _chunkTailDetailsJsDefault.default)) blockChunk.blockIndex = bi;
            chunkTail.extend(blockChunk);
        });
        return chunkTail;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        if (flags === void 0) flags = {};
        if (fromPos === toPos) return "";
        let input = "";
        this._forEachBlocksInRange(fromPos, toPos, (b, _, fromPos, toPos)=>{
            input += b.extractInput(fromPos, toPos, flags);
        });
        return input;
    }
    _findStopBefore(blockIndex) {
        let stopBefore;
        for(let si = 0; si < this._stops.length; ++si){
            const stop = this._stops[si];
            if (stop <= blockIndex) stopBefore = stop;
            else break;
        }
        return stopBefore;
    }
    /** Appends placeholder depending on laziness */ _appendPlaceholder(toBlockIndex) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.lazy && toBlockIndex == null) return details;
        const startBlockIter = this._mapPosToBlock(this.value.length);
        if (!startBlockIter) return details;
        const startBlockIndex = startBlockIter.index;
        const endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach((b)=>{
            if (!b.lazy || toBlockIndex != null) {
                var _blocks2;
                const bDetails = b._appendPlaceholder((_blocks2 = b._blocks) == null ? void 0 : _blocks2.length);
                this._value += bDetails.inserted;
                details.aggregate(bDetails);
            }
        });
        return details;
    }
    /** Finds block in pos */ _mapPosToBlock(pos) {
        let accVal = "";
        for(let bi = 0; bi < this._blocks.length; ++bi){
            const block = this._blocks[bi];
            const blockStartPos = accVal.length;
            accVal += block.value;
            if (pos <= accVal.length) return {
                index: bi,
                offset: pos - blockStartPos
            };
        }
    }
    _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce((pos, b)=>pos += b.value.length, 0);
    }
    _forEachBlocksInRange(fromPos, toPos, fn) {
        if (toPos === void 0) toPos = this.value.length;
        const fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
            const toBlockIter = this._mapPosToBlock(toPos);
            // process first block
            const isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
            const fromBlockStartPos = fromBlockIter.offset;
            const fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
            fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
            if (toBlockIter && !isSameBlock) {
                // process intermediate blocks
                for(let bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi)fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
                // process last block
                fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
            }
        }
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        const removeDetails = super.remove(fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            removeDetails.aggregate(b.remove(bFromPos, bToPos));
        });
        return removeDetails;
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        if (!this._blocks.length) return 0;
        const cursor = new (0, _cursorJsDefault.default)(this, cursorPos);
        if (direction === (0, _utilsJs.DIRECTION).NONE) {
            // -------------------------------------------------
            // NONE should only go out from fixed to the right!
            // -------------------------------------------------
            if (cursor.pushRightBeforeInput()) return cursor.pos;
            cursor.popState();
            if (cursor.pushLeftBeforeInput()) return cursor.pos;
            return this.value.length;
        }
        // FORCE is only about a|* otherwise is 0
        if (direction === (0, _utilsJs.DIRECTION).LEFT || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) {
            // try to break fast when *|a
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeFilled();
                if (cursor.ok && cursor.pos === cursorPos) return cursorPos;
                cursor.popState();
            }
            // forward flow
            cursor.pushLeftBeforeInput();
            cursor.pushLeftBeforeRequired();
            cursor.pushLeftBeforeFilled();
            // backward flow
            if (direction === (0, _utilsJs.DIRECTION).LEFT) {
                cursor.pushRightBeforeInput();
                cursor.pushRightBeforeRequired();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
                if (cursor.ok && cursor.pos <= cursorPos) return cursor.pos;
                cursor.popState();
            }
            if (cursor.ok) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return 0;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return 0;
        }
        if (direction === (0, _utilsJs.DIRECTION).RIGHT || direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) {
            // forward flow
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.pushRightBeforeFilled()) return cursor.pos;
            if (direction === (0, _utilsJs.DIRECTION).FORCE_RIGHT) return this.value.length;
            // backward flow
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            cursor.popState();
            if (cursor.ok) return cursor.pos;
            return this.nearestInputPos(cursorPos, (0, _utilsJs.DIRECTION).LEFT);
        }
        return cursorPos;
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        let total = 0;
        this._forEachBlocksInRange(fromPos, toPos, (b, _, bFromPos, bToPos)=>{
            total += b.totalInputPositions(bFromPos, bToPos);
        });
        return total;
    }
    /** Get block by name */ maskedBlock(name) {
        return this.maskedBlocks(name)[0];
    }
    /** Get all blocks by name */ maskedBlocks(name) {
        const indices = this._maskedBlocks[name];
        if (!indices) return [];
        return indices.map((gi)=>this._blocks[gi]);
    }
}
MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: "_"
};
MaskedPattern.STOP_CHAR = "`";
MaskedPattern.ESCAPE_CHAR = "\\";
MaskedPattern.InputDefinition = (0, _inputDefinitionJsDefault.default);
MaskedPattern.FixedDefinition = (0, _fixedDefinitionJsDefault.default);
(0, _holderJsDefault.default).MaskedPattern = MaskedPattern;

},{"../core/change-details.js":"cDdFe","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","./base.js":"i9dza","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a8Q24":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChunksTailDetails);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
class ChunksTailDetails {
    /** */ constructor(chunks, from){
        if (chunks === void 0) chunks = [];
        if (from === void 0) from = 0;
        this.chunks = chunks;
        this.from = from;
    }
    toString() {
        return this.chunks.map(String).join("");
    }
    extend(tailChunk) {
        if (!String(tailChunk)) return;
        tailChunk = (0, _utilsJs.isString)(tailChunk) ? new (0, _continuousTailDetailsJsDefault.default)(String(tailChunk)) : tailChunk;
        const lastChunk = this.chunks[this.chunks.length - 1];
        const extendLast = lastChunk && // if stops are same or tail has no stop
        (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && // if tail chunk goes just after last chunk
        tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof (0, _continuousTailDetailsJsDefault.default)) {
            // check the ability to extend previous chunk
            if (extendLast) // extend previous chunk
            lastChunk.extend(tailChunk.toString());
            else // append new chunk
            this.chunks.push(tailChunk);
        } else if (tailChunk instanceof ChunksTailDetails) {
            if (tailChunk.stop == null) {
                // unwrap floating chunks to parent, keeping `from` pos
                let firstTailChunk;
                while(tailChunk.chunks.length && tailChunk.chunks[0].stop == null){
                    firstTailChunk = tailChunk.chunks.shift(); // not possible to be `undefined` because length was checked above
                    firstTailChunk.from += tailChunk.from;
                    this.extend(firstTailChunk);
                }
            }
            // if tail chunk still has value
            if (tailChunk.toString()) {
                // if chunks contains stops, then popup stop to container
                tailChunk.stop = tailChunk.blockIndex;
                this.chunks.push(tailChunk);
            }
        }
    }
    appendTo(masked) {
        if (!(masked instanceof (0, _holderJsDefault.default).MaskedPattern)) {
            const tail = new (0, _continuousTailDetailsJsDefault.default)(this.toString());
            return tail.appendTo(masked);
        }
        const details = new (0, _changeDetailsJsDefault.default)();
        for(let ci = 0; ci < this.chunks.length && !details.skip; ++ci){
            const chunk = this.chunks[ci];
            const lastBlockIter = masked._mapPosToBlock(masked.value.length);
            const stop = chunk.stop;
            let chunkBlock;
            if (stop != null && // if block not found or stop is behind lastBlock
            (!lastBlockIter || lastBlockIter.index <= stop)) {
                if (chunk instanceof ChunksTailDetails || // for continuous block also check if stop is exist
                masked._stops.indexOf(stop) >= 0) {
                    const phDetails = masked._appendPlaceholder(stop);
                    details.aggregate(phDetails);
                }
                chunkBlock = chunk instanceof ChunksTailDetails && masked._blocks[stop];
            }
            if (chunkBlock) {
                const tailDetails = chunkBlock.appendTail(chunk);
                tailDetails.skip = false; // always ignore skip, it will be set on last
                details.aggregate(tailDetails);
                masked._value += tailDetails.inserted;
                // get not inserted chars
                const remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
                if (remainChars) details.aggregate(masked.append(remainChars, {
                    tail: true
                }));
            } else details.aggregate(masked.append(chunk.toString(), {
                tail: true
            }));
        }
        return details;
    }
    get state() {
        return {
            chunks: this.chunks.map((c)=>c.state),
            from: this.from,
            stop: this.stop,
            blockIndex: this.blockIndex
        };
    }
    set state(state) {
        const { chunks , ...props } = state;
        Object.assign(this, props);
        this.chunks = chunks.map((cstate)=>{
            const chunk = "chunks" in cstate ? new ChunksTailDetails() : new (0, _continuousTailDetailsJsDefault.default)();
            chunk.state = cstate;
            return chunk;
        });
    }
    unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos) return "";
        const chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        let ci = 0;
        while(ci < this.chunks.length){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.unshift(chunkShiftPos);
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                ++ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
    shift() {
        if (!this.chunks.length) return "";
        let ci = this.chunks.length - 1;
        while(0 <= ci){
            const chunk = this.chunks[ci];
            const shiftChar = chunk.shift();
            if (chunk.toString()) {
                // chunk still contains value
                // but not shifted - means no more available chars to shift
                if (!shiftChar) break;
                --ci;
            } else // clean if chunk has no value
            this.chunks.splice(ci, 1);
            if (shiftChar) return shiftChar;
        }
        return "";
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K9Ff":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternCursor);
var _utilsJs = require("../../core/utils.js");
class PatternCursor {
    constructor(masked, pos){
        this.masked = masked;
        this._log = [];
        const { offset , index  } = masked._mapPosToBlock(pos) || (pos < 0 ? // first
        {
            index: 0,
            offset: 0
        } : // last
        {
            index: this.masked._blocks.length,
            offset: 0
        });
        this.offset = offset;
        this.index = index;
        this.ok = false;
    }
    get block() {
        return this.masked._blocks[this.index];
    }
    get pos() {
        return this.masked._blockStartPos(this.index) + this.offset;
    }
    get state() {
        return {
            index: this.index,
            offset: this.offset,
            ok: this.ok
        };
    }
    set state(s) {
        Object.assign(this, s);
    }
    pushState() {
        this._log.push(this.state);
    }
    popState() {
        const s = this._log.pop();
        if (s) this.state = s;
        return s;
    }
    bindBlock() {
        if (this.block) return;
        if (this.index < 0) {
            this.index = 0;
            this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
            this.index = this.masked._blocks.length - 1;
            this.offset = this.block.value.length; // TODO this is stupid type error, `block` depends on index that was changed above
        }
    }
    _pushLeft(fn) {
        this.pushState();
        for(this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) == null ? void 0 : _this$block.value.length) || 0){
            var _this$block;
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    _pushRight(fn) {
        this.pushState();
        for(this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0){
            if (fn()) return this.ok = true;
        }
        return this.ok = false;
    }
    pushLeftBeforeFilled() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (this.offset !== 0) return true;
        });
    }
    pushLeftBeforeInput() {
        // cases:
        // filled input: 00|
        // optional empty input: 00[]|
        // nested block: XX<[]>|
        return this._pushLeft(()=>{
            if (this.block.isFixed) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushLeftBeforeRequired() {
        return this._pushLeft(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).LEFT);
            return true;
        });
    }
    pushRightBeforeFilled() {
        return this._pushRight(()=>{
            if (this.block.isFixed || !this.block.value) return;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).FORCE_RIGHT);
            if (this.offset !== this.block.value.length) return true;
        });
    }
    pushRightBeforeInput() {
        return this._pushRight(()=>{
            if (this.block.isFixed) return;
            // const o = this.offset;
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            // HACK cases like (STILL DOES NOT WORK FOR NESTED)
            // aa|X
            // aa<X|[]>X_    - this will not work
            // if (o && o === this.offset && this.block instanceof PatternInputDefinition) continue;
            return true;
        });
    }
    pushRightBeforeRequired() {
        return this._pushRight(()=>{
            if (this.block.isFixed || this.block.isOptional && !this.block.value) return;
            // TODO check |[*]XX_
            this.offset = this.block.nearestInputPos(this.offset, (0, _utilsJs.DIRECTION).NONE);
            return true;
        });
    }
}

},{"../../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fnLC7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternFixedDefinition);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _continuousTailDetailsJs = require("../../core/continuous-tail-details.js");
var _continuousTailDetailsJsDefault = parcelHelpers.interopDefault(_continuousTailDetailsJs);
var _holderJs = require("../../core/holder.js");
class PatternFixedDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        Object.assign(this, opts);
        this._value = "";
        this.isFixed = true;
    }
    get value() {
        return this._value;
    }
    get unmaskedValue() {
        return this.isUnmasking ? this.value : "";
    }
    get rawInputValue() {
        return this._isRawInput ? this.value : "";
    }
    get displayValue() {
        return this.value;
    }
    reset() {
        this._isRawInput = false;
        this._value = "";
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value) this._isRawInput = false;
        return new (0, _changeDetailsJsDefault.default)();
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this._value.length;
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return minPos;
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
            default:
                return maxPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        return this._isRawInput ? toPos - fromPos : 0;
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this._value.length;
        if (flags === void 0) flags = {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
    }
    get isComplete() {
        return true;
    }
    get isFilled() {
        return Boolean(this._value);
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        const appendEager = this.eager === true || this.eager === "append";
        const appended = this.char === ch;
        const isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && (!flags.raw || !appendEager) && !flags.tail;
        if (isResolved) details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
    }
    _appendEager() {
        return this._appendChar(this.char, {
            tail: true
        });
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled) return details;
        this._value = details.inserted = this.char;
        return details;
    }
    extractTail() {
        return new (0, _continuousTailDetailsJsDefault.default)("");
    }
    appendTail(tail) {
        if ((0, _utilsJs.isString)(tail)) tail = new (0, _continuousTailDetailsJsDefault.default)(String(tail));
        return tail.appendTo(this);
    }
    append(str, flags, tail) {
        const details = this._appendChar(str[0], flags);
        if (tail != null) details.tailShift += this.appendTail(tail).tailShift;
        return details;
    }
    doCommit() {}
    get state() {
        return {
            _value: this._value,
            _rawInputValue: this.rawInputValue
        };
    }
    set state(state) {
        this._value = state._value;
        this._isRawInput = Boolean(state._rawInputValue);
    }
}

},{"../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/continuous-tail-details.js":"5MbDY","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGvsS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>PatternInputDefinition);
var _factoryJs = require("../factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _changeDetailsJs = require("../../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _utilsJs = require("../../core/utils.js");
var _holderJs = require("../../core/holder.js");
class PatternInputDefinition {
    /** */ /** */ /** */ /** */ /** */ /** */ /** */ /** */ constructor(opts){
        const { parent , isOptional , placeholderChar , displayChar , lazy , eager , ...maskOpts } = opts;
        this.masked = (0, _factoryJsDefault.default)(maskOpts);
        Object.assign(this, {
            parent,
            isOptional,
            placeholderChar,
            displayChar,
            lazy,
            eager
        });
    }
    reset() {
        this.isFilled = false;
        this.masked.reset();
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        if (fromPos === 0 && toPos >= 1) {
            this.isFilled = false;
            return this.masked.remove(fromPos, toPos);
        }
        return new (0, _changeDetailsJsDefault.default)();
    }
    get value() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
    }
    get unmaskedValue() {
        return this.masked.unmaskedValue;
    }
    get rawInputValue() {
        return this.masked.rawInputValue;
    }
    get displayValue() {
        return this.masked.value && this.displayChar || this.value;
    }
    get isComplete() {
        return Boolean(this.masked.value) || this.isOptional;
    }
    _appendChar(ch, flags) {
        if (flags === void 0) flags = {};
        if (this.isFilled) return new (0, _changeDetailsJsDefault.default)();
        const state = this.masked.state;
        // simulate input
        const details = this.masked._appendChar(ch, this.currentMaskFlags(flags));
        if (details.inserted && this.doValidate(flags) === false) {
            details.inserted = details.rawInserted = "";
            this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) details.inserted = this.placeholderChar;
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
    }
    append(str, flags, tail) {
        // TODO probably should be done via _appendChar
        return this.masked.append(str, this.currentMaskFlags(flags), tail);
    }
    _appendPlaceholder() {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.isFilled || this.isOptional) return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
    }
    _appendEager() {
        return new (0, _changeDetailsJsDefault.default)();
    }
    extractTail(fromPos, toPos) {
        return this.masked.extractTail(fromPos, toPos);
    }
    appendTail(tail) {
        return this.masked.appendTail(tail);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.masked.extractInput(fromPos, toPos, flags);
    }
    nearestInputPos(cursorPos, direction) {
        if (direction === void 0) direction = (0, _utilsJs.DIRECTION).NONE;
        const minPos = 0;
        const maxPos = this.value.length;
        const boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch(direction){
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                return this.isComplete ? boundPos : minPos;
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                return this.isComplete ? boundPos : maxPos;
            case (0, _utilsJs.DIRECTION).NONE:
            default:
                return boundPos;
        }
    }
    totalInputPositions(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        return this.value.slice(fromPos, toPos).length;
    }
    doValidate(flags) {
        return this.masked.doValidate(this.currentMaskFlags(flags)) && (!this.parent || this.parent.doValidate(this.currentMaskFlags(flags)));
    }
    doCommit() {
        this.masked.doCommit();
    }
    get state() {
        return {
            _value: this.value,
            _rawInputValue: this.rawInputValue,
            masked: this.masked.state,
            isFilled: this.isFilled
        };
    }
    set state(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta;
        return {
            ...flags,
            _beforeTailState: (flags == null ? void 0 : (_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.masked) || (flags == null ? void 0 : flags._beforeTailState)
        };
    }
}
PatternInputDefinition.DEFAULT_DEFINITIONS = {
    "0": /\d/,
    "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    // http://stackoverflow.com/a/22075070
    "*": /./
};

},{"../factory.js":"4c29b","../../core/change-details.js":"cDdFe","../../core/utils.js":"hh2Rx","../../core/holder.js":"fNs7n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7B25G":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRegExp);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by RegExp */ class MaskedRegExp extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const mask = opts.mask;
        if (mask) opts.validate = (value)=>value.search(mask) >= 0;
        super._update(opts);
    }
}
(0, _holderJsDefault.default).MaskedRegExp = MaskedRegExp;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iHvQL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedRange);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _changeDetailsJs = require("../core/change-details.js");
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which accepts ranges */ class MaskedRange extends (0, _patternJsDefault.default) {
    /**
    Optionally sets max length of pattern.
    Used when pattern length is longer then `to` param length. Pads zeros at start in this case.
  */ /** Min bound */ /** Max bound */ /** */ get _matchFrom() {
        return this.maxLength - String(this.from).length;
    }
    constructor(opts){
        super(opts); // mask will be created in _update
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { to =this.to || 0 , from =this.from || 0 , maxLength =this.maxLength || 0 , autofix =this.autofix , ...patternOpts } = opts;
        this.to = to;
        this.from = from;
        this.maxLength = Math.max(String(to).length, maxLength);
        this.autofix = autofix;
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        let sameCharsCount = 0;
        while(sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount])++sameCharsCount;
        patternOpts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(this.maxLength - sameCharsCount);
        super._update(patternOpts);
    }
    get isComplete() {
        return super.isComplete && Boolean(this.value);
    }
    boundaries(str) {
        let minstr = "";
        let maxstr = "";
        const [, placeholder, num] = str.match(/^(\D*)(\d*)(\D*)/) || [];
        if (num) {
            minstr = "0".repeat(placeholder.length) + num;
            maxstr = "9".repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, "0");
        maxstr = maxstr.padEnd(this.maxLength, "9");
        return [
            minstr,
            maxstr
        ];
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        let details;
        [ch, details] = super.doPrepareChar(ch.replace(/\D/g, ""), flags);
        if (!this.autofix || !ch) return [
            ch,
            details
        ];
        const fromStr = String(this.from).padStart(this.maxLength, "0");
        const toStr = String(this.to).padStart(this.maxLength, "0");
        const nextVal = this.value + ch;
        if (nextVal.length > this.maxLength) return [
            "",
            details
        ];
        const [minstr, maxstr] = this.boundaries(nextVal);
        if (Number(maxstr) < this.from) return [
            fromStr[nextVal.length - 1],
            details
        ];
        if (Number(minstr) > this.to) {
            if (this.autofix === "pad" && nextVal.length < this.maxLength) return [
                "",
                details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))
            ];
            return [
                toStr[nextVal.length - 1],
                details
            ];
        }
        return [
            ch,
            details
        ];
    }
    doValidate(flags) {
        const str = this.value;
        const firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom) return true;
        const [minstr, maxstr] = this.boundaries(str);
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && super.doValidate(flags);
    }
}
(0, _holderJsDefault.default).MaskedRange = MaskedRange;

},{"../core/holder.js":"fNs7n","./pattern.js":"edg1G","../core/change-details.js":"cDdFe","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kPiRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedDynamic);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/** Dynamic mask for choosing appropriate mask in run-time */ class MaskedDynamic extends (0, _baseJsDefault.default) {
    /** Currently chosen mask */ /** Compliled {@link Masked} options */ /** Chooses {@link Masked} depending on input value */ constructor(opts){
        super({
            ...MaskedDynamic.DEFAULTS,
            ...opts
        });
        this.currentMask = undefined;
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        if ("mask" in opts) // mask could be totally dynamic with only `dispatch` option
        this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map((m)=>(0, _factoryJsDefault.default)({
                overwrite: this._overwrite,
                eager: this._eager,
                skipInvalid: this._skipInvalid,
                ...(0, _factoryJs.normalizeOpts)(m)
            })) : [];
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        const details = this._applyDispatch(ch, flags);
        if (this.currentMask) details.aggregate(this.currentMask._appendChar(ch, this.currentMaskFlags(flags)));
        return details;
    }
    _applyDispatch(appended, flags, tail) {
        if (appended === void 0) appended = "";
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        const prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        const inputValue = this.rawInputValue;
        const insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        const tailValue = inputValue.slice(insertValue.length);
        const prevMask = this.currentMask;
        const details = new (0, _changeDetailsJsDefault.default)();
        const prevMaskState = prevMask == null ? void 0 : prevMask.state;
        // clone flags to prevent overwriting `_beforeTailState`
        this.currentMask = this.doDispatch(appended, {
            ...flags
        }, tail);
        // restore state after dispatch
        if (this.currentMask) {
            if (this.currentMask !== prevMask) {
                // if mask changed reapply input
                this.currentMask.reset();
                if (insertValue) {
                    const d = this.currentMask.append(insertValue, {
                        raw: true
                    });
                    details.tailShift = d.inserted.length - prevValueBeforeTail.length;
                }
                if (tailValue) details.tailShift += this.currentMask.append(tailValue, {
                    raw: true,
                    tail: true
                }).tailShift;
            } else if (prevMaskState) // Dispatch can do something bad with state, so
            // restore prev mask state
            this.currentMask.state = prevMaskState;
        }
        return details;
    }
    _appendPlaceholder() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendPlaceholder());
        return details;
    }
    _appendEager() {
        const details = this._applyDispatch();
        if (this.currentMask) details.aggregate(this.currentMask._appendEager());
        return details;
    }
    appendTail(tail) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (tail) details.aggregate(this._applyDispatch("", {}, tail));
        return details.aggregate(this.currentMask ? this.currentMask.appendTail(tail) : super.appendTail(tail));
    }
    currentMaskFlags(flags) {
        var _flags$_beforeTailSta, _flags$_beforeTailSta2;
        return {
            ...flags,
            _beforeTailState: ((_flags$_beforeTailSta = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta.currentMaskRef) === this.currentMask && ((_flags$_beforeTailSta2 = flags._beforeTailState) == null ? void 0 : _flags$_beforeTailSta2.currentMask) || flags._beforeTailState
        };
    }
    doDispatch(appended, flags, tail) {
        if (flags === void 0) flags = {};
        if (tail === void 0) tail = "";
        return this.dispatch(appended, this, flags, tail);
    }
    doValidate(flags) {
        return super.doValidate(flags) && (!this.currentMask || this.currentMask.doValidate(this.currentMaskFlags(flags)));
    }
    doPrepare(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepare(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepare(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    doPrepareChar(str, flags) {
        if (flags === void 0) flags = {};
        let [s, details] = super.doPrepareChar(str, flags);
        if (this.currentMask) {
            let currentDetails;
            [s, currentDetails] = super.doPrepareChar(s, this.currentMaskFlags(flags));
            details = details.aggregate(currentDetails);
        }
        return [
            s,
            details
        ];
    }
    reset() {
        var _this$currentMask;
        (_this$currentMask = this.currentMask) == null || _this$currentMask.reset();
        this.compiledMasks.forEach((m)=>m.reset());
    }
    get value() {
        return this.currentMask ? this.currentMask.value : "";
    }
    set value(value) {
        super.value = value;
    }
    get unmaskedValue() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.currentMask ? this.currentMask.typedValue : "";
    }
    // probably typedValue should not be used with dynamic
    set typedValue(value) {
        let unmaskedValue = String(value);
        // double check it
        if (this.currentMask) {
            this.currentMask.typedValue = value;
            unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
    }
    get displayValue() {
        return this.currentMask ? this.currentMask.displayValue : "";
    }
    get isComplete() {
        var _this$currentMask2;
        return Boolean((_this$currentMask2 = this.currentMask) == null ? void 0 : _this$currentMask2.isComplete);
    }
    get isFilled() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) == null ? void 0 : _this$currentMask3.isFilled);
    }
    remove(fromPos, toPos) {
        const details = new (0, _changeDetailsJsDefault.default)();
        if (this.currentMask) details.aggregate(this.currentMask.remove(fromPos, toPos))// update with dispatch
        .aggregate(this._applyDispatch());
        return details;
    }
    get state() {
        var _this$currentMask4;
        return {
            ...super.state,
            _rawInputValue: this.rawInputValue,
            compiledMasks: this.compiledMasks.map((m)=>m.state),
            currentMaskRef: this.currentMask,
            currentMask: (_this$currentMask4 = this.currentMask) == null ? void 0 : _this$currentMask4.state
        };
    }
    set state(state) {
        const { compiledMasks , currentMaskRef , currentMask , ...maskedState } = state;
        if (compiledMasks) this.compiledMasks.forEach((m, mi)=>m.state = compiledMasks[mi]);
        if (currentMaskRef != null) {
            this.currentMask = currentMaskRef;
            this.currentMask.state = currentMask;
        }
        super.state = maskedState;
    }
    extractInput(fromPos, toPos, flags) {
        return this.currentMask ? this.currentMask.extractInput(fromPos, toPos, flags) : "";
    }
    extractTail(fromPos, toPos) {
        return this.currentMask ? this.currentMask.extractTail(fromPos, toPos) : super.extractTail(fromPos, toPos);
    }
    doCommit() {
        if (this.currentMask) this.currentMask.doCommit();
        super.doCommit();
    }
    nearestInputPos(cursorPos, direction) {
        return this.currentMask ? this.currentMask.nearestInputPos(cursorPos, direction) : super.nearestInputPos(cursorPos, direction);
    }
    get overwrite() {
        return this.currentMask ? this.currentMask.overwrite : this._overwrite;
    }
    set overwrite(overwrite) {
        this._overwrite = overwrite;
    }
    get eager() {
        return this.currentMask ? this.currentMask.eager : this._eager;
    }
    set eager(eager) {
        this._eager = eager;
    }
    get skipInvalid() {
        return this.currentMask ? this.currentMask.skipInvalid : this._skipInvalid;
    }
    set skipInvalid(skipInvalid) {
        this._skipInvalid = skipInvalid;
    }
    maskEquals(mask) {
        return Array.isArray(mask) ? this.compiledMasks.every((m, mi)=>{
            if (!mask[mi]) return;
            const { mask: oldMask , ...restOpts } = mask[mi];
            return (0, _utilsJs.objectIncludes)(m, restOpts) && m.maskEquals(oldMask);
        }) : super.maskEquals(mask);
    }
    typedValueEquals(value) {
        var _this$currentMask5;
        return Boolean((_this$currentMask5 = this.currentMask) == null ? void 0 : _this$currentMask5.typedValueEquals(value));
    }
}
MaskedDynamic.DEFAULTS = void 0;
MaskedDynamic.DEFAULTS = {
    dispatch: (appended, masked, flags, tail)=>{
        if (!masked.compiledMasks.length) return;
        const inputValue = masked.rawInputValue;
        // simulate input
        const inputs = masked.compiledMasks.map((m, index)=>{
            const isCurrent = masked.currentMask === m;
            const startInputPos = isCurrent ? m.value.length : m.nearestInputPos(m.value.length, (0, _utilsJs.DIRECTION).FORCE_LEFT);
            if (m.rawInputValue !== inputValue) {
                m.reset();
                m.append(inputValue, {
                    raw: true
                });
            } else if (!isCurrent) m.remove(startInputPos);
            m.append(appended, masked.currentMaskFlags(flags));
            m.appendTail(tail);
            return {
                index,
                weight: m.rawInputValue.length,
                totalInputPositions: m.totalInputPositions(0, Math.max(startInputPos, m.nearestInputPos(m.value.length, (0, _utilsJs.DIRECTION).FORCE_LEFT)))
            };
        });
        // pop masks with longer values first
        inputs.sort((i1, i2)=>i2.weight - i1.weight || i2.totalInputPositions - i1.totalInputPositions);
        return masked.compiledMasks[inputs[0].index];
    }
};
(0, _holderJsDefault.default).MaskedDynamic = MaskedDynamic;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./factory.js":"4c29b","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmeoh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedEnum);
var _patternJs = require("./pattern.js");
var _patternJsDefault = parcelHelpers.interopDefault(_patternJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _utilsJs = require("../core/utils.js");
var _baseJs = require("./base.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _factoryJs = require("./factory.js");
var _chunkTailDetailsJs = require("./pattern/chunk-tail-details.js");
var _cursorJs = require("./pattern/cursor.js");
var _fixedDefinitionJs = require("./pattern/fixed-definition.js");
var _inputDefinitionJs = require("./pattern/input-definition.js");
var _regexpJs = require("./regexp.js");
/** Pattern which validates enum values */ class MaskedEnum extends (0, _patternJsDefault.default) {
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        const { enum: _enum , ...eopts } = opts;
        if (_enum) {
            eopts.mask = "*".repeat(_enum[0].length);
            this.enum = _enum;
        }
        super._update(eopts);
    }
    doValidate(flags) {
        return this.enum.some((e)=>e.indexOf(this.unmaskedValue) >= 0) && super.doValidate(flags);
    }
}
(0, _holderJsDefault.default).MaskedEnum = MaskedEnum;

},{"./pattern.js":"edg1G","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/utils.js":"hh2Rx","./base.js":"i9dza","../core/continuous-tail-details.js":"5MbDY","./factory.js":"4c29b","./pattern/chunk-tail-details.js":"a8Q24","./pattern/cursor.js":"1K9Ff","./pattern/fixed-definition.js":"fnLC7","./pattern/input-definition.js":"lGvsS","./regexp.js":"7B25G","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64ffz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedFunction);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _changeDetailsJs = require("../core/change-details.js");
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
var _utilsJs = require("../core/utils.js");
/** Masking by custom Function */ class MaskedFunction extends (0, _baseJsDefault.default) {
    /** */ /** Enable characters overwriting */ /** */ /** */ updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update({
            ...opts,
            validate: opts.mask
        });
    }
}
(0, _holderJsDefault.default).MaskedFunction = MaskedFunction;

},{"./base.js":"i9dza","../core/holder.js":"fNs7n","../core/change-details.js":"cDdFe","../core/continuous-tail-details.js":"5MbDY","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHi3R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MaskedNumber);
var _utilsJs = require("../core/utils.js");
var _changeDetailsJs = require("../core/change-details.js");
var _changeDetailsJsDefault = parcelHelpers.interopDefault(_changeDetailsJs);
var _baseJs = require("./base.js");
var _baseJsDefault = parcelHelpers.interopDefault(_baseJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _continuousTailDetailsJs = require("../core/continuous-tail-details.js");
/**
  Number mask
*/ class MaskedNumber extends (0, _baseJsDefault.default) {
    /** Single char */ /** Single char */ /** Array of single chars */ /** */ /** */ /** Digits after point */ /** Flag to remove leading and trailing zeros in the end of editing */ /** Flag to pad trailing zeros after point in the end of editing */ /** Enable characters overwriting */ /** */ /** */ /** Format typed value to string */ /** Parse string to get typed value */ constructor(opts){
        super({
            ...MaskedNumber.DEFAULTS,
            ...opts
        });
    }
    updateOptions(opts) {
        super.updateOptions(opts);
    }
    _update(opts) {
        super._update(opts);
        this._updateRegExps();
    }
    _updateRegExps() {
        const start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
        const mid = "\\d*";
        const end = (this.scale ? "(" + (0, _utilsJs.escapeRegExp)(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map((0, _utilsJs.escapeRegExp)).join("") + "]", "g");
        this._thousandsSeparatorRegExp = new RegExp((0, _utilsJs.escapeRegExp)(this.thousandsSeparator), "g");
    }
    _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, "");
    }
    _insertThousandsSeparators(value) {
        // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
        const parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
    }
    doPrepareChar(ch, flags) {
        if (flags === void 0) flags = {};
        ch = this._removeThousandsSeparators(this.scale && this.mapToRadix.length && /*
      radix should be mapped when
      1) input is done from keyboard = flags.input && flags.raw
      2) unmasked value is set = !flags.input && !flags.raw
      and should not be mapped when
      1) value is set = flags.input && !flags.raw
      2) raw value is set = !flags.input && flags.raw
    */ (flags.input && flags.raw || !flags.input && !flags.raw) ? ch.replace(this._mapToRadixRegExp, this.radix) : ch);
        const [prepCh, details] = super.doPrepareChar(ch, flags);
        if (ch && !prepCh) details.skip = true;
        if (prepCh && !this.allowPositive && !this.value && prepCh !== "-") details.aggregate(this._appendChar("-"));
        return [
            prepCh,
            details
        ];
    }
    _separatorsCount(to, extendOnSeparators) {
        if (extendOnSeparators === void 0) extendOnSeparators = false;
        let count = 0;
        for(let pos = 0; pos < to; ++pos)if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators) to += this.thousandsSeparator.length;
        }
        return count;
    }
    _separatorsCountFromSlice(slice) {
        if (slice === void 0) slice = this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
    }
    extractInput(fromPos, toPos, flags) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        return this._removeThousandsSeparators(super.extractInput(fromPos, toPos, flags));
    }
    _appendCharRaw(ch, flags) {
        if (flags === void 0) flags = {};
        if (!this.thousandsSeparator) return super._appendCharRaw(ch, flags);
        const prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        const appendDetails = super._appendCharRaw(ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        const beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
    }
    _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
            const searchFrom = pos - this.thousandsSeparator.length + 1;
            const separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
            if (separatorPos <= pos) return separatorPos;
        }
        return -1;
    }
    _adjustRangeWithSeparators(from, to) {
        const separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0) from = separatorAroundFromPos;
        const separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0) to = separatorAroundToPos + this.thousandsSeparator.length;
        return [
            from,
            to
        ];
    }
    remove(fromPos, toPos) {
        if (fromPos === void 0) fromPos = 0;
        if (toPos === void 0) toPos = this.value.length;
        [fromPos, toPos] = this._adjustRangeWithSeparators(fromPos, toPos);
        const valueBeforePos = this.value.slice(0, fromPos);
        const valueAfterPos = this.value.slice(toPos);
        const prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        const beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new (0, _changeDetailsJsDefault.default)({
            tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
    }
    nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator) return cursorPos;
        switch(direction){
            case (0, _utilsJs.DIRECTION).NONE:
            case (0, _utilsJs.DIRECTION).LEFT:
            case (0, _utilsJs.DIRECTION).FORCE_LEFT:
                {
                    const separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
                    if (separatorAtLeftPos >= 0) {
                        const separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
                        if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === (0, _utilsJs.DIRECTION).FORCE_LEFT) return separatorAtLeftPos;
                    }
                    break;
                }
            case (0, _utilsJs.DIRECTION).RIGHT:
            case (0, _utilsJs.DIRECTION).FORCE_RIGHT:
                {
                    const separatorAtRightPos = this._findSeparatorAround(cursorPos);
                    if (separatorAtRightPos >= 0) return separatorAtRightPos + this.thousandsSeparator.length;
                }
        }
        return cursorPos;
    }
    doValidate(flags) {
        // validate as string
        let valid = Boolean(this._removeThousandsSeparators(this.value).match(this._numberRegExp));
        if (valid) {
            // validate as number
            const number = this.number;
            valid = valid && !isNaN(number) && // check min bound for negative values
            (this.min == null || this.min >= 0 || this.min <= this.number) && // check max bound for positive values
            (this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && super.doValidate(flags);
    }
    doCommit() {
        if (this.value) {
            const number = this.number;
            let validnum = number;
            // check bounds
            if (this.min != null) validnum = Math.max(validnum, this.min);
            if (this.max != null) validnum = Math.min(validnum, this.max);
            if (validnum !== number) this.unmaskedValue = this.format(validnum, this);
            let formatted = this.value;
            if (this.normalizeZeros) formatted = this._normalizeZeros(formatted);
            if (this.padFractionalZeros && this.scale > 0) formatted = this._padFractionalZeros(formatted);
            this._value = formatted;
        }
        super.doCommit();
    }
    _normalizeZeros(value) {
        const parts = this._removeThousandsSeparators(value).split(this.radix);
        // remove leading zeros
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, (match, sign, zeros, num)=>sign + num);
        // add leading zero
        if (value.length && !/\d$/.test(parts[0])) parts[0] = parts[0] + "0";
        if (parts.length > 1) {
            parts[1] = parts[1].replace(/0*$/, ""); // remove trailing zeros
            if (!parts[1].length) parts.length = 1; // remove fractional
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
    }
    _padFractionalZeros(value) {
        if (!value) return value;
        const parts = value.split(this.radix);
        if (parts.length < 2) parts.push("");
        parts[1] = parts[1].padEnd(this.scale, "0");
        return parts.join(this.radix);
    }
    doSkipInvalid(ch, flags, checkTail) {
        if (flags === void 0) flags = {};
        const dropFractional = this.scale === 0 && ch !== this.thousandsSeparator && (ch === this.radix || ch === MaskedNumber.UNMASKED_RADIX || this.mapToRadix.includes(ch));
        return super.doSkipInvalid(ch, flags, checkTail) && !dropFractional;
    }
    get unmaskedValue() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, MaskedNumber.UNMASKED_RADIX);
    }
    set unmaskedValue(unmaskedValue) {
        super.unmaskedValue = unmaskedValue;
    }
    get typedValue() {
        return this.parse(this.unmaskedValue, this);
    }
    set typedValue(n) {
        this.rawInputValue = this.format(n, this).replace(MaskedNumber.UNMASKED_RADIX, this.radix);
    }
    /** Parsed Number */ get number() {
        return this.typedValue;
    }
    set number(number) {
        this.typedValue = number;
    }
    /**
    Is negative allowed
  */ get allowNegative() {
        return this.min != null && this.min < 0 || this.max != null && this.max < 0;
    }
    /**
    Is positive allowed
  */ get allowPositive() {
        return this.min != null && this.min > 0 || this.max != null && this.max > 0;
    }
    typedValueEquals(value) {
        // handle  0 -> '' case (typed = 0 even if value = '')
        // for details see https://github.com/uNmAnNeR/imaskjs/issues/134
        return (super.typedValueEquals(value) || MaskedNumber.EMPTY_VALUES.includes(value) && MaskedNumber.EMPTY_VALUES.includes(this.typedValue)) && !(value === 0 && this.value === "");
    }
}
MaskedNumber.UNMASKED_RADIX = ".";
MaskedNumber.EMPTY_VALUES = [
    ...(0, _baseJsDefault.default).EMPTY_VALUES,
    0
];
MaskedNumber.DEFAULTS = {
    mask: Number,
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: [
        MaskedNumber.UNMASKED_RADIX
    ],
    min: Number.MIN_SAFE_INTEGER,
    max: Number.MAX_SAFE_INTEGER,
    scale: 2,
    normalizeZeros: true,
    padFractionalZeros: false,
    parse: Number,
    format: (n)=>n.toLocaleString("en-US", {
            useGrouping: false,
            maximumFractionDigits: 20
        })
};
(0, _holderJsDefault.default).MaskedNumber = MaskedNumber;

},{"../core/utils.js":"hh2Rx","../core/change-details.js":"cDdFe","./base.js":"i9dza","../core/holder.js":"fNs7n","../core/continuous-tail-details.js":"5MbDY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knGz0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PIPE_TYPE", ()=>PIPE_TYPE);
parcelHelpers.export(exports, "createPipe", ()=>createPipe);
parcelHelpers.export(exports, "pipe", ()=>pipe);
var _factoryJs = require("./factory.js");
var _factoryJsDefault = parcelHelpers.interopDefault(_factoryJs);
var _holderJs = require("../core/holder.js");
var _holderJsDefault = parcelHelpers.interopDefault(_holderJs);
var _utilsJs = require("../core/utils.js");
/** Mask pipe source and destination types */ const PIPE_TYPE = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
};
/** Creates new pipe function depending on mask type, source and destination options */ function createPipe(arg, from, to) {
    if (from === void 0) from = PIPE_TYPE.MASKED;
    if (to === void 0) to = PIPE_TYPE.MASKED;
    const masked = (0, _factoryJsDefault.default)(arg);
    return (value)=>masked.runIsolated((m)=>{
            m[from] = value;
            return m[to];
        });
}
/** Pipes value through mask depending on mask type, source and destination options */ function pipe(value, mask, from, to) {
    return createPipe(mask, from, to)(value);
}
(0, _holderJsDefault.default).PIPE_TYPE = PIPE_TYPE;
(0, _holderJsDefault.default).createPipe = createPipe;
(0, _holderJsDefault.default).pipe = pipe;

},{"./factory.js":"4c29b","../core/holder.js":"fNs7n","../core/utils.js":"hh2Rx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjZo1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMaskForDateInput", ()=>initMaskForDateInput);
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
var _constants = require("../constants");
const initMaskForDateInput = (selectorId)=>{
    const input = document.querySelector(selectorId);
    if (!input) return null;
    const dateOfBirthMaskField = (0, _imaskDefault.default)(input, (0, _constants.dateOfBirthOptions));
    return dateOfBirthMaskField;
};

},{"imask":"aLznl","../constants":"5cvxR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89cpb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initMaskForPhoneInput", ()=>initMaskForPhoneInput);
var _imask = require("imask");
var _imaskDefault = parcelHelpers.interopDefault(_imask);
var _intlTelInput = require("intl-tel-input");
var _intlTelInputDefault = parcelHelpers.interopDefault(_intlTelInput);
const initMaskForPhoneInput = (phoneInput)=>{
    const input = document.querySelector(phoneInput);
    if (!input) return {
        phoneIti: null,
        phoneInput: null
    };
    const phoneIti = (0, _intlTelInputDefault.default)(input, {
        utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
        allowDropdown: true,
        autoHideDialCode: false,
        autoPlaceholder: "aggressive",
        customPlaceholder: null,
        dropdownContainer: null,
        formatOnDisplay: true,
        geoIpLookup: async function(callback) {
            const req = await fetch("https://ipinfo.io");
            console.log("req", req);
            // const reader = await req.json();
            // const readStream = await res.read();
            // console.log('reader', reader);
            //   const res = await req.json();
            //   console.log('res.country', res)
            //   const countryCode = (res && res.country) ? res.country : 'ua'
            //   callback(countryCode)
            callback("ua");
        },
        hiddenInput: "",
        initialCountry: "auto",
        localizedCountries: null,
        nationalMode: false,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: [
            "hu"
        ],
        excludeCountries: [
            "ru"
        ],
        separateDialCode: false
    });
    phoneIti.promise.then(()=>{
        const plus = "+";
        const defaultMask = `${plus}000000000000`;
        const instance = setMask(input, `${plus}000000000000`);
        function updateMask() {
            const placeholder = input.getAttribute("placeholder");
            let mask = plus;
            if (!!placeholder && !!placeholder.length) {
                const value = placeholder.replaceAll("-", " ");
                let cleanPhoneMask = value.replace(/\D+/g, "").split("").map(()=>"0").join("");
                mask = `${plus}${cleanPhoneMask}`;
            }
            instance.updateOptions({
                mask: !placeholder ? defaultMask : mask
            });
        }
        updateMask();
        input.addEventListener("input", updateMask);
    });
    function setMask(input, mask) {
        return (0, _imaskDefault.default)(input, {
            mask,
            placeholderChar: "_",
            lazy: false
        });
    }
    return {
        input: phoneInput,
        phoneIti
    };
};

},{"imask":"aLznl","intl-tel-input":"7mYLx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7mYLx":[function(require,module,exports) {
/**
 * Exposing intl-tel-input as a component
 */ module.exports = require("6d1c942928ea2457");

},{"6d1c942928ea2457":"lXOeg"}],"lXOeg":[function(require,module,exports) {
/*
 * International Telephone Input v18.1.7
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */ // wrap in UMD
(function(factory) {
    if (0, module.exports) module.exports = factory();
    else window.intlTelInput = factory();
})(function(undefined) {
    "use strict";
    return function() {
        // Array of country objects for the flag dropdown.
        // Here is the criteria for the plugin to support a given country/territory
        // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
        // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
        // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
        // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml
        // Each country array has the following information:
        // [
        //    Country name,
        //    iso2 code,
        //    International dial code,
        //    Order (if >1 country with same dial code),
        //    Area codes
        // ]
        var allCountries = [
            [
                "Afghanistan (‫افغانستان‬‎)",
                "af",
                "93"
            ],
            [
                "Albania (Shqip\xebri)",
                "al",
                "355"
            ],
            [
                "Algeria (‫الجزائر‬‎)",
                "dz",
                "213"
            ],
            [
                "American Samoa",
                "as",
                "1",
                5,
                [
                    "684"
                ]
            ],
            [
                "Andorra",
                "ad",
                "376"
            ],
            [
                "Angola",
                "ao",
                "244"
            ],
            [
                "Anguilla",
                "ai",
                "1",
                6,
                [
                    "264"
                ]
            ],
            [
                "Antigua and Barbuda",
                "ag",
                "1",
                7,
                [
                    "268"
                ]
            ],
            [
                "Argentina",
                "ar",
                "54"
            ],
            [
                "Armenia (Հայաստան)",
                "am",
                "374"
            ],
            [
                "Aruba",
                "aw",
                "297"
            ],
            [
                "Ascension Island",
                "ac",
                "247"
            ],
            [
                "Australia",
                "au",
                "61",
                0
            ],
            [
                "Austria (\xd6sterreich)",
                "at",
                "43"
            ],
            [
                "Azerbaijan (Azərbaycan)",
                "az",
                "994"
            ],
            [
                "Bahamas",
                "bs",
                "1",
                8,
                [
                    "242"
                ]
            ],
            [
                "Bahrain (‫البحرين‬‎)",
                "bh",
                "973"
            ],
            [
                "Bangladesh (বাংলাদেশ)",
                "bd",
                "880"
            ],
            [
                "Barbados",
                "bb",
                "1",
                9,
                [
                    "246"
                ]
            ],
            [
                "Belarus (Беларусь)",
                "by",
                "375"
            ],
            [
                "Belgium (Belgi\xeb)",
                "be",
                "32"
            ],
            [
                "Belize",
                "bz",
                "501"
            ],
            [
                "Benin (B\xe9nin)",
                "bj",
                "229"
            ],
            [
                "Bermuda",
                "bm",
                "1",
                10,
                [
                    "441"
                ]
            ],
            [
                "Bhutan (འབྲུག)",
                "bt",
                "975"
            ],
            [
                "Bolivia",
                "bo",
                "591"
            ],
            [
                "Bosnia and Herzegovina (Босна и Херцеговина)",
                "ba",
                "387"
            ],
            [
                "Botswana",
                "bw",
                "267"
            ],
            [
                "Brazil (Brasil)",
                "br",
                "55"
            ],
            [
                "British Indian Ocean Territory",
                "io",
                "246"
            ],
            [
                "British Virgin Islands",
                "vg",
                "1",
                11,
                [
                    "284"
                ]
            ],
            [
                "Brunei",
                "bn",
                "673"
            ],
            [
                "Bulgaria (България)",
                "bg",
                "359"
            ],
            [
                "Burkina Faso",
                "bf",
                "226"
            ],
            [
                "Burundi (Uburundi)",
                "bi",
                "257"
            ],
            [
                "Cambodia (កម្ពុជា)",
                "kh",
                "855"
            ],
            [
                "Cameroon (Cameroun)",
                "cm",
                "237"
            ],
            [
                "Canada",
                "ca",
                "1",
                1,
                [
                    "204",
                    "226",
                    "236",
                    "249",
                    "250",
                    "263",
                    "289",
                    "306",
                    "343",
                    "354",
                    "365",
                    "367",
                    "368",
                    "382",
                    "387",
                    "403",
                    "416",
                    "418",
                    "428",
                    "431",
                    "437",
                    "438",
                    "450",
                    "584",
                    "468",
                    "474",
                    "506",
                    "514",
                    "519",
                    "548",
                    "579",
                    "581",
                    "584",
                    "587",
                    "604",
                    "613",
                    "639",
                    "647",
                    "672",
                    "683",
                    "705",
                    "709",
                    "742",
                    "753",
                    "778",
                    "780",
                    "782",
                    "807",
                    "819",
                    "825",
                    "867",
                    "873",
                    "902",
                    "905"
                ]
            ],
            [
                "Cape Verde (Kabu Verdi)",
                "cv",
                "238"
            ],
            [
                "Caribbean Netherlands",
                "bq",
                "599",
                1,
                [
                    "3",
                    "4",
                    "7"
                ]
            ],
            [
                "Cayman Islands",
                "ky",
                "1",
                12,
                [
                    "345"
                ]
            ],
            [
                "Central African Republic (R\xe9publique centrafricaine)",
                "cf",
                "236"
            ],
            [
                "Chad (Tchad)",
                "td",
                "235"
            ],
            [
                "Chile",
                "cl",
                "56"
            ],
            [
                "China (中国)",
                "cn",
                "86"
            ],
            [
                "Christmas Island",
                "cx",
                "61",
                2,
                [
                    "89164"
                ]
            ],
            [
                "Cocos (Keeling) Islands",
                "cc",
                "61",
                1,
                [
                    "89162"
                ]
            ],
            [
                "Colombia",
                "co",
                "57"
            ],
            [
                "Comoros (‫جزر القمر‬‎)",
                "km",
                "269"
            ],
            [
                "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
                "cd",
                "243"
            ],
            [
                "Congo (Republic) (Congo-Brazzaville)",
                "cg",
                "242"
            ],
            [
                "Cook Islands",
                "ck",
                "682"
            ],
            [
                "Costa Rica",
                "cr",
                "506"
            ],
            [
                "C\xf4te d’Ivoire",
                "ci",
                "225"
            ],
            [
                "Croatia (Hrvatska)",
                "hr",
                "385"
            ],
            [
                "Cuba",
                "cu",
                "53"
            ],
            [
                "Cura\xe7ao",
                "cw",
                "599",
                0
            ],
            [
                "Cyprus (Κύπρος)",
                "cy",
                "357"
            ],
            [
                "Czech Republic (Česk\xe1 republika)",
                "cz",
                "420"
            ],
            [
                "Denmark (Danmark)",
                "dk",
                "45"
            ],
            [
                "Djibouti",
                "dj",
                "253"
            ],
            [
                "Dominica",
                "dm",
                "1",
                13,
                [
                    "767"
                ]
            ],
            [
                "Dominican Republic (Rep\xfablica Dominicana)",
                "do",
                "1",
                2,
                [
                    "809",
                    "829",
                    "849"
                ]
            ],
            [
                "Ecuador",
                "ec",
                "593"
            ],
            [
                "Egypt (‫مصر‬‎)",
                "eg",
                "20"
            ],
            [
                "El Salvador",
                "sv",
                "503"
            ],
            [
                "Equatorial Guinea (Guinea Ecuatorial)",
                "gq",
                "240"
            ],
            [
                "Eritrea",
                "er",
                "291"
            ],
            [
                "Estonia (Eesti)",
                "ee",
                "372"
            ],
            [
                "Eswatini",
                "sz",
                "268"
            ],
            [
                "Ethiopia",
                "et",
                "251"
            ],
            [
                "Falkland Islands (Islas Malvinas)",
                "fk",
                "500"
            ],
            [
                "Faroe Islands (F\xf8royar)",
                "fo",
                "298"
            ],
            [
                "Fiji",
                "fj",
                "679"
            ],
            [
                "Finland (Suomi)",
                "fi",
                "358",
                0
            ],
            [
                "France",
                "fr",
                "33"
            ],
            [
                "French Guiana (Guyane fran\xe7aise)",
                "gf",
                "594"
            ],
            [
                "French Polynesia (Polyn\xe9sie fran\xe7aise)",
                "pf",
                "689"
            ],
            [
                "Gabon",
                "ga",
                "241"
            ],
            [
                "Gambia",
                "gm",
                "220"
            ],
            [
                "Georgia (საქართველო)",
                "ge",
                "995"
            ],
            [
                "Germany (Deutschland)",
                "de",
                "49"
            ],
            [
                "Ghana (Gaana)",
                "gh",
                "233"
            ],
            [
                "Gibraltar",
                "gi",
                "350"
            ],
            [
                "Greece (Ελλάδα)",
                "gr",
                "30"
            ],
            [
                "Greenland (Kalaallit Nunaat)",
                "gl",
                "299"
            ],
            [
                "Grenada",
                "gd",
                "1",
                14,
                [
                    "473"
                ]
            ],
            [
                "Guadeloupe",
                "gp",
                "590",
                0
            ],
            [
                "Guam",
                "gu",
                "1",
                15,
                [
                    "671"
                ]
            ],
            [
                "Guatemala",
                "gt",
                "502"
            ],
            [
                "Guernsey",
                "gg",
                "44",
                1,
                [
                    "1481",
                    "7781",
                    "7839",
                    "7911"
                ]
            ],
            [
                "Guinea (Guin\xe9e)",
                "gn",
                "224"
            ],
            [
                "Guinea-Bissau (Guin\xe9 Bissau)",
                "gw",
                "245"
            ],
            [
                "Guyana",
                "gy",
                "592"
            ],
            [
                "Haiti",
                "ht",
                "509"
            ],
            [
                "Honduras",
                "hn",
                "504"
            ],
            [
                "Hong Kong (香港)",
                "hk",
                "852"
            ],
            [
                "Hungary (Magyarorsz\xe1g)",
                "hu",
                "36"
            ],
            [
                "Iceland (\xcdsland)",
                "is",
                "354"
            ],
            [
                "India (भारत)",
                "in",
                "91"
            ],
            [
                "Indonesia",
                "id",
                "62"
            ],
            [
                "Iran (‫ایران‬‎)",
                "ir",
                "98"
            ],
            [
                "Iraq (‫العراق‬‎)",
                "iq",
                "964"
            ],
            [
                "Ireland",
                "ie",
                "353"
            ],
            [
                "Isle of Man",
                "im",
                "44",
                2,
                [
                    "1624",
                    "74576",
                    "7524",
                    "7924",
                    "7624"
                ]
            ],
            [
                "Israel (‫ישראל‬‎)",
                "il",
                "972"
            ],
            [
                "Italy (Italia)",
                "it",
                "39",
                0
            ],
            [
                "Jamaica",
                "jm",
                "1",
                4,
                [
                    "876",
                    "658"
                ]
            ],
            [
                "Japan (日本)",
                "jp",
                "81"
            ],
            [
                "Jersey",
                "je",
                "44",
                3,
                [
                    "1534",
                    "7509",
                    "7700",
                    "7797",
                    "7829",
                    "7937"
                ]
            ],
            [
                "Jordan (‫الأردن‬‎)",
                "jo",
                "962"
            ],
            [
                "Kazakhstan (Казахстан)",
                "kz",
                "7",
                1,
                [
                    "33",
                    "7"
                ]
            ],
            [
                "Kenya",
                "ke",
                "254"
            ],
            [
                "Kiribati",
                "ki",
                "686"
            ],
            [
                "Kosovo",
                "xk",
                "383"
            ],
            [
                "Kuwait (‫الكويت‬‎)",
                "kw",
                "965"
            ],
            [
                "Kyrgyzstan (Кыргызстан)",
                "kg",
                "996"
            ],
            [
                "Laos (ລາວ)",
                "la",
                "856"
            ],
            [
                "Latvia (Latvija)",
                "lv",
                "371"
            ],
            [
                "Lebanon (‫لبنان‬‎)",
                "lb",
                "961"
            ],
            [
                "Lesotho",
                "ls",
                "266"
            ],
            [
                "Liberia",
                "lr",
                "231"
            ],
            [
                "Libya (‫ليبيا‬‎)",
                "ly",
                "218"
            ],
            [
                "Liechtenstein",
                "li",
                "423"
            ],
            [
                "Lithuania (Lietuva)",
                "lt",
                "370"
            ],
            [
                "Luxembourg",
                "lu",
                "352"
            ],
            [
                "Macau (澳門)",
                "mo",
                "853"
            ],
            [
                "Madagascar (Madagasikara)",
                "mg",
                "261"
            ],
            [
                "Malawi",
                "mw",
                "265"
            ],
            [
                "Malaysia",
                "my",
                "60"
            ],
            [
                "Maldives",
                "mv",
                "960"
            ],
            [
                "Mali",
                "ml",
                "223"
            ],
            [
                "Malta",
                "mt",
                "356"
            ],
            [
                "Marshall Islands",
                "mh",
                "692"
            ],
            [
                "Martinique",
                "mq",
                "596"
            ],
            [
                "Mauritania (‫موريتانيا‬‎)",
                "mr",
                "222"
            ],
            [
                "Mauritius (Moris)",
                "mu",
                "230"
            ],
            [
                "Mayotte",
                "yt",
                "262",
                1,
                [
                    "269",
                    "639"
                ]
            ],
            [
                "Mexico (M\xe9xico)",
                "mx",
                "52"
            ],
            [
                "Micronesia",
                "fm",
                "691"
            ],
            [
                "Moldova (Republica Moldova)",
                "md",
                "373"
            ],
            [
                "Monaco",
                "mc",
                "377"
            ],
            [
                "Mongolia (Монгол)",
                "mn",
                "976"
            ],
            [
                "Montenegro (Crna Gora)",
                "me",
                "382"
            ],
            [
                "Montserrat",
                "ms",
                "1",
                16,
                [
                    "664"
                ]
            ],
            [
                "Morocco (‫المغرب‬‎)",
                "ma",
                "212",
                0
            ],
            [
                "Mozambique (Mo\xe7ambique)",
                "mz",
                "258"
            ],
            [
                "Myanmar (Burma) (မြန်မာ)",
                "mm",
                "95"
            ],
            [
                "Namibia (Namibi\xeb)",
                "na",
                "264"
            ],
            [
                "Nauru",
                "nr",
                "674"
            ],
            [
                "Nepal (नेपाल)",
                "np",
                "977"
            ],
            [
                "Netherlands (Nederland)",
                "nl",
                "31"
            ],
            [
                "New Caledonia (Nouvelle-Cal\xe9donie)",
                "nc",
                "687"
            ],
            [
                "New Zealand",
                "nz",
                "64"
            ],
            [
                "Nicaragua",
                "ni",
                "505"
            ],
            [
                "Niger (Nijar)",
                "ne",
                "227"
            ],
            [
                "Nigeria",
                "ng",
                "234"
            ],
            [
                "Niue",
                "nu",
                "683"
            ],
            [
                "Norfolk Island",
                "nf",
                "672"
            ],
            [
                "North Korea (조선 민주주의 인민 공화국)",
                "kp",
                "850"
            ],
            [
                "North Macedonia (Северна Македонија)",
                "mk",
                "389"
            ],
            [
                "Northern Mariana Islands",
                "mp",
                "1",
                17,
                [
                    "670"
                ]
            ],
            [
                "Norway (Norge)",
                "no",
                "47",
                0
            ],
            [
                "Oman (‫عُمان‬‎)",
                "om",
                "968"
            ],
            [
                "Pakistan (‫پاکستان‬‎)",
                "pk",
                "92"
            ],
            [
                "Palau",
                "pw",
                "680"
            ],
            [
                "Palestine (‫فلسطين‬‎)",
                "ps",
                "970"
            ],
            [
                "Panama (Panam\xe1)",
                "pa",
                "507"
            ],
            [
                "Papua New Guinea",
                "pg",
                "675"
            ],
            [
                "Paraguay",
                "py",
                "595"
            ],
            [
                "Peru (Per\xfa)",
                "pe",
                "51"
            ],
            [
                "Philippines",
                "ph",
                "63"
            ],
            [
                "Poland (Polska)",
                "pl",
                "48"
            ],
            [
                "Portugal",
                "pt",
                "351"
            ],
            [
                "Puerto Rico",
                "pr",
                "1",
                3,
                [
                    "787",
                    "939"
                ]
            ],
            [
                "Qatar (‫قطر‬‎)",
                "qa",
                "974"
            ],
            [
                "R\xe9union (La R\xe9union)",
                "re",
                "262",
                0
            ],
            [
                "Romania (Rom\xe2nia)",
                "ro",
                "40"
            ],
            [
                "Russia (Россия)",
                "ru",
                "7",
                0
            ],
            [
                "Rwanda",
                "rw",
                "250"
            ],
            [
                "Saint Barth\xe9lemy",
                "bl",
                "590",
                1
            ],
            [
                "Saint Helena",
                "sh",
                "290"
            ],
            [
                "Saint Kitts and Nevis",
                "kn",
                "1",
                18,
                [
                    "869"
                ]
            ],
            [
                "Saint Lucia",
                "lc",
                "1",
                19,
                [
                    "758"
                ]
            ],
            [
                "Saint Martin (Saint-Martin (partie fran\xe7aise))",
                "mf",
                "590",
                2
            ],
            [
                "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
                "pm",
                "508"
            ],
            [
                "Saint Vincent and the Grenadines",
                "vc",
                "1",
                20,
                [
                    "784"
                ]
            ],
            [
                "Samoa",
                "ws",
                "685"
            ],
            [
                "San Marino",
                "sm",
                "378"
            ],
            [
                "S\xe3o Tom\xe9 and Pr\xedncipe (S\xe3o Tom\xe9 e Pr\xedncipe)",
                "st",
                "239"
            ],
            [
                "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
                "sa",
                "966"
            ],
            [
                "Senegal (S\xe9n\xe9gal)",
                "sn",
                "221"
            ],
            [
                "Serbia (Србија)",
                "rs",
                "381"
            ],
            [
                "Seychelles",
                "sc",
                "248"
            ],
            [
                "Sierra Leone",
                "sl",
                "232"
            ],
            [
                "Singapore",
                "sg",
                "65"
            ],
            [
                "Sint Maarten",
                "sx",
                "1",
                21,
                [
                    "721"
                ]
            ],
            [
                "Slovakia (Slovensko)",
                "sk",
                "421"
            ],
            [
                "Slovenia (Slovenija)",
                "si",
                "386"
            ],
            [
                "Solomon Islands",
                "sb",
                "677"
            ],
            [
                "Somalia (Soomaaliya)",
                "so",
                "252"
            ],
            [
                "South Africa",
                "za",
                "27"
            ],
            [
                "South Korea (대한민국)",
                "kr",
                "82"
            ],
            [
                "South Sudan (‫جنوب السودان‬‎)",
                "ss",
                "211"
            ],
            [
                "Spain (Espa\xf1a)",
                "es",
                "34"
            ],
            [
                "Sri Lanka (ශ්‍රී ලංකාව)",
                "lk",
                "94"
            ],
            [
                "Sudan (‫السودان‬‎)",
                "sd",
                "249"
            ],
            [
                "Suriname",
                "sr",
                "597"
            ],
            [
                "Svalbard and Jan Mayen",
                "sj",
                "47",
                1,
                [
                    "79"
                ]
            ],
            [
                "Sweden (Sverige)",
                "se",
                "46"
            ],
            [
                "Switzerland (Schweiz)",
                "ch",
                "41"
            ],
            [
                "Syria (‫سوريا‬‎)",
                "sy",
                "963"
            ],
            [
                "Taiwan (台灣)",
                "tw",
                "886"
            ],
            [
                "Tajikistan",
                "tj",
                "992"
            ],
            [
                "Tanzania",
                "tz",
                "255"
            ],
            [
                "Thailand (ไทย)",
                "th",
                "66"
            ],
            [
                "Timor-Leste",
                "tl",
                "670"
            ],
            [
                "Togo",
                "tg",
                "228"
            ],
            [
                "Tokelau",
                "tk",
                "690"
            ],
            [
                "Tonga",
                "to",
                "676"
            ],
            [
                "Trinidad and Tobago",
                "tt",
                "1",
                22,
                [
                    "868"
                ]
            ],
            [
                "Tunisia (‫تونس‬‎)",
                "tn",
                "216"
            ],
            [
                "Turkey (T\xfcrkiye)",
                "tr",
                "90"
            ],
            [
                "Turkmenistan",
                "tm",
                "993"
            ],
            [
                "Turks and Caicos Islands",
                "tc",
                "1",
                23,
                [
                    "649"
                ]
            ],
            [
                "Tuvalu",
                "tv",
                "688"
            ],
            [
                "U.S. Virgin Islands",
                "vi",
                "1",
                24,
                [
                    "340"
                ]
            ],
            [
                "Uganda",
                "ug",
                "256"
            ],
            [
                "Ukraine (Україна)",
                "ua",
                "380"
            ],
            [
                "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
                "ae",
                "971"
            ],
            [
                "United Kingdom",
                "gb",
                "44",
                0
            ],
            [
                "United States",
                "us",
                "1",
                0
            ],
            [
                "Uruguay",
                "uy",
                "598"
            ],
            [
                "Uzbekistan (Oʻzbekiston)",
                "uz",
                "998"
            ],
            [
                "Vanuatu",
                "vu",
                "678"
            ],
            [
                "Vatican City (Citt\xe0 del Vaticano)",
                "va",
                "39",
                1,
                [
                    "06698"
                ]
            ],
            [
                "Venezuela",
                "ve",
                "58"
            ],
            [
                "Vietnam (Việt Nam)",
                "vn",
                "84"
            ],
            [
                "Wallis and Futuna (Wallis-et-Futuna)",
                "wf",
                "681"
            ],
            [
                "Western Sahara (‫الصحراء الغربية‬‎)",
                "eh",
                "212",
                1,
                [
                    "5288",
                    "5289"
                ]
            ],
            [
                "Yemen (‫اليمن‬‎)",
                "ye",
                "967"
            ],
            [
                "Zambia",
                "zm",
                "260"
            ],
            [
                "Zimbabwe",
                "zw",
                "263"
            ],
            [
                "\xc5land Islands",
                "ax",
                "358",
                1,
                [
                    "18"
                ]
            ]
        ];
        // loop over all of the countries above, restructuring the data to be objects with named keys
        for(var i = 0; i < allCountries.length; i++){
            var c = allCountries[i];
            allCountries[i] = {
                name: c[0],
                iso2: c[1],
                dialCode: c[2],
                priority: c[3] || 0,
                areaCodes: c[4] || null
            };
        }
        "use strict";
        function _objectSpread(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i] != null ? Object(arguments[i]) : {};
                var ownKeys = Object.keys(source);
                if (typeof Object.getOwnPropertySymbols === "function") ownKeys.push.apply(ownKeys, Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                }));
                ownKeys.forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            }
            return target;
        }
        function _defineProperty(obj, key, value) {
            key = _toPropertyKey(key);
            if (key in obj) Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
            else obj[key] = value;
            return obj;
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(target, props) {
            for(var i = 0; i < props.length; i++){
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
            }
        }
        function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps) _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            Object.defineProperty(Constructor, "prototype", {
                writable: false
            });
            return Constructor;
        }
        function _toPropertyKey(arg) {
            var key = _toPrimitive(arg, "string");
            return typeof key === "symbol" ? key : String(key);
        }
        function _toPrimitive(input, hint) {
            if (typeof input !== "object" || input === null) return input;
            var prim = input[Symbol.toPrimitive];
            if (prim !== undefined) {
                var res = prim.call(input, hint || "default");
                if (typeof res !== "object") return res;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return (hint === "string" ? String : Number)(input);
        }
        var intlTelInputGlobals = {
            getInstance: function getInstance(input) {
                var id = input.getAttribute("data-intl-tel-input-id");
                return window.intlTelInputGlobals.instances[id];
            },
            instances: {},
            // using a global like this allows us to mock it in the tests
            documentReady: function documentReady() {
                return document.readyState === "complete";
            }
        };
        if (typeof window === "object") window.intlTelInputGlobals = intlTelInputGlobals;
        // these vars persist through all instances of the plugin
        var id = 0;
        var defaults = {
            // whether or not to allow the dropdown
            allowDropdown: true,
            // auto insert dial code (A) on init, (B) on user selecting a country, (C) on calling setCountry
            // also listen for blur/submit and auto remove dial code if that's all there is
            autoInsertDialCode: false,
            // add a placeholder in the input with an example number for the selected country
            autoPlaceholder: "polite",
            // modify the parentClass
            customContainer: "",
            // modify the auto placeholder
            customPlaceholder: null,
            // append menu to specified element
            dropdownContainer: null,
            // don't display these countries
            excludeCountries: [],
            // format the input value during initialisation and on setNumber
            formatOnDisplay: true,
            // geoIp lookup function
            geoIpLookup: null,
            // inject a hidden input with this name, and on submit, populate it with the result of getNumber
            hiddenInput: "",
            // initial country
            initialCountry: "",
            // localized country names e.g. { 'de': 'Deutschland' }
            localizedCountries: null,
            // national vs international formatting for numbers e.g. placeholders and displaying existing numbers
            nationalMode: true,
            // display only these countries
            onlyCountries: [],
            // number type to use for placeholders
            placeholderNumberType: "MOBILE",
            // the countries at the top of the list. defaults to united states and united kingdom
            preferredCountries: [
                "us",
                "gb"
            ],
            // display the country dial code next to the selected flag
            separateDialCode: false,
            // option to hide the flags - must be used with separateDialCode, or allowDropdown=false
            showFlags: true,
            // specify the path to the libphonenumber script to enable validation/formatting
            utilsScript: ""
        };
        // https://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#Non-geographic_area_codes
        var regionlessNanpNumbers = [
            "800",
            "822",
            "833",
            "844",
            "855",
            "866",
            "877",
            "880",
            "881",
            "882",
            "883",
            "884",
            "885",
            "886",
            "887",
            "888",
            "889"
        ];
        // utility function to iterate over an object. can't use Object.entries or native forEach because
        // of IE11
        var forEachProp = function forEachProp(obj, callback) {
            var keys = Object.keys(obj);
            for(var i = 0; i < keys.length; i++)callback(keys[i], obj[keys[i]]);
        };
        // run a method on each instance of the plugin
        var forEachInstance = function forEachInstance(method) {
            forEachProp(window.intlTelInputGlobals.instances, function(key) {
                window.intlTelInputGlobals.instances[key][method]();
            });
        };
        // this is our plugin class that we will create an instance of
        // eslint-disable-next-line no-unused-vars
        var Iti = /*#__PURE__*/ function() {
            function Iti(input, options) {
                var _this = this;
                _classCallCheck(this, Iti);
                this.id = id++;
                this.telInput = input;
                this.activeItem = null;
                this.highlightedItem = null;
                // process specified options / defaults
                // alternative to Object.assign, which isn't supported by IE11
                var customOptions = options || {};
                this.options = {};
                forEachProp(defaults, function(key, value) {
                    _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
                });
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            _createClass(Iti, [
                {
                    key: "_init",
                    value: function _init() {
                        var _this2 = this;
                        // if in nationalMode, do not insert dial codes
                        if (this.options.nationalMode) this.options.autoInsertDialCode = false;
                        // if separateDialCode enabled, do not insert dial codes
                        if (this.options.separateDialCode) this.options.autoInsertDialCode = false;
                        // force showFlags=true if there's a dropdown and we're not displaying the dial code,
                        // as otherwise you just have a down arrow on it's own which doesn't make sense
                        var forceShowFlags = this.options.allowDropdown && !this.options.separateDialCode;
                        if (!this.options.showFlags && forceShowFlags) this.options.showFlags = true;
                        // we cannot just test screen size as some smartphones/website meta tags will report desktop
                        // resolutions
                        // Note: for some reason jasmine breaks if you put this in the main Plugin function with the
                        // rest of these declarations
                        // Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
                        this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        if (this.isMobile) {
                            // trigger the mobile dropdown css
                            document.body.classList.add("iti-mobile");
                            // on mobile, we want a full screen dropdown, so we must append it to the body
                            if (!this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                        }
                        // these promises get resolved when their individual requests complete
                        // this way the dev can do something like iti.promise.then(...) to know when all requests are
                        // complete
                        if (typeof Promise !== "undefined") {
                            var autoCountryPromise = new Promise(function(resolve, reject) {
                                _this2.resolveAutoCountryPromise = resolve;
                                _this2.rejectAutoCountryPromise = reject;
                            });
                            var utilsScriptPromise = new Promise(function(resolve, reject) {
                                _this2.resolveUtilsScriptPromise = resolve;
                                _this2.rejectUtilsScriptPromise = reject;
                            });
                            this.promise = Promise.all([
                                autoCountryPromise,
                                utilsScriptPromise
                            ]);
                        } else {
                            // prevent errors when Promise doesn't exist
                            this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {};
                            this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {};
                        }
                        // in various situations there could be no country selected initially, but we need to be able
                        // to assume this variable exists
                        this.selectedCountryData = {};
                        // process all the data: onlyCountries, excludeCountries, preferredCountries etc
                        this._processCountryData();
                        // generate the markup
                        this._generateMarkup();
                        // set the initial state of the input value and the selected flag
                        this._setInitialState();
                        // start all of the event listeners: autoInsertDialCode, input keydown, selectedFlag click
                        this._initListeners();
                        // utils script, and auto country
                        this._initRequests();
                    }
                },
                {
                    key: "_processCountryData",
                    value: function _processCountryData() {
                        // process onlyCountries or excludeCountries array if present
                        this._processAllCountries();
                        // process the countryCodes map
                        this._processCountryCodes();
                        // process the preferredCountries
                        this._processPreferredCountries();
                        // translate countries according to localizedCountries option
                        if (this.options.localizedCountries) this._translateCountriesByLocale();
                        // sort countries by name
                        if (this.options.onlyCountries.length || this.options.localizedCountries) this.countries.sort(this._countryNameSort);
                    }
                },
                {
                    key: "_addCountryCode",
                    value: function _addCountryCode(iso2, countryCode, priority) {
                        if (countryCode.length > this.countryCodeMaxLen) this.countryCodeMaxLen = countryCode.length;
                        if (!this.countryCodes.hasOwnProperty(countryCode)) this.countryCodes[countryCode] = [];
                        // bail if we already have this country for this countryCode
                        for(var i = 0; i < this.countryCodes[countryCode].length; i++){
                            if (this.countryCodes[countryCode][i] === iso2) return;
                        }
                        // check for undefined as 0 is falsy
                        var index = priority !== undefined ? priority : this.countryCodes[countryCode].length;
                        this.countryCodes[countryCode][index] = iso2;
                    }
                },
                {
                    key: "_processAllCountries",
                    value: function _processAllCountries() {
                        if (this.options.onlyCountries.length) {
                            var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                                return country.toLowerCase();
                            });
                            this.countries = allCountries.filter(function(country) {
                                return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
                            });
                        } else if (this.options.excludeCountries.length) {
                            var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                                return country.toLowerCase();
                            });
                            this.countries = allCountries.filter(function(country) {
                                return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
                            });
                        } else this.countries = allCountries;
                    }
                },
                {
                    key: "_translateCountriesByLocale",
                    value: function _translateCountriesByLocale() {
                        for(var i = 0; i < this.countries.length; i++){
                            var iso = this.countries[i].iso2.toLowerCase();
                            if (this.options.localizedCountries.hasOwnProperty(iso)) this.countries[i].name = this.options.localizedCountries[iso];
                        }
                    }
                },
                {
                    key: "_countryNameSort",
                    value: function _countryNameSort(a, b) {
                        if (a.name < b.name) return -1;
                        if (a.name > b.name) return 1;
                        return 0;
                    }
                },
                {
                    key: "_processCountryCodes",
                    value: function _processCountryCodes() {
                        this.countryCodeMaxLen = 0;
                        // here we store just dial codes
                        this.dialCodes = {};
                        // here we store "country codes" (both dial codes and their area codes)
                        this.countryCodes = {};
                        // first: add dial codes
                        for(var i = 0; i < this.countries.length; i++){
                            var c = this.countries[i];
                            if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                            this._addCountryCode(c.iso2, c.dialCode, c.priority);
                        }
                        // next: add area codes
                        // this is a second loop over countries, to make sure we have all of the "root" countries
                        // already in the map, so that we can access them, as each time we add an area code substring
                        // to the map, we also need to include the "root" country's code, as that also matches
                        for(var _i = 0; _i < this.countries.length; _i++){
                            var _c = this.countries[_i];
                            // area codes
                            if (_c.areaCodes) {
                                var rootCountryCode = this.countryCodes[_c.dialCode][0];
                                // for each area code
                                for(var j = 0; j < _c.areaCodes.length; j++){
                                    var areaCode = _c.areaCodes[j];
                                    // for each digit in the area code to add all partial matches as well
                                    for(var k = 1; k < areaCode.length; k++){
                                        var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                                        // start with the root country, as that also matches this dial code
                                        this._addCountryCode(rootCountryCode, partialDialCode);
                                        this._addCountryCode(_c.iso2, partialDialCode);
                                    }
                                    // add the full area code
                                    this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                                }
                            }
                        }
                    }
                },
                {
                    key: "_processPreferredCountries",
                    value: function _processPreferredCountries() {
                        this.preferredCountries = [];
                        for(var i = 0; i < this.options.preferredCountries.length; i++){
                            var countryCode = this.options.preferredCountries[i].toLowerCase();
                            var countryData = this._getCountryData(countryCode, false, true);
                            if (countryData) this.preferredCountries.push(countryData);
                        }
                    }
                },
                {
                    key: "_createEl",
                    value: function _createEl(name, attrs, container) {
                        var el = document.createElement(name);
                        if (attrs) forEachProp(attrs, function(key, value) {
                            return el.setAttribute(key, value);
                        });
                        if (container) container.appendChild(el);
                        return el;
                    }
                },
                {
                    key: "_generateMarkup",
                    value: function _generateMarkup() {
                        // if autocomplete does not exist on the element and its form, then
                        // prevent autocomplete as there's no safe, cross-browser event we can react to, so it can
                        // easily put the plugin in an inconsistent state e.g. the wrong flag selected for the
                        // autocompleted number, which on submit could mean wrong number is saved
                        if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                        var _this$options = this.options, allowDropdown = _this$options.allowDropdown, separateDialCode = _this$options.separateDialCode, showFlags = _this$options.showFlags, customContainer = _this$options.customContainer, hiddenInput = _this$options.hiddenInput, dropdownContainer = _this$options.dropdownContainer;
                        // containers (mostly for positioning)
                        var parentClass = "iti";
                        if (allowDropdown) parentClass += " iti--allow-dropdown";
                        if (separateDialCode) parentClass += " iti--separate-dial-code";
                        if (showFlags) parentClass += " iti--show-flags";
                        if (customContainer) parentClass += " ".concat(customContainer);
                        var wrapper = this._createEl("div", {
                            "class": parentClass
                        });
                        this.telInput.parentNode.insertBefore(wrapper, this.telInput);
                        // only hide the flagsContainer if allowDropdown, showFlags and separateDialCode are all false
                        var showFlagsContainer = allowDropdown || showFlags || separateDialCode;
                        if (showFlagsContainer) this.flagsContainer = this._createEl("div", {
                            "class": "iti__flag-container"
                        }, wrapper);
                        wrapper.appendChild(this.telInput);
                        // selected flag (displayed to left of input)
                        // using Aria tags for "Select-Only Combobox Example"
                        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
                        if (showFlagsContainer) this.selectedFlag = this._createEl("div", _objectSpread({
                            "class": "iti__selected-flag"
                        }, allowDropdown && {
                            role: "combobox",
                            "aria-haspopup": "listbox",
                            "aria-controls": "iti-".concat(this.id, "__country-listbox"),
                            "aria-expanded": "false",
                            "aria-label": "Telephone country code"
                        }), this.flagsContainer);
                        if (showFlags) this.selectedFlagInner = this._createEl("div", {
                            "class": "iti__flag"
                        }, this.selectedFlag);
                        if (this.selectedFlag && this.telInput.disabled) this.selectedFlag.setAttribute("aria-disabled", "true");
                        if (separateDialCode) this.selectedDialCode = this._createEl("div", {
                            "class": "iti__selected-dial-code"
                        }, this.selectedFlag);
                        if (allowDropdown) {
                            if (!this.telInput.disabled) // make element focusable and tab navigable
                            this.selectedFlag.setAttribute("tabindex", "0");
                            this.dropdownArrow = this._createEl("div", {
                                "class": "iti__arrow"
                            }, this.selectedFlag);
                            // country dropdown: preferred countries, then divider, then all countries
                            this.countryList = this._createEl("ul", {
                                "class": "iti__country-list iti__hide",
                                id: "iti-".concat(this.id, "__country-listbox"),
                                role: "listbox",
                                "aria-label": "List of countries"
                            });
                            if (this.preferredCountries.length) {
                                this._appendListItems(this.preferredCountries, "iti__preferred", true);
                                this._createEl("li", {
                                    "class": "iti__divider",
                                    role: "separator",
                                    "aria-disabled": "true"
                                }, this.countryList);
                            }
                            this._appendListItems(this.countries, "iti__standard");
                            // create dropdownContainer markup
                            if (dropdownContainer) {
                                this.dropdown = this._createEl("div", {
                                    "class": "iti iti--container"
                                });
                                this.dropdown.appendChild(this.countryList);
                            } else this.flagsContainer.appendChild(this.countryList);
                        }
                        if (hiddenInput) {
                            var hiddenInputName = hiddenInput;
                            var name = this.telInput.getAttribute("name");
                            if (name) {
                                var i = name.lastIndexOf("[");
                                // if input name contains square brackets, then give the hidden input the same name,
                                // replacing the contents of the last set of brackets with the given hiddenInput name
                                if (i !== -1) hiddenInputName = "".concat(name.substr(0, i), "[").concat(hiddenInputName, "]");
                            }
                            this.hiddenInput = this._createEl("input", {
                                type: "hidden",
                                name: hiddenInputName
                            });
                            wrapper.appendChild(this.hiddenInput);
                        }
                    }
                },
                {
                    key: "_appendListItems",
                    value: function _appendListItems(countries, className, preferred) {
                        // we create so many DOM elements, it is faster to build a temp string
                        // and then add everything to the DOM in one go at the end
                        var tmp = "";
                        // for each country
                        for(var i = 0; i < countries.length; i++){
                            var c = countries[i];
                            var idSuffix = preferred ? "-preferred" : "";
                            // open the list item
                            tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c.dialCode, "' data-country-code='").concat(c.iso2, "' aria-selected='false'>");
                            // add the flag
                            if (this.options.showFlags) tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c.iso2, "'></div></div>");
                            // and the country name and dial code
                            tmp += "<span class='iti__country-name'>".concat(c.name, "</span>");
                            tmp += "<span class='iti__dial-code'>+".concat(c.dialCode, "</span>");
                            // close the list item
                            tmp += "</li>";
                        }
                        this.countryList.insertAdjacentHTML("beforeend", tmp);
                    }
                },
                {
                    key: "_setInitialState",
                    value: function _setInitialState() {
                        // fix firefox bug: when first load page (with input with value set to number with intl dial
                        // code) and initialising plugin removes the dial code from the input, then refresh page,
                        // and we try to init plugin again but this time on number without dial code so get grey flag
                        var attributeValue = this.telInput.getAttribute("value");
                        var inputValue = this.telInput.value;
                        var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                        var val = useAttribute ? attributeValue : inputValue;
                        var dialCode = this._getDialCode(val);
                        var isRegionlessNanp = this._isRegionlessNanp(val);
                        var _this$options2 = this.options, initialCountry = _this$options2.initialCountry, autoInsertDialCode = _this$options2.autoInsertDialCode;
                        // if we already have a dial code, and it's not a regionlessNanp, we can go ahead and set the
                        // flag, else fall back to the default country
                        if (dialCode && !isRegionlessNanp) this._updateFlagFromNumber(val);
                        else if (initialCountry !== "auto") {
                            // see if we should select a flag
                            if (initialCountry) this._setFlag(initialCountry.toLowerCase());
                            else if (dialCode && isRegionlessNanp) // has intl dial code, is regionless nanp, and no initialCountry, so default to US
                            this._setFlag("us");
                            else {
                                // no dial code and no initialCountry, so default to first in list
                                this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                                if (!val) this._setFlag(this.defaultCountry);
                            }
                            // if empty and autoInsertDialCode then insert the dial code
                            if (!val && autoInsertDialCode) this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
                        }
                        // NOTE: if initialCountry is set to auto, that will be handled separately
                        // format - note this wont be run after _updateDialCode as that's only called if no val
                        if (val) this._updateValFromNumber(val);
                    }
                },
                {
                    key: "_initListeners",
                    value: function _initListeners() {
                        this._initKeyListeners();
                        if (this.options.autoInsertDialCode) this._initBlurListeners();
                        if (this.options.allowDropdown) this._initDropdownListeners();
                        if (this.hiddenInput) this._initHiddenInputListener();
                    }
                },
                {
                    key: "_initHiddenInputListener",
                    value: function _initHiddenInputListener() {
                        var _this3 = this;
                        this._handleHiddenInputSubmit = function() {
                            _this3.hiddenInput.value = _this3.getNumber();
                        };
                        if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
                    }
                },
                {
                    key: "_getClosestLabel",
                    value: function _getClosestLabel() {
                        var el = this.telInput;
                        while(el && el.tagName !== "LABEL")el = el.parentNode;
                        return el;
                    }
                },
                {
                    key: "_initDropdownListeners",
                    value: function _initDropdownListeners() {
                        var _this4 = this;
                        // hack for input nested inside label (which is valid markup): clicking the selected-flag to
                        // open the dropdown would then automatically trigger a 2nd click on the input which would
                        // close it again
                        this._handleLabelClick = function(e) {
                            // if the dropdown is closed, then focus the input, else ignore the click
                            if (_this4.countryList.classList.contains("iti__hide")) _this4.telInput.focus();
                            else e.preventDefault();
                        };
                        var label = this._getClosestLabel();
                        if (label) label.addEventListener("click", this._handleLabelClick);
                        // toggle country dropdown on click
                        this._handleClickSelectedFlag = function() {
                            // only intercept this event if we're opening the dropdown
                            // else let it bubble up to the top ("click-off-to-close" listener)
                            // we cannot just stopPropagation as it may be needed to close another instance
                            if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) _this4._showDropdown();
                        };
                        this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
                        // open dropdown list if currently focused
                        this._handleFlagsContainerKeydown = function(e) {
                            var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
                            if (isDropdownHidden && [
                                "ArrowUp",
                                "Up",
                                "ArrowDown",
                                "Down",
                                " ",
                                "Enter"
                            ].indexOf(e.key) !== -1) {
                                // prevent form from being submitted if "ENTER" was pressed
                                e.preventDefault();
                                // prevent event from being handled again by document
                                e.stopPropagation();
                                _this4._showDropdown();
                            }
                            // allow navigation from dropdown to input on TAB
                            if (e.key === "Tab") _this4._closeDropdown();
                        };
                        this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
                    }
                },
                {
                    key: "_initRequests",
                    value: function _initRequests() {
                        var _this5 = this;
                        // if the user has specified the path to the utils script, fetch it on window.load, else resolve
                        if (this.options.utilsScript && !window.intlTelInputUtils) {
                            // if the plugin is being initialised after the window.load event has already been fired
                            if (window.intlTelInputGlobals.documentReady()) window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
                            else // wait until the load event so we don't block any other requests e.g. the flags image
                            window.addEventListener("load", function() {
                                window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                            });
                        } else this.resolveUtilsScriptPromise();
                        if (this.options.initialCountry === "auto") this._loadAutoCountry();
                        else this.resolveAutoCountryPromise();
                    }
                },
                {
                    key: "_loadAutoCountry",
                    value: function _loadAutoCountry() {
                        // 3 options:
                        // 1) already loaded (we're done)
                        // 2) not already started loading (start)
                        // 3) already started loading (do nothing - just wait for loading callback to fire)
                        if (window.intlTelInputGlobals.autoCountry) this.handleAutoCountry();
                        else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
                            // don't do this twice!
                            window.intlTelInputGlobals.startedLoadingAutoCountry = true;
                            if (typeof this.options.geoIpLookup === "function") this.options.geoIpLookup(function(countryCode) {
                                window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                                // tell all instances the auto country is ready
                                // TODO: this should just be the current instances
                                // UPDATE: use setTimeout in case their geoIpLookup function calls this callback straight
                                // away (e.g. if they have already done the geo ip lookup somewhere else). Using
                                // setTimeout means that the current thread of execution will finish before executing
                                // this, which allows the plugin to finish initialising.
                                setTimeout(function() {
                                    return forEachInstance("handleAutoCountry");
                                });
                            }, function() {
                                return forEachInstance("rejectAutoCountryPromise");
                            });
                        }
                    }
                },
                {
                    key: "_initKeyListeners",
                    value: function _initKeyListeners() {
                        var _this6 = this;
                        // update flag on keyup
                        this._handleKeyupEvent = function() {
                            if (_this6._updateFlagFromNumber(_this6.telInput.value)) _this6._triggerCountryChange();
                        };
                        this.telInput.addEventListener("keyup", this._handleKeyupEvent);
                        // update flag on cut/paste events (now supported in all major browsers)
                        this._handleClipboardEvent = function() {
                            // hack because "paste" event is fired before input is updated
                            setTimeout(_this6._handleKeyupEvent);
                        };
                        this.telInput.addEventListener("cut", this._handleClipboardEvent);
                        this.telInput.addEventListener("paste", this._handleClipboardEvent);
                    }
                },
                {
                    key: "_cap",
                    value: function _cap(number) {
                        var max = this.telInput.getAttribute("maxlength");
                        return max && number.length > max ? number.substr(0, max) : number;
                    }
                },
                {
                    key: "_initBlurListeners",
                    value: function _initBlurListeners() {
                        var _this7 = this;
                        // on blur or form submit: if just a dial code then remove it
                        this._handleSubmitOrBlurEvent = function() {
                            _this7._removeEmptyDialCode();
                        };
                        if (this.telInput.form) this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
                        this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
                    }
                },
                {
                    key: "_removeEmptyDialCode",
                    value: function _removeEmptyDialCode() {
                        if (this.telInput.value.charAt(0) === "+") {
                            var numeric = this._getNumeric(this.telInput.value);
                            // if just a plus, or if just a dial code
                            if (!numeric || this.selectedCountryData.dialCode === numeric) this.telInput.value = "";
                        }
                    }
                },
                {
                    key: "_getNumeric",
                    value: function _getNumeric(s) {
                        return s.replace(/\D/g, "");
                    }
                },
                {
                    key: "_trigger",
                    value: function _trigger(name) {
                        // have to use old school document.createEvent as IE11 doesn't support `new Event()` syntax
                        var e = document.createEvent("Event");
                        e.initEvent(name, true, true);
                        // can bubble, and is cancellable
                        this.telInput.dispatchEvent(e);
                    }
                },
                {
                    key: "_showDropdown",
                    value: function _showDropdown() {
                        this.countryList.classList.remove("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "true");
                        this._setDropdownPosition();
                        // update highlighting and scroll to active list item
                        if (this.activeItem) {
                            this._highlightListItem(this.activeItem, false);
                            this._scrollTo(this.activeItem, true);
                        }
                        // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
                        this._bindDropdownListeners();
                        // update the arrow
                        this.dropdownArrow.classList.add("iti__arrow--up");
                        this._trigger("open:countrydropdown");
                    }
                },
                {
                    key: "_toggleClass",
                    value: function _toggleClass(el, className, shouldHaveClass) {
                        if (shouldHaveClass && !el.classList.contains(className)) el.classList.add(className);
                        else if (!shouldHaveClass && el.classList.contains(className)) el.classList.remove(className);
                    }
                },
                {
                    key: "_setDropdownPosition",
                    value: function _setDropdownPosition() {
                        var _this8 = this;
                        if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                        if (!this.isMobile) {
                            var pos = this.telInput.getBoundingClientRect();
                            // windowTop from https://stackoverflow.com/a/14384091/217866
                            var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                            var inputTop = pos.top + windowTop;
                            var dropdownHeight = this.countryList.offsetHeight;
                            // dropdownFitsBelow = (dropdownBottom < windowBottom)
                            var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
                            var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
                            // by default, the dropdown will be below the input. If we want to position it above the
                            // input, we add the dropup class.
                            this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
                            // if dropdownContainer is enabled, calculate postion
                            if (this.options.dropdownContainer) {
                                // by default the dropdown will be directly over the input because it's not in the flow.
                                // If we want to position it below, we need to add some extra top value.
                                var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                                // calculate placement
                                this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                                this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                                // close menu on window scroll
                                this._handleWindowScroll = function() {
                                    return _this8._closeDropdown();
                                };
                                window.addEventListener("scroll", this._handleWindowScroll);
                            }
                        }
                    }
                },
                {
                    key: "_getClosestListItem",
                    value: function _getClosestListItem(target) {
                        var el = target;
                        while(el && el !== this.countryList && !el.classList.contains("iti__country"))el = el.parentNode;
                        // if we reached the countryList element, then return null
                        return el === this.countryList ? null : el;
                    }
                },
                {
                    key: "_bindDropdownListeners",
                    value: function _bindDropdownListeners() {
                        var _this9 = this;
                        // when mouse over a list item, just highlight that one
                        // we add the class "highlight", so if they hit "enter" we know which one to select
                        this._handleMouseoverCountryList = function(e) {
                            // handle event delegation, as we're listening for this event on the countryList
                            var listItem = _this9._getClosestListItem(e.target);
                            if (listItem) _this9._highlightListItem(listItem, false);
                        };
                        this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                        // listen for country selection
                        this._handleClickCountryList = function(e) {
                            var listItem = _this9._getClosestListItem(e.target);
                            if (listItem) _this9._selectListItem(listItem);
                        };
                        this.countryList.addEventListener("click", this._handleClickCountryList);
                        // click off to close
                        // (except when this initial opening click is bubbling up)
                        // we cannot just stopPropagation as it may be needed to close another instance
                        var isOpening = true;
                        this._handleClickOffToClose = function() {
                            if (!isOpening) _this9._closeDropdown();
                            isOpening = false;
                        };
                        document.documentElement.addEventListener("click", this._handleClickOffToClose);
                        // listen for up/down scrolling, enter to select, or letters to jump to country name.
                        // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
                        // just hit down and hold it to scroll down (no keyup event).
                        // listen on the document because that's where key events are triggered if no input has focus
                        var query = "";
                        var queryTimer = null;
                        this._handleKeydownOnDropdown = function(e) {
                            // prevent down key from scrolling the whole page,
                            // and enter key from submitting a form etc
                            e.preventDefault();
                            // up and down to navigate
                            if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down") _this9._handleUpDownKey(e.key);
                            else if (e.key === "Enter") _this9._handleEnterKey();
                            else if (e.key === "Escape") _this9._closeDropdown();
                            else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                                // jump to countries that start with the query string
                                if (queryTimer) clearTimeout(queryTimer);
                                query += e.key.toLowerCase();
                                _this9._searchForCountry(query);
                                // if the timer hits 1 second, reset the query
                                queryTimer = setTimeout(function() {
                                    query = "";
                                }, 1e3);
                            }
                        };
                        document.addEventListener("keydown", this._handleKeydownOnDropdown);
                    }
                },
                {
                    key: "_handleUpDownKey",
                    value: function _handleUpDownKey(key) {
                        var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
                        if (next) {
                            // skip the divider
                            if (next.classList.contains("iti__divider")) next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
                            this._highlightListItem(next, true);
                        }
                    }
                },
                {
                    key: "_handleEnterKey",
                    value: function _handleEnterKey() {
                        if (this.highlightedItem) this._selectListItem(this.highlightedItem);
                    }
                },
                {
                    key: "_searchForCountry",
                    value: function _searchForCountry(query) {
                        for(var i = 0; i < this.countries.length; i++)if (this._startsWith(this.countries[i].name, query)) {
                            var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i].iso2));
                            // update highlighting and scroll
                            this._highlightListItem(listItem, false);
                            this._scrollTo(listItem, true);
                            break;
                        }
                    }
                },
                {
                    key: "_startsWith",
                    value: function _startsWith(a, b) {
                        return a.substr(0, b.length).toLowerCase() === b;
                    }
                },
                {
                    key: "_updateValFromNumber",
                    value: function _updateValFromNumber(originalNumber) {
                        var number = originalNumber;
                        if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
                            var useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
                            var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
                            var format = useNational ? NATIONAL : INTERNATIONAL;
                            number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
                        }
                        number = this._beforeSetNumber(number);
                        this.telInput.value = number;
                    }
                },
                {
                    key: "_updateFlagFromNumber",
                    value: function _updateFlagFromNumber(originalNumber) {
                        // if we already have US/Canada selected, make sure the number starts
                        // with a +1 so _getDialCode will be able to extract the area code
                        // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag
                        // from the number), that means we're initialising the plugin with a number that already has a
                        // dial code, so fine to ignore this bit
                        var number = originalNumber;
                        var selectedDialCode = this.selectedCountryData.dialCode;
                        var isNanp = selectedDialCode === "1";
                        if (number && isNanp && number.charAt(0) !== "+") {
                            if (number.charAt(0) !== "1") number = "1".concat(number);
                            number = "+".concat(number);
                        }
                        // if separateDialCode enabled, then consider the selected dial code to be part of the number
                        if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") number = "+".concat(selectedDialCode).concat(number);
                        // try and extract valid dial code from input
                        var dialCode = this._getDialCode(number, true);
                        var numeric = this._getNumeric(number);
                        var countryCode = null;
                        if (dialCode) {
                            var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
                            // check if the right country is already selected. this should be false if the number is
                            // longer than the matched dial code because in this case we need to make sure that if
                            // there are multiple country matches, that the first one is selected (note: we could
                            // just check that here, but it requires the same loop that we already have later)
                            var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                            var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
                            // only update the flag if:
                            // A) NOT (we currently have a NANP flag selected, and the number is a regionlessNanp)
                            // AND
                            // B) the right country is not already selected
                            if (!isRegionlessNanpNumber && !alreadySelected) {
                                // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first
                                // non-empty index
                                for(var j = 0; j < countryCodes.length; j++)if (countryCodes[j]) {
                                    countryCode = countryCodes[j];
                                    break;
                                }
                            }
                        } else if (number.charAt(0) === "+" && numeric.length) // invalid dial code, so empty
                        // Note: use getNumeric here because the number has not been formatted yet, so could contain
                        // bad chars
                        countryCode = "";
                        else if (!number || number === "+") // empty, or just a plus, so default
                        countryCode = this.defaultCountry;
                        if (countryCode !== null) return this._setFlag(countryCode);
                        return false;
                    }
                },
                {
                    key: "_isRegionlessNanp",
                    value: function _isRegionlessNanp(number) {
                        var numeric = this._getNumeric(number);
                        if (numeric.charAt(0) === "1") {
                            var areaCode = numeric.substr(1, 3);
                            return regionlessNanpNumbers.indexOf(areaCode) !== -1;
                        }
                        return false;
                    }
                },
                {
                    key: "_highlightListItem",
                    value: function _highlightListItem(listItem, shouldFocus) {
                        var prevItem = this.highlightedItem;
                        if (prevItem) prevItem.classList.remove("iti__highlight");
                        this.highlightedItem = listItem;
                        this.highlightedItem.classList.add("iti__highlight");
                        this.selectedFlag.setAttribute("aria-activedescendant", listItem.getAttribute("id"));
                        if (shouldFocus) this.highlightedItem.focus();
                    }
                },
                {
                    key: "_getCountryData",
                    value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
                        var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
                        for(var i = 0; i < countryList.length; i++){
                            if (countryList[i].iso2 === countryCode) return countryList[i];
                        }
                        if (allowFail) return null;
                        throw new Error("No country data for '".concat(countryCode, "'"));
                    }
                },
                {
                    key: "_setFlag",
                    value: function _setFlag(countryCode) {
                        var _this$options3 = this.options, allowDropdown = _this$options3.allowDropdown, separateDialCode = _this$options3.separateDialCode, showFlags = _this$options3.showFlags;
                        var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                        // do this first as it will throw an error and stop if countryCode is invalid
                        this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
                        // update the defaultCountry - we only need the iso2 from now on, so just store that
                        if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                        if (showFlags) this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
                        this._setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode);
                        if (separateDialCode) {
                            var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
                            this.selectedDialCode.innerHTML = dialCode;
                            // offsetWidth is zero if input is in a hidden container during initialisation
                            var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
                            // add 6px of padding after the grey selected-dial-code box, as this is what we use in the css
                            this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
                        }
                        // and the input's placeholder
                        this._updatePlaceholder();
                        // update the active list item
                        if (allowDropdown) {
                            var prevItem = this.activeItem;
                            if (prevItem) {
                                prevItem.classList.remove("iti__active");
                                prevItem.setAttribute("aria-selected", "false");
                            }
                            if (countryCode) {
                                // check if there is a preferred item first, else fall back to standard
                                var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                                nextItem.setAttribute("aria-selected", "true");
                                nextItem.classList.add("iti__active");
                                this.activeItem = nextItem;
                            }
                        }
                        // return if the flag has changed or not
                        return prevCountry.iso2 !== countryCode;
                    }
                },
                {
                    key: "_setSelectedCountryFlagTitleAttribute",
                    value: function _setSelectedCountryFlagTitleAttribute(countryCode, separateDialCode) {
                        if (!this.selectedFlag) return;
                        var title;
                        if (countryCode && !separateDialCode) title = "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode);
                        else if (countryCode) // For screen reader output, we don't want to include the dial code in the reader output twice
                        // so just use the selected country name here:
                        title = this.selectedCountryData.name;
                        else title = "Unknown";
                        this.selectedFlag.setAttribute("title", title);
                    }
                },
                {
                    key: "_getHiddenSelectedFlagWidth",
                    value: function _getHiddenSelectedFlagWidth() {
                        // to get the right styling to apply, all we need is a shallow clone of the container,
                        // and then to inject a deep clone of the selectedFlag element
                        var containerClone = this.telInput.parentNode.cloneNode();
                        containerClone.style.visibility = "hidden";
                        document.body.appendChild(containerClone);
                        var flagsContainerClone = this.flagsContainer.cloneNode();
                        containerClone.appendChild(flagsContainerClone);
                        var selectedFlagClone = this.selectedFlag.cloneNode(true);
                        flagsContainerClone.appendChild(selectedFlagClone);
                        var width = selectedFlagClone.offsetWidth;
                        containerClone.parentNode.removeChild(containerClone);
                        return width;
                    }
                },
                {
                    key: "_updatePlaceholder",
                    value: function _updatePlaceholder() {
                        var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
                        if (window.intlTelInputUtils && shouldSetPlaceholder) {
                            var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
                            var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
                            placeholder = this._beforeSetNumber(placeholder);
                            if (typeof this.options.customPlaceholder === "function") placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
                            this.telInput.setAttribute("placeholder", placeholder);
                        }
                    }
                },
                {
                    key: "_selectListItem",
                    value: function _selectListItem(listItem) {
                        // update selected flag and active list item
                        var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
                        this._closeDropdown();
                        this._updateDialCode(listItem.getAttribute("data-dial-code"));
                        // focus the input
                        this.telInput.focus();
                        // put cursor at end - this fix is required for FF and IE11 (with auto inserting dial code),
                        // who try to put the cursor at the beginning the first time
                        var len = this.telInput.value.length;
                        this.telInput.setSelectionRange(len, len);
                        if (flagChanged) this._triggerCountryChange();
                    }
                },
                {
                    key: "_closeDropdown",
                    value: function _closeDropdown() {
                        this.countryList.classList.add("iti__hide");
                        this.selectedFlag.setAttribute("aria-expanded", "false");
                        this.selectedFlag.removeAttribute("aria-activedescendant");
                        // update the arrow
                        this.dropdownArrow.classList.remove("iti__arrow--up");
                        // unbind key events
                        document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                        document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                        this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                        this.countryList.removeEventListener("click", this._handleClickCountryList);
                        // remove menu from container
                        if (this.options.dropdownContainer) {
                            if (!this.isMobile) window.removeEventListener("scroll", this._handleWindowScroll);
                            if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                        }
                        this._trigger("close:countrydropdown");
                    }
                },
                {
                    key: "_scrollTo",
                    value: function _scrollTo(element, middle) {
                        var container = this.countryList;
                        // windowTop from https://stackoverflow.com/a/14384091/217866
                        var windowTop = window.pageYOffset || document.documentElement.scrollTop;
                        var containerHeight = container.offsetHeight;
                        var containerTop = container.getBoundingClientRect().top + windowTop;
                        var containerBottom = containerTop + containerHeight;
                        var elementHeight = element.offsetHeight;
                        var elementTop = element.getBoundingClientRect().top + windowTop;
                        var elementBottom = elementTop + elementHeight;
                        var newScrollTop = elementTop - containerTop + container.scrollTop;
                        var middleOffset = containerHeight / 2 - elementHeight / 2;
                        if (elementTop < containerTop) {
                            // scroll up
                            if (middle) newScrollTop -= middleOffset;
                            container.scrollTop = newScrollTop;
                        } else if (elementBottom > containerBottom) {
                            // scroll down
                            if (middle) newScrollTop += middleOffset;
                            var heightDifference = containerHeight - elementHeight;
                            container.scrollTop = newScrollTop - heightDifference;
                        }
                    }
                },
                {
                    key: "_updateDialCode",
                    value: function _updateDialCode(newDialCodeBare) {
                        var inputVal = this.telInput.value;
                        // save having to pass this every time
                        var newDialCode = "+".concat(newDialCodeBare);
                        var newNumber;
                        if (inputVal.charAt(0) === "+") {
                            // there's a plus so we're dealing with a replacement
                            var prevDialCode = this._getDialCode(inputVal);
                            if (prevDialCode) // current number contains a valid dial code, so replace it
                            newNumber = inputVal.replace(prevDialCode, newDialCode);
                            else // current number contains an invalid dial code, so ditch it
                            // (no way to determine where the invalid dial code ends and the rest of the number begins)
                            newNumber = newDialCode;
                            this.telInput.value = newNumber;
                        } else if (this.options.autoInsertDialCode) {
                            if (inputVal) // there is an existing value with no dial code: prefix the new dial code
                            newNumber = newDialCode + inputVal;
                            else newNumber = newDialCode;
                            this.telInput.value = newNumber;
                        }
                    }
                },
                {
                    key: "_getDialCode",
                    value: function _getDialCode(number, includeAreaCode) {
                        var dialCode = "";
                        // only interested in international numbers (starting with a plus)
                        if (number.charAt(0) === "+") {
                            var numericChars = "";
                            // iterate over chars
                            for(var i = 0; i < number.length; i++){
                                var c = number.charAt(i);
                                // if char is number (https://stackoverflow.com/a/8935649/217866)
                                if (!isNaN(parseInt(c, 10))) {
                                    numericChars += c;
                                    // if current numericChars make a valid dial code
                                    if (includeAreaCode) {
                                        if (this.countryCodes[numericChars]) // store the actual raw string (useful for matching later)
                                        dialCode = number.substr(0, i + 1);
                                    } else if (this.dialCodes[numericChars]) {
                                        dialCode = number.substr(0, i + 1);
                                        break;
                                    }
                                    // stop searching as soon as we can - in this case when we hit max len
                                    if (numericChars.length === this.countryCodeMaxLen) break;
                                }
                            }
                        }
                        return dialCode;
                    }
                },
                {
                    key: "_getFullNumber",
                    value: function _getFullNumber() {
                        var val = this.telInput.value.trim();
                        var dialCode = this.selectedCountryData.dialCode;
                        var prefix;
                        var numericVal = this._getNumeric(val);
                        if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) // when using separateDialCode, it is visible so is effectively part of the typed number
                        prefix = "+".concat(dialCode);
                        else prefix = "";
                        return prefix + val;
                    }
                },
                {
                    key: "_beforeSetNumber",
                    value: function _beforeSetNumber(originalNumber) {
                        var number = originalNumber;
                        if (this.options.separateDialCode) {
                            var dialCode = this._getDialCode(number);
                            // if there is a valid dial code
                            if (dialCode) {
                                // in case _getDialCode returned an area code as well
                                dialCode = "+".concat(this.selectedCountryData.dialCode);
                                // a lot of numbers will have a space separating the dial code and the main number, and
                                // some NANP numbers will have a hyphen e.g. +1 684-733-1234 - in both cases we want to get
                                // rid of it
                                // NOTE: don't just trim all non-numerics as may want to preserve an open parenthesis etc
                                var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                                number = number.substr(start);
                            }
                        }
                        return this._cap(number);
                    }
                },
                {
                    key: "_triggerCountryChange",
                    value: function _triggerCountryChange() {
                        this._trigger("countrychange");
                    }
                },
                {
                    key: "handleAutoCountry",
                    value: function handleAutoCountry() {
                        if (this.options.initialCountry === "auto") {
                            // we must set this even if there is an initial val in the input: in case the initial val is
                            // invalid and they delete it - they should see their auto country
                            this.defaultCountry = window.intlTelInputGlobals.autoCountry;
                            // if there's no initial value in the input, then update the flag
                            if (!this.telInput.value) this.setCountry(this.defaultCountry);
                            this.resolveAutoCountryPromise();
                        }
                    }
                },
                {
                    key: "handleUtils",
                    value: function handleUtils() {
                        // if the request was successful
                        if (window.intlTelInputUtils) {
                            // if there's an initial value in the input, then format it
                            if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                            this._updatePlaceholder();
                        }
                        this.resolveUtilsScriptPromise();
                    }
                },
                {
                    key: "destroy",
                    value: function destroy() {
                        var form = this.telInput.form;
                        if (this.options.allowDropdown) {
                            // make sure the dropdown is closed (and unbind listeners)
                            this._closeDropdown();
                            this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
                            this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
                            // label click hack
                            var label = this._getClosestLabel();
                            if (label) label.removeEventListener("click", this._handleLabelClick);
                        }
                        // unbind hiddenInput listeners
                        if (this.hiddenInput && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                        // unbind autoInsertDialCode listeners
                        if (this.options.autoInsertDialCode) {
                            if (form) form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
                            this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
                        }
                        // unbind key events, and cut/paste events
                        this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
                        this.telInput.removeEventListener("cut", this._handleClipboardEvent);
                        this.telInput.removeEventListener("paste", this._handleClipboardEvent);
                        // remove attribute of id instance: data-intl-tel-input-id
                        this.telInput.removeAttribute("data-intl-tel-input-id");
                        // remove markup (but leave the original input)
                        var wrapper = this.telInput.parentNode;
                        wrapper.parentNode.insertBefore(this.telInput, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                        delete window.intlTelInputGlobals.instances[this.id];
                    }
                },
                {
                    key: "getExtension",
                    value: function getExtension() {
                        if (window.intlTelInputUtils) return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                        return "";
                    }
                },
                {
                    key: "getNumber",
                    value: function getNumber(format) {
                        if (window.intlTelInputUtils) {
                            var iso2 = this.selectedCountryData.iso2;
                            return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
                        }
                        return "";
                    }
                },
                {
                    key: "getNumberType",
                    value: function getNumberType() {
                        if (window.intlTelInputUtils) return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                        return -99;
                    }
                },
                {
                    key: "getSelectedCountryData",
                    value: function getSelectedCountryData() {
                        return this.selectedCountryData;
                    }
                },
                {
                    key: "getValidationError",
                    value: function getValidationError() {
                        if (window.intlTelInputUtils) {
                            var iso2 = this.selectedCountryData.iso2;
                            return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
                        }
                        return -99;
                    }
                },
                {
                    key: "isValidNumber",
                    value: function isValidNumber() {
                        var val = this._getFullNumber().trim();
                        return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, this.selectedCountryData.iso2) : null;
                    }
                },
                {
                    key: "setCountry",
                    value: function setCountry(originalCountryCode) {
                        var countryCode = originalCountryCode.toLowerCase();
                        // check if already selected
                        if (this.selectedCountryData.iso2 !== countryCode) {
                            this._setFlag(countryCode);
                            this._updateDialCode(this.selectedCountryData.dialCode);
                            this._triggerCountryChange();
                        }
                    }
                },
                {
                    key: "setNumber",
                    value: function setNumber(number) {
                        // we must update the flag first, which updates this.selectedCountryData, which is used for
                        // formatting the number before displaying it
                        var flagChanged = this._updateFlagFromNumber(number);
                        this._updateValFromNumber(number);
                        if (flagChanged) this._triggerCountryChange();
                    }
                },
                {
                    key: "setPlaceholderNumberType",
                    value: function setPlaceholderNumberType(type) {
                        this.options.placeholderNumberType = type;
                        this._updatePlaceholder();
                    }
                }
            ]);
            return Iti;
        }();
        /********************
 *  STATIC METHODS
 ********************/ // get the country data object
        intlTelInputGlobals.getCountryData = function() {
            return allCountries;
        };
        // inject a <script> element to load utils.js
        var injectScript = function injectScript(path, handleSuccess, handleFailure) {
            // inject a new script element into the page
            var script = document.createElement("script");
            script.onload = function() {
                forEachInstance("handleUtils");
                if (handleSuccess) handleSuccess();
            };
            script.onerror = function() {
                forEachInstance("rejectUtilsScriptPromise");
                if (handleFailure) handleFailure();
            };
            script.className = "iti-load-utils";
            script.async = true;
            script.src = path;
            document.body.appendChild(script);
        };
        // load the utils script
        intlTelInputGlobals.loadUtils = function(path) {
            // 2 options:
            // 1) not already started loading (start)
            // 2) already started loading (do nothing - just wait for the onload callback to fire, which will
            // trigger handleUtils on all instances, invoking their resolveUtilsScriptPromise functions)
            if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
                // only do this once
                window.intlTelInputGlobals.startedLoadingUtilsScript = true;
                // if we have promises, then return a promise
                if (typeof Promise !== "undefined") return new Promise(function(resolve, reject) {
                    return injectScript(path, resolve, reject);
                });
                injectScript(path);
            }
            return null;
        };
        // default options
        intlTelInputGlobals.defaults = defaults;
        // version
        intlTelInputGlobals.version = "18.1.7";
        // convenience wrapper
        return function(input, options) {
            var iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id);
            window.intlTelInputGlobals.instances[iti.id] = iti;
            return iti;
        };
    }();
});

},{}],"kdlim":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UserService", ()=>UserService);
class UserService {
    static async sendUserData(data) {
        const body = new FormData();
        Object.entries(data).forEach(([name, value])=>{
            if (data[name] instanceof File) {
                body.append(name, value);
                return;
            }
            if (typeof data[name] === "object") {
                body.append(name, JSON.stringify(value));
                return;
            }
            body.append(name, value);
        });
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res(body);
            }, 3000);
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLmfy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InformationPanelService", ()=>InformationPanelService);
class InformationPanelService {
    static ROOT_NODE_BY_ID = "#informations-stepper";
    static ACTIVE_CLASS = "informations-stepper__item-active";
    static HIDE_ROOT_NODE_CLASS = "hide";
    static informationStepsRoot = document.querySelector(InformationPanelService.ROOT_NODE_BY_ID);
    constructor(options = {
        handleContinueBtnClick: ()=>{},
        handleCancelBtnClick: ()=>{}
    }){
        if (!InformationPanelService) {
            console.error(`Not found informationStepsRoot`);
            return;
        }
        this.options = options;
        this.informationSteps = InformationPanelService.informationStepsRoot.querySelectorAll(".informations-stepper__item");
        this.#setup();
    }
    deleteActiveInformationSteps() {
        this.informationSteps.forEach((step)=>step.classList.remove(InformationPanelService.ACTIVE_CLASS));
    }
    activeInformationStep(step) {
        step.classList.add(InformationPanelService.ACTIVE_CLASS);
    }
    static hide() {
        InformationPanelService.informationStepsRoot.classList.add(InformationPanelService.HIDE_ROOT_NODE_CLASS);
    }
    static show() {
        InformationPanelService.informationStepsRoot.classList.remove(InformationPanelService.HIDE_ROOT_NODE_CLASS);
    }
    static toggleShowHide() {
        InformationPanelService.informationStepsRoot.classList.toggle(InformationPanelService.HIDE_ROOT_NODE_CLASS);
    }
    handleInformationSteps(e) {
        const target = e.target;
        if (!target.matches("[data-btn]")) return;
        const btn = target.dataset.btn;
        const continueBtn = btn === "continue";
        const cancelBtn = btn === "cancel"; //??? what happen when i click cancel btn????
        if (continueBtn) {
            this.options.handleContinueBtnClick?.();
            return;
        }
        if (cancelBtn) {
            this.options.handleCancelBtnClick?.();
            return;
        }
    }
    getContinueInformationStep() {
        return this.informationSteps[0];
    }
    getExpiresInformationStep() {
        return this.informationSteps[1];
    }
    getSuccessInformationStep() {
        return this.informationSteps[2];
    }
    #setup() {
        InformationPanelService.informationStepsRoot.addEventListener("click", this.handleInformationSteps.bind(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5QWwT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleRenderFormOrInformationPanel", ()=>toggleRenderFormOrInformationPanel);
var _formService = require("../services/FormService");
var _informationPanelService = require("../services/InformationPanelService");
function toggleRenderFormOrInformationPanel() {
    (0, _formService.FormService).toggleShowHideFormById("form");
    (0, _informationPanelService.InformationPanelService).toggleShowHide();
}

},{"../services/FormService":"u4Saz","../services/InformationPanelService":"jLmfy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eGgmI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEllapsedTimeStatus", ()=>getEllapsedTimeStatus);
const remainingTimeInMinutes = 30;
const getEllapsedTimeStatus = (created_date)=>{
    const currentDate = Date.now();
    const createdDate = created_date;
    const elapsedTime = currentDate - createdDate;
    const elapsedMinutes = elapsedTime / 60000; // translate to minutes;
    return elapsedMinutes >= remainingTimeInMinutes;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9LSIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ModalService", ()=>ModalService);
class ModalService {
    showClass = "open";
    constructor({ id , closeId  }){
        if (!id) throw new Error(`Not found modal by this id: ${id}`);
        if (!closeId) throw new Error(`Not found elem id for close modal: ${closeId}`);
        this.$modal = document.querySelector(`#${id}`);
        this.$closeElem = this.$modal.querySelector(`#${closeId}`);
        this.#setup();
    }
    show() {
        this.$modal.classList.add(this.showClass);
    }
    hide() {
        this.$modal.classList.remove(this.showClass);
    }
    toggle() {
        this.$modal.classList.toggle(this.showClass, !this.$modal.classList.contains(this.showClass));
    }
    #setup() {
        this.$closeElem.addEventListener("click", this.hide.bind(this));
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kSCKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "handleCustomValidateFieldsForMultiForm", ()=>handleCustomValidateFieldsForMultiForm);
var _constants = require("../constants");
function handleCustomValidateFieldsForMultiForm(input, { isNotRequiredButMustValidate , configurationErrorHandling  } // errors, invalidField, isEmpty, errorMessage
) {
    if (input.type === "text" && !input.matches("[data-date-of-birth]")) {
        if (!input.value.length && !isNotRequiredButMustValidate) {
            ++configurationErrorHandling.errors;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
        } else configurationErrorHandling.isEmpty = false;
    }
    if (input.matches("[data-date-of-birth]")) {
        const currentDate = new Date();
        const minDate = new Date("1952-12-01");
        const selectedDate = input.value;
        if (isNotRequiredButMustValidate && selectedDate === "YYYY.MM.DD") {
            configurationErrorHandling.isEmpty = true;
            return;
        }
        if (selectedDate.length !== 10) {
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
        } else configurationErrorHandling.isEmpty = false;
        if (selectedDate.includes("M") || selectedDate.includes("D") || selectedDate.includes("Y")) {
            configurationErrorHandling.isEmpty = false;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageDateOfBirth);
        }
        if (new Date(selectedDate) > currentDate || new Date(selectedDate) < minDate) {
            configurationErrorHandling.isEmpty = false;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageDateOfBirth);
        }
    }
    if (input.matches("[data-age]")) {
        let selectedValue = parseInt(input.value);
        if (isNaN(selectedValue)) selectedValue = 0;
        if (isNotRequiredButMustValidate && selectedValue === 0) {
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.errors = 0;
            configurationErrorHandling.errorMessage = "";
            return;
        }
        if (selectedValue === 0) {
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
        } else configurationErrorHandling.isEmpty = false;
    }
    if (input.matches("[data-input-tel]")) {
        const emptyFieldRegex = /^[^0-9]*$/;
        const phoneValue = input.value;
        if (phoneValue.includes("_")) {
            configurationErrorHandling.isEmpty = false;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessagePhone);
        }
        if (emptyFieldRegex.test(phoneValue)) {
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
        } else configurationErrorHandling.isEmpty = false;
        return;
    }
    if (input.matches("[data-input-tel]")) {
        const emptyFieldRegex = /^[^0-9]*$/;
        const phoneValue = input.value;
        const secondPartValue = phoneValue.split(" ")[1];
        if (emptyFieldRegex.test(secondPartValue)) {
            if (isNotRequiredButMustValidate) return;
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessageRequiredField);
            return;
        }
        if (secondPartValue.includes("_")) {
            configurationErrorHandling.isEmpty = false;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = (0, _constants.errorMessagePhone);
        }
        return;
    }
    if (input.type === "checkbox" || input.matches("[data-checkbox-privacy-policy]")) {
        const isChecked = input.checked;
        if (isNotRequiredButMustValidate) return;
        if (!isChecked) {
            configurationErrorHandling.isEmpty = true;
            configurationErrorHandling.invalidField = input;
            configurationErrorHandling.errors = ++configurationErrorHandling.errors;
            configurationErrorHandling.errorMessage = "";
        } else configurationErrorHandling.isEmpty = true;
    }
}

},{"../constants":"5cvxR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aSOSS":[function() {},{}]},["Q3QBE","fFaKF"], "fFaKF", "parcelRequiref4c7")

//# sourceMappingURL=index.0fbc91cd.js.map
