import State from "../../../../repositories/entitees/dao/state";

class StateAssembler { 
    dao;
    constructor(dao: State[]) {
        this.dao = dao;
    }
    toDto() {
        return this.dao.map(state => ({
            id: state.id,
            value: state.value,
            label: state.label
        }));
    }
}

export default StateAssembler;