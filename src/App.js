import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {setBoys, setGirls, setName, setProgress, resetProgress, switchTheme} from './reducers/appReducer.js';
import Styles from './Styles';
import data from './data/names.json';

const mapStateToProps = (state) => {
  return {
    theme: state.appState.theme,
    boys: state.appState.boys,
    girls: state.appState.girls,
    selection: state.appState.selection,
    progress: state.appState.progress
  }
};
const mapDispatchToProps = {
  setBoys, setGirls, setName, setProgress, resetProgress, switchTheme
};

const App = (props) => {
  let theme = setTheme(props.theme);
  useEffect(() => {
    let male = data.names.male.map(name => name.toString());
    let female = data.names.female.map(name => name.toString());
    props.setBoys(male);
    props.setGirls(female);
  }, []);
  function setTheme(theme) {
    switch (theme) {
      case 'light':
        return Styles().lightTheme;
      case 'normal':
        return Styles().normalTheme;
      case 'dark':
        return Styles().darkTheme;
      default:
        return Styles().normalTheme;
    }
  }
  function getName(gender) {
    if (gender === 'female') {
      props.setProgress('wait');
      const name = props.girls[Math.floor(Math.random()*props.girls.length)];
      props.setName(name);
      props.setProgress('female');
    } else {
      props.setProgress('wait');
      const name = props.boys[Math.floor(Math.random()*props.boys.length)];
      props.setName(name);
      props.setProgress('male');
    }
  }
  const MainView = () => {
    return (
      <div style={theme.view}>
        <h4>Click to get yourself a genuine Finnish name:</h4>
        <div>
          <button style={theme.boy} onClick={() => getName('male')}>Get a male name</button>
          <button style={theme.girl} onClick={() => getName('female')}>Get a female name</button>
        </div>
      </div>
    );
  };
  const GenderView = ({gender}) => {
    const genderTheme = gender === 'male' ? theme.boy : theme.girl;
    return (
      <div style={theme.view}>
        <h4 style={{color: genderTheme.color}}>Your Finnish name is:</h4>
        <h4 style={{color: genderTheme.color}}>{props.selection}</h4>
      </div>
    );
  };
  const WaitView = () => {
    return (
      <div style={theme.view}>
        <h4>Thinking . . .</h4>
      </div>
    );
  };
  const Footer = () => {
    return (
      <div style={theme.footer}>
        <p>Main technologies used:</p><p>Electron.js</p><p>React.js</p><p>Redux.js</p>
      </div>
    );
  };
  const Menu = () => {
    return (
      <div style={theme.menuRow}>
        <button type='button' style={theme.returnBack} onClick={() => props.resetProgress()}>{'< Start over'}</button>
        <div>
          Choose theme:
          <button type='button' onClick={() => props.switchTheme('light')} style={theme.themeSelector.light}>Light</button>
          <button type='button' onClick={() => props.switchTheme('normal')} style={theme.themeSelector.normal}>Medium</button>
          <button type='button' onClick={() => props.switchTheme('dark')} style={theme.themeSelector.dark}>Dark</button>
        </div>
      </div>
    );
  };
  function getView(step) {
    if (step === 'wait') {
      return <WaitView/>;
    } else if (step === 'male') {
      return <GenderView gender='male'/>;
    } else if (step === 'female') {
      return <GenderView gender='female'/>;
    } else {
      return <MainView/>;
    }
  }
  return (
    <div className="App" style={theme.appBackground}>
      <Menu/>
      <div style={theme.content}>
        {getView(props.progress)}
      </div>
      <Footer/>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
