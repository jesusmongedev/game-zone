// Shell.tsx
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme
} from "@mantine/core";
import { jsx, jsxs } from "react/jsx-runtime";
var Shell = ({ title, children }) => {
  const { user, score, setUser } = useAppShell();
  const theme = useMantineTheme();
  return /* @__PURE__ */ jsx(
    AppShell,
    {
      padding: "md",
      styles: {
        main: {
          background: theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[0]
        }
      },
      header: /* @__PURE__ */ jsxs(
        Header,
        {
          height: 60,
          p: "md",
          style: {
            display: "flex",
            background: theme.colors.blue[8],
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ jsx(
              Title,
              {
                style: {
                  color: "white",
                  flexGrow: 1
                },
                children: title
              }
            ),
            user && /* @__PURE__ */ jsxs(Box, { sx: { display: "flex", alignItems: "center" }, children: [
              /* @__PURE__ */ jsxs(
                Title,
                {
                  mr: "md",
                  style: {
                    color: "white"
                  },
                  children: [
                    "Hello ",
                    user,
                    " | ",
                    score
                  ]
                }
              ),
              /* @__PURE__ */ jsx(Button, { variant: "light", onClick: () => setUser(null), children: "Logout" })
            ] }),
            !user && /* @__PURE__ */ jsx(Button, { variant: "light", onClick: () => setUser("Jesus"), children: "Login" })
          ]
        }
      ),
      children
    }
  );
};

// useAppShell.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var useAppShell = create()(
  persist(
    (set, get) => ({
      user: null,
      score: 0,
      setUser: (user) => set({ user }),
      addToScore: (amount) => set({ score: get().score + amount })
    }),
    {
      name: "app-shell"
    }
  )
);
export {
  Shell,
  useAppShell
};
