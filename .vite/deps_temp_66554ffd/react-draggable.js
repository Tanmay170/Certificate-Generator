import {
  require_react_dom
} from "./chunk-ZIYUGMGG.js";
import {
  require_prop_types
} from "./chunk-RZVJAJWH.js";
import {
  require_react
} from "./chunk-65KY755N.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-V4OQ3NZ2.js";

// node_modules/clsx/dist/clsx.m.js
var clsx_m_exports = {};
__export(clsx_m_exports, {
  clsx: () => clsx,
  default: () => clsx_m_default
});
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = ""; f < arguments.length; ) (e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_m_default;
var init_clsx_m = __esm({
  "node_modules/clsx/dist/clsx.m.js"() {
    clsx_m_default = clsx;
  }
});

// node_modules/react-draggable/build/cjs/utils/shims.js
var require_shims = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/shims.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.dontSetMe = dontSetMe;
    exports.findInArray = findInArray;
    exports.int = int;
    exports.isFunction = isFunction;
    exports.isNum = isNum;
    function findInArray(array, callback) {
      for (let i = 0, length = array.length; i < length; i++) {
        if (callback.apply(callback, [array[i], i, array])) return array[i];
      }
    }
    function isFunction(func) {
      return typeof func === "function" || Object.prototype.toString.call(func) === "[object Function]";
    }
    function isNum(num) {
      return typeof num === "number" && !isNaN(num);
    }
    function int(a) {
      return parseInt(a, 10);
    }
    function dontSetMe(props, propName, componentName) {
      if (props[propName]) {
        return new Error("Invalid prop ".concat(propName, " passed to ").concat(componentName, " - do not set this, set it on the child."));
      }
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/getPrefix.js
var require_getPrefix = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/getPrefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.browserPrefixToKey = browserPrefixToKey;
    exports.browserPrefixToStyle = browserPrefixToStyle;
    exports.default = void 0;
    exports.getPrefix = getPrefix;
    var prefixes = ["Moz", "Webkit", "O", "ms"];
    function getPrefix() {
      var _window$document;
      let prop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
      if (typeof window === "undefined") return "";
      const style = (_window$document = window.document) === null || _window$document === void 0 || (_window$document = _window$document.documentElement) === null || _window$document === void 0 ? void 0 : _window$document.style;
      if (!style) return "";
      if (prop in style) return "";
      for (let i = 0; i < prefixes.length; i++) {
        if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
      }
      return "";
    }
    function browserPrefixToKey(prop, prefix) {
      return prefix ? "".concat(prefix).concat(kebabToTitleCase(prop)) : prop;
    }
    function browserPrefixToStyle(prop, prefix) {
      return prefix ? "-".concat(prefix.toLowerCase(), "-").concat(prop) : prop;
    }
    function kebabToTitleCase(str) {
      let out = "";
      let shouldCapitalize = true;
      for (let i = 0; i < str.length; i++) {
        if (shouldCapitalize) {
          out += str[i].toUpperCase();
          shouldCapitalize = false;
        } else if (str[i] === "-") {
          shouldCapitalize = true;
        } else {
          out += str[i];
        }
      }
      return out;
    }
    var _default = exports.default = getPrefix();
  }
});

