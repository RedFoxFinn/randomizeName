
const initialState = {
  theme: 'normal',
  boys: null,
  girls: null,
  selection: '',
  progress: 'main'
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SWITCH_THEME':
      return {...state, theme: action.theme};
    case 'SET_BOYS':
      return {...state, boys: action.boys};
    case 'SET_GIRLS':
      return {...state, girls: action.girls};
    case 'SET_NAME':
      return {...state, selection: action.name};
    case 'SET_PROGRESS':
      return {...state, progress: action.progress};
    case 'RESET':
      return {...state, progress: 'main', selection: ''};
    default:
      return state;
  }
};

export const switchTheme = (theme) => {
  switch (theme) {
    case 'light':
      return {
        type: 'SWITCH_THEME', theme: theme
      };
    case 'normal':
      return {
        type: 'SWITCH_THEME', theme: theme
      };
    case 'dark':
      return {
        type: 'SWITCH_THEME', theme: theme
      };
    default:
      return {
        type: 'SWITCH_THEME', theme: 'normal'
      };
  }
};
export const setBoys = (boys) => {
  return {
    type: 'SET_BOYS', boys: boys
  };
};
export const setGirls = (girls) => {
  return {
    type: 'SET_GIRLS', girls: girls
  };
};
export const setName = (name) => {
  return {
    type: 'SET_NAME', name: name
  };
};
export const setProgress = (step) => {
  return {
    type: 'SET_PROGRESS', progress: step
  };
};
export const resetProgress = () => {
  return {
    type: 'RESET'
  };
};

export default appReducer;