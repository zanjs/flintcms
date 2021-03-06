import update from 'immutability-helper';
import {
  REQUEST_ENTRIES,
  RECEIVE_ENTRIES,
  NEW_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
} from 'actions/entryActions';

export default function entries(state = {}, action) {
  switch (action.type) {

    case REQUEST_ENTRIES: {
      return {
        ...state,
        isFetching: true,
        didInvalidate: false,
      };
    }

    case RECEIVE_ENTRIES: {
      return {
        ...state,
        entries: action.entries,
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
      };
    }

    case NEW_ENTRY: {
      const entryIndex = state.entries.findIndex(entry => entry._id === action.addEntry._id);
      if (entryIndex !== -1) return state;

      return {
        ...state,
        entries: [
          ...state.entries,
          { ...action.addEntry, full: true },
        ],
      };
    }

    case DELETE_ENTRY: {
      const entryIndex = state.entries.findIndex(entry => entry._id === action.id);
      if (entryIndex === -1) return state;

      return {
        ...state,
        entries: [
          ...state.entries.slice(0, entryIndex),
          ...state.entries.slice(entryIndex + 1),
        ],
      };
    }

    case UPDATE_ENTRY: {
      const { _id } = action.updateEntry;
      const entryIndex = state.entries.findIndex(entry => entry._id === _id);
      if (entryIndex === -1) return state;

      return {
        ...state,
        entries: [
          ...state.entries.slice(0, entryIndex),
          update(state.entries[entryIndex], { $merge: { ...action.updateEntry, full: true } }),
          ...state.entries.slice(entryIndex + 1),
        ],
      };
    }

    default:
      return state;
  }
}