// node_modules/react-draggable/build/cjs/utils/domFns.js
var require_domFns = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/domFns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addClassName = addClassName;
    exports.addEvent = addEvent;
    exports.addUserSelectStyles = addUserSelectStyles;
    exports.createCSSTransform = createCSSTransform;
    exports.createSVGTransform = createSVGTransform;
    exports.getTouch = getTouch;
    exports.getTouchIdentifier = getTouchIdentifier;
    exports.getTranslation = getTranslation;
    exports.innerHeight = innerHeight;
    exports.innerWidth = innerWidth;
    exports.matchesSelector = matchesSelector;
    exports.matchesSelectorAndParentsTo = matchesSelectorAndParentsTo;
    exports.offsetXYFromParent = offsetXYFromParent;
    exports.outerHeight = outerHeight;
    exports.outerWidth = outerWidth;
    exports.removeClassName = removeClassName;
    exports.removeEvent = removeEvent;
    exports.removeUserSelectStyles = removeUserSelectStyles;
    var _shims = require_shims();
    var _getPrefix = _interopRequireWildcard(require_getPrefix());
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var matchesSelectorFunc = "";
    function matchesSelector(el, selector) {
      if (!matchesSelectorFunc) {
        matchesSelectorFunc = (0, _shims.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], function(method) {
          return (0, _shims.isFunction)(el[method]);
        });
      }
      if (!(0, _shims.isFunction)(el[matchesSelectorFunc])) return false;
      return el[matchesSelectorFunc](selector);
    }
    function matchesSelectorAndParentsTo(el, selector, baseNode) {
      let node = el;
      do {
        if (matchesSelector(node, selector)) return true;
        if (node === baseNode) return false;
        node = node.parentNode;
      } while (node);
      return false;
    }
    function addEvent(el, event, handler, inputOptions) {
      if (!el) return;
      const options = {
        capture: true,
        ...inputOptions
      };
      if (el.addEventListener) {
        el.addEventListener(event, handler, options);
      } else if (el.attachEvent) {
        el.attachEvent("on" + event, handler);
      } else {
        el["on" + event] = handler;
      }
    }
    function removeEvent(el, event, handler, inputOptions) {
      if (!el) return;
      const options = {
        capture: true,
        ...inputOptions
      };
      if (el.removeEventListener) {
        el.removeEventListener(event, handler, options);
      } else if (el.detachEvent) {
        el.detachEvent("on" + event, handler);
      } else {
        el["on" + event] = null;
      }
    }
    function outerHeight(node) {
      let height = node.clientHeight;
      const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      height += (0, _shims.int)(computedStyle.borderTopWidth);
      height += (0, _shims.int)(computedStyle.borderBottomWidth);
      return height;
    }
    function outerWidth(node) {
      let width = node.clientWidth;
      const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      width += (0, _shims.int)(computedStyle.borderLeftWidth);
      width += (0, _shims.int)(computedStyle.borderRightWidth);
      return width;
    }
    function innerHeight(node) {
      let height = node.clientHeight;
      const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      height -= (0, _shims.int)(computedStyle.paddingTop);
      height -= (0, _shims.int)(computedStyle.paddingBottom);
      return height;
    }
    function innerWidth(node) {
      let width = node.clientWidth;
      const computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
      width -= (0, _shims.int)(computedStyle.paddingLeft);
      width -= (0, _shims.int)(computedStyle.paddingRight);
      return width;
    }
    function offsetXYFromParent(evt, offsetParent, scale) {
      const isBody = offsetParent === offsetParent.ownerDocument.body;
      const offsetParentRect = isBody ? {
        left: 0,
        top: 0
      } : offsetParent.getBoundingClientRect();
      const x = (evt.clientX + offsetParent.scrollLeft - offsetParentRect.left) / scale;
      const y = (evt.clientY + offsetParent.scrollTop - offsetParentRect.top) / scale;
      return {
        x,
        y
      };
    }
    function createCSSTransform(controlPos, positionOffset) {
      const translation = getTranslation(controlPos, positionOffset, "px");
      return {
        [(0, _getPrefix.browserPrefixToKey)("transform", _getPrefix.default)]: translation
      };
    }
    function createSVGTransform(controlPos, positionOffset) {
      const translation = getTranslation(controlPos, positionOffset, "");
      return translation;
    }
    function getTranslation(_ref, positionOffset, unitSuffix) {
      let {
        x,
        y
      } = _ref;
      let translation = "translate(".concat(x).concat(unitSuffix, ",").concat(y).concat(unitSuffix, ")");
      if (positionOffset) {
        const defaultX = "".concat(typeof positionOffset.x === "string" ? positionOffset.x : positionOffset.x + unitSuffix);
        const defaultY = "".concat(typeof positionOffset.y === "string" ? positionOffset.y : positionOffset.y + unitSuffix);
        translation = "translate(".concat(defaultX, ", ").concat(defaultY, ")") + translation;
      }
      return translation;
    }
    function getTouch(e, identifier) {
      return e.targetTouches && (0, _shims.findInArray)(e.targetTouches, (t) => identifier === t.identifier) || e.changedTouches && (0, _shims.findInArray)(e.changedTouches, (t) => identifier === t.identifier);
    }
    function getTouchIdentifier(e) {
      if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
      if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
    }
    function addUserSelectStyles(doc) {
      if (!doc) return;
      let styleEl = doc.getElementById("react-draggable-style-el");
      if (!styleEl) {
        styleEl = doc.createElement("style");
        styleEl.type = "text/css";
        styleEl.id = "react-draggable-style-el";
        styleEl.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n";
        styleEl.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n";
        doc.getElementsByTagName("head")[0].appendChild(styleEl);
      }
      if (doc.body) addClassName(doc.body, "react-draggable-transparent-selection");
    }
    function removeUserSelectStyles(doc) {
      if (!doc) return;
      try {
        if (doc.body) removeClassName(doc.body, "react-draggable-transparent-selection");
        if (doc.selection) {
          doc.selection.empty();
        } else {
          const selection = (doc.defaultView || window).getSelection();
          if (selection && selection.type !== "Caret") {
            selection.removeAllRanges();
          }
        }
      } catch (e) {
      }
    }
    function addClassName(el, className) {
      if (el.classList) {
        el.classList.add(className);
      } else {
        if (!el.className.match(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)")))) {
          el.className += " ".concat(className);
        }
      }
    }
    function removeClassName(el, className) {
      if (el.classList) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(?:^|\\s)".concat(className, "(?!\\S)"), "g"), "");
      }
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/positionFns.js
var require_positionFns = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/positionFns.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.canDragX = canDragX;
    exports.canDragY = canDragY;
    exports.createCoreData = createCoreData;
    exports.createDraggableData = createDraggableData;
    exports.getBoundPosition = getBoundPosition;
    exports.getControlPosition = getControlPosition;
    exports.snapToGrid = snapToGrid;
    var _shims = require_shims();
    var _domFns = require_domFns();
    function getBoundPosition(draggable, x, y) {
      if (!draggable.props.bounds) return [x, y];
      let {
        bounds
      } = draggable.props;
      bounds = typeof bounds === "string" ? bounds : cloneBounds(bounds);
      const node = findDOMNode(draggable);
      if (typeof bounds === "string") {
        const {
          ownerDocument
        } = node;
        const ownerWindow = ownerDocument.defaultView;
        let boundNode;
        if (bounds === "parent") {
          boundNode = node.parentNode;
        } else {
          boundNode = ownerDocument.querySelector(bounds);
        }
        if (!(boundNode instanceof ownerWindow.HTMLElement)) {
          throw new Error('Bounds selector "' + bounds + '" could not find an element.');
        }
        const boundNodeEl = boundNode;
        const nodeStyle = ownerWindow.getComputedStyle(node);
        const boundNodeStyle = ownerWindow.getComputedStyle(boundNodeEl);
        bounds = {
          left: -node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingLeft) + (0, _shims.int)(nodeStyle.marginLeft),
          top: -node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingTop) + (0, _shims.int)(nodeStyle.marginTop),
          right: (0, _domFns.innerWidth)(boundNodeEl) - (0, _domFns.outerWidth)(node) - node.offsetLeft + (0, _shims.int)(boundNodeStyle.paddingRight) - (0, _shims.int)(nodeStyle.marginRight),
          bottom: (0, _domFns.innerHeight)(boundNodeEl) - (0, _domFns.outerHeight)(node) - node.offsetTop + (0, _shims.int)(boundNodeStyle.paddingBottom) - (0, _shims.int)(nodeStyle.marginBottom)
        };
      }
      if ((0, _shims.isNum)(bounds.right)) x = Math.min(x, bounds.right);
      if ((0, _shims.isNum)(bounds.bottom)) y = Math.min(y, bounds.bottom);
      if ((0, _shims.isNum)(bounds.left)) x = Math.max(x, bounds.left);
      if ((0, _shims.isNum)(bounds.top)) y = Math.max(y, bounds.top);
      return [x, y];
    }
    function snapToGrid(grid, pendingX, pendingY) {
      const x = Math.round(pendingX / grid[0]) * grid[0];
      const y = Math.round(pendingY / grid[1]) * grid[1];
      return [x, y];
    }
    function canDragX(draggable) {
      return draggable.props.axis === "both" || draggable.props.axis === "x";
    }
    function canDragY(draggable) {
      return draggable.props.axis === "both" || draggable.props.axis === "y";
    }
    function getControlPosition(e, touchIdentifier, draggableCore) {
      const touchObj = typeof touchIdentifier === "number" ? (0, _domFns.getTouch)(e, touchIdentifier) : null;
      if (typeof touchIdentifier === "number" && !touchObj) return null;
      const node = findDOMNode(draggableCore);
      const offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
      return (0, _domFns.offsetXYFromParent)(touchObj || e, offsetParent, draggableCore.props.scale);
    }
    function createCoreData(draggable, x, y) {
      const isStart = !(0, _shims.isNum)(draggable.lastX);
      const node = findDOMNode(draggable);
      if (isStart) {
        return {
          node,
          deltaX: 0,
          deltaY: 0,
          lastX: x,
          lastY: y,
          x,
          y
        };
      } else {
        return {
          node,
          deltaX: x - draggable.lastX,
          deltaY: y - draggable.lastY,
          lastX: draggable.lastX,
          lastY: draggable.lastY,
          x,
          y
        };
      }
    }
    function createDraggableData(draggable, coreData) {
      const scale = draggable.props.scale;
      return {
        node: coreData.node,
        x: draggable.state.x + coreData.deltaX / scale,
        y: draggable.state.y + coreData.deltaY / scale,
        deltaX: coreData.deltaX / scale,
        deltaY: coreData.deltaY / scale,
        lastX: draggable.state.x,
        lastY: draggable.state.y
      };
    }
    function cloneBounds(bounds) {
      return {
        left: bounds.left,
        top: bounds.top,
        right: bounds.right,
        bottom: bounds.bottom
      };
    }
    function findDOMNode(draggable) {
      const node = draggable.findDOMNode();
      if (!node) {
        throw new Error("<DraggableCore>: Unmounted during event!");
      }
      return node;
    }
  }
});

