"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.tsx
var games_exports = {};
__export(games_exports, {
  CardPicker: () => CardPicker,
  TopNumber: () => TopNumber
});
module.exports = __toCommonJS(games_exports);

// CardPicker.tsx
var import_react = require("react");
var import_core = require("@mantine/core");
var import_lodash = require("lodash");
var import_ui = require("ui");
var import_jsx_runtime = require("react/jsx-runtime");
var OPTIONS = [10, 5, 2, -1, -2];
var CardPicker = () => {
  const [cards, setCards] = (0, import_react.useState)((0, import_lodash.shuffle)(OPTIONS));
  const [played, setPlayed] = (0, import_react.useState)(null);
  const { addToScore, user } = (0, import_ui.useAppShell)();
  const handleSelectCard = (card, index) => {
    addToScore(card);
    setPlayed(index);
  };
  if (played !== null) {
    setTimeout(() => {
      setCards((0, import_lodash.shuffle)(OPTIONS));
      setPlayed(null);
    }, 3e3);
  }
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Paper, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Title, { children: "Card Picker!!!" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Text, { children: "Please login to play" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_core.Paper, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Title, { sx: { marginBlockEnd: 10 }, children: " Pick a card. Good Luck! \u{1F320}" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_core.Box,
      {
        sx: {
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: "1rem"
        },
        children: cards.map((card, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_core.Button,
          {
            variant: "gradient",
            disabled: played !== null && index !== played,
            p: 5,
            sx: {
              borderRadius: 15,
              height: 200,
              border: "5px solid black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            onClick: () => {
              played === null && handleSelectCard(card, index);
            },
            children: played !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_core.Text, { sx: { fontSize: "40pt" }, children: card })
          },
          index
        ))
      }
    )
  ] });
};

// TopNumber.tsx
var import_react2 = require("react");
var import_core2 = require("@mantine/core");
var import_ui2 = require("ui");
var import_jsx_runtime2 = require("react/jsx-runtime");
var pickNumber = () => Math.ceil(Math.random() * 10) + 2;
var TopNumber = () => {
  const [topNumber, setTopNumber] = (0, import_react2.useState)(0);
  const [playing, setPlaying] = (0, import_react2.useState)(false);
  const [currentValue, setCurrentValue] = (0, import_react2.useState)(0);
  const { addToScore, user } = (0, import_ui2.useAppShell)();
  (0, import_react2.useEffect)(() => {
    if (playing) {
      const timer = setTimeout(() => {
        if (currentValue < topNumber) {
          setCurrentValue(currentValue + 1);
        } else {
          addToScore(-1);
          setCurrentValue(0);
          setPlaying(false);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [playing, topNumber, currentValue, addToScore]);
  if (!user) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_core2.Paper, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core2.Title, { children: "Top Number!!!" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core2.Text, { children: "Log in to play!" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_core2.Paper, { shadow: "sm", radius: "md", p: "md", m: "10", withBorder: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_core2.Title, { children: " How high can you do it? \u{1F601} " }),
    playing && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_core2.Button,
      {
        mt: "md",
        variant: "outline",
        color: "violet",
        size: "xl",
        fullWidth: true,
        onClick: () => {
          addToScore(currentValue);
          setCurrentValue(0);
          setPlaying(false);
        },
        children: [
          currentValue,
          " - Snag It!"
        ]
      }
    ),
    !playing && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_core2.Button,
      {
        mt: "md",
        size: "xl",
        fullWidth: true,
        onClick: () => {
          setPlaying(true);
          setTopNumber(pickNumber());
        },
        children: "Play"
      }
    )
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CardPicker,
  TopNumber
});
