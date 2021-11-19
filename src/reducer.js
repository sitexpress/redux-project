let lastId = 0;

export default function reducer(state = [], actions) {
    switch (action.type) {
        case "bugAdded" :
            retrun ([
                ...state,
                {
                    id: ++lastId,
                    description: actions.payload.description,
                    resolve: false
                }
            ])
        case "bugRemoved":
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state;
    }
}