// node_modules/react-draggable/build/cjs/utils/log.js
var require_log = __commonJS({
  "node_modules/react-draggable/build/cjs/utils/log.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = log;
    function log() {
      if (void 0) console.log(...arguments);
    }
  }
});

// node_modules/react-draggable/build/cjs/DraggableCore.js
var require_DraggableCore = __commonJS({
  "node_modules/react-draggable/build/cjs/DraggableCore.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _domFns = require_domFns();
    var _positionFns = require_positionFns();
    var _shims = require_shims();
    var _log = _interopRequireDefault(require_log());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var eventsFor = {
      touch: {
        start: "touchstart",
        move: "touchmove",
        stop: "touchend"
      },
      mouse: {
        start: "mousedown",
        move: "mousemove",
        stop: "mouseup"
      }
    };
    var dragEventFor = eventsFor.mouse;
    var DraggableCore = class extends React.Component {
      constructor() {
        super(...arguments);
        _defineProperty(this, "dragging", false);
        _defineProperty(this, "lastX", NaN);
        _defineProperty(this, "lastY", NaN);
        _defineProperty(this, "touchIdentifier", null);
        _defineProperty(this, "mounted", false);
        _defineProperty(this, "handleDragStart", (e) => {
          this.props.onMouseDown(e);
          if (!this.props.allowAnyClick && typeof e.button === "number" && e.button !== 0) return false;
          const thisNode = this.findDOMNode();
          if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
            throw new Error("<DraggableCore> not mounted on DragStart!");
          }
          const {
            ownerDocument
          } = thisNode;
          if (this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || this.props.handle && !(0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.handle, thisNode) || this.props.cancel && (0, _domFns.matchesSelectorAndParentsTo)(e.target, this.props.cancel, thisNode)) {
            return;
          }
          if (e.type === "touchstart") e.preventDefault();
          const touchIdentifier = (0, _domFns.getTouchIdentifier)(e);
          this.touchIdentifier = touchIdentifier;
          const position = (0, _positionFns.getControlPosition)(e, touchIdentifier, this);
          if (position == null) return;
          const {
            x,
            y
          } = position;
          const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
          (0, _log.default)("DraggableCore: handleDragStart: %j", coreEvent);
          (0, _log.default)("calling", this.props.onStart);
          const shouldUpdate = this.props.onStart(e, coreEvent);
          if (shouldUpdate === false || this.mounted === false) return;
          if (this.props.enableUserSelectHack) (0, _domFns.addUserSelectStyles)(ownerDocument);
          this.dragging = true;
          this.lastX = x;
          this.lastY = y;
          (0, _domFns.addEvent)(ownerDocument, dragEventFor.move, this.handleDrag);
          (0, _domFns.addEvent)(ownerDocument, dragEventFor.stop, this.handleDragStop);
        });
        _defineProperty(this, "handleDrag", (e) => {
          const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
          if (position == null) return;
          let {
            x,
            y
          } = position;
          if (Array.isArray(this.props.grid)) {
            let deltaX = x - this.lastX, deltaY = y - this.lastY;
            [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
            if (!deltaX && !deltaY) return;
            x = this.lastX + deltaX, y = this.lastY + deltaY;
          }
          const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
          (0, _log.default)("DraggableCore: handleDrag: %j", coreEvent);
          const shouldUpdate = this.props.onDrag(e, coreEvent);
          if (shouldUpdate === false || this.mounted === false) {
            try {
              this.handleDragStop(new MouseEvent("mouseup"));
            } catch (err) {
              const event = document.createEvent("MouseEvents");
              event.initMouseEvent("mouseup", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
              this.handleDragStop(event);
            }
            return;
          }
          this.lastX = x;
          this.lastY = y;
        });
        _defineProperty(this, "handleDragStop", (e) => {
          if (!this.dragging) return;
          const position = (0, _positionFns.getControlPosition)(e, this.touchIdentifier, this);
          if (position == null) return;
          let {
            x,
            y
          } = position;
          if (Array.isArray(this.props.grid)) {
            let deltaX = x - this.lastX || 0;
            let deltaY = y - this.lastY || 0;
            [deltaX, deltaY] = (0, _positionFns.snapToGrid)(this.props.grid, deltaX, deltaY);
            x = this.lastX + deltaX, y = this.lastY + deltaY;
          }
          const coreEvent = (0, _positionFns.createCoreData)(this, x, y);
          const shouldContinue = this.props.onStop(e, coreEvent);
          if (shouldContinue === false || this.mounted === false) return false;
          const thisNode = this.findDOMNode();
          if (thisNode) {
            if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(thisNode.ownerDocument);
          }
          (0, _log.default)("DraggableCore: handleDragStop: %j", coreEvent);
          this.dragging = false;
          this.lastX = NaN;
          this.lastY = NaN;
          if (thisNode) {
            (0, _log.default)("DraggableCore: Removing handlers");
            (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.move, this.handleDrag);
            (0, _domFns.removeEvent)(thisNode.ownerDocument, dragEventFor.stop, this.handleDragStop);
          }
        });
        _defineProperty(this, "onMouseDown", (e) => {
          dragEventFor = eventsFor.mouse;
          return this.handleDragStart(e);
        });
        _defineProperty(this, "onMouseUp", (e) => {
          dragEventFor = eventsFor.mouse;
          return this.handleDragStop(e);
        });
        _defineProperty(this, "onTouchStart", (e) => {
          dragEventFor = eventsFor.touch;
          return this.handleDragStart(e);
        });
        _defineProperty(this, "onTouchEnd", (e) => {
          dragEventFor = eventsFor.touch;
          return this.handleDragStop(e);
        });
      }
      componentDidMount() {
        this.mounted = true;
        const thisNode = this.findDOMNode();
        if (thisNode) {
          (0, _domFns.addEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
            passive: false
          });
        }
      }
      componentWillUnmount() {
        this.mounted = false;
        const thisNode = this.findDOMNode();
        if (thisNode) {
          const {
            ownerDocument
          } = thisNode;
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.move, this.handleDrag);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.move, this.handleDrag);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
          (0, _domFns.removeEvent)(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
          (0, _domFns.removeEvent)(thisNode, eventsFor.touch.start, this.onTouchStart, {
            passive: false
          });
          if (this.props.enableUserSelectHack) (0, _domFns.removeUserSelectStyles)(ownerDocument);
        }
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
      findDOMNode() {
        var _this$props, _this$props2;
        return (_this$props = this.props) !== null && _this$props !== void 0 && _this$props.nodeRef ? (_this$props2 = this.props) === null || _this$props2 === void 0 || (_this$props2 = _this$props2.nodeRef) === null || _this$props2 === void 0 ? void 0 : _this$props2.current : _reactDom.default.findDOMNode(this);
      }
      render() {
        return React.cloneElement(React.Children.only(this.props.children), {
          // Note: mouseMove handler is attached to document so it will still function
          // when the user drags quickly and leaves the bounds of the element.
          onMouseDown: this.onMouseDown,
          onMouseUp: this.onMouseUp,
          // onTouchStart is added on `componentDidMount` so they can be added with
          // {passive: false}, which allows it to cancel. See
          // https://developers.google.com/web/updates/2017/01/scrolling-intervention
          onTouchEnd: this.onTouchEnd
        });
      }
    };
    exports.default = DraggableCore;
    _defineProperty(DraggableCore, "displayName", "DraggableCore");
    _defineProperty(DraggableCore, "propTypes", {
      /**
       * `allowAnyClick` allows dragging using any mouse button.
       * By default, we only accept the left button.
       *
       * Defaults to `false`.
       */
      allowAnyClick: _propTypes.default.bool,
      children: _propTypes.default.node.isRequired,
      /**
       * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
       * with the exception of `onMouseDown`, will not fire.
       */
      disabled: _propTypes.default.bool,
      /**
       * By default, we add 'user-select:none' attributes to the document body
       * to prevent ugly text selection during drag. If this is causing problems
       * for your app, set this to `false`.
       */
      enableUserSelectHack: _propTypes.default.bool,
      /**
       * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
       * instead of using the parent node.
       */
      offsetParent: function(props, propName) {
        if (props[propName] && props[propName].nodeType !== 1) {
          throw new Error("Draggable's offsetParent must be a DOM Node.");
        }
      },
      /**
       * `grid` specifies the x and y that dragging should snap to.
       */
      grid: _propTypes.default.arrayOf(_propTypes.default.number),
      /**
       * `handle` specifies a selector to be used as the handle that initiates drag.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable handle=".handle">
       *              <div>
       *                  <div className="handle">Click me to drag</div>
       *                  <div>This is some other content</div>
       *              </div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      handle: _propTypes.default.string,
      /**
       * `cancel` specifies a selector to be used to prevent drag initialization.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *           return(
       *               <Draggable cancel=".cancel">
       *                   <div>
       *                     <div className="cancel">You can't drag from here</div>
       *                     <div>Dragging here works fine</div>
       *                   </div>
       *               </Draggable>
       *           );
       *       }
       *   });
       * ```
       */
      cancel: _propTypes.default.string,
      /* If running in React Strict mode, ReactDOM.findDOMNode() is deprecated.
       * Unfortunately, in order for <Draggable> to work properly, we need raw access
       * to the underlying DOM node. If you want to avoid the warning, pass a `nodeRef`
       * as in this example:
       *
       * function MyComponent() {
       *   const nodeRef = React.useRef(null);
       *   return (
       *     <Draggable nodeRef={nodeRef}>
       *       <div ref={nodeRef}>Example Target</div>
       *     </Draggable>
       *   );
       * }
       *
       * This can be used for arbitrarily nested components, so long as the ref ends up
       * pointing to the actual child DOM node and not a custom component.
       */
      nodeRef: _propTypes.default.object,
      /**
       * Called when dragging starts.
       * If this function returns the boolean false, dragging will be canceled.
       */
      onStart: _propTypes.default.func,
      /**
       * Called while dragging.
       * If this function returns the boolean false, dragging will be canceled.
       */
      onDrag: _propTypes.default.func,
      /**
       * Called when dragging stops.
       * If this function returns the boolean false, the drag will remain active.
       */
      onStop: _propTypes.default.func,
      /**
       * A workaround option which can be passed if onMouseDown needs to be accessed,
       * since it'll always be blocked (as there is internal use of onMouseDown)
       */
      onMouseDown: _propTypes.default.func,
      /**
       * `scale`, if set, applies scaling while dragging an element
       */
      scale: _propTypes.default.number,
      /**
       * These properties should be defined on the child, not here.
       */
      className: _shims.dontSetMe,
      style: _shims.dontSetMe,
      transform: _shims.dontSetMe
    });
    _defineProperty(DraggableCore, "defaultProps", {
      allowAnyClick: false,
      // by default only accept left click
      disabled: false,
      enableUserSelectHack: true,
      onStart: function() {
      },
      onDrag: function() {
      },
      onStop: function() {
      },
      onMouseDown: function() {
      },
      scale: 1
    });
  }
});

