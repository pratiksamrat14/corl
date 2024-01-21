import { INCREMENT } from "../action/sample";

const initialState = {
    count: 0,
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case INCREMENT: {
            return {
                ...state,
                count: payload,
            }
        }

        default: {
            return {
                ...state,
            }
        }
    }
}