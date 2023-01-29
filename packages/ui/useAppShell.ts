import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
    user: string | null;
    score: number;
    setUser: (user: string | null) => void;
    addToScore: (amount: number) => void;
};

export const useAppShell = create<Store>()(
    persist<Store>(
        (set, get) => ({
            user: null,
            score: 0,
            setUser: (user) => set(({ user })),
            addToScore: (amount) => set(({ score: get().score + amount })),
        }),
        {
            name: "app-shell",
        }
    )
);