// node_modules/react-draggable/build/cjs/Draggable.js
var require_Draggable = __commonJS({
  "node_modules/react-draggable/build/cjs/Draggable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "DraggableCore", {
      enumerable: true,
      get: function() {
        return _DraggableCore.default;
      }
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _propTypes = _interopRequireDefault(require_prop_types());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _clsx = _interopRequireDefault((init_clsx_m(), __toCommonJS(clsx_m_exports)));
    var _domFns = require_domFns();
    var _positionFns = require_positionFns();
    var _shims = require_shims();
    var _DraggableCore = _interopRequireDefault(require_DraggableCore());
    var _log = _interopRequireDefault(require_log());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    function _defineProperty(obj, key, value) {
      key = _toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _toPropertyKey(arg) {
      var key = _toPrimitive(arg, "string");
      return typeof key === "symbol" ? key : String(key);
    }
    function _toPrimitive(input, hint) {
      if (typeof input !== "object" || input === null) return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (typeof res !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    var Draggable = class extends React.Component {
      // React 16.3+
      // Arity (props, state)
      static getDerivedStateFromProps(_ref, _ref2) {
        let {
          position
        } = _ref;
        let {
          prevPropsPosition
        } = _ref2;
        if (position && (!prevPropsPosition || position.x !== prevPropsPosition.x || position.y !== prevPropsPosition.y)) {
          (0, _log.default)("Draggable: getDerivedStateFromProps %j", {
            position,
            prevPropsPosition
          });
          return {
            x: position.x,
            y: position.y,
            prevPropsPosition: {
              ...position
            }
          };
        }
        return null;
      }
      constructor(props) {
        super(props);
        _defineProperty(this, "onDragStart", (e, coreData) => {
          (0, _log.default)("Draggable: onDragStart: %j", coreData);
          const shouldStart = this.props.onStart(e, (0, _positionFns.createDraggableData)(this, coreData));
          if (shouldStart === false) return false;
          this.setState({
            dragging: true,
            dragged: true
          });
        });
        _defineProperty(this, "onDrag", (e, coreData) => {
          if (!this.state.dragging) return false;
          (0, _log.default)("Draggable: onDrag: %j", coreData);
          const uiData = (0, _positionFns.createDraggableData)(this, coreData);
          const newState = {
            x: uiData.x,
            y: uiData.y,
            slackX: 0,
            slackY: 0
          };
          if (this.props.bounds) {
            const {
              x,
              y
            } = newState;
            newState.x += this.state.slackX;
            newState.y += this.state.slackY;
            const [newStateX, newStateY] = (0, _positionFns.getBoundPosition)(this, newState.x, newState.y);
            newState.x = newStateX;
            newState.y = newStateY;
            newState.slackX = this.state.slackX + (x - newState.x);
            newState.slackY = this.state.slackY + (y - newState.y);
            uiData.x = newState.x;
            uiData.y = newState.y;
            uiData.deltaX = newState.x - this.state.x;
            uiData.deltaY = newState.y - this.state.y;
          }
          const shouldUpdate = this.props.onDrag(e, uiData);
          if (shouldUpdate === false) return false;
          this.setState(newState);
        });
        _defineProperty(this, "onDragStop", (e, coreData) => {
          if (!this.state.dragging) return false;
          const shouldContinue = this.props.onStop(e, (0, _positionFns.createDraggableData)(this, coreData));
          if (shouldContinue === false) return false;
          (0, _log.default)("Draggable: onDragStop: %j", coreData);
          const newState = {
            dragging: false,
            slackX: 0,
            slackY: 0
          };
          const controlled = Boolean(this.props.position);
          if (controlled) {
            const {
              x,
              y
            } = this.props.position;
            newState.x = x;
            newState.y = y;
          }
          this.setState(newState);
        });
        this.state = {
          // Whether or not we are currently dragging.
          dragging: false,
          // Whether or not we have been dragged before.
          dragged: false,
          // Current transform x and y.
          x: props.position ? props.position.x : props.defaultPosition.x,
          y: props.position ? props.position.y : props.defaultPosition.y,
          prevPropsPosition: {
            ...props.position
          },
          // Used for compensating for out-of-bounds drags
          slackX: 0,
          slackY: 0,
          // Can only determine if SVG after mounting
          isElementSVG: false
        };
        if (props.position && !(props.onDrag || props.onStop)) {
          console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.");
        }
      }
      componentDidMount() {
        if (typeof window.SVGElement !== "undefined" && this.findDOMNode() instanceof window.SVGElement) {
          this.setState({
            isElementSVG: true
          });
        }
      }
      componentWillUnmount() {
        this.setState({
          dragging: false
        });
      }
      // React Strict Mode compatibility: if `nodeRef` is passed, we will use it instead of trying to find
      // the underlying DOM node ourselves. See the README for more information.
      findDOMNode() {
        var _this$props$nodeRef$c, _this$props;
        return (_this$props$nodeRef$c = (_this$props = this.props) === null || _this$props === void 0 || (_this$props = _this$props.nodeRef) === null || _this$props === void 0 ? void 0 : _this$props.current) !== null && _this$props$nodeRef$c !== void 0 ? _this$props$nodeRef$c : _reactDom.default.findDOMNode(this);
      }
      render() {
        const {
          axis,
          bounds,
          children,
          defaultPosition,
          defaultClassName,
          defaultClassNameDragging,
          defaultClassNameDragged,
          position,
          positionOffset,
          scale,
          ...draggableCoreProps
        } = this.props;
        let style = {};
        let svgTransform = null;
        const controlled = Boolean(position);
        const draggable = !controlled || this.state.dragging;
        const validPosition = position || defaultPosition;
        const transformOpts = {
          // Set left if horizontal drag is enabled
          x: (0, _positionFns.canDragX)(this) && draggable ? this.state.x : validPosition.x,
          // Set top if vertical drag is enabled
          y: (0, _positionFns.canDragY)(this) && draggable ? this.state.y : validPosition.y
        };
        if (this.state.isElementSVG) {
          svgTransform = (0, _domFns.createSVGTransform)(transformOpts, positionOffset);
        } else {
          style = (0, _domFns.createCSSTransform)(transformOpts, positionOffset);
        }
        const className = (0, _clsx.default)(children.props.className || "", defaultClassName, {
          [defaultClassNameDragging]: this.state.dragging,
          [defaultClassNameDragged]: this.state.dragged
        });
        return React.createElement(_DraggableCore.default, _extends({}, draggableCoreProps, {
          onStart: this.onDragStart,
          onDrag: this.onDrag,
          onStop: this.onDragStop
        }), React.cloneElement(React.Children.only(children), {
          className,
          style: {
            ...children.props.style,
            ...style
          },
          transform: svgTransform
        }));
      }
    };
    exports.default = Draggable;
    _defineProperty(Draggable, "displayName", "Draggable");
    _defineProperty(Draggable, "propTypes", {
      // Accepts all props <DraggableCore> accepts.
      ..._DraggableCore.default.propTypes,
      /**
       * `axis` determines which axis the draggable can move.
       *
       *  Note that all callbacks will still return data as normal. This only
       *  controls flushing to the DOM.
       *
       * 'both' allows movement horizontally and vertically.
       * 'x' limits movement to horizontal axis.
       * 'y' limits movement to vertical axis.
       * 'none' limits all movement.
       *
       * Defaults to 'both'.
       */
      axis: _propTypes.default.oneOf(["both", "x", "y", "none"]),
      /**
       * `bounds` determines the range of movement available to the element.
       * Available values are:
       *
       * 'parent' restricts movement within the Draggable's parent node.
       *
       * Alternatively, pass an object with the following properties, all of which are optional:
       *
       * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
       *
       * All values are in px.
       *
       * Example:
       *
       * ```jsx
       *   let App = React.createClass({
       *       render: function () {
       *         return (
       *            <Draggable bounds={{right: 300, bottom: 300}}>
       *              <div>Content</div>
       *           </Draggable>
       *         );
       *       }
       *   });
       * ```
       */
      bounds: _propTypes.default.oneOfType([_propTypes.default.shape({
        left: _propTypes.default.number,
        right: _propTypes.default.number,
        top: _propTypes.default.number,
        bottom: _propTypes.default.number
      }), _propTypes.default.string, _propTypes.default.oneOf([false])]),
      defaultClassName: _propTypes.default.string,
      defaultClassNameDragging: _propTypes.default.string,
      defaultClassNameDragged: _propTypes.default.string,
      /**
       * `defaultPosition` specifies the x and y that the dragged item should start at
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable defaultPosition={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      defaultPosition: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
      }),
      positionOffset: _propTypes.default.shape({
        x: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
        y: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
      }),
      /**
       * `position`, if present, defines the current position of the element.
       *
       *  This is similar to how form elements in React work - if no `position` is supplied, the component
       *  is uncontrolled.
       *
       * Example:
       *
       * ```jsx
       *      let App = React.createClass({
       *          render: function () {
       *              return (
       *                  <Draggable position={{x: 25, y: 25}}>
       *                      <div>I start with transformX: 25px and transformY: 25px;</div>
       *                  </Draggable>
       *              );
       *          }
       *      });
       * ```
       */
      position: _propTypes.default.shape({
        x: _propTypes.default.number,
        y: _propTypes.default.number
      }),
      /**
       * These properties should be defined on the child, not here.
       */
      className: _shims.dontSetMe,
      style: _shims.dontSetMe,
      transform: _shims.dontSetMe
    });
    _defineProperty(Draggable, "defaultProps", {
      ..._DraggableCore.default.defaultProps,
      axis: "both",
      bounds: false,
      defaultClassName: "react-draggable",
      defaultClassNameDragging: "react-draggable-dragging",
      defaultClassNameDragged: "react-draggable-dragged",
      defaultPosition: {
        x: 0,
        y: 0
      },
      scale: 1
    });
  }
});

// node_modules/react-draggable/build/cjs/cjs.js
var require_cjs = __commonJS({
  "node_modules/react-draggable/build/cjs/cjs.js"(exports, module) {
    var {
      default: Draggable,
      DraggableCore
    } = require_Draggable();
    module.exports = Draggable;
    module.exports.default = Draggable;
    module.exports.DraggableCore = DraggableCore;
  }
});
export default require_cjs();
//# sourceMappingURL=react-draggable.js.map
