import React, { createContext, useReducer } from "react";
import { ListItem, Action } from "../data-access/models.interface"

export interface TodoState {
    isLoading: boolean;
    tasks: ListItem[];
}

const initialState: TodoState = {
    isLoading: false,
    tasks: []
}

export const GlobalState = createContext<{state: TodoState, dispatch: React.Dispatch<Action>}>({
    state: initialState,
    dispatch: () => null // Placeholder function
})

function tasksReducer(state: TodoState, action: Action) {
    switch (action.type) {
        case "ADD": 
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case "DEL": {
            const newTasksArray: ListItem[] = state.tasks;

            return {
                ...state,
                tasks: newTasksArray.filter((tasks: ListItem) => tasks.uuid !== action.payload.uuid)
            }
        }

        default:
            return state
    }
}

export function GlobalProvider({ children }: React.PropsWithChildren) {
    const [state, dispatch] = useReducer(tasksReducer, initialState);

    return (
        <GlobalState.Provider value={{ state, dispatch }}>
            {children}
        </GlobalState.Provider>
    );
}