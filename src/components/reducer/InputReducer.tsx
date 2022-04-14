import { TypeInputAction } from "./Types";

const { ADD_TEXT, REMOVE_TEXT } = TypeInputAction;

interface InputField {
    name: string,
    data: string
}

interface InputState {
    values: InputField[],
}

export const initialInputState: InputState = {
    values: []
}

type InputAction = {
    type: TypeInputAction,
    payload: InputField
}

export const InputReducer = (state: InputState, action: InputAction) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                values: [...state.values, action.payload]
            }
        case REMOVE_TEXT:
            return {
                values: state.values.filter(item => item.name !== action.payload.name)
            }
        default:
            return state
    }
} 