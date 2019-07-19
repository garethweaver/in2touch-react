import { moveInArr } from '../helpers/helpers'

const blankState = {
  config: {
    updatedAt: 0,
    leaguesHash: null,
    teamDataHash: null,
    teamsHash: null,
  },
  user: {
    teams: [],
    leagues: [],
  },
  teams: null,
  leagues: null,
}


const initialState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : blankState

export default (state = initialState, action) => {
  switch(action.type) {

    case 'RESET_STORE':
      return {
        ...blankState
      }

    case 'SET_CONFIG':
      return {
        ...state,
        config: action.payload,
      }

    case 'DUMP_CACHES':
      const caches = {}
      for (let c of action.payload) {
        caches[c] = null
      }
      return {
        ...state,
        ...caches,
      }

    case 'SET_TEAMS_LIST':
      return {
        ...state,
        teams: action.payload
      }

    case 'SET_LEAGUES_LIST':
      return {
        ...state,
        leagues: action.payload
      }

    case 'ADD_TEAM':
      const teams = state.user.teams.find(x => x.id === action.payload.id)
        ? state.user.teams
        : state.user.teams.concat(action.payload)

      return {
        ...state,
        user: {
          ...state.user,
          teams: teams,
        }
      }

    case 'ADD_LEAGUE':
      const leagues = state.user.leagues.find(x => x.id === action.payload.id)
        ? state.user.leagues
        : state.user.leagues.concat(action.payload)

      return {
        ...state,
        user: {
          ...state.user,
          leagues: leagues,
        }
      }

    case 'REFRESH_SELECTED_LEAGUE':
      const li = state.user.leagues.findIndex(x => x.id === action.payload.id)
      const ls = [...state.user.leagues]
      ls[li] = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          leagues: ls,
        }
      }

    case 'REFRESH_SELECTED_TEAM':
      const ti = state.user.teams.findIndex(x => x.id === action.payload.id)
      const ts = [...state.user.teams]
      ts[ti] = action.payload
      return {
        ...state,
        user: {
          ...state.user,
          teams: ts,
        }
      }

    case 'REMOVE_USER_ITEM_BY_ID':
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.type]: state.user[action.payload.type]
            .filter(x => x.id !== action.payload.id),
        }
      }

    case 'REORDER_USER_ITEM_BY_ID':
      const u = [...state.user[action.payload.type]]
      const ui = u.findIndex(x => x.id === action.payload.id)

      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.type]: moveInArr(u, ui, ui + action.payload.direction),
        }
      }

    default:
      return state
  }
}
